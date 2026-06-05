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
    <main className="min-h-screen px-6 py-8 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SiteHeader />

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[2.5rem] border border-[rgba(255,248,238,0.12)] bg-[linear-gradient(145deg,rgba(255,248,238,0.09),rgba(255,248,238,0.03))] px-6 py-8 shadow-[0_35px_120px_rgba(0,0,0,0.38)] md:px-10 md:py-10 lg:px-12 lg:py-12 mb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(177,195,154,0.2),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(183,141,143,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(211,176,123,0.14),transparent_18%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.5em] text-[#d8e2c7]/72">
              Services
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tight text-[#fff8ef] md:text-7xl lg:text-[5.5rem]">
              Full-stack SEO,
              <span className="block text-[#d8e2c7]">
                CRO, and growth systems.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Premium strategy, design, and technical implementation. Every
              service is built for ranking, conversion, and long-term growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-20">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-[1.75rem] border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-6 transition duration-300 hover:bg-white/[0.06] hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)] hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-[#fff8ef]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/72">
                {service.description}
              </p>

              <div className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#d8e2c7] flex-shrink-0" />
                    <span className="text-xs text-white/66">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-[#d8e2c7] hover:gap-3 transition text-sm font-medium"
              >
                Learn more →
              </a>
            </article>
          ))}
        </section>

        {/* Process Section */}
        <section className="rounded-[2rem] border border-[rgba(255,248,238,0.1)] bg-[rgba(255,248,238,0.04)] p-8 mb-20 md:p-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">
            How We Work
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            A proven process for premium results.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Audit your site, analyze competitors, and map the opportunity.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Keyword mapping, content planning, and technical roadmap.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Design, development, CMS setup, content creation, and deployment.",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "Monitoring, testing, refinement, and continuous improvement.",
              },
            ].map((phase) => (
              <div key={phase.step}>
                <div className="text-3xl font-bold text-[#d8e2c7]">
                  {phase.step}
                </div>
                <h3 className="mt-3 font-semibold text-[#fff8ef]">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-[2rem] border border-[#d8e2c7]/20 bg-[linear-gradient(145deg,rgba(177,195,154,0.16),rgba(255,248,238,0.04))] p-8 text-center mb-20 md:p-12">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Ready to dominate search and drive leads?
          </h2>
          <p className="mt-4 text-white/72 max-w-2xl mx-auto">
            Schedule a free 30-minute strategy call. We'll discuss your goals
            and show you how our services can help you grow.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="rounded-full border border-[#d8e2c7] bg-[#d8e2c7] px-6 py-3 font-medium text-[#11110f] transition hover:opacity-90"
            >
              Schedule Strategy Call
            </a>
            <a
              href="/"
              className="rounded-full border border-[rgba(255,248,238,0.2)] bg-white/[0.05] px-6 py-3 transition hover:bg-white/[0.08]"
            >
              Back to Home
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
