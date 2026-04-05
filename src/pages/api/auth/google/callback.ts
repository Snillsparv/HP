import type { APIRoute } from 'astro';
import { findUserByGoogleId, findUserByEmail, createGoogleUser, createSession } from '../../../../lib/auth.js';
import db from '../../../../lib/db.js';

const GOOGLE_CLIENT_ID = import.meta.env.GOOGLE_CLIENT_ID || '';
const GOOGLE_CLIENT_SECRET = import.meta.env.GOOGLE_CLIENT_SECRET || '';
const REDIRECT_URI = import.meta.env.GOOGLE_REDIRECT_URI || 'http://localhost:4321/api/auth/google/callback';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code || !GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    return new Response(null, { status: 302, headers: { Location: '/konto/login?error=Google-inloggning+misslyckades' } });
  }

  try {
    // Exchange code for tokens
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      }),
    });

    const tokens = await tokenRes.json();
    if (!tokens.access_token) throw new Error('No access token');

    // Get user info
    const userRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });
    const profile = await userRes.json();

    // Find or create user
    let user = findUserByGoogleId(profile.id);
    if (!user) {
      const existing = findUserByEmail(profile.email);
      if (existing) {
        // Link Google to existing account
        db.prepare('UPDATE users SET google_id = ? WHERE id = ?').run(profile.id, existing.id);
        user = { ...existing, google_id: profile.id };
      } else {
        user = createGoogleUser(profile.name || profile.email, profile.email, profile.id);
      }
    }

    const token = createSession(user.id);

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/forum',
        'Set-Cookie': `session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${30 * 24 * 3600}`,
      },
    });
  } catch {
    return new Response(null, { status: 302, headers: { Location: '/konto/login?error=Google-inloggning+misslyckades' } });
  }
};
