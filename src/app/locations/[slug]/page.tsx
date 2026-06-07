import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { locations } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `SEO Services in ${loc.city}, ${loc.state}`,
    description: loc.description,
    alternates: { canonical: `/locations/${loc.slug}` },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `SEO Mothra ${loc.city}`,
    url: `${siteConfig.url}/locations/${loc.slug}`,
    description: loc.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.city,
      addressRegion: loc.state,
      addressCountry: "US",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main className="min-h-screen pt-28">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="stagger-reveal active">
              <a
                href="/locations"
                className="inline-flex items-center gap-2 text-[#46583c] font-semibold mb-8 hover:gap-4 transition-all"
              >
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ transform: "rotate(180deg)" }}
                >
                  arrow_forward
                </span>
                All locations
              </a>

              <div className="text-6xl mb-6">{loc.emoji}</div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#46583c]/10 text-[#46583c] rounded-full mb-6 border border-[#46583c]/20">
                <span className="text-xs font-bold tracking-widest uppercase">
                  {loc.state}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-[#1a1c1c] mb-6">
                SEO Services in{" "}
                <em
                  style={{
                    color: "#46583c",
                    fontFamily: "'Libre Caslon Text', serif",
                  }}
                >
                  {loc.city}
                </em>
              </h1>

              <p className="max-w-2xl text-lg text-[#444840]/70 mb-12">
                {loc.description}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 stagger-reveal">
              {loc.specialties.map((spec) => (
                <div
                  key={spec}
                  className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-[rgba(26,28,28,0.08)]"
                >
                  <span className="material-symbols-outlined text-[#46583c] mb-4 block">
                    verified
                  </span>
                  <h3 className="font-bold text-[#1a1c1c]">{spec}</h3>
                </div>
              ))}
            </div>

            <div className="mt-16 reveal">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#46583c] text-white px-10 py-4 rounded-full font-bold hover:bg-[#3a4c31] hover:scale-105 transition-all shadow-lg shadow-[#46583c]/20"
              >
                Get a free {loc.city} SEO audit
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
