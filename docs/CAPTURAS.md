# Guía: capturas de proyectos (tarjetas + carrusel)

Cómo agregar, quitar o reemplazar las imágenes de los proyectos del portfolio.
Las capturas viven optimizadas en `public/captures/<slug>/*.webp` y se muestran en:

- **la tarjeta** del proyecto en la home (campo `image`), y
- **el carrusel** de la página de detalle (`/projects/<slug>`, campo `detail.screenshots`).

Las imágenes se sirven siempre vía `asset("captures/...")` para que funcionen en local
y en GitHub Pages (base `/PORFOLIO/`).

---

## Piezas

| Archivo | Para qué |
|---|---|
| `scripts/captures.config.mjs` | **Único archivo a editar** para el set de capturas. Lista qué PNG se optimizan y a qué nombre. |
| `scripts/optimize-captures.mjs` | Convierte los PNG a WebP. No hace falta tocarlo. |
| `src/data/projects.ts` | Asocia las capturas a cada proyecto (`image` + `detail.screenshots` con orientación y caption bilingüe). |
| `public/captures/<slug>/` | Salida WebP (lo que se commitea y se sirve). |

`SRC_ROOT` (en `captures.config.mjs`) apunta a la carpeta con los PNG originales
(hoy `/home/pa7r1/Descargas/capturas-apps`). Esa carpeta puede borrarse después:
los `.webp` ya quedan guardados en `public/`.

### Tipos (`kind`) y tamaños

| kind | uso | ancho de salida |
|---|---|---|
| `card` | thumbnail de la tarjeta del proyecto | 420 px |
| `desktop` | captura de escritorio en el carrusel (marco navegador) | 1440 px |
| `mobile` | captura de teléfono en el carrusel (marco celular) | 820 px |

La **orientación** (`desktop` / `mobile`) en `projects.ts` define el marco que se dibuja.
Tiene que coincidir con el `kind` con el que generaste la imagen.

---

## Agregar una captura

### Opción 1 — recomendada (optimizada desde un PNG)

1. Conseguí el PNG (ej. dejalo en `SRC_ROOT`).
2. En `scripts/captures.config.mjs`, agregá un item al `slug` correspondiente:
   ```js
   { from: "vj-barber/principal/clientes--escritorio.png", to: "clientes", kind: "desktop" },
   ```
3. Generá los WebP:
   ```bash
   npm run optimize:captures
   ```
4. En `src/data/projects.ts`, agregá la entrada al array `detail.screenshots` del proyecto:
   ```ts
   {
     src: asset("captures/barberia/clientes.webp"),
     orientation: "desktop",
     caption: { es: "Gestión de clientes", en: "Client management" },
   },
   ```
   El **orden del array = orden en el carrusel**.

### Opción 2 — rápida (una imagen suelta, sin tocar la config)

Convertí un archivo puntual y referencialo a mano:

```bash
node scripts/optimize-captures.mjs ~/Descargas/clientes.png barberia/clientes desktop
```

Esto crea `public/captures/barberia/clientes.webp`. Después agregás la misma entrada
`{ src, orientation, caption }` en `projects.ts` (paso 4 de arriba).

### Opción 3 — ya tengo un `.webp` o `.png` listo

Copialo a `public/captures/<slug>/` y referencialo con `asset("captures/<slug>/archivo.webp")`
en `projects.ts`. (Para `.png` cambiá la extensión en el `src`.) Sin pasar por el script.

---

## Cambiar la imagen de la tarjeta

La tarjeta usa el item con `to: "card"`. Cambiá su `from` en `captures.config.mjs`,
corré `npm run optimize:captures`, y listo (el campo `image` del proyecto ya apunta a
`captures/<slug>/card.webp`).

---

## Reemplazar una captura

Cambiá el `from` del item en `captures.config.mjs` (manteniendo el mismo `to`) y volvé a
correr `npm run optimize:captures`. El `.webp` se sobreescribe; no hace falta tocar `projects.ts`.

## Quitar una captura

1. Borrá la entrada del array `detail.screenshots` en `projects.ts`.
2. Borrá el item de `captures.config.mjs`.
3. Borrá el archivo `public/captures/<slug>/<nombre>.webp`.

## Reordenar el carrusel

Cambiá el orden de los objetos dentro del array `detail.screenshots` del proyecto en
`projects.ts`. No depende del script.

---

## Reglas a recordar

- **Captions bilingües obligatorias**: siempre `{ es, en }`. Si falta un idioma, el build (`tsc`) falla.
- **`orientation` y `kind` deben coincidir** (mobile con mobile, desktop con desktop).
- Después de cualquier cambio: `npm run lint` y `npm run build` para validar.
- No se commitea automáticamente: revisá y commiteá vos.

## Proyectos sin capturas

`sistema-canchas`, `anistream-tv`, `taskflow`, `sistema-zapatillas` y `ytm-download` todavía
usan una imagen de Unsplash en `image` y no tienen `screenshots`. Para sumarles capturas,
seguí "Agregar una captura" creando la carpeta `public/captures/<slug>/`.
