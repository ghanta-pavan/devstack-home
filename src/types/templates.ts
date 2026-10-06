import { ResumeSchema } from "./resume";

export type CareerTier = 
  | "intern" 
  | "junior" 
  | "senior" 
  | "principal" 
  | "manager" 
  | "executive";

export interface TemplateDefinition {
  id: string;
  name: string;
  tier: CareerTier;
  tierLabel: string;
  tierExperience: string;
  subtitle: string;
  description: string;
  designStyle: string;
  heroFeature: string;
  keySections: string[];
  previewBadges: string[];
  accentColor: string;
  gradient: string;
  icon: string;
  isPopular?: boolean;
}

export interface PersonaProfile extends ResumeSchema {
  tier: CareerTier;
  avatarUrl?: string;
  tagline?: string;
  statsBanner?: { label: string; value: string }[];
  // Persona-specific extras:
  terminalCommands?: Record<string, string>;
  academicStats?: { gpa: string; university: string; graduation: string; leetcodeRating: string; citations: number };
  doraMetrics?: { deploymentFreq: string; leadTime: string; failureRate: string; mttr: string };
  orgScaleStats?: { headcount: string; teams: string; budget: string; retention: string };
  patents?: { number: string; title: string; year: string; status: string }[];
}
