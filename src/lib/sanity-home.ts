import { sanityClient } from "./sanity";

export type SanityHome = {
  _id: string;
  heroEyebrow?: string;
  heroTitle?: string;
  heroHighlight?: string;
  heroDescription?: string;
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  trustedBy?: string[];
  stats?: { value?: string; label?: string }[];
  serviceCards?: { icon?: string; title?: string; description?: string; url?: string }[];
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
};

export async function getHome(): Promise<SanityHome | null> {
  return sanityClient.fetch(
    `*[_type == "home"][0] {
      _id,
      heroEyebrow,
      heroTitle,
      heroHighlight,
      heroDescription,
      primaryCtaLabel,
      primaryCtaUrl,
      secondaryCtaLabel,
      secondaryCtaUrl,
      trustedBy,
      stats,
      serviceCards,
      seoTitle,
      seoDescription,
      canonicalUrl,
      noIndex
    }`,
    {},
    { next: { revalidate: 60, tags: ["home"] } },
  );
}
