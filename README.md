# SEO Mothra

SEO Mothra is a separate project from SolarX.

## CMS login

The repo currently has Sanity schema/config scaffolding, but it does not yet include a full embedded Studio app route. To log into the CMS, use Sanity Manage for the project and then open the Studio for that project.

1. Make sure these env vars are set in your local `.env.local` or deployment environment:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (usually `production`)
2. Sign in to Sanity Manage with the Sanity account that owns or has access to the project.
3. Open the Studio for that project from Sanity Manage, or your project’s Studio URL if it has already been deployed.
4. Log in with the same Sanity account when prompted.

If you do not yet have access to the Sanity project, the project owner needs to add your Sanity user email in Sanity Manage.

## Notes

- The schemas currently live in `sanity/schemas`.
- `sanity.config.ts` reads the project ID and dataset from environment variables.
- The homepage and metadata are already wired for SEO, CRO, and AEO.
