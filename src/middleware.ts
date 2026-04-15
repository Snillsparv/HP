import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async ({ request, redirect }, next) => {
  // Force HTTPS in production (Railway sets x-forwarded-proto)
  const proto = request.headers.get('x-forwarded-proto');
  const host = request.headers.get('host') || '';

  if (proto === 'http' && !host.includes('localhost')) {
    const url = new URL(request.url);
    url.protocol = 'https:';
    return redirect(url.toString(), 301);
  }

  return next();
});
