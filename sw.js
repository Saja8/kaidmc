// Service Worker for KaiLinks PWA
// Version 1.4 - Homepage refresh cache invalidation

const CACHE_NAME = 'kailinks-v1782559542';
const OFFLINE_URL = 'index.html';

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/assets/scss/main.css',
  '/assets/js/main.js',
  '/assets/js/lang.js',
  '/assets/img/logo.webp',
  '/assets/img/favicon1.png',
  '/assets/js/english.json',
  '/assets/js/spanish.json',
  '/assets/js/japanese.json'
];

// Install event - cache critical resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching critical resources');
        return cache.addAll(CRITICAL_RESOURCES);
      })
      .then(() => {
        console.log('Service Worker: Critical resources cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Failed to cache critical resources:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => {
              console.log('Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated and ready');
        return self.clients.claim();
      })
  );
});

// Fetch event - network first with cache fallback strategy
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip external resources
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // If we got a valid response, clone and cache it
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              // Only cache same-origin requests
              if (event.request.url.startsWith(self.location.origin)) {
                cache.put(event.request, responseClone);
              }
            });
        }
        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            // If no cache match, return offline page for navigate requests
            if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_URL);
            }
            // For other requests, return a basic 404 response
            return new Response('Resource not available offline', {
              status: 404,
              statusText: 'Not Found'
            });
          });
      })
  );
});

// Background sync for offline form submissions (future enhancement)
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle offline form submissions when back online
      console.log('Service Worker: Background sync triggered for contact form')
    );
  }
});

// Push notification support (future enhancement)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: '/assets/img/favicon1.png',
        badge: '/assets/img/favicon1.png',
        tag: 'kailinks-notification'
      })
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
