import type { SiteContent } from "@/types";

// ============================================================
// CONTENT REPLACEMENT GUIDE
// ============================================================
// Replace all items marked with [PLACEHOLDER] or bracketed
// placeholder text with real information.
// See CONTENT_REPLACEMENT_GUIDE.md for exact requirements.
// ============================================================

export const siteContent: SiteContent = {
  siteName: "Team Spark Ignited",
  tagline: "[COLLEGE NAME] Student Motorsport Engineering",
  description: "[BRIEF DESCRIPTION OF THE TEAM - e.g., A collegiate motorsport engineering team designing, fabricating, and racing electric vehicles.]",
  socialLinks: {
    linkedin: "[LINKEDIN URL]",
    instagram: "[INSTAGRAM URL]",
    email: "[EMAIL ADDRESS]",
  },
  contactEmail: "[EMAIL ADDRESS]",
  location: "[COLLEGE NAME], [CITY], [STATE/COUNTRY]",

  vehicles: [
    {
      id: "vehicle-1",
      name: "[VEHICLE NAME - e.g., SPARK-1]",
      category: "[VEHICLE CATEGORY - e.g., Electric Two-Wheeler]",
      year: "[YEAR - e.g., 2024]",
      status: "in-development",
      description:
        "[VEHICLE DESCRIPTION - Describe the vehicle's purpose, design philosophy, and what makes it unique. Be specific about the engineering approach.]",
      heroImage: "/vehicles/vehicle-1-hero.jpg",
      galleryImages: [
        "/vehicles/vehicle-1-gallery-1.jpg",
        "/vehicles/vehicle-1-gallery-2.jpg",
        "/vehicles/vehicle-1-gallery-3.jpg",
      ],
      specifications: {
        topSpeed: "[TOP SPEED - e.g., 135 km/h]",
        motor: "[MOTOR SPEC - e.g., 20kW Axial Flux PMSM]",
        battery: "[BATTERY CONFIGURATION - e.g., 96V 60Ah Li-ion]",
        power: "[POWER OUTPUT - e.g., 20kW peak]",
        torque: "[TORQUE - e.g., 85 Nm]",
        weight: "[WEIGHT - e.g., 185 kg]",
        acceleration: "[ACCELERATION - e.g., 0-100 km/h in 4.2s]",
      },
      engineeringHighlights: [
        "[ENGINEERING HIGHLIGHT 1 - e.g., Custom-designed carbon fiber monocoque chassis]",
        "[ENGINEERING HIGHLIGHT 2 - e.g., In-house developed motor controller with regenerative braking]",
        "[ENGINEERING HIGHLIGHT 3]",
      ],
      competition: "[COMPETITION NAME]",
    },
    {
      id: "vehicle-2",
      name: "[VEHICLE NAME - e.g., SPARK-2]",
      category: "[VEHICLE CATEGORY - e.g., Electric Go-Kart]",
      year: "[YEAR - e.g., 2025]",
      status: "concept",
      description:
        "[VEHICLE DESCRIPTION - Describe the vehicle's purpose and design approach.]",
      heroImage: "/vehicles/vehicle-2-hero.jpg",
      galleryImages: [
        "/vehicles/vehicle-2-gallery-1.jpg",
        "/vehicles/vehicle-2-gallery-2.jpg",
      ],
      specifications: {
        topSpeed: "[TOP SPEED]",
        motor: "[MOTOR SPEC]",
        battery: "[BATTERY CONFIGURATION]",
        power: "[POWER OUTPUT]",
        torque: "[TORQUE]",
        weight: "[WEIGHT]",
        acceleration: "[ACCELERATION]",
      },
      engineeringHighlights: [
        "[ENGINEERING HIGHLIGHT 1]",
        "[ENGINEERING HIGHLIGHT 2]",
      ],
      competition: "[COMPETITION NAME]",
    },
    {
      id: "vehicle-3",
      name: "[VEHICLE NAME - e.g., SPARK-3]",
      category: "[VEHICLE CATEGORY - e.g., Electric Dirt Kart]",
      year: "[YEAR - e.g., 2026]",
      status: "concept",
      description:
        "[VEHICLE DESCRIPTION - Describe the vehicle's purpose and design approach.]",
      heroImage: "/vehicles/vehicle-3-hero.jpg",
      galleryImages: [
        "/vehicles/vehicle-3-gallery-1.jpg",
        "/vehicles/vehicle-3-gallery-2.jpg",
      ],
      specifications: {
        topSpeed: "[TOP SPEED]",
        motor: "[MOTOR SPEC]",
        battery: "[BATTERY CONFIGURATION]",
        power: "[POWER OUTPUT]",
        torque: "[TORQUE]",
        weight: "[WEIGHT]",
        acceleration: "[ACCELERATION]",
      },
      engineeringHighlights: [
        "[ENGINEERING HIGHLIGHT 1]",
        "[ENGINEERING HIGHLIGHT 2]",
      ],
      competition: "[COMPETITION NAME]",
    },
  ],

  team: [
    {
      id: "team-1",
      name: "[TEAM MEMBER NAME]",
      role: "[TEAM MEMBER ROLE - e.g., Team Captain]",
      category: "management",
      image: "/team/team-1.jpg",
      bio: "[BIO - Brief description of background and responsibilities]",
    },
    {
      id: "team-2",
      name: "[TEAM MEMBER NAME]",
      role: "[TEAM MEMBER ROLE - e.g., Powertrain Lead]",
      category: "electrical",
      image: "/team/team-2.jpg",
      bio: "[BIO]",
    },
    {
      id: "team-3",
      name: "[TEAM MEMBER NAME]",
      role: "[TEAM MEMBER ROLE - e.g., Chassis Lead]",
      category: "mechanical",
      image: "/team/team-3.jpg",
      bio: "[BIO]",
    },
    {
      id: "team-4",
      name: "[TEAM MEMBER NAME]",
      role: "[TEAM MEMBER ROLE - e.g., Aerodynamics Lead]",
      category: "aerodynamics",
      image: "/team/team-4.jpg",
      bio: "[BIO]",
    },
    {
      id: "team-5",
      name: "[TEAM MEMBER NAME]",
      role: "[TEAM MEMBER ROLE - e.g., Battery Systems Lead]",
      category: "battery",
      image: "/team/team-5.jpg",
      bio: "[BIO]",
    },
    {
      id: "team-6",
      name: "[TEAM MEMBER NAME]",
      role: "[TEAM MEMBER ROLE - e.g., Suspension Lead]",
      category: "suspension",
      image: "/team/team-6.jpg",
      bio: "[BIO]",
    },
  ],

  achievements: [
    {
      year: "[YEAR - e.g., 2024]",
      title: "[ACHIEVEMENT TITLE - e.g., National E-Karting Championship]",
      result: "[RESULT - e.g., 1st Place Overall]",
      competition: "[COMPETITION NAME]",
    },
    {
      year: "[YEAR]",
      title: "[ACHIEVEMENT TITLE]",
      result: "[RESULT]",
      competition: "[COMPETITION NAME]",
    },
    {
      year: "[YEAR]",
      title: "[ACHIEVEMENT TITLE]",
      result: "[RESULT]",
      competition: "[COMPETITION NAME]",
    },
  ],

  sponsors: [
    {
      id: "sponsor-1",
      name: "[SPONSOR NAME]",
      logo: "/sponsors/sponsor-1.png",
      website: "[SPONSOR WEBSITE URL]",
    },
    {
      id: "sponsor-2",
      name: "[SPONSOR NAME]",
      logo: "/sponsors/sponsor-2.png",
      website: "[SPONSOR WEBSITE URL]",
    },
    {
      id: "sponsor-3",
      name: "[SPONSOR NAME]",
      logo: "/sponsors/sponsor-3.png",
      website: "[SPONSOR WEBSITE URL]",
    },
    {
      id: "sponsor-4",
      name: "[SPONSOR NAME]",
      logo: "/sponsors/sponsor-4.png",
      website: "[SPONSOR WEBSITE URL]",
    },
  ],

  galleryImages: [
    "/gallery/gallery-1.jpg",
    "/gallery/gallery-2.jpg",
    "/gallery/gallery-3.jpg",
    "/gallery/gallery-4.jpg",
    "/gallery/gallery-5.jpg",
    "/gallery/gallery-6.jpg",
  ],

  engineeringSystems: [
    {
      id: "sys-1",
      title: "[SYSTEM NAME - e.g., Powertrain]",
      description:
        "[DESCRIPTION - Explain the engineering approach, components, and design decisions for this system.]",
      icon: "zap",
    },
    {
      id: "sys-2",
      title: "[SYSTEM NAME - e.g., Chassis & Suspension]",
      description: "[DESCRIPTION]",
      icon: "wrench",
    },
    {
      id: "sys-3",
      title: "[SYSTEM NAME - e.g., Battery & Electronics]",
      description: "[DESCRIPTION]",
      icon: "cpu",
    },
    {
      id: "sys-4",
      title: "[SYSTEM NAME - e.g., Aerodynamics]",
      description: "[DESCRIPTION]",
      icon: "wind",
    },
  ],
};

export const motionConfig = {
  entranceDuration: 0.8,
  sectionDelay: 0.15,
  hoverDuration: 0.3,
  reducedMotionDuration: 0.01,
} as const;
