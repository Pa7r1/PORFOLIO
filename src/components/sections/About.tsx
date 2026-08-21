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
      <h2 className="section-label fade-in">{t("nav.about")}</h2>

      <div className="about-grid fade-in cascada">
        {/* Photo */}
        <div className="about-photo-wrap">
          <img
            src={asset(personalInfo.profileImage)}
            alt={personalInfo.name}
            className="about-photo"
            width={190}
            height={240}
            /* Está en la primera pantalla en escritorio: con `lazy` era el
               propio marcado el que retrasaba el LCP. Va con prioridad, y
               las medidas coinciden con las que fija el CSS. */
            fetchPriority="high"
            decoding="async"
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

        {/* Text — cascada propia: p1, la lista y la nota entran de a uno,
            no como un solo bloque (mismo mecanismo que .about-grid, un
            nivel más adentro; el observer de App.tsx observa cualquier
            .fade-in del DOM, así que anidarlo no pisa el de afuera). */}
        <div className="about-text fade-in cascada">
          <p>{t("about.p1")}</p>
          {/* Antes era un párrafo de 50 palabras con tres cláusulas unidas
              por "y". Misma info, expuesta como la lista que ya era. */}
          <div className="about-practice">
            <p className="about-practice-intro">{t("about.teamwork.intro")}</p>
            <ul className="about-practice-list">
              <li>{t("about.teamwork.item1")}</li>
              <li>{t("about.teamwork.item2")}</li>
              <li>{t("about.teamwork.item3")}</li>
            </ul>
          </div>
          {/* El tercero es el doble de largo que los otros dos: se separa
              como nota al margen (filete + un escalón menos de cuerpo) en
              vez de ser un tercer muro del mismo peso. El texto no cambia. */}
          <p className="about-note">{t("about.p3")}</p>

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
        </div>
      </div>
    </section>
  );
}
