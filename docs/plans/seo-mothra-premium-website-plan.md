# SEO Mothra Premium Website Implementation Plan

> **For Hermes:** Use `subagent-driven-development` to implement this plan task-by-task.

**Goal:** Build SEO Mothra as a premium, modern, high-performance website with Sanity CMS content management, GitHub-based source control/workflow, and strong SEO foundations.

**Architecture:** Use a Next.js App Router frontend with a Sanity-backed content model for pages, blogs, services, and location content. Keep the visual system premium and editorial, with reusable components, strong typography, deliberate motion, and fast static-first delivery. GitHub will be the source of truth for code, content schema, and deployment automation.

**Tech Stack:** Next.js, React, TypeScript, Sanity CMS, Tailwind CSS, GitHub, Vercel or equivalent deployment, SEO metadata/structured data, image optimization, sitemap/robots, analytics, performance testing.

---

## Scope and Outcomes

This plan covers:
- A premium website information architecture
- Brand and visual design direction
- Sanity CMS setup and content models
- SEO strategy and page-level optimization
- GitHub repo workflow and deployment hygiene
- Performance, accessibility, and technical SEO baseline

This plan does not yet implement the site. It defines the exact execution path.

---

## Task 1: Lock the product scope and site structure

**Objective:** Define the site map, target pages, and content hierarchy before any code is written.

**Files:**
- Create: `docs/plans/site-structure.md`
- Create: `docs/plans/content-model-outline.md`

**Step 1: Write the site map**

Include these top-level sections:
- Home
- About
- Services
- Locations
- Blog
- Case Studies / Results
- Contact
- Privacy Policy
- Terms

**Step 2: Define SEO page families**

Include templates for:
- Service pages
- Location pages
- Blog posts
- Comparison pages
- FAQ pages
- Conversion landing pages

**Step 3: Define conversion goals**

Examples:
- Contact form submissions
- Consultation bookings
- Phone clicks
- Lead magnet downloads

**Verification:**
- The site map includes every page family needed for SEO growth.
- Each page family has a purpose and CTA.

**Commit:**
```bash
git add docs/plans/site-structure.md docs/plans/content-model-outline.md
git commit -m "docs: define SEO Mothra site structure"
```

---

## Task 2: Establish brand direction and premium art direction

**Objective:** Define the visual identity so the site feels modern, premium, and distinct.

**Files:**
- Create: `docs/plans/brand-direction.md`
- Create: `docs/plans/ui-principles.md`

**Step 1: Define the visual language**

Specify:
- Typography style: editorial, high-contrast, confident
- Color system: dark premium base with restrained accent colors, or a clean light system with luxury neutral tones
- Layout style: wide spacing, strong hierarchy, generous whitespace
- Motion style: subtle, purposeful, not flashy

**Step 2: Define component style rules**

Rules should cover:
- Buttons
- Cards
- Hero sections
- Section headers
- Testimonials
- Content grids
- FAQ blocks
- CTA bands

**Step 3: Define brand voice**

Tone should be:
- Expert
- Calm
- Results-focused
- Credible
- Non-spammy

**Verification:**
- A designer or developer could build matching UI from the doc alone.

**Commit:**
```bash
git add docs/plans/brand-direction.md docs/plans/ui-principles.md
git commit -m "docs: define premium brand direction"
```

---

## Task 3: Choose the repository and deployment workflow

**Objective:** Make GitHub the clean source of truth with an opinionated branch and deployment process.

**Files:**
- Create: `docs/plans/github-workflow.md`
- Create: `.github/workflows/ci.yml` plan note only if not implementing yet

**Step 1: Define branch rules**

Recommended:
- `main` = production-ready
- feature branches = all work happens there
- pull requests = required for merges

**Step 2: Define repo standards**

Include:
- Conventional commits
- Required review before merge
- CI checks for lint, typecheck, and build
- No mixing with SolarX codebase

**Step 3: Define deployment target**

Prefer:
- Vercel for Next.js hosting
- Preview deployments per PR
- Production deploy on merge to `main`

**Verification:**
- Repo workflow is documented clearly enough to operate without tribal knowledge.

**Commit:**
```bash
git add docs/plans/github-workflow.md
git commit -m "docs: define GitHub workflow"
```

---

## Task 4: Design the Sanity content architecture

**Objective:** Design the CMS so content is flexible without becoming messy.

**Files:**
- Create: `docs/plans/sanity-content-architecture.md`
- Create: `docs/plans/sanity-schema-list.md`

**Step 1: Define singleton documents**

Likely singletons:
- Site settings
- Homepage
- Navigation
- Footer
- SEO defaults
- Social links

**Step 2: Define collections**

Likely collections:
- Pages
- Services
- Locations
- Blog posts
- Testimonials
- FAQs
- Authors
- Case studies

**Step 3: Define reusable content blocks**

Include portable blocks for:
- Hero
- Feature grids
- Statistics
- CTA panels
- Quote/testimonial blocks
- FAQ accordions
- Image/text sections
- Comparison tables

**Step 4: Define editorial rules**

Examples:
- Titles and descriptions required
- Slugs unique
- Canonical URL support
- SEO fields per document
- Open Graph image support

**Verification:**
- The CMS supports all planned page families.
- Content editors can publish without developer help.

**Commit:**
```bash
git add docs/plans/sanity-content-architecture.md docs/plans/sanity-schema-list.md
git commit -m "docs: define Sanity CMS architecture"
```

---

## Task 5: Define the information architecture and navigation

**Objective:** Build a navigation system that is easy to use and SEO-friendly.

**Files:**
- Create: `docs/plans/navigation-map.md`

**Step 1: Define primary nav**

Recommended:
- Services
- Locations
- Blog
- About
- Contact

**Step 2: Define footer nav**

Include:
- Core pages
- Legal links
- Top service links
- Top location links
- Social links

**Step 3: Define internal linking rules**

Rules should ensure:
- Every service links to related services and relevant locations
- Blog posts link into service pages
- Location pages link to service and contact pages
- Homepage links to the money pages

**Verification:**
- The navigation supports both humans and search engines.

**Commit:**
```bash
git add docs/plans/navigation-map.md
git commit -m "docs: define navigation architecture"
```

---

## Task 6: Create the technical SEO baseline

**Objective:** Make the website technically sound for crawling, indexing, and rich snippets.

**Files:**
- Create: `docs/plans/technical-seo-checklist.md`
- Create: `docs/plans/schema-strategy.md`

**Step 1: Define metadata requirements**

Include:
- Title templates
- Meta descriptions
- Canonicals
- Open Graph tags
- Twitter cards
- Robots directives

**Step 2: Define structured data**

Likely schemas:
- Organization
- LocalBusiness
- WebSite
- WebPage
- Article
- FAQPage
- BreadcrumbList

**Step 3: Define crawl rules**

Include:
- robots.txt strategy
- sitemap.xml strategy
- noindex rules for thin pages
- pagination rules

**Step 4: Define performance rules**

Baseline targets:
- Fast LCP
- Low CLS
- Minimal JS
- Optimized images

**Verification:**
- The SEO checklist can be used as a release gate.

**Commit:**
```bash
git add docs/plans/technical-seo-checklist.md docs/plans/schema-strategy.md
git commit -m "docs: define technical SEO baseline"
```

---

## Task 7: Plan the homepage for premium conversion

**Objective:** Define a homepage that feels premium and converts.

**Files:**
- Create: `docs/plans/homepage-wireframe.md`

**Step 1: Define the hero**

Hero should include:
- Clear value proposition
- Strong supporting subheading
- Primary CTA
- Secondary CTA
- Trust signal

**Step 2: Define the proof sections**

Include:
- Stats
- Testimonials
- Logos/clients if available
- Before/after or results blocks if relevant

**Step 3: Define the service overview**

Add concise entry points into each major service.

**Step 4: Define the SEO content blocks**

Include a well-written intro, FAQ section, and internal links.

**Verification:**
- The homepage supports premium branding and search intent.

**Commit:**
```bash
git add docs/plans/homepage-wireframe.md
git commit -m "docs: plan premium homepage"
```

---

## Task 8: Plan the service page template

**Objective:** Define a scalable template for high-converting service pages.

**Files:**
- Create: `docs/plans/service-page-template.md`

**Step 1: Define template sections**

Recommended:
- Hero
- Problem statement
- Service benefits
- Process
- Why choose us
- FAQ
- Related services
- CTA

**Step 2: Define on-page SEO rules**

Each service page needs:
- Unique title and H1
- Search-intent aligned intro
- Related internal links
- FAQ content
- Schema support

**Verification:**
- One template can generate all service pages consistently.

**Commit:**
```bash
git add docs/plans/service-page-template.md
git commit -m "docs: plan service page template"
```

---

## Task 9: Plan the location page template

**Objective:** Define a location SEO template that can scale across many cities.

**Files:**
- Create: `docs/plans/location-page-template.md`

**Step 1: Define unique local content requirements**

Every location page should include:
- Local-intent intro
- City-specific proof or details
- Nearby service coverage
- FAQs
- Local CTA

**Step 2: Avoid thin-content risk**

Require:
- Unique copy blocks
- Unique local examples
- Distinct metadata
- Distinct schema

**Verification:**
- Location pages are meaningfully different from one another.

**Commit:**
```bash
git add docs/plans/location-page-template.md
git commit -m "docs: plan location page template"
```

---

## Task 10: Plan the blog and content strategy

**Objective:** Build a content engine that supports SEO growth and brand authority.

**Files:**
- Create: `docs/plans/blog-strategy.md`
- Create: `docs/plans/topic-cluster-map.md`

**Step 1: Define topic clusters**

Examples:
- Service education
- Cost/pricing
- Comparison posts
- Buying guides
- FAQs
- Local SEO content

**Step 2: Define blog post template**

Include:
- Hook
- Summary
- Main sections
- FAQ
- CTA
- Related links

**Step 3: Define publishing cadence**

Set a realistic cadence for initial launch and ongoing growth.

**Verification:**
- Blog topics map to commercial intent and supporting intent.

**Commit:**
```bash
git add docs/plans/blog-strategy.md docs/plans/topic-cluster-map.md
git commit -m "docs: define blog strategy"
```

---

## Task 11: Plan visual system and reusable components

**Objective:** Define the component system used across the website.

**Files:**
- Create: `docs/plans/component-library.md`

**Step 1: List reusable components**

Include:
- Buttons
- Section headers
- Cards
- Badge/pills
- Testimonials
- FAQ accordion
- Stats rows
- CTA sections
- Breadcrumbs
- Tabs/filters if needed

**Step 2: Define spacing and rhythm**

Set consistent spacing scale and section padding rules.

**Step 3: Define responsive behavior**

Ensure all components adapt cleanly on mobile and desktop.

**Verification:**
- Reusable components support every planned page type.

**Commit:**
```bash
git add docs/plans/component-library.md
git commit -m "docs: define component library"
```

---

## Task 12: Define performance, accessibility, and QA gates

**Objective:** Ensure the site launches fast, accessible, and stable.

**Files:**
- Create: `docs/plans/qa-release-checklist.md`

**Step 1: Define performance checks**

Include:
- Lighthouse targets
- Image optimization rules
- Bundle size awareness
- Lazy loading rules

**Step 2: Define accessibility checks**

Include:
- Semantic headings
- Color contrast
- Keyboard navigation
- Focus states
- Alt text rules

**Step 3: Define release checks**

Include:
- Build passes
- Content models validate
- Sitemap and robots generated
- No broken links
- No missing metadata

**Verification:**
- The release checklist is usable as a go/no-go gate.

**Commit:**
```bash
git add docs/plans/qa-release-checklist.md
git commit -m "docs: define QA and release checklist"
```

---

## Execution Order Recommendation

1. Site structure
2. Brand direction
3. GitHub workflow
4. Sanity architecture
5. Navigation and internal linking
6. Technical SEO baseline
7. Homepage
8. Service template
9. Location template
10. Blog strategy
11. Component library
12. QA/release checklist

---

## Definition of Done

The website strategy is complete when:
- The site map is finalized
- The brand direction is documented
- The Sanity content model is fully specified
- GitHub workflow is defined
- SEO technical requirements are defined
- Page templates are ready for implementation
- QA and release gates are documented

---

## Next Step

If you want, the next move is to turn this plan into a full implementation scaffold for the new seo-mothra repo: folder structure, Sanity schemas, Next.js app structure, and the first premium homepage draft.
