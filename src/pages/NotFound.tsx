import { Link } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";
import ParticlesBackground from "@/components/common/ParticlesBackground";

export default function NotFound() {
  const { t } = useLocale();
  return (
    <>
      <ParticlesBackground />
      <div className="not-found-wrapper">
        <div className="not-found-code">{t("notFound.title")}</div>
        <p className="not-found-message">{t("notFound.message")}</p>
        <Link to="/" className="not-found-back">{t("notFound.back")}</Link>
      </div>
    </>
  );
}
