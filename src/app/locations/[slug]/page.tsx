import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { locations } from "@/lib/content";
import { siteConfig } from "@/lib/site";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

async function getLocation(params: LocationPageProps["params"]) {
  const { slug } = await params;
  return locations.find((location) => location.slug === slug);
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const location = await getLocation(params);
  if (!location) return {};

  return {
    title: `${location.city} SEO Services`,
    description: location.description,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title: `${location.city} SEO Services | SEO Mothra`,
      description: location.description,
      url: `${siteConfig.url}/locations/${location.slug}`,
    },
  };
}

export default async function LocationDetailPage({
  params,
}: LocationPageProps) {
  const location = await getLocation(params);
  if (!location) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `SEO Mothra - ${location.city}`,
    url: `${siteConfig.url}/locations/${location.slug}`,
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: location.state,
    },
    description: location.description,
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16">
          <SiteHeader />

          <section className="relative overflow-hidden py-16 md:py-24">
            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#7a9b6d]/15 to-transparent blur-3xl" />
            <div className="relative">
              <div className="mb-6 inline-block">
                <span className="inline-block rounded-full border border-[#7a9b6d]/30 bg-[#7a9b6d]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#7a9b6d]">
                  {location.city} SEO
                </span>
              </div>
              <h1 className="max-w-5xl font-['Outfit'] text-5xl font-bold leading-[1.1] text-[#2a2622] md:text-6xl lg:text-7xl">
                Premium SEO Services in {location.city}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6b6560] md:text-xl">
                {location.description} We tailor technical SEO, content, AEO,
                and conversion strategy around the search behavior and buyer
                intent in {location.city}.
              </p>
              <a
                href="/contact"
                className="mt-10 inline-flex rounded-full bg-[#7a9b6d] px-8 py-4 font-semibold text-white transition hover:bg-[#6b8b5d] hover:shadow-lg"
              >
                Schedule a Market Analysis
              </a>
            </div>
          </section>

          <section className="grid gap-8 border-y border-[#7a9b6d]/20 py-16 md:grid-cols-3">
            {location.specialties.map((specialty) => (
              <article
                key={specialty}
                className="rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-8 backdrop-blur-sm"
              >
                <h2 className="font-['Outfit'] text-xl font-bold text-[#2a2622]">
                  {specialty}
                </h2>
                <p className="mt-3 text-[#6b6560]">
                  Focused execution for teams that need measurable local
                  visibility, stronger landing pages, and qualified pipeline.
                </p>
              </article>
            ))}
          </section>

          <section className="py-16">
            <div className="rounded-3xl border border-[#7a9b6d]/20 bg-gradient-to-br from-white/80 to-[#f5f1eb]/40 p-12">
              <h2 className="font-['Outfit'] text-3xl font-bold text-[#2a2622]">
                Built for {location.city} search demand
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-[#6b6560]">
                SEO Mothra combines market research, technical cleanup,
                answer-first content, and conversion-focused pages so your
                brand can compete for high-intent local searches.
              </p>
            </div>
          </section>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
