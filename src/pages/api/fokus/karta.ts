import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';
import { hamtaHandelser } from '../../../lib/fokus/historik.js';
import { byggHjarnkarta } from '../../../lib/fokus/hjarnkarta.js';

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

/** GET /api/fokus/karta[?resultat=<id>]
 * Din hjärnkarta för inloggade och gäster (gästsessionens händelser). Med
 * resultat (bara användarens egna sparade provresultat) läggs före och efter
 * passet, meningen om förändringen och raden Ur det här provet till.
 * Utan session: { tom: true }. */
export const GET: APIRoute = async ({ request }) => {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user) return json({ tom: true });

  const url = new URL(request.url);
  const resultatIn = url.searchParams.get('resultat');
  let pass: { createdAt: Date; testId: string; answers: unknown[] } | null = null;
  if (resultatIn !== null) {
    // test_results.id är SERIAL (int4): större tal kan inte finnas och får
    // inte nå Postgres, som då svarar med ett fel i stället för en tom rad.
    if (!/^\d{1,10}$/.test(resultatIn) || Number(resultatIn) > 2147483647) return json({ error: 'ogiltigt_resultat' }, 400);
    const { rows } = await pool.query(
      'SELECT test_id, answers, created_at FROM test_results WHERE id = $1 AND user_id = $2',
      [Number(resultatIn), user.id]
    );
    if (!rows.length) return json({ error: 'okant_resultat' }, 404);
    const r = rows[0];
    const answers = Array.isArray(r.answers) ? r.answers : (typeof r.answers === 'string' ? JSON.parse(r.answers) : []);
    pass = { createdAt: new Date(r.created_at), testId: r.test_id, answers };
  }

  const handelser = await hamtaHandelser(user.id);
  return json(byggHjarnkarta(handelser, { pass }));
};
