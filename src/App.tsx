import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";

// i18n
import { useLocale } from "@/i18n/LocaleContext";
import { NAV } from "@/i18n/nav";

// Common
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LangSwitch from "@/components/common/LangSwitch";
import ThemeToggle from "@/components/common/ThemeToggle";

// Sections
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

// Data
import { personalInfo } from "@/data/personalInfo";
import { asset } from "@/utils/asset";

// ── ICONS ──────────────────────────────────────────────────
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

// ── TITULAR REVELADO ───────────────────────────────────────
/**
 * El titular entra línea por línea, con las palabras subiendo detrás de una
 * máscara.
 *
 * Las líneas NO existen en el marcado: las decide el ajuste de texto contra
 * `max-width: 19ch` y cambian con el idioma y con el ancho de la ventana. Por
 * eso el marcado es por PALABRA y el retardo se agrupa después, midiendo qué
 * máscaras comparten `offsetTop`. Partir las líneas a mano en el diccionario
 * habría fijado un corte que en móvil no es el que toca.
 */
function TitularRevelado({ texto }: { texto: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  /* Va en useLayoutEffect, no en useEffect: tiene que escribir los retardos
     antes del primer pintado o el primer fotograma sale con todas las
     palabras en la línea 0 y el escalonado se pierde. */
  useLayoutEffect(() => {
    const titular = ref.current;
    if (!titular) return;
    let linea = -1;
    let anterior = Number.NaN;
    titular.querySelectorAll<HTMLElement>(".mascara").forEach((mascara) => {
      if (mascara.offsetTop !== anterior) {
        linea += 1;
        anterior = mascara.offsetTop;
      }
      mascara.style.setProperty("--linea", String(linea));
    });
  }, [texto]);

  /* Los tramos impares son el énfasis: vienen marcados entre asteriscos en el
     diccionario (ver la clave `hero.headline`). */
  const tramos = texto.split(/\*(.+?)\*/);

  return (
    <h1 className="hero-lead" ref={ref}>
      {tramos.map((tramo, i) =>
        i % 2 ? (
          <em key={i}>{enmascarar(tramo)}</em>
        ) : (
          <Fragment key={i}>{enmascarar(tramo)}</Fragment>
        ),
      )}
    </h1>
  );
}

/**
 * Cada palabra se lleva su espacio siguiente DENTRO de la máscara. No es un
 * capricho: el subrayado del énfasis no se dibuja a través de una caja
 * `inline-block`, así que si el espacio quedara fuera el subrayado saldría
 * cortado entre palabra y palabra.
 */
function enmascarar(tramo: string) {
  return (
    tramo.match(/\S+\s*/g)?.map((palabra, i) => (
      <span className="mascara" key={i}>
        <span className="mascara-i">{palabra}</span>
      </span>
    )) ?? null
  );
}

// ── APP ────────────────────────────────────────────────────
export default function App() {
  const { t } = useLocale();
  const [activeSection, setActiveSection] = useState("about");
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

    // Force-activate the last section when scrolled near the bottom —
    // the observer's narrow band can miss short trailing sections.
    const lastId = NAV[NAV.length - 1]?.id;
    const onScroll = () => {
      if (!lastId) return;
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;
      if (nearBottom) setActiveSection(lastId);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
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
      {/* Skip-to-content (a11y) */}
      <a href="#main" className="skip-link">{t("skip.toContent")}</a>

      {/* Mobile header & bottom nav */}
      <Header activeSection={activeSection} />

      {/* Desktop top nav sticky */}
      <nav className="top-nav" aria-label="Primary">
        <a href="#main" className="top-nav-brand">
          {personalInfo.name.split(" ").slice(0, 2).join(" ")}
        </a>
        <div className="top-nav-links">
          {NAV.map(({ id, key }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
            >
              {t(key)}
            </a>
          ))}
        </div>
        <div className="top-nav-actions">
          <a href="https://github.com/Pa7r1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <MailIcon />
          </a>
          <ThemeToggle />
          <LangSwitch />
        </div>
      </nav>

      <main id="main" className="page">
        {/* Hero */}
        {/* Orden deliberado, de lo diferencial a lo genérico: primero la
            frase que no puede escribir otro portafolio, después la firma
            (nombre + rol + dónde) y al final la prueba (cifras), dentro de
            la primera pantalla. Entrada escalonada (.entra / -2 / -3 / -4):
            cada pieza aparece en el orden en que se lee. */}
        <section className="hero">
          <div className="hero-inner">
            {/* El titular resalta un tramo con peso + subrayado, no con
                color. El tramo viene marcado entre asteriscos en el
                diccionario. Entra línea por línea: ver TitularRevelado. */}
            <TitularRevelado texto={t("hero.headline")} />

            <p className="hero-sign entra entra-2">
              <span className="hero-name">{personalInfo.name}</span>
              <span className="hero-eyebrow">{t("hero.eyebrow")}</span>
            </p>

            <div className="hero-actions entra entra-3">
              <a
                href={asset("Cv1.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t("hero.ctaPrimary")}
              </a>
              <a href="#projects" className="btn-ghost">{t("hero.ctaSecondary")}</a>
            </div>

            <dl className="hero-stats entra entra-4">
              <div className="hero-stat">
                <dt className="stat-num">{personalInfo.yearsExperience}+</dt>
                <dd className="stat-label">{t("about.stat.experience")}</dd>
              </div>
              <div className="hero-stat">
                <dt className="stat-num">{personalInfo.productionSystems}</dt>
                <dd className="stat-label">{t("about.stat.production")}</dd>
              </div>
              <div className="hero-stat">
                <dt className="stat-num">{personalInfo.teamMonths}</dt>
                <dd className="stat-label">{t("about.stat.team")}</dd>
              </div>
            </dl>
          </div>
        </section>

        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
