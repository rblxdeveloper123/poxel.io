if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./uv/uv.sw.js', {
    scope: './',
  }).then(function(registration) {
    console.log('Service Worker registered with scope:', registration.scope);
  }).catch(function(error) {
    console.log('Service Worker registration failed:', error);
  });
}
