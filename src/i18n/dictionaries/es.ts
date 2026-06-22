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

  // About section paragraphs
  "about.p1":
    "Desarrollador Full Stack con formación en la UTN (Universidad Tecnologica Nacional) La Rioja. Mi enfoque está en la autonomía y en la entrega de productos listos para producción, combinando una arquitectura lógica sólida con interfaces de usuario funcionales.",
  "about.p2":
    "Tengo la capacidad de gestionar el ciclo completo de una aplicación de punta a punta. Me encargo desde el modelado de datos y el desarrollo del backend, hasta el frontend y el despliegue optimizado en servidores propios.",
  "about.p3":
    "Ya sea para integrarme a un equipo corporativo de calidad o para resolver proyectos individuales, me muevo con fluidez en todas las capas del software para transformar ideas en soluciones reales y estables.",
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
    "Estoy disponible para trabajo freelance, proyectos de tiempo completo o colaboraciones. Si tenés algo en mente, escribime directamente.",
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
  "project.badge.soon": "Próximamente",
  "project.badge.private": "Privado",
  "project.badge.code": "GitHub",
  "project.status.production": "En producción",
  "project.status.wip": "En desarrollo",
  "project.status.mvp": "MVP",
  "project.status.archived": "Archivado",
  "project.section.problem": "El Problema",
  "project.section.architecture": "Arquitectura",
  "project.section.stack": "Por qué este Stack",
  "project.section.challenges": "Desafíos Técnicos",
  "project.section.learnings": "Aprendizajes",
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
