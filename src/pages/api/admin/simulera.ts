// Adminverktyg: lägger in simulerade provpass i admins eget konto, så att
// hjärnkartan och rättningen går att se med realistiska data utan att göra
// proven. Resultaten märks som simulerade och kan tas bort igen.
import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';
import { fragorForTest } from '../../../lib/fokus/fragebank.js';

const ADMIN_EMAIL = 'snillsparv@gmail.com';

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

/** Andel rätt per delprov eller per typ (typ går före delprov). */
type Profil = Record<string, number>;

interface SimPass {
  testId: string;
  dagarSedan: number;
  profil: Profil;
}

// En elev runt 1,0: stark på ORD och KVA, svag på MEK, NOG och DTK, med
// geometri som tydlig lucka i XYZ. Det senaste passet (nu) är ett
// kvantitativt pass där XYZ och NOG gick bättre än förra gången.
const PASS: SimPass[] = [
  { testId: 'extra-ht2024-1', dagarSedan: 12, profil: { xyz: 0.45, 'xyz:geometri': 0.2, kva: 0.7, nog: 0.34, dtk: 0.5 } },
  { testId: 'extra-ht2024-3', dagarSedan: 6, profil: { ord: 0.8, las: 0.6, mek: 0.4 } },
  { testId: 'extra-ht2025-1', dagarSedan: 0, profil: { xyz: 0.85, 'xyz:geometri': 0.15, kva: 0.7, nog: 0.67, dtk: 0.45 } },
];

/** Deterministisk slump per fråga, så att samma simulering ger samma svar. */
function slumptal(fro: string): number {
  let h = 2166136261;
  for (let i = 0; i < fro.length; i++) h = Math.imul(h ^ fro.charCodeAt(i), 16777619);
  h = Math.imul(h ^ (h >>> 15), 2246822507);
  h = Math.imul(h ^ (h >>> 13), 3266489909);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

function simuleraSvar(p: SimPass): { answers: (number | null)[]; score: number } {
  const fragor = fragorForTest(p.testId);
  let score = 0;
  const answers = fragor.map(q => {
    const andel = p.profil[q.typ] ?? p.profil[q.delprov] ?? 0.6;
    const ratt = slumptal(q.id) < andel;
    if (ratt) score++;
    return ratt ? q.correct : (q.correct + 1 + Math.floor(slumptal(q.id + 'x') * (q.options.length - 1))) % q.options.length;
  });
  return { answers, score };
}

export const POST: APIRoute = async ({ request }) => {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user || user.email !== ADMIN_EMAIL) return json({ error: 'Unauthorized' }, 403);

  let atgard = '';
  try { atgard = String((await request.json())?.atgard || ''); } catch {}

  if (atgard === 'ta-bort') {
    const { rowCount } = await pool.query('DELETE FROM test_results WHERE user_id = $1 AND simulerad', [user.id]);
    return json({ ok: true, borttagna: rowCount ?? 0 });
  }
  if (atgard !== 'skapa') return json({ error: 'Okänd åtgärd' }, 400);

  // Börja om: ta bort tidigare simulerade pass så att verktyget kan köras flera gånger.
  await pool.query('DELETE FROM test_results WHERE user_id = $1 AND simulerad', [user.id]);
  let senaste: { id: number; testId: string } | null = null;
  const skapade: { testId: string; score: number; total: number }[] = [];
  for (const p of PASS) {
    const fragor = fragorForTest(p.testId);
    if (!fragor.length) return json({ error: `Provet ${p.testId} finns inte i frågebanken` }, 500);
    const { answers, score } = simuleraSvar(p);
    const { rows } = await pool.query(
      `INSERT INTO test_results (user_id, test_id, score, total, answers, time_seconds, created_at, simulerad)
       VALUES ($1, $2, $3, $4, $5, $6, NOW() - ($7 || ' days')::interval - INTERVAL '2 minutes', TRUE) RETURNING id`,
      [user.id, p.testId, score, fragor.length, JSON.stringify(answers), 3000 + Math.round(slumptal(p.testId) * 300), String(p.dagarSedan)]
    );
    skapade.push({ testId: p.testId, score, total: fragor.length });
    senaste = { id: rows[0].id, testId: p.testId };
  }
  const passId = senaste!.testId.replace(/^extra-/, '');
  return json({ ok: true, skapade, lank: `/extra/${passId}?review=1&resultat=${senaste!.id}` });
};
