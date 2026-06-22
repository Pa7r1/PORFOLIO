import { useCallback, useEffect } from "react";
import { useLocale } from "@/i18n/LocaleContext";
import { pick } from "@/i18n/pick";
import type { Screenshot } from "@/types";

interface LightboxProps {
  shots: Screenshot[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ shots, index, onClose, onNavigate }: LightboxProps) {
  const { t, locale } = useLocale();
  const count = shots.length;
  const shot = shots[index];

  const go = useCallback(
    (dir: number) => onNavigate((index + dir + count) % count),
    [index, count, onNavigate],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    // Block body scroll while open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [go, onClose]);

  if (!shot) return null;

  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <button type="button" className="lightbox-close" aria-label={t("project.closeLightbox")} onClick={onClose}>
        ✕
      </button>

      {count > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-nav--prev"
          aria-label={t("project.prevImage")}
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
        >
          ‹
        </button>
      )}

      <figure className={`lightbox-figure lightbox-figure--${shot.orientation}`} onClick={(e) => e.stopPropagation()}>
        <img
          src={shot.src}
          alt={shot.caption ? pick(shot.caption, locale) : `screenshot ${index + 1}`}
          className="lightbox-img"
          decoding="async"
        />
        {shot.caption && (
          <figcaption className="lightbox-caption">
            {pick(shot.caption, locale)}
            {count > 1 && <span className="lightbox-counter"> · {index + 1}/{count}</span>}
          </figcaption>
        )}
      </figure>

      {count > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-nav--next"
          aria-label={t("project.nextImage")}
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
        >
          ›
        </button>
      )}
    </div>
  );
}
