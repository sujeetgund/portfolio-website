import { IconType } from "react-icons";

export interface Contact {
  label: string;
  value: string;
  icon: IconType;
}

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  resumeUrl: string;
  image: {
    src: string;
    hint: string;
  };
  contacts: Contact[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface AboutData {
  title: string;
  paragraphs: string[];
  stats: Stat[];
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  startDate: string; // YYYY-MM-DD
  endDate?: string | null; // YYYY-MM-DD, null for Present
  description: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string; // YYYY-MM-DD
  url: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  details: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  siteUrl: string;
  creator: string;
  twitterHandle: string;
  defaultKeywords: string[];
}
