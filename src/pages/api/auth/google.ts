import type { APIRoute } from 'astro';

const GOOGLE_CLIENT_ID = import.meta.env.GOOGLE_CLIENT_ID || '';
const REDIRECT_URI = import.meta.env.GOOGLE_REDIRECT_URI || 'http://localhost:4321/api/auth/google/callback';

export const GET: APIRoute = async () => {
  if (!GOOGLE_CLIENT_ID) {
    return new Response(null, { status: 302, headers: { Location: '/konto/login?error=Google-inloggning+ej+konfigurerad' } });
  }

  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: 'openid email profile',
    access_type: 'offline',
    prompt: 'select_account',
  });

  return new Response(null, {
    status: 302,
    headers: { Location: `https://accounts.google.com/o/oauth2/v2/auth?${params}` },
  });
};
