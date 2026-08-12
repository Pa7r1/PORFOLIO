export type Bilingual = { es: string; en: string };
export type ProjectStatus = "production" | "wip" | "mvp" | "archived";

export interface Screenshot {
  src: string;
  orientation: "desktop" | "mobile";
  caption?: Bilingual;
}

export interface Testimonial {
  quote: Bilingual;
  author: string;
  role?: Bilingual;
}

export interface ProjectDetail {
  year: number;
  status: ProjectStatus;
  /** Plain-language summary (what it solves, for whom, outcome) shown above the technical case study. */
  summary?: Bilingual;
  problem: Bilingual;
  architecture: Bilingual;
  stackRationale: Bilingual;
  challenges: Bilingual[];
  learnings: Bilingual;
  /** Outcome bullets — real results only. */
  results?: Bilingual[];
  /** Real client quote only — never fabricated. */
  testimonial?: Testimonial;
  screenshots?: Screenshot[];
  videoUrl?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: Bilingual;
  description: Bilingual;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  repoPrivate?: boolean;
  /** Card status badge: deployed online / runs but not hosted / coming soon. */
  availability?: "live" | "working" | "soon";
  /**
   * Naturaleza del trabajo — define los filtros de la galería.
   * "client": trabajo pago para un tercero · "product": producto propio que vende ·
   * "lab": proyecto propio de exploración técnica.
   */
  kind: "client" | "product" | "lab";
  /**
   * Color de acento de la tarjeta, en hex. El CSS deriva los tonos con `color-mix()`,
   * así que basta uno por proyecto. Mantener la familia apagada de la paleta.
   */
  accent: string;
  hasDetail: boolean;
  detail?: ProjectDetail;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Experience {
  period: Bilingual;
  title: Bilingual;
  company: string;
  description?: Bilingual;
  tags?: string[];
  type: "education" | "work";
  /**
   * Las que sostienen la credibilidad del perfil: se muestran abiertas y con
   * más peso, el resto queda compacto. Con las nueve al mismo tamaño, un
   * freelance de un mes gritaba igual que dieciséis meses en equipo.
   * Reservar para dos o tres — si se destaca todo, no se destaca nada.
   */
  featured?: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: Bilingual;
  yearsExperience: number;
  /** Sistemas con dominio propio, HTTPS y usuarios reales funcionando hoy. */
  productionSystems: number;
  /** Meses de desarrollo sobre un repositorio compartido con otros devs. */
  teamMonths: number;
  profileImage: string;
  email: string;
  linkedin: string;
  whatsapp: string;
}
