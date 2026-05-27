/**
 * Maps a skill display-name to a Simple Icons slug.
 * Returns undefined for skills that aren't a recognizable brand
 * (e.g. "Stored Procedures", "REST APIs", "VPS").
 *
 * Slugs follow simpleicons.org naming. URL:
 *   https://cdn.simpleicons.org/<slug>
 */
const SKILL_SLUGS: Record<string, string> = {
  // Backend / languages
  "Node.js":      "nodedotjs",
  "Express":      "express",
  "Python":       "python",
  "FastAPI":      "fastapi",
  "TypeScript":   "typescript",
  "JavaScript":   "javascript",

  // Databases
  "MySQL":        "mysql",
  "PostgreSQL":   "postgresql",

  // DevOps
  "Docker":           "docker",
  "Docker Compose":   "docker",
  "Nginx":            "nginx",
  "Linux":            "linux",
  "Bash":             "gnubash",
  "SSL/HTTPS":        "letsencrypt",
  "tmux":             "tmux",

  // Tools (also match the tools.ts entries)
  "VS Code":                    "visualstudiocode",
  "Git & GitHub":               "github",
  "Docker & Docker Compose":    "docker",
  "MySQL Workbench":            "mysql",
  "Postman / Thunder Client":   "postman",
  "Linux (Ubuntu/Debian)":      "ubuntu",
  "tmux + Bash scripts":        "gnubash",

  // Frontend
  "React":         "react",
  "Vite":          "vite",
  "Next.js":       "nextdotjs",
  "SvelteKit":     "svelte",
  "Tailwind CSS":  "tailwindcss",
  "HTML5":         "html5",
  "CSS3":          "css3",
};

export function skillIconUrl(name: string): string | undefined {
  const slug = SKILL_SLUGS[name];
  return slug ? `https://cdn.simpleicons.org/${slug}` : undefined;
}
