import { projects } from "@/data/projects";

const ArrowIcon = () => (
  <svg className="arrow-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7,7 17,7 17,17"/>
  </svg>
);

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">Proyectos</div>

      <div className="fade-in">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.githubUrl || "#"}
            target={p.githubUrl ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={p.image} alt={p.title} className="project-img" />
            <div>
              <div className="project-title">
                {p.title}
                {p.githubUrl && <ArrowIcon />}
              </div>
              <div className="project-desc">{p.description}</div>
              <div className="tag-row">
                {p.technologies.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
