import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    period: "Feb 2026\nPresente",
    title: {
      es: "Fullstack Developer",
      en: "Fullstack Developer",
    },
    company: "VJ-Barber · Freelance",
    description: {
      es: "Sistema completo de gestión de barbería desde cero: API RESTful con FastAPI, base de datos MySQL normalizada con stored procedures y triggers. Desplegué en VPS con dominio, SSL y Docker Compose.",
      en: "Complete barber shop management system built from scratch: RESTful API with FastAPI, normalized MySQL database with stored procedures and triggers. Deployed on VPS with custom domain, SSL, and Docker Compose.",
    },
    tags: ["FastAPI", "MySQL", "Docker", "Nginx", "VPS", "Linux"],
    type: "work",
  },
  {
    period: "Ago 2025\nDic 2025",
    title: {
      es: "Backend Developer",
      en: "Backend Developer",
    },
    company: "Modex · La Rioja",
    description: {
      es: "Módulo ETL para carga masiva de datos desde XLSX y CSV con filtrado personalizado. Web scraping para asociar imágenes a productos automáticamente. Migré queries dispersas a stored procedures mejorando seguridad y rendimiento.",
      en: "ETL module for bulk data loading from XLSX and CSV with custom filtering. Web scraping to automatically associate images with products. Migrated scattered queries to stored procedures, improving security and performance.",
    },
    tags: ["Node.js", "Express", "MySQL", "ExcelJS", "PapaParse"],
    type: "work",
  },
  {
    period: "2023\nPresente",
    title: {
      es: "Desarrollador Freelance",
      en: "Freelance Developer",
    },
    company: "Proyectos independientes",
    description: {
      es: "APIs, sistemas de ventas con integración a WhatsApp, automatización de procesos, web scraping y despliegue de aplicaciones propias en producción.",
      en: "APIs, sales systems with WhatsApp integration, process automation, web scraping, and deploying own applications to production.",
    },
    tags: ["Node.js", "TypeScript", "React", "MySQL", "Docker"],
    type: "work",
  },
  {
    period: "2022\n2025",
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
