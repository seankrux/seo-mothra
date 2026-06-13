import { draftMode } from "next/headers";
import { previewClient } from "./preview-client";
import { sanityClient } from "./sanity";
import type { SanityPost, SanityPage, SanityService } from "./sanity";
import type { SanityHome } from "./sanity-home";

const imageProjection = `{ _type, asset, crop, hotspot, alt, "url": asset->url, "metadata": asset->metadata { dimensions, lqip } }`;
const portableTextProjection = `[]{ ..., _type == "image" => { _type, asset, crop, hotspot, alt, "url": asset->url, "metadata": asset->metadata { dimensions, lqip } } }`;

async function client() {
  const draft = await draftMode();
  return draft.isEnabled ? previewClient() : sanityClient;
}

export async function getLiveHome(): Promise<SanityHome | null> {
  const c = await client();
  return c.fetch(`*[_type == "home"][0] { _id, heroEyebrow, heroTitle, heroHighlight, heroDescription, primaryCtaLabel, primaryCtaUrl, secondaryCtaLabel, secondaryCtaUrl, trustedBy, stats, serviceCards, seoTitle, seoDescription, canonicalUrl, noIndex }`, {}, { next: { revalidate: 60, tags: ["home"] } });
}

export async function getLivePage(slug: string): Promise<SanityPage | null> {
  const c = await client();
  return c.fetch(`*[_type == "page" && slug.current == $slug][0] { _id, title, "slug": slug.current, excerpt, content ${portableTextProjection}, seoTitle, seoDescription, canonicalUrl, noIndex, mainImage ${imageProjection} }`, { slug }, { next: { revalidate: 60, tags: ["page"] } });
}

export async function getLivePost(slug: string): Promise<SanityPost | null> {
  const c = await client();
  return c.fetch(`*[_type == "post" && slug.current == $slug][0] { _id, title, "slug": slug.current, category, readTime, excerpt, publishedAt, content ${portableTextProjection}, seoTitle, seoDescription, canonicalUrl, noIndex, featured, tags, mainImage ${imageProjection} }`, { slug }, { next: { revalidate: 60, tags: ["post"] } });
}

export async function getLiveService(slug: string): Promise<SanityService | null> {
  const c = await client();
  return c.fetch(`*[_type == "service" && slug.current == $slug][0] { _id, title, "slug": slug.current, icon, description, features, content ${portableTextProjection}, seoTitle, seoDescription, canonicalUrl, noIndex }`, { slug }, { next: { revalidate: 60, tags: ["service"] } });
}
