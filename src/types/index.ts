export interface Vehicle {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly year: string;
  readonly status: VehicleStatus;
  readonly description: string;
  readonly heroImage: string;
  readonly galleryImages: readonly string[];
  readonly specifications: VehicleSpecifications;
  readonly engineeringHighlights: readonly string[];
  readonly competition?: string;
  readonly technicalVisualization?: string;
}

export type VehicleStatus = "concept" | "in-development" | "testing" | "competition-ready";

export interface VehicleSpecifications {
  readonly topSpeed: string;
  readonly motor: string;
  readonly battery: string;
  readonly power: string;
  readonly torque: string;
  readonly weight: string;
  readonly acceleration: string;
}

export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly category: TeamCategory;
  readonly image: string;
  readonly bio?: string;
  readonly socials?: SocialLinks;
}

export type TeamCategory =
  | "management"
  | "mechanical"
  | "electrical"
  | "design"
  | "aerodynamics"
  | "battery"
  | "suspension"
  | "powertrain";

export interface SocialLinks {
  readonly linkedin?: string;
  readonly instagram?: string;
  readonly email?: string;
}

export interface Achievement {
  readonly year: string;
  readonly title: string;
  readonly result: string;
  readonly competition: string;
}

export interface Sponsor {
  readonly id: string;
  readonly name: string;
  readonly logo: string;
  readonly website?: string;
}

export interface SiteContent {
  readonly siteName: string;
  readonly tagline: string;
  readonly description: string;
  readonly socialLinks: SocialLinks;
  readonly contactEmail: string;
  readonly location: string;
  readonly vehicles: readonly Vehicle[];
  readonly team: readonly TeamMember[];
  readonly achievements: readonly Achievement[];
  readonly sponsors: readonly Sponsor[];
  readonly galleryImages: readonly string[];
  readonly engineeringSystems: readonly EngineeringSystem[];
}

export interface EngineeringSystem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface NavLink {
  readonly name: string;
  readonly href: string;
}

export interface MotionConfig {
  readonly entranceDuration: number;
  readonly sectionDelay: number;
  readonly hoverDuration: number;
  readonly reducedMotionDuration: number;
}
