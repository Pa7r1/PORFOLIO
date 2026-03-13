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
  const cvUrl = asset("Cv.pdf");

  return (
    <section id="about">
      <div className="section-label">Sobre mí</div>

      <div className="about-grid fade-in">
        {/* ── Foto ── */}
        <div className="about-photo-wrap">
          <img
            src={asset(personalInfo.profileImage.replace(/^\//, ""))}
            alt={`Foto de ${personalInfo.name}`}
            className="about-photo"
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

        {/* ── Texto ── */}
        <div className="about-text">
          <p>
            Soy desarrollador especializado en <strong>backend</strong> con
            experiencia real en producción. Diseño bases de datos normalizadas,
            construyo APIs RESTful escalables y automatizo procesos que
            resuelven problemas reales.
          </p>
          <p>
            Desplegué aplicaciones en <strong>VPS propios</strong> con dominio
            personalizado, SSL y Docker Compose
          </p>
          <p>
            Manejo el frontend con React cuando el proyecto lo requiere.
            Graduado en{" "}
            <strong>Tecnicatura en Programación en UTN La Rioja</strong>.
          </p>

          <div className="about-actions">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <DownloadIcon />
              Descargar CV
            </a>
          </div>

          <div className="about-stats">
            <div>
              <div className="stat-num">{personalInfo.yearsExperience}+</div>
              <div className="stat-label">años de exp.</div>
            </div>
            <div>
              <div className="stat-num">{personalInfo.githubProjects}+</div>
              <div className="stat-label">proyectos</div>
            </div>
            <div>
              <div className="stat-num">2</div>
              <div className="stat-label">clientes reales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
