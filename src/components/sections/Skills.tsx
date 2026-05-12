import { useLocale } from "@/i18n/LocaleContext";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  const { t } = useLocale();
  return (
    <section id="skills">
      <div className="section-label">{t("nav.skills")}</div>

      <div className="fade-in">
        {skillGroups.map((group) => (
          <div key={group.labelKey} className="skills-group">
            <div className="skills-group-label">{t(group.labelKey)}</div>
            <div>
              {group.items.map((item) => (
                <span key={item} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
