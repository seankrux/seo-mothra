import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack SEO, CRO & AEO optimization services. Premium UI design, Sanity CMS setup, and technical SEO for scaling brands and agencies.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "SEO Strategy",
    slug: "seo-strategy",
    icon: "🔍",
    description:
      "Comprehensive keyword mapping, competitive analysis, internal linking architecture, and content gap analysis for sustainable growth.",
    features: [
      "Keyword research & clustering",
      "Competitive analysis",
      "Internal linking strategy",
      "Content gap analysis",
    ],
  },
  {
    title: "CRO & Lead Generation",
    slug: "cro-optimization",
    icon: "📈",
    description:
      "Conversion rate optimization, funnel design, form optimization, and lead scoring to turn traffic into revenue.",
    features: [
      "Funnel analysis & redesign",
      "Form optimization",
      "CTA placement & testing",
      "Lead scoring automation",
    ],
  },
  {
    title: "AEO Optimization",
    slug: "aeo-optimization",
    icon: "🤖",
    description:
      "AI search engine optimization. We optimize for Google's AI overviews and emerging search modalities.",
    features: [
      "AI overview optimization",
      "FAQ schema markup",
      "E-E-A-T signal building",
      "Structured data optimization",
    ],
  },
  {
    title: "Technical SEO",
    slug: "technical-seo",
    icon: "⚙️",
    description:
      "Metadata strategy, schema markup, site architecture, Core Web Vitals optimization, and performance tuning.",
    features: [
      "Metadata optimization",
      "Schema markup implementation",
      "Core Web Vitals optimization",
      "Site speed & performance",
    ],
  },
  {
    title: "Premium UI Design",
    slug: "premium-design",
    icon: "🎨",
    description:
      "Modern, editorial design systems that look premium, rank well, and convert visitors into leads.",
    features: [
      "Design system creation",
      "Visual hierarchy optimization",
      "Brand-led layouts",
      "Motion & microinteractions",
    ],
  },
  {
    title: "Sanity CMS Setup",
    slug: "sanity-cms",
    icon: "🛠️",
    description:
      "Scalable headless CMS architecture. Reusable schemas, editorial workflows, and integration setup for dynamic content.",
    features: [
      "Schema design & modeling",
      "Editorial workflow setup",
      "API integration",
      "Deployment automation",
    ],
  },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Services",
    description:
      "Full-stack SEO, CRO & AEO optimization services for premium brands and agencies.",
    url: `${siteConfig.url}/services`,
    mainEntity: services.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: "SEO Mothra",
      },
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
                  Our Expertise
                </span>
              </div>

              <h1 className="max-w-5xl font-['Outfit'] text-5xl font-bold leading-[1.1] text-[#211d19] md:text-6xl lg:text-7xl" data-hero-title>
                Full-stack search and conversion work.
                <span className="block text-[#47624f]">
                  Built to remove friction, not add noise.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#665d54] md:text-xl" data-hero-copy>
                Each service targets one bottleneck: positioning, traffic
                quality, conversion friction, or search visibility.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-16">
            {services.map((service, idx) => (
              <div
                key={service.slug}
                className="group rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-8 transition hover:border-[rgba(35,31,27,0.2)] hover:bg-white/85 hover:shadow-lg"
                data-card
                style={{
                  animationDelay: `${idx * 50}ms`,
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-4xl">{service.icon}</div>
                    <h3 className="mt-4 font-['Outfit'] text-2xl font-bold text-[#211d19]">
                      {service.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#47624f]/60">
                    0{idx + 1}
                  </span>
                </div>

                <p className="mt-4 text-[#665d54]">{service.description}</p>

                <div className="mt-6 space-y-2 border-t border-[rgba(35,31,27,0.12)] pt-6">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#47624f] flex-shrink-0" />
                      <span className="text-[#665d54]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-[#47624f] transition group-hover:translate-x-1">
                  <span className="font-semibold">Learn more</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </section>

          {/* Process Section */}
          <section className="border-y border-[rgba(35,31,27,0.12)] py-16">
            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#47624f]">
                How We Work
              </span>
              <h2 className="mt-4 max-w-3xl font-['Outfit'] text-4xl font-bold text-[#211d19] md:text-5xl">
                A process that removes guesswork.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
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
              ].map((phase) => (
                <div
                  key={phase.step}
                  className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-6"
                >
                  <div className="text-3xl font-bold text-[#47624f]">
                    {phase.step}
                  </div>
                  <h3 className="mt-4 font-['Outfit'] text-lg font-bold text-[#211d19]">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#665d54]">{phase.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative overflow-hidden rounded-3xl bg-[#47624f] py-16 md:py-24 mt-16">
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
