import type { APIRoute } from 'astro';
import { createUser, findUserByEmail, createSession } from '../../../lib/auth.js';

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
    if (findUserByEmail(email)) {
      return new Response(null, { status: 302, headers: { Location: '/konto/registrera?error=E-postadressen+används+redan' } });
    }

    const user = createUser(name, email, password);
    const token = createSession(user.id);

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/forum',
        'Set-Cookie': `session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${30 * 24 * 3600}`,
      },
    });
  } catch {
    return new Response(null, { status: 302, headers: { Location: '/konto/registrera?error=Något+gick+fel' } });
  }
};
