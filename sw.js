// Service worker de "Oraciones" — permite abrir la app sin conexión
// después de haberla visitado al menos una vez con internet.
//
// ESTRATEGIA DELIBERADA: network-first (no cache-first).
// Ya tuvimos un problema real de caché desactualizada en este proyecto
// (el navegador mostraba una versión vieja tras actualizar en GitHub).
// Por eso: si hay conexión, SIEMPRE se pide la versión más reciente al
// servidor y se actualiza la caché; la copia guardada solo se usa como
// último recurso, cuando no hay conexión en absoluto.

const CACHE_NAME = "oraciones-cache-v7";
const CORE_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
