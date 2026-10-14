import type { APIRoute } from 'astro';
import { getSessionFromCookies } from '../../../lib/auth.js';
import { createThread } from '../../../lib/forum.js';
import { formularFel } from '../../../lib/forum-spamfilter.js';
import { kontrolleraInlagg, loggaSpam, klientIp } from '../../../lib/forum-spam.js';

const KATEGORIER = ['allmant', 'verbal', 'kvantitativ', 'minnestekniker', 'resultat'];

const tillbaka = (location: string, extra: Record<string, string> = {}) =>
  new Response(null, { status: 302, headers: { Location: location, ...extra } });
// Felet visas vid formuläret för ny tråd, längst ner på forumsidan.
const fel = (meddelande: string, extra: Record<string, string> = {}) =>
  tillbaka(`/forum?fel=${encodeURIComponent(meddelande)}#ny-trad`, extra);

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
    return fel('Fyll i alla fält');
  }
  if (!KATEGORIER.includes(category)) {
    return fel('Välj en kategori i listan.');
  }

  const ip = klientIp(request);
  const formFel = formularFel(form);
  if (formFel) {
    await loggaSpam(user.id, ip, formFel, `${title}\n${body}`);
    return fel('Något gick fel. Ladda om sidan och försök igen.');
  }

  const stopp = await kontrolleraInlagg(user.id, 'trad', `${title}\n${body}`, ip);
  if (stopp?.raderat) {
    return tillbaka(`/forum?error=${encodeURIComponent(stopp.fel)}&raderat=1`, { 'Set-Cookie': 'session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0' });
  }
  if (stopp) {
    return fel(stopp.fel);
  }

  const id = await createThread(user.id, category, title, body);
  return tillbaka(`/forum/${id}`);
};
