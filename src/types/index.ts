export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
  color: string;
  level?: number;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  description?: string;
  tags?: string[];
  type: "education" | "work";
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  githubProjects: number;
  yearsExperience: number;
  profileImage: string;
  email: string;
  linkedin: string;
}
