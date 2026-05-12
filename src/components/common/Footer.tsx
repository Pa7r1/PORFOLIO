import { useLocale } from "@/i18n/LocaleContext";

export default function Footer() {
  const { t } = useLocale();
  return (
    <div className="footer-credit">
      {t("footer.credit")}{" "}
      <a
        href="https://github.com/Pa7r1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pa7r1
      </a>{" "}
      · React + TypeScript + Vite
    </div>
  );
}
