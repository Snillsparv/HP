import type { APIRoute } from 'astro';
import { findUserByEmail, verifyPassword, createSession } from '../../../lib/auth.js';

export const POST: APIRoute = async ({ request }) => {
  try {
    const form = await request.formData();
    const email = form.get('email')?.toString().trim().toLowerCase();
    const password = form.get('password')?.toString();

    if (!email || !password) {
      return new Response(null, { status: 302, headers: { Location: `/konto/login?error=${encodeURIComponent('Fyll i alla fält')}` } });
    }

    const user = await findUserByEmail(email);
    if (!user || !user.password_hash || !verifyPassword(password, user.password_hash)) {
      return new Response(null, { status: 302, headers: { Location: `/konto/login?error=${encodeURIComponent('Fel e-post eller lösenord')}` } });
    }

    const token = await createSession(user.id);

    // Sidor som kräver inloggning kan skicka med vart användaren ska efteråt.
    const redirect = form.get('redirect')?.toString() || '/trana';
    const safeRedirect = redirect.startsWith('/') && !redirect.startsWith('//') ? redirect : '/trana';

    return new Response(null, {
      status: 302,
      headers: {
        Location: safeRedirect,
        'Set-Cookie': `session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${30 * 24 * 3600}`,
      },
    });
  } catch {
    return new Response(null, { status: 302, headers: { Location: `/konto/login?error=${encodeURIComponent('Något gick fel, försök igen')}` } });
  }
};
