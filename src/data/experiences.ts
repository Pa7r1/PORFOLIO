import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    period: {
      es: "Jul 2026\nPresente",
      en: "Jul 2026\nPresent",
    },
    title: {
      es: "Emprendimiento propio",
      en: "Own venture",
    },
    company: "Makem",
    description: {
      es: "Armé Makem para vender sitios web a negocios locales: el sitio comercial y tres piezas de demostración completas, cada una con su propio sistema de tokens escrito desde cero, todo en Astro con salida estática. Me obligó a trabajar cosas que un proyecto de código puro no te exige, como escribir para alguien que no es técnico y defender decisiones de diseño sin poder esconderme detrás de una funcionalidad.",
      en: "I built Makem to sell websites to local businesses: the commercial site plus three complete demo pieces, each with its own token system written from scratch, all in Astro with static output. It pushed me on things a pure code project doesn't ask for, like writing for a non-technical reader and defending design decisions with no functionality to hide behind.",
    },
    tags: ["Astro", "TypeScript", "CSS", "Diseño", "SEO"],
    type: "work",
  },
  {
    period: {
      es: "Jul 2026\nPresente",
      en: "Jul 2026\nPresent",
    },
    title: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    company: "Circuitos Argentinos · Proyecto propio",
    description: {
      es: "Aplicación web instalable para encontrar circuitos de enduro y motocross en Argentina. Procesa los archivos GPX que deja el reloj o el celular y los convierte al formato que entiende el mapa, y resuelve las búsquedas por cercanía dentro de la base con PostGIS, en una sola consulta. Lo armé como monorepo con los tipos compartidos entre la API y la web, y con integración continua que corre lint, tipos y pruebas contra una base PostGIS real en cada cambio.",
      en: "Installable web app for finding enduro and motocross circuits across Argentina. It processes the GPX files a watch or phone produces and converts them to the format the map understands, and resolves proximity searches inside the database with PostGIS, in a single query. I built it as a monorepo with types shared between API and web, and continuous integration that runs lint, types and tests against a real PostGIS database on every change.",
    },
    tags: ["TypeScript", "Fastify", "Drizzle ORM", "PostGIS", "React", "Leaflet", "Docker", "GitHub Actions"],
    type: "work",
    // Es la pieza con más profundidad técnica: PostGIS, monorepo con tipos
    // compartidos e integración continua contra una base real.
    featured: true,
  },
  {
    period: {
      es: "May 2026\nPresente",
      en: "May 2026\nPresent",
    },
    title: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    company: "Aula virtual - Freelancer",
    description: {
      es: "Le construí a un docente un aula virtual para publicarles a sus alumnos las clases, la información y el material en un solo lugar, sin tener que repetirle todo a cada uno por separado. Maneja usuarios, cursos y seguimiento del progreso, con módulos y lecciones que admiten video e imágenes, y el video lo sirve el propio backend por rangos. Está terminado y corriendo en Docker; queda ponerlo en línea.",
      en: "I built a teacher a virtual classroom to publish lessons, information and materials for their students in one place, without repeating everything to each of them separately. It handles users, courses and progress tracking, with modules and lessons that support video and images, and the backend serves the video itself in ranges. It's finished and running in Docker; putting it online is what's left.",
    },
    tags: [
      "TypeScript",
      "React",
      "FastAPI",
      "SQLAlchemy",
      "Docker",
      "Nginx",
      "VPS",
      "Linux",
    ],
    type: "work",
  },
  {
    period: {
      es: "Abr 2026\nMay 2026",
      en: "Apr 2026\nMay 2026",
    },
    title: {
      es: "Frontend Developer",
      en: "Frontend Developer",
    },
    company: "ON-WHEELS · Freelance",
    description: {
      es: "Landing rápida y pensada para el celular para el servicio de asistencia mecánica de la TransVelasco 2026, una de las carreras de enduro más grandes del país. Presenta el servicio, los cronogramas y los precios, con enlaces directos a WhatsApp y el mensaje ya escrito según el servicio. Sin sistema de build: ocho commits en cuatro días, contra la fecha de la carrera.",
      en: "A fast, phone-first landing page for the mechanical assistance service at the TransVelasco 2026, one of the country's biggest enduro races. It lays out the service, the schedules and the pricing, with direct WhatsApp links carrying a message pre-written for each service. No build system: eight commits in four days, against the race date.",
    },
    tags: ["JavaScript", "HTML", "CSS"],
    type: "work",
  },
  {
    period: {
      es: "Dic 2025\nPresente",
      en: "Dec 2025\nPresent",
    },
    title: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    company: "VJ-Barber · Freelance",
    description: {
      es: "Saqué a una barbería con sucursales del manejo de turnos por WhatsApp y la caja en papel. Construí el sistema completo: agenda de turnos, control de caja, venta de productos y liquidación de empleados, esta última resuelta con procedimientos almacenados dentro de MySQL. Corre en un VPS propio con Ubuntu, Docker Compose y Nginx, que administro yo por SSH.",
      en: "I moved a multi-branch barbershop off WhatsApp scheduling and paper cash tracking. I built the whole system: appointment scheduling, cash control, in-store product sales and staff payouts, the last of these resolved with stored procedures inside MySQL. It runs on my own Ubuntu VPS with Docker Compose and Nginx, which I administer over SSH.",
    },
    tags: [
      "TypeScript",
      "React",
      "FastAPI",
      "MySQL",
      "Docker",
      "Nginx",
      "VPS",
      "Linux",
    ],
    type: "work",
    // Cliente real con el sistema en producción y varias sucursales
    // operando encima: el caso más fácil de verificar.
    featured: true,
  },
  {
    period: {
      es: "Jul 2024\nNov 2025",
      en: "Jul 2024\nNov 2025",
    },
    title: {
      es: "Full Stack Developer · trabajo en equipo",
      en: "Full Stack Developer · team project",
    },
    company: "Modex · La Rioja",
    description: {
      es: "Dieciséis meses construyendo la tienda online de un negocio de hardware junto a otros siete desarrolladores, sobre un mismo repositorio: 53 de los 465 commits son míos. Trabajé la capa de datos: la normalización del esquema, la carga masiva del catálogo —que llevó al dueño de escribir cada producto a mano a subir un archivo— y el pase de las consultas sueltas del servidor a procedimientos almacenados. Es donde aprendí a leer código ajeno antes de tocarlo y a resolver conflictos sin pisar el trabajo de otro.",
      en: "Sixteen months building a hardware business's online store alongside seven other developers on one shared repository: 53 of its 465 commits are mine. I worked the data layer: normalizing the schema, bulk catalog loading — which took the owner from typing every product by hand to uploading a file — and moving the server's loose queries into stored procedures. It's where I learned to read other people's code before touching it and to resolve conflicts without stepping on someone else's work.",
    },
    tags: ["Node.js", "Express", "MySQL", "React", "Redux Toolkit", "MercadoPago", "Git"],
    type: "work",
    // La única prueba de trabajo en equipo sobre un repositorio compartido, y
    // la más larga: es lo primero que busca quien contrata.
    featured: true,
  },
  {
    period: {
      es: "Mar 2024\nPresente",
      en: "Mar 2024\nPresent",
    },
    title: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    company: "QRetail · Producto propio",
    description: {
      es: "Sistema de gestión para comercios con varias sucursales, construido como producto propio. Cada negocio opera con sus sucursales, usuarios y stock independientes: un único despliegue atiende a varios comercios sin duplicar infraestructura, y qué funciones tiene habilitadas cada uno se lee de una tabla de configuración en la base y no del código. El escaneo lo hace la cámara del teléfono, así el comercio arranca sin comprar hardware dedicado. El despliegue va automatizado, con las migraciones separadas por entorno y verificación de tipos antes de publicar.",
      en: "Management system for multi-branch retailers, built as my own product. Each business runs with its own branches, users and stock: a single deployment serves several shops without duplicating infrastructure, and which features each one has enabled is read from a configuration table in the database rather than from the code. Scanning is done by the phone's camera, so a shop can start without buying dedicated hardware. Deployment is automated, with per-environment migrations and type checking before each release.",
    },
    tags: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Vercel"],
    type: "work",
  },
  {
    period: {
      es: "Dic 2023\nAgo 2025",
      en: "Dec 2023\nAug 2025",
    },
    title: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    company: "Gestión Zapatillas · Freelance",
    description: {
      es: "Reemplacé el catálogo en Excel y los pedidos por mensajes sueltos de un negocio de calzado por una plataforma web de ventas y gestión. Automatiza el control de stock por talle y color, permite cargar productos en masa subiendo el mismo Excel que ya usaban, y arma pedidos listos para enviar por WhatsApp sin obligar al comprador a registrarse.",
      en: "I replaced a footwear business's Excel catalog and scattered-message orders with a web platform for sales and management. It automates stock control by size and color, allows bulk product uploads using the same spreadsheet they already had, and builds orders ready to send over WhatsApp without forcing the buyer to sign up.",
    },
    tags: ["Node.js", "TypeScript", "React", "TypeORM", "Zustand"],
    type: "work",
  },
  {
    period: {
      es: "2022\n2025",
      en: "2022\n2025",
    },
    title: {
      es: "Técnico Universitario en Programación",
      en: "University Technician in Programming",
    },
    company: "UTN · Facultad Regional La Rioja",
    description: {
      es: "Tecnologías de la Información. Desarrollo de software, bases de datos, redes y arquitectura de sistemas.",
      en: "Information Technologies. Software development, databases, networking, and system architecture.",
    },
    tags: [],
    type: "education",
  },
];
