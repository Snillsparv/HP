import type { APIRoute } from 'astro';
import { createUser, findUserByEmail, createSession } from '../../../lib/auth.js';
import { checkNewUser } from '../../../lib/alerts.js';

export const POST: APIRoute = async ({ request }) => {
  try {
    const form = await request.formData();
    const name = form.get('name')?.toString().trim();
    const email = form.get('email')?.toString().trim().toLowerCase();
    const password = form.get('password')?.toString();
    const password2 = form.get('password2')?.toString();

    if (!name || !email || !password || !password2) {
      return new Response(null, { status: 302, headers: { Location: '/konto/registrera?error=Fyll+i+alla+fält' } });
    }
    if (password.length < 8) {
      return new Response(null, { status: 302, headers: { Location: '/konto/registrera?error=Lösenordet+måste+vara+minst+8+tecken' } });
    }
    if (password !== password2) {
      return new Response(null, { status: 302, headers: { Location: '/konto/registrera?error=Lösenorden+matchar+inte' } });
    }
    if (await findUserByEmail(email)) {
      return new Response(null, { status: 302, headers: { Location: '/konto/registrera?error=E-postadressen+används+redan' } });
    }

    const user = await createUser(name, email, password);
    checkNewUser(name, email).catch(() => {});
    const token = await createSession(user.id);
    const redirect = form.get('redirect')?.toString() || '/forum';

    return new Response(null, {
      status: 302,
      headers: {
        Location: redirect,
        'Set-Cookie': `session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${30 * 24 * 3600}`,
      },
    });
  } catch {
    return new Response(null, { status: 302, headers: { Location: '/konto/registrera?error=Något+gick+fel' } });
  }
};
