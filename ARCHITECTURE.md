# SEO Mothra - Architecture Overview

## System Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     Frontend (Next.js 16)                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │   App Pages  │  │  Components  │  │    Styles    │           │
│  │  (src/app)   │  │  (src/comp)  │  │   (Tailwind) │           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
│         ▲                  ▲                                      │
│         │ Current: Hardcoded data from src/lib/content.ts       │
│         │ TODO: Query Sanity via next-sanity client             │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│              Embedded Sanity Studio (Route: /studio)            │
│                   NextStudio Component                          │
│            (src/app/studio/[[...tool]]/page.tsx)               │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  Edit Documents  │  Manage Schemas  │  Version Control  │  │
│  │  - siteSettings  │  - page          │  - History        │  │
│  │  - page          │  - Add new types │  - Preview        │  │
│  └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼ (Studio Config)
┌─────────────────────────────────────────────────────────────────┐
│               Sanity Backend (Cloud)                            │
│  Project: wj6g4kk6  |  Dataset: production                      │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Document   │  │   Document   │  │   Document   │          │
│  │  siteSettings│  │    page      │  │   (future)   │          │
│  │              │  │              │  │   blogPost   │          │
│  │ - siteTitle  │  │ - title      │  │              │          │
│  │ - ogImage    │  │ - slug       │  │ - location   │          │
│  │ - socials    │  │ - seoTitle   │  │ - service    │          │
│  │              │  │ - content    │  │ - testimonial│          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
│  Storage Layer: GraphQL API, GROQ Query API                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼ (GROQ / REST)
┌─────────────────────────────────────────────────────────────────┐
│                  MCP Tools (Sanity Integration)                 │
│                                                                 │
│  - query_documents      (GROQ queries)                          │
│  - create_documents     (New documents)                         │
│  - patch_document       (Updates)                               │
│  - publish_documents    (Publish/unpublish)                     │
│  - get_schema          (Schema inspection)                      │
│  - deploy_schema       (Schema updates)                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow: Current vs. Ideal

### Current Flow (Hardcoded)
```
User Request → Next.js Page Component
                    ↓
              src/lib/content.ts (hardcoded arrays)
                    ↓
              Render JSX with static data
```

### Ideal Flow (With Sanity)
```
User Request → Next.js Page Component
                    ↓
              Create Sanity Client
                    ↓
              Execute GROQ Query
                    ↓
              Sanity API (Cloud)
                    ↓
              Fetch Document(s)
                    ↓
              Cache/Return Data
                    ↓
              Render JSX with dynamic data
```

---

## Environment & Deployment

### Local Development
- **Server:** Next.js dev server (http://localhost:3000)
- **Studio:** Embedded at http://localhost:3000/studio
- **Sanity:** Cloud (same project as production)
- **Data:** Shared production dataset (be careful!)

### Production
- **Server:** Deployed via Vercel
- **Studio:** https://www.seomothra.com/studio
- **Sanity:** Cloud (wj6g4kk6, production dataset)
- **Environment:** `.vercel/.env.production.local`

---

## Dependency Map

```
next@16.2.7
  ├── react@19.2.3
  ├── react-dom@19.2.3
  ├── next-sanity@13.0.11
  │   ├── sanity@5.30.0
  │   └── @sanity/vision@5.30.0
  ├── tailwindcss@4.0.0
  │   └── @tailwindcss/postcss@4.3.0
  └── gsap@3.15.0
```

**Key Libraries:**
- `next-sanity` - Official Next.js integration for Sanity
- `sanity` - Core Sanity package for studio & client
- `@sanity/vision` - Visual builder for GROQ queries
- `tailwindcss` - Utility-first CSS framework
- `gsap` - Animation library (used in page-motion.tsx)

---

## Project Structure

```
seo-mothra/
├── public/                          # Static assets
├── src/
│   ├── app/                         # Next.js app directory
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page
│   │   ├── studio/                 # Sanity Studio route
│   │   │   └── [[...tool]]/
│   │   │       └── page.tsx        # Studio page
│   │   ├── blog/                   # Blog pages (hardcoded)
│   │   ├── contact/                # Contact page
│   │   ├── locations/              # Location pages (hardcoded)
│   │   ├── services/               # Services page
│   │   └── ...
│   ├── components/                 # Reusable components
│   │   ├── hero.tsx
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   └── page-motion.tsx
│   └── lib/                        # Utilities
│       ├── content.ts              # Hardcoded content ⚠️
│       ├── site.ts                 # Site helpers
│       └── crm-store.ts            # CRM state management
├── sanity/                         # Sanity CMS
│   ├── schemas/                    # Document types
│   │   ├── index.ts
│   │   ├── page.ts
│   │   └── siteSettings.ts
│   └── structure.ts                # Studio structure
├── sanity.config.ts                # Sanity configuration
├── next.config.ts                  # Next.js configuration
├── tsconfig.json                   # TypeScript config
├── package.json                    # Dependencies
└── .env.example                    # Environment variables
```

---

## Access Patterns

### 1. Frontend Access (Browser)
```
http://localhost:3000          → Next.js App
http://localhost:3000/studio   → Sanity Studio
https://www.seomothra.com      → Production App
https://www.seomothra.com/studio → Production Studio
```

### 2. Programmatic Access (MCP/API)
```
Sanity API Base: https://api.sanity.io/v2025-01-01

Projects API:
  GET https://manage.sanity.io/projects

GraphQL:
  POST https://projectId.api.sanity.io/v1/graphql/production

GROQ:
  POST https://projectId.api.sanity.io/v1/data/query/production
  Headers: Authorization: Bearer {token}
```

### 3. Git Access
```
Clone: https://github.com/seankrux/seo-mothra.git
SSH: git@github.com:seankrux/seo-mothra.git
Branches: main
Remote: origin
```

---

## Technology Stack Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend Framework** | Next.js 16 | Server/Client rendering |
| **UI Library** | React 19 | Component framework |
| **Styling** | Tailwind CSS 4 | Utility-first CSS |
| **CMS** | Sanity 5.30 | Headless content management |
| **Integration** | next-sanity 13 | Sanity ↔ Next.js bridge |
| **Animation** | GSAP 3.15 | Motion & animation |
| **Language** | TypeScript 5.9 | Type-safe JavaScript |
| **Deployment** | Vercel | Serverless hosting |

---

## Next Steps (Priority Order)

1. **Activate Sanity Queries** (Medium effort)
   - Create `src/lib/sanity.client.ts`
   - Add `fetch` functions for pages and settings
   - Update components to use Sanity data

2. **Migrate Hardcoded Content** (High effort)
   - Create documents in Studio for locations
   - Create documents for blog articles
   - Update pages to query from Sanity

3. **Extend Schemas** (Low effort)
   - Add `blogPost` document type
   - Add `location` document type
   - Add `service` document type

4. **Optimize** (Ongoing)
   - Add image/media management
   - Enable draft preview
   - Setup webhooks for cache invalidation
   - Add analytics integration

---

*Last Updated: 2026-06-09*
