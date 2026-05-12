export const es = {
  // Nav & section labels
  "nav.about":      "Sobre mí",
  "nav.experience": "Experiencia",
  "nav.projects":   "Proyectos",
  "nav.skills":     "Skills",
  "nav.contact":    "Contacto",

  // Sidebar
  "available":   "Disponible",
  "header.role": "FULLSTACK DEV",

  // About section paragraphs
  "about.p1": "Fullstack developer con foco en backend y DevOps. Diseño bases de datos normalizadas, construyo APIs RESTful escalables y automatizo procesos que resuelven problemas reales.",
  "about.p2": "Desplegué aplicaciones en VPS propios con dominio personalizado, SSL y Docker Compose. Llevo proyectos completos de punta a punta — desde el modelado de datos hasta el frontend con React.",
  "about.p3": "Graduado en Tecnicatura Universitaria en Programación, UTN La Rioja.",
  "about.downloadCV":         "Descargar CV",
  "about.stat.experience":    "años de exp.",
  "about.stat.projects":      "proyectos",
  "about.stat.clients":       "clientes reales",

  // Timeline
  "timeline.tab.work":      "Trabajo",
  "timeline.tab.education": "Educación",

  // Skills group labels
  "skills.group.backend":   "Backend",
  "skills.group.databases": "Bases de Datos",
  "skills.group.devops":    "DevOps & Infraestructura",
  "skills.group.tools":     "Herramientas",
  "skills.group.frontend":  "Frontend",

  // Contact
  "contact.text":     "Estoy disponible para trabajo freelance, proyectos de tiempo completo o colaboraciones. Si tenés algo en mente, escribime directamente.",
  "contact.location": "Pituil, La Rioja, Argentina · Disponible remoto",

  // Footer
  "footer.credit": "Diseñado y construido por",

  // Project detail page
  "project.back":                 "← Proyectos",
  "project.viewSource":           "Ver código",
  "project.viewLive":             "Ver demo",
  "project.status.production":    "En producción",
  "project.status.wip":           "En desarrollo",
  "project.status.mvp":           "MVP",
  "project.status.archived":      "Archivado",
  "project.section.problem":      "El Problema",
  "project.section.architecture": "Arquitectura",
  "project.section.stack":        "Por qué este Stack",
  "project.section.challenges":   "Desafíos Técnicos",
  "project.section.learnings":    "Aprendizajes",
  "project.video":                "Demo en video",
  "project.screenshots":          "Screenshots",
  "project.noScreenshots":        "Screenshots en proceso",
  "project.notFound":             "Proyecto no encontrado",
  "project.next":                 "Siguiente proyecto",

  // 404
  "notFound.title":   "404",
  "notFound.message": "Página no encontrada",
  "notFound.back":    "Volver al inicio",
} as const;

export type DictionaryKey = keyof typeof es;
