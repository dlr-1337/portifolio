# portifolio - Architecture

**Date:** 2026-04-19
**Project Type:** web
**Repository Type:** monolith
**Architecture Pattern:** App Router shell with typed content-driven presentation

## System Purpose

The system is a public-facing portfolio site for Otavio Queiroz. It presents professional positioning, featured projects, and contact CTAs in a visually distinctive landing-page format. The repository focuses on one polished web experience rather than multiple pages, backend features, or authenticated user flows.

## Top-Level Architecture

The application follows a simple layered structure:

1. **Route and metadata layer** in `src/app`
2. **Presentation layer** in `src/components/portfolio`
3. **Content layer** in `src/content`
4. **Contract layer** in `src/types`
5. **Test support layer** in `src/test`

This is not a domain-heavy architecture. Most repository value comes from:

- content fidelity
- visual design
- SEO correctness
- predictable extension points for future sections or pages

## Runtime Flow

1. Next.js resolves the homepage route from `src/app/page.tsx`.
2. `page.tsx` builds two JSON-LD payloads from `siteContent`.
3. The page renders `PortfolioPage` and passes `siteContent` as a typed prop.
4. `PortfolioPage` renders hero, projects, contact, and footer sections with `motion/react`.
5. `layout.tsx` provides fonts and top-level metadata for SEO/social cards.
6. `globals.css` supplies design tokens and semantic CSS classes used together with Tailwind utility classes.

## Module Breakdown

| Module | Responsibility | Notes |
| --- | --- | --- |
| `src/app/layout.tsx` | Root HTML shell, fonts, metadata, Open Graph, Twitter, robots defaults | Treat as SEO and global shell entrypoint |
| `src/app/page.tsx` | Homepage route composition and JSON-LD injection | Server component |
| `src/app/robots.ts` | Robots manifest generation | Reads `siteContent.seo.siteUrl` |
| `src/app/sitemap.ts` | Sitemap generation | Single-route sitemap |
| `src/app/globals.css` | Design tokens, gradients, semantic classes, motion accessibility rules | Shared global style system |
| `src/components/portfolio/portfolio-page.tsx` | Main visual component for all homepage sections | Client component; owns motion configuration |
| `src/content/site.ts` | Source of truth for portfolio text, links, projects, and SEO values | Most editorial changes belong here |
| `src/types/content.ts` | Content contracts and project link interfaces | Keeps `siteContent` shape explicit |
| `src/app/page.test.tsx` | Render and link coverage for homepage | Verifies visible outcomes instead of internals |
| `src/test/setup.ts` | Global test setup | Mocks `IntersectionObserver` for animation-dependent rendering |

## Data and Content Architecture

There is no persisted runtime data layer in this repository.

Instead, the app uses a static content model:

- `siteContent` is a typed object committed in source control.
- All visible copy, project cards, contact links, and SEO values are derived from that object.
- `absoluteUrl()` normalizes absolute URLs for social cards and JSON-LD references.

Implications:

- Content updates are code changes.
- There is no CMS adapter, API fetch, cache invalidation flow, or database migration path.
- Future dynamic content will require introducing a new data boundary rather than extending an existing one.

## UI Architecture

### Structural Sections

- Hero / positioning
- Identity card
- Featured projects grid
- Contact / CTA block
- Footer

### Rendering Model

- `PortfolioPage` is the only committed UI component with real rendering logic.
- Repetition happens inline through data mapping rather than via a deeper component library.
- Project cards are generated from `content.projects.items`.
- External links include `target="_blank"` and `rel="noopener noreferrer"` when appropriate.

### Motion Model

- Motion variants are declared once in `PortfolioPage`.
- Each major section uses `whileInView` with `viewport` thresholds and the shared transition.
- `globals.css` includes `prefers-reduced-motion` handling to disable animation timing when the user requests reduced motion.

## Styling Architecture

Styling is split across:

- **Tailwind utilities** for spacing, layout, grids, width constraints, and responsive behavior
- **Global semantic CSS classes** for the visual identity and reusable patterns

Key design tokens live in `:root` inside `globals.css`:

- background, paper, ink, accent, accent-alt
- shared radii
- section spacing
- shared shadow

This gives the project a hybrid approach:

- utility classes for layout velocity
- named classes for brand-specific visuals

## SEO and Discoverability Architecture

SEO is a first-class concern despite the app's small size.

Implemented mechanisms:

- App Router `metadata` in `layout.tsx`
- canonical URL
- Open Graph image and descriptive metadata
- Twitter summary card metadata
- `robots.ts`
- `sitemap.ts`
- Person and CreativeWork JSON-LD in `page.tsx`

Because all SEO values come from `siteContent`, content and metadata stay aligned as long as the source object remains consistent.

## State Management

There is no application state management library.

Current state model:

- no Redux, Zustand, Context-based app store, or server cache layer
- no form state or async state
- only render-time props plus internal motion state handled by the animation library

This keeps the project easy to reason about, but it also means any future interactive feature will need a new local state strategy.

## API, Data, and Integration Surface

### Internal API

None detected.

There are no route handlers, API folders, fetch clients, service adapters, or server actions committed in the runtime app.

### Database / Models

None detected.

There are no Prisma schemas, ORM models, migrations, or database connectors in this repository.

### External Endpoints Used by the UI

- WhatsApp deep link
- `mailto:` link
- GitHub profile link
- LinkedIn profile link

These are simple outbound links configured in content, not API integrations.

## Testing Strategy

Testing is intentionally lightweight:

- `Vitest` with `jsdom`
- `@testing-library/react`
- `@testing-library/jest-dom`
- `src/test/setup.ts` for global browser API mocking

Current test coverage validates:

- main section headings render
- CTA links point to the expected targets
- featured project titles and links are present

This is good baseline coverage for a static landing page, but not a replacement for browser-level smoke tests.

## Deployment and Operations

No committed deployment pipeline was detected in the repository.

What exists:

- a generic `README.md` mentioning Vercel
- `.gitignore` excludes `.vercel`

What is missing from committed code:

- Vercel config
- Netlify config
- Dockerfile
- GitHub Actions workflow
- environment file examples

Inference: the project is likely intended for a standard Next.js hosting workflow, but deployment is not formally documented in source control yet.

## Architectural Constraints

- The homepage currently depends on a single content object; splitting content across files would require deliberate restructuring.
- The main UI is concentrated in one client component, so feature growth may eventually justify section-level component extraction.
- Metadata and content are tightly linked; changes to social/SEO values should remain centralized in `siteContent`.
- Since there is no backend, any future lead form, analytics eventing, or CMS integration will introduce new architecture categories that do not exist today.

## Safe Extension Points

- Add new homepage sections by extending `SiteContent` and `PortfolioPage`.
- Add new routes under `src/app` if the portfolio expands beyond a single page.
- Extract reusable UI subcomponents from `PortfolioPage` once section complexity grows.
- Add browser/E2E coverage alongside the existing render tests if regressions become more visual or interaction-heavy.

## Brownfield Planning Notes

For future PRD or implementation work, anchor decisions on these facts:

- this is currently a static, content-driven site
- runtime complexity is intentionally low
- the primary risks are visual regression, SEO drift, and content inconsistency
- the fastest route for most edits is still content updates in `src/content/site.ts`

---

Generated using BMAD Method `document-project` workflow
