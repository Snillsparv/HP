import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import { createThread } from '../../../lib/forum.js';
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
  const category = form.get('category')?.toString().trim();
  const title = form.get('title')?.toString().trim();
  const body = form.get('body')?.toString().trim();

  if (!category || !title || !body) {
    return tillbaka('/forum?error=Fyll+i+alla+fält');
  }

  const ip = klientIp(request);
  const formFel = formularFel(form);
  if (formFel) {
    await loggaSpam(user.id, ip, formFel, `${title}\n${body}`);
    return tillbaka(`/forum?error=${encodeURIComponent('Något gick fel. Ladda om sidan och försök igen.')}`);
  }

  const stopp = await kontrolleraInlagg(user.id, 'trad', `${title}\n${body}`, ip);
  if (stopp?.raderat) {
    return tillbaka('/', { 'Set-Cookie': 'session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0' });
  }
  if (stopp) {
    return tillbaka(`/forum?error=${encodeURIComponent(stopp.fel)}`);
  }

  const id = await createThread(user.id, category, title, body);
  return tillbaka(`/forum/${id}`);
};
