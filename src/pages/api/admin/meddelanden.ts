import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import pool from '../../../lib/db.js';

const ADMIN_EMAIL = 'snillsparv@gmail.com';

// Tar bort meddelanden från kontaktformuläret: ett enskilt (id) eller alla
// från en e-postadress (email), t.ex. spam eller när någon vill bli glömd.
export const POST: APIRoute = async ({ request }) => {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user || user.email !== ADMIN_EMAIL) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 403 });
  }

  const { id, email } = await request.json();
  if (Number.isInteger(id)) {
    const { rowCount } = await pool.query('DELETE FROM contact_messages WHERE id = $1', [id]);
    return new Response(JSON.stringify({ ok: true, borttagna: rowCount }));
  }
  if (typeof email === 'string' && email) {
    const { rowCount } = await pool.query('DELETE FROM contact_messages WHERE lower(email) = lower($1)', [email]);
    return new Response(JSON.stringify({ ok: true, borttagna: rowCount }));
  }
  return new Response(JSON.stringify({ error: 'Ange id eller email' }), { status: 400 });
};
