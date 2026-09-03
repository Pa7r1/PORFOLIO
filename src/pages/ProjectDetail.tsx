import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";
import { pick } from "@/i18n/pick";
import { projects } from "@/data/projects";
import ProjectMedia from "@/components/common/ProjectMedia";
import ThemeToggle from "@/components/common/ThemeToggle";
import LangSwitch from "@/components/common/LangSwitch";
import { useDocumentMeta } from "@/utils/useDocumentMeta";
import { codeState } from "@/utils/projectLinks";
import type { DictionaryKey } from "@/i18n/dictionaries/es";

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const LockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t, locale } = useLocale();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Fade-in on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.08 }
    );
    const els = document.querySelectorAll(".fade-in");
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [slug]);

  const project = projects.find((p) => p.slug === slug);

  useDocumentMeta({
    title: project?.title ?? t("project.fallbackTitle"),
    description: project ? pick(project.tagline, locale) : undefined,
  });

  if (!project || !project.detail) {
    return (
      <>
        <div className="detail-not-found">
          <p>{t("project.notFound")}</p>
          <Link to="/" className="not-found-back">{t("project.back")}</Link>
        </div>
      </>
    );
  }

  const d = project.detail;
  const statusKey = `project.status.${d.status}` as DictionaryKey;
  const code = codeState(project);

  const detailProjects = projects.filter((p) => p.hasDetail);
  const currentIndex = detailProjects.findIndex((p) => p.slug === slug);
  const next = detailProjects.length > 1
    ? detailProjects[(currentIndex + 1) % detailProjects.length]
    : null;
  const prev = detailProjects.length > 1
    ? detailProjects[(currentIndex - 1 + detailProjects.length) % detailProjects.length]
    : null;

  return (
    <>
      <div className="detail-wrapper">
        {/* Top navigation bar */}
        <div className="detail-topbar">
          <Link to="/" className="detail-back">{t("project.back")}</Link>
          <div className="detail-topbar-actions">
            <ThemeToggle />
            <LangSwitch />
          </div>
        </div>

        {/* Hero */}
        <header className="detail-hero fade-in">
          <div className="detail-meta">
            <span className="detail-year">{d.year}</span>
            <span className={`detail-status detail-status--${d.status}`}>
              {t(statusKey)}
            </span>
          </div>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-tagline">{pick(project.tagline, locale)}</p>
          <div className="tag-row detail-tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
          <div className="detail-links">
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalIcon />
                {t("project.viewLive")}
              </a>
            ) : (
              <span className="btn-muted" aria-disabled="true">
                <ExternalIcon />
                {t("project.liveSoon")}
              </span>
            )}
            {code === "public" && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <GithubIcon />
                {t("project.viewSource")}
              </a>
            )}
            {code === "private" && (
              <span className="btn-muted" aria-disabled="true">
                <LockIcon />
                {t("project.codePrivate")}
              </span>
            )}
          </div>
        </header>

        {/* Plain-language summary (client-facing layer) */}
        {d.summary && (
          <section className="detail-summary fade-in">
            <h2 className="section-label">{t("project.section.summary")}</h2>
            <p className="detail-summary-text">{pick(d.summary, locale)}</p>
          </section>
        )}

        {/* Case study content */}
        <div className="detail-content">
          <section className="detail-section fade-in">
            <h2 className="section-label">{t("project.section.problem")}</h2>
            <p className="detail-body">{pick(d.problem, locale)}</p>
          </section>

          <section className="detail-section fade-in">
            <h2 className="section-label">{t("project.section.architecture")}</h2>
            <p className="detail-body">{pick(d.architecture, locale)}</p>
          </section>

          <section className="detail-section fade-in">
            <h2 className="section-label">{t("project.section.stack")}</h2>
            <p className="detail-body">{pick(d.stackRationale, locale)}</p>
          </section>

          {d.results && d.results.length > 0 && (
            <section className="detail-section fade-in">
              <h2 className="section-label">{t("project.section.results")}</h2>
              <ul className="detail-results">
                {d.results.map((r, i) => (
                  <li key={i} className="detail-result-item">
                    <span className="detail-result-check" aria-hidden="true">✓</span>
                    <span>{pick(r, locale)}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {d.testimonial && (
            <section className="detail-section fade-in">
              <h2 className="section-label">{t("project.testimonial")}</h2>
              <blockquote className="detail-testimonial">
                <p className="detail-testimonial-quote">“{pick(d.testimonial.quote, locale)}”</p>
                <footer className="detail-testimonial-author">
                  {d.testimonial.author}
                  {d.testimonial.role && (
                    <span className="detail-testimonial-role"> · {pick(d.testimonial.role, locale)}</span>
                  )}
                </footer>
              </blockquote>
            </section>
          )}

          <section className="detail-section fade-in">
            <h2 className="section-label">{t("project.section.challenges")}</h2>
            <ul className="detail-challenges">
              {d.challenges.map((c, i) => (
                <li key={i} className="detail-challenge-item">
                  <span className="detail-challenge-dot" />
                  <span>{pick(c, locale)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="detail-section fade-in">
            <h2 className="section-label">{t("project.section.learnings")}</h2>
            <p className="detail-body">{pick(d.learnings, locale)}</p>
          </section>

          <ProjectMedia detail={d} title={project.title} />
        </div>

        {/* Prev / next project */}
        {detailProjects.length > 1 && (
          <nav className="detail-next fade-in" aria-label={t("project.next")}>
            {prev && (
              <Link to={`/projects/${prev.slug}`} className="detail-next-link detail-next-link--prev">
                <span className="detail-next-label">← {t("project.prev")}</span>
                <span className="detail-next-title">{prev.title}</span>
              </Link>
            )}
            {next && (
              <Link to={`/projects/${next.slug}`} className="detail-next-link detail-next-link--next">
                <span className="detail-next-label">{t("project.next")} →</span>
                <span className="detail-next-title">{next.title}</span>
              </Link>
            )}
          </nav>
        )}
      </div>
    </>
  );
}
