import type { APIRoute } from 'astro';
import { getSessionFromCookies, deleteSession } from '../../../lib/auth.js';

export const POST: APIRoute = async ({ request }) => {
  const cookie = request.headers.get('cookie');
  const match = cookie?.match(/session=([a-f0-9]+)/);
  if (match) await deleteSession(match[1]);

  return new Response(null, {
    status: 302,
    headers: {
      Location: '/',
      'Set-Cookie': 'session=; Path=/; HttpOnly; Max-Age=0',
    },
  });
};
