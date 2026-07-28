import type { APIRoute } from 'astro';
import { getSessionFromCookies, createGuestUser, createSession } from '../../../lib/auth.js';

// Startar en gästsession så att ordträningen kan användas utan konto.
// Skapas bara vid en aktiv handling (starta pass, öppna ett läge), aldrig
// vid ren sidvisning, så att robotar inte fyller databasen.
export const POST: APIRoute = async ({ request }) => {
  const existing = await getSessionFromCookies(request.headers.get('cookie'));
  if (existing) {
    return new Response(JSON.stringify({ ok: true, guest: !!existing.is_guest }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  }
  const user = await createGuestUser();
  const token = await createSession(user.id);
  return new Response(JSON.stringify({ ok: true, guest: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${30 * 24 * 3600}`,
    },
  });
};
