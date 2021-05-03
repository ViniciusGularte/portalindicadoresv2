var CACHE_NAME = 'portal-app';

var urlsToCache = [
    '/',
    '/images/icons/Portal-de-Indicadores2.png',
    '/src/services/indicadores_data.js',
    '/favicon.ico',
    '/icon?family=Material+Icons'
];

window.self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

window.self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
}); 