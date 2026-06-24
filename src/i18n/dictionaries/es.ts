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
  "hero.headline":
    "Convierto la operación de tu negocio en software a medida, eficiente y listo para usar.",
  "hero.subline":
    "Desarrollador Full Stack · 3+ años · proyectos reales de clientes en producción",
  "hero.ctaPrimary": "Hablemos de tu proyecto",
  "hero.ctaSecondary": "Ver proyectos",

  // About section paragraphs
  "about.p1":
    "Soy desarrollador Full Stack, formado en la UTN La Rioja. Construyo software que resuelve problemas concretos de negocio y queda funcionando de verdad, no solo en una demo.",
  "about.p2":
    "Gestiono el ciclo completo de tu software: desde entender la necesidad de tu negocio hasta entregar la aplicación lista para usar en internet. Al centralizar todo el desarrollo conmigo, evitás intermediarios, ahorrás tiempo y garantizás un resultado coherente.",
  "about.p3":
    "He ayudado a negocios a dejar atrás el papel y las planillas de Excel, transformando su gestión diaria en plataformas digitales organizadas y automatizadas. Estoy disponible tanto para liderar proyectos independientes como para integrarme a equipos de desarrollo establecidos.",
  "about.downloadCV": "Descargar CV",
  "about.stat.experience": "años de exp.",
  "about.stat.projects": "proyectos",
  "about.stat.clients": "clientes",

  // Timeline
  "timeline.tab.work": "Trabajo",
  "timeline.tab.education": "Educación",

  // Skills group labels
  "skills.group.backend": "Backend",
  "skills.group.databases": "Bases de Datos",
  "skills.group.devops": "DevOps & Infraestructura",
  "skills.group.tools": "Herramientas",
  "skills.group.frontend": "Frontend",

  // Contact
  "contact.text":
    "¿Tenés un proyecto o una idea entre manos? Ya sea una solución a medida para tu negocio o sumarme a tu equipo, contame qué necesitás y te respondo el mismo día.",
  "contact.cta": "Escribime por WhatsApp",
  "contact.ctaMicro": "Respuesta en el día · primera consulta sin compromiso",
  "contact.location": "Pituil, La Rioja, Argentina · Disponible solo en remoto",
  "contact.whatsappMessage":
    "¡Hola Patricio! Vi tu portafolio y me gustaría hablar sobre un proyecto.",
  "contact.whatsappAria": "Contactar por WhatsApp",

  // Footer
  "footer.credit": "Diseñado y construido por",

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

  // 404
  "notFound.title": "404",
  "notFound.message": "Página no encontrada",
  "notFound.back": "Volver al inicio",
} as const;

export type DictionaryKey = keyof typeof es;
