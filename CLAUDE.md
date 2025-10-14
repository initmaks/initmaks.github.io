# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Maks Sorokin's personal academic website built with Astro and Tailwind CSS. The site showcases robotics research, publications, and professional experience. It's a static site generator project deployed to GitHub Pages at https://initmaks.github.io.

## Key Commands

### Development
- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build the production site 
- `npm run preview` - Preview the built site locally
- `npm run astro` - Run Astro CLI commands

### Deployment
The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Architecture

### Tech Stack
- **Framework**: Astro 5.x - Static site generator with component islands
- **Styling**: Tailwind CSS 4.x with Vite plugin integration
- **TypeScript**: Strict configuration extending Astro's recommended settings
- **Deployment**: GitHub Pages with custom domain (initmaks.github.io)

### File Structure
- `src/pages/` - Astro pages (index.astro is the main landing page)
- `src/layouts/Layout.astro` - Base layout component with SEO meta tags and Google Analytics
- `src/pages/publications/` - Individual publication detail pages
- `src/styles/global.css` - Global CSS imports and styles
- `assets/` - Media files (videos, images, PDFs, icons)
- `public/` - Static assets served directly

### Key Components
- **Layout.astro**: Base layout with SEO, analytics, and email obfuscation scripts
- **index.astro**: Main landing page with personal info, affiliations, and featured publications
- **publications.astro**: Full publications listing page
- Individual publication pages in `src/pages/publications/`

### Content Management
- Publications are manually authored as individual Astro pages
- Media assets (videos, images, PDFs) are stored in both `assets/` and `public/assets/`
- Email addresses are obfuscated using Base64 encoding for spam protection

### Styling Approach
- Tailwind CSS with utility-first approach
- Responsive design with mobile-first breakpoints
- Custom smooth scrolling and navigation highlighting
- Video autoplay with fallback handling