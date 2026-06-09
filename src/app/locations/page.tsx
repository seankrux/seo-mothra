import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { locations } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "SEO Mothra serves brands across Texas and nationwide — Austin, Dallas, Houston, San Antonio and beyond.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Locations",
    url: `${siteConfig.url}/locations`,
    mainEntity: locations.map((l) => ({
      "@type": "LocalBusiness",
      name: `SEO Mothra ${l.city}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: l.city,
        addressRegion: l.state,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main id="main-content" className="min-h-screen pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="stagger-reveal active">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#46583c]/10 text-[#46583c] rounded-full mb-6 border border-[#46583c]/20">
                <span className="text-xs font-bold tracking-widest uppercase">
                  Service Areas
                </span>
              </div>
              <h1 className="max-w-4xl text-5xl md:text-6xl font-bold leading-tight text-[#1a1c1c] mb-6">
                Premium SEO for brands across Texas and{" "}
                <em
                  style={{
                    color: "#46583c",
                    fontFamily: "'Libre Caslon Text', serif",
                  }}
                >
                  beyond.
                </em>
              </h1>
              <p className="max-w-2xl text-lg text-[#444840] leading-relaxed">
                Whether you&apos;re a local service brand or a scaling agency,
                we bring the same premium SEO strategy to every market.
              </p>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid gap-8 md:grid-cols-2">
              {locations.map((loc, idx) => (
                <div
                  key={loc.slug}
                  className="reveal card-hover group bg-white/40 backdrop-blur-sm p-10 rounded-2xl border border-[rgba(26,28,28,0.08)]"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-5xl">{loc.emoji}</div>
                    <span className="text-xs font-bold tracking-widest text-[#46583c]/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold text-[#1a1c1c] mb-1">
                    {loc.city}
                  </h2>
                  <p className="text-sm font-semibold text-[#46583c] mb-4 uppercase tracking-widest">
                    {loc.state}
                  </p>
                  <p className="text-[#444840] leading-relaxed mb-6">
                    {loc.description}
                  </p>

                  <div className="space-y-2 border-t border-[rgba(26,28,28,0.08)] pt-6">
                    {loc.specialties.map((spec) => (
                      <div
                        key={spec}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#46583c] flex-shrink-0" />
                        <span className="text-[#444840]">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`/locations/${loc.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-[#46583c] font-bold group-hover:gap-4 transition-all"
                  >
                    View {loc.city} services
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* National CTA */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="reveal bg-[#46583c]/5 rounded-[3rem] p-12 border border-[#46583c]/10 text-center">
              <h2 className="text-4xl font-bold text-[#1a1c1c] mb-4">
                Not in Texas?
              </h2>
              <p className="text-[#444840] text-lg mb-10 max-w-xl mx-auto">
                We work with brands nationwide and internationally. Location is
                never a barrier to great SEO.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#46583c] text-white px-10 py-4 rounded-full font-bold hover:bg-[#3a4c31] hover:scale-105 transition-all shadow-lg shadow-[#46583c]/20"
              >
                Start a conversation
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
