self.__uv$config = {
  prefix: '/service/',
  bare: 'https://bare-snap.1tim.repl.co/',
  encodeUrl: (url) => __uv$config.bare + btoa(url),
};
