import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';
import { highlightWord } from '../../../lib/highlight.js';

const ADMIN_EMAIL = 'snillsparv@gmail.com';
const NEW_PER_SESSION = 10;
const DUE_LIMIT = 20;
// Leitner-lådor -> repetitionsintervall i dagar.
const INTERVAL_DAYS: Record<number, number> = { 1: 1, 2: 3, 3: 7, 4: 14, 5: 30, 6: 90 };

const clampBox = (b: number) => Math.max(1, Math.min(6, b));
const intervalDays = (box: number) => INTERVAL_DAYS[clampBox(box)] || 1;

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}

async function requireAdmin(request: Request) {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user || user.email !== ADMIN_EMAIL) return null;
  return user;
}

// Bygg fem svarsalternativ: rätt definition + fyra riktiga men felaktiga.
function buildOptions(correct: string, pool: string[]): { options: string[]; correct: string } {
  const wrong: string[] = [];
  const seen = new Set([correct.toLowerCase()]);
  let guard = 0;
  while (wrong.length < 4 && guard < 400) {
    guard++;
    const cand = pool[Math.floor(Math.random() * pool.length)];
    if (cand && !seen.has(cand.toLowerCase())) { seen.add(cand.toLowerCase()); wrong.push(cand); }
  }
  const options = [correct, ...wrong];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return { options, correct };
}

export const GET: APIRoute = async ({ request, url }) => {
  const user = await requireAdmin(request);
  if (!user) return json({ error: 'Unauthorized' }, 403);
  const action = url.searchParams.get('action') || 'session';

  const { rows: [stats] } = await pool.query(
    `SELECT
       (SELECT COUNT(*) FROM word_progress WHERE user_id = $1)::int AS learned,
       (SELECT COUNT(*) FROM word_progress WHERE user_id = $1 AND due_at <= NOW())::int AS due,
       (SELECT COUNT(*) FROM word_progress WHERE user_id = $1 AND box >= 4)::int AS strong,
       (SELECT COUNT(*) FROM mnemonic_words)::int AS total`,
    [user.id]
  );

  if (action === 'stats') return json({ stats });

  const { rows: dueRows } = await pool.query(
    `SELECT m.id, m.word, m.definition, m.mnemonic, m.example, m.etymology, m.image, wp.box
     FROM word_progress wp JOIN mnemonic_words m ON m.id = wp.word_id
     WHERE wp.user_id = $1 AND wp.due_at <= NOW()
     ORDER BY wp.due_at LIMIT $2`,
    [user.id, DUE_LIMIT]
  );

  const { rows: newRows } = await pool.query(
    `SELECT m.id, m.word, m.definition, m.mnemonic, m.example, m.etymology, m.image
     FROM mnemonic_words m
     WHERE NOT EXISTS (SELECT 1 FROM word_progress wp WHERE wp.user_id = $1 AND wp.word_id = m.id)
     ORDER BY m.position, m.id LIMIT $2`,
    [user.id, NEW_PER_SESSION]
  );

  const { rows: defRows } = await pool.query(
    `SELECT DISTINCT definition FROM mnemonic_words WHERE definition <> ''`
  );
  const allDefs = defRows.map((d: { definition: string }) => d.definition);

  const build = (r: any, isNew: boolean) => {
    const { options, correct } = buildOptions(r.definition, allDefs);
    return {
      id: r.id,
      word: r.word,
      definition: r.definition,
      mnemonic: r.mnemonic || '',
      example: r.example ? highlightWord(r.example, r.word) : '',
      etymology: r.etymology || '',
      image: r.image || '',
      isNew,
      options,
      correct,
    };
  };

  const session = [...newRows.map((r: any) => build(r, true)), ...dueRows.map((r: any) => build(r, false))];
  return json({ stats, session, newCount: newRows.length, dueCount: dueRows.length });
};

export const POST: APIRoute = async ({ request }) => {
  const user = await requireAdmin(request);
  if (!user) return json({ error: 'Unauthorized' }, 403);

  let body: any;
  try { body = await request.json(); } catch { return json({ error: 'Ogiltig JSON' }, 400); }

  if (body.action === 'grade') {
    const wordId = Number(body.wordId);
    const correct = !!body.correct;
    if (!Number.isInteger(wordId)) return json({ error: 'Ogiltigt ord' }, 400);

    const { rows: [cur] } = await pool.query(
      'SELECT box FROM word_progress WHERE user_id = $1 AND word_id = $2',
      [user.id, wordId]
    );
    const curBox = cur ? cur.box : 1;
    const newBox = correct ? clampBox(curBox + 1) : 1;
    const days = intervalDays(newBox);
    await pool.query(
      `INSERT INTO word_progress (user_id, word_id, box, due_at, reps, lapses)
       VALUES ($1, $2, $3, NOW() + ($4 * interval '1 day'), 1, $5)
       ON CONFLICT (user_id, word_id) DO UPDATE SET
         box = $3,
         due_at = NOW() + ($4 * interval '1 day'),
         reps = word_progress.reps + 1,
         lapses = word_progress.lapses + $5,
         updated_at = NOW()`,
      [user.id, wordId, newBox, days, correct ? 0 : 1]
    );
    return json({ ok: true, box: newBox, days });
  }

  // Testhjälpmedel (endast admin): flytta fram tiden så repetitioner blir aktuella.
  if (body.action === 'simulate_day') {
    const days = Math.max(1, Math.min(90, Number(body.days) || 1));
    await pool.query(
      `UPDATE word_progress SET due_at = due_at - ($2 * interval '1 day') WHERE user_id = $1`,
      [user.id, days]
    );
    return json({ ok: true });
  }

  if (body.action === 'reset') {
    await pool.query('DELETE FROM word_progress WHERE user_id = $1', [user.id]);
    return json({ ok: true });
  }

  return json({ error: 'Invalid action' }, 400);
};
