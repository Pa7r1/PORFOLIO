import { useState } from "react";
import { useLocale } from "@/i18n/LocaleContext";
import { pick } from "@/i18n/pick";
import { experiences } from "@/data/experiences";

export default function Timeline() {
  const { t, locale } = useLocale();
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const filtered = experiences.filter((e) => e.type === activeTab);

  return (
    <section id="experience">
      <h2 className="section-label">{t("nav.experience")}</h2>

      {/* Tabs */}
      <div className="timeline-tabs">
        {(["work", "education"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`timeline-tab${activeTab === tab ? " active" : ""}`}
            aria-pressed={activeTab === tab}
          >
            {tab === "work" ? t("timeline.tab.work") : t("timeline.tab.education")}
          </button>
        ))}
      </div>

      <div className="fade-in">
        {filtered.map((exp, i) => (
          <div key={i} className="exp-card">
            <div className="exp-period">{exp.period}</div>
            <div>
              <div className="exp-title">{pick(exp.title, locale)}</div>
              <div className="exp-company">{exp.company}</div>
              {exp.description && (
                <div className="exp-desc">{pick(exp.description, locale)}</div>
              )}
              {exp.tags && exp.tags.length > 0 && (
                <div className="tag-row">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
