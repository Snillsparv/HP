import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import { createReply, getThread } from '../../../lib/forum.js';

export const POST: APIRoute = async ({ request }) => {
  const user = getSessionFromCookies(request.headers.get('cookie'));
  if (!user) {
    return new Response(null, { status: 302, headers: { Location: '/konto/login' } });
  }

  const form = await request.formData();
  const threadId = Number(form.get('thread_id'));
  const body = form.get('body')?.toString().trim();

  if (!threadId || !body) {
    return new Response(null, { status: 302, headers: { Location: `/forum/${threadId}?error=Skriv+ett+svar` } });
  }

  const thread = getThread(threadId);
  if (!thread) {
    return new Response(null, { status: 302, headers: { Location: '/forum?error=Tråden+finns+inte' } });
  }

  createReply(threadId, user.id, body);
  return new Response(null, { status: 302, headers: { Location: `/forum/${threadId}` } });
};
