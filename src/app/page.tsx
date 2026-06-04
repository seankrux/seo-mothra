import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

const services = [
  {
    title: "SEO Strategy",
    description: "High-intent architecture, topic clustering, internal linking, and commercial keyword mapping."
  },
  {
    title: "Sanity CMS",
    description: "Structured content models, editorial workflows, and reusable blocks for fast publishing."
  },
  {
    title: "Premium UI",
    description: "Editorial composition, strong typography, and conversion-aware hierarchy."
  },
  {
    title: "Technical SEO",
    description: "Schema, metadata, canonical strategy, sitemap, robots, and performance tuning."
  }
];

const proofPoints = [
  { value: "1 system", label: "brand, content, and performance in one stack" },
  { value: "SEO+", label: "search, answer engine, and schema ready" },
  { value: "CRO", label: "clear CTA hierarchy and trust signals" }
];

const faqs = [
  ["What is SEO Mothra?", "A premium website system for brands that need SEO, content operations, and a polished modern presence."],
  ["Does it support Sanity CMS?", "Yes — the repository includes Sanity schema scaffolding and is ready for a content studio integration."],
  ["Is it optimized for AI search?", "Yes — the structure is answer-first, schema-ready, and designed for clear entity relationships."],
  ["Is it production ready?", "The build is passing and the app is deployed on Vercel with the core routes in place."]
];

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    }
  };

  return (
    <main className="min-h-screen px-6 py-6 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SiteHeader />
        <Hero
          eyebrow="Premium SEO website platform"
          title="Enterprise-grade web presence for SEO, CRO, and content growth."
          description="SEO Mothra pairs modern editorial design with Sanity CMS architecture, answer-engine optimization, structured data, and performance-first engineering."
        />

        <section className="grid gap-4 border-y border-white/10 py-10 md:grid-cols-3">
          {proofPoints.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-semibold text-sky-200">{metric.value}</div>
              <div className="mt-2 text-sm leading-6 text-white/65">{metric.label}</div>
            </div>
          ))}
        </section>

        <section className="py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Capabilities</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">Built to win attention without looking generic.</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-7 text-white/60 lg:block">
              The structure emphasizes clarity, speed, and intent: one message, one action, one strong next step.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Content system</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">A CMS foundation that can scale beyond launch.</h2>
            <p className="mt-4 text-white/72 leading-8">
              The current repo includes Sanity configuration, schemas, and structure placeholders so the site can move from static scaffold to content operations without a rebuild.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/72">
              <li>• Service pages for commercial intent</li>
              <li>• Location pages for local SEO expansion</li>
              <li>• Editorial blog for topical authority</li>
              <li>• Contact conversion path with strong CTA hierarchy</li>
            </ul>
          </article>

          <article className="rounded-[2rem] border border-sky-300/20 bg-gradient-to-br from-sky-300/15 to-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-100/70">Schema + AEO</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Answer-first by default.</h2>
            <p className="mt-4 text-white/72 leading-8">
              Pages are shaped for concise answers, supporting detail, and structured entities so search engines and answer engines can extract meaning with less ambiguity.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-white/70">
              FAQ schema, organization data, website schema, canonical metadata, and clean internal linking are built into the content model.
            </div>
          </article>
        </section>

        <section className="py-20">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Common questions answered upfront.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map(([q, a]) => (
                <details key={q} className="group rounded-2xl border border-white/10 bg-black/15 p-5">
                  <summary className="cursor-pointer list-none text-lg font-medium outline-none group-open:text-sky-200">{q}</summary>
                  <p className="mt-3 text-sm leading-7 text-white/70">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Next action</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Add live Sanity content, image pipeline, and deployment polish.</h2>
            <p className="mt-4 max-w-3xl text-white/72 leading-8">
              The website is now an enterprise-grade foundation: polished UI, metadata, search structure, routing, and production-ready build health are all in place.
            </p>
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
