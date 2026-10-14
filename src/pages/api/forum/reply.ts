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
  // Felet visas vid svarsformuläret längst ner i tråden.
  const fel = (meddelande: string) => tillbaka(`/forum/${threadId}?error=${encodeURIComponent(meddelande)}#svara`);

  if (!threadId || !body) {
    return fel('Skriv ett svar');
  }

  const thread = await getThread(threadId);
  if (!thread) {
    return tillbaka('/forum?error=Tråden+finns+inte');
  }

  const ip = klientIp(request);
  // Korta svar ("Tack!") skrivs snabbt, så tidsgränsen är bara en sekund här.
  const formFel = formularFel(form, 1);
  if (formFel) {
    await loggaSpam(user.id, ip, formFel, body);
    return fel('Något gick fel. Ladda om sidan och försök igen.');
  }

  const stopp = await kontrolleraInlagg(user.id, 'svar', body, ip);
  if (stopp?.raderat) {
    return tillbaka(`/forum?error=${encodeURIComponent(stopp.fel)}`, { 'Set-Cookie': 'session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0' });
  }
  if (stopp) {
    return fel(stopp.fel);
  }

  await createReply(threadId, user.id, body);
  return tillbaka(`/forum/${threadId}`);
};
