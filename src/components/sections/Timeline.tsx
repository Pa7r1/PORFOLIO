import { useCallback, useState } from "react";
import { useLocale } from "@/i18n/LocaleContext";
import { pick } from "@/i18n/pick";
import { experiences } from "@/data/experiences";

const ChevronIcon = () => (
  <svg className="log-chevron" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6,9 12,15 18,9" />
  </svg>
);

/**
 * Trayecto como log cronológico: las nueve entradas a la vista y el detalle
 * largo plegado. Nada de pestañas — escondían ocho de nueve.
 *
 * Sigue montado sobre <details>/<summary> por lo que eso trae gratis: teclado,
 * foco y búsqueda en página del navegador. Lo que sí pasó a React es CUÁL está
 * abierta, por dos motivos que el desplegable nativo no cubre: se comporta como
 * acordeón (abrir una cierra las demás) y el plegado se anima en vez de saltar.
 *
 * El cierre necesita dos tiempos: primero se anima y `open` pasa a false al
 * terminar, porque un <details> cerrado saca su contenido del flujo y no habría
 * nada que animar. Al abrir es al revés: `open` va primero.
 */
export default function Timeline() {
  const { t, locale } = useLocale();

  /* Todas cerradas al cargar: la lista se lee entera de un vistazo y el detalle
     se pide. Se comporta como acordeón de una sola fila —abrir una cierra las
     demás— desde el primer clic. */
  const [abiertas, setAbiertas] = useState<ReadonlySet<number>>(() => new Set());
  /* Las que están animando su cierre: siguen con `open` puesto hasta que la
     transición termina, o el contenido desaparecería de golpe. */
  const [cerrando, setCerrando] = useState<ReadonlySet<number>>(() => new Set());

  const alternar = useCallback((indice: number) => {
    setAbiertas((previas) => {
      const eraLaUnica = previas.has(indice) && previas.size === 1;
      const siguientes = eraLaUnica ? new Set<number>() : new Set([indice]);
      // Todo lo que estaba abierto y deja de estarlo entra en fase de cierre.
      const seCierran = [...previas].filter((i) => !siguientes.has(i));
      if (seCierran.length > 0) setCerrando((c) => new Set([...c, ...seCierran]));
      return siguientes;
    });
  }, []);

  const finDeCierre = useCallback((indice: number) => {
    setCerrando((previas) => {
      if (!previas.has(indice)) return previas;
      const siguientes = new Set(previas);
      siguientes.delete(indice);
      return siguientes;
    });
  }, []);

  return (
    <section id="experience">
      <h2 className="section-label fade-in">{t("nav.experience")}</h2>
      <p className="section-hint fade-in">{t("timeline.hint")}</p>

      <div className="log fade-in cascada">
        {experiences.map((exp, i) => (
          /* Dos niveles, no nueve iguales: las destacadas llevan más peso
             visual; el resto queda compacto. Todas parten cerradas y se abren
             si interesan. La formación va en un tercer nivel, más callado —
             es contexto, no es lo que se evalúa. */
          <details
            key={`${exp.company}-${i}`}
            className={[
              "log-row",
              exp.featured && "log-row--destacada",
              exp.type === "education" && "log-row--formacion",
              abiertas.has(i) && "log-row--abierta",
            ]
              .filter(Boolean)
              .join(" ")}
            open={abiertas.has(i) || cerrando.has(i)}
          >
            <summary
              /* El navegador alterna `open` por su cuenta al hacer clic y eso
                 sacaría el contenido del flujo antes de poder animarlo: el
                 estado lo lleva React. Enter y Espacio sobre el <summary>
                 disparan un `click` sintético, así que el teclado sigue
                 funcionando sin manejador aparte. */
              onClick={(e) => {
                e.preventDefault();
                alternar(i);
              }}
            >
              <span className="log-when">{pick(exp.period, locale)}</span>
              {/* Empresa/proyecto arriba, rol debajo. Al revés, seis de
                  nueve filas repetían "Full Stack Developer" en negrita a
                  20px y lo único que distinguía una fila de otra —Makem,
                  Modex, VJ-Barber— quedaba en mono a 11,5px. */}
              <span>
                <span className="log-title">{exp.company}</span>
                <span className="log-org">
                  {pick(exp.title, locale)}
                  {exp.type === "education" && (
                    <span className="log-kind">{t("timeline.education")}</span>
                  )}
                </span>
              </span>
              <ChevronIcon />
            </summary>

            {/* El envoltorio es lo que se anima: una rejilla cuya única fila
                va de 0fr a 1fr. Es la forma portátil de llegar a "alto
                automático" — `interpolate-size` solo existe en Chromium. Sí,
                esto anima layout, y está aceptado: es un clic puntual sobre
                una fila, no algo que corra durante el scroll. */}
            <div
              className="log-body-wrap"
              onTransitionEnd={(e) => {
                // Solo la propia rejilla, no las transiciones de los hijos.
                if (e.propertyName === "grid-template-rows") finDeCierre(i);
              }}
            >
              <div className="log-body">
                {exp.description && (
                  <p className="log-desc">{pick(exp.description, locale)}</p>
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
          </details>
        ))}
      </div>
    </section>
  );
}
