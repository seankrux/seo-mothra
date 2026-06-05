import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

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
    url: "https://seo-mothra.vercel.app/services",
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
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16">
          <SiteHeader />

          {/* Hero Section */}
          <section className="relative overflow-hidden py-16 md:py-24">
            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#7a9b6d]/15 to-transparent blur-3xl" />

            <div className="relative">
              <div className="mb-6 inline-block">
                <span className="inline-block rounded-full border border-[#7a9b6d]/30 bg-[#7a9b6d]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#7a9b6d]">
                  Our Expertise
                </span>
              </div>

              <h1 className="max-w-5xl font-['Outfit'] text-5xl font-bold leading-[1.1] text-[#2a2622] md:text-6xl lg:text-7xl">
                Full-Stack SEO, CRO & AEO.
                <span className="block text-[#7a9b6d]">
                  Premium implementation, real results.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6b6560] md:text-xl">
                Six core services designed to drive organic growth, optimize
                conversions, and build brands that rank. Every service is built
                for premium results.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-16">
            {services.map((service, idx) => (
              <div
                key={service.slug}
                className="group rounded-2xl border border-[#7a9b6d]/20 bg-gradient-to-br from-white/80 to-[#f5f1eb]/40 p-8 transition hover:border-[#7a9b6d]/40 hover:bg-white/90 hover:shadow-lg"
                style={{
                  animationDelay: `${idx * 50}ms`,
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-4xl">{service.icon}</div>
                    <h3 className="mt-4 font-['Outfit'] text-2xl font-bold text-[#2a2622]">
                      {service.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7a9b6d]/60">
                    0{idx + 1}
                  </span>
                </div>

                <p className="mt-4 text-[#6b6560]">{service.description}</p>

                <div className="mt-6 space-y-2 border-t border-[#7a9b6d]/20 pt-6">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#7a9b6d] flex-shrink-0" />
                      <span className="text-[#6b6560]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-[#7a9b6d] transition group-hover:translate-x-1">
                  <span className="font-semibold">Learn more</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </section>

          {/* Process Section */}
          <section className="border-y border-[#7a9b6d]/20 py-16">
            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7a9b6d]">
                How We Work
              </span>
              <h2 className="mt-4 max-w-3xl font-['Outfit'] text-4xl font-bold text-[#2a2622] md:text-5xl">
                A proven process for sustainable growth.
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
                  className="rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-6 backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-[#7a9b6d]">
                    {phase.step}
                  </div>
                  <h3 className="mt-4 font-['Outfit'] text-lg font-bold text-[#2a2622]">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6b6560]">{phase.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7a9b6d] to-[#6b8b5d] py-16 md:py-24 mt-16">
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative text-center text-white">
              <h2 className="font-['Outfit'] text-4xl font-bold md:text-5xl">
                Ready to Transform Your Growth?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-white/90">
                Let's discuss which services will drive the best results for
                your business.
              </p>
              <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-[#7a9b6d] transition hover:bg-white/90 hover:shadow-lg">
                Schedule a Strategy Call
              </button>
            </div>
          </section>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
