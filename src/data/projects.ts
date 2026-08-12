import type { Project } from "@/types";
import { asset } from "@/utils/asset";

export const projects: Project[] = [
  // ── 1. MODEX-ECOMMERCE ───────────────────────────────────────────────────
  {
    id: "12",
    slug: "modex-ecommerce",
    availability: "working",
    kind: "client",
    accent: "#b4552f",
    title: "Modex — E-commerce",
    tagline: {
      es: "16 meses en un repositorio compartido con siete desarrolladores y cobros reales",
      en: "16 months in a shared repository with seven other developers and real payments",
    },
    description: {
      es: "Tienda online de hardware construida entre ocho desarrolladores. Mi parte: la carga masiva del catálogo, el motor que le busca la imagen a cada producto y la reportería.",
      en: "Online hardware store built by eight developers. My part: bulk catalog loading, the image engine, MercadoPago payments and the reporting.",
    },
    image: asset("captures/modex-ecommerce/card.webp"),
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "React",
      "Redux Toolkit",
      "Material UI",
      "MercadoPago",
    ],
    repoPrivate: true,
    hasDetail: true,
    detail: {
      year: 2025,
      status: "production",
      summary: {
        es: "Modex vende accesorios y componentes de hardware. Su tienda online la construimos entre ocho desarrolladores sobre un mismo repositorio, entre julio de 2024 y noviembre de 2025. Es el proyecto que más se parece a trabajar en una empresa: código que no escribí yo, conflictos que resolver, decisiones que discutir y una pasarela de pagos real de por medio.",
        en: "Modex sells computer hardware and accessories. Eight of us built their online store on a single shared repository between July 2024 and November 2025. It's the project that most resembles working at a company: code I didn't write, conflicts to resolve, decisions to argue, and a real payment gateway in the middle.",
      },
      problem: {
        es: "El dueño cargaba a mano cada producto con todos sus datos: nombre, precio, características, imagen. Con un catálogo de miles de artículos que cambian de precio seguido, eso era insostenible. Además la tienda tenía que cobrar de verdad, no simular el pago.",
        en: "The owner entered every product by hand with all its data: name, price, specs, image. With a catalog of thousands of items whose prices change constantly, that was unsustainable. On top of that, the store had to actually take payments, not simulate them.",
      },
      architecture: {
        es: "Backend en Node.js con Express sobre MySQL, y frontend en React con Material UI y Redux Toolkit para el estado compartido del carrito y la sesión. Los pagos van por MercadoPago, con el flujo completo de compra y el manejo de los estados de la transacción: aprobado, pendiente y rechazado, cada uno con su pantalla. El acceso se controla con Passport y JWT, y las entradas se validan con express-validator antes de tocar la base. Mi aporte principal fue el camino de los datos: subir un Excel o CSV, mapear sus columnas contra el catálogo, detectar duplicados y ajustar precios por porcentaje, más un módulo que sale a buscar la imagen de cada producto para no tener que cargarla a mano.",
        en: "Node.js and Express backend over MySQL, with a React frontend using Material UI and Redux Toolkit for shared cart and session state. Payments run through MercadoPago, with the full purchase flow and transaction state handling — approved, pending and rejected, each with its own screen. Access is controlled with Passport and JWT, and inputs are validated with express-validator before reaching the database. My main contribution was the data path: upload an Excel or CSV, map its columns against the catalog, detect duplicates and adjust prices by percentage, plus a module that goes out and finds each product's image so nobody has to upload it by hand.",
      },
      stackRationale: {
        es: "El stack ya estaba elegido cuando entré, y eso también es parte de la experiencia: adaptarme a decisiones que no tomé. Donde sí decidí fue en la capa de datos. Moví las consultas sueltas que vivían desperdigadas por el servidor a procedimientos almacenados dentro de MySQL: dejó de haber cinco versiones distintas de la misma consulta según quién la hubiera escrito.",
        en: "The stack was already chosen when I joined, and that's part of the experience too: adapting to decisions I didn't make. Where I did decide was the data layer. I moved the loose queries scattered across the server into stored procedures inside MySQL: there stopped being five different versions of the same query depending on who had written it.",
      },
      challenges: [
        {
          es: "Tocar un módulo que en paralelo estaba modificando otro. La parte difícil de un repositorio compartido no es el conflicto de git, que se resuelve; es enterarte a tiempo de que alguien está trabajando sobre lo mismo y ponerse de acuerdo antes y no después.",
          en: "Touching a module someone else was modifying in parallel. The hard part of a shared repository isn't the git conflict, which gets resolved; it's finding out in time that someone is working on the same thing and agreeing beforehand rather than after.",
        },
        {
          es: "Integrar la pasarela de pagos completa. Un pago no es un botón: hay que manejar el pendiente, el rechazado y el aprobado, y que el pedido quede en el estado correcto en cada caso, incluso si el usuario cierra la pestaña en el medio.",
          en: "Integrating the full payment gateway. A payment isn't a button: you have to handle pending, rejected and approved, and make sure the order lands in the right state in each case — even if the user closes the tab midway.",
        },
        {
          es: "Que la carga masiva no rompiera nada. Un archivo con miles de filas puede traer duplicados, columnas corridas o precios mal formateados; había que frenarlo antes de que llegara a la base, no después.",
          en: "Making sure bulk loading broke nothing. A file with thousands of rows can bring duplicates, shifted columns or badly formatted prices; it had to be stopped before reaching the database, not after.",
        },
      ],
      results: [
        {
          es: "La carga del catálogo pasó de escribir cada producto a mano a subir un archivo y revisar el resultado.",
          en: "Catalog loading went from typing every product by hand to uploading a file and reviewing the result.",
        },
        {
          es: "La tienda cobra en línea con MercadoPago, con el estado del pedido siempre consistente con el del pago.",
          en: "The store takes payments online through MercadoPago, with order state always consistent with payment state.",
        },
        {
          es: "El área de negocio dejó de pedir listados: exporta sus propios reportes a PDF, Excel y CSV desde el panel.",
          en: "The business side stopped requesting reports: they export their own to PDF, Excel and CSV from the admin panel.",
        },
      ],
      learnings: {
        es: "Es lo más parecido a un trabajo en equipo que tuve, y lo que más me cambió la forma de escribir código. Cuando lo que escribís lo va a leer y modificar otro, dejás de optimizar para terminar rápido y empezás a optimizar para que se entienda. También descubrí que revisar el código de otro es una habilidad aparte: lleva más tiempo del que uno calcula, y es donde más aprendí de formas de resolver que no eran la mía.",
        en: "It's the closest thing to a team job I've had, and what changed how I write code the most. When what you write is going to be read and modified by someone else, you stop optimizing for finishing fast and start optimizing for being understood. I also found out that reviewing someone else's code is a separate skill: it takes longer than you'd budget, and it's where I learned the most from ways of solving things that weren't mine.",
      },
      screenshots: [
        {
          src: asset("captures/modex-ecommerce/inicio.webp"),
          orientation: "desktop",
          caption: { es: "Portada de la tienda", en: "Storefront home" },
        },
        {
          src: asset("captures/modex-ecommerce/inicio-mobile.webp"),
          orientation: "mobile",
          caption: {
            es: "La misma portada en el celular",
            en: "The same storefront on mobile",
          },
        },
      ],
    },
  },

  // ── 2. BARBERIA ──────────────────────────────────────────────────────────
  {
    id: "1",
    slug: "barberia",
    availability: "live",
    kind: "client",
    accent: "#7a3b52",
    title: "VJ-Barber — Sistema de Gestión",
    tagline: {
      es: "El sistema que sacó a una barbería con sucursales del WhatsApp y el papel",
      en: "The system that moved a multi-branch barbershop off WhatsApp and paper",
    },
    description: {
      es: "Turnos, caja, comisiones y varias sucursales en un mismo sistema. El dueño dejó el papel y las cuentas a mano. En producción en vj-barber.com.",
      en: "Bookings, cash register, commissions and several branches in one system. The owner dropped the paper and the manual math. Live at vj-barber.com.",
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
          caption: {
            es: "Gestión de turnos por estado",
            en: "Booking management by status",
          },
        },
        {
          src: asset("captures/barberia/pagos.webp"),
          orientation: "desktop",
          caption: {
            es: "Registro de pagos y comisiones",
            en: "Payments and commissions tracking",
          },
        },
        {
          src: asset("captures/barberia/servicios.webp"),
          orientation: "desktop",
          caption: {
            es: "Catálogo de servicios y precios",
            en: "Services & pricing catalog",
          },
        },
      ],
    },
  },

  // ── 3. AULA-VIRTUAL ──────────────────────────────────────────────────────
  {
    id: "13",
    slug: "aula-virtual",
    availability: "live",
    kind: "client",
    accent: "#2c5a70",
    title: "Aula Virtual",
    tagline: {
      es: "Un aula online autohospedada, con su propio servidor y su certificado SSL",
      en: "A self-hosted online classroom, with its own server and SSL certificate",
    },
    description: {
      es: "Plataforma de cursos para un instructor que repetía la misma clase por privado a cada alumno. Video autohospedado, en un VPS que ya tenía otro sistema andando.",
      en: "Course platform for an instructor who was repeating the same lesson privately to each student. Self-hosted video, on a VPS already running another system.",
    },
    image: asset("captures/aula-virtual/card.webp"),
    technologies: [
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "React",
      "Docker",
      "Nginx",
      "Certbot",
      "VPS",
    ],
    githubUrl: "https://github.com/Pa7r1/aula-virtual",
    liveUrl: "https://vj-barber.online",
    repoPrivate: true,
    hasDetail: true,
    detail: {
      year: 2026,
      status: "production",
      summary: {
        es: "El instructor mandaba el material por mensaje privado, alumno por alumno, y repetía la misma explicación cada vez. Le construí un aula donde publica una sola vez y todos lo ven, con el contenido ordenado en módulos y lecciones y el progreso de cada alumno registrado. Está en producción desde mayo de 2026 en vj-barber.online.",
        en: "The instructor was sending material by private message, student by student, repeating the same explanation every time. I built him a classroom where he publishes once and everyone sees it, with content organized into modules and lessons and each student's progress tracked. It's been in production since May 2026 at vj-barber.online.",
      },
      problem: {
        es: "No servía cualquier plataforma de cursos: el contenido es privado y el alta de cuentas la decide el instructor, no hay registro abierto. Además tenía que aguantar video subido directamente al servidor, sin depender de una plataforma externa que pusiera el material detrás de publicidad o lo diera de baja.",
        en: "An off-the-shelf course platform wouldn't do: the content is private and account creation is the instructor's call — there's no open sign-up. It also had to handle video uploaded directly to the server, without depending on an external platform that might put the material behind ads or take it down.",
      },
      architecture: {
        es: "Backend en FastAPI con SQLAlchemy sobre PostgreSQL, y frontend en React pensado primero para el celular, que es donde los alumnos realmente miran las clases. Todo el stack va en Docker Compose con cuatro servicios: la base, el backend, Nginx y Certbot para el certificado. Cada endpoint valida el rol y el acceso al curso con un mismo helper, así no queda ningún camino sin controlar. Para el video implementé descarga por rangos, que es lo que le permite al reproductor saltar a la mitad de un video sin descargarlo entero.",
        en: "FastAPI backend with SQLAlchemy over PostgreSQL, and a React frontend built mobile-first, which is where students actually watch the lessons. The whole stack runs on Docker Compose with four services: database, backend, Nginx and Certbot for the certificate. Every endpoint validates role and course access through the same helper, so no path is left unchecked. For video I implemented range requests, which is what lets the player jump to the middle of a video without downloading the whole thing.",
      },
      stackRationale: {
        es: "Elegí PostgreSQL en vez de MySQL, que era lo que venía usando, para no atarme a la base del otro sistema que ya corría en ese servidor. Autohospedar el video en lugar de tirarlo a YouTube fue una decisión del cliente y me pareció correcta: el material es suyo y no quería que dependiera de una cuenta ajena.",
        en: "I chose PostgreSQL over MySQL, which is what I'd been using, to avoid coupling it to the other system's database already running on that server. Self-hosting the video instead of dumping it on YouTube was the client's call and I thought it was right: the material is his and he didn't want it depending on someone else's account.",
      },
      challenges: [
        {
          es: "Meter un sistema nuevo en un servidor que ya tenía otro corriendo, sin tocar el que funcionaba. El sistema viejo era el único que escuchaba los puertos 80 y 443, así que el aula quedó escuchando solo en loopback y el Nginx del sistema viejo le pasa el tráfico. Agregué un modo específico para eso en el repositorio, en vez de dejarlo como un parche manual en el servidor.",
          en: "Fitting a new system onto a server that already had another one running, without touching the one that worked. The old system was the only one listening on ports 80 and 443, so the classroom ended up listening on loopback only, with the old Nginx passing traffic through. I added a specific mode for that to the repository, instead of leaving it as a manual patch on the server.",
        },
        {
          es: "Durante el despliegue descubrí que el certificado del sistema viejo llevaba semanas sin renovarse: el directorio que usa Certbot para validar estaba declarado pero el contenedor nunca se había recreado para tomarlo. Lo arreglé de paso, antes de que venciera y se cayera el sitio que ya estaba en producción.",
          en: "During deployment I found the old system's certificate hadn't renewed in weeks: the directory Certbot uses to validate was declared but the container had never been recreated to pick it up. I fixed it on the way, before it expired and took down the site that was already in production.",
        },
      ],
      results: [
        {
          es: "El instructor publica una vez y lo ve todo el grupo, en lugar de repetir la explicación por privado a cada alumno.",
          en: "The instructor publishes once and the whole group sees it, instead of repeating the explanation privately to each student.",
        },
        {
          es: "En producción con dominio propio y HTTPS desde mayo de 2026.",
          en: "In production with its own domain and HTTPS since May 2026.",
        },
      ],
      learnings: {
        es: "Desplegar sobre un servidor que ya tiene algo andando enseña más que arrancar de cero. Lo que aprendí es a mirar primero qué hay y por qué está así, antes de cambiar nada: el certificado sin renovar lo encontré porque me puse a entender la configuración ajena en lugar de pasarla por encima.",
        en: "Deploying onto a server that already has something running teaches more than starting from scratch. What I learned is to first look at what's there and why, before changing anything: I found the unrenewed certificate because I sat down to understand someone else's config instead of steamrolling it.",
      },
      screenshots: [
        {
          src: asset("captures/aula-virtual/login-mobile.webp"),
          orientation: "mobile",
          caption: {
            es: "Acceso al aula: no hay registro abierto, las cuentas las da el instructor",
            en: "Classroom sign-in: no open sign-up, the instructor grants the accounts",
          },
        },
      ],
    },
  },

  // ── 4. QRETAIL ───────────────────────────────────────────────────────────
  {
    id: "3",
    slug: "qretail",
    availability: "live",
    kind: "product",
    accent: "#8a6a1f",
    title: "QRetail",
    tagline: {
      es: "Producto propio: digitaliza una tienda entera desde el celular, con escaneo y planes",
      en: "My own product: run a whole shop from your phone, with scanning and plans",
    },
    description: {
      es: "Producto propio por suscripción: escaneo de código de barras y QR, ventas, stock y roles. De anotar en un cuaderno a manejar la tienda entera desde el celular.",
      en: "My own subscription product: barcode and QR scanning, sales, stock and roles. From a paper notebook to running the whole shop from a phone.",
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
    liveUrl: "https://q-retail.vercel.app/",
    repoPrivate: true,
    hasDetail: true,
    detail: {
      year: 2025,
      status: "production",
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
          caption: {
            es: "Escaneo de QR y código de barras",
            en: "QR and barcode scanning",
          },
        },
        {
          src: asset("captures/qretail/venta.webp"),
          orientation: "mobile",
          caption: {
            es: "Venta rápida con favoritos y categorías",
            en: "Quick sale with favorites and categories",
          },
        },
        {
          src: asset("captures/qretail/productos-qr.webp"),
          orientation: "mobile",
          caption: {
            es: "Generación de QR para productos sin código",
            en: "QR generation for code-less products",
          },
        },
      ],
    },
  },

  // ── 5. CIRCUITOS-ARGENTINOS ──────────────────────────────────────────────
  {
    id: "14",
    slug: "circuitos-argentinos",
    availability: "live",
    kind: "lab",
    accent: "#3f6b3a",
    title: "Circuitos Argentinos",
    tagline: {
      es: "Un mapa de circuitos off-road con búsquedas geográficas reales dentro de la base de datos",
      en: "An off-road circuit map with real geographic queries inside the database",
    },
    description: {
      es: "Mapa de circuitos de enduro, motocross y MTB, en línea y con dominio propio. El organizador sube el archivo del recorrido y la app lo dibuja; buscar los que tenés cerca lo resuelve la base.",
      en: "Map of enduro, motocross and MTB circuits, live on its own domain. The organizer uploads the route file and the app draws it; finding what's near you is solved in the database.",
    },
    image: asset("captures/circuitos-argentinos/card.webp"),
    technologies: [
      "Fastify",
      "TypeScript",
      "Drizzle ORM",
      "PostGIS",
      "React",
      "Leaflet",
      "Docker",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/Pa7r1/circuitos-argentinos",
    liveUrl: "https://circuitos-argentinos.makkem.com",
    repoPrivate: true,
    hasDetail: true,
    detail: {
      year: 2026,
      status: "production",
      summary: {
        es: "Los circuitos off-road de Argentina están repartidos entre grupos de WhatsApp y publicaciones sueltas de Facebook. Armé un mapa único donde el organizador carga el recorrido subiendo el archivo GPX que ya le queda del reloj o del celular, y cualquiera puede ver qué hay cerca suyo. Es mi proyecto más exigente en el lado técnico: es donde puse pruebas automatizadas, integración continua y una auditoría de seguridad al cierre.",
        en: "Argentina's off-road circuits are scattered across WhatsApp groups and one-off Facebook posts. I built a single map where the organizer loads a route by uploading the GPX file their watch or phone already produced, and anyone can see what's near them. It's my most demanding project technically: it's where I put automated tests, continuous integration and a security audit at the end.",
      },
      problem: {
        es: "Buscar circuitos cercanos no es una búsqueda de texto: es una pregunta geográfica. Si la resolvés trayéndote todos los circuitos y calculando distancias en el navegador, funciona con veinte y se cae con dos mil. Tenía que resolverse en la base de datos.",
        en: "Searching for nearby circuits isn't a text search: it's a geographic question. If you solve it by pulling every circuit and computing distances in the browser, it works with twenty and collapses with two thousand. It had to be solved in the database.",
      },
      architecture: {
        es: "Monorepo con pnpm: la API en Fastify con TypeScript, la web en React con Vite, y un paquete compartido con los tipos que usan las dos puntas. La base es PostgreSQL con PostGIS, la extensión que le enseña a entender coordenadas y distancias, con índices geográficos para que la búsqueda por cercanía sea una sola consulta. El acceso a datos va con Drizzle, y el mapa se dibuja con Leaflet. Los archivos GPX que sube el administrador se convierten a GeoJSON en el servidor antes de guardarse. La aplicación es instalable en el teléfono.",
        en: "pnpm monorepo: the API in Fastify with TypeScript, the web app in React with Vite, and a shared package with the types both ends use. The database is PostgreSQL with PostGIS — the extension that teaches it to understand coordinates and distances — with geographic indexes so a proximity search is a single query. Data access goes through Drizzle, and the map is drawn with Leaflet. GPX files uploaded by the admin are converted to GeoJSON on the server before being stored. The app is installable on a phone.",
      },
      stackRationale: {
        es: "Elegí Fastify sobre Express porque valida las entradas y salidas contra un esquema desde el arranque, y en una API que recibe archivos de gente desconocida eso importa. PostGIS no fue opcional: es lo que convierte «circuitos a menos de 50 km» en una consulta que la base resuelve sola. El paquete de tipos compartidos es lo que más me ahorró: cuando cambia el contrato entre la API y la web, se rompe la compilación en vez de fallar delante del usuario.",
        en: "I chose Fastify over Express because it validates inputs and outputs against a schema from the start, and in an API that receives files from strangers that matters. PostGIS wasn't optional: it's what turns \"circuits within 50 km\" into a query the database resolves on its own. The shared types package saved me the most: when the contract between API and web changes, the build breaks instead of failing in front of the user.",
      },
      challenges: [
        {
          es: "Interpretar archivos GPX reales. La especificación es una cosa y lo que exporta cada reloj o aplicación es otra: recorridos con puntos repetidos, sin altura, con marcas de tiempo raras. El parser tiene que tolerar todo eso y aun así producir un trazado dibujable.",
          en: "Parsing real GPX files. The spec is one thing and what each watch or app exports is another: routes with duplicate points, no elevation, odd timestamps. The parser has to tolerate all of it and still produce a drawable track.",
        },
        {
          es: "Probar consultas geográficas de verdad. Las pruebas corren contra una base PostGIS real levantada en Docker, no contra una simulación, porque un índice geográfico simulado no prueba nada. Verifiqué con EXPLAIN que la consulta usara efectivamente el índice y no recorriera la tabla entera.",
          en: "Testing geographic queries for real. The tests run against an actual PostGIS database spun up in Docker, not against a mock, because a mocked geographic index proves nothing. I verified with EXPLAIN that the query actually used the index instead of scanning the whole table.",
        },
        {
          es: "Cerrar el acceso de administración. Puse límite de intentos en el login, revisé que los registros del servidor no filtraran las credenciales y dejé traza de las acciones administrativas.",
          en: "Locking down admin access. I added rate limiting on login, checked that server logs didn't leak credentials, and left an audit trail of administrative actions.",
        },
      ],
      results: [
        {
          es: "La búsqueda por cercanía se resuelve en una sola consulta con índice geográfico, verificado con EXPLAIN.",
          en: "Proximity search resolves in a single indexed geographic query, verified with EXPLAIN.",
        },
        {
          es: "Desplegado y accesible en circuitos-argentinos.makkem.com, sobre un VPS propio con Docker, Nginx y renovación automática del certificado.",
          en: "Deployed and reachable at circuitos-argentinos.makkem.com, on my own VPS with Docker, Nginx and automatic certificate renewal.",
        },
        {
          es: "Integración continua en GitHub Actions que corre lint, tipos y pruebas contra una base PostGIS real en cada cambio.",
          en: "Continuous integration on GitHub Actions running lint, types and tests against a real PostGIS database on every change.",
        },
      ],
      learnings: {
        es: "Es el primer proyecto donde las pruebas me sirvieron de verdad en vez de ser un trámite, y la diferencia estuvo en probar contra la base real. Un índice geográfico contra una simulación siempre pasa; contra PostGIS de verdad te enterás de que la consulta no lo estaba usando. También fue la primera vez que dejé andando integración continua desde el principio y no al final, y ya no volvería atrás.",
        en: "It's the first project where tests actually helped instead of being a chore, and the difference was testing against the real database. A geographic index against a mock always passes; against real PostGIS you find out the query wasn't using it. It was also the first time I set up continuous integration from the start rather than at the end, and I wouldn't go back.",
      },
      screenshots: [
        {
          src: asset("captures/circuitos-argentinos/ficha.webp"),
          orientation: "desktop",
          caption: {
            es: "Ficha de circuito: el recorrido dibujado sobre la foto satelital",
            en: "Circuit page: the route drawn over satellite imagery",
          },
        },
        {
          src: asset("captures/circuitos-argentinos/mapa.webp"),
          orientation: "desktop",
          caption: {
            es: "Mapa público con filtros por disciplina",
            en: "Public map with filters by discipline",
          },
        },
        {
          src: asset("captures/circuitos-argentinos/ficha-mobile.webp"),
          orientation: "mobile",
          caption: {
            es: "La misma ficha en el celular, que es donde se usa",
            en: "The same circuit page on mobile, where it actually gets used",
          },
        },
      ],
    },
  },

  // ── 6. UPWARD ────────────────────────────────────────────────────────────
  {
    id: "9",
    slug: "upward",
    availability: "working",
    kind: "lab",
    accent: "#8a3b6b",
    title: "Upward",
    tagline: {
      es: "Me puse las reglas de un equipo aunque estaba solo: tests en dos capas y registro de decisiones",
      en: "I set myself a team's rules even though I was alone: two layers of tests and a decision log",
    },
    description: {
      es: "App de hábitos instalable que funciona sin conexión. Cada decisión técnica queda escrita en el repositorio con su razón y con las alternativas que descarté.",
      en: "Installable habit app that works offline. Every technical decision is written into the repo with its reason and the alternatives I ruled out.",
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
    repoPrivate: true,
    hasDetail: true,
    detail: {
      year: 2025,
      status: "wip",
      summary: {
        es: "Upward es una app de hábitos: cada hábito que cumplís cuenta como un voto por la persona que querés ser, y la app lleva la cuenta. La construí solo, pero decidí trabajarla como si tuviera un equipo mirando por encima del hombro. Nada se da por terminado sin pruebas, y cada elección técnica queda anotada en el repositorio con su razón y con lo que descarté. Es el proyecto donde cuidé el proceso tanto como el resultado.",
        en: "Upward is a habit app: every habit you complete counts as a vote for the person you're trying to become, and the app keeps score. I built it alone, but decided to work on it as if a team were looking over my shoulder. Nothing is done without tests, and every technical choice is written into the repository with its reason and what I ruled out. It's the project where I looked after the process as much as the result.",
      },
      problem: {
        es: "Una app de hábitos se abre a la mañana, apurado, con una mano y sin mirar demasiado. Así que antes de maquetar nada dejé la restricción por escrito: tiene que ser usable con un solo pulgar, en pantallas de 360 a 430 píxeles de ancho y con conexión móvil pobre. Esa regla descartó de entrada la mitad de las soluciones cómodas — menús que piden las dos manos, pantallas que no arrancan sin red, listas que salen a buscar datos cada vez que se dibujan.",
        en: "A habit app gets opened in the morning, in a hurry, one-handed and without looking too hard. So before laying out a single screen I put the constraint in writing: it has to be usable with one thumb, on screens between 360 and 430 pixels wide, over a poor mobile connection. That rule ruled out half the comfortable answers up front — menus that need two hands, screens that won't start without a network, lists that go fetch data every time they render.",
      },
      architecture: {
        es: "SvelteKit 2 con Svelte 5 y sus runes, el modelo de reactividad nuevo que reemplaza a las librerías de estado externas. La app está en capas: las rutas muestran, los stores guardan el estado reactivo y los services tienen la lógica de negocio y las consultas. Un componente nunca llama a un service directo. Los datos viven en Supabase, que es PostgreSQL con autenticación encima, y cada tabla filtra por el usuario de la sesión con Row-Level Security: el aislamiento entre cuentas lo garantiza la base, no el código de la app. Es instalable en el teléfono — un Service Worker generado con Workbox precachea la aplicación y guarda las respuestas de la API, con una pantalla propia para cuando no hay señal.",
        en: "SvelteKit 2 with Svelte 5 and its runes, the new reactivity model that replaces external state libraries. The app is layered: routes render, stores hold reactive state, and services hold the business logic and the queries. A component never calls a service directly. Data lives in Supabase — PostgreSQL with auth on top — and every table filters by the session's user through Row-Level Security: account isolation is guaranteed by the database, not by the app's code. It installs on the phone: a Workbox-generated Service Worker precaches the app and stores API responses, with its own screen for when there's no signal.",
      },
      stackRationale: {
        es: "Cada una de estas elecciones está en el registro de decisiones del repositorio con su razón y sus alternativas descartadas, que es la parte que normalmente se pierde. Svelte compila a JavaScript común y no manda un runtime al teléfono: en una app que tiene que abrir con mala señal eso pesa más que la comodidad de usar el framework que ya conozco, y por eso quedaron afuera Next.js y Remix. Supabase da PostgreSQL de verdad, que es lo que pide un modelo relacional de identidades, hábitos, votos y rachas; Firebase quedó afuera porque meter eso en un almacén de documentos era pelearse con la herramienta. UnoCSS genera solo las clases que uso. Y no puse ORM: el cliente de Supabase ya devuelve los tipos del esquema y una capa más no agregaba nada.",
        en: "Each of these choices sits in the repository's decision log with its reason and the alternatives ruled out — the part that usually gets lost. Svelte compiles to plain JavaScript and ships no runtime to the phone: in an app that has to open on a bad connection, that outweighs the comfort of using the framework I already know, which is why Next.js and Remix were dropped. Supabase gives me real PostgreSQL, which is what a relational model of identities, habits, votes and streaks needs; Firebase was dropped because forcing that into a document store meant fighting the tool. UnoCSS generates only the classes I actually use. And I skipped the ORM: the Supabase client already returns types from the schema, and one more layer added nothing.",
      },
      challenges: [
        {
          es: "Sostener dos capas de pruebas en el mismo proyecto sin que se estorben. Vitest corre la lógica de los services contra un Supabase simulado, en segundos, y es lo que ejecuto mientras escribo. Playwright abre la app de verdad en tres dispositivos —un Android, un iPhone y un escritorio— y recorre el registro, la navegación, la instalación como app y el modo sin conexión. Dos configuraciones, dos velocidades: la rápida a cada rato, la lenta antes de dar algo por cerrado.",
          en: "Keeping two layers of tests in the same project without them getting in each other's way. Vitest runs the services' logic against a mocked Supabase, in seconds, and that's what I run while writing. Playwright opens the real app on three devices — an Android, an iPhone and a desktop — and walks through sign-up, navigation, installing it as an app, and offline mode. Two configs, two speeds: the fast one constantly, the slow one before calling anything done.",
        },
        {
          es: "Anotar cada decisión con sus alternativas descartadas. Suena a burocracia hasta que te toca completar el campo «alternativas» y te das cuenta de que no habías mirado ninguna. Ese es el trabajo real del registro: no documentar la elección, sino obligarte a que haya habido una.",
          en: "Logging every decision along with the alternatives ruled out. It sounds like paperwork until you have to fill in the \"alternatives\" field and realize you never looked at any. That's the log's real job: not documenting the choice, but forcing there to have been one.",
        },
        {
          es: "Los runes de Svelte 5 tienen diferencias sutiles con la reactividad de la versión anterior, y varios ejemplos que circulan ya no funcionan. Terminé leyendo el código fuente de Svelte para entender cuándo se recalcula un valor derivado y cuándo no.",
          en: "Svelte 5's runes differ subtly from the previous version's reactivity, and several examples floating around simply don't work anymore. I ended up reading Svelte's source to understand when a derived value recomputes and when it doesn't.",
        },
      ],
      results: [
        {
          es: "Registro de decisiones técnicas versionado en el repositorio, con el formato decisión / razón / alternativas descartadas.",
          en: "A versioned technical decision log in the repository, in decision / reason / alternatives-ruled-out format.",
        },
        {
          es: "Pruebas unitarias de la lógica de negocio y recorridos de punta a punta en tres dispositivos, corriendo sobre el mismo proyecto.",
          en: "Unit tests on the business logic plus end-to-end runs on three devices, living in the same project.",
        },
        {
          es: "Aplicación instalable que abre y funciona sin conexión, con su propia pantalla para cuando se cae la señal.",
          en: "An installable app that opens and works offline, with its own screen for when the signal drops.",
        },
      ],
      learnings: {
        es: "Lo que me llevo no es el framework, es la costumbre de anotar por qué. La decisión sola envejece mal: seis meses después te acordás de qué elegiste pero no de contra qué, y no podés revisar si sigue en pie. Del lado técnico, los runes me cambiaron la forma de pensar el estado incluso cuando vuelvo a React — cuando la reactividad es del valor y no del componente, dejás de preguntarte cuándo se vuelve a renderizar algo. Y la restricción de una sola mano fue la mejor decisión de diseño que tomé, justamente porque no me dejó agregar nada por las dudas.",
        en: "What I take from it isn't the framework, it's the habit of writing down why. A decision on its own ages badly: six months later you remember what you picked but not what you picked it over, so you can't tell whether it still holds. On the technical side, runes changed how I think about state even when I go back to React — when reactivity belongs to the value rather than the component, you stop asking yourself when something re-renders. And the one-handed constraint was the best design decision I made, precisely because it wouldn't let me add anything just in case.",
      },
      screenshots: [
        {
          src: asset("captures/upward/onboarding.webp"),
          orientation: "mobile",
          caption: {
            es: "Onboarding basado en identidad",
            en: "Identity-based onboarding",
          },
        },
        {
          src: asset("captures/upward/progress.webp"),
          orientation: "mobile",
          caption: {
            es: "Métricas de progreso real",
            en: "Real progress metrics",
          },
        },
      ],
    },
  },

  // ── 7. MUNDORIDER ────────────────────────────────────────────────────────
  {
    id: "16",
    slug: "mundorider",
    availability: "working",
    kind: "lab",
    accent: "#4a5c8a",
    title: "MundoRider",
    tagline: {
      es: "El comparador de motos donde solo lleva JavaScript la parte que de verdad lo necesita",
      en: "The motorcycle comparator where only the parts that truly need JavaScript get any",
    },
    description: {
      es: "Plataforma para decidir qué moto comprar en Argentina, con los costos reales de mantenerla. El contenido va estático para que Google lo lea; el comparador es una isla de React.",
      en: "A platform for choosing which motorcycle to buy in Argentina, with the real cost of keeping it running. Content ships static so Google reads it; the comparator is a React island.",
    },
    // Sin captura a propósito: no hay una que valga y no se fuerza.
    // La cadena vacía activa la variante tipográfica de la tarjeta.
    image: "",
    technologies: [
      "Astro",
      "React",
      "Fastify",
      "Drizzle ORM",
      "PostgreSQL",
      "TypeScript",
      "Zod",
      "Vitest",
    ],
    repoPrivate: true,
    hasDetail: true,
    detail: {
      year: 2026,
      status: "wip",
      summary: {
        es: "Antes de gastar millones en una moto, la información que hace falta está desperdigada entre foros y videos: cuánto sale mantenerla, qué se le rompe, si se consiguen repuestos. Estoy construyendo el sitio que responde eso en un solo lugar. El dueño del proyecto es mecánico y piloto de enduro, así que el criterio editorial sale de alguien que las abre.",
        en: "Before spending a fortune on a motorcycle, the information you need is scattered across forums and videos: what it costs to maintain, what breaks, whether parts are available. I'm building the site that answers all that in one place. The project owner is a mechanic and enduro rider, so the editorial judgment comes from someone who actually takes them apart.",
      },
      problem: {
        es: "Es un sitio que vive de que lo encuentren en Google, así que el contenido tiene que llegar ya escrito en el HTML, no armarse en el navegador. Pero al mismo tiempo necesita partes de verdad interactivas: un comparador de dos motos y calculadoras de consumo y de costo mensual. Las dos cosas a la vez, sin que la interactividad arrastre a toda la página.",
        en: "This is a site that lives on being found in Google, so the content has to arrive already written in the HTML, not assembled in the browser. But it also needs genuinely interactive parts: a two-bike comparator and fuel and monthly-cost calculators. Both at once, without the interactivity dragging the whole page down with it.",
      },
      architecture: {
        es: "Astro con arquitectura de islas: cada página se pre-renderiza completa y solo los componentes que necesitan interacción se hidratan en el navegador, uno por uno. El resto llega como HTML y no descarga JavaScript. La API es Fastify con Drizzle sobre PostgreSQL, en un monorepo pnpm donde un paquete compartido tiene los tipos y los esquemas de Zod que usan las dos puntas. El panel de administración —donde se cargan las fichas, las fotos y los repuestos— es la parte con más interacción, y ahí sí entra React completo.",
        en: "Astro with an islands architecture: each page is fully pre-rendered and only the components that need interaction hydrate in the browser, one by one. The rest arrives as HTML and downloads no JavaScript at all. The API is Fastify with Drizzle over PostgreSQL, in a pnpm monorepo where a shared package holds the types and Zod schemas both ends use. The admin panel — where the bike profiles, photos and parts are loaded — is the most interactive part, and that's where full React comes in.",
      },
      stackRationale: {
        es: "Elegí Astro justamente por poder decidir el renderizado componente por componente en vez de para todo el sitio. Con Next.js habría tenido que llevar el framework entero a páginas que son texto y fotos. La regla que me puse: si una parte no necesita JavaScript, no lo lleva.",
        en: "I chose Astro precisely because it lets me decide rendering component by component instead of for the whole site. With Next.js I'd have had to ship the entire framework to pages that are text and photos. The rule I set myself: if a part doesn't need JavaScript, it doesn't get any.",
      },
      challenges: [
        {
          es: "Modelar la compatibilidad entre repuestos y modelos. Un mismo kit de transmisión sirve para varias motos y una moto usa decenas de repuestos, así que la relación va en las dos direcciones y hay que poder navegarla por sistema: motor, frenos, suspensión, transmisión.",
          en: "Modeling compatibility between parts and models. The same chain kit fits several bikes and one bike uses dozens of parts, so the relationship runs both ways and has to be navigable by system: engine, brakes, suspension, transmission.",
        },
        {
          es: "Decidir qué se hidrata y qué no. Es fácil marcar todo como interactivo por comodidad y perder la ventaja de haber elegido Astro; cada isla hay que justificarla.",
          en: "Deciding what hydrates and what doesn't. It's easy to mark everything interactive out of convenience and lose the very advantage of having chosen Astro; every island has to be justified.",
        },
      ],
      learnings: {
        es: "Me obligó a tener una respuesta para «¿esto necesita JavaScript?» en cada componente, y resulta que la respuesta es que no muchas más veces de las que uno cree. Es el proyecto donde más aprendí a elegir la estrategia de renderizado según el problema en vez de por costumbre.",
        en: "It forced me to have an answer to \"does this need JavaScript?\" for every component, and it turns out the answer is no far more often than you'd think. It's the project where I most learned to pick the rendering strategy from the problem instead of from habit.",
      },
    },
  },

  // ── 8. MOTOBITACORA ──────────────────────────────────────────────────────
  {
    id: "4",
    slug: "motobitacora",
    availability: "live",
    kind: "product",
    accent: "#a0522d",
    title: "EnduroLog",
    tagline: {
      es: "App para pilotos de enduro: todo el mantenimiento y los setups de la moto, sin internet",
      en: "An app for enduro riders: all your bike's maintenance and setups, no internet needed",
    },
    description: {
      es: "Producto propio para pilotos de enduro: suspensión, mantenimiento y checklists de carrera en el celular. Funciona sin señal, que es justo donde hace falta.",
      en: "My own product for enduro riders: suspension, maintenance and race checklists on the phone. It works with no signal, which is exactly where it's needed.",
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
        es: "Los pilotos de enduro anotan la configuración de la suspensión, el mantenimiento y los checklists en papel o en planillas que nunca están a mano cuando hacen falta: en el campo, sin internet. Necesitaba una app instalable en el celular que funcionara sin conexión y guardara el historial de cada moto.",
        en: "Enduro riders jot down suspension settings, maintenance and checklists on paper or spreadsheets that are never at hand when needed: out in the field, no internet. I needed an installable mobile app that worked offline and stored each bike's history.",
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
          caption: {
            es: "Mantenimiento y alertas por horas de uso",
            en: "Maintenance & hour-based alerts",
          },
        },
        {
          src: asset("captures/motobitacora/suspension.webp"),
          orientation: "mobile",
          caption: {
            es: "Setups de suspensión por terreno",
            en: "Suspension setups per terrain",
          },
        },
        {
          src: asset("captures/motobitacora/checklists.webp"),
          orientation: "mobile",
          caption: { es: "Checklists pre-carrera", en: "Pre-race checklists" },
        },
      ],
    },
  },

  // ── 9. MAKEM ─────────────────────────────────────────────────────────────
  {
    id: "15",
    slug: "makem",
    availability: "live",
    kind: "product",
    accent: "#57303f",
    title: "Makem",
    tagline: {
      es: "Tres sitios de demostración construidos para cargar al instante, con contenido de muestra",
      en: "Three demo sites built to load instantly, with sample content",
    },
    description: {
      es: "Emprendimiento propio de sitios para negocios locales. Estas tres piezas son demostraciones —el contenido es inventado— hechas en Astro para mostrar acabado y velocidad.",
      en: "My own venture building sites for local businesses. These three pieces are demos — the content is made up — built in Astro to show finish and speed.",
    },
    image: asset("captures/makem/card.webp"),
    technologies: ["Astro", "TypeScript", "CSS", "Cloudflare Pages", "SEO"],
    liveUrl: "https://www.makkem.com",
    hasDetail: true,
    detail: {
      year: 2026,
      status: "mvp",
      summary: {
        es: "Vender un sitio web hablando de tecnología no funciona: el que compra quiere ver cómo se ve y cuánto tarda en abrir. Así que en vez de explicarlo, armé tres sitios completos y los publiqué: un lodge de montaña, una constructora y un estudio de abogados. El contenido es de muestra, inventado a propósito para que cada uno tenga la densidad real que tendría el de un cliente. Lo que es de verdad es el código, el rendimiento y el diseño.",
        en: "Selling a website by talking about technology doesn't work: the buyer wants to see how it looks and how fast it opens. So instead of explaining it, I built three complete sites and published them: a mountain lodge, a construction firm and a law office. The content is sample material, invented on purpose so each one carries the density a real client's would. What's real is the code, the performance and the design.",
      },
      problem: {
        es: "Un sitio de presentación se juega en el primer segundo. Si tarda en abrir en el celular de alguien con mala señal, no importa lo lindo que sea. El desafío era que cada pieza se viera trabajada y a la vez pesara lo mínimo posible.",
        en: "A presentation site is won in the first second. If it's slow to open on the phone of someone with bad signal, it doesn't matter how pretty it is. The challenge was making each piece look crafted while weighing as little as possible.",
      },
      architecture: {
        es: "Astro con salida estática: el HTML se genera al compilar y el visitante recibe archivos ya listos, sin esperar a que un framework arranque en su teléfono. Cada sitio comparte un sistema de diseño con variables CSS —tipografía, escala, espaciado, color— que cada uno redefine con su propio acento, así los tres se sienten de la misma mano sin parecer el mismo sitio. Las tipografías van servidas desde el propio dominio, no desde un tercero, y las imágenes se procesan en el build.",
        en: "Astro with static output: the HTML is generated at build time and the visitor receives ready-made files, without waiting for a framework to boot on their phone. Each site shares a design system of CSS variables — typography, scale, spacing, color — which each one redefines with its own accent, so all three feel like the same hand without looking like the same site. Fonts are served from the domain itself, not a third party, and images are processed at build time.",
      },
      stackRationale: {
        es: "Astro porque en un sitio de presentación la interactividad se reduce a un menú y poco más: mandar el JavaScript de un framework entero sería pagar un costo sin recibir nada a cambio. Las tipografías también van servidas desde el propio dominio en vez de pedírselas a Google: una petición menos a un tercero antes de que se dibuje la primera línea de texto.",
        en: "Astro because on a presentation site the interactivity comes down to a menu and little else: shipping an entire framework's JavaScript would mean paying a cost for nothing in return. Fonts are served from the site's own domain instead of asking Google for them: one fewer third-party request before the first line of text gets painted.",
      },
      challenges: [
        {
          es: "Que tres sitios de rubros muy distintos —turismo, construcción y derecho— compartieran el mismo sistema de diseño sin que se notara. Se resolvió con variables de acento por sitio: la estructura y el ritmo son los mismos, el color y la fotografía cambian todo lo demás.",
          en: "Getting three sites from very different fields — tourism, construction and law — to share the same design system without it showing. Solved with per-site accent variables: structure and rhythm stay the same, color and photography change everything else.",
        },
        {
          es: "Escribir el contenido de muestra. Un texto de relleno tipo «Lorem ipsum» no sirve para demostrar nada: hace falta que cada sección tenga el largo y el tono que tendría de verdad, o el diseño no se prueba contra nada.",
          en: "Writing the sample content. Lorem-ipsum filler demonstrates nothing: each section needs the length and tone it would really have, or the design isn't tested against anything.",
        },
      ],
      results: [
        {
          es: "Los tres sitios en línea, con salida estática y las tipografías servidas desde el propio dominio.",
          en: "All three sites online, statically generated, with fonts served from their own domain.",
        },
      ],
      learnings: {
        es: "Aprendí más de diseño acá que en cualquier otro proyecto, porque no había ninguna funcionalidad detrás de la cual esconderse: si el sitio no convence a los tres segundos, no hay nada más que mostrar. También me quedó claro que un sistema de tokens bien armado es lo que permite hacer el tercer sitio en una fracción del tiempo que llevó el primero.",
        en: "I learned more about design here than in any other project, because there was no functionality to hide behind: if the site doesn't convince you in three seconds, there's nothing else to show. It also made clear that a well-built token system is what lets you make the third site in a fraction of the time the first one took.",
      },
      screenshots: [
        {
          src: asset("captures/makem/turismo.webp"),
          orientation: "desktop",
          caption: {
            es: "Lodge de montaña: turismo.makkem.com",
            en: "Mountain lodge: turismo.makkem.com",
          },
        },
        {
          src: asset("captures/makem/constructora.webp"),
          orientation: "desktop",
          caption: {
            es: "Constructora y estudio de arquitectura: constructora.makkem.com",
            en: "Construction and architecture firm: constructora.makkem.com",
          },
        },
        {
          src: asset("captures/makem/abogados.webp"),
          orientation: "desktop",
          caption: {
            es: "Estudio jurídico: abogados.makkem.com",
            en: "Law office: abogados.makkem.com",
          },
        },
      ],
    },
  },

  // ── 10. ON-WHEELS ────────────────────────────────────────────────────────
  {
    id: "2",
    slug: "on-wheels",
    availability: "live",
    kind: "client",
    accent: "#7a5c2e",
    title: "ON-WHEELS",
    tagline: {
      es: "La landing que reemplazó un PDF de 10 MB en una de las carreras más importantes del país",
      en: "The landing page that replaced a 10MB PDF at one of the country's biggest races",
    },
    description: {
      es: "Página para un servicio de asistencia mecánica en pista. Reemplazó un PDF de 10 MB que casi no cargaba: ahora abre al instante y el contacto va por WhatsApp.",
      en: "Landing page for an on-track mechanical assistance service. It replaced a 10MB PDF that barely loaded: now it opens instantly and contact goes through WhatsApp.",
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
    liveUrl: "https://pa7r1.github.io/ON_WHEELS/",
    hasDetail: true,
    detail: {
      year: 2026,
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
          caption: {
            es: "Servicios de asistencia incluidos",
            en: "Included assistance services",
          },
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
];
