import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';

const ADMIN_EMAIL = 'snillsparv@gmail.com';

export const GET: APIRoute = async ({ request }) => {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user || user.email !== ADMIN_EMAIL) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 403 });
  }

  const url = new URL(request.url);
  const q = url.searchParams.get('q')?.trim();

  if (!q) {
    return new Response(JSON.stringify({ error: 'Missing ?q= search query' }), { status: 400 });
  }

  const { rows } = await pool.query(
    `SELECT id, name, email, avatar_color, train_step, created_at
     FROM users
     WHERE name ILIKE $1 OR email ILIKE $1
     ORDER BY created_at DESC
     LIMIT 5000`,
    [`%${q}%`]
  );

  return new Response(JSON.stringify({ count: rows.length, users: rows }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
