# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro, showcasing projects, work experience, skills, and professional information. The site is content-driven with data stored in JSON files and rendered through Astro components.

## Commands

### Development
```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server at localhost:4321
pnpm build            # Build production site to ./dist/
pnpm preview          # Preview production build locally
```

### Formatting
```bash
pnpm prettier --write .  # Format all files with Prettier
```

Note: Uses pnpm as the package manager. The project includes Prettier with Astro and Tailwind CSS plugins configured.

## Architecture & Structure

### Data-Driven Content System

All content is defined in JSON files under `src/data/`:
- `personal.json` - Personal info, bio, social links
- `experiences.json` - Work experience entries with company, role, bullets, tags
- `projects.json` - Project portfolio with challenge/solution/impact format
- `skills.json` - Technical skills categorization
- `faq.json` - FAQ items
- `navigation.json` - Navigation menu items

Each JSON file follows a specific schema that maps to corresponding Astro components. When adding or modifying content, update the relevant JSON file rather than hardcoding values in components.

### Component Organization

**Layout Components:**
- `src/layouts/Layout.astro` - Base HTML structure with fonts and meta tags
- `src/pages/index.astro` - Main page composition (imports and arranges all sections)

**Section Components:**
- `Header.astro` - Hero section with bio and video background (50/50 split layout)
- `Experience.astro` - Work experience timeline
- `Projects.astro` - Project showcase gallery
- `Skills.astro` - Technical skills display
- `FAQ.astro` - Frequently asked questions
- `Footer.astro` - Footer with additional links

**Atomic Components:**
- `ExperienceItem.astro` - Individual experience card
- `ProjectItem.astro` - Individual project card with gallery
- `Gallery.astro` + `GalleryControls.astro` - Image carousel system
- `Tag.astro` - Technology/skill tag badge
- `IconText.astro` - Icon + text combination component
- `SocialLinks.astro` - Social media link group
- `FAQItem.astro` - Individual FAQ accordion item

### Styling System

The project uses Tailwind CSS v4 with a custom theme defined in `src/styles/global.css`:

**Color System:**
- Monochrome scale: `mono-black`, `mono-900` through `mono-100`, `mono-white`
- Accent colors: `accent`, `accent-hover`, `accent-light`
- Status colors: `status-available`, `status-open`, `status-unavailable`

**Typography:**
- Sans-serif: Inter (via Google Fonts)
- Monospace: JetBrains Mono (via Google Fonts)
- Custom heading styles (h1-h6) defined in base layer
- Utility classes for buttons: `button-base`, `button-fill`, `button-outline`

### Icon System

Uses `astro-icon` integration with multiple icon sets:
- `@iconify-json/devicon` - Development tool icons
- `@iconify-json/logos` - Brand logos
- `@iconify-json/lucide` - General UI icons
- `@iconify-json/mdi` - Material Design icons
- `@iconify-json/simple-icons` - Simple brand icons

Icons are referenced by collection:name format (e.g., `lucide:github`).

### Media Assets

Public assets include:
- `/background.webm` - Hero section video background
- `/background-fallback.avif` - Video poster/fallback image
- `/avatar.avif` - Profile image
- Company/project logos in `/public/` directory
- Placeholder images for projects in development

## Important Patterns

### Project Data Schema

Projects in `projects.json` follow this structure:
- Basic info: title, summary, tags[], status
- Problem-solving narrative: challenge, solution, impact
- Links: source_url, demo_url
- Media: medias[] array for gallery images
- Each project demonstrates a technical learning or business problem solved

### Experience Data Schema

Work experiences in `experiences.json` include:
- Company details: title, company, company_website, location, date
- Bullet points focusing on measurable impact
- Tags for technologies used

### Responsive Design

The layout uses a mobile-first approach with breakpoints:
- Mobile: Single column, stacked sections
- Desktop (xl): Header uses 50/50 split for text/video
- Padding scales: `px-4` mobile → `lg:px-48` desktop

### Content Philosophy

Based on `projects.json` structure, this portfolio emphasizes:
1. Visual demonstrations (videos/images first)
2. Problem → Solution → Impact narrative
3. Concrete technical learnings over vague descriptions
4. Recruiter-optimized for quick scanning (6-8 second rule)
