# Oraciones — versión web

App de una sola página (sin instalar nada) para generar y copiar los 6 prompts.
Funciona en cualquier móvil (Android o iPhone) directamente desde el navegador,
incluso sin conexión después de la primera visita.
Cada prompt tiene botón para copiar y abrir directamente **Gemini o ChatGPT**,
para poder probar cuál da mejor resultado con cada foto.

## Qué hay en esta carpeta

- `index.html` — la app entera (HTML + CSS + JS en un solo archivo)
- `sw.js` — service worker: permite abrir la app sin internet tras la primera visita
- `manifest.json` — permite "Añadir a pantalla de inicio" con icono propio
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — iconos de la app

No hay nada que instalar, compilar ni configurar. Son archivos estáticos.

## Publicarla gratis con GitHub Pages (5 pasos)

1. **Entra en [github.com](https://github.com)** y crea una cuenta gratuita si no
   tienes una (o inicia sesión si ya tienes).

2. **Crea un repositorio nuevo**: botón verde **"New"** → ponle un nombre, por
   ejemplo `oraciones` → marca **Public** → **Create repository**.

3. **Sube los archivos**: dentro del repositorio recién creado, pulsa
   **"Add file" → "Upload files"**, y arrastra los 6 archivos de esta carpeta
   (`index.html`, `sw.js`, `manifest.json`, `icon-192.png`, `icon-512.png`,
   `apple-touch-icon.png`) a la ventana. Abajo pulsa **"Commit changes"**.

4. **Activa GitHub Pages**: en el repositorio, ve a **Settings** (pestaña
   superior) → **Pages** (menú de la izquierda) → en "Build and deployment",
   **Source**: `Deploy from a branch` → **Branch**: `main` y carpeta `/ (root)`
   → **Save**.

5. **Espera 1-2 minutos** y vuelve a esa misma página de Settings → Pages:
   arriba aparecerá el link, algo como
   `https://tu-usuario.github.io/oraciones/`. Esa es la dirección final.

## Dársela a tu abuela

Envíale ese link por WhatsApp o SMS. Al abrirlo:

- **Android (Chrome)**: menú ⋮ → "Añadir a pantalla de inicio".
- **iPhone (Safari)**: botón compartir 📤 → "Añadir a pantalla de inicio".

Le quedará un icono propio en su pantalla, y se abrirá a pantalla completa
como una app, aunque por dentro sea una página web.

## Funciones que tiene la app

- 6 tipos de prompt, con campos que aparecen solos según cada uno
- Pantalla de ayuda ("❓ Cómo se usa"), accesible desde el inicio — explica el
  flujo completo paso a paso, útil si algún día usas la app sin que estés tú delante
- Botón de notas adicionales (opcional) en 4 de los 6, para pedir cosas que no
  encajan en el campo principal
- Copiar y abrir Gemini o ChatGPT, para poder comparar
- Control de tamaño de letra (A- / A+) arriba a la derecha
- "Volver a copiar" el último prompt generado, sin tener que rehacer todo
- Si el copiado automático falla, aparece una caja de texto para copiar a mano
- Funciona sin internet tras la primera visita (gracias a `sw.js`)

## Si más adelante cambias algo

Vuelve a "Add file → Upload files" en el mismo repositorio y sube la versión
nueva de los archivos que hayan cambiado (GitHub te dejará sobrescribir).
Los cambios se ven reflejados en el link en 1-2 minutos.

⚠️ **Importante ahora que hay caché offline**: cada vez que subas un
`index.html` nuevo, hay que subir también un `sw.js` con el número de
`CACHE_NAME` aumentado en 1 (por ejemplo, de `oraciones-cache-v7` a
`oraciones-cache-v8`). Si no se sube `sw.js` con el número cambiado, algunos
teléfonos podrían seguir viendo la versión guardada en caché en vez de la
nueva. Sirve también como un buen recordatorio: sube el número de la
`v7` del pie de página de `index.html` a la vez, para llevar la cuenta.

