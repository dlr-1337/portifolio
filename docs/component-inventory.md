# portifolio - Component Inventory

**Date:** 2026-04-19
**Scope:** single-part web application

## Overview

This project does not yet have a broad reusable component library. Instead, it uses one main client component plus a few route-level modules that orchestrate content, metadata, and testing. That makes the inventory short, but it also clearly shows where future extraction work should happen.

## UI Components

| Component | Path | Type | Responsibility | Reuse Notes |
| --- | --- | --- | --- | --- |
| `PortfolioPage` | `src/components/portfolio/portfolio-page.tsx` | client component | Renders hero, identity card, project cards, contact section, social links, and footer; owns reveal animations | Best candidate for future section extraction if complexity grows |

## Route and Shell Modules

| Module | Path | Type | Responsibility |
| --- | --- | --- | --- |
| `RootLayout` | `src/app/layout.tsx` | server layout | Applies global fonts and metadata |
| `Home` | `src/app/page.tsx` | server route | Injects JSON-LD and renders `PortfolioPage` |
| `robots` | `src/app/robots.ts` | metadata route | Generates robots instructions |
| `sitemap` | `src/app/sitemap.ts` | metadata route | Generates sitemap entries |

## Content and Contract Modules

| Module | Path | Responsibility | Why It Matters |
| --- | --- | --- | --- |
| `siteContent` | `src/content/site.ts` | Stores all public copy, links, project data, and SEO values | Primary source of truth for edits |
| `absoluteUrl` | `src/content/site.ts` | Normalizes URLs for OG image and project links | Keeps metadata URL generation consistent |
| `SiteContent` and related interfaces | `src/types/content.ts` | Defines the expected shape for content | Prevents silent drift between content and UI |

## Styling Surfaces

| Surface | Path | Responsibility |
| --- | --- | --- |
| Global design tokens and semantic classes | `src/app/globals.css` | Defines the brand look, gradients, buttons, frames, and accessibility rules |
| Tailwind utility usage | inline in `PortfolioPage` | Handles layout, spacing, responsive grids, and sizing |

## Test Components and Helpers

| Test Artifact | Path | Responsibility |
| --- | --- | --- |
| Homepage tests | `src/app/page.test.tsx` | Validates visible sections and real CTA/project links |
| Global test setup | `src/test/setup.ts` | Provides `IntersectionObserver` mock for animated components |

## Section Inventory Inside `PortfolioPage`

Although they are not extracted into separate files yet, `PortfolioPage` contains these logical UI blocks:

1. **Hero block** - positioning copy and primary CTAs
2. **Identity card** - role, location, and availability summary
3. **Projects section** - mapped cards from `siteContent.projects.items`
4. **Contact section** - closing CTA and social links
5. **Footer** - signature and rights text

## Reuse Assessment

### Reusable Today

- typed content structure
- link rendering patterns
- button classes
- section frame styling
- motion variant/transition configuration

### Not Yet Modularized

- project card
- hero CTA group
- social links block
- footer block

If repeated pages or multiple portfolio sections are introduced, those inline blocks should become dedicated components before logic starts to spread.

## Guidance for Future Refactors

- Extract `ProjectCard` first if project cards gain richer media or interactions.
- Extract section-level components if new sections are added to the homepage.
- Keep `siteContent` as the single source of truth unless a real CMS or data source is introduced.
- Preserve the server/client boundary: route composition in `src/app`, interaction-heavy presentation in client components.

---

Generated using BMAD Method `document-project` workflow
