# Sanity CMS Integration Guide - SEO Mothra

## Project Overview

**Sanity Project ID:** `wj6g4kk6`  
**Dataset:** `production`  
**GitHub Repository:** [seankrux/seo-mothra](https://github.com/seankrux/seo-mothra)  
**Live Studio URL:** https://www.seomothra.com/studio  
**Local Studio Path:** `/studio` (accessed via `http://localhost:3000/studio` in development)

---

## Current Integration Status

✅ **Sanity is fully configured** in the Next.js project:
- Configuration file: [`sanity.config.ts`](./sanity.config.ts)
- Studio embedded at `/studio` route via [`src/app/studio/[[...tool]]/page.tsx`](./src/app/studio/[[...tool]]/page.tsx)
- Dependencies: `next-sanity` v13.0.11, `sanity` v5.30.0

⚠️ **Limited Frontend Integration:**
- Currently, **Sanity is NOT actively used in frontend queries**
- Content is hardcoded in [`src/lib/content.ts`](./src/lib/content.ts)
- Two schemas defined but not yet wired to pages

---

## Schema Definitions

### 1. **siteSettings** (Singleton Document)
Used for global site configuration and metadata.

**Fields:**
- `siteTitle` (string, required)
- `siteDescription` (text)
- `ogImage` (image with hotspot)
- `supportEmail` (string)
- `socialLinks` (array of objects with `label` and `url`)

**File:** [`sanity/schemas/siteSettings.ts`](./sanity/schemas/siteSettings.ts)

---

### 2. **page** (Document Type)
For creating individual pages with SEO metadata.

**Fields:**
- `title` (string, required)
- `slug` (slug, auto-generated from title, required)
- `seoTitle` (string)
- `seoDescription` (text)
- `content` (portable text / block content)

**File:** [`sanity/schemas/page.ts`](./sanity/schemas/page.ts)

---

## Accessing Sanity Studio

### Frontend Access
1. **Development:** `http://localhost:3000/studio`
2. **Production:** https://www.seomothra.com/studio
3. Once loaded, you can browse/edit documents and manage schemas

### Programmatic Access
Use the **Sanity MCP** tools with the developer token from memory:
```
Token: skwZy9uUeoAeJtH3a5XqS31I3SjVpSmBKQiF3P3qEIAMw1gHfWBjSn3JyX2bimtzeaY3GPSMu8YlHRjozJqkKCK6UqJPCCzbPIGfO8ijPbEIuZTnCYJ53VTkCpSbk85Edx01hR2VSzDuK8E0KM6vWphnspCD9x0G7Q43Evva8fX6Axg6L96v
```

---

## Environment Configuration

### Required Environment Variables
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=wj6g4kk6
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_STUDIO_PATH=/studio
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**File:** [`.env.example`](./.env.example)

---

## Next Steps to Full Integration

### Phase 1: Activate Frontend Queries
1. Create Sanity client utility:
   ```typescript
   // src/lib/sanity.client.ts
   import { createClient } from "next-sanity";
   
   export const sanityClient = createClient({
     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
     apiVersion: "2025-01-01",
     useCdn: true,
   });
   ```

2. Replace hardcoded content in `src/lib/content.ts` with GROQ queries
3. Fetch data in server components using the client

### Phase 2: Migrate Hardcoded Content
Current hardcoded content in `src/lib/content.ts`:
- **Locations:** Austin, Dallas, Houston, San Antonio
- **Articles:** 6 blog articles with titles, slugs, and metadata

These should be migrated to Sanity documents for CMS management.

### Phase 3: Schema Enhancements
Consider adding:
- **blogPost** schema (extend from page)
- **location** schema (for city-specific pages)
- **service** schema (for service offerings)
- **testimonial** schema (for client reviews)

---

## File Structure

```
.
├── sanity.config.ts                    # Sanity configuration
├── sanity/
│   ├── schemas/
│   │   ├── index.ts                    # Schema exports
│   │   ├── page.ts                     # Page document type
│   │   └── siteSettings.ts             # Global site settings
│   └── structure.ts                    # Studio structure (empty)
├── src/
│   ├── app/
│   │   └── studio/[[...tool]]/
│   │       └── page.tsx                # Studio route
│   └── lib/
│       └── content.ts                  # Hardcoded content (TODO: migrate to Sanity)
├── .env.example                        # Environment variables template
└── package.json                        # Dependencies
```

---

## Developer Notes

- **API Version:** `2025-01-01`
- **Next.js Version:** 16.2.7
- **React Version:** 19.2.3
- **Sanity Vision:** Enabled (v5.30.0)

### Common Tasks

**Query all site settings:**
```groq
*[_type == "siteSettings"][0]
```

**Query all pages:**
```groq
*[_type == "page"] | order(title asc)
```

**Query by slug:**
```groq
*[_type == "page" && slug.current == "home"][0]
```

---

## Useful Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [next-sanity](https://github.com/sanity-io/next-sanity)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Portable Text](https://portabletext.org/)

---

*Last Updated: 2026-06-09*
