import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/LocaleContext";
import { NAV } from "@/i18n/nav";
import { personalInfo } from "@/data/personalInfo";

export default function Header({ activeSection }: { activeSection: string }) {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navIcon = (id: string) =>
    id === "about" ? "👤" :
    id === "experience" ? "💼" :
    id === "projects" ? "🔧" :
    id === "skills" ? "⚡" : "✉️";

  return (
    <>
      {/* Top bar — mobile only */}
      <div className={`mobile-header${scrolled ? " scrolled" : ""}`}>
        <span>{personalInfo.name.split(" ").slice(0, 2).join(" ")}</span>
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.1em" }}>
          {t("header.role")}
        </span>
      </div>

      {/* Bottom nav — mobile only */}
      <nav className="mobile-nav">
        {NAV.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "active" : ""}
          >
            <span style={{ fontSize: "1rem" }}>{navIcon(item.id)}</span>
            {t(item.key)}
          </a>
        ))}
      </nav>
    </>
  );
}
