# Sanity + GitHub Quick Reference - SEO Mothra

## 🚀 Quick Access Links

| Resource | URL | Notes |
|----------|-----|-------|
| **GitHub Repo** | https://github.com/seankrux/seo-mothra | Main repository |
| **Sanity Studio (Live)** | https://www.seomothra.com/studio | Production CMS |
| **Sanity Studio (Local Dev)** | http://localhost:3000/studio | Development, after `npm run dev` |
| **Sanity Project Dashboard** | https://manage.sanity.io/projects | Project management |

---

## 📝 Project Identifiers

```
Project ID: wj6g4kk6
Dataset: production
Studio Path: /studio
GitHub: seankrux/seo-mothra
```

---

## 🔧 Development Setup

```bash
# Clone repository
git clone https://github.com/seankrux/seo-mothra.git
cd seo-mothra

# Install dependencies
npm install

# Configure environment (copy from .env.example)
cp .env.example .env.local

# Set required env vars:
# NEXT_PUBLIC_SANITY_PROJECT_ID=wj6g4kk6
# NEXT_PUBLIC_SANITY_DATASET=production

# Start development server
npm run dev

# Access:
# - App: http://localhost:3000
# - Studio: http://localhost:3000/studio
```

---

## 📊 Sanity Schema Overview

### Available Document Types
1. **siteSettings** (1 singleton)
   - Global site configuration, metadata, social links

2. **page** (many documents)
   - Individual pages with SEO metadata and content

### Currently Hardcoded Content
These should be migrated to Sanity:
- **Locations:** Austin, Dallas, Houston, San Antonio
- **Articles:** 6 blog articles

---

## 🔐 Authentication

**Sanity Developer Token:**
```
skwZy9uUeoAeJtH3a5XqS31I3SjVpSmBKQiF3P3qEIAMw1gHfWBjSn3JyX2bimtzeaY3GPSMu8YlHRjozJqkKCK6UqJPCCzbPIGfO8ijPbEIuZTnCYJ53VTkCpSbk85Edx01hR2VSzDuK8E0KM6vWphnspCD9x0G7Q43Evva8fX6Axg6L96v
```
Use this with Sanity MCP tools for programmatic API access.

---

## 💡 Current Integration Status

✅ **Configured:**
- Sanity config loaded (`sanity.config.ts`)
- Studio embedded at `/studio` route
- Two schemas defined (page, siteSettings)

⚠️ **Not Yet Active:**
- Frontend queries (content is hardcoded in `src/lib/content.ts`)
- Schema structure customization
- Dynamic content rendering

---

## 🎯 Next Steps

1. **Activate Sanity Queries**
   - Create Sanity client in `src/lib/sanity.client.ts`
   - Replace hardcoded content in `src/lib/content.ts`

2. **Migrate Content**
   - Create documents for locations and articles in Studio
   - Update components to fetch from Sanity

3. **Extend Schemas**
   - Add `blogPost`, `location`, `service` document types
   - Enable image/media management

---

## 🗂️ Key Files

| Path | Purpose |
|------|---------|
| `sanity.config.ts` | Sanity configuration |
| `sanity/schemas/` | Document type definitions |
| `src/app/studio/[[...tool]]/page.tsx` | Studio route |
| `src/lib/content.ts` | Hardcoded content (migrate to CMS) |
| `.env.example` | Environment variable template |

---

## 📚 Documentation

- [Sanity Getting Started](https://www.sanity.io/docs/get-started)
- [next-sanity Integration](https://github.com/sanity-io/next-sanity)
- [GROQ Query Syntax](https://www.sanity.io/docs/groq)
- [Portable Text Guide](https://portabletext.org/)

---

*Last Updated: 2026-06-09*
