export type ProjectStatus = "Active" | "Shipped" | "Completed";

export type ProjectCategory =
  | "Distributed Systems"
  | "AI & ML"
  | "Product"
  | "Embedded"
  | "Robotics"
  | "Hardware"
  | "Data";

export interface ProjectSection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  title: string;
  /** One-line summary shown on cards and detail hero. */
  tagline: string;
  period: string;
  status: ProjectStatus;
  category: ProjectCategory;
  /** Featured projects appear on the homepage. */
  featured?: boolean;
  tech: string[];
  github?: string;
  link?: string;
  /** Card-level summary, one short paragraph. */
  summary: string;
  /** Key achievements, rendered as a list on the detail page. */
  highlights: string[];
  /** Headline numbers for the detail page. */
  metrics?: { value: string; label: string }[];
  /** Long-form sections for the detail page. */
  sections: ProjectSection[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  kind: "Internship" | "Research" | "Startup" | "Work" | "Teaching";
  summary: string;
  bullets: string[];
  tech?: string[];
  /** Slugs of related project pages. */
  related?: string[];
}

export interface EducationItem {
  school: string;
  credential: string;
  period: string;
  location: string;
  details: string[];
}

export interface LeadershipItem {
  organization: string;
  role: string;
  period: string;
  summary: string;
  bullets?: string[];
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  detail?: string;
}

export interface SkillGroup {
  title: string;
  /** Short editorial note explaining where the skills come from. */
  note: string;
  skills: { name: string; context?: string }[];
}

export interface ResearchArea {
  title: string;
  role?: string;
  period?: string;
  organization?: string;
  body: string[];
  tech?: string[];
  bullets?: string[];
}
