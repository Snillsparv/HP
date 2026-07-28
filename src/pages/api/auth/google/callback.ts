import type { APIRoute } from 'astro';
import { findUserByGoogleId, findUserByEmail, createGoogleUser, createSession, getSessionFromCookies, migrateGuestToUser, upgradeGuestToGoogleUser } from '../../../../lib/auth.js';
import pool from '../../../../lib/db.js';
import { checkNewUser } from '../../../../lib/alerts.js';

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

    const userRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });
    const profile = await userRes.json();

    const current = await getSessionFromCookies(request.headers.get('cookie'));
    let user = await findUserByGoogleId(profile.id);
    if (!user) {
      const existing = await findUserByEmail(profile.email);
      if (existing) {
        await pool.query('UPDATE users SET google_id = $1 WHERE id = $2', [profile.id, existing.id]);
        user = { ...existing, google_id: profile.id };
      } else if (current?.is_guest) {
        // Gäst som blir ny Google-användare: uppgradera gästen på plats så
        // att ordframstegen följer med.
        user = await upgradeGuestToGoogleUser(current.id, profile.name || profile.email, profile.email, profile.id);
        if (user) checkNewUser(profile.name || '', profile.email).catch(() => {});
      }
      if (!user) {
        user = await createGoogleUser(profile.name || profile.email, profile.email, profile.id);
        checkNewUser(profile.name || '', profile.email).catch(() => {});
      }
    }
    // Gäst som loggar in på ett befintligt konto: flytta med framstegen.
    if (current?.is_guest && current.id !== user.id) {
      await migrateGuestToUser(current.id, user.id).catch(() => {});
    }

    const token = await createSession(user.id);

    // state bär målsidan från /api/auth/google?next=... genom OAuth-flödet.
    const state = url.searchParams.get('state') || '';
    const target = state.startsWith('/') && !state.startsWith('//') ? state : '/forum';

    return new Response(null, {
      status: 302,
      headers: {
        Location: target,
        'Set-Cookie': `session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${30 * 24 * 3600}`,
      },
    });
  } catch {
    return new Response(null, { status: 302, headers: { Location: '/konto/login?error=Google-inloggning+misslyckades' } });
  }
};
