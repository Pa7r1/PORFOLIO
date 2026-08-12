import { useLocale } from "@/i18n/LocaleContext";
import { personalInfo } from "@/data/personalInfo";

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);
const WhatsappIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);
const MapIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

export default function Contact() {
  const { t } = useLocale();
  return (
    <section id="contact">
      <h2 className="section-label fade-in">{t("nav.contact")}</h2>

      <div className="fade-in cascada">
        <p className="contact-text">{t("contact.text")}</p>

        <div className="contact-cta-wrap">
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary"
            aria-label={t("contact.emailAria")}
          >
            <MailIcon />
            {t("contact.cta")}
          </a>
          <span className="contact-cta-micro">{t("contact.ctaMicro")}</span>
        </div>

        <div className="contact-links">
          <a href={`mailto:${personalInfo.email}`} className="contact-link">
            <MailIcon />
            {personalInfo.email}
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
            <LinkedinIcon />
            linkedin.com/in/patricio-carpio
          </a>
          <a href="https://github.com/Pa7r1" target="_blank" rel="noopener noreferrer" className="contact-link">
            <GithubIcon />
            github.com/Pa7r1
          </a>
          <a
            href={`https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(t("contact.whatsappMessage"))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label={t("contact.whatsappAria")}
          >
            <WhatsappIcon />
            WhatsApp
          </a>
          <span className="contact-link" style={{ cursor: "default" }}>
            <MapIcon />
            {t("contact.location")}
          </span>
        </div>
      </div>
    </section>
  );
}
