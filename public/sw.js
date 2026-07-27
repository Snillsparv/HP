// Service worker för HPAkuten. Håller sig medvetet enkel: sidor och API-svar
// cachas aldrig, eftersom de beror på vem som är inloggad. Bara statiska
// filer sparas, och då med "stale-while-revalidate" så att en utbytt bild
// slår igenom vid nästa besök.
//
// Höj VERSION för att slänga all gammal cache vid nästa uppdatering.
const VERSION = 'v1';
const CACHE = `hpakuten-static-${VERSION}`;

const STATIC_PATH = /^\/(_astro|icons|ordfejs|minnesord)\//;
const STATIC_FILE = /\.(?:css|js|mjs|woff2?|png|jpe?g|webp|gif|svg|ico)$/i;

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(['/favicon.svg', '/icons/hpakuten-192.png']))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch { return; }
  if (url.origin !== self.location.origin) return;

  // Sidor, API och allt inloggningsberoende går alltid till nätet.
  if (req.mode === 'navigate' || url.pathname.startsWith('/api/')) return;
  if (!STATIC_PATH.test(url.pathname) && !STATIC_FILE.test(url.pathname)) return;

  event.respondWith(
    caches.open(CACHE).then(cache => cache.match(req).then(hit => {
      const fresh = fetch(req).then(res => {
        if (res && res.ok && res.type === 'basic') cache.put(req, res.clone());
        return res;
      }).catch(() => hit);
      return hit || fresh;
    }))
  );
});
