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
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16">
          <SiteHeader />

          {/* Hero Section */}
          <section className="relative overflow-hidden py-16 md:py-24">
            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#7a9b6d]/15 to-transparent blur-3xl" />

            <div className="relative">
              <div className="mb-6 inline-block">
                <span className="inline-block rounded-full border border-[#7a9b6d]/30 bg-[#7a9b6d]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#7a9b6d]">
                  📍 Local Expertise
                </span>
              </div>

              <h1 className="max-w-5xl font-['Outfit'] text-5xl font-bold leading-[1.1] text-[#2a2622] md:text-6xl lg:text-7xl">
                Premium SEO Services
                <span className="block text-[#7a9b6d]">In Your Market</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6b6560] md:text-xl">
                Local expertise, premium results. We serve Austin, Dallas,
                Houston, and San Antonio with dedicated support and
                market-specific strategies.
              </p>
            </div>
          </section>

          {/* Locations Grid */}
          <section className="grid gap-8 py-16 md:grid-cols-2 lg:grid-cols-4">
            {locations.map((location) => (
              <div
                key={location.slug}
                className="group rounded-2xl border border-[#7a9b6d]/20 bg-gradient-to-br from-white/80 to-[#f5f1eb]/40 p-8 transition hover:border-[#7a9b6d]/40 hover:bg-white/90 hover:shadow-lg"
              >
                <div className="text-5xl">{location.emoji}</div>
                <h3 className="mt-4 font-['Outfit'] text-2xl font-bold text-[#2a2622]">
                  {location.city}
                </h3>
                <p className="mt-1 text-sm text-[#6b6560]">{location.state}</p>
                <p className="mt-4 text-[#6b6560]">{location.description}</p>

                <div className="mt-6 space-y-2 border-t border-[#7a9b6d]/20 pt-6">
                  {location.specialties.map((spec) => (
                    <div key={spec} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#7a9b6d] flex-shrink-0" />
                      <span className="text-[#6b6560]">{spec}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`/locations/${location.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-[#7a9b6d] transition group-hover:translate-x-1"
                >
                  <span className="font-semibold">Learn more</span>
                  <span>→</span>
                </a>
              </div>
            ))}
          </section>

          {/* Why Local Section */}
          <section className="border-y border-[#7a9b6d]/20 py-16">
            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7a9b6d]">
                Why Local Matters
              </span>
              <h2 className="mt-4 max-w-3xl font-['Outfit'] text-4xl font-bold text-[#2a2622] md:text-5xl">
                Market-Specific Expertise
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-[#6b6560]">
                We understand the nuances of each market. Local competitors,
                search behavior, and customer intent vary. We tailor every
                strategy to maximize results in your specific region.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-8 backdrop-blur-sm">
                <h3 className="font-['Outfit'] text-xl font-bold text-[#2a2622]">
                  Local Market Research
                </h3>
                <p className="mt-3 text-[#6b6560]">
                  We conduct deep dives into your local competitive landscape
                  and search patterns.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-8 backdrop-blur-sm">
                <h3 className="font-['Outfit'] text-xl font-bold text-[#2a2622]">
                  Dedicated Support
                </h3>
                <p className="mt-3 text-[#6b6560]">
                  You get a dedicated account manager who understands your
                  market inside and out.
                </p>
              </div>

              <div className="rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-8 backdrop-blur-sm">
                <h3 className="font-['Outfit'] text-xl font-bold text-[#2a2622]">
                  Results That Compound
                </h3>
                <p className="mt-3 text-[#6b6560]">
                  Long-term local presence builds authority. We focus on
                  sustainable, compounding growth.
                </p>
              </div>
            </div>
          </section>

          {/* Nationwide Capability */}
          <section className="py-16">
            <div className="rounded-3xl border border-[#7a9b6d]/20 bg-gradient-to-br from-white/80 to-[#f5f1eb]/40 p-12">
              <h2 className="font-['Outfit'] text-3xl font-bold text-[#2a2622]">
                Working Outside Texas?
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-[#6b6560]">
                We serve clients nationwide and internationally. Whether you
                need local expertise in one of our Texas markets or nationwide
                support, we can help.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-[#7a9b6d] font-semibold hover:translate-x-1 transition"
              >
                <span>Schedule a Call</span>
                <span>→</span>
              </a>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7a9b6d] to-[#6b8b5d] py-16 md:py-24">
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative text-center text-white">
              <h2 className="font-['Outfit'] text-4xl font-bold md:text-5xl">
                Ready to Dominate Your Market?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-white/90">
                Get a free market analysis and growth roadmap tailored to your
                location.
              </p>
              <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-[#7a9b6d] transition hover:bg-white/90 hover:shadow-lg">
                Schedule Your Free Analysis
              </button>
            </div>
          </section>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
