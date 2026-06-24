import type { Project } from "@/types";
import { asset } from "@/utils/asset";

export const projects: Project[] = [
  // ── 1. VJ-BARBER (cliente real · en vivo) ─────────────────────────────────
  {
    id: "1",
    slug: "barberia",
    availability: "live",
    title: "VJ-Barber — Sistema de Gestión",
    tagline: {
      es: "El sistema que sacó a una barbería con sucursales del WhatsApp y el papel",
      en: "The system that moved a multi-branch barbershop off WhatsApp and paper",
    },
    description: {
      es: "Turnos, caja, pagos a empleados y varias sucursales en un solo lugar. Los clientes piden turno y queda cargado al instante; el dueño dejó de hacer cálculos a mano. En producción en vj-barber.com.",
      en: "Bookings, cash register, staff payouts and multiple branches in one place. Clients request a slot and it's logged instantly; the owner stopped doing the math by hand. Live at vj-barber.com.",
    },
    image: asset("captures/barberia/card.webp"),
    technologies: ["FastAPI", "MySQL", "React", "Zustand", "Docker", "Nginx", "VPS"],
    githubUrl: "https://github.com/Pa7r1/Barber-a",
    liveUrl: "https://vj-barber.com",
    repoPrivate: true,
    hasDetail: true,
    detail: {
      year: 2026,
      status: "production",
      summary: {
        es: "Javier, dueño de VJ-Barber, manejaba todos sus turnos por WhatsApp y llevaba la caja y los pagos en papel. A medida que sumó clientes y sucursales, se le hacía imposible atender, seguir los turnos y calcular cuánto pagarle a cada empleado. Le construí un sistema donde el turno se carga solo cuando lo piden, la caja se actualiza en tiempo real y los pagos se calculan automáticamente.",
        en: "Javier, the owner of VJ-Barber, ran every appointment through WhatsApp and tracked cash and payroll on paper. As clients and branches grew, keeping up with bookings and figuring out each employee's pay became impossible. I built him a system where a slot is logged the moment it's requested, the register updates in real time, and payouts are calculated automatically.",
      },
      problem: {
        es: "VJ-Barber gestionaba turnos y caja en papel, con empleados que no sabían su agenda hasta llegar al local. Necesitaba algo accesible desde el celular, que calculara los precios automáticamente según el servicio y el empleado, y que mostrara el estado de la caja en tiempo real.",
        en: "VJ-Barber managed bookings and the cash register on paper, with employees who didn't know their schedule until arriving. They needed something mobile-accessible that calculated prices automatically per service and employee, and showed the cash register status in real time.",
      },
      architecture: {
        es: "Backend en FastAPI con una base MySQL bien normalizada. La lógica de negocio crítica (cálculos de caja, auditoría de precios, reportes por empleado) vive dentro de la propia base como procedimientos almacenados y vistas, así queda protegida y es la misma para todos. El frontend es React, con Zustand manejando el estado de la sesión activa. Todo corre en un VPS propio con Ubuntu, Nginx como puerta de entrada, SSL automático con Certbot y Docker Compose orquestando los servicios.",
        en: "FastAPI backend over a properly normalized MySQL database. The critical business logic (cash calculations, price auditing, per-employee reports) lives inside the database itself as stored procedures and views, so it stays protected and consistent for everyone. The frontend is React, with Zustand handling the active session state. Everything runs on my own Ubuntu VPS, with Nginx as the front door, automatic SSL via Certbot, and Docker Compose orchestrating the services.",
      },
      stackRationale: {
        es: "Elegí FastAPI por su velocidad de desarrollo y porque genera la documentación de la API sola, lo que me sirvió para mostrarle al cliente cómo se conecta todo. Usé MySQL porque encajaba con lo que ya tenía, y le saqué el jugo metiendo la lógica del negocio en la base: si mañana cambia una regla de precios o de comisiones, se ajusta sin tener que volver a publicar todo el backend.",
        en: "I chose FastAPI for its development speed and because it generates the API docs on its own, which helped me show the client how everything connects. I used MySQL because it fit what they already had, and got the most out of it by putting the business logic inside the database: if a pricing or commission rule changes tomorrow, it's adjusted without redeploying the whole backend.",
      },
      challenges: [
        {
          es: "Calcular el precio de un turno según el empleado, el servicio, la hora y los descuentos activos, sin que esa cuenta estuviera duplicada entre lo que ve el cliente al reservar y lo que confirma el sistema. Una sola fuente de verdad para que nunca haya diferencias.",
          en: "Calculating a booking's price based on employee, service, time of day and active discounts — without duplicating that math between what the client sees when booking and what the system confirms. A single source of truth so there are never mismatches.",
        },
        {
          es: "Montar el servidor desde cero: configurar Nginx, dejar la renovación del certificado SSL andando sola y asegurarme de que todo vuelva a levantar solo si el servidor se reinicia.",
          en: "Setting up the server from scratch: configuring Nginx, getting automatic SSL certificate renewal working, and making sure everything comes back up on its own if the server restarts.",
        },
      ],
      results: [
        {
          es: "Reemplazó la agenda por WhatsApp y papel: los turnos quedan cargados apenas se solicitan.",
          en: "Replaced WhatsApp-and-paper scheduling: slots are logged the moment they're requested.",
        },
        {
          es: "El dueño dejó de calcular pagos y comisiones a mano — el sistema los liquida solo.",
          en: "The owner stopped calculating payouts and commissions by hand — the system settles them automatically.",
        },
        {
          es: "Caja en tiempo real y gestión de varias sucursales desde el celular.",
          en: "Real-time cash register and multi-branch management from the phone.",
        },
      ],
      learnings: {
        es: "Poner la lógica importante dentro de la base de datos hizo que los cambios de reglas del negocio no necesiten una nueva publicación del sistema. En un cliente real, donde los precios y las comisiones cambian seguido, eso vale oro.",
        en: "Putting the important logic inside the database meant business-rule changes don't require a fresh deploy. With a real client, where prices and commissions change often, that's worth its weight in gold.",
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

  // ── 2. ON-WHEELS (cliente real · en vivo) ─────────────────────────────────
  {
    id: "2",
    slug: "on-wheels",
    availability: "live",
    title: "ON-WHEELS",
    tagline: {
      es: "La landing que reemplazó un PDF de 10 MB en una de las carreras más importantes del país",
      en: "The landing page that replaced a 10MB PDF at one of the country's biggest races",
    },
    description: {
      es: "Página para un servicio de asistencia mecánica en pista. Antes la info vivía en un PDF pesado que casi no cargaba; ahora abre al instante en el celular, con cronograma, precios y contacto directo por WhatsApp.",
      en: "Landing page for an on-track mechanical assistance service. The info used to live in a heavy PDF that barely loaded; now it opens instantly on mobile, with schedule, pricing and direct WhatsApp contact.",
    },
    image: asset("captures/on-wheels/card.webp"),
    technologies: ["HTML5", "CSS3", "JavaScript", "IntersectionObserver", "WhatsApp API"],
    githubUrl: "https://github.com/Pa7r1/ON_WHEELS",
    liveUrl: "https://pa7r1.github.io/ON_WHEELS/",
    hasDetail: true,
    detail: {
      year: 2025,
      status: "production",
      summary: {
        es: "Walter y Diego ofrecen asistencia mecánica en la TransVelasco, una de las carreras de enduro más importantes de Argentina. Para un servicio así, la primera impresión tiene que ser rápida y confiable. Pasamos de un PDF de 10 MB que no cargaba a una landing liviana que abre al instante, explica el servicio y deja al piloto a un toque de contactarlos por WhatsApp.",
        en: "Walter and Diego offer mechanical assistance at the TransVelasco, one of Argentina's biggest enduro races. For a service like that, the first impression has to be fast and trustworthy. We went from a 10MB PDF that wouldn't load to a lightweight landing that opens instantly, explains the service, and puts the rider one tap away from reaching them on WhatsApp.",
      },
      problem: {
        es: "El cliente necesitaba estar online rápido justo antes de la carrera. El tiempo de desarrollo se medía en días, no semanas, y el material que tenía —un PDF de 10 MB— era lento de descargar y poco accesible desde el celular.",
        en: "The client needed to be online fast, right before the race. Development time was measured in days, not weeks, and what they had — a 10MB PDF — was slow to download and barely usable on mobile.",
      },
      architecture: {
        es: "HTML, CSS y JavaScript puros, sin ningún sistema de build. Toda la identidad visual se arma con variables de CSS, las animaciones aparecen a medida que hacés scroll sin librerías extra, y el formulario de contacto arma un mensaje ya escrito y abre WhatsApp directo. Simple a propósito: menos piezas, menos cosas que puedan fallar.",
        en: "Plain HTML, CSS and JavaScript, with no build system at all. The whole visual identity is built with CSS variables, animations appear as you scroll without extra libraries, and the contact form builds a pre-written message and opens WhatsApp directly. Intentionally simple: fewer moving parts, fewer things that can break.",
      },
      stackRationale: {
        es: "Cuando hay un deadline urgente, la mejor decisión no es la más elegante sino la que llega antes a producción. Sin sistema de build no hay configuración que falle ni tiempo perdido en armado: escribís, subís y está online. Para una landing de una página, eso es exactamente lo que hacía falta.",
        en: "With an urgent deadline, the best decision isn't the most elegant one but the one that reaches production fastest. With no build system there's no config to break and no time lost on tooling: you write it, push it, and it's online. For a one-page landing, that's exactly what was needed.",
      },
      challenges: [
        {
          es: "Lograr una identidad visual atractiva y coherente sin herramientas de diseño, solo con CSS bien ordenado para mantener la paleta y la tipografía bajo control.",
          en: "Achieving an attractive, coherent visual identity without design tools — just well-organized CSS to keep palette and typography under control.",
        },
      ],
      results: [
        {
          es: "Reemplazó un PDF de 10 MB que no cargaba por una web que abre al instante en el celular.",
          en: "Replaced a 10MB PDF that wouldn't load with a site that opens instantly on mobile.",
        },
        {
          es: "Contacto directo por WhatsApp con mensaje pre-armado: menos fricción para contratar.",
          en: "Direct WhatsApp contact with a pre-filled message: less friction to book.",
        },
        {
          es: "Online en días, justo a tiempo para la carrera.",
          en: "Online in days, right in time for the race.",
        },
      ],
      learnings: {
        es: "La elección de tecnología tiene que responder a las restricciones del proyecto, no a las preferencias personales. Con poco tiempo, JavaScript puro y buen CSS le ganan a cualquier framework mal configurado bajo presión.",
        en: "Tech choices should answer to the project's constraints, not personal preference. With little time, plain JavaScript and good CSS beat any poorly configured framework under pressure.",
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

  // ── 3. QRETAIL (producto propio · en vivo) ────────────────────────────────
  {
    id: "3",
    slug: "qretail",
    availability: "live",
    title: "QRetail",
    tagline: {
      es: "Producto propio: digitaliza una tienda entera desde el celular, con escaneo y planes",
      en: "My own product: run a whole shop from your phone, with scanning and plans",
    },
    description: {
      es: "Sistema de gestión para emprendimientos y tiendas: escaneo de código de barras y QR, generación de QR para productos sin código, ventas, categorías, roles y planes de suscripción. De anotar en un cuaderno a manejar todo desde el celular.",
      en: "Management system for small businesses and shops: barcode and QR scanning, QR generation for products with no code, sales, categories, roles and subscription plans. From a paper notebook to running everything from your phone.",
    },
    image: asset("captures/qretail/card.webp"),
    technologies: ["Next.js 16", "Prisma 7", "PostgreSQL", "NextAuth v5", "Tailwind v4", "Docker"],
    githubUrl: "https://github.com/Pa7r1/QRetail",
    liveUrl: "https://q-retail.vercel.app/",
    repoPrivate: true,
    hasDetail: true,
    detail: {
      year: 2025,
      status: "wip",
      summary: {
        es: "QRetail es un producto propio que se vende por suscripción. La idea es simple: que un emprendedor pase de anotar ventas y stock en un cuaderno a gestionar todo el negocio desde el celular, rápido y sin vueltas. Escanea productos, registra ventas, maneja categorías y roles, y habilita funciones según el plan contratado (Básico, Pro o Premium).",
        en: "QRetail is my own product, sold by subscription. The idea is simple: take a small-business owner from jotting sales and stock in a notebook to running the whole business from their phone, fast and friction-free. It scans products, records sales, handles categories and roles, and unlocks features based on the plan (Basic, Pro or Premium).",
      },
      problem: {
        es: "Las tiendas necesitan controlar productos, vendedores y caja desde una sola plataforma, con planes que habiliten o bloqueen funciones sin que eso se traduzca en un código lleno de condiciones desparramadas por todos lados.",
        en: "Shops need to control products, staff and cash from a single platform, with plans that enable or block features — without that turning into code full of conditions scattered everywhere.",
      },
      architecture: {
        es: "Next.js renderiza la mayoría de las pantallas en el servidor y deja como islas interactivas solo las partes que lo necesitan, como el escaneo de QR o el formulario de venta. Prisma maneja la base de datos y NextAuth se encarga del login y las sesiones. El escaneo usa la cámara del propio celular, sin pedir apps extra.",
        en: "Next.js renders most screens on the server and keeps only the parts that need it — like QR scanning or the sales form — as interactive islands. Prisma handles the database and NextAuth takes care of login and sessions. Scanning uses the phone's own camera, with no extra apps required.",
      },
      stackRationale: {
        es: "Elegí Next.js para tener renderizado en el servidor sin configuración extra, clave para que el panel de administración cargue rápido. Prisma me deja evolucionar el modelo de datos con migraciones ordenadas, y NextAuth me ahorra reinventar algo tan delicado como la autenticación.",
        en: "I chose Next.js for server-side rendering with no extra setup, key to making the admin dashboard load fast. Prisma lets me evolve the data model with clean migrations, and NextAuth saves me from reinventing something as delicate as authentication.",
      },
      challenges: [
        {
          es: "Manejar qué puede hacer cada plan sin llenar el código de condiciones repartidas: lo resolví con una función central que toda operación consulta antes de ejecutarse. Cambiar el modelo de negocio pasa a ser cambiar una sola línea.",
          en: "Managing what each plan can do without filling the code with scattered conditions: I solved it with a central function every operation checks before running. Changing the business model becomes a one-line edit.",
        },
        {
          es: "El escaneo desde la cámara en iPhone necesitó permisos especiales y un camino alternativo para Safari, que no soporta todas las funciones de cámara.",
          en: "Camera scanning on iPhone needed special permissions and a fallback path for Safari, which doesn't support every camera feature.",
        },
      ],
      results: [
        {
          es: "De anotar en cuaderno a gestionar ventas, stock y caja desde el celular.",
          en: "From a paper notebook to managing sales, stock and cash from the phone.",
        },
        {
          es: "Escaneo de código de barras/QR y generación de QR para productos sin código.",
          en: "Barcode/QR scanning and QR generation for products with no code.",
        },
        {
          es: "Producto propio por suscripción, con funciones que cambian según el plan.",
          en: "My own subscription product, with features that change by plan.",
        },
      ],
      learnings: {
        es: "Concentrar la lógica de permisos en un solo lugar, en vez de repartirla por toda la app, hace que un cambio en el modelo de negocio sea un cambio de una línea y no una cacería de bugs.",
        en: "Concentrating permission logic in one place, instead of spreading it across the app, makes a change in the business model a one-line edit rather than a bug hunt.",
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

  // ── 4. ENDUROLOG (producto propio · en vivo) ──────────────────────────────
  {
    id: "4",
    slug: "motobitacora",
    availability: "live",
    title: "EnduroLog",
    tagline: {
      es: "App para pilotos de enduro: todo el mantenimiento y los setups de la moto, sin internet",
      en: "An app for enduro riders: all your bike's maintenance and setups, no internet needed",
    },
    description: {
      es: "Producto propio que se vende por usuario. Llevar las cuentas de la moto —suspensión, mantenimiento, qué llevar a cada carrera— es un lío en papel. EnduroLog lo ordena en el celular y funciona aunque no haya señal en el campo.",
      en: "My own product, sold per user. Keeping track of your bike — suspension, maintenance, what to pack for each race — is a mess on paper. EnduroLog organizes it on your phone and works even with no signal out in the field.",
    },
    image: asset("captures/motobitacora/card.webp"),
    technologies: ["React 18", "Vite", "Service Worker", "localStorage", "PWA", "CSS"],
    githubUrl: "https://github.com/Pa7r1/EnduroLog",
    liveUrl: "https://enduro-log.vercel.app/",
    repoPrivate: true,
    hasDetail: true,
    detail: {
      year: 2025,
      status: "production",
      summary: {
        es: "Soy piloto y sé lo difícil que es llevar el registro de lo que le hacés a la moto: setups de suspensión por terreno, mantenimiento por horas de uso y los checklists de qué llevar a cada carrera. EnduroLog junta todo eso en una app instalable que funciona sin conexión, justo donde más se necesita: en el campo, sin señal. Es un producto propio que también uso yo y se vende por usuario.",
        en: "I'm a rider myself, so I know how hard it is to keep track of everything you do to your bike: suspension setups per terrain, hour-based maintenance, and the checklists of what to bring to each race. EnduroLog brings it all into an installable app that works offline, exactly where you need it: out in the field with no signal. It's my own product, one I use myself, sold per user.",
      },
      problem: {
        es: "Los pilotos de enduro anotan la configuración de la suspensión, el mantenimiento y los checklists en papel o en planillas que nunca están a mano cuando hacen falta: en el campo, sin internet. Querían una app instalable en el celular que funcionara sin conexión y guardara el historial de cada moto.",
        en: "Enduro riders jot down suspension settings, maintenance and checklists on paper or spreadsheets that are never at hand when needed: out in the field, no internet. They wanted an installable mobile app that worked offline and stored each bike's history.",
      },
      architecture: {
        es: "Es una app de React sin servidor: todos los datos se guardan directamente en el celular, en un formato ordenado. Un Service Worker (la pieza que permite que una web funcione sin conexión) cachea la app y los datos, así se instala y abre como si fuera una app nativa, tanto en Android como en iOS.",
        en: "It's a serverless React app: all data is stored directly on the phone, in a structured format. A Service Worker (the piece that lets a web app work offline) caches the app and its data, so it installs and opens like a native app on both Android and iOS.",
      },
      stackRationale: {
        es: "No le puse servidor a propósito: los datos del piloto son personales y no necesitan sincronizarse entre dispositivos, así que guardarlos en el celular alcanza y evita latencia, logins y costos de infraestructura. Elegí una app web instalable en vez de una app nativa para no depender del costo ni de los tiempos de las tiendas de aplicaciones.",
        en: "I deliberately left out a server: a rider's data is personal and doesn't need to sync across devices, so storing it on the phone is enough — and it avoids latency, logins and infrastructure costs. I chose an installable web app over a native one to avoid the cost and timelines of the app stores.",
      },
      challenges: [
        {
          es: "Diseñar el guardado local para que soporte versiones: cuando cambia la estructura de los datos, los que el usuario ya tenía se migran solos al abrir la app, sin perder nada.",
          en: "Designing local storage to support versioning: when the data structure changes, the user's existing data migrates on its own when the app opens, without losing anything.",
        },
      ],
      results: [
        {
          es: "Saca el seguimiento de la moto del papel: suspensión, mantenimiento y checklists en un solo lugar.",
          en: "Gets bike tracking off paper: suspension, maintenance and checklists in one place.",
        },
        {
          es: "Funciona 100% sin internet — pensada para usarse en plena carrera.",
          en: "Works fully offline — built to be used mid-race.",
        },
        {
          es: "Producto propio en producción, se vende por usuario.",
          en: "My own product in production, sold per user.",
        },
      ],
      learnings: {
        es: "No todo proyecto necesita un servidor. Para datos personales, un guardado local bien pensado y con versiones es una arquitectura completa. Y el Service Worker es lo que separa una web común de un producto que se siente como una app real en el celular.",
        en: "Not every project needs a server. For personal data, well-thought-out local storage with versioning is a complete architecture. And the Service Worker is what separates an ordinary website from something that feels like a real app on the phone.",
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

  // ── 5. GRANJA DE VIDEOS (proyecto personal) ───────────────────────────────
  {
    id: "5",
    slug: "granja-de-videos",
    availability: "working",
    title: "Granja de Videos",
    tagline: {
      es: "Fábrica de videos cortos con IA: de un prompt a un short listo para publicar, a costo cero",
      en: "AI short-video factory: from a prompt to a publish-ready short, at zero cost",
    },
    description: {
      es: "Pipeline que convierte un prompt en un video corto listo para publicar: escribe el guion, genera la voz, crea las imágenes y arma el video, todo automático y con herramientas gratuitas.",
      en: "A pipeline that turns a prompt into a publish-ready short: it writes the script, generates the voiceover, creates the images and assembles the video — all automatic, all with free tools.",
    },
    image: asset("captures/granja-de-videos/card.webp"),
    technologies: ["FastAPI", "Python", "Gemini API", "Edge TTS", "FFmpeg", "n8n"],
    githubUrl: "https://github.com/Pa7r1/Granja-de-Videos",
    repoPrivate: true,
    hasDetail: true,
    detail: {
      year: 2025,
      status: "mvp",
      summary: {
        es: "Producir shorts a mano lleva horas: guion, voz, imágenes y edición. Armé un sistema que hace todo el recorrido solo, desde un simple prompt hasta el video final, encadenando herramientas de IA gratuitas. Es un proyecto personal donde el foco fue que el costo por video fuera prácticamente cero.",
        en: "Producing shorts by hand takes hours: script, voice, images and editing. I built a system that runs the whole path on its own, from a simple prompt to the final video, chaining together free AI tools. It's a personal project where the goal was keeping the cost per video essentially zero.",
      },
      problem: {
        es: "Hacer shorts de forma constante implica escribir, grabar la voz, conseguir imágenes y editar: cuatro tareas distintas que juntas se llevan horas por video. El objetivo era automatizar todo el proceso con herramientas de IA gratuitas o de costo casi nulo.",
        en: "Consistently making shorts means writing, recording voice, sourcing images and editing: four separate tasks that together eat hours per video. The goal was to automate the whole process with free or near-zero-cost AI tools.",
      },
      architecture: {
        es: "Un backend en FastAPI expone cada etapa del proceso (texto, audio, imagen, armado final). Un orquestador encadena esas etapas con manejo de errores y reintentos, y FFmpeg —el estándar de la industria para video— combina las pistas en el video final con títulos, transiciones y música. Todo corre localmente, sin costos de infraestructura.",
        en: "A FastAPI backend exposes each stage of the process (text, audio, image, final assembly). An orchestrator chains those stages with error handling and retries, and FFmpeg — the industry standard for video — combines the tracks into the final video with titles, transitions and music. Everything runs locally, with no infrastructure costs.",
      },
      stackRationale: {
        es: "Elegí cada herramienta por su capa gratuita: un modelo de IA para el guion y las imágenes, una voz de texto-a-audio sin costo, y FFmpeg para el armado por su flexibilidad total. Sumé un orquestador para no tener que reinventar el manejo de errores entre paso y paso.",
        en: "I chose each tool for its free tier: an AI model for the script and images, a no-cost text-to-speech voice, and FFmpeg for assembly thanks to its total flexibility. I added an orchestrator so I wouldn't have to reinvent error handling between steps.",
      },
      challenges: [
        {
          es: "Sincronizar el tiempo del audio con las imágenes y la duración final del video, cuando la herramienta de voz no te dice cuánto va a durar cada parte antes de generarla.",
          en: "Syncing the audio's timing with the images and the final video length, when the voice tool doesn't tell you how long each part will be until it's generated.",
        },
        {
          es: "Lograr que las imágenes generadas se vieran coherentes entre sí partiendo de prompts distintos, sin un modelo que mantenga la consistencia visual.",
          en: "Getting the generated images to look coherent with each other from different prompts, without a model that keeps visual consistency.",
        },
      ],
      results: [
        {
          es: "Convierte un prompt en un short completo sin intervención manual.",
          en: "Turns a prompt into a complete short with no manual steps.",
        },
        {
          es: "Costo por video prácticamente cero usando solo herramientas gratuitas.",
          en: "Practically zero cost per video using only free tools.",
        },
      ],
      learnings: {
        es: "Un proceso automático con IA es tan sólido como su paso más frágil. El manejo de errores y el estado de cada etapa tienen que estar pensados desde el principio: agregarlos después obliga a rehacer todo el flujo.",
        en: "An automated AI process is only as solid as its most fragile step. Error handling and each stage's state have to be designed from the start: adding them later forces you to redo the whole flow.",
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

  // ── 6. TASKFLOW (proyecto personal) ───────────────────────────────────────
  {
    id: "6",
    slug: "taskflow",
    availability: "working",
    title: "Taskflow",
    tagline: {
      es: "Gestor de tareas de escritorio que funciona sin internet — Windows, Mac y Linux",
      en: "Desktop task manager that works offline — Windows, Mac and Linux",
    },
    description: {
      es: "App de escritorio para organizar tareas del día. Funciona 100% sin internet, guarda todo en tu computadora y trae instaladores listos para Windows, Mac y Linux.",
      en: "Desktop app to organize your daily tasks. Works fully offline, saves everything on your computer, and ships ready-to-run installers for Windows, Mac and Linux.",
    },
    image: asset("captures/taskflow/card.webp"),
    technologies: ["Electron", "SQLite", "React", "electron-builder", "Node.js"],
    githubUrl: "https://github.com/Pa7r1/Taskflow",
    hasDetail: true,
    detail: {
      year: 2025,
      status: "mvp",
      summary: {
        es: "Un proyecto personal para meterme de lleno en apps de escritorio hechas con tecnologías web. La app guarda todo localmente, funciona sin conexión y se instala como un programa nativo en los tres sistemas operativos. Incluye una captura rápida con un atajo de teclado global para anotar una tarea sin siquiera abrir la ventana.",
        en: "A personal project to dive into desktop apps built with web technologies. It stores everything locally, works offline, and installs as a native program on all three operating systems. It includes quick capture via a global keyboard shortcut to jot down a task without even opening the window.",
      },
      problem: {
        es: "Quería explorar el desarrollo de aplicaciones de escritorio usando tecnologías web: cómo guardar datos de forma persistente sin servidor y cómo generar instaladores para Windows, Mac y Linux desde una sola base de código.",
        en: "I wanted to explore desktop app development with web technologies: how to persist data with no server, and how to generate installers for Windows, Mac and Linux from a single codebase.",
      },
      architecture: {
        es: "Electron divide la app en dos partes: una que maneja los datos en una base SQLite local y otra que dibuja la interfaz con React. Las dos se comunican por un canal interno con mensajes tipados, así los errores se detectan al programar y no en tiempo de uso. El empaquetado genera los instaladores firmados para cada sistema operativo.",
        en: "Electron splits the app in two: one part manages the data in a local SQLite database, and the other draws the interface with React. They communicate through an internal channel with typed messages, so errors are caught while coding rather than at runtime. The packaging step generates signed installers for each operating system.",
      },
      stackRationale: {
        es: "Elegí una base SQLite local porque encaja perfecto con una app sin servidor y mantiene el código simple. Y usé la herramienta de empaquetado de Electron porque se encarga sola de la firma de código y de armar el instalador correcto para cada plataforma, sin configuración manual interminable.",
        en: "I chose a local SQLite database because it fits a serverless app perfectly and keeps the code simple. And I used Electron's packaging tool because it handles code signing on its own and builds the right installer for each platform, without endless manual configuration.",
      },
      challenges: [
        {
          es: "Hacer que las dos partes de la app (datos e interfaz) se comuniquen con tipos compartidos: sin un contrato común, los errores eran silenciosos y difíciles de rastrear.",
          en: "Getting the app's two parts (data and interface) to communicate with shared types: without a common contract, errors were silent and hard to trace.",
        },
      ],
      results: [
        {
          es: "Funciona 100% sin internet, con todo guardado en la propia computadora.",
          en: "Fully offline, with everything stored on the computer itself.",
        },
        {
          es: "Instaladores listos para Windows, Mac y Linux desde una sola base de código.",
          en: "Ready-to-run installers for Windows, Mac and Linux from a single codebase.",
        },
      ],
      learnings: {
        es: "Electron tiene fama de pesado, pero con la arquitectura correcta —partes separadas, comunicación tipada, base local— la app se siente nativa. El problema nunca es Electron en sí, sino usarlo como si fuera una página web cualquiera.",
        en: "Electron has a reputation for being heavy, but with the right architecture — separate parts, typed communication, local database — the app feels native. The problem is never Electron itself, but using it like it's just another web page.",
      },
      screenshots: [
        {
          src: asset("captures/taskflow/todas.webp"),
          orientation: "desktop",
          caption: { es: "Vista general con categorías y prioridades", en: "Overview with categories and priorities" },
        },
        {
          src: asset("captures/taskflow/detalle.webp"),
          orientation: "desktop",
          caption: { es: "Panel de detalle: notas, prioridad y fechas", en: "Detail panel: notes, priority and dates" },
        },
        {
          src: asset("captures/taskflow/completadas.webp"),
          orientation: "desktop",
          caption: { es: "Tareas completadas", en: "Completed tasks" },
        },
        {
          src: asset("captures/taskflow/atajo.webp"),
          orientation: "desktop",
          caption: {
            es: "Captura rápida global (Ctrl+Shift+Espacio) con interpretación de texto",
            en: "Global quick capture (Ctrl+Shift+Space) with text parsing",
          },
        },
      ],
    },
  },

  // ── 7. ANISTREAM-TV (proyecto personal) ──────────────────────────────────
  {
    id: "7",
    slug: "anistream-tv",
    availability: "working",
    title: "AniStream TV",
    tagline: {
      es: "App Android nativa de streaming de anime, hecha con las prácticas de apps a escala",
      en: "Native Android anime streaming app, built with production-scale practices",
    },
    description: {
      es: "App Android nativa para ver anime: catálogo, búsqueda de series y episodios, reproductor integrado y seguimiento de progreso. Proyecto personal hecho con la arquitectura que usan las apps grandes.",
      en: "Native Android app to watch anime: catalog, series/episode search, built-in player and progress tracking. A personal project built with the architecture big apps use.",
    },
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=350&fit=crop",
    technologies: ["Kotlin", "Android", "Gradle modular", "Jetpack Compose", "CI/CD"],
    githubUrl: "https://github.com/Pa7r1/AniStream-TV",
    hasDetail: true,
    detail: {
      year: 2025,
      status: "mvp",
      summary: {
        es: "La mayoría de las apps de anime de la tienda tienen una experiencia pobre, llena de publicidad o piden suscripción para lo básico. Quise hacer una limpia, rápida y nativa, pero sobre todo armarla con la misma estructura modular que usan las apps de producción a escala —no como un proyecto de juguete— para demostrar que puedo trabajar en una base de código real de Android.",
        en: "Most anime apps on the store have a poor, ad-ridden experience or charge a subscription for the basics. I wanted to build a clean, fast, native one — but above all to build it with the same modular structure production-scale apps use, not as a toy project, to show I can work in a real Android codebase.",
      },
      problem: {
        es: "La mayoría de las apps de anime de la tienda tienen una experiencia deteriorada, publicidad invasiva o piden suscripción hasta para el catálogo básico. La idea era una app limpia, rápida y nativa que además demostrara solvencia en desarrollo Android moderno.",
        en: "Most anime apps on the store have a degraded experience, invasive ads, or charge a subscription even for the basic catalog. The idea was a clean, fast, native app that also demonstrated competence in modern Android development.",
      },
      architecture: {
        es: "El proyecto está dividido en módulos por funcionalidad (catálogo, reproductor, búsqueda, núcleo). Eso hace que compile más rápido y que cada parte tenga límites claros, igual que en las apps grandes. La interfaz usa el sistema declarativo moderno de Android, y hay un proceso automático que arma y firma la app sola en cada cambio.",
        en: "The project is split into modules by feature (catalog, player, search, core). That makes it compile faster and gives each part clear boundaries, just like big apps. The UI uses Android's modern declarative system, and an automated process builds and signs the app on its own with every change.",
      },
      stackRationale: {
        es: "Kotlin es el estándar para Android nativo. La estructura modular es lo que usan las apps de producción a escala: implementarla en un proyecto personal fue justamente para demostrar que puedo moverme en bases de código reales, no solo en ejemplos chicos.",
        en: "Kotlin is the standard for native Android. The modular structure is what production-scale apps use: implementing it in a personal project was precisely to show I can work in real codebases, not just small examples.",
      },
      challenges: [
        {
          es: "Configurar bien las dependencias entre los módulos: los errores de referencias circulares son difíciles de diagnosticar sin las herramientas adecuadas.",
          en: "Properly configuring the dependencies between modules: circular-reference errors are hard to diagnose without the right tooling.",
        },
        {
          es: "Manejar el estado del reproductor de video (posición, calidad, buffering) de forma que sobreviva a rotaciones de pantalla y a la navegación entre pantallas sin perder datos.",
          en: "Managing the video player's state (position, quality, buffering) so it survives screen rotations and navigation between screens without losing data.",
        },
      ],
      results: [
        {
          es: "Arquitectura modular como la de apps de producción, con compilación más rápida.",
          en: "Modular architecture like production apps, with faster builds.",
        },
        {
          es: "Proceso de integración continua que firma y arma la app automáticamente.",
          en: "Continuous-integration process that signs and builds the app automatically.",
        },
      ],
      learnings: {
        es: "La estructura modular tiene un costo de armado inicial alto, pero el beneficio de compilar más rápido y de mantener cada parte aislada se siente desde el primer cambio. Vale la pena desde el inicio.",
        en: "The modular structure has a high upfront setup cost, but the benefit of faster builds and keeping each part isolated shows from the first change. It's worth it from the start.",
      },
    },
  },

  // ── 8. YTM-DOWNLOAD (herramienta personal) ───────────────────────────────
  {
    id: "8",
    slug: "ytm-download",
    availability: "working",
    title: "YTM Download",
    tagline: {
      es: "Descargador local de YouTube con cola y conversión a mp3/mp4, más extensión de Chrome",
      en: "Local YouTube downloader with a queue and mp3/mp4 conversion, plus a Chrome extension",
    },
    description: {
      es: "App local para descargar videos y playlists de YouTube. Cola de descargas, conversión a mp3/mp4, progreso en tiempo real y una extensión de Chrome para descargar desde el navegador.",
      en: "Local app to download YouTube videos and playlists. Download queue, mp3/mp4 conversion, real-time progress, and a Chrome extension to download straight from the browser.",
    },
    image: asset("captures/ytm-download/card.webp"),
    technologies: ["Node.js", "Express", "JavaScript", "yt-dlp", "FFmpeg", "SSE", "Chrome Extension"],
    githubUrl: "https://github.com/Pa7r1/mp3downloader",
    hasDetail: true,
    detail: {
      year: 2026,
      status: "mvp",
      summary: {
        es: "Necesitaba una forma propia de bajar audio y video de YouTube —incluidas playlists enteras— sin los límites, la publicidad ni la privacidad dudosa de las webs online. Es una herramienta local: corre en tu máquina, muestra el progreso en tiempo real y suma una extensión de Chrome para hacerlo desde el navegador con un clic.",
        en: "I needed my own way to download audio and video from YouTube — entire playlists included — without the limits, ads, or sketchy privacy of online sites. It's a local tool: it runs on your machine, shows progress in real time, and adds a Chrome extension to do it from the browser in one click.",
      },
      problem: {
        es: "Quería una herramienta personal para bajar audios y videos de YouTube (incluidas playlists enteras) y convertirlos a mp3/mp4 en un solo paso. Las opciones online tienen límites, publicidad y privacidad dudosa; las de línea de comandos son potentes pero incómodas para el uso de todos los días.",
        en: "I wanted a personal tool to download audio and video from YouTube (entire playlists included) and convert them to mp3/mp4 in one step. Online options have limits, ads and questionable privacy; command-line ones are powerful but awkward for everyday use.",
      },
      architecture: {
        es: "Un backend en Node.js envuelve dos herramientas de línea de comandos muy probadas: una para descargar y FFmpeg para convertir. Una cola procesa las descargas de a una y le va empujando el avance al navegador en tiempo real. El archivo se sirve aparte y se borra solo después, y hay una limpieza periódica de temporales. Además hice una extensión de Chrome que descarga desde el propio popup del navegador.",
        en: "A Node.js backend wraps two well-proven command-line tools: one to download and FFmpeg to convert. A queue processes downloads one at a time and pushes progress to the browser in real time. The file is served separately and auto-deleted afterward, with periodic cleanup of temp files. I also built a Chrome extension that downloads from the browser's own popup.",
      },
      stackRationale: {
        es: "Como el servidor es local y no necesita escalar, prioricé que sea rápido de instalar antes que robusto a gran escala. Para el progreso usé un canal de un solo sentido (servidor → navegador), que es justo lo que hace falta y evita complejidad de más. Y apoyarme en herramientas de línea de comandos bien mantenidas es más sostenible que escribir todo eso desde cero.",
        en: "Since the server is local and doesn't need to scale, I prioritized being fast to install over being robust at large scale. For progress I used a one-way channel (server → browser), which is exactly what's needed and avoids extra complexity. And leaning on well-maintained command-line tools is more sustainable than writing all of that from scratch.",
      },
      challenges: [
        {
          es: "Interpretar el progreso que reporta la herramienta de descarga (texto suelto como '45.2% de 12.3MiB a 1.5MiB/s') y convertirlo en información estructurada sin perder líneas en las partes lentas.",
          en: "Parsing the progress the download tool reports (loose text like '45.2% of 12.3MiB at 1.5MiB/s') into structured information without losing lines during the slow parts.",
        },
        {
          es: "Manejar playlists grandes sin que se trabe todo: cada video es una tarea independiente con su propio estado, pero la cola los agrupa por playlist para mostrar un progreso conjunto.",
          en: "Handling large playlists without everything jamming up: each video is an independent task with its own state, but the queue groups them by playlist to show combined progress.",
        },
      ],
      results: [
        {
          es: "Descarga local, sin límites ni publicidad y con la privacidad de correr en tu propia máquina.",
          en: "Local downloads — no limits, no ads, and the privacy of running on your own machine.",
        },
        {
          es: "Cola de descargas con progreso en tiempo real y extensión de Chrome.",
          en: "Download queue with real-time progress and a Chrome extension.",
        },
      ],
      learnings: {
        es: "Para herramientas locales conviene evitar abstracciones pesadas: envolver programas de línea de comandos bien mantenidos es 'feo' pero confiable y rápido de iterar, y mucho más sostenible que reescribir lo que esos programas ya hacen muy bien.",
        en: "For local tools it's best to avoid heavy abstractions: wrapping well-maintained command-line programs is 'ugly' but reliable and fast to iterate on, and far more sustainable than rewriting what those programs already do very well.",
      },
      screenshots: [
        {
          src: asset("captures/ytm-download/inicio.webp"),
          orientation: "desktop",
          caption: {
            es: "Pantalla principal: pegás la URL y elegís audio o video",
            en: "Main screen: paste the URL and choose audio or video",
          },
        },
        {
          src: asset("captures/ytm-download/descarga.webp"),
          orientation: "desktop",
          caption: {
            es: "Descarga en curso con progreso en tiempo real y cola",
            en: "Download in progress with real-time progress and queue",
          },
        },
        {
          src: asset("captures/ytm-download/extension.webp"),
          orientation: "desktop",
          caption: {
            es: "Extensión de Chrome: descarga mp3/mp4 desde el popup",
            en: "Chrome extension: download mp3/mp4 from the popup",
          },
        },
      ],
    },
  },

  // ── 9. UPWARD (proyecto personal) ─────────────────────────────────────────
  {
    id: "9",
    slug: "upward",
    availability: "working",
    title: "Upward",
    tagline: {
      es: "App para seguir tu progreso profesional: metas, hábitos y aprendizajes en un solo lugar",
      en: "App to track your professional growth: goals, habits and learnings in one place",
    },
    description: {
      es: "Aplicación web para hacer seguimiento del crecimiento profesional —metas, hábitos, conexiones y aprendizajes— en un solo lugar pensado para desarrolladores. En desarrollo activo.",
      en: "Web app to track professional growth — goals, habits, connections and learnings — in one place built for developers. Actively in development.",
    },
    image: asset("captures/upward/card.webp"),
    technologies: ["SvelteKit", "Svelte 5", "Supabase", "UnoCSS", "Playwright", "Vitest", "TypeScript"],
    githubUrl: "https://github.com/Pa7r1/Upward",
    repoPrivate: true,
    hasDetail: true,
    detail: {
      year: 2025,
      status: "wip",
      summary: {
        es: "Hoy el progreso profesional queda repartido entre apps genéricas (Notion, Todoist) que no están pensadas para el crecimiento de alguien que programa. Upward junta metas, hábitos y aprendizajes en un solo lugar. Es un proyecto personal que aprovecho para trabajar con buenas prácticas desde el día uno: pruebas automáticas de punta a punta antes de dar por terminada cada función.",
        en: "Today, professional progress ends up scattered across generic apps (Notion, Todoist) that aren't built for a developer's growth. Upward brings goals, habits and learnings together in one place. It's a personal project I use to work with solid practices from day one: automated end-to-end tests before any feature is considered done.",
      },
      problem: {
        es: "Hacer seguimiento del progreso profesional —metas, hábitos, conexiones, aprendizajes— hoy queda fragmentado entre apps genéricas que no están diseñadas para el contexto de crecimiento de un desarrollador.",
        en: "Tracking professional progress — goals, habits, connections, learnings — is fragmented today across generic apps not designed for a developer's growth context.",
      },
      architecture: {
        es: "Está hecho con SvelteKit y se apoya en un servicio que provee la base de datos, el login y las actualizaciones en tiempo real, así no tengo que gestionar todo eso desde cero. Tiene una batería de pruebas completa: unas que verifican piezas individuales y otras que recorren la app entera como lo haría un usuario real.",
        en: "It's built with SvelteKit and leans on a service that provides the database, login and real-time updates, so I don't have to manage all of that from scratch. It has a full test suite: some that verify individual pieces and others that walk through the entire app the way a real user would.",
      },
      stackRationale: {
        es: "Elegí Svelte 5 para practicar su nuevo modelo de reactividad, distinto al de React. Me apoyé en un servicio externo para la base de datos y la autenticación para no reinventar infraestructura, y armé las pruebas automáticas desde el inicio para no acumular deuda técnica.",
        en: "I chose Svelte 5 to practice its new reactivity model, different from React's. I leaned on an external service for the database and authentication so I wouldn't reinvent infrastructure, and set up automated tests from the start to avoid piling up technical debt.",
      },
      challenges: [
        {
          es: "El nuevo modelo de reactividad de Svelte 5 tiene diferencias sutiles con la versión anterior que rompían varios ejemplos de la documentación; tuve que ir al código fuente de Svelte para entender bien cómo funcionaba.",
          en: "Svelte 5's new reactivity model has subtle differences from the previous version that broke several documentation examples; I had to dig into Svelte's source code to really understand how it worked.",
        },
      ],
      results: [
        {
          es: "Metas, hábitos y aprendizajes centralizados en una sola app.",
          en: "Goals, habits and learnings centralized in a single app.",
        },
        {
          es: "Pruebas automáticas de extremo a extremo desde la primera función.",
          en: "Automated end-to-end tests from the very first feature.",
        },
      ],
      learnings: {
        es: "Tener pruebas que recorren la app completa desde la primera función evita que se rompan cosas sin que te enteres. Cuesta un poco al principio, pero te ahorra muchísimos dolores de cabeza más adelante.",
        en: "Having tests that walk through the entire app from the first feature prevents things from breaking without you noticing. It costs a bit up front, but it saves a ton of headaches down the road.",
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

  // ── 10. SISTEMA-CANCHAS (próximamente) ────────────────────────────────────
  {
    id: "10",
    slug: "sistema-canchas",
    availability: "soon",
    title: "Sistema Canchas",
    tagline: {
      es: "Plataforma para complejos de canchas: reservas que nunca se pisan, caja e inventario",
      en: "Platform for sports venues: bookings that never overlap, cash register and inventory",
    },
    description: {
      es: "Plataforma de gestión para complejos deportivos: reservas, caja, despensa, inventario y reportes. Funciona incluso sin conexión y se sincroniza sola. El desafío central era garantizar que dos reservas nunca se superpongan, y lo resolví a nivel de base de datos.",
      en: "Management platform for sports complexes: bookings, cash register, canteen, inventory and reports. It works even offline and syncs on its own. The core challenge was guaranteeing two bookings never overlap — I solved it at the database level.",
    },
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=350&fit=crop",
    technologies: ["React", "Hono", "Drizzle ORM", "PostgreSQL", "RLS", "Turborepo", "PWA", "WebSockets"],
    githubUrl: "https://github.com/Pa7r1/Sistema-Canchas",
    repoPrivate: true,
    hasDetail: true,
    detail: {
      year: 2025,
      status: "production",
      summary: {
        es: "Gestionar un complejo de canchas con varios negocios adentro (alquiler, despensa, caja) es un caos sin la herramienta correcta. El riesgo más grande es el clásico: dos personas reservando el mismo turno. En vez de confiar en la lógica de la app —que siempre deja una rendija para que dos reservas choquen— lo bloqueé en la propia base de datos, así es directamente imposible que pase. Además funciona sin conexión y se sincroniza cuando vuelve internet.",
        en: "Running a sports complex with several businesses inside it (rentals, canteen, cash) is chaos without the right tool. The biggest risk is the classic one: two people booking the same slot. Instead of trusting the app's logic — which always leaves a crack for two bookings to collide — I blocked it in the database itself, so it simply can't happen. It also works offline and syncs once the connection is back.",
      },
      problem: {
        es: "Manejar un complejo con varios locales adentro, precios que cambian, caja, inventario de despensa y reservas en tiempo real sin solapamientos es prácticamente imposible a mano. El punto más delicado son los choques de turnos: en la mayoría de los sistemas se controlan solo desde la aplicación, lo que deja una ventana mínima donde dos reservas que llegan casi juntas pueden pisarse.",
        en: "Managing a complex with several businesses inside it, changing prices, a cash register, canteen inventory and real-time bookings without overlaps is practically impossible by hand. The trickiest part is booking collisions: most systems only check them from the application, which leaves a tiny window where two bookings arriving almost together can clash.",
      },
      architecture: {
        es: "El proyecto está organizado como un monorepo (frontend, backend y un paquete compartido de tipos y validaciones) para que el front y el back hablen exactamente el mismo idioma sin duplicar código. La base es PostgreSQL, y cada negocio del complejo tiene sus datos aislados a nivel de motor, no por código: aunque la aplicación tuviera un error, un local no puede ver los datos de otro. Para las reservas usé una regla dentro de la base que rechaza automáticamente cualquier turno que se superponga con otro existente.",
        en: "The project is organized as a monorepo (frontend, backend and a shared package of types and validations) so the front and back speak exactly the same language without duplicating code. The database is PostgreSQL, and each business in the complex has its data isolated at the engine level, not in code: even if the application had a bug, one business can't see another's data. For bookings, I used a rule inside the database that automatically rejects any slot overlapping an existing one.",
      },
      stackRationale: {
        es: "Elegí Hono por ser rápido y tipado, Drizzle porque me dejaba usar esa regla anti-superposición de PostgreSQL sin pelearme con el ORM, y el monorepo para compartir un solo conjunto de tipos entre front y back. El aislamiento por negocio lo puse a nivel de base de datos justamente porque es imposible de saltear desde la aplicación: es la forma más segura de tener varios clientes en el mismo sistema.",
        en: "I chose Hono for being fast and typed, Drizzle because it let me use that PostgreSQL anti-overlap rule without fighting the ORM, and the monorepo to share a single set of types between front and back. I put the per-business isolation at the database level precisely because it's impossible to bypass from the application: it's the safest way to host several clients in the same system.",
      },
      challenges: [
        {
          es: "Implementar la regla anti-superposición de turnos sobre rangos de tiempo dentro de PostgreSQL. Entender bien cómo funciona por dentro fue lo más exigente, pero es lo que da la garantía de que dos reservas nunca colisionen, pase lo que pase.",
          en: "Implementing the anti-overlap rule for time ranges inside PostgreSQL. Really understanding how it works under the hood was the most demanding part, but it's what guarantees two bookings never collide, no matter what.",
        },
        {
          es: "Hacer que el aislamiento por negocio conviva con los procesos automáticos del sistema (caja, actualización de stock), que necesitan moverse entre datos sin romper esa separación.",
          en: "Making the per-business isolation coexist with the system's automated processes (cash, stock updates), which need to move across data without breaking that separation.",
        },
        {
          es: "Resolver la sincronización offline: cuando la app vuelve a tener internet, hay que reconciliar datos que pudieron cambiar en el servidor mientras estaba desconectada.",
          en: "Solving offline sync: when the app regains internet, it has to reconcile data that may have changed on the server while it was disconnected.",
        },
      ],
      learnings: {
        es: "Tener varios clientes en un mismo sistema obliga a decidir el aislamiento de los datos desde el día cero; agregarlo después es carísimo. Apoyarme en las garantías de la base de datos desde el principio evitó errores de concurrencia que ninguna prueba a nivel de aplicación habría detectado.",
        en: "Hosting several clients in one system forces you to decide data isolation from day zero; bolting it on later is hugely expensive. Leaning on the database's guarantees from the start prevented concurrency bugs that no application-level test would ever have caught.",
      },
    },
  },

  // ── 11. SISTEMA-ZAPATILLAS (cliente real · Gestión Zapatillas · próximamente) ─
  {
    id: "11",
    slug: "sistema-zapatillas",
    availability: "soon",
    title: "Sistema de Ventas + WhatsApp",
    tagline: {
      es: "De un Excel y pedidos sueltos a una tienda con stock real y pedidos por WhatsApp",
      en: "From an Excel sheet and scattered orders to a real catalog with stock and WhatsApp orders",
    },
    description: {
      es: "Plataforma para un negocio de calzado: catálogo con stock por talle y color, carga masiva de productos desde Excel y pedidos que se arman solos para enviar por WhatsApp, sin obligar al cliente a registrarse.",
      en: "Platform for a footwear business: catalog with stock by size and color, bulk product upload from Excel, and orders that build themselves to send via WhatsApp, without forcing customers to sign up.",
    },
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=350&fit=crop",
    technologies: ["Node.js", "TypeScript", "MySQL", "React", "Express", "TypeORM", "JWT", "Zustand", "React Query"],
    githubUrl: "https://github.com/Pa7r1/SISTEMA-ZAPATILLAS",
    hasDetail: true,
    detail: {
      year: 2025,
      status: "wip",
      summary: {
        es: "El negocio llevaba el catálogo en Excel y tomaba pedidos por mensajes sueltos. Le armé una plataforma real: stock por variante (talle y color), alta masiva de productos subiendo el mismo Excel que ya usaban, y un canal de pedidos apoyado en WhatsApp —el que el negocio ya manejaba— sin costos extra y sin obligar al comprador a crear una cuenta.",
        en: "The business kept its catalog in Excel and took orders through scattered messages. I built them a real platform: stock by variant (size and color), bulk product upload using the same Excel they already had, and an order channel built on WhatsApp — the one they already used — with no extra cost and without forcing buyers to create an account.",
      },
      problem: {
        es: "Un negocio de calzado necesitaba dejar atrás el catálogo en Excel y los pedidos por mensajes sueltos, y pasar a una plataforma de verdad: catálogo con stock, alta masiva de productos desde Excel, y un canal de pedidos que no obligara al cliente a registrarse, todo apoyado en WhatsApp, que era el canal que ya usaban.",
        en: "A footwear business needed to leave behind the Excel catalog and scattered-message orders and move to a real platform: catalog with stock, bulk product upload from Excel, and an order channel that wouldn't force customers to register — all built on WhatsApp, the channel they already used.",
      },
      architecture: {
        es: "El backend es Node.js con Express sobre MySQL, con los productos modelados como modelo / variante / talle / stock. Hay un punto de carga que toma un Excel, valida fila por fila y aplica los cambios contra la base. El frontend es React, con manejo de datos y caché del lado del cliente y formularios validados con el mismo conjunto de reglas que usa el backend, así nunca se contradicen.",
        en: "The backend is Node.js with Express over MySQL, with products modeled as model / variant / size / stock. There's an upload endpoint that takes an Excel file, validates it row by row and applies the changes to the database. The frontend is React, with client-side data handling and caching, and forms validated by the same set of rules the backend uses, so they never contradict each other.",
      },
      stackRationale: {
        es: "Usé las mismas reglas de validación en el backend y en el frontend para tener un único contrato compartido. Para la integración con WhatsApp elegí el enlace directo (wa.me) en lugar de la API oficial: cubre la enorme mayoría de los casos sin costo operativo, que era una condición del negocio.",
        en: "I used the same validation rules on the backend and frontend to keep a single shared contract. For the WhatsApp integration I chose the direct link (wa.me) instead of the official API: it covers the vast majority of cases at no operational cost, which was a business requirement.",
      },
      challenges: [
        {
          es: "La carga masiva desde Excel con miles de filas: cada fila puede ser un alta, una actualización, ignorarse o tener un error. El sistema procesa todo en bloque y devuelve un resumen de qué pasó con cada fila, sin cancelar todo el lote por un solo error.",
          en: "Bulk Excel upload with thousands of rows: each row can be a new entry, an update, ignored, or have an error. The system processes it all in one batch and returns a summary of what happened with each row, without canceling the whole batch over a single error.",
        },
        {
          es: "Modelar las variantes (color × talle × stock) sin que la base de datos explote en miles de filas inmanejables.",
          en: "Modeling variants (color × size × stock) without the database exploding into thousands of unmanageable rows.",
        },
      ],
      results: [
        {
          es: "Reemplazó el catálogo en Excel + pedidos sueltos por una tienda con stock real.",
          en: "Replaced the Excel catalog + scattered orders with a real catalog backed by live stock.",
        },
        {
          es: "Carga masiva de productos subiendo el mismo Excel que ya usaba el negocio.",
          en: "Bulk product upload using the business's own Excel file.",
        },
        {
          es: "Pedidos listos para enviar por WhatsApp, sin costo operativo ni registro del cliente.",
          en: "Orders ready to send over WhatsApp, with zero operational cost and no customer signup.",
        },
      ],
      learnings: {
        es: "Una integración con WhatsApp por enlace directo cubre el 90% de los casos sin pagar la API oficial: el límite no era la tecnología sino el costo. Y para importar desde Excel, el patrón de 'reporte por fila' es lo que separa una herramienta usable de un script frágil que se rompe con el primer dato raro.",
        en: "A direct-link WhatsApp integration covers 90% of cases without paying for the official API: the limit wasn't the tech, it was cost. And for Excel imports, the 'per-row report' pattern is what separates a usable tool from a brittle script that breaks on the first odd value.",
      },
    },
  },
];
