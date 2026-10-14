import type { APIRoute } from 'astro';
import { createUser, findUserByEmail, createSession, getSessionFromCookies, upgradeGuestToUser } from '../../../lib/auth.js';
import { checkNewUser } from '../../../lib/alerts.js';
import { formularFel, namnArSpam } from '../../../lib/forum-spamfilter.js';
import { loggaSpam, klientIp } from '../../../lib/forum-spam.js';
import { arLokalSokvag } from '../../../lib/sokvag.js';

export const POST: APIRoute = async ({ request }) => {
  try {
    const form = await request.formData();
    const name = form.get('name')?.toString().trim();
    const email = form.get('email')?.toString().trim().toLowerCase();
    const password = form.get('password')?.toString();
    const password2 = form.get('password2')?.toString();

    if (!name || !email || !password || !password2) {
      return new Response(null, { status: 302, headers: { Location: `/konto/registrera?error=${encodeURIComponent('Fyll i alla fält')}` } });
    }
    // E-postadressen visas på adminsidan och får inte innehålla HTML-tecken.
    if (email.length > 254 || !/^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(email)) {
      return new Response(null, { status: 302, headers: { Location: `/konto/registrera?error=${encodeURIComponent('Ange en giltig e-postadress.')}` } });
    }
    // Spambotar fyller i det dolda fältet eller skickar formuläret direkt.
    const formFel = formularFel(form, 2);
    if (formFel) {
      await loggaSpam(null, klientIp(request), `registrering: ${formFel}`, `${name} <${email}>`);
      return new Response(null, { status: 302, headers: { Location: `/konto/registrera?error=${encodeURIComponent('Något gick fel. Ladda om sidan och försök igen.')}` } });
    }
    // Namnet visas vid varje foruminlägg, så det får inte vara reklam.
    if (namnArSpam(name)) {
      await loggaSpam(null, klientIp(request), 'registrering: namn', `${name} <${email}>`);
      return new Response(null, { status: 302, headers: { Location: `/konto/registrera?error=${encodeURIComponent('Välj ett annat namn. Namnet får vara högst 40 tecken och får inte innehålla länkar eller reklam.')}` } });
    }
    if (password.length < 8) {
      return new Response(null, { status: 302, headers: { Location: `/konto/registrera?error=${encodeURIComponent('Lösenordet måste vara minst 8 tecken')}` } });
    }
    if (password !== password2) {
      return new Response(null, { status: 302, headers: { Location: `/konto/registrera?error=${encodeURIComponent('Lösenorden matchar inte')}` } });
    }
    if (await findUserByEmail(email)) {
      return new Response(null, { status: 302, headers: { Location: `/konto/registrera?error=${encodeURIComponent('E-postadressen används redan')}` } });
    }

    // En gäst som registrerar sig blir sitt riktiga konto på samma rad i
    // databasen, så att ordframstegen följer med automatiskt.
    const current = await getSessionFromCookies(request.headers.get('cookie'));
    let user;
    if (current?.is_guest) {
      user = await upgradeGuestToUser(current.id, name, email, password);
    }
    if (!user) user = await createUser(name, email, password);
    checkNewUser(name, email).catch(() => {});
    const token = await createSession(user.id);
    const redirect = form.get('redirect')?.toString() || '/forum';
    const safeRedirect = arLokalSokvag(redirect) ? redirect : '/forum';

    return new Response(null, {
      status: 302,
      headers: {
        Location: safeRedirect,
        'Set-Cookie': `session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${30 * 24 * 3600}`,
      },
    });
  } catch {
    return new Response(null, { status: 302, headers: { Location: `/konto/registrera?error=${encodeURIComponent('Något gick fel')}` } });
  }
};
