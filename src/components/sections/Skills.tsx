import { tools } from "@/data/tools";

// Skill groups defined here — no percentages, just tags grouped by category
const skillGroups = [
  {
    label: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI", "TypeScript", "JavaScript", "REST APIs"],
  },
  {
    label: "Bases de Datos",
    items: ["MySQL", "Stored Procedures", "Views", "Triggers", "Índices", "Aggregations"],
  },
  {
    label: "DevOps & Infraestructura",
    items: ["Docker", "Docker Compose", "Nginx", "VPS", "Linux", "Bash", "SSL/HTTPS", "tmux"],
  },
  {
    label: "Herramientas",
    items: tools.map((t) => t.name),
  },
  {
    label: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "HTML5", "CSS3"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">Skills</div>

      <div className="fade-in">
        {skillGroups.map((group) => (
          <div key={group.label} className="skills-group">
            <div className="skills-group-label">{group.label}</div>
            <div>
              {group.items.map((item) => (
                <span key={item} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
