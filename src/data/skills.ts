import type { DictionaryKey } from "@/i18n/dictionaries/es";

/* Seis grupos, sin repeticiones: no agregar un grupo "Herramientas" que
   repita Docker/Nginx/Linux/MySQL, que ya están en DevOps y Bases de Datos.

   Las pastillas se renderizan sin ícono: el CDN de Simple Icons no tenía
   glifo para la mitad de estos nombres y las filas quedaban desalineadas. */
export const skillGroups: { labelKey: DictionaryKey; items: string[] }[] = [
  {
    labelKey: "skills.group.backend",
    items: ["Node.js", "TypeScript", "Fastify", "Express", "FastAPI", "Python", "REST APIs", "WebSockets", "JWT"],
  },
  {
    labelKey: "skills.group.databases",
    items: ["PostgreSQL", "MySQL", "PostGIS", "Prisma", "Drizzle ORM", "SQLAlchemy", "Stored Procedures", "Indexes"],
  },
  {
    labelKey: "skills.group.devops",
    items: ["Docker", "Docker Compose", "Nginx", "VPS", "Linux", "GitHub Actions", "Vercel", "Let's Encrypt", "Bash"],
  },
  {
    labelKey: "skills.group.frontend",
    items: ["React", "Next.js", "Astro", "SvelteKit", "Vite", "TanStack Query", "Redux Toolkit", "Zustand", "react-hook-form", "Zod", "Tailwind CSS"],
  },
  {
    labelKey: "skills.group.testing",
    items: ["Vitest", "Playwright", "ESLint", "TypeScript strict", "pnpm workspaces", "Turborepo"],
  },
  {
    labelKey: "skills.group.ai",
    items: ["Claude Code", "Codex CLI", "MCP", "Git hooks", "Code review"],
  },
];
