const CACHE_NAME = 'signal-manager-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/static/images/lucky_jet.png',
  '/static/images/mines.png',
  '/flags/ru.svg',
  '/flags/us.svg',
  '/flags/in.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});