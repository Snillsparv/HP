import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';

const ADMIN_EMAIL = 'snillsparv@gmail.com';

export const POST: APIRoute = async ({ request }) => {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user || user.email !== ADMIN_EMAIL) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 403 });
  }

  const { action, threadId, replyId, userId, body } = await request.json();

  // Spamkonton: kontot raderas och trådar, svar och sessioner följer med.
  // Konton som också använts till att plugga raderas inte härifrån (det tar
  // bort provresultat och ordframsteg); använd användarsökningen på /admin.
  if (action === 'delete-user' && userId) {
    const { rows: [u] } = await pool.query(
      `SELECT u.name, u.email,
         EXISTS (SELECT 1 FROM test_results x WHERE x.user_id = u.id)
         OR EXISTS (SELECT 1 FROM question_events x WHERE x.user_id = u.id)
         OR EXISTS (SELECT 1 FROM fokus_rundor x WHERE x.user_id = u.id)
         OR EXISTS (SELECT 1 FROM word_progress x WHERE x.user_id = u.id)
         OR EXISTS (SELECT 1 FROM learn_activity x WHERE x.user_id = u.id) AS pluggat
       FROM users u WHERE u.id = $1`,
      [userId]
    );
    if (!u || u.email === ADMIN_EMAIL) {
      return new Response(JSON.stringify({ error: 'Kontot finns inte.' }), { status: 404 });
    }
    if (u.pluggat) {
      return new Response(JSON.stringify({ error: `${u.name} har också pluggat på sajten (provresultat eller ordträning). Radera kontot via användarsökningen på /admin om du verkligen vill.` }), { status: 409 });
    }
    await pool.query('DELETE FROM users WHERE id = $1 AND email <> $2', [userId, ADMIN_EMAIL]);
    await pool.query(
      'INSERT INTO forum_spam_log (user_id, ip, orsak, text) VALUES (NULL, NULL, $1, $2)',
      ['admin raderade kontot', `${u.name} <${u.email}>`]
    ).catch(() => {});
    return new Response(JSON.stringify({ ok: true }));
  }

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
