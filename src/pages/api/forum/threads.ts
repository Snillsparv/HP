import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import { createThread } from '../../../lib/forum.js';

export const POST: APIRoute = async ({ request }) => {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user) {
    return new Response(null, { status: 302, headers: { Location: '/konto/login' } });
  }

  const form = await request.formData();
  const category = form.get('category')?.toString().trim();
  const title = form.get('title')?.toString().trim();
  const body = form.get('body')?.toString().trim();

  if (!category || !title || !body) {
    return new Response(null, { status: 302, headers: { Location: '/forum?error=Fyll+i+alla+fält' } });
  }

  const id = await createThread(user.id, category, title, body);
  return new Response(null, { status: 302, headers: { Location: `/forum/${id}` } });
};
