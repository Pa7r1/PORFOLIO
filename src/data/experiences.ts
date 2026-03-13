import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    period: "Feb 2026\nPresente",
    title: "Backend Developer",
    company: "VJ-Barber · Freelance",
    description:
      "Sistema completo de gestión de barbería desde cero: API RESTful con FastAPI, base de datos MySQL normalizada con stored procedures y trigger. Desplegué en VPS con dominio, SSL y Docker Compose.",
    tags: ["FastAPI", "MySQL", "Docker", "Nginx", "VPS", "Linux"],
    type: "work",
  },
  {
    period: "Ago 2025\nDic 2025",
    title: "Backend Developer",
    company: "Modex · La Rioja",
    description:
      "Módulo ETL para carga masiva de datos desde XLSX y CSV con filtrado personalizado. Web scraping para asociar imágenes a productos automáticamente. Migré queries dispersas a stored procedures mejorando seguridad y rendimiento.",
    tags: ["Node.js", "Express", "MySQL", "ExcelJS", "PapaParse"],
    type: "work",
  },
  {
    period: "2023\nPresente",
    title: "Desarrollador Freelance",
    company: "Proyectos independientes",
    description:
      "APIs, sistemas de ventas con integración a WhatsApp, automatización de procesos, web scraping y despliegue de aplicaciones propias en producción.",
    tags: ["Node.js", "TypeScript", "React", "MySQL", "Docker"],
    type: "work",
  },
  {
    period: "2022\n2025",
    title: "Técnico Universitario en Programación",
    company: "UTN · Facultad Regional La Rioja",
    description:
      "Tecnologías de la Información. Desarrollo de software, bases de datos, redes y arquitectura de sistemas.",
    tags: [],
    type: "education",
  },
];
