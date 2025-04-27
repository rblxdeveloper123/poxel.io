export class UVClient {
  constructor() {
    this.sw = null;
  }

  start() {
    if (this.sw) {
      return;
    }

    this.sw = navigator.serviceWorker.ready;
  }

  fetch(url) {
    return fetch(url);
  }
}
