// SectionTitle is no longer used as a big h2 — sections use .section-label divs directly.
// Kept here for backward compatibility; renders nothing visible.
interface SectionTitleProps { children: React.ReactNode; }
export default function SectionTitle({ children }: SectionTitleProps) {
  return <span style={{ display: "none" }}>{children}</span>;
}
