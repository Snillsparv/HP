import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import { createReply, getThread } from '../../../lib/forum.js';
import { formularFel } from '../../../lib/forum-spamfilter.js';
import { kontrolleraInlagg, loggaSpam, klientIp } from '../../../lib/forum-spam.js';

const tillbaka = (location: string, extra: Record<string, string> = {}) =>
  new Response(null, { status: 302, headers: { Location: location, ...extra } });

export const POST: APIRoute = async ({ request }) => {
  const user = await getSessionFromCookies(request.headers.get('cookie'));
  if (!user || user.is_guest) {
    return tillbaka('/konto/login?next=%2Fforum');
  }

  const form = await request.formData();
  const threadId = Number(form.get('thread_id'));
  const body = form.get('body')?.toString().trim();

  if (!threadId || !body) {
    return tillbaka(`/forum/${threadId}?error=Skriv+ett+svar`);
  }

  const thread = await getThread(threadId);
  if (!thread) {
    return tillbaka('/forum?error=Tråden+finns+inte');
  }

  const ip = klientIp(request);
  const formFel = formularFel(form);
  if (formFel) {
    await loggaSpam(user.id, ip, formFel, body);
    return tillbaka(`/forum/${threadId}?error=${encodeURIComponent('Något gick fel. Ladda om sidan och försök igen.')}`);
  }

  const stopp = await kontrolleraInlagg(user.id, 'svar', body, ip);
  if (stopp?.raderat) {
    return tillbaka('/', { 'Set-Cookie': 'session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0' });
  }
  if (stopp) {
    return tillbaka(`/forum/${threadId}?error=${encodeURIComponent(stopp.fel)}`);
  }

  await createReply(threadId, user.id, body);
  return tillbaka(`/forum/${threadId}`);
};
