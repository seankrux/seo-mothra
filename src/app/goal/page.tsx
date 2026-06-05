import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SEO Mothra mission: premium SEO strategy, AEO optimization, and Sanity CMS for agencies and scaling brands.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    title: "Premium First",
    description:
      "Every project is treated as a flagship experience. No templates, no shortcuts.",
  },
  {
    title: "Search Obsessed",
    description:
      "We optimize for SEO, AEO, and CRO from day one. Rankings and revenue compound.",
  },
  {
    title: "Sanity-Powered",
    description:
      "Headless CMS enables flexibility. No lock-in. Your content, your way.",
  },
  {
    title: "Data-Driven",
    description:
      "Every decision backed by metrics. Schema markup, Core Web Vitals, conversion tracking.",
  },
];

const team = [
  {
    name: "SEO Strategy",
    role: "Technical & Content Optimization",
    description:
      "Comprehensive keyword research, competitive analysis, and multi-channel content strategy.",
  },
  {
    name: "CRO & AEO",
    role: "Conversion & AI Search Optimization",
    description:
      "Conversion rate optimization, AI search engine optimization, and lead generation funnels.",
  },
  {
    name: "Design & Development",
    role: "Premium UI & Next.js Architecture",
    description:
      "Cinematic design systems, performance optimization, and Sanity CMS integration.",
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
    url: "https://seo-mothra.vercel.app",
    logo: "https://seo-mothra.vercel.app/favicon.svg",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "hello@seo-mothra.com",
    },
    areaServed: ["US"],
  };

  return (
    <main className="min-h-screen px-6 py-6 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SiteHeader />

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[2.5rem] border border-[rgba(255,248,238,0.12)] bg-[linear-gradient(145deg,rgba(255,248,238,0.09),rgba(255,248,238,0.03))] px-6 py-8 shadow-[0_35px_120px_rgba(0,0,0,0.38)] md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(177,195,154,0.2),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(183,141,143,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(211,176,123,0.14),transparent_18%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.5em] text-[#d8e2c7]/72">
              About SEO Mothra
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tight text-[#fff8ef] md:text-7xl lg:text-[5.5rem]">
              Premium SEO
              <span className="block text-[#d8e2c7]">
                starts with strategy.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              We help agencies and scaling brands dominate search through
              technical SEO, AI optimization, premium design, and Sanity CMS
              infrastructure.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid gap-4 border-y border-[rgba(255,248,238,0.1)] py-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-6"
            >
              <div className="text-3xl font-semibold text-[#d8e2c7]">
                {stat.number}
              </div>
              <div className="mt-2 text-sm leading-6 text-white/66">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">
                Our Mission
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Elevate your brand through search excellence.
              </h2>
              <p className="mt-6 leading-8 text-white/72">
                We believe premium web experiences and search dominance aren't
                separate goals—they're interconnected. Great design without SEO
                is invisible. SEO without conversion is wasted traffic. We merge
                all three.
              </p>
              <p className="mt-4 leading-8 text-white/72">
                Your brand deserves to be found by the right people, at the
                right time, in the right way. We make it happen.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid gap-4">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="rounded-[1.75rem] border border-[rgba(255,248,238,0.1)] bg-[rgba(255,248,238,0.04)] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[rgba(255,248,238,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
                >
                  <h3 className="text-lg font-semibold text-[#fff8ef]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services/Capabilities */}
        <section className="py-20">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">
              What We Do
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
              Full-stack SEO and premium development.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {team.map((service) => (
              <article
                key={service.name}
                className="rounded-[1.75rem] border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-8 transition duration-300 hover:bg-white/[0.06]"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">
                  Expertise
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#fff8ef]">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-[#d8e2c7]/80">
                  {service.role}
                </p>
                <p className="mt-4 leading-7 text-white/72">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="rounded-[2rem] border border-[rgba(255,248,238,0.1)] bg-[rgba(255,248,238,0.04)] p-8 py-20 md:p-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">
            How We Work
          </p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Strategy. Design. Optimization. Growth.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                desc: "Competitive analysis, keyword mapping, and technical audit.",
              },
              {
                step: "02",
                title: "Architecture & Design",
                desc: "Premium UI, Sanity CMS setup, and performance optimization.",
              },
              {
                step: "03",
                title: "Content & Schema",
                desc: "SEO-first content creation with structured data markup.",
              },
              {
                step: "04",
                title: "Launch & Monitor",
                desc: "Deployment to Vercel, tracking setup, and ongoing optimization.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-3xl font-bold text-[#d8e2c7]">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-[#fff8ef]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="rounded-[2rem] border border-[#d8e2c7]/20 bg-[linear-gradient(145deg,rgba(177,195,154,0.16),rgba(255,248,238,0.04))] p-8 text-center md:p-12">
            <h2 className="text-3xl font-semibold md:text-5xl">
              Ready to elevate your brand?
            </h2>
            <p className="mt-4 text-white/72">
              Let's discuss your SEO strategy and how we can help you rank
              higher and convert more leads.
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
