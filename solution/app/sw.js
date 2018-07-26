importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(/\.(?:html|css)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'pages',
  })
);

workbox.routing.registerRoute(/\.(?:png|gif|jpg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50
      })
    ]
  })
);
