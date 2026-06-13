# SEO Mothra

www.seomothra.com

## Frontend direction

- The public site now uses a shared motion layer with GSAP for page entrances and reveal states.
- Conversion pages are aligned to a single CTA hierarchy with cleaner proof and less decorative noise.
- The visual system favors restrained, editorial surfaces over gradient-heavy “premium” styling.

## Sanity CMS

The repo uses an embedded Sanity Studio route at `/studio` and Sanity-backed frontend routes for posts, pages, services, testimonials, and site settings.

Required environment variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_READ_TOKEN` for private dataset reads when needed
- `SANITY_API_WRITE_TOKEN` for admin scripts or server-side content management

## Sanity Agent Skills

Official install command:

```bash
npx skills add sanity-io/agent-toolkit
```

The toolkit includes Sanity best practices, content modeling best practices, SEO/AEO best practices, and content experimentation best practices. Use these rules before changing Sanity schemas, GROQ queries, Portable Text rendering, image rendering, Studio structure, TypeGen, migrations, SEO metadata, structured data, or experimentation workflows.
