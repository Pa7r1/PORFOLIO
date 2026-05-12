import type { DictionaryKey } from "@/i18n/dictionaries/es";
import { tools } from "./tools";

export const skillGroups: { labelKey: DictionaryKey; items: string[] }[] = [
  {
    labelKey: "skills.group.backend",
    items: ["Node.js", "Express", "Python", "FastAPI", "TypeScript", "JavaScript", "REST APIs"],
  },
  {
    labelKey: "skills.group.databases",
    items: ["MySQL", "PostgreSQL", "Stored Procedures", "Views", "Triggers", "Índices", "Aggregations"],
  },
  {
    labelKey: "skills.group.devops",
    items: ["Docker", "Docker Compose", "Nginx", "VPS", "Linux", "Bash", "SSL/HTTPS", "tmux"],
  },
  {
    labelKey: "skills.group.tools",
    items: tools.map((t) => t.name),
  },
  {
    labelKey: "skills.group.frontend",
    items: ["React", "Vite", "Next.js", "SvelteKit", "Tailwind CSS", "HTML5", "CSS3"],
  },
];
