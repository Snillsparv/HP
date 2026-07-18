import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';

const ADMIN_EMAIL = 'snillsparv@gmail.com';
const VALID_STATUS = ['unreviewed', 'ok', 'needs_work'];

export const GET: APIRoute = async ({ request }) => {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user || user.email !== ADMIN_EMAIL) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 403 });
  }

  const { rows } = await pool.query(
    'SELECT id, word, definition, mnemonic, extra, position, status, note, example, etymology FROM mnemonic_words ORDER BY position, id'
  );
  return new Response(JSON.stringify({ count: rows.length, words: rows }), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user || user.email !== ADMIN_EMAIL) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 403 });
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Ogiltig JSON' }), { status: 400 });
  }

  try {
    if (body.action === 'import') {
      if (!Array.isArray(body.words) || body.words.length === 0) {
        return new Response(JSON.stringify({ error: 'Inga ord att importera' }), { status: 400 });
      }
      if (body.words.length > 5000) {
        return new Response(JSON.stringify({ error: 'För många rader (max 5000)' }), { status: 400 });
      }

      const clean: { word: string; definition: string; mnemonic: string; extra: Record<string, string> | null }[] = [];
      for (const it of body.words) {
        const word = typeof it?.word === 'string' ? it.word.trim().slice(0, 200) : '';
        if (!word) continue;
        let extra: Record<string, string> | null = null;
        if (it.extra && typeof it.extra === 'object' && !Array.isArray(it.extra)) {
          const entries = Object.entries(it.extra)
            .filter(([, v]) => typeof v === 'string' && (v as string).trim() !== '')
            .slice(0, 12)
            .map(([k, v]) => [String(k).slice(0, 100), (v as string).trim().slice(0, 5000)]);
          if (entries.length) extra = Object.fromEntries(entries);
        }
        clean.push({
          word,
          definition: typeof it.definition === 'string' ? it.definition.trim().slice(0, 5000) : '',
          mnemonic: typeof it.mnemonic === 'string' ? it.mnemonic.trim().slice(0, 5000) : '',
          extra,
        });
      }
      if (clean.length === 0) {
        return new Response(JSON.stringify({ error: 'Inga rader innehöll något ord' }), { status: 400 });
      }

      // 'sync' = importen är hela arket: positioner följer importen och ord som
      // saknas tas bort. 'merge' (default) rör aldrig befintlig ordning eller
      // befintliga ord — nya ord läggs sist.
      const mode = body.mode === 'sync' ? 'sync' : 'merge';

      const client = await pool.connect();
      let inserted = 0;
      let updated = 0;
      let removed = 0;
      try {
        await client.query('BEGIN');
        const { rows: [{ base }] } = await client.query(
          'SELECT COALESCE(MAX(position), -1) + 1 AS base FROM mnemonic_words'
        );
        for (let i = 0; i < clean.length; i++) {
          const w = clean[i];
          const { rows } = await client.query(
            `INSERT INTO mnemonic_words (word, definition, mnemonic, extra, position)
             VALUES ($1, $2, $3, $4, $5)
             ON CONFLICT (lower(word)) DO UPDATE SET
               word = EXCLUDED.word,
               definition = CASE WHEN EXCLUDED.definition <> '' THEN EXCLUDED.definition ELSE mnemonic_words.definition END,
               mnemonic = CASE WHEN EXCLUDED.mnemonic <> '' THEN EXCLUDED.mnemonic ELSE mnemonic_words.mnemonic END,
               extra = COALESCE(EXCLUDED.extra, mnemonic_words.extra),
               position = ${mode === 'sync' ? 'EXCLUDED.position' : 'mnemonic_words.position'},
               updated_at = NOW()
             RETURNING (xmax = 0) AS inserted`,
            [w.word, w.definition, w.mnemonic, w.extra ? JSON.stringify(w.extra) : null, mode === 'sync' ? i : Number(base) + i]
          );
          if (rows[0].inserted) inserted++; else updated++;
        }
        if (mode === 'sync') {
          const del = await client.query(
            'DELETE FROM mnemonic_words WHERE NOT (lower(word) = ANY($1))',
            [clean.map(w => w.word.toLowerCase())]
          );
          removed = del.rowCount || 0;
        }
        await client.query('COMMIT');
      } catch (e) {
        await client.query('ROLLBACK');
        throw e;
      } finally {
        client.release();
      }

      return new Response(JSON.stringify({ ok: true, inserted, updated, removed, total: clean.length }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (body.action === 'review') {
      const id = Number(body.id);
      const hasStatus = typeof body.status === 'string';
      const hasNote = typeof body.note === 'string';
      if (!Number.isInteger(id) || (!hasStatus && !hasNote) || (hasStatus && !VALID_STATUS.includes(body.status))) {
        return new Response(JSON.stringify({ error: 'Ogiltig förfrågan' }), { status: 400 });
      }
      const { rowCount } = await pool.query(
        'UPDATE mnemonic_words SET status = COALESCE($1, status), note = COALESCE($2, note), updated_at = NOW() WHERE id = $3',
        [hasStatus ? body.status : null, hasNote ? body.note.slice(0, 2000) : null, id]
      );
      if (!rowCount) {
        return new Response(JSON.stringify({ error: 'Ordet finns inte' }), { status: 404 });
      }
      return new Response(JSON.stringify({ ok: true }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (body.action === 'clear') {
      await pool.query('DELETE FROM mnemonic_words');
      return new Response(JSON.stringify({ ok: true }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Invalid action' }), { status: 400 });
  } catch {
    return new Response(JSON.stringify({ error: 'Något gick fel' }), { status: 500 });
  }
};
