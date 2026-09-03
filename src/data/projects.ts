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
      es: "16 meses sobre un repositorio compartido con otros desarrolladores",
      en: "16 months on a shared repository with other developers",
    },
    description: {
      es: "Tienda online de hardware construida varios desarrolladores. Mi parte fue la capa de datos: normalizar el esquema, la carga masiva del catálogo y las consultas del servidor.",
      en: "Online hardware store built by eight developers. My part was the data layer: normalizing the schema, bulk catalog loading and the server's queries.",
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
        es: "Modex vende accesorios y componentes de hardware. Su tienda online la construimos varios desarrolladores sobre un mismo repositorio, entre julio de 2024 y noviembre de 2025. Es lo más parecido a trabajar en una empresa que hice hasta ahora: código que no escribí yo, decisiones que se discuten y un repositorio donde tu commit le puede arruinar la tarde a otro. De los 465 commits del repositorio, 53 son míos.",
        en: "Modex sells computer hardware and accessories. Eight of us built their online store on one shared repository, between July 2024 and November 2025. It's the closest thing to working at a company I've done so far: code I didn't write, decisions that get argued over, and a repository where your commit can ruin someone else's afternoon. Of the repository's 465 commits, 53 are mine.",
      },
      problem: {
        es: "El dueño cargaba a mano cada producto con todos sus datos: nombre, precio, características. Con un catálogo de miles de artículos que cambian de precio seguido, eso no se sostenía. Del otro lado, las consultas al servidor habían crecido sin orden y la misma pregunta a la base estaba escrita de cinco formas distintas según quién la hubiera resuelto ese día.",
        en: "The owner typed in every product by hand with all its data: name, price, specs. With a catalog of thousands of items whose prices change constantly, that didn't hold up. On the other side, the server's queries had grown without any order, and the same question to the database was written five different ways depending on who had solved it that day.",
      },
      architecture: {
        es: "Backend en Node.js con Express sobre MySQL, y frontend en React con Material UI y Redux Toolkit para el estado del carrito y de la sesión. El acceso se controla con Passport y JWT, y las entradas se validan con express-validator antes de llegar a la base. La tienda cobra con MercadoPago y maneja los tres estados de la transacción —aprobado, pendiente y rechazado— con su pantalla cada uno. Mi trabajo estuvo del lado de los datos: la normalización del esquema, el camino de entrada del catálogo (toma un Excel o un CSV, mapea sus columnas contra el modelo, detecta duplicados y ajusta precios por porcentaje antes de escribir nada) y el pase de las consultas sueltas del servidor a procedimientos almacenados.",
        en: "Node.js and Express backend over MySQL, with a React frontend using Material UI and Redux Toolkit for cart and session state. Access is controlled with Passport and JWT, and inputs are validated with express-validator before they reach the database. The store charges through MercadoPago and handles the three transaction states — approved, pending and rejected — each with its own screen. My work sat on the data side: normalizing the schema, the catalog's intake path (it takes an Excel or CSV file, maps its columns against the model, detects duplicates and adjusts prices by percentage before writing anything), and moving the server's loose queries into stored procedures.",
      },
      stackRationale: {
        es: "El stack ya estaba elegido cuando entré, y adaptarme a decisiones que no tomé fue parte del trabajo. Donde sí decidí fue en la capa de datos. Primero normalicé el esquema, y recién después llevé las consultas desperdigadas por el servidor a procedimientos almacenados dentro de MySQL: quedó una sola definición de cada consulta, y el plan de ejecución pasó a resolverlo el motor y no ocho criterios distintos.",
        en: "The stack was already chosen when I arrived, and adapting to decisions I hadn't made was part of the job. Where I did decide was the data layer. First I normalized the schema, and only then moved the queries scattered across the server into stored procedures inside MySQL: one definition per query, with the execution plan left to the engine instead of to eight different opinions.",
      },
      challenges: [
        {
          es: "Tocar un módulo que otro estaba modificando en paralelo. El conflicto de Git se resuelve y se olvida; lo difícil es enterarte a tiempo de que alguien está en lo mismo y ponerse de acuerdo antes. Terminé avisando por el chat del equipo antes de abrir cualquier archivo que no fuera claramente mío.",
          en: "Touching a module someone else was modifying in parallel. The Git conflict gets resolved and forgotten; the hard part is finding out in time that someone is on the same thing and agreeing up front. I ended up posting in the team chat before opening any file that wasn't clearly mine.",
        },
        {
          es: "Mover a procedimientos almacenados consultas que ya estaban en producción, sin cortar el servicio. Cada procedimiento tenía que devolver exactamente la misma forma de datos que la consulta que reemplazaba, porque del otro lado había pantallas que no íbamos a tocar en el mismo cambio.",
          en: "Moving queries that were already in production into stored procedures without interrupting the service. Each procedure had to return exactly the same data shape as the query it replaced, because on the other side there were screens we weren't going to touch in the same change.",
        },
        {
          es: "Que la carga masiva no rompiera nada. Un archivo de miles de filas llega con duplicados, columnas corridas y precios con coma, con punto o con el símbolo de peso adentro. La validación tenía que frenar la fila mala antes de la escritura y devolver en qué línea del Excel estaba el problema, porque el que sube el archivo no es programador.",
          en: "Making sure bulk loading broke nothing. A file with thousands of rows arrives with duplicates, shifted columns and prices written with commas, with dots, or with a currency symbol inside. Validation had to stop the bad row before the write and report which line of the spreadsheet held the problem, because the person uploading it isn't a programmer.",
        },
      ],
      results: [
        {
          es: "La carga del catálogo pasó de escribir cada producto a mano a subir un archivo y revisar el resultado.",
          en: "Catalog loading went from typing every product by hand to uploading a file and reviewing the result.",
        },
        {
          es: "Las consultas del servidor quedaron como procedimientos almacenados en MySQL, con una sola definición por consulta.",
          en: "The server's queries ended up as stored procedures in MySQL, with a single definition per query.",
        },
        {
          es: "53 commits míos sobre los 465 del repositorio, entre ocho desarrolladores, de julio de 2024 a noviembre de 2025.",
          en: "53 commits of mine out of the repository's 465, across eight developers, from July 2024 to November 2025.",
        },
      ],
      learnings: {
        es: "Cuando lo que escribís lo va a leer y modificar otro, dejás de optimizar para terminar rápido y empezás a optimizar para que se entienda. Revisar código ajeno resultó ser una habilidad aparte, y todavía me lleva más tiempo del que calculo. Lo más útil que me quedé es chico y concreto: antes de tocar un módulo, miro el historial de ese archivo para saber quién lo escribió y preguntarle a esa persona.",
        en: "When what you write is going to be read and modified by someone else, you stop optimizing for finishing fast and start optimizing for being understood. Reviewing other people's code turned out to be a separate skill, and it still takes me longer than I budget for. The most useful thing I kept is small and concrete: before touching a module, I check that file's history to find out who wrote it and go ask them.",
      },
      videoUrl: "https://youtu.be/B5yph-6UgQM",
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
      es: "Turnos, caja, comisiones y varias sucursales en un mismo sistema, con las liquidaciones resueltas dentro de MySQL. En producción en vj-barber.com, sobre un VPS que administro yo.",
      en: "Bookings, cash register, commissions and several branches in one system, with payouts settled inside MySQL. Live at vj-barber.com, on a VPS I administer myself.",
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
    githubUrl: "https://github.com/Pa7r1/barber",
    liveUrl: "https://vj-barber.com",
    repoPrivate: true,
    hasDetail: true,
    detail: {
      year: 2026,
      status: "production",
      summary: {
        es: "El dueño de VJ-Barber, manejaba todos sus turnos por WhatsApp y llevaba la caja y los pagos en papel. Con más clientes y una sucursal más, atender, seguir la agenda y calcular cuánto le tocaba a cada empleado dejó de entrarle en la cabeza. Le construí un sistema donde el turno queda cargado apenas se pide, la pantalla de caja se refresca sola cada quince segundos y las liquidaciones las hace la base de datos.",
        en: "The owner of VJ-Barber, ran every appointment through WhatsApp and tracked cash and payouts on paper. With more clients and one more branch, keeping up with the desk, the schedule and each employee's share stopped fitting in his head. I built him a system where a slot is logged the moment it's requested, the cash screen refreshes itself every fifteen seconds, and the database does the payout math.",
      },
      problem: {
        es: "VJ-Barber llevaba turnos y caja en papel, con empleados que no sabían su agenda hasta llegar al local. Necesitaba algo que se abriera desde el celular, que calculara el precio solo según el servicio y el empleado, y que mostrara cómo venía la caja del día sin que nadie tuviera que apretar recargar.",
        en: "VJ-Barber tracked bookings and cash on paper, with employees who didn't know their schedule until they walked in. They needed something that opened on a phone, worked out the price on its own from the service and the barber, and showed how the day's till was going without anyone hitting refresh.",
      },
      architecture: {
        es: "Backend en FastAPI sobre MySQL 8, con la lógica de negocio crítica dentro de la propia base: tres procedimientos almacenados y sus vistas resuelven las propinas, el cierre de caja y los retiros, así el cálculo es el mismo lo llame quien lo llame. El frontend es React con Zustand para el estado de la sesión activa. Todo corre en un VPS propio con Ubuntu al que entro por SSH, con Docker Compose levantando cuatro servicios —MySQL, backend, frontend y Nginx— y Nginx publicando vj-barber.com en los puertos 80 y 443 con los certificados montados desde el disco del servidor. La renovación de esos certificados la hago yo a mano cada noventa días; automatizarla es lo que tengo pendiente ahí.",
        en: "FastAPI backend over MySQL 8, with the critical business logic inside the database itself: three stored procedures and their views resolve tips, end-of-day cash close and withdrawals, so the math is identical no matter who calls it. The frontend is React with Zustand for active session state. It all runs on my own Ubuntu VPS, which I reach over SSH, with Docker Compose bringing up four services — MySQL, backend, frontend and Nginx — and Nginx publishing vj-barber.com on ports 80 and 443 with the certificates mounted from the server's disk. I renew those certificates by hand every ninety days; automating that is the open item on this one.",
      },
      stackRationale: {
        es: "Elegí FastAPI por velocidad de desarrollo y porque publica la documentación de la API sola, que me sirvió para mostrarle al cliente cómo se conecta cada cosa. MySQL vino dado por lo que el cliente ya tenía, y le saqué provecho metiendo las reglas del negocio en la base: cuando cambia un porcentaje de comisión o el criterio de un retiro, se toca el procedimiento y no hace falta volver a publicar el backend. El costo lo pago en otro lado, y lo tengo claro. Esa lógica no la cubre ningún test del repositorio y se versiona bastante peor que el código de la aplicación.",
        en: "I picked FastAPI for development speed and because it publishes the API documentation on its own, which I used to walk the client through how the pieces connect. MySQL came with what the client already had, and I got value out of it by putting the business rules in the database: when a commission percentage or a withdrawal rule changes, you edit the procedure and there's no need to redeploy the backend. I pay for that somewhere else, and I know where. None of that logic is covered by a test in the repository, and it versions considerably worse than the application code.",
      },
      challenges: [
        {
          es: "Calcular el precio de un turno según el empleado, el servicio, el horario y los descuentos activos, con una sola definición de esa cuenta. Lo que ve el cliente al reservar y lo que confirma el sistema salen del mismo procedimiento almacenado, así que no pueden dar distinto.",
          en: "Working out a booking's price from the barber, the service, the time slot and the active discounts, with a single definition of that calculation. What the client sees when booking and what the system confirms come out of the same stored procedure, so they can't disagree.",
        },
        {
          es: "Montar el servidor desde cero sin haber administrado uno antes: Ubuntu, Docker Compose, Nginx delante como puerta de entrada y los cuatro servicios volviendo a levantar solos después de un reinicio. El certificado lo emití y hoy lo renuevo a mano cada noventa días, con la fecha anotada en el calendario, hasta que lo automatice.",
          en: "Setting the server up from scratch having never administered one: Ubuntu, Docker Compose, Nginx in front as the entry point, and the four services coming back up on their own after a reboot. I issued the certificate and today I renew it by hand every ninety days, with the date in my calendar, until I automate it.",
        },
      ],
      results: [
        {
          es: "Reemplazó la agenda por WhatsApp y papel: los turnos quedan cargados apenas se solicitan.",
          en: "Replaced WhatsApp-and-paper scheduling: slots are logged the moment they're requested.",
        },
        {
          es: "Las propinas, el cierre de caja y los retiros los liquidan tres procedimientos almacenados dentro de MySQL, con sus vistas. El dueño dejó de hacer esa cuenta a mano.",
          en: "Tips, end-of-day cash close and withdrawals are settled by three stored procedures inside MySQL, with their views. The owner stopped doing that math by hand.",
        },
        {
          es: "La pantalla de caja se actualiza sola cada quince segundos, y varias sucursales se administran desde el celular.",
          en: "The cash screen refreshes itself every fifteen seconds, and several branches are managed from a phone.",
        },
        {
          es: "En producción en vj-barber.com, sobre un VPS propio con Ubuntu, Docker Compose de cuatro servicios y Nginx sirviendo por HTTPS.",
          en: "In production at vj-barber.com, on my own Ubuntu VPS with a four-service Docker Compose stack and Nginx serving over HTTPS.",
        },
      ],
      learnings: {
        es: "Meter las reglas del negocio en la base me dejó cambiar una comisión sin volver a publicar nada, y en un cliente donde los precios se mueven seguido eso se nota todos los meses. Lo que no vi venir fue el resto del trabajo, que fue el servidor. Aprendí Docker Compose, Nginx y SSH acá, con un sitio que ya tenía gente entrando, y me quedó una tarea abierta de ese aprendizaje: automatizar la renovación del certificado, que hoy hago a mano con la fecha anotada.",
        en: "Putting the business rules in the database let me change a commission without redeploying anything, and with a client whose prices move often, that shows up every month. What I didn't see coming was the rest of the job, which was the server. I learned Docker Compose, Nginx and SSH here, on a site that already had people using it, and one open task came out of that: automating the certificate renewal, which today I do by hand with the date written down.",
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
    availability: "working",
    kind: "client",
    accent: "#2c5a70",
    title: "Aula Virtual",
    tagline: {
      es: "Un aula online autohospedada, armada para convivir con otro sistema en el mismo servidor",
      en: "A self-hosted online classroom, built to share a server with another system",
    },
    description: {
      es: "Plataforma de cursos para un instructor que repetía la misma clase por privado a cada alumno. El video lo sirve el propio backend, por rangos, sin depender de YouTube.",
      en: "A course platform I built for an instructor who was repeating the same lesson privately to each student. Video is served by the backend itself, in ranges, with no YouTube involved.",
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
    repoPrivate: true,
    hasDetail: true,
    detail: {
      year: 2026,
      status: "mvp",
      summary: {
        es: "El instructor mandaba el material por mensaje privado, alumno por alumno, y repetía la misma explicación cada vez. Le armé un aula donde publica una vez y le queda disponible a todo el grupo, con el contenido ordenado en módulos y lecciones y el progreso de cada alumno registrado. Está terminado y corriendo en Docker; ponerlo en línea con su dominio es el paso que falta.",
        en: "The instructor was sending material by private message, student by student, repeating the same explanation every time. I built him a classroom where he publishes once and it stays available to the whole group, with content organized into modules and lessons and each student's progress tracked. It's finished and running in Docker; putting it online under its domain is the step still pending.",
      },
      problem: {
        es: "No servía cualquier plataforma de cursos: el contenido es privado y el alta de cuentas la decide el instructor, no hay registro abierto. Además tenía que aguantar video subido directamente al servidor, sin depender de una plataforma externa que pusiera el material detrás de publicidad o lo diera de baja.",
        en: "An off-the-shelf course platform wouldn't do: the content is private and account creation is the instructor's call — there's no open sign-up. It also had to handle video uploaded directly to the server, without depending on an external platform that might put the material behind ads or take it down.",
      },
      architecture: {
        es: "Backend en FastAPI con SQLAlchemy sobre PostgreSQL, y frontend en React pensado primero para el celular, que es donde los alumnos miran las clases. El stack completo va en Docker Compose con cuatro servicios: la base, el backend, Nginx y Certbot. El control de acceso vive en un solo helper y cada router lo declara como dependencia del router entero, en lugar de chequear el rol adentro de cada función, así ningún camino queda sin revisar por olvido. El video lo sirve el backend por rangos —responde 206 con el tramo pedido y 416 cuando el header Range viene mal formado—, que es lo que le permite al reproductor saltar al minuto ocho sin bajarse el archivo entero.",
        en: "FastAPI backend with SQLAlchemy over PostgreSQL, and a React frontend built phone-first, since that's where students watch the lessons. The full stack runs on Docker Compose with four services: database, backend, Nginx and Certbot. Access control lives in a single helper, and each router declares it as a dependency of the whole router instead of checking the role inside every function, so no path gets left unguarded by oversight. The backend serves video in ranges: it answers 206 with the requested slice and 416 when the Range header is malformed, which is what lets the player jump to minute eight without downloading the whole file.",
      },
      stackRationale: {
        es: "Elegí PostgreSQL sobre MySQL, que era lo que venía usando, para no atar esta base a la del otro sistema que ya corría en ese servidor: si mañana hay que mover uno de los dos de máquina, se mueve solo. Autohospedar el video lo pidió el cliente y me pareció bien fundado. El material es suyo, y no quería que dependiera de la cuenta de un tercero ni que le apareciera publicidad encima.",
        en: "I went with PostgreSQL over MySQL, which is what I'd been using, so this database wouldn't be tied to the one belonging to the other system already on that server: if either has to move machines later, it moves alone. Self-hosting the video was the client's call and I thought it was well founded. The material is his, and he didn't want it depending on someone else's account or having ads land on top of it.",
      },
      challenges: [
        {
          es: "Meter un sistema nuevo en un servidor que ya tenía otro corriendo, sin tocar el que funcionaba. El sistema viejo era el único que escuchaba los puertos 80 y 443, así que el aula quedó escuchando solo en loopback y el Nginx del sistema viejo le pasa el tráfico. Ese modo quedó versionado en el repositorio y documentado en el .env.example, para que se pueda volver a levantar sin que yo esté delante explicando.",
          en: "Fitting a new system onto a server that already had another one running, without touching the one that worked. The old system was the only thing listening on ports 80 and 443, so the classroom listens on loopback only and the old Nginx forwards traffic to it. That mode is versioned in the repository and documented in the .env.example, so it can be brought back up without me standing there explaining it.",
        },
        {
          es: "Montando el servidor descubrí que el certificado del otro sistema, el de vj-barber.com, llevaba semanas sin renovarse: el directorio que Certbot usa para validar estaba declarado en el compose, pero el contenedor nunca se había recreado para tomarlo. Lo arreglé ahí mismo, antes de que venciera y se cayera un sitio que sí tenía gente entrando todos los días.",
          en: "While setting up the server I found the other system's certificate, the one for vj-barber.com, hadn't renewed in weeks: the directory Certbot uses to validate was declared in the compose file, but the container had never been recreated to pick it up. I fixed it right there, before it expired and took down a site that did have people using it daily.",
        },
      ],
      results: [
        {
          es: "El instructor publica una vez y el contenido le queda disponible a todo el grupo, con el progreso de cada alumno registrado.",
          en: "The instructor publishes once and the content stays available to the whole group, with each student's progress tracked.",
        },
        {
          es: "El video se sirve por rangos desde el propio backend: 206 con el tramo pedido, 416 cuando el header Range viene inválido.",
          en: "Video is served in ranges by the backend itself: 206 with the requested slice, 416 when the Range header is invalid.",
        },
        {
          es: "Cuatro servicios en Docker Compose —PostgreSQL, backend, Nginx y Certbot— y un modo loopback versionado en el repositorio para convivir con otro sistema en la misma máquina.",
          en: "Four services in Docker Compose — PostgreSQL, backend, Nginx and Certbot — plus a loopback mode versioned in the repository so it can share a machine with another system.",
        },
      ],
      learnings: {
        es: "Desplegar sobre un servidor que ya tiene algo andando enseña más que arrancar de cero, porque la primera media hora se te va en leer configuración que escribió otro. El certificado sin renovar lo encontré por eso, no porque lo estuviera buscando. Me quedó una costumbre chica y bastante útil: antes de agregar un servicio, levanto el compose que ya está y miro qué puertos y qué volúmenes hay ocupados.",
        en: "Deploying onto a server that already has something running teaches you more than starting from scratch, because the first half hour goes into reading config someone else wrote. That is how I found the unrenewed certificate, not by looking for it. It left me a small and fairly useful habit: before adding a service, I bring up the compose file that is already there and check which ports and volumes are taken.",
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
      es: "Un sistema de gestión de comercio donde el escaneo lo hace la cámara del teléfono",
      en: "A retail management system where the scanning is done by the phone's own camera",
    },
    description: {
      es: "Producto propio: ventas, stock, caja y roles para un comercio con varias sucursales. El escaneo lo hace la cámara del teléfono, así el negocio arranca sin comprar hardware.",
      en: "My own product: sales, stock, cash and roles for a multi-branch retailer. Scanning is done by the phone's camera, so a shop can start without buying hardware.",
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
        es: "QRetail lo armé por mi cuenta para que un comercio chico pase del cuaderno a tener las ventas, el stock y la caja en un solo lugar, manejado desde el teléfono. Escanea productos con la cámara, genera un QR para los que no traen código, y separa lo que puede hacer cada usuario según su rol y según qué funciones tenga habilitadas ese comercio. Está desplegado y funcionando; todavía no lo puse a vender.",
        en: "I built QRetail on my own so a small shop can move from a notebook to having sales, stock and cash in one place, run from a phone. It scans products with the camera, generates a QR code for the ones that don't have one, and separates what each user can do by role and by which features that particular shop has enabled. It's deployed and working; I haven't started selling it yet.",
      },
      problem: {
        es: "Un comercio necesita controlar productos, vendedores y caja desde una sola plataforma, y no todos necesitan lo mismo: al que no fía, el módulo de fiados le estorba. Habilitar y bloquear funciones por comercio es algo fácil de resolver mal, con condiciones desparramadas por toda la aplicación que después nadie sabe si están todas.",
        en: "A shop needs to control products, staff and cash from a single platform, and not every shop needs the same things: if you don't sell on credit, the store-credit module just gets in the way. Enabling and blocking features per shop is easy to get wrong, with conditions scattered across the whole application that nobody can later confirm are all there.",
      },
      architecture: {
        es: "Next.js con App Router sobre PostgreSQL, con Prisma para el acceso a datos y NextAuth para el login y las sesiones. Las pantallas de gestión son en su mayoría interactivas y están marcadas como componentes de cliente; el servidor se queda con la autenticación, las consultas y las acciones que escriben. La pieza que más me interesa de este proyecto es dónde vive la configuración de planes: en la base, en una tabla planConfig con banderas por comercio (permiteFiado, permiteCaja). Un solo módulo lee esa tabla y lo importan ocho archivos del proyecto, así que cambiar qué incluye un plan es un UPDATE y no un despliegue.",
        en: "Next.js with the App Router over PostgreSQL, Prisma for data access and NextAuth for login and sessions. The management screens are mostly interactive and marked as client components; the server keeps authentication, the queries and the write actions. The piece I find most interesting in this project is where the plan configuration lives: in the database, in a planConfig table with per-shop flags (permiteFiado, permiteCaja). A single module reads that table and eight files in the project import it, so changing what a plan includes is an UPDATE and not a deployment.",
      },
      stackRationale: {
        es: "Elegí Next.js porque me daba rutas, API y renderizado en un mismo proyecto, y no quería sostener dos despliegues para un producto que mantengo solo. Prisma me deja mover el modelo con migraciones ordenadas y separadas por entorno, verificadas antes de publicar. NextAuth por lo de siempre: la autenticación es el peor lugar del sistema para ponerse creativo. Con el tiempo la aplicación quedó bastante más del lado del cliente de lo que había planeado —hoy hay más archivos marcados como cliente que páginas—, y si la rehiciera empezaría por dibujar esa frontera antes de escribir la primera pantalla.",
        en: "I chose Next.js because it gave me routing, API and rendering in one project, and I didn't want to maintain two deployments for a product I keep alone. Prisma lets me move the model with ordered, per-environment migrations, verified before release. NextAuth for the usual reason: authentication is the worst place in a system to get creative. Over time the app ended up considerably more client-side than I'd planned — today there are more files marked as client components than there are pages — and if I rebuilt it I'd start by drawing that boundary before writing the first screen.",
      },
      challenges: [
        {
          es: "Que las funciones por plan no terminaran convertidas en condiciones repartidas por toda la aplicación. Toda operación consulta primero un módulo central que lee la configuración de ese comercio desde la base; ese módulo está importado en ocho archivos y es el único lugar donde se decide si algo está permitido.",
          en: "Keeping per-plan features from turning into conditions scattered across the whole application. Every operation first asks a central module that reads that shop's configuration from the database; the module is imported in eight files and is the only place where anything gets ruled allowed or not.",
        },
        {
          es: "Escanear con la cámara del teléfono sin pedirle al comercio que compre un lector. Se abre la cámara trasera y, cuando la lectura no sale —vidrio rayado, poca luz, etiqueta arrugada—, la carga manual del código queda siempre a mano, porque una venta no puede quedar trabada esperando que el teléfono enfoque.",
          en: "Scanning with the phone's camera without asking the shop to buy a reader. It opens the rear camera and, when the read fails — scratched glass, poor light, a crumpled label — manual code entry stays within reach, because a sale can't stall waiting for a phone to focus.",
        },
      ],
      results: [
        {
          es: "Del cuaderno a ventas, stock y caja gestionados desde el teléfono.",
          en: "From a paper notebook to sales, stock and cash managed from a phone.",
        },
        {
          es: "Escaneo con la cámara del propio teléfono y generación de QR para los productos que no traen código.",
          en: "Scanning with the phone's own camera, plus QR generation for products that arrive with no code.",
        },
        {
          es: "La configuración de planes vive en la tabla planConfig, leída por un único módulo: cambiar qué incluye un plan no requiere desplegar.",
          en: "The plan configuration lives in the planConfig table, read by a single module: changing what a plan includes requires no deployment.",
        },
      ],
      learnings: {
        es: "Concentrar los permisos en un solo módulo hizo que un cambio de reglas sea un cambio de una línea. Lo que me llevo con más fuerza viene de la otra punta: arranqué con la idea de renderizar casi todo en el servidor y terminé con la mayoría de las pantallas del lado del cliente, sin haberlo decidido en ningún momento, empujado formulario por formulario. Ahora, antes de la primera pantalla, escribo qué parte va a necesitar estado en el navegador y qué parte no.",
        en: "Concentrating permissions in a single module made a rules change a one-line change. What stayed with me most comes from the other end: I started out meaning to render almost everything on the server and ended up with most screens on the client, without ever deciding it, pushed there one form at a time. Now, before the first screen, I write down which parts will need state in the browser and which won't.",
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
        es: "Los circuitos off-road de Argentina están repartidos entre grupos de WhatsApp y publicaciones sueltas de Facebook. Armé un mapa único donde el organizador carga el recorrido subiendo el archivo GPX que ya le queda del reloj o del celular, y cualquiera puede ver qué hay cerca suyo. Está en línea con cuatro circuitos cargados, que son los que fui subiendo yo para probarlo contra datos de verdad.",
        en: "Argentina's off-road circuits are scattered across WhatsApp groups and one-off Facebook posts. I built a single map where the organizer loads a route by uploading the GPX file their watch or phone already produced, and anyone can see what's near them. It's online with four circuits loaded, which are the ones I uploaded myself to test it against real data.",
      },
      problem: {
        es: "Buscar circuitos cercanos es una pregunta geográfica, no una búsqueda de texto. Si la resolvés trayéndote todos los circuitos y calculando distancias en el navegador, funciona con veinte y se cae con dos mil. Tenía que resolverse adentro de la base.",
        en: "Finding nearby circuits is a geographic question, not a text search. If you solve it by pulling every circuit down and computing distances in the browser, it works with twenty and collapses with two thousand. It had to be resolved inside the database.",
      },
      architecture: {
        es: "Monorepo con pnpm: la API en Fastify con TypeScript, la web en React con Vite y un paquete compartido con los tipos que usan las dos puntas. La base es PostgreSQL con PostGIS —la extensión que le enseña a entender coordenadas y distancias— y un índice GIST sobre la geometría, declarado en la migración inicial, para que la búsqueda por cercanía sea una sola consulta. El acceso a datos va con Drizzle y el mapa se dibuja con Leaflet. Los GPX que sube el administrador se convierten a GeoJSON en el servidor antes de guardarse, y la aplicación es instalable en el teléfono. En producción, la web se despliega a Cloudflare Workers con Wrangler, la API va a Render y la base es Neon; el workflow que publica la web verifica después con grep que la URL de la API haya quedado escrita en el bundle, porque esa variable se resuelve en tiempo de compilación y equivocarla no rompe el despliegue, rompe la página.",
        en: "pnpm monorepo: the API in Fastify with TypeScript, the web app in React with Vite, and a shared package holding the types both ends use. The database is PostgreSQL with PostGIS — the extension that teaches it to understand coordinates and distances — plus a GIST index on the geometry, declared in the initial migration, so a proximity search is a single query. Data access goes through Drizzle and the map is drawn with Leaflet. GPX files uploaded by the admin are converted to GeoJSON on the server before being stored, and the app installs on a phone. In production the web app deploys to Cloudflare Workers via Wrangler, the API goes to Render and the database is Neon; the workflow that publishes the web app then greps the bundle to confirm the API URL actually made it in, because that variable resolves at build time and getting it wrong doesn't break the deployment, it breaks the page.",
      },
      stackRationale: {
        es: "Elegí Fastify sobre Express porque valida entradas y salidas contra un esquema desde el arranque, y en una API que recibe archivos subidos por desconocidos eso pesa más que la comodidad. PostGIS no fue opcional; es lo que convierte «circuitos a menos de 50 km» en una consulta que la base resuelve sola y con índice. El paquete de tipos compartidos es lo que más me ahorró: cuando cambia el contrato entre la API y la web, se rompe la compilación antes de que el usuario vea nada.",
        en: "I chose Fastify over Express because it validates inputs and outputs against a schema from the start, and in an API that takes files uploaded by strangers, that outweighs convenience. PostGIS wasn't optional; it's what turns \"circuits within 50 km\" into a query the database resolves on its own, with an index. The shared types package saved me the most: when the contract between API and web changes, the build breaks before the user sees anything.",
      },
      challenges: [
        {
          es: "Interpretar archivos GPX reales. La especificación es una cosa y lo que exporta cada reloj o aplicación es otra: recorridos con puntos repetidos, sin altura, con marcas de tiempo raras. El parser tiene que tolerar todo eso y aun así producir un trazado dibujable.",
          en: "Parsing real GPX files. The spec is one thing and what each watch or app exports is another: routes with duplicate points, no elevation, odd timestamps. The parser has to tolerate all of it and still produce a drawable track.",
        },
        {
          es: "Probar consultas geográficas de verdad. Las pruebas corren en integración continua contra una base PostGIS levantada en Docker, con las migraciones aplicadas, porque un índice geográfico simulado no prueba nada. Con la tabla casi vacía el planificador de PostgreSQL elige recorrerla entera —y tiene razón, con esos volúmenes es más barato—, así que el test lo fuerza con SET enable_seqscan = off y verifica con EXPLAIN que la consulta pueda usar el índice GIST. Prueba que el índice está bien declarado y que la consulta lo alcanza. Para medir rendimiento haría falta volumen, y hoy hay cuatro circuitos cargados.",
          en: "Testing geographic queries for real. The tests run in CI against a PostGIS database spun up in Docker with the migrations applied, because a mocked geographic index proves nothing. With the table nearly empty, PostgreSQL's planner chooses a full scan — and it's right, at that size it's cheaper — so the test forces the issue with SET enable_seqscan = off and checks with EXPLAIN that the query can use the GIST index. It proves the index is correctly declared and that the query reaches it. Measuring performance would take volume, and today there are four circuits loaded.",
        },
        {
          es: "Cerrar el acceso de administración antes de publicarlo. El login tiene límite de intentos —ocho por minuto—, los registros del servidor pasan por un redactor que borra las credenciales antes de escribir la línea, y cada acción administrativa queda con su traza de quién y cuándo.",
          en: "Locking down admin access before publishing it. Login is rate-limited to eight attempts a minute, server logs pass through a redactor that strips credentials before the line is written, and every administrative action leaves a trace of who and when.",
        },
      ],
      results: [
        {
          es: "La búsqueda por cercanía se resuelve adentro de PostgreSQL, en una sola consulta, con un índice GIST declarado en la migración inicial.",
          en: "Proximity search is resolved inside PostgreSQL, in a single query, against a GIST index declared in the initial migration.",
        },
        {
          es: "Desplegado desde GitHub Actions: la web a Cloudflare Workers con Wrangler, la API a Render y la base en Neon, con una verificación posterior de que la URL de la API quedó en el bundle publicado.",
          en: "Deployed from GitHub Actions: the web app to Cloudflare Workers via Wrangler, the API to Render and the database on Neon, with a follow-up check that the API URL made it into the published bundle.",
        },
        {
          es: "Integración continua en GitHub Actions que corre lint, tipos y pruebas contra una base PostGIS real en cada cambio.",
          en: "Continuous integration on GitHub Actions running lint, types and tests against a real PostGIS database on every change.",
        },
      ],
      learnings: {
        es: "Es el primer proyecto donde las pruebas me sirvieron de verdad, y la diferencia estuvo en correrlas contra la base real: un índice geográfico contra una simulación pasa siempre. También aprendí algo incómodo sobre mis propias pruebas. La que escribí para el índice necesita forzar el planificador porque hay cuatro filas cargadas, así que prueba la declaración y no la velocidad, y eso lo dejé escrito en el propio archivo de test para no confundirme yo dentro de seis meses.",
        en: "It's the first project where the tests actually earned their keep, and the difference was running them against the real database: a geographic index against a mock always passes. I also learned something uncomfortable about my own tests. The one I wrote for the index has to force the planner because there are four rows loaded, so it proves the declaration and not the speed — and I wrote that down inside the test file itself, so I don't fool myself six months from now.",
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
        es: "Upward es una app de hábitos: cada hábito que cumplís cuenta como un voto por la persona que querés ser, y la app lleva la cuenta. La construí solo y me impuse las reglas que tendría con un equipo mirando. Nada se da por cerrado sin pruebas, y cada elección técnica quedó anotada en el repositorio con su razón y con lo que descarté, fechada antes del código que la aplica.",
        en: "Upward is a habit app: every habit you complete counts as a vote for the person you're trying to become, and the app keeps score. I built it alone and held myself to the rules I'd have with a team watching. Nothing is called done without tests, and every technical choice is written into the repository with its reason and what I ruled out, dated ahead of the code that applies it.",
      },
      problem: {
        es: "Una app de hábitos se abre a la mañana, apurado, con una mano y sin mirar demasiado. Así que antes de maquetar nada dejé la restricción por escrito en el registro de decisiones: tiene que ser usable con un solo pulgar, en pantallas de 360 a 430 píxeles de ancho y con conexión móvil pobre. Esa entrada del registro está fechada antes del primer componente, y descartó de entrada la mitad de las soluciones cómodas — menús que piden las dos manos, listas que salen a buscar datos cada vez que se dibujan.",
        en: "A habit app gets opened in the morning, in a hurry, one-handed and without looking too hard. So before laying out a single screen I put the constraint in writing in the decision log: it has to be usable with one thumb, on screens between 360 and 430 pixels wide, over a poor mobile connection. That log entry is dated ahead of the first component, and it ruled out half the comfortable answers right away — menus that need two hands, lists that go fetch data every time they render.",
      },
      architecture: {
        es: "SvelteKit 2 con Svelte 5 y sus runes, el modelo de reactividad nuevo que reemplaza a las librerías de estado externas. La app está en capas: las rutas muestran, los stores guardan el estado reactivo y los services tienen la lógica de negocio y las consultas, y un componente nunca llama a un service directo. Los datos viven en Supabase —PostgreSQL con autenticación encima— y cada tabla filtra por el usuario de la sesión con Row-Level Security, así el aislamiento entre cuentas lo garantiza la base incluso si una consulta del cliente se olvida del where. Es instalable en el teléfono, con un Service Worker generado por Workbox que precachea la aplicación, guarda las respuestas de la API y tiene su propia pantalla para cuando no hay señal.",
        en: "SvelteKit 2 with Svelte 5 and its runes, the new reactivity model that replaces external state libraries. The app is layered: routes render, stores hold reactive state, services hold the business logic and the queries, and a component never calls a service directly. Data lives in Supabase — PostgreSQL with auth on top — and every table filters by the session's user through Row-Level Security, so account isolation is guaranteed by the database even if a client query forgets its where clause. It installs on the phone, with a Workbox-generated Service Worker that precaches the app, stores API responses and has its own screen for when the signal is gone.",
      },
      stackRationale: {
        es: "Cada una de estas elecciones está en el registro de decisiones del repositorio con su razón y sus alternativas descartadas, que es la parte que normalmente se pierde. Svelte compila a JavaScript común y no manda un runtime al teléfono, y en una app que tiene que abrir con mala señal eso pesa más que la comodidad de usar el framework que ya conozco; por eso quedaron afuera Next.js, anotado con esas palabras como «runtime pesado», y Remix. Supabase da PostgreSQL de verdad, que es lo que pide un modelo relacional de identidades, hábitos, votos y rachas; Firebase quedó afuera porque meter eso en un almacén de documentos era pelearse con la herramienta, y PlanetScale también, por escrito y con fecha. UnoCSS genera solo las clases que uso. Y no puse ORM: el cliente de Supabase ya devuelve los tipos del esquema.",
        en: "Every one of these choices sits in the repository's decision log with its reason and the alternatives ruled out, which is the part that usually gets lost. Svelte compiles to plain JavaScript and ships no runtime to the phone, and in an app that has to open on a bad connection that outweighs the comfort of the framework I already know; that's why Next.js went out, logged in those words as a \"heavy runtime\", and Remix with it. Supabase gives me real PostgreSQL, which is what a relational model of identities, habits, votes and streaks asks for; Firebase went out because forcing that into a document store meant fighting the tool, and PlanetScale did too, in writing and dated. UnoCSS generates only the classes I use. And I skipped the ORM: the Supabase client already returns the schema's types.",
      },
      challenges: [
        {
          es: "Sostener dos capas de pruebas en el mismo proyecto sin que se estorben. Vitest corre la lógica de los services contra un Supabase simulado, en segundos, y es lo que ejecuto mientras escribo. Playwright abre la app de verdad en tres dispositivos —un Android, un iPhone y un escritorio— y recorre el registro, la navegación, la instalación como app y el modo sin conexión. Dos configuraciones y dos velocidades, la rápida a cada rato y la lenta antes de dar algo por cerrado.",
          en: "Keeping two layers of tests in the same project without them tripping over each other. Vitest runs the services' logic against a mocked Supabase, in seconds, and that's what I run while writing. Playwright opens the real app on three devices — an Android, an iPhone and a desktop — and walks through sign-up, navigation, installing it as an app, and offline mode. Two configs and two speeds, the fast one constantly and the slow one before calling anything done.",
        },
        {
          es: "Anotar cada decisión con sus alternativas descartadas. Suena a burocracia hasta que te toca completar el campo «alternativas» y te das cuenta de que no habías mirado ninguna. Ese es el trabajo real del registro: obligarte a que haya habido una elección.",
          en: "Logging every decision along with the alternatives ruled out. It sounds like paperwork until you have to fill in the \"alternatives\" field and realize you never looked at any. That's the log's real job: forcing there to have been a choice at all.",
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
        es: "Lo que más me sirvió fue la costumbre de anotar por qué. Seis meses después te acordás de qué elegiste pero no contra qué, y sin eso no hay forma de revisar si la decisión sigue en pie. Del lado técnico, los runes me cambiaron la forma de pensar el estado incluso cuando vuelvo a React: cuando la reactividad es del valor y no del componente, dejás de preguntarte cuándo se vuelve a renderizar algo. Y la restricción de una sola mano fue lo mejor que decidí, justamente porque no me dejó agregar nada por las dudas.",
        en: "What served me best was the habit of writing down why. Six months later you remember what you picked but not what you picked it over, and without that there's no way to check whether the decision still holds. On the technical side, runes changed how I think about state even when I go back to React: when reactivity belongs to the value rather than the component, you stop asking yourself when something re-renders. And the one-handed constraint was the best call I made, precisely because it wouldn't let me add anything just in case.",
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
        es: "Astro con arquitectura de islas. Las diez páginas públicas se pre-renderizan enteras en el build y solo los componentes que necesitan interacción se hidratan en el navegador, uno por uno; el resto llega como HTML y no descarga JavaScript. Las tres páginas de administración son las únicas con el prerenderizado apagado, porque ahí lo que se muestra depende de quién entró. La API es Fastify con Drizzle sobre PostgreSQL, en un monorepo pnpm donde un paquete compartido tiene los tipos y los esquemas de Zod que validan las dos puntas. El panel de administración —donde se cargan las fichas, las fotos y los repuestos— es la parte con más interacción, y ahí sí entra React completo.",
        en: "Astro with an islands architecture. The ten public pages are pre-rendered in full at build time and only the components that need interaction hydrate in the browser, one at a time; everything else arrives as HTML and downloads no JavaScript. The three admin pages are the only ones with prerendering switched off, because what they show depends on who signed in. The API is Fastify with Drizzle over PostgreSQL, in a pnpm monorepo where a shared package holds the types and Zod schemas that validate both ends. The admin panel — where bike profiles, photos and parts are loaded — is the most interactive part, and that's where full React comes in.",
      },
      stackRationale: {
        es: "Elegí Astro porque me deja decidir el renderizado componente por componente, con la granularidad que este proyecto pedía. Con Next.js habría tenido que llevar el framework entero a páginas que son texto y fotos. La regla que me puse fue una sola y la sostuve hasta el final: si una parte no necesita JavaScript, no lo lleva.",
        en: "I chose Astro because it lets me decide rendering component by component, at the granularity this project asked for. With Next.js I'd have had to ship the whole framework to pages that are text and photos. I set myself one rule and held it to the end: if a part doesn't need JavaScript, it doesn't get any.",
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
        es: "Me obligó a tener una respuesta para «¿esto necesita JavaScript?» en cada componente, y resulta que la respuesta es que no muchas más veces de las que uno cree. La parte concreta que me quedó es el reparto: diez páginas públicas pre-renderizadas y tres de administración que se arman por pedido, con esa decisión tomada pantalla por pantalla y anotada en cada archivo.",
        en: 'It forced me to have an answer to "does this need JavaScript?" for every component, and the answer turns out to be no far more often than you\'d expect. The concrete thing I kept is the split: ten public pages pre-rendered and three admin pages built on request, with that decision made screen by screen and written into each file.',
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
      es: "App para pilotos de enduro: el mantenimiento y los setups de la moto, con la señal que haya",
      en: "An app for enduro riders: bike maintenance and setups, on whatever signal the field gives you",
    },
    description: {
      es: "Producto propio para pilotos de enduro: suspensión, mantenimiento y checklists de carrera en el celular. Guarda primero en el teléfono y sincroniza cuando vuelve la señal.",
      en: "My own product for enduro riders: suspension, maintenance and race checklists on the phone. It saves to the device first and syncs when the signal comes back.",
    },
    image: asset("captures/motobitacora/card.webp"),
    technologies: [
      "React 18",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Service Worker",
      "PWA",
      "Vercel",
    ],
    githubUrl: "https://github.com/Pa7r1/EnduroLog",
    liveUrl: "https://enduro-log.vercel.app/",
    repoPrivate: true,
    hasDetail: true,
    detail: {
      year: 2025,
      status: "production",
      summary: {
        es: "Soy piloto y sé lo difícil que es llevar el registro de lo que le hacés a la moto: los setups de suspensión por terreno, el mantenimiento por horas de uso y el checklist de qué llevar a cada carrera. EnduroLog junta todo eso en una app instalable pensada para el lugar donde la señal es mala o directamente no hay. Lo que anotás queda en el teléfono y sube cuando aparece la red. Es un producto propio, lo uso yo, y tiene usuarios.",
        en: "I ride myself, so I know how hard it is to keep track of what you do to a bike: suspension setups per terrain, hour-based maintenance, and the checklist of what to bring to each race. EnduroLog pulls all of that into an installable app built for the place where the signal is poor or simply absent. What you write down stays on the phone and goes up when the network appears. It's my own product, I use it, and it has users.",
      },
      problem: {
        es: "Los pilotos de enduro anotan la configuración de la suspensión, el mantenimiento y los checklists en papel o en planillas que nunca están a mano justo cuando hacen falta, que es en el campo y con una barra de señal. Guardar todo en el teléfono y nada más tampoco alcanzaba: la gente cambia de teléfono, y la ficha de la moto también se mira desde la computadora del taller. Tenía que andar sin red y aun así ser la misma cuenta en los dos lados.",
        en: "Enduro riders write suspension settings, maintenance and checklists on paper or in spreadsheets that are never at hand exactly when they're needed, which is out in the field on one bar of signal. Keeping everything on the phone and nothing else wasn't enough either: people change phones, and the bike's record also gets read from the workshop computer. It had to work with no network and still be the same account on both.",
      },
      architecture: {
        es: "React 18 con Vite adelante y Supabase atrás, que es PostgreSQL con autenticación encima: el login es real —hay un contexto de sesión propio y una función de servidor en Vercel para las invitaciones— y cada tabla filtra por el usuario de la sesión con Row-Level Security. El diseño es offline-first. Toda escritura entra primero al almacenamiento del teléfono con una bandera de pendiente, y un Service Worker escrito a mano, con su caché versionada, sirve la aplicación y lo último que se vio aunque no haya red. Cuando vuelve la conexión, la cola de pendientes se manda. Está desplegado en Vercel.",
        en: "React 18 with Vite in front and Supabase behind — PostgreSQL with authentication on top: the login is real (there's a session context of its own and a server function on Vercel for invitations) and every table filters by the session's user through Row-Level Security. The design is offline-first. Every write lands first in the phone's storage with a pending flag, and a hand-written Service Worker with its own versioned cache serves the app and the last thing you saw even with no network. When the connection returns, the pending queue goes up. It's deployed on Vercel.",
      },
      stackRationale: {
        es: "Le puse servidor porque los datos de una moto se miran desde más de un lado: el teléfono en la carrera, la computadora del taller, a veces el celular del que te está ayudando. Supabase me dio PostgreSQL de verdad y autenticación sin montar un backend aparte, que para un producto que mantengo solo pesa bastante. El costo de sincronizar es que dos dispositivos pueden escribir la misma ficha con la app cerrada, así que cada registro lleva una columna de versión y el que llega con una versión vieja no pisa lo que ya está guardado. Y elegí una app web instalable antes que una nativa para no depender del costo ni de los tiempos de las tiendas de aplicaciones.",
        en: "I did give it a server, because a bike's data gets looked at from more than one place: the phone at the race, the workshop computer, sometimes the phone of whoever is helping you. Supabase gave me real PostgreSQL and authentication without standing up a separate backend, which counts for a product I maintain alone. The price of syncing is that two devices can write the same record with the app closed, so every row carries a version column and a write arriving from a stale version doesn't overwrite what's already stored. And I picked an installable web app over a native one so I wouldn't depend on the cost or the timelines of the app stores.",
      },
      challenges: [
        {
          es: "Diseñar el guardado local para que soporte versiones: cuando cambia la estructura de los datos, lo que el usuario ya tenía se migra solo al abrir la app, sin perder nada.",
          en: "Designing local storage to support versioning: when the data structure changes, what the user already had migrates on its own when the app opens, without losing anything.",
        },
        {
          es: "Dos dispositivos escribiendo la misma ficha. Con guardado local y sincronización diferida el conflicto deja de ser hipotético, así que cada registro lleva una columna de versión que se compara al subir, y la escritura que salió de un estado viejo se descarta en lugar de pisar la buena.",
          en: "Two devices writing the same record. With local storage and deferred syncing the conflict stops being hypothetical, so every row carries a version column that gets compared on upload, and a write that started from a stale state is discarded instead of overwriting the good one.",
        },
        {
          es: "El Service Worker está escrito a mano, con la caché versionada también a mano. Me costó más que generarlo con una herramienta, y a cambio, cuando la app abría mostrando la pantalla de la versión anterior, sabía exactamente qué archivo estaba sirviendo y por qué.",
          en: "The Service Worker is written by hand, with the cache versioning done by hand too. It cost me more than generating it with a tool, and in exchange, when the app opened showing the previous version's screen, I knew exactly which file it was serving and why.",
        },
      ],
      results: [
        {
          es: "Saca el seguimiento de la moto del papel: suspensión, mantenimiento por horas de uso y checklists en un solo lugar.",
          en: "Gets bike tracking off paper: suspension, hour-based maintenance and checklists in one place.",
        },
        {
          es: "Offline-first con Service Worker propio y cola de escrituras pendientes: se abre y se usa con mala señal, habiendo iniciado sesión al menos una vez.",
          en: "Offline-first, with its own Service Worker and a queue of pending writes: it opens and works on a bad signal, once you've signed in at least once.",
        },
        {
          es: "Sincroniza entre dispositivos con detección de escrituras concurrentes, por columna de versión en cada registro.",
          en: "Syncs across devices with concurrent-write detection, through a version column on every row.",
        },
        {
          es: "Instalable en Android y iOS, desplegada en Vercel sobre Supabase, con usuarios usándola.",
          en: "Installable on Android and iOS, deployed on Vercel over Supabase, with people using it.",
        },
      ],
      learnings: {
        es: "Lo que más me enseñó este proyecto fue la parte que no había previsto: sincronizar es fácil hasta que dos dispositivos escriben lo mismo. La primera versión guardaba local y subía sin preguntar nada, y así se pierde lo que escribió el otro. De ahí salió la columna de versión, y de ahí también salió la costumbre de dejar anotado en el propio código para qué existe una columna rara, porque en seis meses no me iba a acordar.",
        en: "What this project taught me most was the part I hadn't planned for: syncing is easy until two devices write the same thing. The first version saved locally and uploaded without asking, and that's how you lose what the other device wrote. The version column came out of that, and so did the habit of writing into the code itself why an odd column exists, because in six months I wasn't going to remember.",
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
    technologies: ["Astro", "TypeScript", "CSS", "Cloudflare Workers", "SEO"],
    liveUrl: "https://www.makkem.com",
    hasDetail: true,
    detail: {
      year: 2026,
      status: "mvp",
      summary: {
        es: "Vender un sitio web hablando de tecnología no funciona: el que compra quiere ver cómo se ve y cuánto tarda en abrir. Así que armé tres sitios completos y los publiqué, un lodge de montaña, una constructora y un estudio de abogados. El contenido es de muestra, inventado a propósito para que cada uno tenga la densidad real que tendría el de un cliente. Lo que es de verdad es el código, el rendimiento y el diseño.",
        en: "Selling a website by talking about technology doesn't work: the buyer wants to see how it looks and how fast it opens. So instead of explaining it, I built three complete sites and published them: a mountain lodge, a construction firm and a law office. The content is sample material, invented on purpose so each one carries the density a real client's would. What's real is the code, the performance and the design.",
      },
      problem: {
        es: "Un sitio de presentación se juega en el primer segundo. Si tarda en abrir en el celular de alguien con mala señal, no importa lo lindo que sea. El desafío era que cada pieza se viera trabajada y a la vez pesara lo mínimo posible.",
        en: "A presentation site is won in the first second. If it's slow to open on the phone of someone with bad signal, it doesn't matter how pretty it is. The challenge was making each piece look crafted while weighing as little as possible.",
      },
      architecture: {
        es: "Astro con salida estática, así el HTML se genera al compilar y el visitante recibe archivos ya listos, sin esperar a que un framework arranque en su teléfono. Cada sitio tiene su propio sistema de tokens, escrito desde cero, con el vocabulario sacado del rubro. La constructora nombra sus colores encofrado, hormigón, grafito, obra y plano; el lodge de montaña los llama basalto, cardón, hueso y piedra; el estudio jurídico tiene una sola tinta y se llama biblioteca. Ni el ancho máximo se llama igual en los tres, y las tipografías tampoco se repiten: Bricolage Grotesque con Instrument Sans en la constructora, Gloock con Archivo en turismo, Newsreader con Public Sans e IBM Plex Mono en abogados. El método es lo único que se repite. Las tipografías van autohospedadas con paquetes de npm, cero peticiones a Google, y las imágenes las procesa Astro en el build, con una precarga declarada en cada plantilla base para la imagen más grande del primer viewport.",
        en: "Astro with static output, so the HTML is generated at build time and the visitor gets ready-made files without waiting for a framework to boot on their phone. Each site has its own token system, written from scratch, with the vocabulary taken from its trade. The construction firm names its colors encofrado, hormigón, grafito, obra and plano; the mountain lodge calls them basalto, cardón, hueso and piedra; the law office has a single ink and calls it biblioteca. Not even the max content width is named the same way across the three, and the typefaces don't repeat either: Bricolage Grotesque with Instrument Sans for construction, Gloock with Archivo for tourism, Newsreader with Public Sans and IBM Plex Mono for law. The method is the only thing that repeats. Typefaces are self-hosted through npm packages, zero requests to Google, and images are processed by Astro at build time, with each base template declaring a preload for the largest image in the first viewport.",
      },
      stackRationale: {
        es: "Astro porque en un sitio de presentación la interactividad se reduce a un menú y poco más, y mandar el JavaScript de un framework entero sería pagar un costo sin recibir nada. Las tipografías las traigo como paquetes de npm y las sirvo desde el propio dominio: una petición menos a un tercero antes de que se dibuje la primera línea de texto, y una fuente que sigue estando ahí si el CDN de Google tiene un mal día.",
        en: "Astro because on a presentation site the interactivity comes down to a menu and little else, and shipping a whole framework's JavaScript would mean paying a cost for nothing. I pull the typefaces in as npm packages and serve them from the site's own domain: one fewer third-party request before the first line of text is painted, and a typeface that's still there if Google's CDN has a bad day.",
      },
      challenges: [
        {
          es: "Que tres sitios de rubros muy distintos —turismo, construcción y derecho— se sintieran hechos por la misma mano sin parecerse entre ellos. Terminé escribiendo tres sistemas de tokens independientes con el mismo método detrás: escala tipográfica, ritmo vertical, un acento por sitio y la jerarquía resuelta por peso. Lo que cambia en cada uno es el vocabulario, y lo saqué del rubro. La constructora habla de encofrado y hormigón; el lodge de montaña, de basalto y cardón.",
          en: "Getting three sites from very different trades — tourism, construction and law — to feel like the same hand without resembling each other. I ended up writing three independent token systems with the same method behind them: type scale, vertical rhythm, one accent per site, and hierarchy resolved by weight. What changes in each is the vocabulary, and I took it from the trade. The construction firm talks about encofrado and hormigón; the mountain lodge, about basalto and cardón.",
        },
        {
          es: "Escribir el contenido de muestra. Un relleno tipo «Lorem ipsum» deja el diseño sin probar; cada sección necesita el largo y el tono que tendría de verdad, para que se vea qué pasa cuando un título ocupa tres líneas o una tarjeta trae seis palabras más de las que uno dibujó.",
          en: "Writing the sample content. Lorem-ipsum filler leaves the design untested; each section needs the length and tone it would really have, so you can see what happens when a headline runs three lines or a card arrives with six more words than you drew for.",
        },
        {
          es: "Cargar rápido con sitios que son, sobre todo, fotos grandes. Astro procesa las imágenes en el build y cada plantilla base declara cuál es la imagen más grande del primer viewport, con sus anchos y sus tamaños, para precargarla; el resto entra a medida que aparece en pantalla.",
          en: "Loading fast on sites that are, above all, big photographs. Astro processes the images at build time and each base template declares which image is the largest one in the first viewport, with its widths and sizes, so it can be preloaded; the rest comes in as it scrolls into view.",
        },
      ],
      results: [
        {
          es: "Los tres sitios en línea, con salida estática de Astro y las tipografías autohospedadas por paquete, sin peticiones a Google Fonts.",
          en: "All three sites online, with Astro's static output and typefaces self-hosted through packages, with no requests to Google Fonts.",
        },
        {
          es: "Tres sistemas de tokens escritos por separado, sin un solo nombre de variable en común entre ellos.",
          en: "Three token systems written separately, without a single variable name in common between them.",
        },
        {
          es: "Procesamiento de imágenes en el build, con precarga declarada de la imagen más grande del primer viewport en cada sitio.",
          en: "Build-time image processing, with a declared preload for the largest first-viewport image on each site.",
        },
      ],
      learnings: {
        es: "Acá no había ninguna funcionalidad detrás de la cual esconderse, y eso me hizo trabajar el diseño con otra seriedad. También me equivoqué en algo que daba por obvio: arranqué pensando en un sistema de tokens único con el acento intercambiable, y para la segunda pieza ya lo estaba peleando, porque una constructora y un lodge de montaña no comparten ni el ritmo ni la densidad de imagen. Los separé y escribí cada uno desde cero. El tercero salió más rápido igual, no por reutilizar archivos sino porque ya sabía qué preguntas hacerme antes de abrir el editor.",
        en: "There was no functionality to hide behind here, and that made me take the design seriously in a way I hadn't before. I also got something wrong that I'd taken for granted: I started out planning a single token system with a swappable accent, and by the second piece I was already fighting it, because a construction firm and a mountain lodge share neither the rhythm nor the image density. I separated them and wrote each one from scratch. The third still came out faster, not from reusing files but because I already knew which questions to ask myself before opening the editor.",
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
      es: "La landing que salió en cuatro días para una de las carreras de enduro más grandes del país",
      en: "The landing page shipped in four days for one of the country's biggest enduro races",
    },
    description: {
      es: "Página para un servicio de asistencia mecánica en pista. HTML, CSS y JavaScript sin ningún sistema de build, con el contacto directo a WhatsApp y el mensaje ya escrito.",
      en: "Landing page for an on-track mechanical assistance service. Plain HTML, CSS and JavaScript with no build system, contact going straight to WhatsApp with the message pre-written.",
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
        es: "Walter y Diego ofrecen asistencia mecánica en la TransVelasco, una de las carreras de enduro más importantes de Argentina. Necesitaban estar en línea antes de la carrera, con una fecha que no se movía. Armé una landing liviana que abre al instante en el celular, explica el servicio, el cronograma y los precios, y deja al piloto a un toque de escribirles por WhatsApp.",
        en: "Walter and Diego provide mechanical assistance at the TransVelasco, one of Argentina's biggest enduro races. They needed to be online before the race, against a date that wasn't moving. I built a lightweight landing page that opens instantly on a phone, lays out the service, the schedule and the pricing, and leaves the rider one tap from messaging them on WhatsApp. Eight commits in four days, from the first line to published.",
      },
      problem: {
        es: "El cliente necesitaba estar en línea rápido, justo antes de la carrera. El tiempo de desarrollo se medía en días, no en semanas, y el público iba a llegar desde el celular, en la ruta o en el campamento, con la señal que hubiera.",
        en: "The client needed to be online fast, right before the race. Development time was measured in days, not weeks, and the audience was going to arrive on a phone, on the road or at the campsite, with whatever signal there was.",
      },
      architecture: {
        es: "HTML, CSS y JavaScript puros, sin ningún sistema de build. Toda la identidad visual sale de variables CSS declaradas en un solo lugar, y las secciones aparecen al hacer scroll con un IntersectionObserver que, si el navegador no lo soporta, simplemente deja todo visible desde el arranque. Cada bloque de contacto arma su propio enlace de WhatsApp con el mensaje ya escrito según de qué servicio salió, así el mecánico sabe qué le están preguntando antes de contestar. Simple a propósito: menos piezas, menos cosas que puedan fallar la noche anterior a la carrera.",
        en: "Plain HTML, CSS and JavaScript, with no build system at all. The whole visual identity comes from CSS variables declared in one place, and sections appear on scroll through an IntersectionObserver that, if the browser doesn't support it, simply leaves everything visible from the start. Each contact block builds its own WhatsApp link with the message already written for the service it came from, so the mechanic knows what's being asked before answering. Deliberately simple: fewer parts, fewer things that can break the night before the race.",
      },
      stackRationale: {
        es: "Con una fecha de carrera encima, la mejor decisión es la que llega antes a producción. Sin sistema de build no hay configuración que falle ni minutos perdidos en armado: escribís, subís y está en línea. Para una página donde la interactividad se reduce a un menú y unos botones de WhatsApp, un framework habría sumado peso y una capa más donde algo puede romperse.",
        en: "With a race date bearing down, the best decision is the one that reaches production first. With no build system there's no config to break and no minutes lost to tooling: you write it, you push it, it's online. For a page whose interactivity comes down to a menu and a few WhatsApp buttons, a framework would have added weight and one more layer where something can break.",
      },
      challenges: [
        {
          es: "Lograr una identidad visual coherente sin herramientas de diseño, con la paleta, la escala tipográfica y los espaciados declarados como variables CSS y sostenidos a mano en un archivo que crece rápido cuando se trabaja apurado.",
          en: "Achieving a coherent visual identity without design tools, with the palette, the type scale and the spacing declared as CSS variables and kept in line by hand in a file that grows fast when you're working against the clock.",
        },
        {
          es: "Que las animaciones de aparición no dejaran contenido invisible en un navegador viejo. El IntersectionObserver agrega la clase que revela cada sección; si la API no existe, no hay clase que agregar y el contenido queda visible desde el principio, que es el peor caso aceptable.",
          en: "Making sure the reveal animations couldn't leave content invisible in an older browser. The IntersectionObserver adds the class that reveals each section; if the API isn't there, there's no class to add and the content stays visible from the start, which is the worst acceptable case.",
        },
      ],
      results: [
        {
          es: "En línea antes de la carrera, con ocho commits repartidos en cuatro días.",
          en: "Online before the race, in eight commits spread across four days.",
        },
        {
          es: "Contacto directo por WhatsApp desde cada bloque, con el mensaje ya armado según el servicio del que salió.",
          en: "Direct WhatsApp contact from every block, with the message pre-written for the service it came from.",
        },
        {
          es: "Sin dependencias ni sistema de build: se sirve como archivos estáticos desde GitHub Pages.",
          en: "No dependencies and no build system: it's served as static files from GitHub Pages.",
        },
      ],
      learnings: {
        es: "La elección de tecnología responde a las restricciones del proyecto y no a lo que uno tiene ganas de practicar. Acá la restricción era la fecha de la carrera, y con eso encima JavaScript puro y CSS ordenado llegaron antes. Lo concreto que me quedó de esos cuatro días es una costumbre chica: dejar el contenido visible por defecto y que la animación sea lo que se agrega encima. Desde entonces lo escribo así en todos lados, este portafolio incluido.",
        en: "The technology choice answers to the project's constraints, not to what you feel like practicing. Here the constraint was the race date, and with that on top of you, plain JavaScript and tidy CSS got there first. The concrete thing I kept from those four days is a small habit: leave the content visible by default and let the animation be what gets added on top. I've written it that way ever since, this portfolio included.",
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
