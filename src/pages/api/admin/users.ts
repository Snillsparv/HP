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
  // Gästkonton (osynliga konton från ordträningen) är brus i e-postlistan
  // och utelämnas därför som standard. ?guests=1 tar med dem, t.ex. i sök.
  const includeGuests = url.searchParams.get('guests') === '1';

  if (!q) {
    return new Response(JSON.stringify({ error: 'Missing ?q= search query' }), { status: 400 });
  }

  const { rows } = await pool.query(
    `SELECT id, name, email, avatar_color, train_step, created_at, is_guest
     FROM users
     WHERE (name ILIKE $1 OR email ILIKE $1)
       ${includeGuests ? '' : 'AND is_guest = FALSE'}
     ORDER BY created_at DESC
     LIMIT 100000`,
    [`%${q}%`]
  );

  return new Response(JSON.stringify({ count: rows.length, users: rows }), {
    headers: { 'Content-Type': 'application/json' },
  });
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

/** Tolkar ett användar-id (int4), annars null. */
function tolkaId(varde: unknown): number | null {
  const raw = String(varde ?? '');
  if (!/^\d{1,10}$/.test(raw)) return null;
  const id = Number(raw);
  return id >= 1 && id <= 2147483647 ? id : null;
}

/** Vad som försvinner med kontot. Allt raderas via ON DELETE CASCADE;
 * forumsvar som andra skrivit i användarens trådar försvinner med trådarna. */
async function sammanstallning(id: number) {
  const { rows } = await pool.query(
    `SELECT u.id, u.name, u.email, u.is_guest, u.created_at,
       (SELECT COUNT(*)::int FROM test_results WHERE user_id = u.id) AS provresultat,
       (SELECT COUNT(*)::int FROM threads WHERE user_id = u.id) AS tradar,
       (SELECT COUNT(*)::int FROM replies WHERE user_id = u.id) AS svar,
       (SELECT COUNT(*)::int FROM replies r JOIN threads t ON t.id = r.thread_id
          WHERE t.user_id = u.id AND r.user_id <> u.id) AS andras_svar,
       (SELECT COUNT(*)::int FROM word_progress WHERE user_id = u.id) AS ordframsteg,
       (SELECT COUNT(*)::int FROM question_events WHERE user_id = u.id) AS traningssvar
     FROM users u WHERE u.id = $1`,
    [id]
  );
  return rows[0] || null;
}

/** POST /api/admin/users med { atgard: 'info' | 'radera', id }.
 * info: vad som raderas. radera: tar bort kontot och allt kopplat till det.
 * Adminkontot kan inte raderas. */
export const POST: APIRoute = async ({ request }) => {
  const admin = await getSessionFromCookies(request.headers.get('cookie'));
  if (!admin || admin.email !== ADMIN_EMAIL) return json({ error: 'Unauthorized' }, 403);

  let body: { atgard?: unknown; id?: unknown } = {};
  try { body = await request.json(); } catch {}
  const id = tolkaId(body.id);
  if (id === null) return json({ error: 'Ogiltigt id' }, 400);

  const info = await sammanstallning(id);
  if (!info) return json({ error: 'Användaren finns inte' }, 404);
  const arAdmin = id === admin.id || String(info.email).toLowerCase() === ADMIN_EMAIL;

  if (body.atgard === 'info') return json({ ok: true, anvandare: info, kanRaderas: !arAdmin });
  if (body.atgard !== 'radera') return json({ error: 'Okänd åtgärd' }, 400);
  if (arAdmin) return json({ error: 'Adminkontot kan inte raderas' }, 400);

  const { rowCount } = await pool.query('DELETE FROM users WHERE id = $1 AND LOWER(email) <> $2', [id, ADMIN_EMAIL]);
  if (!rowCount) return json({ error: 'Användaren finns inte' }, 404);
  console.log(`Admin raderade användare ${id} (${info.email}): ${info.provresultat} provresultat, ${info.tradar} trådar, ${info.svar} svar`);
  return json({ ok: true, raderad: info });
};
