export type Bilingual = { es: string; en: string };
export type ProjectStatus = "production" | "wip" | "mvp" | "archived";

export interface ProjectDetail {
  year: number;
  status: ProjectStatus;
  problem: Bilingual;
  architecture: Bilingual;
  stackRationale: Bilingual;
  challenges: Bilingual[];
  learnings: Bilingual;
  screenshots?: string[];
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
}
