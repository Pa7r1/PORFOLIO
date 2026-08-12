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
      es: "Armé Makem para vender sitios web a negocios locales: el sitio comercial, el sistema de diseño y tres piezas de demostración completas, todo en Astro con salida estática. Me obligó a trabajar cosas que un proyecto de código puro no te exige: escribir para alguien que no es técnico, defender decisiones de diseño y sostener sitios en línea después de publicarlos.",
      en: "I built Makem to sell websites to local businesses: the commercial site, the design system and three complete demo pieces, all in Astro with static output. It forced me to work on things a pure code project doesn't demand: writing for a non-technical reader, defending design decisions, and keeping sites online after publishing them.",
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
      es: "Le construí a un docente un aula virtual para publicarles a sus alumnos las clases, la información y el material en un solo lugar, en lugar de tener que repetirle todo a cada uno por separado. La plataforma maneja usuarios, cursos y el seguimiento del progreso, con módulos y lecciones que admiten videos e imágenes. Hoy le permite mostrarle el contenido a todo el grupo en simultáneo.",
      en: "I built a teacher a virtual classroom to publish lessons, information and materials for their students in one place, instead of having to repeat everything to each one separately. The platform handles users, courses and progress tracking, with modules and lessons that support video and images. It now lets them share content with the whole group at once.",
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
      es: "Reemplacé un PDF de 10 MB que casi no cargaba por una landing rápida y pensada para el celular, para el servicio de asistencia mecánica de la carrera TransVelasco 2026, una de las más importantes del país. La web presenta de forma clara el servicio, los cronogramas y los precios, con un formulario y enlaces directos a WhatsApp con mensaje pre-escrito para que contratar sea cuestión de un toque.",
      en: "I replaced a 10MB PDF that barely loaded with a fast, mobile-first landing page for the mechanical assistance service at the TransVelasco 2026 race, one of the country's biggest. The site clearly presents the service, schedules and pricing, with a form and direct WhatsApp links with a pre-written message so booking is one tap away.",
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
      es: "Saqué a una barbería con sucursales del manejo de turnos por WhatsApp y la caja en papel. Construí el sistema de gestión completo: la agenda de turnos, el control de caja, la venta de productos y los pagos a empleados, que antes el dueño calculaba a mano. Hoy administra empleados y varias sucursales desde un solo lugar, en tiempo real.",
      en: "I moved a multi-branch barbershop off WhatsApp-based scheduling and paper cash tracking. I built the full management system: appointment scheduling, cash control, in-store product sales, and staff payouts that the owner used to calculate by hand. It now manages employees and multiple branches from a single place, in real time.",
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
      es: "Dieciséis meses construyendo la tienda online de un negocio de hardware junto a otros siete desarrolladores, sobre un mismo repositorio. Mi parte fue la carga masiva del catálogo —el dueño pasó de escribir cada producto a mano a subir un archivo—, el motor que le asocia la imagen a cada producto, y llevar las consultas sueltas del servidor a procedimientos almacenados. También trabajé la integración de pagos con MercadoPago y la reportería exportable. Es donde aprendí a leer código ajeno antes de tocarlo y a resolver conflictos sin pisar el trabajo de otro.",
      en: "Sixteen months building a hardware business's online store alongside seven other developers on a single shared repository. My part was bulk catalog loading — the owner went from typing every product by hand to uploading a file — the engine that matches an image to each product, and moving loose server queries into stored procedures. I also worked on the MercadoPago payment integration and exportable reporting. It's where I learned to read other people's code before touching it and to resolve conflicts without stepping on someone else's work.",
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
      es: "Sistema de gestión para comercios con varias sucursales, que vendo como producto propio. Cada negocio opera con sus sucursales, usuarios y stock independientes: un único despliegue atiende a varios clientes sin duplicar infraestructura. Reemplacé el lector de código de barras por códigos QR escaneados con la cámara del teléfono, así el comercio arranca sin comprar hardware dedicado. El despliegue va automatizado, con las migraciones separadas por entorno y verificación de tipos antes de publicar.",
      en: "Management system for multi-branch retailers, which I sell as my own product. Each business operates with its own branches, users and stock: a single deployment serves several clients without duplicating infrastructure. I replaced the barcode scanner with QR codes read through the phone's camera, so a shop can start without buying dedicated hardware. Deployment is automated, with per-environment migrations and type checking before each release.",
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
      es: "Reemplacé el catálogo en Excel y los pedidos por mensajes sueltos de un negocio de calzado por una plataforma web completa de ventas y gestión. Automatiza el control de stock por talle y color, permite cargar productos en masa subiendo el mismo Excel que ya usaban, y arma pedidos listos para enviar por WhatsApp sin costo operativo y sin obligar al cliente a registrarse.",
      en: "I replaced a footwear business's Excel catalog and scattered-message orders with a complete web platform for sales and management. It automates stock control by size and color, allows bulk product uploads using the same Excel they already had, and builds orders ready to send via WhatsApp with no operational cost and without forcing customers to sign up.",
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
