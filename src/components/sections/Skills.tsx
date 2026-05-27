import type { CSSProperties } from "react";
import { useLocale } from "@/i18n/LocaleContext";
import { skillGroups } from "@/data/skills";
import { skillIconUrl } from "@/utils/skillIcon";

export default function Skills() {
  const { t } = useLocale();
  return (
    <section id="skills">
      <h2 className="section-label">{t("nav.skills")}</h2>

      <div className="fade-in">
        {skillGroups.map((group) => (
          <div key={group.labelKey} className="skills-group">
            <div className="skills-group-label">{t(group.labelKey)}</div>
            <div>
              {group.items.map((item) => {
                const url = skillIconUrl(item);
                return (
                  <span key={item} className="skill-tag">
                    {url && (
                      <span
                        className="skill-icon"
                        style={{ ["--icon-url" as string]: `url(${url})` } as CSSProperties}
                        aria-hidden="true"
                      />
                    )}
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
