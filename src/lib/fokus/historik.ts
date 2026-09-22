// Användarens svarshistorik för fokuserad träning: träningshändelser i
// question_events plus provresultaten i test_results, som räknas om till
// händelser per fråga via frågebanken. Bara för servern.
import pool from '../db.js';
import { fragorForTest, fragaMedId, golvTyp } from './fragebank.js';
import { rangTyp } from './typer.js';
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

/** Finns ett sparat provresultat för test_id? (för knappen Tillbaka till rättningen) */
export async function harProvresultat(userId: number, testId: string): Promise<boolean> {
  const { rows } = await pool.query('SELECT 1 FROM test_results WHERE user_id = $1 AND test_id = $2 LIMIT 1', [userId, testId]);
  return rows.length > 0;
}

/** Händelserna som ska räknas i styrkan: inte omförsök, typer under golvet
 * räknas som "<delprov>:ovrigt" och MEK som en typ. */
export function forStyrka(handelser: Handelse[]): Handelse[] {
  return handelser.filter(h => !h.omforsok).map(h => ({ ...h, typ: rangTyp(golvTyp(h.typ)) }));
}

/** Alla händelser för en användare, nyast först. Provsvar kommer ur
 * test_results (obesvarade frågor räknas som fel med halv vikt), rundsvar
 * och övertidssvar ur question_events. */
export async function hamtaHandelser(userId: number): Promise<Handelse[]> {
  const handelser: Handelse[] = [];

  const { rows: events } = await pool.query(
    `SELECT question_id, delprov, typ, correct, source, created_at
     FROM question_events WHERE user_id = $1`,
    [userId]
  );
  const overtid = new Set<string>();
  for (const r of events) {
    // Typen hämtas ur banken så att gamla händelser följer med om typer byter namn.
    const q = fragaMedId(r.question_id);
    if (r.source === 'overtid') overtid.add(r.question_id);
    handelser.push({
      questionId: r.question_id,
      delprov: q?.delprov || r.delprov,
      typ: q?.typ || r.typ,
      correct: !!r.correct,
      kalla: 'runda',
      grupp: q?.grupp ?? null,
      utanTid: r.source === 'overtid',
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
    for (let i = 0; i < fragor.length; i++) {
      const q = fragor[i];
      const a = i < svar.length ? svar[i] : null;
      const obesvarad = a === null || a === undefined;
      // Övertidssvaret ersätter regeln om obesvarad fråga.
      if (obesvarad && overtid.has(q.id)) continue;
      handelser.push({
        questionId: q.id,
        delprov: q.delprov,
        typ: q.typ,
        correct: !obesvarad && Number(a) === q.correct,
        kalla: 'prov',
        grupp: q.grupp,
        obesvarad,
        createdAt: nar,
      });
    }
  }

  handelser.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  markeraRepetitioner(handelser);
  return handelser;
}

/** Sätter omforsok på svar med ett tidigare svar på samma fråga inom
 * OMFORSOK_TIMMAR (räknas inte) och repetition inom SEDD_DAGAR (halv vikt),
 * oavsett om svaren kommer från prov eller rundor. Listan ska vara sorterad
 * nyast först. */
export function markeraRepetitioner(handelser: Handelse[], dagar = SEDD_DAGAR, timmar = OMFORSOK_TIMMAR) {
  const fonster = dagar * 24 * 3600 * 1000;
  const dygn = timmar * 3600 * 1000;
  const perFraga = new Map<string, Handelse[]>();
  for (const h of handelser) {
    const lista = perFraga.get(h.questionId) || [];
    lista.push(h);
    perFraga.set(h.questionId, lista);
  }
  for (const lista of perFraga.values()) {
    // Nyast först: ett svar är repetition om nästa (äldre) svar ligger inom fönstret.
    for (let i = 0; i + 1 < lista.length; i++) {
      const gap = lista[i].createdAt.getTime() - lista[i + 1].createdAt.getTime();
      if (gap <= dygn) lista[i].omforsok = true;
      else if (gap <= fonster) lista[i].repetition = true;
    }
  }
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

/** Fråge-id som setts de senaste dagarna (obesvarade i ett prov räknas som sedda). */
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
  for (const [id, h] of senaste) if (!h.correct && !h.obesvarad && h.createdAt.getTime() <= grans) s.add(id);
  return s;
}

/** Senaste svaret per typ, för kontrollhinken (gröna typer som inte setts på länge). */
export function senastPerTyp(handelser: Handelse[]): Map<string, Date> {
  const m = new Map<string, Date>();
  for (const h of handelser) {
    const t = rangTyp(golvTyp(h.typ));
    const f = m.get(t);
    if (!f || f.getTime() < h.createdAt.getTime()) m.set(t, h.createdAt);
  }
  return m;
}
