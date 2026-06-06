import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SEO Mothra mission: premium SEO strategy, AEO optimization, and Sanity CMS for agencies and scaling brands.",
  alternates: {
    canonical: "/goal",
  },
};

const values = [
  {
    icon: "✨",
    title: "Premium First",
    description:
      "Every project is treated as a flagship experience. No templates, no shortcuts.",
  },
  {
    icon: "🔍",
    title: "Search Obsessed",
    description:
      "We optimize for SEO, AEO, and CRO from day one. Rankings and revenue compound.",
  },
  {
    icon: "🛠️",
    title: "Sanity-Powered",
    description:
      "Headless CMS enables flexibility. No lock-in. Your content, your way.",
  },
  {
    icon: "📊",
    title: "Data-Driven",
    description:
      "Every decision backed by metrics. Schema markup, Core Web Vitals, conversion tracking.",
  },
];

const capabilities = [
  {
    icon: "🔍",
    title: "SEO Strategy",
    description:
      "Technical & Content Optimization. Comprehensive keyword research, competitive analysis, and multi-channel content strategy.",
  },
  {
    icon: "📈",
    title: "CRO & AEO",
    description:
      "Conversion & AI Search Optimization. Conversion rate optimization, AI search engine optimization, and lead generation funnels.",
  },
  {
    icon: "🎨",
    title: "Design & Development",
    description:
      "Premium UI & Next.js Architecture. Cinematic design systems, performance optimization, and Sanity CMS integration.",
  },
];

const stats = [
  { number: "2.3x", label: "Average traffic growth for clients" },
  { number: "98%", label: "Client retention rate" },
  { number: "24h", label: "Average response time for strategy calls" },
  { number: "50+", label: "Full-stack SEO implementations completed" },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SEO Mothra",
    description:
      "Premium SEO, CRO, AEO optimization and Sanity CMS agency for scaling brands.",
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "hello@seo-mothra.com",
    },
    areaServed: ["US"],
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
                  About
                </span>
              </div>

              <h1 className="max-w-5xl font-['Outfit'] text-5xl font-bold leading-[1.1] text-[#211d19] md:text-6xl lg:text-7xl" data-hero-title>
                We build the page before we chase the traffic.
                <span className="block text-[#47624f]">
                  Strategy, design, and implementation in one motion.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#665d54] md:text-xl" data-hero-copy>
                The positioning here matters because the rest of the site needs
                to read like one system, not a stack of unrelated pages.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="grid gap-6 py-16 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-8 text-center"
              >
                <div className="font-['Outfit'] text-4xl font-bold text-[#47624f]">
                  {stat.number}
                </div>
                <p className="mt-3 text-sm text-[#665d54]">{stat.label}</p>
              </div>
            ))}
          </section>

          {/* Mission Section */}
          <section className="border-y border-[rgba(35,31,27,0.12)] py-16">
            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#47624f]">
                Our Core Values
              </span>
              <h2 className="mt-4 max-w-3xl font-['Outfit'] text-4xl font-bold text-[#211d19] md:text-5xl">
                How We Approach Every Project
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-8"
                >
                  <div className="text-4xl">{value.icon}</div>
                  <h3 className="mt-4 font-['Outfit'] text-lg font-bold text-[#211d19]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[#665d54]">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities Section */}
          <section className="py-16">
            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#47624f]">
                What We Do
              </span>
              <h2 className="mt-4 max-w-3xl font-['Outfit'] text-4xl font-bold text-[#211d19] md:text-5xl">
                Three Core Capabilities
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-[#665d54]">
                We combine strategy, design, and technical expertise to deliver
                transformative results. Every engagement includes all three.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="group rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-8 transition hover:border-[rgba(35,31,27,0.2)] hover:bg-white/85 hover:shadow-lg"
                >
                  <div className="text-5xl">{cap.icon}</div>
                  <h3 className="mt-4 font-['Outfit'] text-2xl font-bold text-[#211d19]">
                    {cap.title}
                  </h3>
                  <p className="mt-4 text-[#665d54]">{cap.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="relative overflow-hidden rounded-3xl border border-[rgba(35,31,27,0.12)] bg-white/60 py-16 md:py-24">
            <div className="relative px-6 text-center md:px-12">
              <h2 className="font-['Outfit'] text-4xl font-bold text-[#211d19] md:text-5xl">
                The SEO Mothra Philosophy
              </h2>
              <p className="mt-6 mx-auto max-w-3xl text-lg leading-relaxed text-[#665d54]">
                We don't believe in quick wins or shortcuts. Premium results
                come from strategic thinking, meticulous execution, and
                continuous optimization. We treat your growth like we'd treat
                our own brand—with care, precision, and obsessive attention to
                detail.
              </p>
              <p className="mt-6 mx-auto max-w-3xl text-lg leading-relaxed text-[#665d54]">
                The best SEO compounds. The best design stays timeless. The best
                brands lead markets. That's what we build.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 text-center">
            <h2 className="font-['Outfit'] text-3xl font-bold text-[#211d19] md:text-4xl">
              Ready to Transform Your Brand?
            </h2>
            <p className="mt-4 text-lg text-[#665d54]">
              Let's discuss your goals and show you how SEO Mothra can help.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="rounded-full bg-[#47624f] px-8 py-4 font-semibold text-white transition hover:bg-[#3d5644] hover:shadow-lg"
              >
                Schedule a Call
              </a>
              <a
                href="/services"
                className="rounded-full border-2 border-[#47624f] px-8 py-4 font-semibold text-[#47624f] transition hover:bg-[#47624f]/5"
              >
                Explore Services
              </a>
            </div>
          </section>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
