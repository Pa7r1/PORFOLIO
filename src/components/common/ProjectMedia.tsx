import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/i18n/LocaleContext";
import { pick } from "@/i18n/pick";
import Lightbox from "@/components/common/Lightbox";
import { toYoutubeEmbed } from "@/utils/youtubeEmbed";
import type { ProjectDetail } from "@/types";

/**
 * Media block of a case study. The data decides what renders — there is no flag
 * to keep in sync:
 *
 *   detail.screenshots only  → screenshot carousel + lightbox
 *   detail.videoUrl only     → YouTube embed
 *   both                     → carousel first, then the embed
 *   neither                  → "no screenshots yet" placeholder
 *
 * So switching a project from screenshots to video means deleting its
 * `screenshots` array and adding `videoUrl` in `src/data/projects.ts`.
 * An unrecognized video URL is treated as absent (toYoutubeEmbed returns null).
 */
export default function ProjectMedia({
  detail,
  title,
}: {
  detail: ProjectDetail;
  title: string;
}) {
  const { t, locale } = useLocale();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [canScroll, setCanScroll] = useState(false);

  const shots = detail.screenshots ?? [];
  const embedUrl = detail.videoUrl ? toYoutubeEmbed(detail.videoUrl) : null;

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
    // detail.screenshots is the stable module-level array; `shots` is a
    // fresh [] on every render when it's undefined, so don't depend on it.
  }, [detail.screenshots]);

  const scrollCarousel = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>(".shot");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = first ? first.getBoundingClientRect().width + gap : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      {shots.length > 0 && (
        <section className="detail-section fade-in">
          <h2 className="section-label">{t("project.screenshots")}</h2>
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
              {shots.map((shot, i) => (
                <figure key={i} className={`shot shot--${shot.orientation}`}>
                  <button
                    type="button"
                    className="shot-frame"
                    onClick={() => setLightboxIndex(i)}
                    aria-label={shot.caption ? pick(shot.caption, locale) : `${title} ${i + 1}`}
                  >
                    <span className="shot-chrome" aria-hidden="true" />
                    <img
                      src={shot.src}
                      alt={shot.caption ? pick(shot.caption, locale) : `${title} screenshot ${i + 1}`}
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
        </section>
      )}

      {embedUrl && (
        <section className="detail-section fade-in">
          <h2 className="section-label">{t("project.video")}</h2>
          <div className="detail-video-wrap">
            <iframe
              src={embedUrl}
              title={`${title} — ${t("project.video")}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="detail-video"
            />
          </div>
        </section>
      )}

      {shots.length === 0 && !embedUrl && (
        <section className="detail-section fade-in">
          <h2 className="section-label">{t("project.screenshots")}</h2>
          <div className="detail-screenshots-placeholder">
            <span>{t("project.noScreenshots")}</span>
          </div>
        </section>
      )}

      {lightboxIndex !== null && shots.length > 0 && (
        <Lightbox
          shots={shots}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
