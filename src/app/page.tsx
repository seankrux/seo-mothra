import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

const services = [
  {
    title: "Brand-first SEO",
    description: "Search architecture shaped around a memorable identity, not generic agency templates."
  },
  {
    title: "Sanity content ops",
    description: "Structured content models, scalable editorial flow, and reusable blocks for fast publishing."
  },
  {
    title: "Premium conversion UI",
    description: "Editorial composition, tactile cards, and crisp CTA hierarchy tuned for trust."
  },
  {
    title: "Technical SEO",
    description: "Schema, metadata, sitemap hygiene, canonical strategy, and performance tuning."
  }
];

const proofPoints = [
  { value: "1 system", label: "brand, content, and performance in one stack" },
  { value: "SEO+", label: "search, answer engine, and schema ready" },
  { value: "CRO", label: "clear CTA hierarchy and trust signals" }
];

const faqs = [
  ["What is SEO Mothra?", "A premium website system for brands that need SEO, content ops, and a polished modern presence."],
  ["Does it support Sanity CMS?", "Yes — the repo includes Sanity scaffolding and is ready for studio integration."],
  ["Is it optimized for AI search?", "Yes — the structure is answer-first, schema-ready, and entity clear."],
  ["Is it production ready?", "Core routes and build health are in place; next step is live content + deployment polish."]
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

        <section className="relative overflow-hidden rounded-[2.25rem] border border-[rgba(255,248,238,0.1)] bg-[linear-gradient(145deg,rgba(255,248,238,0.08),rgba(255,248,238,0.03))] px-6 py-8 shadow-[0_30px_90px_rgba(0,0,0,0.32)] md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(177,195,154,0.16),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(183,141,143,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(211,176,123,0.12),transparent_20%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.48em] text-[#d8e2c7]/75">Premium SEO website platform</p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#fff8ef] md:text-7xl">
                Brand-led SEO.
                <span className="block text-[#d8e2c7]">Quiet power. Strong signal.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                SEO Mothra borrows the calm, premium mood of your banner and turns it into a modern web presence: earthy contrast, editorial rhythm, and conversion-ready content structure.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-[#d8e2c7]/20 bg-[#d8e2c7]/10 px-4 py-2 text-[#eaf1da]">Identity-rich</span>
                <span className="rounded-full border border-[rgba(255,248,238,0.1)] bg-white/[0.04] px-4 py-2 text-white/82">SEO / AEO</span>
                <span className="rounded-full border border-[rgba(255,248,238,0.1)] bg-white/[0.04] px-4 py-2 text-white/82">CRO-ready</span>
                <span className="rounded-full border border-[rgba(255,248,238,0.1)] bg-white/[0.04] px-4 py-2 text-white/82">Sanity CMS</span>
              </div>
            </div>

            <aside className="grid gap-4">
              <div className="overflow-hidden rounded-[2rem] border border-[rgba(255,248,238,0.12)] bg-[#151410] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.3)]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.35rem] border border-[rgba(255,248,238,0.08)] bg-[#0d0d0b]">
                  <img
                    src="https://i.imgur.com/OUjxbAG.jpeg"
                    alt="SEO Mothra brand banner reference"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">Primary brand mark</p>
                    <p className="mt-2 text-sm text-white/68">Warm slate, sage, blush, and off-white.</p>
                  </div>
                  <div className="rounded-full border border-[#d8e2c7]/20 bg-[#d8e2c7]/10 px-3 py-1 text-xs text-[#f5f0e5]">refined</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-[1.75rem] border border-[rgba(255,248,238,0.12)] bg-[#151410] p-3">
                  <img
                    src="https://i.imgur.com/1JKaKLn.png"
                    alt="SEO Mothra mascot reference"
                    className="aspect-square w-full rounded-[1.15rem] object-cover"
                  />
                </div>
                <div className="rounded-[1.75rem] border border-[rgba(255,248,238,0.12)] bg-[linear-gradient(180deg,rgba(177,195,154,0.14),rgba(255,248,238,0.04))] p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/72">Mood</p>
                  <p className="mt-3 text-2xl leading-tight text-white">Boutique SEO, soft power, iconic mascot feel.</p>
                  <p className="mt-4 text-sm leading-6 text-white/68">Use the banner as the system's emotional anchor.</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-4 border-y border-[rgba(255,248,238,0.1)] py-10 md:grid-cols-3">
          {proofPoints.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-6">
              <div className="text-3xl font-semibold text-[#d8e2c7]">{metric.value}</div>
              <div className="mt-2 text-sm leading-6 text-white/66">{metric.label}</div>
            </div>
          ))}
        </section>

        <section className="py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">Capabilities</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">Built to feel premium, calm, and unmistakable.</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-7 text-white/60 lg:block">
              One strong aesthetic. Earthy palette. Big typography. Soft luxury surfaces. Clear action.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <article key={service.title} className="rounded-[1.75rem] border border-[rgba(255,248,238,0.1)] bg-[rgba(255,248,238,0.04)] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[rgba(255,248,238,0.06)]">
                <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.32em] text-[#d8e2c7]/72">
                  <span>0{index + 1}</span>
                  <span>service</span>
                </div>
                <h3 className="text-xl font-semibold text-[#fff8ef]">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-8 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="rounded-[2rem] border border-[rgba(255,248,238,0.1)] bg-[rgba(255,248,238,0.04)] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">Content system</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">CMS foundation that can scale beyond launch.</h2>
            <p className="mt-4 text-white/72 leading-8">
              The current repo already supports a content-first site structure. Now it reads like a polished brand system, not a starter template.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/72">
              <li>• Service pages for commercial intent</li>
              <li>• Location pages for local SEO expansion</li>
              <li>• Editorial blog for topical authority</li>
              <li>• Contact path with stronger trust cues</li>
            </ul>
          </article>

          <article className="rounded-[2rem] border border-[#d8e2c7]/20 bg-[linear-gradient(145deg,rgba(177,195,154,0.16),rgba(255,248,238,0.04))] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#e8efdd]/72">Schema + AEO</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Answer-first, but still beautiful.</h2>
            <p className="mt-4 text-white/72 leading-8">
              Concise answers, supporting detail, and structured entities make the site readable by humans and machines alike. That is the SEO Mothra edge.
            </p>
            <div className="mt-8 rounded-2xl border border-[rgba(255,248,238,0.1)] bg-black/20 p-5 text-sm text-white/72">
              FAQ schema, organization data, website schema, canonical metadata, and clean internal linking are built into the content model.
            </div>
          </article>
        </section>

        <section className="py-20">
          <div className="rounded-[2rem] border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Common questions answered upfront.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map(([q, a]) => (
                <details key={q} className="group rounded-2xl border border-[rgba(255,248,238,0.1)] bg-black/15 p-5">
                  <summary className="cursor-pointer list-none text-lg font-medium outline-none group-open:text-[#d8e2c7]">{q}</summary>
                  <p className="mt-3 text-sm leading-7 text-white/70">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="rounded-[2rem] border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">Next action</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Add live Sanity content, image pipeline, and deployment polish.</h2>
            <p className="mt-4 max-w-3xl text-white/72 leading-8">
              The site now has a clearer visual identity, stronger hierarchy, and a brand banner/motif direction that can be carried into the rest of the app.
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
