# Oraciones — versión web

App de una sola página (sin instalar nada) para generar y copiar los 6 prompts.
Funciona en cualquier móvil (Android o iPhone) directamente desde el navegador.

## Qué hay en esta carpeta

- `index.html` — la app entera (HTML + CSS + JS en un solo archivo)
- `manifest.json` — permite "Añadir a pantalla de inicio" con icono propio
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — iconos de la app

No hay nada que instalar, compilar ni configurar. Son archivos estáticos.

## Publicarla gratis con GitHub Pages (5 pasos)

1. **Entra en [github.com](https://github.com)** y crea una cuenta gratuita si no
   tienes una (o inicia sesión si ya tienes).

2. **Crea un repositorio nuevo**: botón verde **"New"** → ponle un nombre, por
   ejemplo `oraciones` → marca **Public** → **Create repository**.

3. **Sube los archivos**: dentro del repositorio recién creado, pulsa
   **"Add file" → "Upload files"**, y arrastra los 5 archivos de esta carpeta
   (`index.html`, `manifest.json`, `icon-192.png`, `icon-512.png`,
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

## Si más adelante cambias algo

Vuelve a "Add file → Upload files" en el mismo repositorio y sube la versión
nueva de `index.html` (GitHub te dejará sobrescribir el archivo). Los cambios
se ven reflejados en el link en 1-2 minutos, sin que tu abuela tenga que
reinstalar ni hacer nada de nuevo.
