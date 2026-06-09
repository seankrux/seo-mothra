import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2025-01-01",
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
});

export async function getPosts() {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      category,
      readTime,
      excerpt,
      publishedAt,
      seoTitle,
      seoDescription
    }`,
  );
}

export async function getPost(slug: string) {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      category,
      readTime,
      excerpt,
      publishedAt,
      content,
      seoTitle,
      seoDescription
    }`,
    { slug },
  );
}

export async function getServices() {
  return sanityClient.fetch(
    `*[_type == "service"] | order(_createdAt asc) {
      title,
      "slug": slug.current,
      icon,
      description,
      features,
      seoTitle,
      seoDescription
    }`,
  );
}

export async function getTestimonials() {
  return sanityClient.fetch(
    `*[_type == "testimonial"] {
      quote,
      author,
      role,
      rating
    }`,
  );
}

export async function getSiteSettings() {
  return sanityClient.fetch(
    `*[_type == "siteSettings"][0] {
      siteTitle,
      siteDescription,
      supportEmail,
      socialLinks
    }`,
  );
}
