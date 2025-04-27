self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('uv-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/register-sw.js',
        '/uv/uv.client.js',
        '/uv/uv.config.js',
        '/uv/uv.sw.js',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
