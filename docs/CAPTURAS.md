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
| `scripts/captures.config.mjs` | Fuente de verdad del set: origen, selección, recorte, encuadre y nombre de salida. |
| `scripts/optimize-captures.mjs` | Ejecuta con Sharp las operaciones declaradas en la configuración y convierte a WebP. |
| `src/data/projects.ts` | Asocia las capturas a cada proyecto (`image` + `detail.screenshots` con orientación y caption bilingüe). |
| `public/captures/<slug>/` | Salida WebP (lo que se commitea y se sirve). |

Cada item elige su origen con `source`. `"external"` (default) resuelve desde
`SRC_ROOT` —hoy `/home/pa7r1/Descargas/capturas-apps`— y `"repo"` resuelve desde
la raíz del repositorio. Las capturas nuevas conservadas en `public/captures/` usan
`source: "repo"`, por lo que un PNG externo antiguo no puede sobrescribirlas.
Los PNG originales no se eliminan al optimizar.

### Tipos (`kind`) y tamaños

| kind | uso | ancho de salida |
|---|---|---|
| `card` | thumbnail de la tarjeta del proyecto | 420 px por defecto; las nuevas usan 720 px |
| `desktop` | captura de escritorio en el carrusel (marco navegador) | hasta 1440 px |
| `mobile` | captura de teléfono en el carrusel (marco celular) | hasta 820 px |

Sharp usa `withoutEnlargement`: esos valores son máximos, no una promesa de resolución.
`width` permite un máximo puntual. `crop` quita bordes conocidos, `trim` recorta padding
uniforme y `frame` produce una relación exacta con `cover` o `contain`, siempre sin deformar.

La **orientación** (`desktop` / `mobile`) en `projects.ts` define la ventana de la galería.
Si el PNG ya trae la silueta completa del teléfono, agregá
`presentation: "already-framed"`: la galería y el lightbox no dibujan un segundo teléfono
ni fuerzan el contenido a 9:19.

---

## Agregar una captura

### Opción 1 — recomendada (optimizada desde un PNG)

1. Conservá el PNG original. Para una captura nueva del portfolio, dejalo en
   `public/captures/<slug>/` y usá el origen `repo`.
2. En `scripts/captures.config.mjs`, agregá un item al `slug` correspondiente:
   ```js
   {
     from: "public/captures/barberia/clientes.png",
     source: "repo",
     to: "clientes",
     kind: "mobile",
     trim: { threshold: 8, padding: 8, background: "#282828" },
   },
   ```
3. Generá los WebP:
   ```bash
   npm run optimize:captures
   ```
4. En `src/data/projects.ts`, agregá la entrada al array `detail.screenshots` del proyecto:
   ```ts
   {
     src: asset("captures/barberia/clientes.webp"),
     orientation: "mobile",
     presentation: "already-framed",
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

### Opción 3 — ya tengo un `.webp` listo

Copialo a `public/captures/<slug>/` y referencialo con `asset("captures/<slug>/archivo.webp")`
en `projects.ts`. Si existe el PNG fuente, preferí declararlo con `source: "repo"` para que
el resultado siga siendo reproducible.

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
- Usá `presentation: "already-framed"` solo cuando la imagen ya contiene el dispositivo completo.
- No agrandes fuentes chicas ni recortes el centro de un teléfono para forzarlo a 16:9; para cards,
  usá un `frame` 16:9 con `fit: "contain"` y un fondo coherente.
- Después de cualquier cambio: `pnpm optimize:captures`, `pnpm lint` y `pnpm build`.
- No se commitea automáticamente: revisá y commiteá vos.

## Proyectos sin capturas

*(Actualizado 2026-08-06. Comprobalo contra `projects.ts`, no contra esta lista.)*

Tres proyectos todavía usan **una foto de banco de imágenes (Unsplash)** en `image` y no tienen
`screenshots`: `anistream-tv`, `sistema-canchas` y `sistema-zapatillas`. Una foto de stock
haciéndose pasar por captura del producto es peor que no tener imagen — hay que reemplazarlas
por capturas reales o sacar el proyecto. Para sumarles capturas, seguí "Agregar una captura"
creando la carpeta `public/captures/<slug>/`.

`ytm-download` sí tiene capturas (4 `.webp`) pero **no tiene entrada en `captures.config.mjs`**:
se hicieron con el modo imagen suelta, así que `pnpm optimize:captures` no puede
regenerarlas. Si las tocás, agregale primero sus items al config.

## Selección actual de capturas nuevas

- **Aula Virtual:** panel del instructor, cursos y vista del curso del alumno; se quita la barra
  del navegador capturada y no se usa el login como evidencia principal.
- **VJ-Barber:** turnos, pagos y servicios; los tres PNG ya incluyen el teléfono completo.
- **Venta Rápida:** escáner, venta rápida y productos/etiquetas QR; teléfono completo.
- **Circuitos Argentinos:** mapa, selección, ficha y carga del recorrido, todas de escritorio.
- **EnduroLog:** mantenimiento, suspensión, checklist y sesiones; teléfono completo.
- **Makem:** inicio de la agencia y galería de proyectos.
- **ON-WHEELS:** su captura móvil existente también se marca como ya enmarcada.
