import { useLocale } from "@/i18n/LocaleContext";

export default function LangSwitch() {
  const { locale, setLocale } = useLocale();
  return (
    <div className="lang-switch">
      <button
        onClick={() => setLocale("es")}
        className={locale === "es" ? "active" : ""}
        aria-label="Español"
      >
        ES
      </button>
      <span aria-hidden="true">/</span>
      <button
        onClick={() => setLocale("en")}
        className={locale === "en" ? "active" : ""}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
