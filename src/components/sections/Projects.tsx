import { Link } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";
import { pick } from "@/i18n/pick";
import { projects } from "@/data/projects";

const ArrowIcon = () => (
  <svg className="arrow-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7,7 17,7 17,17"/>
  </svg>
);

const GithubBadge = () => (
  <span className="project-source-badge" aria-hidden="true">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
    GitHub
  </span>
);

export default function Projects() {
  const { t, locale } = useLocale();
  return (
    <section id="projects">
      <h2 className="section-label">{t("nav.projects")}</h2>

      <div className="fade-in">
        {projects.map((p) => {
          const cardContent = (
            <>
              <img src={p.image} alt={p.title} className="project-img" loading="lazy" decoding="async" />
              <div>
                <div className="project-title">
                  {p.title}
                  <ArrowIcon />
                </div>
                <div className="project-desc">{pick(p.description, locale)}</div>
                <div className="tag-row">
                  {p.technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
                {!p.hasDetail && p.githubUrl && (
                  <div className="project-ext-links">
                    <GithubBadge />
                  </div>
                )}
              </div>
            </>
          );

          if (p.hasDetail) {
            return (
              <Link key={p.id} to={`/projects/${p.slug}`} className="project-card">
                {cardContent}
              </Link>
            );
          }

          const externalUrl = p.githubUrl || p.liveUrl;
          return (
            <a
              key={p.id}
              href={externalUrl || "#"}
              target={externalUrl ? "_blank" : undefined}
              rel={externalUrl ? "noopener noreferrer" : undefined}
              className="project-card"
            >
              {cardContent}
            </a>
          );
        })}
      </div>
    </section>
  );
}
