import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';
import { highlightWord } from '../../../lib/highlight.js';

const ADMIN_EMAIL = 'snillsparv@gmail.com';
const NEW_MIN = 0, NEW_MAX = 40;
const REVIEW_MIN = 5, REVIEW_MAX = 250;
// Anki-lika lådor. Låda 0 = inlärning (förfaller samma dag, upprepas tills rätt).
// Låda 1+ = repetition med växande intervall i dagar.
const INTERVAL_DAYS: Record<number, number> = { 1: 1, 2: 3, 3: 7, 4: 16, 5: 35, 6: 90 };
// Låda -1 = överhoppat. Ordet lämnar ordlistan helt och kommer aldrig tillbaka.
const IGNORED_BOX = -1;
const clampRange = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, Math.round(Number(n) || 0)));

const WORD_COLS = 'm.id, m.word, m.definition, m.mnemonic, m.example, m.etymology, m.image, m.related';

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

function buildWord(r: any, isNew: boolean, allDefs: string[]) {
  const { options, correct } = buildOptions(r.definition, allDefs);
  return {
    id: r.id,
    word: r.word,
    definition: r.definition,
    mnemonic: r.mnemonic || '',
    example: r.example ? highlightWord(r.example, r.word) : '',
    etymology: r.etymology || '',
    image: r.image || '',
    related: r.related && Array.isArray(r.related.words) && r.related.words.length ? r.related : null,
    isNew,
    options,
    correct,
  };
}

async function definitionPool(): Promise<string[]> {
  const { rows } = await pool.query(`SELECT DISTINCT definition FROM mnemonic_words WHERE definition <> ''`);
  return rows.map((d: { definition: string }) => d.definition);
}

export const GET: APIRoute = async ({ request, url }) => {
  const user = await requireAdmin(request);
  if (!user) return json({ error: 'Unauthorized' }, 403);
  const action = url.searchParams.get('action') || 'session';

  const { rows: [settings] } = await pool.query(
    `SELECT COALESCE(learn_new_per, 10) AS new_per, COALESCE(learn_review_per, 100) AS review_per FROM users WHERE id = $1`,
    [user.id]
  );
  const newPer = clampRange(settings?.new_per ?? 10, NEW_MIN, NEW_MAX);
  const reviewPer = clampRange(settings?.review_per ?? 100, REVIEW_MIN, REVIEW_MAX);

  // Överhoppade ord räknas varken som inlärda eller som en del av ordlistan:
  // de har lämnat användarens lista helt.
  const { rows: [stats] } = await pool.query(
    `SELECT
       (SELECT COUNT(*) FROM word_progress WHERE user_id = $1 AND box >= 0)::int AS learned,
       (SELECT COUNT(*) FROM word_progress WHERE user_id = $1 AND box >= 0 AND due_at <= NOW())::int AS due,
       (SELECT COUNT(*) FROM word_progress WHERE user_id = $1 AND box >= 4)::int AS strong,
       (SELECT COUNT(*) FROM word_progress WHERE user_id = $1 AND box < 0)::int AS ignored,
       (SELECT COUNT(*) FROM mnemonic_words)::int AS words,
       (SELECT COUNT(*) FROM word_progress
          WHERE user_id = $1 AND box >= 0 AND created_at >= date_trunc('day', NOW()))::int AS today`,
    [user.id]
  );
  stats.total = stats.words - stats.ignored;
  // Ett pass per dag: dagens kvot nya ord minskar med de som redan tagits in.
  const newLeft = Math.max(0, newPer - stats.today);

  if (action === 'stats') return json({ stats, newLeft, settings: { newPer, reviewPer } });

  const { rows: dueRows } = await pool.query(
    `SELECT ${WORD_COLS}, wp.box
     FROM word_progress wp JOIN mnemonic_words m ON m.id = wp.word_id
     WHERE wp.user_id = $1 AND wp.box >= 0 AND wp.due_at <= NOW()
     ORDER BY wp.due_at LIMIT $2`,
    [user.id, reviewPer]
  );

  const { rows: newRows } = newLeft > 0
    ? await pool.query(
        `SELECT ${WORD_COLS}
         FROM mnemonic_words m
         WHERE NOT EXISTS (SELECT 1 FROM word_progress wp WHERE wp.user_id = $1 AND wp.word_id = m.id)
         ORDER BY m.position, m.id LIMIT $2`,
        [user.id, newLeft]
      )
    : { rows: [] };

  const allDefs = await definitionPool();
  const session = [
    ...newRows.map((r: any) => buildWord(r, true, allDefs)),
    ...dueRows.map((r: any) => buildWord(r, false, allDefs)),
  ];
  return json({
    stats, session, newLeft,
    newCount: newRows.length, dueCount: dueRows.length,
    settings: { newPer, reviewPer },
  });
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
    if (cur && cur.box < 0) return json({ ok: true, box: cur.box, days: 0 });
    const curBox = cur ? cur.box : 0; // nytt ord = låda 0
    // Rätt -> nästa låda. Fel -> tillbaka till låda 0 (förfaller genast,
    // upprepas samma dag tills det sitter).
    const newBox = correct ? Math.min(curBox + 1, 6) : 0;
    const days = newBox === 0 ? 0 : (INTERVAL_DAYS[newBox] || 1);
    const lapse = correct ? 0 : 1;
    await pool.query(
      `INSERT INTO word_progress (user_id, word_id, box, due_at, reps, lapses)
       VALUES ($1, $2, $3, NOW() + ($4 * interval '1 day'), 1, $5)
       ON CONFLICT (user_id, word_id) DO UPDATE SET
         box = $3,
         due_at = NOW() + ($4 * interval '1 day'),
         reps = word_progress.reps + 1,
         lapses = word_progress.lapses + $5,
         updated_at = NOW()`,
      [user.id, wordId, newBox, days, lapse]
    );
    return json({ ok: true, box: newBox, days });
  }

  // "Kan redan": ordet lämnar listan för gott och ersätts av nästa nya ord, så
  // att passet ändå innehåller så många nya ord som man har ställt in.
  if (body.action === 'ignore') {
    const wordId = Number(body.wordId);
    if (!Number.isInteger(wordId)) return json({ error: 'Ogiltigt ord' }, 400);
    const have = Array.isArray(body.have)
      ? body.have.map((n: unknown) => Number(n)).filter((n: number) => Number.isInteger(n))
      : [];
    await pool.query(
      `INSERT INTO word_progress (user_id, word_id, box, due_at, reps, lapses)
       VALUES ($1, $2, $3, NOW() + interval '100 years', 0, 0)
       ON CONFLICT (user_id, word_id) DO UPDATE SET
         box = $3, due_at = NOW() + interval '100 years', updated_at = NOW()`,
      [user.id, wordId, IGNORED_BOX]
    );
    const { rows } = await pool.query(
      `SELECT ${WORD_COLS}
       FROM mnemonic_words m
       WHERE NOT EXISTS (SELECT 1 FROM word_progress wp WHERE wp.user_id = $1 AND wp.word_id = m.id)
         AND NOT (m.id = ANY($2::int[]))
       ORDER BY m.position, m.id LIMIT 1`,
      [user.id, have]
    );
    const replacement = rows.length ? buildWord(rows[0], true, await definitionPool()) : null;
    return json({ ok: true, replacement });
  }

  // Testhjälpmedel (endast admin): flytta fram tiden så repetitioner blir
  // aktuella. Även created_at flyttas, annars ligger dagens kvot nya ord kvar.
  if (body.action === 'simulate_day') {
    const days = Math.max(1, Math.min(90, Number(body.days) || 1));
    await pool.query(
      `UPDATE word_progress SET
         due_at = due_at - ($2 * interval '1 day'),
         created_at = created_at - ($2 * interval '1 day')
       WHERE user_id = $1`,
      [user.id, days]
    );
    return json({ ok: true });
  }

  if (body.action === 'reset') {
    await pool.query('DELETE FROM word_progress WHERE user_id = $1', [user.id]);
    return json({ ok: true });
  }

  if (body.action === 'settings') {
    const newPer = clampRange(body.newPer, NEW_MIN, NEW_MAX);
    const reviewPer = clampRange(body.reviewPer, REVIEW_MIN, REVIEW_MAX);
    await pool.query('UPDATE users SET learn_new_per = $2, learn_review_per = $3 WHERE id = $1', [user.id, newPer, reviewPer]);
    return json({ ok: true, settings: { newPer, reviewPer } });
  }

  return json({ error: 'Invalid action' }, 400);
};
