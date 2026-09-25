/**
 * captures.config.mjs — fuente de verdad de las capturas a optimizar.
 *
 * Editá SOLO este archivo para agregar / quitar / reemplazar capturas y después
 * corré:  npm run optimize:captures
 *
 * Ver la guía completa en docs/CAPTURAS.md
 *
 * ── Campos de cada item ──────────────────────────────────────────────
 *   from   -> ruta relativa al origen elegido
 *   source -> "external" (default, SRC_ROOT) o "repo" (raíz del repositorio)
 *   to     -> nombre del archivo de salida (sin extensión) → <slug>/<to>.webp
 *   kind   -> "card"    : thumbnail de la tarjeta del proyecto (ancho 420)
 *             "desktop" : captura de escritorio para la galería (ancho 1440)
 *             "mobile"  : captura de teléfono para la galería  (ancho 820)
 *
 * Operaciones opcionales, aplicadas en este orden:
 *   crop  -> recorte por bordes { top, right, bottom, left }
 *   trim  -> quita padding uniforme; `padding` devuelve un margen controlado
 *   frame -> encuadra a una relación exacta sin deformar la captura
 *   width -> reemplaza el ancho máximo de `kind` para ese item
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
    slug: "venta-rapida",
    items: [
      { from: "venta-rapida/administrador/productos--movil.png", to: "card", kind: "card" },
      {
        from: "public/captures/venta-rapida/scanear.png",
        source: "repo",
        to: "escanear",
        kind: "mobile",
        trim: { threshold: 8, padding: 8, background: "#292929" },
      },
      {
        from: "public/captures/venta-rapida/ventarapida.png",
        source: "repo",
        to: "venta",
        kind: "mobile",
        trim: { threshold: 8, padding: 8, background: "#292929" },
      },
      {
        from: "public/captures/venta-rapida/productos.png",
        source: "repo",
        to: "productos",
        kind: "mobile",
        trim: { threshold: 8, padding: 8, background: "#292929" },
      },
    ],
  },
  {
    slug: "barberia",
    items: [
      { from: "vj-barber/principal/homeprivado--escritorio.png", to: "card", kind: "card" },
      {
        from: "public/captures/barberia/turnos.png",
        source: "repo",
        to: "turnos",
        kind: "mobile",
        trim: { threshold: 8, padding: 8, background: "#282828" },
      },
      {
        from: "public/captures/barberia/pagos.png",
        source: "repo",
        to: "pagos",
        kind: "mobile",
        trim: { threshold: 8, padding: 8, background: "#282828" },
      },
      {
        from: "public/captures/barberia/servicios.png",
        source: "repo",
        to: "servicios",
        kind: "mobile",
        trim: { threshold: 8, padding: 8, background: "#282828" },
      },
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
      {
        from: "public/captures/motobitacora/inicio.png",
        source: "repo",
        to: "card",
        kind: "card",
        width: 720,
        trim: { threshold: 8, padding: 8, background: "#282828" },
        frame: { ratio: [16, 9], fit: "contain", background: "#211c18" },
      },
      {
        from: "public/captures/motobitacora/mantenimiento.png",
        source: "repo",
        to: "mantenimiento",
        kind: "mobile",
        trim: { threshold: 8, padding: 8, background: "#282828" },
      },
      {
        from: "public/captures/motobitacora/suspension.png",
        source: "repo",
        to: "suspension",
        kind: "mobile",
        trim: { threshold: 8, padding: 8, background: "#282828" },
      },
      {
        from: "public/captures/motobitacora/checklist.png",
        source: "repo",
        to: "checklist",
        kind: "mobile",
        trim: { threshold: 8, padding: 8, background: "#282828" },
      },
      {
        from: "public/captures/motobitacora/sesiones.png",
        source: "repo",
        to: "sesiones",
        kind: "mobile",
        trim: { threshold: 8, padding: 8, background: "#282828" },
      },
    ],
  },
  {
    slug: "upward",
    items: [
      { from: "upward/comun/onboarding-intro-1--movil.png", to: "card", kind: "card" },
      { from: "upward/comun/onboarding-intro-1--movil.png", to: "onboarding", kind: "mobile" },
      // "today" retirada: la pantalla muestra el badge del coach IA, que es
      // funcionalidad a medio construir y no debe aparecer en el portafolio.
      { from: "upward/comun/progress--movil.png", to: "progress", kind: "mobile" },
    ],
  },
  {
    slug: "makem",
    items: [
      {
        from: "public/captures/makem/inicio.png",
        source: "repo",
        to: "card",
        kind: "card",
        width: 720,
        frame: { ratio: [16, 9], fit: "cover", position: "top" },
      },
      {
        from: "public/captures/makem/inicio.png",
        source: "repo",
        to: "inicio",
        kind: "desktop",
        frame: { ratio: [16, 10], fit: "cover", position: "top" },
      },
      {
        from: "public/captures/makem/proyectos.png",
        source: "repo",
        to: "proyectos",
        kind: "desktop",
        frame: { ratio: [16, 10], fit: "cover", position: "top" },
      },
    ],
  },
  {
    slug: "aula-virtual",
    items: [
      {
        from: "public/captures/aula-virtual/panel.png",
        source: "repo",
        to: "card",
        kind: "card",
        width: 720,
        crop: { top: 31 },
        frame: { ratio: [16, 9], fit: "cover", position: "top" },
      },
      {
        from: "public/captures/aula-virtual/panel.png",
        source: "repo",
        to: "panel",
        kind: "desktop",
        crop: { top: 31 },
        frame: { ratio: [16, 10], fit: "contain", background: "#f7f7f8" },
      },
      {
        from: "public/captures/aula-virtual/cursos.png",
        source: "repo",
        to: "cursos",
        kind: "desktop",
        crop: { top: 31 },
        frame: { ratio: [16, 10], fit: "contain", background: "#f7f7f8" },
      },
      {
        from: "public/captures/aula-virtual/cursodesdealumno.png",
        source: "repo",
        to: "curso-alumno",
        kind: "desktop",
        crop: { top: 31 },
        frame: { ratio: [16, 10], fit: "contain", background: "#f7f7f8" },
      },
    ],
  },
  {
    slug: "circuitos-argentinos",
    items: [
      {
        from: "public/captures/circuitos-argentinos/circuitoseleccionado.png",
        source: "repo",
        to: "card",
        kind: "card",
        width: 720,
        frame: { ratio: [16, 9], fit: "cover", position: "top" },
      },
      {
        from: "public/captures/circuitos-argentinos/principal.png",
        source: "repo",
        to: "mapa",
        kind: "desktop",
        frame: { ratio: [16, 10], fit: "cover", position: "top" },
      },
      {
        from: "public/captures/circuitos-argentinos/circuitoseleccionado.png",
        source: "repo",
        to: "seleccion",
        kind: "desktop",
        frame: { ratio: [16, 10], fit: "cover", position: "top" },
      },
      {
        from: "public/captures/circuitos-argentinos/vistadentrodelcircuito.png",
        source: "repo",
        to: "detalle",
        kind: "desktop",
        frame: { ratio: [16, 10], fit: "cover", position: "top" },
      },
      {
        from: "public/captures/circuitos-argentinos/sumatucircuito.png",
        source: "repo",
        to: "carga",
        kind: "desktop",
        frame: { ratio: [16, 10], fit: "cover", position: "top" },
      },
    ],
  },
  {
    slug: "modex-ecommerce",
    items: [
      { from: "modex/publico/inicio--escritorio.png", to: "card", kind: "card" },
      { from: "modex/publico/inicio--escritorio.png", to: "inicio", kind: "desktop" },
      { from: "modex/publico/inicio--movil.png", to: "inicio-mobile", kind: "mobile" },
    ],
  },
];
