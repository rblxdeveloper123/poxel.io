self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.pathname.startsWith('/service/')) {
    // Proxy the request through Poxel.io
    const targetUrl = atob(url.pathname.slice(9));
    event.respondWith(fetch(targetUrl, event.request));
  }
});
