# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website showcasing projects and skills through a modern, visually engaging single-page application with video background.

## Tech Stack

- **Framework**: Astro v5 (static site generator with islands architecture)
- **Styling**: Tailwind CSS v4 (via @tailwindcss/vite plugin)
- **Icons**: astro-icon (with Iconify icon sets)
- **Package Manager**: pnpm
- **Language**: TypeScript (strict mode)
- **Component Variants**: tailwind-variants
- **Code Formatting**: Prettier with prettier-plugin-astro

## Commands

All commands run from the project root:

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server at localhost:4321
pnpm build            # Build production site to ./dist/
pnpm preview          # Preview production build locally
pnpm astro ...        # Run Astro CLI commands (e.g., astro check)
```

## Project Structure

```
/
├── public/                    # Static assets served as-is
│   ├── favicon.svg
│   ├── background.webm        # Hero video background (7.2MB)
│   └── background-fallback.webp  # Video fallback image
├── src/
│   ├── components/            # Reusable Astro components
│   │   └── Header.astro       # Hero section with video
│   ├── data/                  # JSON data files
│   │   └── portfolio.json     # Portfolio content (personal info, projects, skills, FAQ)
│   ├── layouts/               # Page layouts
│   │   └── Layout.astro       # Base HTML structure
│   ├── pages/                 # File-based routing (each .astro = route)
│   │   └── index.astro        # Homepage
│   └── styles/
│       └── global.css         # Global styles + Tailwind import
├── astro.config.mjs           # Astro configuration
└── tsconfig.json              # TypeScript config (extends astro/tsconfigs/strict)
```

## Architecture

### Astro Framework
- **Single-page application** - no client-side routing needed
- **Islands Architecture** - components are static by default, add interactivity explicitly
- **File-based routing** - `src/pages/` maps to URLs (`index.astro` → `/`)
- **Zero JS by default** - Astro ships no JavaScript unless needed

### Current Implementation

**Data Layer** (`src/data/portfolio.json`):
- Single source of truth for all portfolio content
- Imported directly in Astro frontmatter (no client JS needed)
- Structure:
  - `personal`: Name, title, location, bio, social links
  - `projects`: Array of project objects with media, tech stack, challenge/solution/impact
  - `skills`: Array of skill strings
  - `faq`: Array of question/answer objects

**Header Component** (`src/components/Header.astro`):
- Full-screen video background with:
  - WebM video from `public/` directory
  - Fallback poster image
  - Autoplay, muted, loop, playsinline attributes
- Hero content overlay displaying personal info from JSON data
- Centered text layout with responsive padding

**Layout** (`src/layouts/Layout.astro`):
- Base HTML structure with proper meta tags
- Title: "Portfolio | Mauricefh"
- Global CSS imported once at layout level

### Styling with Tailwind v4

- Import Tailwind via `@import "tailwindcss"` in CSS (v4 syntax)
- Tailwind integrated through Vite plugin (configured in `astro.config.mjs`)
- Use `tailwind-variants` for creating component variants with TypeScript support
- Full Tailwind utility classes available in `.astro` files

## Development Guidelines

### Component Development
- Prefer `.astro` components for static content (no client JS)
- Add framework components (React/Vue/etc.) only when interactivity is required
- Use Astro's component props with TypeScript interfaces in frontmatter

### Data Management Pattern
- **JSON data files** in `src/data/` directory
- Import JSON directly in component frontmatter: `import data from "../data/portfolio.json"`
- Data is processed at build time - zero JavaScript sent to client
- Update portfolio content by editing JSON file (no code changes needed)
- TypeScript will validate JSON structure if you create interfaces

Example usage:
```astro
---
import data from "../data/portfolio.json";
const { personal, projects } = data;
---
<h1>{personal.name}</h1>
{projects.map(project => <div>{project.title}</div>)}
```

### Asset Handling
- **Large files (videos)** → `public/` for direct serving (not processed)
- **Optimized images** → `src/assets/` for Astro's image optimization
- **Static files** → `public/` (e.g., favicon, fallback images)
- Reference public files as URL strings: `"/background.webm"`
- Reference assets imports with `.src` property: `import img from "../assets/logo.png"` → `{img.src}`

### Styling Patterns
- Global styles in `src/styles/global.css`
- Component-specific styles in `<style>` tags within `.astro` files
- Prefer Tailwind utilities; use custom CSS only when necessary
- Scoped styles by default in Astro components

### Icon Usage

**Using astro-icon with Iconify:**
```astro
---
import { Icon } from "astro-icon/components";
---
<Icon name="mdi:github" class="w-6 h-6" />
```

**Popular icon collections:**
- `mdi:` - Material Design Icons (most comprehensive)
- `lucide:` - Lucide Icons (modern, minimal)
- `simple-icons:` - Brand/logo icons (GitHub, React, etc.)
- `heroicons:` - Heroicons (Tailwind UI style)

**Finding icons:**
- Browse all icons at https://icon-sets.iconify.design/
- Examples: `mdi:github`, `mdi:linkedin`, `mdi:email`, `simple-icons:react`, `simple-icons:typescript`

**Best practices:**
- Icons render as inline SVG (no JavaScript, fully styleable with CSS)
- Use consistent size classes: `w-6 h-6`, `w-8 h-8`
- Add `aria-label` to icon-only buttons/links for accessibility
- Use semantic color classes from Tailwind

### Performance Considerations
- Video elements: Use optimized formats (WebM), include poster images
- Images: Leverage Astro's built-in image optimization
- Icons: astro-icon renders static SVG at build time (zero runtime JS)
- Lazy loading: Consider for below-the-fold media
- Font loading: Optimize web font delivery if custom fonts are added
