import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "VJ-Barber — Sistema de Gestión",
    description:
      "Sistema web/móvil completo para gestión de barbería: agendamiento de turnos, caja, reportes, gestión de empleados y múltiples sucursales. Desplegado en VPS con dominio, SSL y Docker Compose.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=350&fit=crop",
    technologies: ["FastAPI", "MySQL", "React", "Docker", "Nginx", "VPS"],
    githubUrl: "https://github.com/Pa7r1",
  },
  {
    id: "2",
    title: "Sistema de Ventas + WhatsApp",
    description:
      "Plataforma de e-commerce con integración a WhatsApp. Carga masiva desde XLSX, web scraping para imágenes, roles y permisos JWT, procedimientos almacenados y control de stock.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=350&fit=crop",
    technologies: ["Node.js", "TypeScript", "MySQL", "Express", "JWT"],
    githubUrl: "https://github.com/Pa7r1",
  },
  {
    id: "3",
    title: "Descargador Multimedia",
    description:
      "App de escritorio local con cola de descargas paralelas de YouTube. Soporte para playlists, conversión automática mp3/mp4, control de progreso en tiempo real y limpieza de temporales.",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=350&fit=crop",
    technologies: ["Node.js", "Express", "React", "yt-dlp"],
    githubUrl: "https://github.com/Pa7r1",
  },
  {
    id: "4",
    title: "Modex — ETL & Web Scraping",
    description:
      "Módulo de carga masiva de datos desde XLSX/CSV con filtrado personalizado. Web scraping para asociar imágenes a productos automáticamente. Migración de queries a stored procedures.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=350&fit=crop",
    technologies: ["Express", "MySQL", "React", "ExcelJS", "PapaParse"],
    githubUrl: "https://github.com/Pa7r1",
  },
];
