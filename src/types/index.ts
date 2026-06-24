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
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: Bilingual;
  githubProjects: number;
  yearsExperience: number;
  profileImage: string;
  email: string;
  linkedin: string;
  whatsapp: string;
}
