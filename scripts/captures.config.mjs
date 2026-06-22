/**
 * captures.config.mjs — fuente de verdad de las capturas a optimizar.
 *
 * Editá SOLO este archivo para agregar / quitar / reemplazar capturas y después
 * corré:  npm run optimize:captures
 *
 * Ver la guía completa en docs/CAPTURAS.md
 *
 * ── Campos de cada item ──────────────────────────────────────────────
 *   from  -> ruta relativa dentro de SRC_ROOT (la captura PNG original)
 *   to    -> nombre del archivo de salida (sin extensión) → <slug>/<to>.webp
 *   kind  -> "card"    : thumbnail de la tarjeta del proyecto (ancho 640)
 *            "desktop" : captura de escritorio para la galería (ancho 1440)
 *            "mobile"  : captura de teléfono para la galería  (ancho 820)
 *
 * El `to: "card"` de cada proyecto es la imagen de la tarjeta (campo `image`
 * en src/data/projects.ts). El resto son las de la galería/carrusel: su orden
 * en la galería lo define el array `screenshots` de projects.ts, no este archivo.
 */

// Carpeta donde están las capturas PNG originales (fuera del repo).
export const SRC_ROOT = "/home/pa7r1/Descargas/capturas-apps";

// Anchos de salida por tipo (px). withoutEnlargement: no agranda imágenes chicas.
export const WIDTHS = { card: 420, desktop: 1440, mobile: 820 };
export const QUALITY = 80;

export const SELECTION = [
  {
    slug: "taskflow",
    items: [
      { from: "taskflow/todas.png", to: "card", kind: "card" },
      { from: "taskflow/todas.png", to: "todas", kind: "desktop" },
      { from: "taskflow/detalle.png", to: "detalle", kind: "desktop" },
      { from: "taskflow/completadas.png", to: "completadas", kind: "desktop" },
      { from: "taskflow/atajo.png", to: "atajo", kind: "desktop" },
    ],
  },
  {
    slug: "qretail",
    items: [
      { from: "q-retail/administrador/productos--movil.png", to: "card", kind: "card" },
      { from: "q-retail/administrador/escanear--movil.png", to: "escanear", kind: "mobile" },
      { from: "q-retail/administrador/venta--movil.png", to: "venta", kind: "mobile" },
      { from: "q-retail/administrador/productos-qr--movil.png", to: "productos-qr", kind: "mobile" },
    ],
  },
  {
    slug: "barberia",
    items: [
      { from: "vj-barber/principal/homeprivado--escritorio.png", to: "card", kind: "card" },
      { from: "vj-barber/principal/turnos--escritorio.png", to: "turnos", kind: "desktop" },
      { from: "vj-barber/principal/pagos--escritorio.png", to: "pagos", kind: "desktop" },
      { from: "vj-barber/principal/servicios--escritorio.png", to: "servicios", kind: "desktop" },
    ],
  },
  {
    slug: "on-wheels",
    items: [
      { from: "on-wheels/publico/x__servicios--escritorio.png", to: "card", kind: "card" },
      { from: "on-wheels/publico/x__servicios--escritorio.png", to: "servicios", kind: "desktop" },
      { from: "on-wheels/publico/x__cronograma--escritorio.png", to: "cronograma", kind: "desktop" },
      { from: "on-wheels/publico/x__precios--escritorio.png", to: "precios", kind: "desktop" },
    ],
  },
  {
    slug: "granja-de-videos",
    items: [
      { from: "granja-de-videos/publico/inicio--escritorio.png", to: "card", kind: "card" },
      { from: "granja-de-videos/publico/inicio--escritorio.png", to: "inicio-desktop", kind: "desktop" },
      { from: "granja-de-videos/publico/inicio--movil.png", to: "inicio-mobile", kind: "mobile" },
    ],
  },
  {
    slug: "motobitacora",
    items: [
      { from: "enduro-log/principal/moto--movil.png", to: "card", kind: "card" },
      { from: "enduro-log/principal/suspension--movil.png", to: "suspension", kind: "mobile" },
      { from: "enduro-log/principal/mantenimiento--movil.png", to: "mantenimiento", kind: "mobile" },
      { from: "enduro-log/principal/checklists--movil.png", to: "checklists", kind: "mobile" },
    ],
  },
  {
    slug: "upward",
    items: [
      { from: "upward/comun/onboarding-intro-1--movil.png", to: "card", kind: "card" },
      { from: "upward/comun/onboarding-intro-1--movil.png", to: "onboarding", kind: "mobile" },
      { from: "upward/comun/today--movil.png", to: "today", kind: "mobile" },
      { from: "upward/comun/progress--movil.png", to: "progress", kind: "mobile" },
    ],
  },
];
