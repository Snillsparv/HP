import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';

export const POST: APIRoute = async ({ request }) => {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user) {
    return new Response(JSON.stringify({ error: 'not_logged_in' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
  }

  const body = await request.json();
  const { testId, score, total, answers, timeSeconds } = body;

  if (!testId || score == null || !total || !answers) {
    return new Response(JSON.stringify({ error: 'missing_fields' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const { rows } = await pool.query(
    'INSERT INTO test_results (user_id, test_id, score, total, answers, time_seconds) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
    [user.id, testId, score, total, JSON.stringify(answers), timeSeconds || null]
  );

  return new Response(JSON.stringify({ id: rows[0].id }), { status: 200, headers: { 'Content-Type': 'application/json' } });
};

export const GET: APIRoute = async ({ request }) => {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user) {
    return new Response(JSON.stringify({ results: [] }), { headers: { 'Content-Type': 'application/json' } });
  }

  const url = new URL(request.url);
  const testId = url.searchParams.get('testId');

  let rows;
  if (testId) {
    ({ rows } = await pool.query(
      'SELECT * FROM test_results WHERE user_id = $1 AND test_id = $2 ORDER BY created_at DESC',
      [user.id, testId]
    ));
  } else {
    ({ rows } = await pool.query(
      'SELECT * FROM test_results WHERE user_id = $1 ORDER BY created_at DESC',
      [user.id]
    ));
  }

  return new Response(JSON.stringify({ results: rows }), { headers: { 'Content-Type': 'application/json' } });
};
