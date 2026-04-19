# portifolio - Source Tree Analysis

**Date:** 2026-04-19

## Overview

This repository is a compact Next.js monolith. The runtime web app lives almost entirely under `src/`, supported by root-level framework/tooling config and a small `public/` asset directory. The repo also contains BMAD workflow scaffolding for AI-assisted planning and delivery, but that scaffolding is not part of the deployed portfolio application.

## Complete Directory Structure

```text
portifolio/
|-- .agents/                         # BMAD skill definitions and workflow assets
|-- _bmad/                          # BMAD module configuration
|-- _bmad-output/                   # Generated AI/planning artifacts
|-- docs/                           # Generated project documentation
|-- public/                         # Static assets served as-is
|   |-- og/
|   |   `-- portfolio-cover.svg     # Open Graph social preview asset
|   |-- file.svg
|   |-- globe.svg
|   |-- next.svg
|   |-- vercel.svg
|   `-- window.svg
|-- src/
|   |-- app/
|   |   |-- favicon.ico             # Browser icon
|   |   |-- globals.css             # Global tokens and semantic classes
|   |   |-- layout.tsx              # Root layout + metadata + fonts
|   |   |-- page.test.tsx           # Homepage render/link tests
|   |   |-- page.tsx                # Homepage route + JSON-LD
|   |   |-- robots.ts               # Robots manifest
|   |   `-- sitemap.ts              # Sitemap manifest
|   |-- components/
|   |   `-- portfolio/
|   |       `-- portfolio-page.tsx  # Main client UI component
|   |-- content/
|   |   `-- site.ts                 # Single source of truth for visible content
|   |-- test/
|   |   `-- setup.ts                # Vitest global setup
|   `-- types/
|       `-- content.ts              # Shared content contracts
|-- .gitignore
|-- eslint.config.mjs
|-- next.config.ts
|-- package-lock.json
|-- package.json
|-- postcss.config.mjs
|-- README.md
|-- tsconfig.json
`-- vitest.config.ts
```

## Critical Directories

### `src/app`

**Purpose:** App Router entry layer.
**Contains:** root layout, homepage route, metadata files, global CSS, and homepage tests.
**Entry Points:** `src/app/layout.tsx`, `src/app/page.tsx`

This folder is the runtime boundary for the application. It also holds route-adjacent SEO files (`robots.ts`, `sitemap.ts`) and the only committed route test.

### `src/components/portfolio`

**Purpose:** Visible homepage UI.
**Contains:** `PortfolioPage`, the main client-rendered component.

All user-facing sections are assembled here. If the UI grows, this is the first place likely to be split into smaller subcomponents.

### `src/content`

**Purpose:** Centralized content and URL helpers.
**Contains:** `site.ts`

This is the highest-leverage editing surface for product/content changes. Text, links, project cards, and SEO values are managed here.

### `src/types`

**Purpose:** Shared TypeScript contracts for content.
**Contains:** `content.ts`

The type layer keeps content shape explicit and stabilizes future changes to `siteContent`.

### `src/test`

**Purpose:** Shared testing infrastructure.
**Contains:** `setup.ts`

Currently used to provide a `MockIntersectionObserver` so render tests can execute without browser-only APIs.

### `public`

**Purpose:** Static assets.
**Contains:** small SVG icon set plus `og/portfolio-cover.svg`.

These assets are lightweight. Total committed size in `public/` is about 4.6 KB for the SVGs listed by the scan.

### `.agents`, `_bmad`, `_bmad-output`

**Purpose:** AI workflow and planning support.
**Contains:** skill definitions, configuration, and generated planning artifacts.

These directories matter for the author's workflow but not for the deployed runtime. Keep them out of runtime assumptions when planning app features.

## Entry Points

- **Main runtime entry:** `src/app/page.tsx`
- **Global shell:** `src/app/layout.tsx`
- **Crawler metadata:** `src/app/robots.ts`
- **Sitemap generation:** `src/app/sitemap.ts`
- **Primary client UI entry:** `src/components/portfolio/portfolio-page.tsx`

## File Organization Patterns

- Route entry and metadata stay in `src/app`
- Content is intentionally separated from rendering in `src/content`
- Shared type contracts live in `src/types`
- There is one main UI component rather than a large reusable component library
- Tests are colocated near the route (`page.test.tsx`) with shared setup under `src/test`
- Styling mixes Tailwind utility classes with global semantic classes in `globals.css`

## Key File Types

### Route files

- **Pattern:** `src/app/*.tsx`, `src/app/*.ts`
- **Purpose:** page entry, layout shell, metadata routes
- **Examples:** `page.tsx`, `layout.tsx`, `robots.ts`, `sitemap.ts`

### Presentation components

- **Pattern:** `src/components/**/*.tsx`
- **Purpose:** user-facing UI composition
- **Examples:** `src/components/portfolio/portfolio-page.tsx`

### Content modules

- **Pattern:** `src/content/*.ts`
- **Purpose:** structured data and content helpers
- **Examples:** `src/content/site.ts`

### Type contracts

- **Pattern:** `src/types/*.ts`
- **Purpose:** compile-time contracts for content objects
- **Examples:** `src/types/content.ts`

### Tests

- **Pattern:** `src/**/*.test.tsx`, `src/test/*.ts`
- **Purpose:** rendering assertions and setup helpers
- **Examples:** `src/app/page.test.tsx`, `src/test/setup.ts`

### Root config

- **Pattern:** `*.config.*`, `package.json`, `tsconfig.json`
- **Purpose:** framework, lint, test, and build behavior
- **Examples:** `next.config.ts`, `eslint.config.mjs`, `vitest.config.ts`, `postcss.config.mjs`

## Asset Locations

- **Open Graph asset:** `public/og/portfolio-cover.svg`
- **Decorative/default SVGs:** `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`
- **Favicon:** `src/app/favicon.ico`

## Configuration Files

- `package.json` - scripts, runtime dependencies, dev dependencies
- `tsconfig.json` - strict TypeScript config with `@/*` path alias
- `next.config.ts` - minimal Next.js config placeholder
- `eslint.config.mjs` - Next.js + TypeScript ESLint rules
- `vitest.config.ts` - jsdom test environment and alias config
- `postcss.config.mjs` - Tailwind PostCSS plugin wiring
- `.gitignore` - excludes build artifacts, env files, coverage, `.vercel`, and dependencies

## Notes for Development

- The small source tree is a strength: most tasks can be completed after understanding fewer than ten runtime files.
- `README.md` is still the generic create-next-app template, so rely on the generated docs in `docs/` for current project understanding.
- There is no `src/app/api`, `lib/server`, `db`, `prisma`, or `services` folder, which confirms the absence of backend and persistence layers in the committed app.

---

Generated using BMAD Method `document-project` workflow
