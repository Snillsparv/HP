import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';
import { fragaMedId } from '../../../lib/fokus/fragebank.js';
import { nyligenBesvarad } from '../../../lib/fokus/historik.js';

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

/** POST /api/fokus/svar { questionId, chosen, timeMs }.
 * Rättar på servern och svarar med facit och förklaring. Sparar händelsen
 * om det finns en session (gäst eller inloggad); utan session rättas bara. */
export const POST: APIRoute = async ({ request }) => {
  let body: any;
  try { body = await request.json(); } catch { return json({ error: 'ogiltig_json' }, 400); }
  const q = typeof body?.questionId === 'string' ? fragaMedId(body.questionId) : undefined;
  if (!q) return json({ error: 'okand_fraga' }, 400);
  const chosen = body.chosen === null || body.chosen === undefined ? null : Number(body.chosen);
  if (chosen !== null && (!Number.isInteger(chosen) || chosen < 0 || chosen >= q.options.length)) return json({ error: 'ogiltigt_svar' }, 400);
  const timeMs = Number.isFinite(Number(body.timeMs)) ? Math.max(0, Math.min(3600_000, Math.round(Number(body.timeMs)))) : null;
  const correct = chosen !== null && chosen === q.correct;

  const user = await getSessionFromCookies(request.headers.get('cookie'));
  let sparad = false;
  let omforsok = false;
  if (user) {
    // Samma fråga igen inom ett dygn sparas som omförsök och räknas inte i styrkan.
    omforsok = await nyligenBesvarad(user.id, q.id);
    await pool.query(
      `INSERT INTO question_events (user_id, question_id, delprov, typ, chosen, correct, time_ms, source)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [user.id, q.id, q.delprov, q.typ, chosen, correct, timeMs, omforsok ? 'omforsok' : 'fokus']
    );
    sparad = true;
  }
  return json({ correct: q.correct, ratt: correct, explanation: q.explanation || null, videoId: q.videoId || null, sparad, omforsok });
};
