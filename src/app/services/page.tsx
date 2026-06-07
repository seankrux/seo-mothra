import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack SEO, CRO & AEO optimization services. Premium UI design, Sanity CMS setup, and technical SEO for scaling brands and agencies.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    icon: "search",
    title: "SEO Audit & Strategy",
    slug: "seo-strategy",
    desc: "Comprehensive keyword mapping, competitive analysis, internal linking architecture, and content gap analysis for sustainable growth.",
    features: [
      "Keyword research & clustering",
      "Competitive analysis",
      "Internal linking strategy",
      "Content gap analysis",
    ],
  },
  {
    icon: "trending_up",
    title: "CRO & Lead Generation",
    slug: "cro-optimization",
    desc: "Conversion rate optimization, funnel design, form optimization, and lead scoring to turn traffic into revenue.",
    features: [
      "Funnel analysis & redesign",
      "Form optimization",
      "CTA placement & testing",
      "Lead scoring automation",
    ],
  },
  {
    icon: "smart_toy",
    title: "AEO Optimization",
    slug: "aeo-optimization",
    desc: "AI search engine optimization. We optimize for Google's AI overviews and emerging search modalities.",
    features: [
      "AI overview optimization",
      "FAQ schema markup",
      "E-E-A-T signal building",
      "Structured data optimization",
    ],
  },
  {
    icon: "settings",
    title: "Technical SEO",
    slug: "technical-seo",
    desc: "Metadata strategy, schema markup, site architecture, Core Web Vitals optimization, and performance tuning.",
    features: [
      "Metadata optimization",
      "Schema markup implementation",
      "Core Web Vitals optimization",
      "Site speed & performance",
    ],
  },
  {
    icon: "palette",
    title: "Premium UI Design",
    slug: "premium-design",
    desc: "Modern, editorial design systems that look premium, rank well, and convert visitors into leads.",
    features: [
      "Design system creation",
      "Visual hierarchy optimization",
      "Brand-led layouts",
      "Motion & microinteractions",
    ],
  },
  {
    icon: "edit_note",
    title: "Content Mastery",
    slug: "content",
    desc: "Stories that sell. We create content that humans love and search engines prioritize — from blog posts to landing pages.",
    features: [
      "Topic cluster strategy",
      "Long-form SEO content",
      "Landing page copy",
      "Content calendar management",
    ],
  },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Services",
    description: "Full-stack SEO, CRO & AEO optimization services.",
    url: `${siteConfig.url}/services`,
    mainEntity: services.map((s) => ({
      "@type": "Service",
      name: s.title,
      description: s.desc,
      provider: { "@type": "Organization", name: "SEO Mothra" },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main className="min-h-screen pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="stagger-reveal active">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#46583c]/10 text-[#46583c] rounded-full mb-6 border border-[#46583c]/20">
                <span className="text-xs font-bold tracking-widest uppercase">
                  Our Expertise
                </span>
              </div>
              <h1 className="max-w-5xl text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#1a1c1c] mb-6">
                Full-stack search and conversion work.
                <span
                  className="block"
                  style={{
                    color: "#46583c",
                    fontFamily: "'Libre Caslon Text', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  Built to remove friction, not add noise.
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-[#444840]/70 leading-relaxed">
                Each service targets one bottleneck: positioning, traffic
                quality, conversion friction, or search visibility.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((svc, idx) => (
                <div
                  key={svc.slug}
                  className="reveal card-hover group bg-white/40 backdrop-blur-sm p-10 rounded-2xl border border-[rgba(26,28,28,0.08)] flex flex-col"
                  style={{ transitionDelay: `${idx * 0.08}s` }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                      <span className="material-symbols-outlined text-[#46583c] text-2xl">
                        {svc.icon}
                      </span>
                    </div>
                    <span className="text-xs font-bold tracking-widest text-[#46583c]/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1a1c1c] mb-4">
                    {svc.title}
                  </h3>
                  <p className="text-[#444840]/70 leading-relaxed flex-grow">
                    {svc.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[rgba(26,28,28,0.08)] space-y-2">
                    {svc.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#46583c] flex-shrink-0" />
                        <span className="text-[#444840]/70">{f}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="mt-8 inline-flex items-center text-[#46583c] font-bold gap-2 group-hover:gap-4 transition-all"
                  >
                    Get started{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          className="py-24 border-t border-[rgba(26,28,28,0.08)]"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-16 reveal">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#46583c]">
                How We Work
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#1a1c1c]">
                A process that removes guesswork.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-4 stagger-reveal">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "Deep audit of your current state and competitive landscape.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  desc: "Comprehensive roadmap tailored to your goals and market.",
                },
                {
                  step: "03",
                  title: "Implementation",
                  desc: "Premium execution across all agreed-upon services.",
                },
                {
                  step: "04",
                  title: "Optimization",
                  desc: "Continuous monitoring, testing, and refinement.",
                },
              ].map((p) => (
                <div
                  key={p.step}
                  className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-[rgba(26,28,28,0.08)]"
                >
                  <div className="text-3xl font-bold text-[#46583c]">
                    {p.step}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[#1a1c1c]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#444840]/70">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-3xl bg-[#46583c] py-20 text-center text-white">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#bcf540] rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Ready to tighten the page before scaling spend?
                </h2>
                <p className="mt-4 mx-auto max-w-2xl text-lg text-white/80">
                  We&apos;ll identify the highest-impact fix, explain the
                  tradeoffs, and map the next steps clearly.
                </p>
                <a
                  href="/contact"
                  className="mt-10 inline-flex rounded-full bg-white px-10 py-4 font-bold text-[#46583c] transition hover:bg-white/90 hover:scale-105"
                >
                  Schedule a strategy call
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
