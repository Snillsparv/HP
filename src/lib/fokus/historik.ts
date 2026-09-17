// Användarens svarshistorik för fokuserad träning: träningshändelser i
// question_events plus provresultaten i test_results, som räknas om till
// händelser per fråga via frågebanken. Bara för servern.
import pool from '../db.js';
import { fragorForTest } from './fragebank.js';
import type { Handelse } from './styrka.js';

export const SEDD_DAGAR = 30;
export const REPETERA_DAGAR = 3;
/** Ett svar på en fråga som besvarats de senaste timmarna är ett omförsök:
 * det sparas (source 'omforsok') men räknas inte i styrkan, eftersom det
 * mäter minnet av facit snarare än kunskap. */
export const OMFORSOK_TIMMAR = 24;

/** Har användaren besvarat frågan de senaste timmarna (i träningen)? */
export async function nyligenBesvarad(userId: number, questionId: string): Promise<boolean> {
  const { rows } = await pool.query(
    `SELECT 1 FROM question_events WHERE user_id = $1 AND question_id = $2
     AND created_at > NOW() - ($3 || ' hours')::interval LIMIT 1`,
    [userId, questionId, String(OMFORSOK_TIMMAR)]
  );
  return rows.length > 0;
}

/** Händelserna som ska räknas i styrkan: inte omförsök. */
export function forStyrka(handelser: Handelse[]): Handelse[] {
  return handelser.filter(h => !h.omforsok);
}

/** Alla händelser för en användare, nyast först. */
export async function hamtaHandelser(userId: number): Promise<Handelse[]> {
  const handelser: Handelse[] = [];

  const { rows: events } = await pool.query(
    `SELECT question_id, delprov, typ, correct, source, created_at
     FROM question_events WHERE user_id = $1`,
    [userId]
  );
  for (const r of events) {
    handelser.push({
      questionId: r.question_id,
      delprov: r.delprov,
      typ: r.typ,
      correct: !!r.correct,
      utanTid: r.source === 'overtid',
      omforsok: r.source === 'omforsok',
      createdAt: new Date(r.created_at),
    });
  }

  const { rows: results } = await pool.query(
    `SELECT test_id, answers, created_at FROM test_results WHERE user_id = $1`,
    [userId]
  );
  for (const r of results) {
    const fragor = fragorForTest(r.test_id);
    if (!fragor.length) continue;
    const svar: unknown[] = Array.isArray(r.answers) ? r.answers : (typeof r.answers === 'string' ? JSON.parse(r.answers) : []);
    const nar = new Date(r.created_at);
    svar.forEach((a, i) => {
      if (a === null || a === undefined || i >= fragor.length) return;
      const q = fragor[i];
      handelser.push({
        questionId: q.id,
        delprov: q.delprov,
        typ: q.typ,
        correct: Number(a) === q.correct,
        createdAt: nar,
      });
    });
  }

  handelser.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  return handelser;
}

/** När varje fråga senast besvarades. */
export function senastSedd(handelser: Handelse[]): Map<string, Date> {
  const m = new Map<string, Date>();
  for (const h of handelser) {
    const f = m.get(h.questionId);
    if (!f || f.getTime() < h.createdAt.getTime()) m.set(h.questionId, h.createdAt);
  }
  return m;
}

/** Fråge-id som setts de senaste dagarna. */
export function seddaNyligen(handelser: Handelse[], dagar = SEDD_DAGAR, nu = new Date()): Set<string> {
  const grans = nu.getTime() - dagar * 24 * 3600 * 1000;
  const s = new Set<string>();
  for (const h of handelser) if (h.createdAt.getTime() >= grans) s.add(h.questionId);
  return s;
}

/** Fråge-id som användaren senast hade fel på, för minst några dagar sedan,
 * och inte fått rätt på sedan dess: kandidater för återbesök. */
export function attRepetera(handelser: Handelse[], dagar = REPETERA_DAGAR, nu = new Date()): Set<string> {
  const grans = nu.getTime() - dagar * 24 * 3600 * 1000;
  const senaste = new Map<string, Handelse>();
  for (const h of handelser) {
    // Listan är nyast först, så första träffen per fråga är den senaste.
    if (!senaste.has(h.questionId)) senaste.set(h.questionId, h);
  }
  const s = new Set<string>();
  for (const [id, h] of senaste) if (!h.correct && h.createdAt.getTime() <= grans) s.add(id);
  return s;
}
