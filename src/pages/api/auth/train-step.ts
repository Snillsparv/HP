import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';

export const POST: APIRoute = async ({ request }) => {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const { step } = await request.json();
  const s = parseInt(step, 10);
  if (isNaN(s) || s < 1 || s > 7) {
    return new Response(JSON.stringify({ error: 'Invalid step' }), { status: 400 });
  }

  await pool.query('UPDATE users SET train_step = $1 WHERE id = $2', [s, user.id]);
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
