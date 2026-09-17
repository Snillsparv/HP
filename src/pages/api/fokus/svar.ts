import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';
import { fragaMedId, golvTyp } from '../../../lib/fokus/fragebank.js';
import { nyligenBesvarad, hamtaHandelser, forStyrka } from '../../../lib/fokus/historik.js';
import { beraknaTypStyrkor } from '../../../lib/fokus/styrka.js';
import { rangTyp } from '../../../lib/fokus/typer.js';

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

/** POST /api/fokus/svar { questionId, chosen, timeMs, lage, rundaId, position }.
 * Rättar på servern och svarar med facit, förklaring och styrkan för typen
 * efter svaret. Sparar händelsen om det finns en session (gäst eller
 * inloggad); utan session rättas bara. lage 'overtid' är provlöparnas svar
 * efter tiden och räknas som rundsvar. */
export const POST: APIRoute = async ({ request }) => {
  let body: any;
  try { body = await request.json(); } catch { return json({ error: 'ogiltig_json' }, 400); }
  const q = typeof body?.questionId === 'string' ? fragaMedId(body.questionId) : undefined;
  if (!q) return json({ error: 'okand_fraga' }, 400);
  const chosen: number | null = body.chosen === null || body.chosen === undefined ? null : body.chosen;
  if (chosen !== null && (typeof chosen !== 'number' || !Number.isInteger(chosen) || chosen < 0 || chosen >= q.options.length)) return json({ error: 'ogiltigt_svar' }, 400);
  const timeMs = typeof body.timeMs === 'number' && Number.isFinite(body.timeMs) ? Math.max(0, Math.min(3600_000, Math.round(body.timeMs))) : null;
  const correct = chosen !== null && chosen === q.correct;

  const user = await getSessionFromCookies(request.headers.get('cookie'));
  let sparad = false;
  let omforsok = false;
  let styrkaEfter: { typ: string; styrka: number; antal: number; effektivt: number; osaker: boolean } | null = null;
  if (user) {
    const lage = typeof body.lage === 'string' && /^[a-z]{1,20}$/.test(body.lage) ? body.lage : null;
    const rundaId = typeof body.rundaId === 'string' && /^[a-zA-Z0-9-]{1,40}$/.test(body.rundaId) ? body.rundaId : null;
    const position = Number.isInteger(body.position) && body.position >= 0 && body.position < 1000 ? body.position : null;
    // Samma fråga igen inom ett dygn sparas som omförsök och räknas inte i styrkan.
    omforsok = await nyligenBesvarad(user.id, q.id);
    const source = omforsok ? 'omforsok' : lage === 'snabbkoll' ? 'snabbkoll' : lage === 'overtid' ? 'overtid' : 'fokus';
    await pool.query(
      `INSERT INTO question_events (user_id, question_id, delprov, typ, chosen, correct, time_ms, source, lage, runda_id, position)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
      [user.id, q.id, q.delprov, q.typ, chosen, correct, timeMs, source, lage, rundaId, position]
    );
    sparad = true;
    if (lage !== 'overtid') {
      const s = beraknaTypStyrkor(forStyrka(await hamtaHandelser(user.id))).get(rangTyp(golvTyp(q.typ)));
      if (s) styrkaEfter = { typ: s.typ, styrka: s.styrka, antal: s.antal, effektivt: s.effektivt, osaker: s.osaker };
    }
  }
  return json({ correct: q.correct, ratt: correct, explanation: q.explanation || null, videoId: q.videoId || null, sparad, omforsok, styrkaEfter });
};
