import { useLocale } from "@/i18n/LocaleContext";
import { personalInfo } from "@/data/personalInfo";
import { asset } from "@/utils/asset";

const DownloadIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function About() {
  const { t } = useLocale();
  const cvUrl = asset("Cv1.pdf");

  return (
    <section id="about">
      <h2 className="section-label">{t("nav.about")}</h2>

      <div className="about-grid fade-in">
        {/* Photo */}
        <div className="about-photo-wrap">
          <img
            src={asset(personalInfo.profileImage)}
            alt={personalInfo.name}
            className="about-photo"
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent && !parent.querySelector(".about-photo-placeholder")) {
                const placeholder = document.createElement("div");
                placeholder.className = "about-photo-placeholder";
                placeholder.textContent = "👤";
                parent.appendChild(placeholder);
              }
            }}
          />
        </div>

        {/* Text */}
        <div className="about-text">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>

          <div className="about-actions">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <DownloadIcon />
              {t("about.downloadCV")}
            </a>
          </div>

          <div className="about-stats">
            <div>
              <div className="stat-num">{personalInfo.yearsExperience}+</div>
              <div className="stat-label">{t("about.stat.experience")}</div>
            </div>
            <div>
              <div className="stat-num">{personalInfo.githubProjects}+</div>
              <div className="stat-label">{t("about.stat.projects")}</div>
            </div>
            <div>
              <div className="stat-num">5+</div>
              <div className="stat-label">{t("about.stat.clients")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
