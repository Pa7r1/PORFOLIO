import type { Project } from "@/types";
import { asset } from "@/utils/asset";

export const projects: Project[] = [
  // ── 1. SISTEMA-CANCHAS (prioritario) ─────────────────────────────────────
  {
    id: "1",
    slug: "sistema-canchas",
    title: "Sistema Canchas",
    tagline: {
      es: "SaaS multi-tenant para complejos deportivos con arquitectura empresarial",
      en: "Multi-tenant SaaS for sports venues with enterprise architecture",
    },
    description: {
      es: "Plataforma de gestión integral para complejos de canchas: reservas, caja, despensa, inventario y reportes. PWA offline-first con sincronización en tiempo real via WebSockets.",
      en: "Full management platform for sports complexes: bookings, cash register, canteen, inventory, and reports. Offline-first PWA with real-time sync via WebSockets.",
    },
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=350&fit=crop",
    technologies: [
      "React",
      "Hono",
      "Drizzle ORM",
      "PostgreSQL",
      "RLS",
      "Turborepo",
      "PWA",
      "WebSockets",
    ],
    githubUrl: "https://github.com/Pa7r1/Sistema-Canchas",
    hasDetail: true,
    detail: {
      year: 2025,
      status: "production",
      problem: {
        es: "Gestionar un complejo de canchas con múltiples inquilinos, precios dinámicos, caja, inventario de despensa y reservas en tiempo real sin solapamientos es operacionalmente imposible sin las herramientas correctas. El problema más crítico: los solapamientos de turnos, que en sistemas convencionales sólo se detectan a nivel de aplicación, lo que deja una ventana de tiempo en concurrencia donde dos reservas pueden colisionar.",
        en: "Managing a sports venue with multiple tenants, dynamic pricing, cash register, canteen inventory, and real-time bookings without overlaps is operationally impossible without the right tools. The most critical issue: booking overlaps, which in conventional systems are only caught at the application level — leaving a concurrency window where two reservations can collide.",
      },
      architecture: {
        es: "Monorepo Turborepo con tres paquetes: `frontend` (React + Vite + Workbox PWA), `backend` (Hono + Drizzle + Node.js) y `shared` (tipos y validaciones). PostgreSQL con Row Level Security (RLS) aísla los datos de cada tenant a nivel de base de datos, no de middleware. Una restricción de exclusión GIST sobre un `tstzrange` previene solapamientos de reservas con garantía transaccional.",
        en: "Turborepo monorepo with three packages: `frontend` (React + Vite + Workbox PWA), `backend` (Hono + Drizzle + Node.js), and `shared` (types and validations). PostgreSQL with Row Level Security (RLS) isolates tenant data at the database level, not middleware. A GIST exclusion constraint on a `tstzrange` type prevents booking overlaps with transactional guarantees.",
      },
      stackRationale: {
        es: "Hono por su performance edge-ready y tipado nativo con TypeScript. Drizzle ORM por su compatibilidad total con GIST constraints y su type-safety sin overhead de metadatos. Turborepo para compartir tipos entre frontend y backend sin duplicación. RLS por seguridad de multi-tenancy a nivel de motor SQL, imposible de bypassear desde la aplicación.",
        en: "Hono for its edge-ready performance and native TypeScript typing. Drizzle ORM for its full compatibility with GIST constraints and type-safety without metadata overhead. Turborepo to share types between frontend and backend without duplication. RLS for multi-tenant security at the SQL engine level, impossible to bypass from the application layer.",
      },
      challenges: [
        {
          es: "Implementar la restricción GIST anti-solapamiento en PostgreSQL usando el tipo `tstzrange` y el operador de exclusión `&&`, requerió entender los índices GiST y la semántica de operadores de PostgreSQL a bajo nivel.",
          en: "Implementing the GIST anti-overlap constraint in PostgreSQL using the `tstzrange` type and the `&&` exclusion operator required understanding GiST indexes and PostgreSQL operator semantics at a low level.",
        },
        {
          es: "Diseñar el esquema RLS para que los triggers del sistema (caja automática, actualización de stock) funcionaran con el rol de servicio sin romper el aislamiento de tenant.",
          en: "Designing the RLS schema so that system triggers (auto cash register, stock updates) worked with the service role without breaking tenant isolation.",
        },
        {
          es: "Sincronización offline con Service Worker: resolver conflictos cuando la app vuelve online con datos que pueden haber cambiado en el servidor durante la desconexión.",
          en: "Offline sync with Service Worker: resolving conflicts when the app comes back online with data that may have changed on the server during disconnection.",
        },
      ],
      learnings: {
        es: "La multi-tenencia requiere decisiones de aislamiento desde el día cero — retrofittear RLS sobre un esquema existente es costoso. Comprometerse con constrainst a nivel de BD desde el inicio previno bugs de concurrencia que ningún test de aplicación hubiera detectado.",
        en: "Multi-tenancy requires isolation decisions from day zero — retrofitting RLS onto an existing schema is expensive. Committing to DB-level constraints from the start prevented concurrency bugs that no application-level test would have caught.",
      },
    },
  },

  // ── 2. QRETAIL ───────────────────────────────────────────────────────────
  {
    id: "2",
    slug: "qretail",
    title: "QRetail",
    tagline: {
      es: "SaaS retail multi-sucursal con escaneo QR y planes de suscripción",
      en: "Multi-branch retail SaaS with QR scanning and subscription plans",
    },
    description: {
      es: "Sistema de gestión para Emprendedores/Tiendas: escaneo de codigo de barras y qr, generacion de codigo qr para productos sin codigo de barras, ventas, categorías, roles/permisos y planes de suscripción (Básico/Pro/Premium) con lógica diferencial por plan. Aplicacion web, facil uso en mobil.",
      en: "Retail store management system: QR-coded products, sales, categories, roles/permissions, and subscription plans (Basic/Pro/Premium) with per-plan differential logic.",
    },
    image: asset("captures/qretail/card.webp"),
    technologies: [
      "Next.js 16",
      "Prisma 7",
      "PostgreSQL",
      "NextAuth v5",
      "Tailwind v4",
      "Docker",
    ],
    githubUrl: "https://github.com/Pa7r1/QRetail",
    hasDetail: true,
    detail: {
      year: 2025,
      status: "wip",
      problem: {
        es: "Las tiendas retail multi-sucursal necesitan control de productos, vendedores y caja desde una sola plataforma, con restricciones por plan que habiliten o deshabiliten funciones sin requerir código condicional esparcido por toda la app.",
        en: "Multi-branch retail shops need centralized product, staff, and cash control from a single platform, with plan-based feature gating that doesn't require conditional logic scattered across the entire codebase.",
      },
      architecture: {
        es: "Next.js App Router con server components para la mayoría de las páginas y client components aislados en features interactivas (escaneo QR, formularios de venta). Prisma 7 maneja el schema multi-tenant; NextAuth v5 con Prisma Adapter para sesiones persistentes. El escaneo QR usa html5-qrcode accediendo a la cámara nativa sin WebRTC manual.",
        en: "Next.js App Router with server components for most pages and isolated client components for interactive features (QR scanning, sales forms). Prisma 7 handles the multi-tenant schema; NextAuth v5 with Prisma Adapter for persistent sessions. QR scanning uses html5-qrcode accessing native camera without manual WebRTC.",
      },
      stackRationale: {
        es: "Next.js App Router para SSR nativo sin configuración extra, crítico para el dashboard de administración. Prisma 7 por su schema migration system que facilita evolucionar el modelo de datos. NextAuth v5 para no reinventar autenticación y sesiones.",
        en: "Next.js App Router for native SSR without extra configuration, critical for the admin dashboard. Prisma 7 for its migration system that makes evolving the data model easier. NextAuth v5 to avoid reinventing authentication and sessions.",
      },
      challenges: [
        {
          es: "Implementar el feature-gating de planes sin lógica condicional distribuida: se resolvió con un helper `canDo(feature, plan)` central que todas las server actions consultan antes de ejecutar.",
          en: "Implementing plan feature-gating without distributed conditional logic: solved with a central `canDo(feature, plan)` helper that all server actions consult before executing.",
        },
        {
          es: "El escaneo QR desde cámara en dispositivos iOS requirió permisos especiales en el meta de la página y un fallback para Safari que no soporta todas las APIs de MediaDevices.",
          en: "Camera-based QR scanning on iOS required special meta permissions and a Safari fallback for missing MediaDevices API support.",
        },
      ],
      learnings: {
        es: "Centralizar la lógica de autorización en un único lugar (no distribuirla en middleware, components y server actions) hace que los cambios de modelo de negocio sean cambios de una línea.",
        en: "Centralizing authorization logic in a single place (not distributing it across middleware, components, and server actions) makes business model changes into one-line edits.",
      },
      screenshots: [
        {
          src: asset("captures/qretail/escanear.webp"),
          orientation: "mobile",
          caption: { es: "Escaneo de QR y código de barras", en: "QR and barcode scanning" },
        },
        {
          src: asset("captures/qretail/venta.webp"),
          orientation: "mobile",
          caption: { es: "Venta rápida con favoritos y categorías", en: "Quick sale with favorites and categories" },
        },
        {
          src: asset("captures/qretail/productos-qr.webp"),
          orientation: "mobile",
          caption: { es: "Generación de QR para productos sin código", en: "QR generation for code-less products" },
        },
      ],
    },
  },

  // ── 3. BARBERÍA / VJ-BARBER ──────────────────────────────────────────────
  {
    id: "3",
    slug: "barberia",
    title: "VJ-Barber — Sistema de Gestión",
    tagline: {
      es: "Sistema de gestión de barbería en producción real con VPS propio",
      en: "Real-production barber shop management system on own VPS",
    },
    description: {
      es: "Sistema completo para gestión de barbería: agendamiento, caja, reportes, roles, sucursales y mapas de ubicación. Desplegado en VPS con Nginx, SSL y Docker Compose.",
      en: "Complete barber shop management system: scheduling, cash register, reports, roles, branches, and location maps. Deployed on VPS with Nginx, SSL, and Docker Compose.",
    },
    image: asset("captures/barberia/card.webp"),
    technologies: [
      "FastAPI",
      "MySQL",
      "React",
      "Zustand",
      "Docker",
      "Nginx",
      "VPS",
    ],
    githubUrl: "https://github.com/Pa7r1/Barber-a",
    hasDetail: true,
    detail: {
      year: 2026,
      status: "production",
      problem: {
        es: "El cliente (VJ-Barber) gestionaba turnos y caja en papel, con empleados que no sabían su agenda hasta llegar al local. Necesitaba un sistema accesible desde el celular, que calculara precios automáticamente según el servicio y el empleado, y que permitiera ver el estado de la caja en tiempo real.",
        en: "The client (VJ-Barber) managed bookings and the cash register on paper, with employees who didn't know their schedule until arriving. They needed a mobile-accessible system that automatically calculated prices per service and employee, and allowed real-time cash register visibility.",
      },
      architecture: {
        es: "Backend en FastAPI con MySQL normalizado: stored procedures para cálculos de caja, triggers para auditoría de precios y views para reportes de performance por empleado. Frontend en React con Zustand para estado global de la sesión activa. Desplegado en VPS Ubuntu con Nginx como reverse proxy, Certbot para SSL automático y Docker Compose para orquestación de servicios.",
        en: "FastAPI backend with normalized MySQL: stored procedures for cash calculations, triggers for price auditing, and views for per-employee performance reports. React frontend with Zustand for active session global state. Deployed on Ubuntu VPS with Nginx as reverse proxy, Certbot for automatic SSL, and Docker Compose for service orchestration.",
      },
      stackRationale: {
        es: "FastAPI por su velocidad de desarrollo, tipado automático con Pydantic y documentación OpenAPI integrada (clave para mostrarle al cliente el contrato de la API). MySQL porque el cliente ya tenía infraestructura compatible; se aprovechó al máximo con SP y triggers para que la lógica de negocio estuviera protegida en la BD.",
        en: "FastAPI for development speed, automatic Pydantic typing, and built-in OpenAPI docs (key for showing the client the API contract). MySQL because the client already had compatible infrastructure; maximized with SPs and triggers to keep business logic protected in the DB layer.",
      },
      challenges: [
        {
          es: "Calcular el precio dinámico de un turno dependiendo del empleado, el servicio, la hora del día y posibles descuentos activos, sin que la lógica estuviera duplicada entre el frontend (preview) y el backend (confirmación).",
          en: "Calculating dynamic booking prices based on employee, service, time of day, and active discounts — without duplicating the logic between frontend (preview) and backend (confirmation).",
        },
        {
          es: "El deploy en VPS desde cero: configurar Nginx con múltiples virtual hosts, renovación automática de SSL con Certbot, y asegurar que los contenedores sobrevivan reinicios del servidor.",
          en: "Zero-to-VPS deployment: configuring Nginx with multiple virtual hosts, automatic SSL renewal with Certbot, and ensuring containers survive server restarts.",
        },
      ],
      learnings: {
        es: "Poner la lógica de negocio crítica en stored procedures hace que cambios de reglas comerciales no requieran deploy del backend — sólo una migración. En un negocio de cliente real, eso es invaluable.",
        en: "Putting critical business logic in stored procedures means business rule changes don't require a backend deploy — just a migration. In a real client business, that's invaluable.",
      },
      screenshots: [
        {
          src: asset("captures/barberia/turnos.webp"),
          orientation: "desktop",
          caption: { es: "Gestión de turnos por estado", en: "Booking management by status" },
        },
        {
          src: asset("captures/barberia/pagos.webp"),
          orientation: "desktop",
          caption: { es: "Registro de pagos y comisiones", en: "Payments and commissions tracking" },
        },
        {
          src: asset("captures/barberia/servicios.webp"),
          orientation: "desktop",
          caption: { es: "Catálogo de servicios y precios", en: "Services & pricing catalog" },
        },
      ],
    },
  },

  // ── 4. ANISTREAM-TV ───────────────────────────────────────────────────────
  {
    id: "4",
    slug: "anistream-tv",
    title: "AniStream TV",
    tagline: {
      es: "App Android nativa de streaming de anime — Kotlin modular",
      en: "Native Android anime streaming app — modular Kotlin",
    },
    description: {
      es: "Aplicación Android de streaming de anime con catálogo, búsqueda de series/episodios, reproductor integrado y sistema de seguimiento de progreso.",
      en: "Android anime streaming app with catalog, series/episode search, integrated player, and watch progress tracking.",
    },
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=350&fit=crop",
    technologies: [
      "Kotlin",
      "Android",
      "Gradle modular",
      "Jetpack Compose",
      "CI/CD",
    ],
    githubUrl: "https://github.com/Pa7r1/AniStream-TV",
    hasDetail: true,
    detail: {
      year: 2025,
      status: "mvp",
      problem: {
        es: "La mayoría de las apps de streaming disponibles en la Play Store para anime tienen UX deteriorada, ads invasivos o requieren suscripción para catálogo básico. El objetivo era una app limpia, performante y nativa que demostrara competencia en desarrollo Android moderno.",
        en: "Most anime streaming apps available on the Play Store have poor UX, invasive ads, or require subscriptions for basic catalog access. The goal was a clean, performant, native app that demonstrated competency in modern Android development.",
      },
      architecture: {
        es: "Gradle modular con módulos separados por feature (`:catalog`, `:player`, `:search`, `:core`). Esto permite compilación incremental más rápida y boundaries claros entre features. Jetpack Compose para la UI declarativa. CI/CD pipeline en GitHub Actions que firma el APK con el keystore almacenado como secret.",
        en: "Modular Gradle with separate modules per feature (`:catalog`, `:player`, `:search`, `:core`). This enables faster incremental compilation and clear feature boundaries. Jetpack Compose for declarative UI. GitHub Actions CI/CD pipeline that signs the APK with a keystore stored as a secret.",
      },
      stackRationale: {
        es: "Kotlin es el estándar de facto para Android nativo. La arquitectura modular Gradle es lo que usan las apps de producción a escala — implementarla en un proyecto personal demostró capacidad de trabajar en codebases reales. Jetpack Compose vs XML layouts: elegí Compose para practicar el paradigma declarativo que domina el Android moderno.",
        en: "Kotlin is the de facto standard for native Android. Modular Gradle architecture is what production-scale apps use — implementing it in a personal project demonstrated ability to work in real codebases. Jetpack Compose vs XML layouts: chose Compose to practice the declarative paradigm dominating modern Android.",
      },
      challenges: [
        {
          es: "La arquitectura modular de Gradle requirió configurar dependency resolution entre módulos correctamente — los errores de compilación circular son difíciles de diagnosticar sin herramientas.",
          en: "Modular Gradle architecture required correctly configuring dependency resolution between modules — circular compilation errors are hard to diagnose without tooling.",
        },
        {
          es: "Gestionar el estado del reproductor de video (posición, calidad, buffering) de manera que sobreviva rotaciones de pantalla y navegación entre pantallas sin pérdida de datos.",
          en: "Managing video player state (position, quality, buffering) so it survives screen rotations and navigation between screens without data loss.",
        },
      ],
      learnings: {
        es: "La arquitectura modular tiene un costo de setup inicial alto pero el beneficio de compilación incremental y encapsulamiento se siente desde el primer cambio. Vale la pena desde el inicio.",
        en: "Modular architecture has a high initial setup cost, but the benefit of incremental compilation and encapsulation is felt from the first change. Worth it from the start.",
      },
    },
  },

  // ── 5. GRANJA DE VIDEOS ───────────────────────────────────────────────────
  {
    id: "5",
    slug: "granja-de-videos",
    title: "Granja de Videos",
    tagline: {
      es: "Pipeline de producción automática de short-videos con IA — costo cero",
      en: "Automated AI short-video production pipeline — zero cost",
    },
    description: {
      es: "Content Factory Engine: pipeline automatizado que convierte un prompt en un short-video publicable. Orquestación via n8n, generación de texto con Gemini, voz con Edge TTS, imágenes con Imagen y montaje con FFmpeg.",
      en: "Content Factory Engine: automated pipeline that converts a prompt into a publishable short video. Orchestration via n8n, text generation with Gemini, voice with Edge TTS, images with Imagen, and assembly with FFmpeg.",
    },
    image: asset("captures/granja-de-videos/card.webp"),
    technologies: [
      "FastAPI",
      "Python",
      "Gemini API",
      "Edge TTS",
      "FFmpeg",
      "n8n",
    ],
    githubUrl: "https://github.com/Pa7r1/Granja-de-Videos",
    hasDetail: true,
    detail: {
      year: 2025,
      status: "mvp",
      problem: {
        es: "Producir shorts de manera consistente requiere redacción, voz en off, imágenes y edición — cuatro tareas distintas que en conjunto consumen horas por video. El objetivo: automatizar todo el pipeline con herramientas de IA gratuitas o de costo marginal cero.",
        en: "Consistently producing short-form video requires scriptwriting, voiceover, images, and editing — four distinct tasks that together take hours per video. The goal: automate the entire pipeline with free or zero-marginal-cost AI tools.",
      },
      architecture: {
        es: "FastAPI expone endpoints para cada etapa del pipeline (texto, audio, imagen, ensamblado). n8n orquesta el flujo entre etapas con manejo de errores y reintentos. FFmpeg combina las pistas generadas en el video final con títulos, transiciones y música de fondo. Todo el stack corre localmente sin costos de infra.",
        en: "FastAPI exposes endpoints for each pipeline stage (text, audio, image, assembly). n8n orchestrates the flow between stages with error handling and retries. FFmpeg combines the generated tracks into the final video with titles, transitions, and background music. The entire stack runs locally with no infrastructure costs.",
      },
      stackRationale: {
        es: "Gemini API (tier gratuito) para generación de guión y prompts de imagen. Edge TTS de Microsoft (gratuito) para voz en off de calidad aceptable. Imagen 3 para ilustraciones. FFmpeg para ensamblado porque es el estándar de la industria con máxima flexibilidad. n8n como orquestador para no reinventar el manejo de errores entre pasos.",
        en: "Gemini API (free tier) for script and image prompt generation. Microsoft Edge TTS (free) for acceptable-quality voiceover. Imagen 3 for illustrations. FFmpeg for assembly as the industry standard with maximum flexibility. n8n as orchestrator to avoid reinventing error handling between steps.",
      },
      challenges: [
        {
          es: "Sincronizar el timing del audio (generado por TTS) con las imágenes y la duración del video final — Edge TTS no expone la duración de cada segmento antes de generarlo.",
          en: "Synchronizing audio timing (generated by TTS) with images and final video duration — Edge TTS doesn't expose per-segment duration before generation.",
        },
        {
          es: "Generar imágenes coherentes visualmente entre sí a partir de prompts distintos — sin un modelo de consistencia de personajes, cada imagen es independiente.",
          en: "Generating visually coherent images from different prompts — without a character consistency model, each image is independent.",
        },
      ],
      learnings: {
        es: "Los pipelines de IA son tan robustos como su paso más frágil. El error handling y el estado de cada etapa necesitan ser explícitos desde el principio — no se pueden agregar después sin refactorizar todo el flujo.",
        en: "AI pipelines are as robust as their most fragile step. Error handling and stage state need to be explicit from the start — they can't be added later without refactoring the entire flow.",
      },
      screenshots: [
        {
          src: asset("captures/granja-de-videos/inicio-desktop.webp"),
          orientation: "desktop",
          caption: { es: "Generador de video con IA — prompt a short", en: "AI video generator — prompt to short" },
        },
        {
          src: asset("captures/granja-de-videos/inicio-mobile.webp"),
          orientation: "mobile",
          caption: { es: "Vista mobile del generador", en: "Mobile view of the generator" },
        },
      ],
    },
  },

  // ── 6. MOTOBITACORA ───────────────────────────────────────────────────────
  {
    id: "6",
    slug: "motobitacora",
    title: "EnduroLog",
    tagline: {
      es: "PWA offline-first para pilotos de enduro — sin conexión, sin excusas",
      en: "Offline-first PWA for enduro riders — no connection, no excuses",
    },
    description: {
      es: "App web progresiva instalable para registro de mantenimiento de motos de enduro: suspensiones, checklists pre-carrera, sesiones y configuraciones. Funciona sin internet.",
      en: "Installable progressive web app for enduro bike maintenance tracking: suspension settings, pre-race checklists, sessions, and configurations. Works without internet.",
    },
    image: asset("captures/motobitacora/card.webp"),
    technologies: [
      "React 18",
      "Vite",
      "Service Worker",
      "localStorage",
      "PWA",
      "CSS",
    ],
    githubUrl: "https://github.com/Pa7r1/EnduroLog",
    liveUrl: "https://enduro-log.vercel.app/",
    hasDetail: true,
    detail: {
      year: 2025,
      status: "production",
      problem: {
        es: "Los pilotos de enduro llevan registros de configuración de suspensión, mantenimiento y checklists en papel o en hojas de cálculo que no están disponibles cuando más se necesitan: en el campo, sin internet. Necesitaban una app instalable en el celular que funcionara offline y guardara el historial de cada moto.",
        en: "Enduro riders track suspension settings, maintenance, and checklists on paper or spreadsheets that aren't available when needed most: in the field, without internet. They needed an installable mobile app that worked offline and stored each bike's complete history.",
      },
      architecture: {
        es: "SPA React sin backend — todo el estado persiste en localStorage con un esquema JSON estructurado. Service Worker con Workbox en modo 'cache-first' para assets y 'network-first' con fallback offline para datos dinámicos. La app es instalable en Android e iOS como PWA nativa.",
        en: "React SPA with no backend — all state persists in localStorage with a structured JSON schema. Service Worker with Workbox in 'cache-first' mode for assets and 'network-first' with offline fallback for dynamic data. The app is installable on Android and iOS as a native PWA.",
      },
      stackRationale: {
        es: "Sin backend intencional: los datos del piloto son privados y personales, no necesitan sincronización entre dispositivos. localStorage es suficiente y elimina latencia, autenticación y costos de infra. PWA en vez de app nativa por el costo y tiempo de publicación en stores vs Vercel deploy.",
        en: "No backend by design: rider data is private and personal, no cross-device sync needed. localStorage is sufficient and eliminates latency, authentication, and infrastructure costs. PWA over native app due to store publication cost and time vs. Vercel deploy.",
      },
      challenges: [
        {
          es: "Diseñar un esquema de localStorage que soporte versioning — cuando el modelo de datos cambia, los datos existentes del usuario deben migrarse automáticamente al abrir la app.",
          en: "Designing a localStorage schema with versioning support — when the data model changes, existing user data must migrate automatically on app open.",
        },
      ],
      learnings: {
        es: "No todo proyecto necesita backend. Para datos personales, un localStorage bien estructurado con versionado es una arquitectura completa. El Service Worker es la diferencia entre una web app y un producto mobile real.",
        en: "Not every project needs a backend. For personal data, well-structured localStorage with versioning is a complete architecture. The Service Worker is the difference between a web app and a real mobile product.",
      },
      screenshots: [
        {
          src: asset("captures/motobitacora/mantenimiento.webp"),
          orientation: "mobile",
          caption: { es: "Mantenimiento y alertas por horas de uso", en: "Maintenance & hour-based alerts" },
        },
        {
          src: asset("captures/motobitacora/suspension.webp"),
          orientation: "mobile",
          caption: { es: "Setups de suspensión por terreno", en: "Suspension setups per terrain" },
        },
        {
          src: asset("captures/motobitacora/checklists.webp"),
          orientation: "mobile",
          caption: { es: "Checklists pre-carrera", en: "Pre-race checklists" },
        },
      ],
    },
  },

  // ── 7. ON-WHEELS ──────────────────────────────────────────────────────────
  {
    id: "7",
    slug: "on-wheels",
    title: "ON-WHEELS",
    tagline: {
      es: "Landing para servicio de pit-asistencia en la carrera TransVelasco 2026",
      en: "Landing page for pit-assistance service at TransVelasco 2026 race",
    },
    description: {
      es: "Landing page: servicio de asistencia mecánica en pista para pilotos de la carrera de enduro TransVelasco 2026, Chilecito, La Rioja. Integración con WhatsApp para contacto.",
      en: "Landing page: on-track mechanical assistance service for riders of the TransVelasco 2026 enduro race in Chilecito, La Rioja. WhatsApp integration for contact.",
    },
    image: asset("captures/on-wheels/card.webp"),
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "IntersectionObserver",
      "WhatsApp API",
    ],
    githubUrl: "https://github.com/Pa7r1/ON_WHEELS",
    hasDetail: true,
    detail: {
      year: 2025,
      status: "production",
      problem: {
        es: "El cliente necesitaba visibilidad online rápida para su servicio de pit-asistencia justo antes de la carrera. El tiempo de desarrollo era de días, no semanas — sin tiempo para frameworks ni build systems.",
        en: "The client needed fast online visibility for their pit-assistance service right before the race. Development time was days, not weeks — no time for frameworks or build systems.",
      },
      architecture: {
        es: "HTML + CSS + JS vanilla sin build system. CSS custom properties para el sistema de diseño completo. IntersectionObserver para scroll animations sin dependencias. Formulario de contacto que arma un mensaje pre-formateado y abre WhatsApp directamente. Dos variantes de tema: clara (en producción) y oscura (WIP).",
        en: "Vanilla HTML + CSS + JS with no build system. CSS custom properties for the full design system. IntersectionObserver for scroll animations without dependencies. Contact form that builds a pre-formatted message and opens WhatsApp directly. Two theme variants: light (in production) and dark (WIP).",
      },
      stackRationale: {
        es: "Vanilla por velocidad de entrega. Sin build pipeline = sin errores de configuración = cero tiempo de setup. Para una landing de cliente con deadline urgente, la elección correcta no es la más elegante sino la más rápida en llegar a producción.",
        en: "Vanilla for delivery speed. No build pipeline = no configuration errors = zero setup time. For a client landing with an urgent deadline, the right choice isn't the most elegant but the fastest to reach production.",
      },
      challenges: [
        {
          es: "Crear una identidad visual atractiva sin herramientas de diseño dedicadas — sólo CSS puro con custom properties para lograr coherencia de paleta y tipografía.",
          en: "Creating an attractive visual identity without dedicated design tools — pure CSS with custom properties to achieve palette and typography consistency.",
        },
      ],
      learnings: {
        es: "La decisión de stack debe estar guiada por las restricciones del proyecto, no por las preferencias personales. Vanilla JS con buen CSS supera a un framework mal configurado bajo presión de tiempo.",
        en: "Stack decisions should be guided by project constraints, not personal preferences. Vanilla JS with good CSS beats a poorly configured framework under time pressure.",
      },
      screenshots: [
        {
          src: asset("captures/on-wheels/servicios.webp"),
          orientation: "desktop",
          caption: { es: "Servicios de asistencia incluidos", en: "Included assistance services" },
        },
        {
          src: asset("captures/on-wheels/cronograma.webp"),
          orientation: "desktop",
          caption: { es: "Cronograma del evento", en: "Event schedule" },
        },
        {
          src: asset("captures/on-wheels/precios.webp"),
          orientation: "desktop",
          caption: { es: "Valores y condiciones", en: "Pricing and terms" },
        },
      ],
    },
  },

  // ── 8. UPWARD ─────────────────────────────────────────────────────────────
  {
    id: "8",
    slug: "upward",
    title: "Upward",
    tagline: {
      es: "App de networking y seguimiento de progreso profesional — SvelteKit",
      en: "Professional progress tracking and networking app — SvelteKit",
    },
    description: {
      es: "Aplicación web con SvelteKit + Supabase para seguimiento de metas profesionales, networking y hábitos de crecimiento. Testing e2e con Playwright. En desarrollo activo.",
      en: "Web application with SvelteKit + Supabase for professional goal tracking, networking, and growth habits. E2e testing with Playwright. Actively in development.",
    },
    image: asset("captures/upward/card.webp"),
    technologies: [
      "SvelteKit",
      "Svelte 5",
      "Supabase",
      "UnoCSS",
      "Playwright",
      "Vitest",
      "TypeScript",
    ],
    githubUrl: "https://github.com/Pa7r1/Upward",
    hasDetail: true,
    detail: {
      year: 2025,
      status: "wip",
      problem: {
        es: "Hacer seguimiento del progreso profesional — metas, hábitos, conexiones, aprendizajes — está fragmentado entre apps genéricas (Notion, Todoist) que no están diseñadas para el contexto de crecimiento de un desarrollador.",
        en: "Tracking professional progress — goals, habits, connections, learnings — is fragmented across generic apps (Notion, Todoist) not designed for a developer's growth context.",
      },
      architecture: {
        es: "SvelteKit con adapter-vercel para SSR/SSG. Supabase como BaaS: auth con magic links, PostgreSQL gestionado, realtime para actualizaciones en colaboración. UnoCSS como alternativa a Tailwind — atomic CSS sin capa de purge. Testing stack completo: Vitest para unit/integration + Playwright para e2e.",
        en: "SvelteKit with adapter-vercel for SSR/SSG. Supabase as BaaS: auth with magic links, managed PostgreSQL, realtime for collaborative updates. UnoCSS as a Tailwind alternative — atomic CSS without a purge layer. Complete testing stack: Vitest for unit/integration + Playwright for e2e.",
      },
      stackRationale: {
        es: "Svelte 5 para practicar el modelo de reactividad con runes — diferente al hooks model de React, más cercano a signals. Supabase para no gestionar auth e infra desde cero. UnoCSS para experimentar con el enfoque atomic CSS más liviano.",
        en: "Svelte 5 to practice the reactivity model with runes — different from React's hooks model, closer to signals. Supabase to avoid managing auth and infra from scratch. UnoCSS to experiment with the lighter atomic CSS approach.",
      },
      challenges: [
        {
          es: "El sistema de runes de Svelte 5 tiene diferencias sutiles con Svelte 4 que rompieron varios ejemplos de la documentación — requirió leer el source code de Svelte para entender el nuevo modelo de compilación.",
          en: "Svelte 5's runes system has subtle differences from Svelte 4 that broke several documentation examples — required reading Svelte source code to understand the new compilation model.",
        },
      ],
      learnings: {
        es: "Tener e2e tests desde el primer feature previene regresiones invisibles. Playwright es más robusto que Cypress para SvelteKit porque no tiene los problemas de CORS que Cypress tiene con las rutas de servidor.",
        en: "Having e2e tests from the first feature prevents invisible regressions. Playwright is more robust than Cypress for SvelteKit because it doesn't have the CORS issues Cypress has with server routes.",
      },
      screenshots: [
        {
          src: asset("captures/upward/onboarding.webp"),
          orientation: "mobile",
          caption: { es: "Onboarding basado en identidad", en: "Identity-based onboarding" },
        },
        {
          src: asset("captures/upward/today.webp"),
          orientation: "mobile",
          caption: { es: "Hábitos del día con coach IA", en: "Daily habits with AI coach" },
        },
        {
          src: asset("captures/upward/progress.webp"),
          orientation: "mobile",
          caption: { es: "Métricas de progreso real", en: "Real progress metrics" },
        },
      ],
    },
  },

  // ── 9. TASKFLOW ───────────────────────────────────────────────────────────
  {
    id: "9",
    slug: "taskflow",
    title: "Taskflow",
    tagline: {
      es: "Gestor de tareas desktop con SQLite — instalable en Windows, Mac y Linux",
      en: "Desktop task manager with SQLite — installable on Windows, Mac, and Linux",
    },
    description: {
      es: "Aplicación de escritorio para la gestión de tareas diarias que funciona completamente sin internet. Guarda toda la información de forma segura en la computadora y cuenta con instaladores listos para Windows, Mac y Linux.",
      en: "Desktop task management app designed to work completely offline. It securely saves all data locally on your computer and includes ready-to-run installers for Windows, Mac, and Linux.",
    },
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=350&fit=crop",
    technologies: [
      "Electron",
      "SQLite",
      "React",
      "electron-builder",
      "Node.js",
    ],
    githubUrl: "https://github.com/Pa7r1/Taskflow",
    hasDetail: true,
    detail: {
      year: 2025,
      status: "mvp",
      problem: {
        es: "Explorar el desarrollo desktop nativo con tecnologías web — específicamente la gestión de estado persistente local sin servidor, y el pipeline de distribución multiplataforma para aplicaciones Electron.",
        en: "Explore native desktop development with web technologies — specifically local persistent state management without a server, and the cross-platform distribution pipeline for Electron applications.",
      },
      architecture: {
        es: "Proceso main de Electron gestiona SQLite con better-sqlite3 (API síncrona, sin promesas, ideal para Electron). IPC (Inter-Process Communication) entre main y renderer para todas las operaciones de datos. React en el renderer para la UI. electron-builder empaqueta el instalador con los firmadores de código correctos para cada plataforma.",
        en: "Electron main process manages SQLite with better-sqlite3 (synchronous API, no promises, ideal for Electron). IPC (Inter-Process Communication) between main and renderer for all data operations. React in the renderer for the UI. electron-builder packages the installer with the correct code signers for each platform.",
      },
      stackRationale: {
        es: "better-sqlite3 en vez de sqlite3 async porque en el proceso main de Electron las operaciones síncronas son más simples y no bloquean el renderer (están en procesos separados). Electron Builder porque gestiona la firma de código y los instaladores específicos de plataforma sin configuración manual extensa.",
        en: "better-sqlite3 over async sqlite3 because in Electron's main process, synchronous operations are simpler and don't block the renderer (they're in separate processes). Electron Builder for handling code signing and platform-specific installers without extensive manual configuration.",
      },
      challenges: [
        {
          es: "La comunicación IPC entre main y renderer con tipos TypeScript requirió declarar los handlers en ambos lados con el mismo shape — sin un tipo compartido, los errores eran silenciosos.",
          en: "IPC communication between main and renderer with TypeScript types required declaring handlers on both sides with the same shape — without a shared type, errors were silent.",
        },
      ],
      learnings: {
        es: "Electron tiene fama de pesado, pero la arquitectura correcta (procesos separados, IPC tipado, SQLite síncrono en main) produce una app que se siente nativa. El problema no es Electron sino usarlo como si fuera una SPA.",
        en: "Electron has a reputation for being heavy, but the right architecture (separate processes, typed IPC, synchronous SQLite in main) produces an app that feels native. The problem isn't Electron — it's using it like it's an SPA.",
      },
    },
  },

  // ── 10. SISTEMA-ZAPATILLAS ────────────────────────────────────────────────
  {
    id: "10",
    slug: "sistema-zapatillas",
    title: "Sistema de Ventas + WhatsApp",
    tagline: {
      es: "E-commerce con integración WhatsApp y carga masiva XLSX",
      en: "E-commerce with WhatsApp integration and XLSX bulk loading",
    },
    description: {
      es: "Plataforma de gestión de zapatillas: catálogo con carga masiva desde XLSX, integración WhatsApp para pedidos, roles JWT y control de stock.",
      en: "Sneaker management platform: catalog with XLSX bulk loading, WhatsApp order integration, JWT roles, and stock control.",
    },
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=350&fit=crop",
    technologies: [
      "Node.js",
      "TypeScript",
      "MySQL",
      "React",
      "Express",
      "TypeORM",
      "JWT",
      "Zustand",
      "React Query",
    ],
    githubUrl: "https://github.com/Pa7r1/SISTEMA-ZAPATILLAS",
    hasDetail: true,
    detail: {
      year: 2025,
      status: "wip",
      problem: {
        es: "Un negocio de calzado necesitaba pasar de catálogo en Excel + pedidos por mensajes sueltos a una plataforma de gestión real: catálogo con stock, alta masiva de productos desde XLSX, y un canal de pedidos que no obligara al cliente a registrarse — todo apoyado en WhatsApp, el canal que el negocio ya usaba.",
        en: "A footwear business needed to move from an Excel catalog + scattered message orders to a real management platform: catalog with stock, bulk product upload from XLSX, and an order channel that wouldn't force customers to register — all leveraging WhatsApp, the channel the business already used.",
      },
      architecture: {
        es: "Backend Node.js + Express + TypeORM sobre MySQL. Entidades fuertemente tipadas en TypeScript con relaciones modelo / variante / talle / stock. Endpoint de carga XLSX que valida cada fila contra Zod y aplica diff sobre la base. Frontend React + Vite con React Query para cache y mutaciones, Zustand para estado de UI, react-hook-form + Zod para forms. JWT para roles (admin / vendedor).",
        en: "Node.js + Express + TypeORM backend on MySQL. Strongly typed TypeScript entities with model / variant / size / stock relations. XLSX upload endpoint validates each row against Zod and applies a diff against the DB. React + Vite frontend with React Query for cache and mutations, Zustand for UI state, react-hook-form + Zod for forms. JWT for roles (admin / seller).",
      },
      stackRationale: {
        es: "TypeORM en lugar de Prisma porque el modelo evolucionó con muchas relaciones y la API decorator-based mantuvo el código cerca del esquema. Zod tanto en backend (validación de entrada XLSX y body de API) como en frontend (forms) — un único contrato compartido vía tipos. Zustand sobre Redux: el estado de UI es chico, no justifica el boilerplate. Integración WhatsApp vía deep-link (wa.me) sin SDK para mantener cero costo operativo.",
        en: "TypeORM over Prisma because the model evolved with many relationships and the decorator-based API kept code close to schema. Zod both in backend (XLSX row validation and API bodies) and frontend (forms) — one shared contract via types. Zustand over Redux: UI state is small, doesn't justify the boilerplate. WhatsApp integration via deep-link (wa.me) without an SDK to keep zero operational cost.",
      },
      challenges: [
        {
          es: "Carga masiva XLSX con miles de filas: cada fila puede ser create, update, ignore o error. El endpoint procesa en transacción, devuelve resumen con errores por fila sin abortar todo el lote.",
          en: "Bulk XLSX upload with thousands of rows: each row can be create, update, ignore, or error. The endpoint processes in a transaction, returns a per-row error summary without aborting the whole batch.",
        },
        {
          es: "Modelar variantes (color × talle × stock) sin explotar el esquema en miles de filas. Solución: entidad ProductoVariante con FK al producto, índice compuesto (producto_id, color, talle).",
          en: "Model variants (color × size × stock) without exploding the schema into thousands of rows. Solution: ProductoVariante entity with FK to product, composite index (product_id, color, size).",
        },
      ],
      learnings: {
        es: "Una integración WhatsApp por deep-link cubre el 90% de los casos sin necesitar Business API: el deal-breaker no es la tecnología sino el costo. Y para imports XLSX, el patrón 'reporte por fila + transacción' es lo que diferencia una herramienta usable de un script frágil.",
        en: "A deep-link WhatsApp integration covers 90% of use cases without needing the Business API: the deal-breaker isn't tech, it's cost. And for XLSX imports, the 'per-row report + transaction' pattern is what separates a usable tool from a brittle script.",
      },
    },
  },

  // ── 11. YTM-DOWNLOAD ─────────────────────────────────────────────────────
  {
    id: "11",
    slug: "ytm-download",
    title: "YTM Download",
    tagline: {
      es: "Descargador local de YouTube con cola paralela y conversión mp3/mp4",
      en: "Local YouTube downloader with parallel queue and mp3/mp4 conversion",
    },
    description: {
      es: "App local para descargar videos y playlists de YouTube. Cola paralela de descargas, conversión mp3/mp4 con FFmpeg, progreso en tiempo real y limpieza de temporales.",
      en: "Local app for downloading YouTube videos and playlists. Parallel download queue, mp3/mp4 conversion with FFmpeg, real-time progress, and temp file cleanup.",
    },
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=350&fit=crop",
    technologies: ["Node.js", "Express", "React", "yt-dlp", "FFmpeg"],
    githubUrl: "https://github.com/Pa7r1/YTM-DOWNLOAD",
    hasDetail: true,
    detail: {
      year: 2024,
      status: "mvp",
      problem: {
        es: "Necesitaba una herramienta personal para bajar audios y videos de YouTube en bulk (playlists enteras), con conversión a mp3/mp4 en un solo paso. Las alternativas online tienen límites, ads y privacidad cuestionable; las CLI son potentes pero no amigables para uso recurrente.",
        en: "I needed a personal tool to bulk-download audio and video from YouTube (entire playlists), with mp3/mp4 conversion in one step. Online alternatives have limits, ads, and questionable privacy; CLIs are powerful but unfriendly for recurring use.",
      },
      architecture: {
        es: "Backend Node.js + Express envuelve yt-dlp (descarga) y FFmpeg (conversión) vía child_process. Cola con concurrency configurable: N descargas simultáneas, el resto en pending. Cada job emite eventos de progreso al frontend via polling. Frontend React minimalista — input de URL/playlist, lista de jobs activos, tabla de completados. Cleanup automático de temporales tras emit final.",
        en: "Node.js + Express backend wraps yt-dlp (download) and FFmpeg (conversion) via child_process. Queue with configurable concurrency: N parallel downloads, rest in pending. Each job emits progress events to the frontend via polling. Minimalist React frontend — URL/playlist input, active jobs list, completed table. Auto-cleanup of temp files after final emit.",
      },
      stackRationale: {
        es: "yt-dlp en vez de youtube-dl porque está activamente mantenido y aguanta cambios del API de YouTube. Express sobre algo más pesado porque el server es local — no necesita scale, sí necesita ser rápido de instalar. Polling sobre WebSockets porque la complejidad extra no se justifica para un uso single-user.",
        en: "yt-dlp over youtube-dl because it's actively maintained and survives YouTube API changes. Express over something heavier because the server is local — it doesn't need scale, it needs fast install. Polling over WebSockets because the extra complexity isn't justified for single-user use.",
      },
      challenges: [
        {
          es: "Parsear el stdout de yt-dlp (que reporta progreso como '[download] 45.2% of 12.3MiB at 1.5MiB/s') en eventos estructurados sin perder lines durante chunks lentos.",
          en: "Parse yt-dlp's stdout (which reports progress as '[download] 45.2% of 12.3MiB at 1.5MiB/s') into structured events without losing lines during slow chunks.",
        },
        {
          es: "Manejar playlists grandes sin bloquear: cada video es un job independiente con su propio estado, pero la cola los agrupa por playlist para mostrar progreso conjunto.",
          en: "Handle large playlists without blocking: each video is an independent job with its own state, but the queue groups them by playlist to show combined progress.",
        },
      ],
      learnings: {
        es: "Para herramientas locales, evitar abstracciones pesadas: child_process + parseo de stdout + polling es 'feo' pero confiable y rápido de iterar. Y wrappear binarios CLI bien mantenidos (yt-dlp, FFmpeg) es más sostenible que escribir el equivalente desde cero.",
        en: "For local tools, avoid heavy abstractions: child_process + stdout parsing + polling is 'ugly' but reliable and fast to iterate. And wrapping well-maintained CLI binaries (yt-dlp, FFmpeg) is more sustainable than writing the equivalent from scratch.",
      },
    },
  },
];
