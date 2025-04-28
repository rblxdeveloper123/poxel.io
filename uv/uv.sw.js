self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.startsWith(self.__uv$config.prefix)) {
    const encodedUrl = url.pathname.slice(self.__uv$config.prefix.length);
    event.respondWith(fetch(atob(encodedUrl)));
  }
});
