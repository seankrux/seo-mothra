import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Premium SEO, CRO & AEO services in Austin, Dallas, Houston & San Antonio. Local expert agency for high-intent leads.",
  alternates: {
    canonical: "/locations",
  },
};

const locations = [
  {
    city: "Austin",
    state: "Texas",
    slug: "austin",
    description:
      "Premium SEO and growth strategies for Austin-based agencies and scaling brands.",
    specialties: [
      "Tech company SEO",
      "Agency consulting",
      "Local service marketing",
    ],
  },
  {
    city: "Dallas",
    state: "Texas",
    slug: "dallas",
    description:
      "Full-stack SEO implementation for Dallas enterprises and mid-market agencies.",
    specialties: [
      "Enterprise SEO",
      "Multi-location strategy",
      "B2B content marketing",
    ],
  },
  {
    city: "Houston",
    state: "Texas",
    slug: "houston",
    description:
      "SEO and conversion optimization for Houston-area professional services.",
    specialties: [
      "Professional services SEO",
      "Lead generation funnels",
      "CRO strategy",
    ],
  },
  {
    city: "San Antonio",
    state: "Texas",
    slug: "san-antonio",
    description:
      "Premium digital marketing and SEO for San Antonio local businesses.",
    specialties: [
      "Local business growth",
      "Multi-location management",
      "Community engagement",
    ],
  },
];

export default function LocationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Locations",
    description: "SEO Mothra service locations in Texas.",
    url: "https://seo-mothra.vercel.app/locations",
    hasPart: locations.map((loc) => ({
      "@type": "LocalBusiness",
      name: `SEO Mothra - ${loc.city}`,
      areaServed: loc.city,
      url: `https://seo-mothra.vercel.app/locations/${loc.slug}`,
    })),
  };

  return (
    <main className="min-h-screen px-6 py-8 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SiteHeader />

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[2.5rem] border border-[rgba(255,248,238,0.12)] bg-[linear-gradient(145deg,rgba(255,248,238,0.09),rgba(255,248,238,0.03))] px-6 py-8 shadow-[0_35px_120px_rgba(0,0,0,0.38)] md:px-10 md:py-10 lg:px-12 lg:py-12 mb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(177,195,154,0.2),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(183,141,143,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(211,176,123,0.14),transparent_18%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.5em] text-[#d8e2c7]/72">
              Locations
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tight text-[#fff8ef] md:text-7xl lg:text-[5.5rem]">
              Local SEO expertise
              <span className="block text-[#d8e2c7]">across Texas.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Premium SEO and growth strategies in Austin, Dallas, Houston, and
              San Antonio. Local expertise. National capabilities.
            </p>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="mb-20">
          <div className="grid gap-6 md:grid-cols-2">
            {locations.map((location) => (
              <article
                key={location.slug}
                className="rounded-[1.75rem] border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-8 transition duration-300 hover:bg-white/[0.06] hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)] hover:-translate-y-1"
              >
                <div className="mb-4">
                  <h2 className="text-3xl font-semibold text-[#fff8ef]">
                    {location.city}
                  </h2>
                  <p className="mt-1 text-sm text-[#d8e2c7]">
                    {location.state}
                  </p>
                </div>

                <p className="text-white/72 leading-7 mb-6">
                  {location.description}
                </p>

                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70 mb-3">
                    Specialties
                  </p>
                  <ul className="space-y-2">
                    {location.specialties.map((specialty) => (
                      <li key={specialty} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-[#d8e2c7] flex-shrink-0" />
                        <span className="text-sm text-white/70">
                          {specialty}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`/locations/${location.slug}`}
                  className="inline-flex items-center gap-2 text-[#d8e2c7] hover:gap-3 transition text-sm font-medium"
                >
                  View location page →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Why Local Matters */}
        <section className="rounded-[2rem] border border-[rgba(255,248,238,0.1)] bg-[rgba(255,248,238,0.04)] p-8 mb-20 md:p-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">
            Local Expertise
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            We know Texas. We know your market.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Local Keywords",
                description:
                  "Austin SEO, Dallas marketing, Houston services. We optimize for location-specific intent.",
              },
              {
                title: "Market Knowledge",
                description:
                  "We understand regional differences, local competitors, and what drives leads in each market.",
              },
              {
                title: "Connected Teams",
                description:
                  "Local presence in each city. Real relationships. Responsive support and collaboration.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[rgba(255,248,238,0.08)] bg-black/20 p-6"
              >
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Areas Map Section */}
        <section className="rounded-[2rem] border border-[#d8e2c7]/20 bg-[linear-gradient(145deg,rgba(177,195,154,0.16),rgba(255,248,238,0.04))] p-8 mb-20 md:p-12">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Nationwide capabilities.
          </h2>
          <p className="mt-4 text-white/72 leading-8">
            While we're based in Texas, we work with agencies and brands across
            the United States. Our SEO expertise, CMS architecture, and design
            services are location-agnostic. Whether you're in New York or Los
            Angeles, we deliver premium results.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full border border-[#d8e2c7] bg-[#d8e2c7] px-6 py-3 font-medium text-[#11110f] transition hover:opacity-90"
            >
              Schedule Strategy Call
            </a>
            <a
              href="/services"
              className="rounded-full border border-[rgba(255,248,238,0.2)] bg-white/[0.05] px-6 py-3 transition hover:bg-white/[0.08]"
            >
              View Our Services
            </a>
          </div>
        </section>

        <SiteFooter />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
