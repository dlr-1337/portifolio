# portifolio - Project Overview

**Date:** 2026-04-19
**Type:** web
**Architecture:** content-driven Next.js App Router monolith

## Executive Summary

This repository contains a single-page professional portfolio implemented with Next.js App Router, React 19, TypeScript, Tailwind CSS 4, and `motion/react`. The application is intentionally simple: a single homepage route renders typed content from a central content module, adds SEO metadata and JSON-LD, and delegates the visible UI to one client component responsible for reveal animations and the portfolio sections.

The codebase is optimized for editorial updates and visual polish rather than complex business logic. There is no backend, database, authentication flow, or internal API layer committed in this repository. Most changes will happen in `src/content/site.ts`, `src/components/portfolio/portfolio-page.tsx`, and `src/app/globals.css`.

## Project Classification

- **Repository Type:** monolith
- **Project Type(s):** web
- **Primary Language(s):** TypeScript
- **Architecture Pattern:** server entry + typed content source + single client presentation component

## Technology Stack Summary

| Category | Technology | Version | Why It Is Here |
| --- | --- | --- | --- |
| Framework | Next.js | 16.1.6 | App Router entrypoint, metadata, robots, sitemap, build/runtime |
| UI Runtime | React | 19.2.3 | Component rendering |
| Language | TypeScript | 5.x | Strict typing across app, content, and tests |
| Styling | Tailwind CSS | 4.x | Layout and utility classes |
| Global Styling | CSS | native | Design tokens, gradients, component classes, reduced-motion rules |
| Motion | motion/react | 12.35.0 | Scroll-based reveal animations |
| Fonts | next/font/google | bundled with Next.js | Loads Syne, Newsreader, and Space Mono |
| Testing | Vitest | 4.0.18 | Unit/render test runner |
| Test Utilities | Testing Library + jest-dom | 16.3.2 / 10.4.1 / 6.9.1 | DOM-oriented assertions for homepage rendering |
| Linting | ESLint + eslint-config-next | 9 / 16.1.6 | Next.js and TypeScript code quality rules |
| Build Tooling | PostCSS + Tailwind PostCSS plugin | 4.x | Tailwind CSS processing |

## Key Features

- Single public homepage rendered from `src/app/page.tsx`
- Structured portfolio content centralized in `src/content/site.ts`
- Typed content contracts in `src/types/content.ts`
- Animated hero, projects, and contact sections inside `PortfolioPage`
- SEO coverage through `metadata`, Open Graph, Twitter card data, `robots.ts`, `sitemap.ts`, and JSON-LD scripts
- One homepage test file validating headings and the real CTA/project links
- Open Graph asset available at `public/og/portfolio-cover.svg`

## Architecture Highlights

- **Server-first route composition:** `src/app/page.tsx` is a server component that injects JSON-LD and passes typed content into the main portfolio component.
- **Client-only UI boundary:** `src/components/portfolio/portfolio-page.tsx` is the only committed client component and owns all motion-based reveal behavior.
- **Single source of truth for content:** `siteContent` contains person data, hero copy, projects, CTAs, social links, and SEO values.
- **Typed content model:** `SiteContent` and related interfaces define the expected shape for UI content and links.
- **Metadata as code:** `src/app/layout.tsx`, `src/app/robots.ts`, and `src/app/sitemap.ts` keep SEO and crawler behavior within the App Router layer.
- **Visual identity in globals:** `src/app/globals.css` carries the design tokens, gradients, frame styles, buttons, and accessibility/responsiveness rules.

## Development Overview

### Prerequisites

- Node.js current LTS compatible with Next.js 16
- npm
- Local dependency installation via `npm install` or `npm ci`

No `engines` field is committed in `package.json`, so the exact Node baseline is not pinned by the repository itself.

### Getting Started

1. Install dependencies.
2. Start the development server.
3. Edit content in `src/content/site.ts` for editorial changes.
4. Edit `src/components/portfolio/portfolio-page.tsx` and `src/app/globals.css` for UI behavior and styling changes.

### Key Commands

- **Install:** `npm install`
- **Dev:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Test:** `npm run test`

## Repository Structure

The runtime application is concentrated in a very small set of folders:

- `src/app` - route entrypoints, metadata, global styles, and the homepage test
- `src/components/portfolio` - the main client UI component
- `src/content` - typed portfolio content and URL helper
- `src/types` - shared interfaces for content contracts
- `src/test` - shared test setup
- `public` - static SVG assets and OG image

The repository also contains BMAD tooling directories (`.agents/`, `_bmad/`, `_bmad-output/`) that support AI workflows but are not part of the runtime web app.

## Documentation Map

For detailed information, continue with:

- [index.md](./index.md) - master documentation entry point
- [architecture.md](./architecture.md) - detailed system architecture
- [source-tree-analysis.md](./source-tree-analysis.md) - annotated directory structure
- [component-inventory.md](./component-inventory.md) - UI and structural module inventory
- [development-guide.md](./development-guide.md) - local setup and workflow notes

---

Generated using BMAD Method `document-project` workflow
