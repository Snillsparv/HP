import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';
import notation from '../../../lib/uttal-notation.json';

const ADMIN_EMAIL = 'snillsparv@gmail.com';
const MAX_BYTES = 2 * 1024 * 1024;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

async function requireAdmin(request: Request) {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user || user.email !== ADMIN_EMAIL) return null;
  return user;
}

export const GET: APIRoute = async ({ request }) => {
  if (!(await requireAdmin(request))) return json({ error: 'Endast admin' }, 403);
  const url = new URL(request.url);
  const action = url.searchParams.get('action') || 'list';

  if (action === 'list') {
    // Samma ordning som orden släpps i träningen: position, sedan id.
    const { rows } = await pool.query(`
      SELECT m.id, m.word, m.definition, p.dur_ms, (p.word_id IS NOT NULL) AS has_audio
      FROM mnemonic_words m
      LEFT JOIN word_pron p ON p.word_id = m.id
      ORDER BY m.position, m.id
    `);
    const not_ = notation as Record<string, { n: string; k: string }>;
    const words = rows.map(r => ({
      id: r.id,
      w: r.word,
      d: r.definition,
      n: not_[r.word]?.n || '',
      k: not_[r.word]?.k || '',
      a: r.has_audio,
      ms: r.dur_ms || 0,
    }));
    return json({ words });
  }

  if (action === 'audio') {
    const id = Number(url.searchParams.get('id'));
    if (!id) return json({ error: 'id saknas' }, 400);
    const { rows } = await pool.query('SELECT mime, data FROM word_pron WHERE word_id = $1', [id]);
    if (!rows.length) return json({ error: 'Inget ljud' }, 404);
    return new Response(rows[0].data, {
      headers: { 'Content-Type': rows[0].mime, 'Cache-Control': 'no-store' },
    });
  }

  return json({ error: 'Okänd action' }, 400);
};

export const POST: APIRoute = async ({ request }) => {
  if (!(await requireAdmin(request))) return json({ error: 'Endast admin' }, 403);
  const body = await request.json().catch(() => null);
  if (!body) return json({ error: 'Ogiltig JSON' }, 400);

  if (body.action === 'delete') {
    const id = Number(body.id);
    if (!id) return json({ error: 'id saknas' }, 400);
    await pool.query('DELETE FROM word_pron WHERE word_id = $1', [id]);
    return json({ ok: true });
  }

  const id = Number(body.id);
  const mime = String(body.mime || '');
  const durMs = Math.max(0, Math.min(60000, Number(body.durMs) || 0));
  if (!id || !mime.startsWith('audio/') || typeof body.data !== 'string') {
    return json({ error: 'id, mime eller data saknas' }, 400);
  }
  const data = Buffer.from(body.data, 'base64');
  if (!data.length || data.length > MAX_BYTES) return json({ error: 'Fel storlek på ljudet' }, 400);

  await pool.query(
    `INSERT INTO word_pron (word_id, mime, data, dur_ms, updated_at)
     VALUES ($1, $2, $3, $4, NOW())
     ON CONFLICT (word_id) DO UPDATE
       SET mime = EXCLUDED.mime, data = EXCLUDED.data,
           dur_ms = EXCLUDED.dur_ms, updated_at = NOW()`,
    [id, mime, data, durMs]
  );
  return json({ ok: true });
};
