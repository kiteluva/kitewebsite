// Define the cache name, including a version number to manage updates
const CACHE_NAME = 'kiteluva-portfolio-v1';

// List all core static assets that form the "app shell"
const CORE_ASSETS = [
    '/', 
    'index.html',
    'about.html',
    'contact.html',
    'projects.html',
    'personal_projects.html',
    'internship_projects.html',
    'school_projects.html',
    'style.css',
    'script.js',
    'manifest.json',
    // --- Image Assets ---
    'images/app.png',
    'images/icon.png',
    'images/icona.png',
    'images/iconb.png',
    'images/icont.png',
    'images/profile.jpg',
    'images/contact.png',
    'images/contactc.png',
    'images/contactb.png',
    'images/hback.png', 
    'images/intern.png',
    'images/personal.png',
    'images/school.png',
    'images/github.png',
    'images/about.png',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

/**
 * 1. INSTALL EVENT: Caching the core app shell assets
 */
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching core assets:', CORE_ASSETS);
                return cache.addAll(CORE_ASSETS);
            })
            .catch(err => {
                console.error('[Service Worker] Failed to cache assets:', err);
            })
    );
});

/**
 * 2. ACTIVATE EVENT: Cleaning up old caches (versioning)
 */
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

/**
 * 3. FETCH EVENT: Serving requests from cache first, then falling back to network
 */
self.addEventListener('fetch', (event) => {
    if (event.request.url.startsWith(self.location.origin) || event.request.url.includes('cdnjs.cloudflare.com')) {
        event.respondWith(
            caches.match(event.request)
                .then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }

                    // If not found in cache, fetch it from the network
                    return fetch(event.request)
                        .then((networkResponse) => {
                            if (networkResponse && networkResponse.status === 200) {
                                const responseToCache = networkResponse.clone();
                                caches.open(CACHE_NAME).then((cache) => {
                                    cache.put(event.request, responseToCache);
                                });
                            }
                            return networkResponse;
                        })
                        .catch(() => {
                            console.log(`[Service Worker] Fetch failed for: ${event.request.url}`);
                        });
                })
        );
    }
});
