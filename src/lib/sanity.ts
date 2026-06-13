import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "wj6g4kk6",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2025-01-01",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: "published",
});

const imageProjection = `{
  _type,
  asset,
  crop,
  hotspot,
  alt,
  "url": asset->url,
  "metadata": asset->metadata { dimensions, lqip }
}`;

const portableTextProjection = `[]{
  ...,
  _type == "image" => {
    _type,
    asset,
    crop,
    hotspot,
    alt,
    "url": asset->url,
    "metadata": asset->metadata { dimensions, lqip }
  }
}`;

export type SanityImage = {
  _type?: string;
  alt?: string;
  url?: string;
  asset?: { _ref?: string; _type?: string };
  metadata?: {
    dimensions?: { width?: number; height?: number; aspectRatio?: number };
    lqip?: string;
  };
};

export type SanityPage = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: unknown[];
  mainImage?: SanityImage;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
};

export type SanityPost = SanityPage & {
  category?: string;
  readTime?: string;
  publishedAt?: string;
  featured?: boolean;
  tags?: string[];
};

export type SanityService = {
  _id: string;
  title: string;
  slug: string;
  icon?: string;
  description?: string;
  features?: string[];
  content?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
};

export async function getPosts(): Promise<SanityPost[]> {
  return sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
      _id,
      title,
      "slug": slug.current,
      category,
      readTime,
      excerpt,
      publishedAt,
      featured,
      tags,
      seoTitle,
      seoDescription,
      noIndex,
      mainImage ${imageProjection}
    }`,
    {},
    { next: { revalidate: 60, tags: ["post"] } },
  );
}

export async function getPost(slug: string): Promise<SanityPost | null> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      category,
      readTime,
      excerpt,
      publishedAt,
      content ${portableTextProjection},
      seoTitle,
      seoDescription,
      canonicalUrl,
      noIndex,
      featured,
      tags,
      mainImage ${imageProjection}
    }`,
    { slug },
    { next: { revalidate: 60, tags: ["post"] } },
  );
}

export async function getPages(): Promise<SanityPage[]> {
  return sanityClient.fetch(
    `*[_type == "page" && defined(slug.current)] | order(_createdAt asc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      seoTitle,
      seoDescription,
      canonicalUrl,
      noIndex,
      mainImage ${imageProjection}
    }`,
    {},
    { next: { revalidate: 60, tags: ["page"] } },
  );
}

export async function getPage(slug: string): Promise<SanityPage | null> {
  return sanityClient.fetch(
    `*[_type == "page" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      content ${portableTextProjection},
      seoTitle,
      seoDescription,
      canonicalUrl,
      noIndex,
      mainImage ${imageProjection}
    }`,
    { slug },
    { next: { revalidate: 60, tags: ["page"] } },
  );
}

export async function getServices(): Promise<SanityService[]> {
  return sanityClient.fetch(
    `*[_type == "service" && defined(slug.current)] | order(_createdAt asc) {
      _id,
      title,
      "slug": slug.current,
      icon,
      description,
      features,
      content ${portableTextProjection},
      seoTitle,
      seoDescription,
      canonicalUrl,
      noIndex
    }`,
    {},
    { next: { revalidate: 60, tags: ["service"] } },
  );
}

export async function getService(slug: string): Promise<SanityService | null> {
  return sanityClient.fetch(
    `*[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      icon,
      description,
      features,
      content ${portableTextProjection},
      seoTitle,
      seoDescription,
      canonicalUrl,
      noIndex
    }`,
    { slug },
    { next: { revalidate: 60, tags: ["service"] } },
  );
}

export async function getTestimonials() {
  return sanityClient.fetch(
    `*[_type == "testimonial"] | order(_createdAt desc) {
      _id,
      quote,
      author,
      role,
      rating,
      avatar ${imageProjection}
    }`,
    {},
    { next: { revalidate: 60, tags: ["testimonial"] } },
  );
}

export async function getSiteSettings() {
  return sanityClient.fetch(
    `*[_type == "siteSettings"][0] {
      siteTitle,
      siteDescription,
      supportEmail,
      socialLinks,
      ogImage ${imageProjection}
    }`,
    {},
    { next: { revalidate: 60, tags: ["siteSettings"] } },
  );
}
