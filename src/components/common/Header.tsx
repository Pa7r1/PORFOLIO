import { useEffect, useState } from "react";

const NAV = [
  { id: "about",      label: "Sobre mí" },
  { id: "experience", label: "Experiencia" },
  { id: "projects",   label: "Proyectos" },
  { id: "skills",     label: "Skills" },
  { id: "contact",    label: "Contacto" },
];

// Mobile header (top bar + bottom nav) — shown only on small screens via CSS
export default function Header({ activeSection }: { activeSection: string }) {
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
        <span>Patricio Carpio</span>
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.1em" }}>
          BACKEND DEV
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
            <span style={{ fontSize: "1rem" }}>
              {item.id === "about" ? "👤" : item.id === "experience" ? "💼" : item.id === "projects" ? "🔧" : item.id === "skills" ? "⚡" : "✉️"}
            </span>
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
