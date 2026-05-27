import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/LocaleContext";
import { NAV } from "@/i18n/nav";
import { personalInfo } from "@/data/personalInfo";
import ThemeToggle from "@/components/common/ThemeToggle";
import LangSwitch from "@/components/common/LangSwitch";

const NavIcon = ({ id }: { id: string }) => {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (id) {
    case "about":      return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2"/></svg>;
    case "experience": return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>;
    case "projects":   return <svg {...common}><path d="M3 7h6l2 2h10v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/></svg>;
    case "skills":     return <svg {...common}><polyline points="13 2 4 13 12 13 11 22 20 11 12 11 13 2"/></svg>;
    default:           return <svg {...common}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
  }
};

export default function Header({ activeSection }: { activeSection: string }) {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar — mobile only */}
      <div className={`mobile-header${scrolled ? " scrolled" : ""}`}>
        <span className="mobile-header-brand">
          {personalInfo.name.split(" ").slice(0, 2).join(" ")}
        </span>
        <div className="mobile-header-actions">
          <ThemeToggle />
          <LangSwitch />
        </div>
      </div>

      {/* Bottom nav — mobile only */}
      <nav className="mobile-nav" aria-label="Primary mobile">
        {NAV.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "active" : ""}
            aria-current={activeSection === item.id ? "true" : undefined}
          >
            <NavIcon id={item.id} />
            <span>{t(item.key)}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
