import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";
import { pick } from "@/i18n/pick";
import { projects } from "@/data/projects";
import Lightbox from "@/components/common/Lightbox";
import ParticlesBackground from "@/components/common/ParticlesBackground";
import ThemeToggle from "@/components/common/ThemeToggle";
import LangSwitch from "@/components/common/LangSwitch";
import { useDocumentMeta } from "@/utils/useDocumentMeta";
import { toYoutubeEmbed } from "@/utils/youtubeEmbed";
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

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t, locale } = useLocale();
  const cursorRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Show carousel arrows only when the track actually overflows.
  // Measured once + on resize (no per-frame / scroll-driven work).
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => setCanScroll(el.scrollWidth > el.clientWidth + 1);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [slug]);

  const scrollCarousel = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>(".shot");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = first ? first.getBoundingClientRect().width + gap : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  // Cursor glow follow
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top  = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

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
    title: project?.title ?? "Proyecto",
    description: project ? pick(project.tagline, locale) : undefined,
  });

  if (!project || !project.detail) {
    return (
      <>
        <ParticlesBackground />
        <div className="detail-not-found">
          <p>{t("project.notFound")}</p>
          <Link to="/" className="not-found-back">{t("project.back")}</Link>
        </div>
      </>
    );
  }

  const d = project.detail;
  const statusKey = `project.status.${d.status}` as DictionaryKey;

  const detailProjects = projects.filter((p) => p.hasDetail);
  const currentIndex = detailProjects.findIndex((p) => p.slug === slug);
  const next = detailProjects.length > 1
    ? detailProjects[(currentIndex + 1) % detailProjects.length]
    : null;

  return (
    <>
      <ParticlesBackground />
      <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />

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
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <GithubIcon />
                {t("project.viewSource")}
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalIcon />
                {t("project.viewLive")}
              </a>
            )}
          </div>
        </header>

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

          {d.videoUrl && (() => {
            const embedUrl = toYoutubeEmbed(d.videoUrl);
            return embedUrl ? (
              <section className="detail-section fade-in">
                <h2 className="section-label">{t("project.video")}</h2>
                <div className="detail-video-wrap">
                  <iframe
                    src={embedUrl}
                    title={`${project.title} — demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="detail-video"
                  />
                </div>
              </section>
            ) : null;
          })()}

          <section className="detail-section fade-in">
            <h2 className="section-label">{t("project.screenshots")}</h2>
            {d.screenshots && d.screenshots.length > 0 ? (
              <div className={`carousel${canScroll ? " carousel--scrollable" : ""}`}>
                <button
                  type="button"
                  className="carousel-arrow carousel-arrow--prev"
                  aria-label={t("project.prevImage")}
                  onClick={() => scrollCarousel(-1)}
                >
                  ‹
                </button>
                <div
                  className="detail-screenshots"
                  ref={scrollerRef}
                  role="region"
                  aria-label={t("project.screenshots")}
                  tabIndex={0}
                >
                  {d.screenshots.map((shot, i) => (
                  <figure key={i} className={`shot shot--${shot.orientation}`}>
                    <button
                      type="button"
                      className="shot-frame"
                      onClick={() => setLightboxIndex(i)}
                      aria-label={shot.caption ? pick(shot.caption, locale) : `${project.title} ${i + 1}`}
                    >
                      <span className="shot-chrome" aria-hidden="true" />
                      <img
                        src={shot.src}
                        alt={shot.caption ? pick(shot.caption, locale) : `${project.title} screenshot ${i + 1}`}
                        className="shot-img"
                        loading="lazy"
                        decoding="async"
                        onLoad={(e) => e.currentTarget.classList.add("is-loaded")}
                      />
                    </button>
                    {shot.caption && (
                      <figcaption className="shot-caption">{pick(shot.caption, locale)}</figcaption>
                    )}
                  </figure>
                  ))}
                </div>
                <button
                  type="button"
                  className="carousel-arrow carousel-arrow--next"
                  aria-label={t("project.nextImage")}
                  onClick={() => scrollCarousel(1)}
                >
                  ›
                </button>
              </div>
            ) : (
              <div className="detail-screenshots-placeholder">
                <span>{t("project.noScreenshots")}</span>
              </div>
            )}
          </section>
        </div>

        {/* Next project */}
        {next && (
          <div className="detail-next fade-in">
            <Link to={`/projects/${next.slug}`} className="detail-next-link">
              <span className="detail-next-label">{t("project.next")} →</span>
              <span className="detail-next-title">{next.title}</span>
            </Link>
          </div>
        )}
      </div>

      {d.screenshots && lightboxIndex !== null && (
        <Lightbox
          shots={d.screenshots}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
