const CACHE_NAME = 'manshau-alfaris-cache-v3';

// Core local static assets to cache on install for offline access
const STATIC_ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './firebase.js',
  './firebase-config.js',
  './og-banner.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon.svg'
];

// Install Event - Pre-cache core static resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching core PWA static assets:', CACHE_NAME);
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// Message Event - Handle skipWaiting trigger from frontend update listener
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[Service Worker] Skip waiting message received - activating new SW version immediately');
    self.skipWaiting();
  }
});

// Activate Event - Clean up stale cache versions & claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache version:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Stale-while-revalidate for static assets, Network-first for dynamic API/Firebase requests
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Ignore non-GET requests and browser extensions
  if (request.method !== 'GET' || !request.url.startsWith('http')) {
    return;
  }

  // Network-first strategy for Firebase & live APIs to ensure live state
  if (request.url.includes('firestore') || request.url.includes('firebase') || request.url.includes('api')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Stale-While-Revalidate strategy for static resources & HTML
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          // Offline fallback
        });

      return cachedResponse || fetchPromise || caches.match('./index.html');
    })
  );
});
