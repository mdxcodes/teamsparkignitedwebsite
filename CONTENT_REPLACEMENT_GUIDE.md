# Content Replacement Guide

This document lists every asset and data item you need to replace the professional placeholders with real Team Spark Ignited content.

---

## SITE IDENTITY

| Item | Location | Required | Details |
|------|----------|----------|---------|
| Site Name | `src/data/index.ts` → `siteContent.siteName` | Yes | Full team name |
| Tagline | `src/data/index.ts` → `siteContent.tagline` | Yes | One-line descriptor |
| Description | `src/data/index.ts` → `siteContent.description` | Yes | Brief paragraph for SEO |
| Contact Email | `src/data/index.ts` → `siteContent.contactEmail` | Yes | Primary contact address |
| Location | `src/data/index.ts` → `siteContent.location` | Yes | College, City, Country |
| Social Links | `src/data/index.ts` → `siteContent.socialLinks` | Yes | LinkedIn, Instagram, Email |

---

## ASSETS

### Logo
- **File**: `public/team_spark_ignited_logo.jpeg` (CREATE THIS FILE)
- **Required**: Yes
- **Recommended**: Transparent PNG or WebP with transparent background
- **Minimum**: 512×512px
- **Best**: Vector SVG or 2048×2048px PNG with transparent background
- **Purpose**: Navbar brand mark
- **Replacement variable**: Hardcoded in `src/components/Navbar.tsx`

### Cover / Hero Image
- **File**: `public/team_spark_ignited_cover.jpeg` (ALREADY EXISTS)
- **Required**: Replace existing file or update path
- **Recommended**: 16:9 aspect ratio, high-resolution photograph
- **Minimum**: 1920×1080px
- **Best**: 3840×2160px (4K) with good compression
- **Preferred format**: JPEG (photographs) or WebP
- **Purpose**: Hero section background
- **Replacement variable**: `src/components/Hero.tsx` line 22

---

## VEHICLES

For each vehicle, create the following files in `public/vehicles/`.

### Vehicle Hero Image
- **File**: `public/vehicles/[vehicle-id]-hero.jpg`
- **Required**: Yes (1 per vehicle)
- **Recommended**: 16:9 or 3:2 aspect ratio
- **Minimum**: 1600px wide
- **Best**: 2560×1440px high-resolution side/front 3/4 photograph
- **Preferred format**: JPEG or WebP
- **Transparent background**: No
- **Multiple photos useful**: No
- **Purpose**: Vehicle hero/feature image
- **Replacement variable**: `src/data/index.ts` → `vehicles[].heroImage`

### Vehicle Gallery Images
- **Files**: `public/vehicles/[vehicle-id]-gallery-[1-3].jpg`
- **Required**: Yes (1–3 per vehicle)
- **Recommended**: Various angles - side, front, rear, detail shots
- **Minimum**: 1200px wide
- **Best**: 1920×1080px or higher
- **Preferred format**: JPEG or WebP
- **Transparent background**: No
- **Multiple photos useful**: Yes
- **Purpose**: Gallery, detail views, workshop shots
- **Replacement variable**: `src/data/index.ts` → `vehicles[].galleryImages`

### Vehicle Name
- **Data**: `src/data/index.ts` → `vehicles[].name`
- **Required**: Yes
- **Example**: "SPARK-1"
- **Purpose**: Vehicle title throughout site

### Vehicle Category
- **Data**: `src/data/index.ts` → `vehicles[].category`
- **Required**: Yes
- **Example**: "Electric Two-Wheeler"
- **Purpose**: Vehicle classification badges

### Vehicle Year
- **Data**: `src/data/index.ts` → `vehicles[].year`
- **Required**: Yes
- **Example**: "2024"
- **Purpose**: Vehicle metadata

### Vehicle Status
- **Data**: `src/data/index.ts` → `vehicles[].status`
- **Required**: Yes
- **Options**: "concept" | "in-development" | "testing" | "competition-ready"
- **Purpose**: Status badges

### Vehicle Description
- **Data**: `src/data/index.ts` → `vehicles[].description`
- **Required**: Yes
- **Example**: "A purpose-built electric sprint machine engineered for [COMPETITION NAME]. Designed around a [CHASSIS TYPE] with [KEY FEATURE]."
- **Purpose**: Vehicle card and detail descriptions

### Vehicle Specifications
- **Data**: `src/data/index.ts` → `vehicles[].specifications`
- **Required**: Yes
- **Fields**: topSpeed, motor, battery, power, torque, weight, acceleration
- **Example**: topSpeed: "135 km/h", motor: "20kW Axial Flux PMSM"
- **Purpose**: Technical specification display
- **Note**: Do not fabricate specs. If unknown, use "[SPEC]" placeholder until measured.

### Vehicle Engineering Highlights
- **Data**: `src/data/index.ts` → `vehicles[].engineeringHighlights`
- **Required**: Yes (2–3 per vehicle)
- **Example**: "Custom-designed carbon fiber monocoque"
- **Purpose**: Engineering story section
- **Note**: Describe actual design decisions, not generic claims.

### Vehicle Competition
- **Data**: `src/data/index.ts` → `vehicles[].competition`
- **Required**: If vehicle is competition-ready
- **Example**: "Formula Student Electric 2025"
- **Purpose**: Competition association

---

## TEAM

### Team Member Photos
- **Files**: `public/team/team-[1-6].jpg`
- **Required**: Yes (1 per team member)
- **Recommended**: Professional headshot or workshop action shot
- **Minimum**: 600×600px
- **Best**: 1200×1200px
- **Preferred format**: JPEG or WebP
- **Transparent background**: No
- **Multiple photos useful**: No
- **Purpose**: Team section member cards
- **Replacement variable**: `src/data/index.ts` → `team[].image`

### Team Member Names
- **Data**: `src/data/index.ts` → `team[].name`
- **Required**: Yes
- **Purpose**: Member cards

### Team Member Roles
- **Data**: `src/data/index.ts` → `team[].role`
- **Required**: Yes
- **Example**: "Powertrain Lead"
- **Purpose**: Member cards

### Team Member Bios
- **Data**: `src/data/index.ts` → `team[].bio`
- **Required**: Recommended
- **Example**: "Senior in Mechanical Engineering specializing in electric vehicle dynamics. Leading the [SYSTEM] design for [VEHICLE NAME]."
- **Purpose**: Team detail view (future)

### Team Member Social Links
- **Data**: `src/data/index.ts` → `team[].socials`
- **Required**: Optional
- **Purpose**: Team member social profiles

---

## ACHIEVEMENTS

### Achievement Data
- **Data**: `src/data/index.ts` → `achievements[]`
- **Required**: Yes (2–4 items)
- **Fields**: year, title, result, competition
- **Example**: { year: "2024", title: "Formula Student Electric", result: "Best Engineering Design", competition: "Formula Student India" }
- **Purpose**: Competition timeline
- **Note**: Do not fabricate achievements. Use only verified results.

---

## SPONSORS

### Sponsor Logos
- **Files**: `public/sponsors/sponsor-[1-4].png`
- **Required**: Yes (1 per sponsor)
- **Recommended**: Transparent PNG or SVG
- **Minimum**: 400×200px
- **Best**: 800×400px vector SVG or high-res PNG with transparent background
- **Preferred format**: PNG with transparency or SVG
- **Transparent background**: Yes (strongly preferred)
- **Multiple photos useful**: No
- **Purpose**: Sponsor section display
- **Replacement variable**: `src/data/index.ts` → `sponsors[].logo`

### Sponsor Names
- **Data**: `src/data/index.ts` → `sponsors[].name`
- **Required**: Yes
- **Purpose**: Sponsor cards and alt text

### Sponsor Websites
- **Data**: `src/data/index.ts` → `sponsors[].website`
- **Required**: Recommended
- **Purpose**: Sponsor linking (future)

---

## GALLERY

### Workshop / Action Photos
- **Files**: `public/gallery/gallery-[1-6].jpg`
- **Required**: Yes (6–12 images)
- **Recommended**: Mix of workshop, track, and team photos
- **Minimum**: 1200px wide
- **Best**: 1920×1080px or higher
- **Preferred format**: JPEG or WebP
- **Transparent background**: No
- **Multiple photos useful**: Yes (6–12 minimum)
- **Purpose**: Gallery masonry section
- **Replacement variable**: `src/data/index.ts` → `galleryImages[]`

---

## ENGINEERING SYSTEMS

### Engineering System Data
- **Data**: `src/data/index.ts` → `engineeringSystems[]`
- **Required**: Yes (3–5 systems)
- **Fields**: id, title, description, icon
- **Example**: { id: "sys-1", title: "Powertrain", description: "[DESCRIPTION]", icon: "zap" }
- **Purpose**: Engineering section feature cards
- **Note**: Describe actual engineering systems. Do not use generic text.

---

## SEO METADATA

### Favicon
- **File**: `public/favicon.ico` (CREATE THIS FILE)
- **Required**: Yes
- **Recommended**: 32×32px and 16×16px
- **Best**: Multi-resolution ICO or SVG favicon
- **Purpose**: Browser tab icon
- **Replacement variable**: `src/app/layout.tsx`

### Open Graph Image
- **File**: `public/og-image.jpg`
- **Required**: Recommended
- **Recommended**: 1200×630px
- **Best**: 1200×630px PNG or JPEG
- **Purpose**: Social media sharing preview
- **Replacement variable**: `src/app/layout.tsx` metadata

---

## QUICK START CHECKLIST

1. [ ] Create `public/team_spark_ignited_logo.jpeg` - Team logo with transparent background
2. [ ] Replace `public/team_spark_ignited_cover.jpeg` - High-res hero photograph
3. [ ] Create `public/favicon.ico` - Team favicon
4. [ ] For each vehicle (3):
   - [ ] Create hero image: `public/vehicles/[id]-hero.jpg`
   - [ ] Create 1–3 gallery images: `public/vehicles/[id]-gallery-[1-3].jpg`
   - [ ] Update `src/data/index.ts` with vehicle name, specs, descriptions
5. [ ] For each team member (6):
   - [ ] Create headshot: `public/team/team-[1-6].jpg`
   - [ ] Update `src/data/index.ts` with names, roles, bios
6. [ ] Update `src/data/index.ts` with real achievements (if any)
7. [ ] For each sponsor (4):
   - [ ] Create logo: `public/sponsors/sponsor-[1-4].png` (transparent background)
   - [ ] Update `src/data/index.ts` with sponsor names and websites
8. [ ] Create 6–12 gallery images: `public/gallery/gallery-[1-12].jpg`
9. [ ] Update `src/data/index.ts` with site identity, contact, social links
10. [ ] Update `src/data/index.ts` with engineering system descriptions
11. [ ] Create `public/og-image.jpg` for social sharing
