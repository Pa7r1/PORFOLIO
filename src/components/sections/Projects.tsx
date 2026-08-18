import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";
import { pick } from "@/i18n/pick";
import { projects } from "@/data/projects";
import { codeState } from "@/utils/projectLinks";
import type { DictionaryKey } from "@/i18n/dictionaries/es";
import type { Project } from "@/types";

const ArrowIcon = () => (
  <svg className="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7,7 17,7 17,17"/>
  </svg>
);

const GhMini = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LockMini = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 5l-7 7 7 7" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5l7 7-7 7" />
  </svg>
);

/** Los tres tipos de trabajo, como chip de cada tarjeta. Ya no encabezan
 *  grupos —con una sola tarjeta a la vista no hay grupos que encabezar— ni
 *  alimentan un filtro: son el dato de qué clase de trabajo es cada uno. */
const KIND_LABEL: Record<Project["kind"], DictionaryKey> = {
  client: "projects.group.client",
  product: "projects.group.product",
  lab: "projects.group.lab",
};

/** Envuelve la tarjeta en el destino correcto: caso de estudio interno
 *  si lo hay, si no el enlace externo que exista. */
function ProjectLink({ project, className, off, children }: { project: Project; className: string; off: boolean; children: ReactNode }) {
  /* Fuera del centro el enlace sale del orden de tabulación y del árbol
     de accesibilidad: solo se puede llegar a él centrando la tarjeta
     primero, que es también lo que hace el click (ver .pcar-cell). */
  const tabIndex = off ? -1 : undefined;
  /* Un enlace es arrastrable por defecto, y arrastrarlo con el ratón dispara
     el drag-and-drop nativo: el navegador se queda con el puntero, cancela la
     secuencia y el carrusel no se mueve. Con el dedo no ocurre, así que el
     fallo solo aparece con ratón. Se apaga acá y no con preventDefault en
     `pointerdown`, que además se llevaría por delante el click de navegación. */
  if (project.hasDetail) {
    return <Link to={`/projects/${project.slug}`} className={className} tabIndex={tabIndex} aria-hidden={off || undefined} draggable={false}>{children}</Link>;
  }
  const externalUrl = project.githubUrl || project.liveUrl;
  return (
    <a
      href={externalUrl || "#"}
      target={externalUrl ? "_blank" : undefined}
      rel={externalUrl ? "noopener noreferrer" : undefined}
      className={className}
      tabIndex={tabIndex}
      aria-hidden={off || undefined}
      draggable={false}
    >
      {children}
    </a>
  );
}

function ProjectBadges({ project }: { project: Project }) {
  const { t } = useLocale();
  const code = codeState(project);
  const avail = project.availability ?? (project.liveUrl ? "live" : "soon");
  const wip = project.detail?.status === "wip";

  return (
    <>
      {/* "En desarrollo" va primero y con el acento de la casa: un
          reclutador tiene que saber antes de leer nada que Upward y
          MundoRider todavía no están terminados. */}
      {wip && <span className="badge badge--wip">{t("project.status.wip")}</span>}
      {avail === "live" && (
        <span className="badge badge--live">
          <span className="badge-dot" aria-hidden="true" />
          {t("project.badge.live")}
        </span>
      )}
      {avail === "working" && !wip && (
        <span className="badge badge--working">{t("project.badge.working")}</span>
      )}
      {avail === "soon" && <span className="badge badge--soon">{t("project.badge.soon")}</span>}
      {code === "public" && (
        <span className="badge badge--code"><GhMini />{t("project.badge.code")}</span>
      )}
      {code === "private" && (
        <span className="badge badge--private"><LockMini />{t("project.badge.private")}</span>
      )}
    </>
  );
}

function ProjectCard({ project, eager, off }: { project: Project; eager: boolean; off: boolean }) {
  const { t, locale } = useLocale();

  return (
    <ProjectLink project={project} className="project-card" off={off}>
      {project.image ? (
        <div className="project-shot">
          <img
            src={project.image}
            alt={project.title}
            className="project-img"
            width={720}
            height={405}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : undefined}
            decoding="async"
            draggable={false}
          />
        </div>
      ) : (
        /* Sin captura: marco tipográfico con la retícula del acento. Ya no
           dice "captura en proceso" — era una nota de gestión interna
           puesta delante de quien viene a evaluar. La insignia "En
           desarrollo" de abajo explica el estado sin pedir disculpas. */
        <div className="project-shot project-shot--type" aria-hidden="true">
          <span className="project-shot-word">{project.title}</span>
        </div>
      )}

      <div className="project-body">
        <div className="project-meta">
          <span className="project-kind">{t(KIND_LABEL[project.kind])}</span>
          {project.detail && <span className="project-year">{project.detail.year}</span>}
        </div>

        <div className="project-title">
          {project.title}
          <ArrowIcon />
        </div>

        <p className="project-tagline">{pick(project.tagline, locale)}</p>
        <p className="project-desc">{pick(project.description, locale)}</p>

        <ul className="project-stack">
          {project.technologies.slice(0, 6).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
          {project.technologies.length > 6 && <li>+{project.technologies.length - 6}</li>}
        </ul>

        <div className="project-foot">
          <div className="project-badges"><ProjectBadges project={project} /></div>
        </div>
      </div>
    </ProjectLink>
  );
}

/**
 * Carrusel "coverflow" 3D, sin dependencias.
 *
 * Todas las celdas viven en la misma celda de rejilla (`grid-area: 1/1`) y
 * se transforman según `--d`: la distancia circular con signo hasta el
 * centro, que este componente escribe como variable CSS. El CSS hace el
 * resto —desplazamiento, giro, escala, opacidad y desenfoque— así que no
 * hay ni un `requestAnimationFrame` ni un track que se traslade: por
 * construcción nunca se ve una "vuelta al comienzo".
 *
 * El alto del escenario se MIDE del contenido de la tarjeta centrada y se
 * anima con `transition: height`, nunca se adivina con un `clamp()`.
 */
function ProjectCarousel({ items }: { items: Project[] }) {
  const { t, locale } = useLocale();
  const [current, setCurrent] = useState(0);
  /* Sentido del último cambio (+1 al siguiente, -1 al anterior) y contador
     de pasos. El CSS los necesita para la inclinación direccional: `--dir`
     da el lado hacia el que se ladea la tira, y la PARIDAD de `paso`
     alterna el nombre de la animación, que es lo único que la reinicia
     cuando se pasa de tarjeta dos veces seguidas. */
  const [dir, setDir] = useState(0);
  const [paso, setPaso] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<(HTMLDivElement | null)[]>([]);
  const N = items.length;

  const distance = useCallback(
    (index: number) => {
      let d = index - current;
      if (d > N / 2) d -= N;
      if (d < -N / 2) d += N;
      return d;
    },
    [current, N],
  );

  /* Un solo camino para cambiar de tarjeta, venga de las flechas, de los
     puntos o de un clic en una lateral. Todos necesitan, además del
     destino, el SENTIDO del viaje —que `--d` no puede dar: `--d` es el lado
     donde está cada celda, no hacia dónde se mueve la tira—. Se calcula por
     el camino circular más corto, así que saltar de la primera a la última
     con los puntos se inclina hacia atrás y no hacia adelante. */
  const irA = useCallback(
    (destino: number) => {
      const objetivo = ((destino % N) + N) % N;
      if (objetivo === current) return;
      let delta = objetivo - current;
      if (delta > N / 2) delta -= N;
      if (delta < -N / 2) delta += N;
      setDir(Math.sign(delta));
      setPaso((p) => p + 1);
      setCurrent(objetivo);
    },
    [current, N],
  );

  const go = useCallback((delta: number) => irA(current + delta), [irA, current]);

  /* Mide el alto de TODAS las tarjetas y le aplica el mayor al escenario.
     Antes medía solo la centrada y animaba `height` en cada paso: eso
     rehace el layout de las diez celdas apiladas en cada fotograma del
     cruce, y era la mitad del tirón. Con la altura fija no hay ni salto ni
     relayout al pasar; el precio es algo de aire bajo las más cortas.

     ResizeObserver cubre lo que un efecto no ve: la imagen que termina de
     cargar, la fuente que llega tarde, el reflow al cambiar de idioma. */
  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const cards = cellRefs.current
      .map((cell) => cell?.firstElementChild as HTMLElement | null)
      .filter((card): card is HTMLElement => Boolean(card));
    if (cards.length === 0) return;

    const measure = () => {
      const tallest = Math.max(...cards.map((card) => card.offsetHeight));
      stage.style.height = `${tallest}px`;
    };
    measure();

    const ro = new ResizeObserver(measure);
    cards.forEach((card) => ro.observe(card));
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [locale, items]);

  /* Click en una tarjeta lateral: la centra en vez de navegar. El enlace
     de las celdas no centradas tiene `pointer-events: none` (CSS), así
     que el click atraviesa hasta la celda y llega acá. Se probó antes con
     `inert` en la celda y no sirve: una celda inerte no despacha el
     evento, ni siquiera hacia un ancestro que sí lo escuche. */
  const onStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const cell = (e.target as HTMLElement).closest<HTMLElement>(".pcar-cell");
    if (!cell) return;
    const index = cellRefs.current.indexOf(cell as HTMLDivElement);
    if (index === -1 || index === current) return;
    e.preventDefault();
    irA(index);
  };

  /* Si el foco estaba en la tarjeta que se va, hay que llevarlo a la que
     entra. Si no, queda dentro de una celda que pasó a `aria-hidden` y con
     `tabIndex={-1}`: Enter navegaría al proyecto anterior, no al que se ve,
     y además un elemento enfocado dentro de un subárbol oculto viola ARIA. */
  const moverFoco = (destino: number) => {
    const activo = document.activeElement;
    const enTarjeta = cellRefs.current.some((c) => c?.contains(activo));
    if (!enTarjeta) return;
    requestAnimationFrame(() =>
      cellRefs.current[destino]?.querySelector<HTMLElement>("a, button")?.focus(),
    );
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const delta = e.key === "ArrowRight" ? 1 : -1;
    moverFoco(((current + delta) % N + N) % N);
    go(delta);
  };

  return (
    <div
      className="pcar pcar--enhanced"
      role="region"
      aria-roledescription="carrusel"
      aria-label={t("projects.carousel.label")}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <p className="sr-only" aria-live="polite">
        {items[current]?.title} — {current + 1} {t("projects.carousel.position")} {N}
      </p>

      <div className="pcar-frame">
        <div
          className="pcar-stage"
          ref={stageRef}
          onClick={onStageClick}
          /* Mientras no hubo ningún cambio no hay `data-paso`, y sin él
             ninguna animación arranca: si no, las diez tarjetas se
             inclinarían solas al cargar la página. */
          data-paso={paso === 0 ? undefined : paso % 2 === 0 ? "a" : "b"}
          data-dir={dir > 0 ? "der" : "izq"}
        >
          {items.map((p, i) => {
            const d = distance(i);
            const off = d !== 0;
            return (
              <div
                key={p.id}
                className="pcar-cell"
                data-d={d}
                style={{ "--d": d, "--a": p.accent } as CSSProperties}
                ref={(el) => { cellRefs.current[i] = el; }}
              >
                <ProjectCard project={p} eager={i === 0} off={off} />
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="pcar-arrow pcar-arrow--wide pcar-arrow--prev"
          onClick={() => go(-1)}
          aria-label={t("projects.carousel.prev")}
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          className="pcar-arrow pcar-arrow--wide pcar-arrow--next"
          onClick={() => go(1)}
          aria-label={t("projects.carousel.next")}
        >
          <ChevronRight />
        </button>
      </div>

      <div className="pcar-nav">
        <button
          type="button"
          className="pcar-arrow pcar-arrow--narrow"
          onClick={() => go(-1)}
          aria-label={t("projects.carousel.prev")}
        >
          <ChevronLeft />
        </button>

        <div className="pcar-dots">
          {items.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className="pcar-dot"
              aria-current={i === current ? "true" : "false"}
              aria-label={`${t("projects.carousel.goto")}: ${p.title}`}
              onClick={() => irA(i)}
            >
              <span className="pcar-dot-mark" aria-hidden="true" />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="pcar-arrow pcar-arrow--narrow"
          onClick={() => go(1)}
          aria-label={t("projects.carousel.next")}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLocale();

  return (
    <section id="projects">
      <h2 className="section-label fade-in">{t("nav.projects")}</h2>

      <ProjectCarousel items={projects} />
    </section>
  );
}
