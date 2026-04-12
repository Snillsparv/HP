import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';

const ALLOWED_COLORS = [
  '#2563eb', '#3b82f6', '#06b6d4', '#14b8a6', '#10b981',
  '#84cc16', '#eab308', '#f97316', '#ef4444', '#ec4899',
  '#a855f7', '#6366f1', '#64748b', '#1e293b',
];

export const POST: APIRoute = async ({ request }) => {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const { color } = await request.json();
  if (!ALLOWED_COLORS.includes(color)) {
    return new Response(JSON.stringify({ error: 'Invalid color' }), { status: 400 });
  }

  await pool.query('UPDATE users SET avatar_color = $1 WHERE id = $2', [color, user.id]);
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
