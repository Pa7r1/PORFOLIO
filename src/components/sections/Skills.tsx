import { useLocale } from "@/i18n/LocaleContext";
import { skillGroups } from "@/data/skills";

/**
 * Pastillas sin glifo. Simple Icons tiene marca para la mitad de estas
 * tecnologías y para la otra mitad no ("REST APIs", "Stored Procedures",
 * "TypeScript strict"…), así que la mitad de las filas quedaba con icono
 * y la mitad sin él, desalineadas. Ninguno alinea todo y deja que se
 * lean como lo que son: una lista, no un muestrario de logos.
 */
export default function Skills() {
  const { t } = useLocale();
  return (
    <section id="skills">
      <h2 className="section-label fade-in">{t("nav.skills")}</h2>

      <div className="fade-in cascada">
        {skillGroups.map((group) => (
          <div key={group.labelKey} className="skills-group">
            <div className="skills-group-label">{t(group.labelKey)}</div>
            <div className="skills-row">
              {group.items.map((item) => (
                <span key={item} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
