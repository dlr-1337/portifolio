# portifolio - Development Guide

**Date:** 2026-04-19

## Current Repository State

This repository contains the source code for the portfolio app, but local runtime dependencies are not currently installed in this workspace. During documentation generation, the standard validation commands failed because the local binaries for `next`, `eslint`, and `vitest` were unavailable.

That means the code structure was documented successfully, but command verification is currently blocked until dependencies are installed.

## Prerequisites

- Node.js current LTS compatible with Next.js 16
- npm
- dependency installation through `npm install` or `npm ci`

## Local Setup

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The default Next.js dev server target is `http://localhost:3000`.

## Common Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Create production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest once |
| `npm run test:watch` | Run Vitest in watch mode |

## Where To Make Changes

### Content updates

Edit `src/content/site.ts`.

This file controls:

- hero copy
- contact text
- project cards
- social links
- SEO title, description, keywords, OG image, and site URL

### UI layout and animation changes

Edit `src/components/portfolio/portfolio-page.tsx`.

This file controls:

- section structure
- project card rendering
- motion variants and transitions
- CTA placement

### Visual identity changes

Edit `src/app/globals.css`.

This file controls:

- color tokens
- typography tokens loaded into CSS variables
- section frame styling
- buttons and semantic classes
- reduced-motion handling

### SEO and shell changes

Edit:

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`

## Testing Approach

The current automated testing strategy focuses on the homepage render output:

- headings exist
- CTAs use the real WhatsApp and email targets
- featured projects render with the expected links

Relevant files:

- `src/app/page.test.tsx`
- `src/test/setup.ts`

The setup file mocks `IntersectionObserver` so animation-dependent rendering does not break under `jsdom`.

## Validation Status From This Documentation Run

Attempted commands:

- `npm run lint`
- `npm run test`
- `npm run build`

Observed result:

- all three commands failed before execution because local project dependencies are not installed, so `eslint`, `vitest`, and `next` were not found on PATH

Recommended next step before feature work:

```bash
npm install
npm run lint
npm run test
npm run build
```

## Code Conventions Observed

- TypeScript strict mode is enabled.
- Internal imports use the `@/*` alias.
- Content is centralized instead of duplicated across components.
- External links that open in a new tab include `rel="noopener noreferrer"`.
- Tests assert visible behavior rather than implementation details.

## Deployment Notes

No committed deployment workflow or infrastructure config was found.

Practical implication:

- build and hosting are probably expected to follow a standard Next.js deployment path
- deployment details should be documented explicitly if the project starts shipping to shared environments

## Safe Workflow For Typical Changes

1. Update content in `src/content/site.ts` if the change is editorial.
2. Update `PortfolioPage` and/or `globals.css` if the change is presentational.
3. Run lint, test, and build once dependencies are installed.
4. Re-check metadata if URLs or social assets changed.

---

Generated using BMAD Method `document-project` workflow
