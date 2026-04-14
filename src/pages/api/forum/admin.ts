import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';

const ADMIN_EMAIL = 'snillsparv@gmail.com';

export const POST: APIRoute = async ({ request }) => {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user || user.email !== ADMIN_EMAIL) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 403 });
  }

  const { action, threadId, replyId, body } = await request.json();

  if (action === 'delete-thread' && threadId) {
    await pool.query('DELETE FROM threads WHERE id = $1', [threadId]);
    return new Response(JSON.stringify({ ok: true }));
  }

  if (action === 'delete-reply' && replyId) {
    await pool.query('DELETE FROM replies WHERE id = $1', [replyId]);
    return new Response(JSON.stringify({ ok: true }));
  }

  if (action === 'edit-thread' && threadId && body) {
    await pool.query('UPDATE threads SET body = $1 WHERE id = $2', [body, threadId]);
    return new Response(JSON.stringify({ ok: true }));
  }

  if (action === 'edit-reply' && replyId && body) {
    await pool.query('UPDATE replies SET body = $1 WHERE id = $2', [body, replyId]);
    return new Response(JSON.stringify({ ok: true }));
  }

  return new Response(JSON.stringify({ error: 'Invalid action' }), { status: 400 });
};
