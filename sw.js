/* Khele Sanand 2026 — service worker
   - App files are cached so the dashboard opens even without internet.
   - Page is always fetched fresh when online (network-first), so updates show up.
   - Firebase / any other website is NEVER touched by this worker (live data stays live).
   To push an update: change VERSION below, upload files again. */
const VERSION = 'ks-2026-v16';
const APP_FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(APP_FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Firebase, WhatsApp etc. go straight to network

  if (req.mode === 'navigate') {
    // Network-first: newest page when online, cached copy when offline.
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(VERSION).then((c) => c.put('./index.html', copy));
          }
          return res;
        })
        .catch(() =>
          caches.match('./index.html').then((r) => r || caches.match('./', { ignoreSearch: true }))
        )
    );
    return;
  }

  // Other same-origin files (icons, manifest): cache-first.
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req))
  );
});
