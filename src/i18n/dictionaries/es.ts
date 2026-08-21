export const es = {
  // Nav & section labels
  "nav.about": "Sobre mí",
  "nav.experience": "Experiencia",
  "nav.projects": "Proyectos",
  "nav.skills": "Habilidades",
  "nav.contact": "Contacto",

  // Hero / mobile header
  "header.role": "FULLSTACK DEV",
  "skip.toContent": "Saltar al contenido",
  // Los asteriscos marcan el tramo que va resaltado en el titular del
  // hero: App.tsx parte la cadena por ellos y envuelve ese tramo en <em>.
  // El resalte es peso + subrayado, no color (ver .hero-lead em).
  // Cambiar el texto es libre; dejar los dos asteriscos, obligatorio.
  "hero.headline": `*Desarrollo aplicaciones web de extremo a extremo:* desde el modelado de datos hasta despliegues sólidos, escalables y mantenibles. `,
  // Firma del hero: rol + dónde. El stack completo ya está en Habilidades;
  // repetirlo acá le robaba el primer golpe de vista a la frase.
  "hero.eyebrow": "Full Stack Developer · Remoto desde Argentina",
  "hero.ctaPrimary": "Descargar CV",
  "hero.ctaSecondary": "Ver proyectos",

  // About section paragraphs
  "about.p1":
    "Soy desarrollador Full Stack egresado de la UTN La Rioja. Manejo el ciclo completo de desarrollo de software: desde el modelado de bases de datos y la creación de APIs REST, hasta el desarrollo de la interfaz y la configuración del despliegue final en la nube.",
  // p2 era un párrafo de 50 palabras con tres cláusulas unidas por "y":
  // se expone esa lista como tal en vez de seguir corriendo como prosa.
  // Mismos hechos, sin agregar ni quitar ninguno.
  "about.teamwork.intro":
    "Trabajar en repositorios compartidos con otros equipos me dejó tres hábitos:",
  "about.teamwork.item1": "Leer y auditar código ajeno antes de tocarlo.",
  "about.teamwork.item2": "Resolver conflictos en Git sin bloquear a nadie.",
  "about.teamwork.item3": "Priorizar la mejor solución técnica por sobre el ego.",
  "about.p3":
    "Potencio mi productividad con asistencia de IA, pero bajo un entorno controlado que diseñé yo mismo: un repositorio de configuración versionado con subagentes, hooks de validación y servidores MCP que imponen las convenciones del proyecto. Busco sumarme a un equipo donde pueda aportar autonomía en el backend e infraestructura, construyendo bases de datos sólidas, despliegues reproducibles y sistemas estables.",
  "about.downloadCV": "Descargar CV",
  "about.stat.experience": "años programando",
  "about.stat.production": "sistemas en producción",
  "about.stat.team": "meses en equipo",

  // Timeline
  "timeline.hint": "Tocá una fila para leer el detalle.",
  "timeline.education": "Formación",

  // Skills group labels
  "skills.group.backend": "Backend",
  "skills.group.databases": "Bases de Datos",
  "skills.group.devops": "DevOps & Infraestructura",
  "skills.group.testing": "Calidad & Tooling",
  "skills.group.frontend": "Frontend",
  "skills.group.ai": "Desarrollo asistido por IA",

  // Contact
  "contact.text":
    "Estoy buscando equipo. Si estás cubriendo una posición Full Stack o de backend y algo de lo que viste encaja, escribime!",
  "contact.cta": "Escribirme por correo",
  "contact.ctaMicro": "",
  "contact.location": "Pituil, La Rioja, Argentina · Trabajo remoto",
  "contact.emailAria": "Enviar un correo",
  "contact.whatsappMessage":
    "¡Hola Patricio! Vi tu portafolio y me gustaría hablar sobre una posición.",
  "contact.whatsappAria": "Contactar por WhatsApp",

  // Footer
  "footer.credit": "Diseñado y construido por",

  // Projects — agrupación por naturaleza del trabajo
  "projects.group.client": "Para clientes",
  "projects.group.product": "Productos propios",
  "projects.group.lab": "Laboratorio",
  "projects.carousel.label": "Proyectos, uno por vez",
  "projects.carousel.prev": "Proyecto anterior",
  "projects.carousel.next": "Proyecto siguiente",
  "projects.carousel.goto": "Ir al proyecto",
  "projects.carousel.position": "de",

  // Project detail page
  "project.back": "← Proyectos",
  "project.viewSource": "Ver código",
  "project.viewLive": "Ver en vivo",
  "project.liveSoon": "Demo próximamente",
  "project.codePrivate": "Código privado",
  "project.badge.live": "En vivo",
  "project.badge.working": "Funcionando",
  "project.badge.soon": "Próximamente",
  "project.badge.private": "Privado",
  "project.badge.code": "GitHub",
  "project.status.production": "En producción",
  "project.status.wip": "En desarrollo",
  "project.status.mvp": "MVP",
  "project.status.archived": "Archivado",
  "project.section.summary": "En resumen",
  "project.section.problem": "El Problema",
  "project.section.architecture": "Arquitectura",
  "project.section.stack": "Por qué este Stack",
  "project.section.challenges": "Desafíos Técnicos",
  "project.section.results": "Resultados",
  "project.section.learnings": "Aprendizajes",
  "project.testimonial": "Lo que dice el cliente",
  "project.video": "Demo en video",
  "project.screenshots": "Screenshots",
  "project.noScreenshots": "Screenshots en proceso",
  "project.notFound": "Proyecto no encontrado",
  "project.next": "Siguiente proyecto",
  "project.closeLightbox": "Cerrar",
  "project.prevImage": "Imagen anterior",
  "project.nextImage": "Imagen siguiente",
  "project.prev": "Proyecto anterior",

  // 404
  "notFound.title": "404",
  "notFound.message": "Página no encontrada",
  "notFound.back": "Volver al inicio",
} as const;

export type DictionaryKey = keyof typeof es;
