import { useState } from "react";
import { experiences } from "@/data/experiences";

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const filtered = experiences.filter((e) => e.type === activeTab);

  return (
    <section id="experience">
      <div className="section-label">Experiencia</div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.8rem" }}>
        {(["work", "education"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              fontFamily: "var(--mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.35rem 0.9rem",
              borderRadius: "4px",
              border: "1px solid",
              cursor: "pointer",
              transition: "all 0.2s",
              background: activeTab === tab ? "var(--accent-glow)" : "transparent",
              borderColor: activeTab === tab ? "var(--accent-line)" : "var(--border)",
              color: activeTab === tab ? "var(--accent)" : "var(--text-dim)",
            }}
          >
            {tab === "work" ? "Trabajo" : "Educación"}
          </button>
        ))}
      </div>

      <div className="fade-in">
        {filtered.map((exp, i) => (
          <div key={i} className="exp-card">
            <div className="exp-period">{exp.period}</div>
            <div>
              <div className="exp-title">{exp.title}</div>
              <div className="exp-company">{exp.company}</div>
              {exp.description && <div className="exp-desc">{exp.description}</div>}
              {exp.tags && exp.tags.length > 0 && (
                <div className="tag-row">
                  {exp.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
