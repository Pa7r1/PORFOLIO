import { useEffect, useRef, useState } from "react";
import "./App.css";

// Common
import ParticlesBackground from "@/components/common/ParticlesBackground";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

// Sections
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

// Data
import { personalInfo } from "@/data/personalInfo";

// ── ICONS ─────────────────────────────────────────────────
const GithubIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const MailIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const NAV = [
  { id: "about",      label: "Sobre mí" },
  { id: "experience", label: "Experiencia" },
  { id: "projects",   label: "Proyectos" },
  { id: "skills",     label: "Skills" },
  { id: "contact",    label: "Contacto" },
];

// ── APP ────────────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const cursorRef = useRef<HTMLDivElement>(null);

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

  // Scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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
  }, []);

  return (
    <>
      {/* Ambient particles */}
      <ParticlesBackground />

      {/* Cursor glow */}
      <div ref={cursorRef} className="cursor-glow" />

      {/* Mobile header & bottom nav */}
      <Header activeSection={activeSection} />

      {/* ── MAIN LAYOUT ── */}
      <div className="layout">

        {/* ── SIDEBAR ── */}
        <aside className="sidebar">
          <div>
            {/* Available indicator */}
            <div className="available-badge">
              <span className="available-dot" />
              Disponible
            </div>

            {/* Name & role */}
            <h1>{personalInfo.name.split(" ").slice(0, 2).join("\n")}</h1>
            <div className="role">{personalInfo.title}</div>
            <p className="bio">{personalInfo.description}</p>

            {/* Desktop nav */}
            <nav className="sidebar-nav">
              {NAV.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                >
                  <span className="nav-line" />
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div className="sidebar-socials">
            <a href="https://github.com/Pa7r1" target="_blank" rel="noopener noreferrer" title="GitHub">
              <GithubIcon />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href={`mailto:${personalInfo.email}`} title="Email">
              <MailIcon />
            </a>
          </div>
        </aside>

        {/* ── MAIN PANEL ── */}
        <main className="main-panel">
          <About />
          <Timeline />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
