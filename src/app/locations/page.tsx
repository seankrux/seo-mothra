import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { locations } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Premium SEO, CRO & AEO services in Austin, Dallas, Houston & San Antonio. Local expert agency for high-intent leads.",
  alternates: {
    canonical: "/locations",
  },
};

export default function LocationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Locations",
    description: "SEO Mothra service locations in Texas.",
    url: `${siteConfig.url}/locations`,
    hasPart: locations.map((loc) => ({
      "@type": "LocalBusiness",
      name: `SEO Mothra - ${loc.city}`,
      areaServed: loc.city,
      url: `${siteConfig.url}/locations/${loc.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen" data-page-root>
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16">
          <SiteHeader />

          {/* Hero Section */}
          <section className="relative overflow-hidden py-16 md:py-24">
            <div className="relative">
              <div className="mb-6 inline-block" data-hero-eyebrow>
                <span className="inline-block rounded-full border border-[rgba(35,31,27,0.12)] bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#47624f]">
                  Local expertise
                </span>
              </div>

              <h1 className="max-w-5xl font-['Outfit'] text-5xl font-bold leading-[1.1] text-[#211d19] md:text-6xl lg:text-7xl" data-hero-title>
                Premium SEO services
                <span className="block text-[#47624f]">in your market</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#665d54] md:text-xl" data-hero-copy>
                Local search intent changes by city. These pages are built to
                reflect that instead of reusing a generic market page.
              </p>
            </div>
          </section>

          {/* Locations Grid */}
          <section className="grid gap-8 py-16 md:grid-cols-2 lg:grid-cols-4">
            {locations.map((location) => (
              <div
                key={location.slug}
                className="group rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-8 transition hover:border-[rgba(35,31,27,0.2)] hover:bg-white/85 hover:shadow-lg"
                data-card
              >
                <div className="text-5xl">{location.emoji}</div>
                <h3 className="mt-4 font-['Outfit'] text-2xl font-bold text-[#211d19]">
                  {location.city}
                </h3>
                <p className="mt-1 text-sm text-[#665d54]">{location.state}</p>
                <p className="mt-4 text-[#665d54]">{location.description}</p>

                <div className="mt-6 space-y-2 border-t border-[rgba(35,31,27,0.12)] pt-6">
                  {location.specialties.map((spec) => (
                    <div key={spec} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#47624f] flex-shrink-0" />
                      <span className="text-[#665d54]">{spec}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`/locations/${location.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-[#47624f] transition group-hover:translate-x-1"
                >
                  <span className="font-semibold">Learn more</span>
                  <span>→</span>
                </a>
              </div>
            ))}
          </section>

          {/* Why Local Section */}
          <section className="border-y border-[rgba(35,31,27,0.12)] py-16">
            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#47624f]">
                Why Local Matters
              </span>
              <h2 className="mt-4 max-w-3xl font-['Outfit'] text-4xl font-bold text-[#211d19] md:text-5xl">
                Market-Specific Expertise
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-[#665d54]">
                We understand the nuances of each market. Local competitors,
                search behavior, and customer intent vary. We tailor every
                strategy to maximize results in your specific region.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-8">
                <h3 className="font-['Outfit'] text-xl font-bold text-[#211d19]">
                  Local Market Research
                </h3>
                <p className="mt-3 text-[#665d54]">
                  We conduct deep dives into your local competitive landscape
                  and search patterns.
                </p>
              </div>

              <div className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-8">
                <h3 className="font-['Outfit'] text-xl font-bold text-[#211d19]">
                  Dedicated Support
                </h3>
                <p className="mt-3 text-[#665d54]">
                  You get a dedicated account manager who understands your
                  market inside and out.
                </p>
              </div>

              <div className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-8">
                <h3 className="font-['Outfit'] text-xl font-bold text-[#211d19]">
                  Results That Compound
                </h3>
                <p className="mt-3 text-[#665d54]">
                  Long-term local presence builds authority. We focus on
                  sustainable, compounding growth.
                </p>
              </div>
            </div>
          </section>

          {/* Nationwide Capability */}
          <section className="py-16">
            <div className="rounded-3xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-12">
              <h2 className="font-['Outfit'] text-3xl font-bold text-[#211d19]">
                Working Outside Texas?
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-[#665d54]">
                We serve clients nationwide and internationally. Whether you
                need local expertise in one of our Texas markets or nationwide
                support, we can help.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#47624f] transition hover:translate-x-1"
              >
                <span>Schedule a Call</span>
                <span>→</span>
              </a>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative overflow-hidden rounded-3xl bg-[#47624f] py-16 md:py-24">
            <div className="relative text-center text-white">
              <h2 className="font-['Outfit'] text-4xl font-bold md:text-5xl">
                Ready to tighten the page before scaling spend?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-white/85">
                We’ll identify the highest-impact fix, explain the tradeoffs,
                and map the next steps clearly.
              </p>
              <a className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#47624f] transition hover:bg-white/90 hover:shadow-lg" href="/contact">
                Schedule a strategy call
              </a>
            </div>
          </section>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
