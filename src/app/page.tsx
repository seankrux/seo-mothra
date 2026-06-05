import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

const services = [
  { title: "SEO Strategy", desc: "Data-driven organic growth" },
  { title: "CRO & AEO", desc: "Conversion & AI search optimization" },
  { title: "Content Design", desc: "Premium brand storytelling" },
];

const benefits = [
  {
    icon: "🌿",
    title: "Premium First",
    desc: "Every pixel intentional, every word earned.",
  },
  {
    icon: "🔍",
    title: "Search Obsessed",
    desc: "SEO, AEO, and schema built into the foundation.",
  },
  {
    icon: "📱",
    title: "Conversion Ready",
    desc: "Designed to guide visitors toward action.",
  },
  {
    icon: "⚡",
    title: "Performance Optimized",
    desc: "Fast loads, smooth interactions, zero bloat.",
  },
];

const testimonials = [
  {
    quote: "They transformed our entire content strategy. Results in 90 days.",
    author: "Sarah Chen",
    company: "TechScale",
  },
  {
    quote:
      "The SEO work was comprehensive and the results speak for themselves.",
    author: "Marcus Rodriguez",
    company: "Growth Academy",
  },
  {
    quote: "Premium service at a premium level. Highly recommended.",
    author: "Emily Watson",
    company: "VA Elite",
  },
];

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
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
      name: siteConfig.name,
    },
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
          <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#7a9b6d]/15 to-transparent blur-3xl" />
            <div className="absolute -bottom-20 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-[#c97b7b]/10 to-transparent blur-3xl" />

            <div className="relative">
              <div className="mb-6 inline-block">
                <span className="inline-block rounded-full border border-[#7a9b6d]/30 bg-[#7a9b6d]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#7a9b6d]">
                  ✨ Premium SEO & Growth Platform
                </span>
              </div>

              <h1 className="max-w-5xl font-['Outfit'] text-5xl font-bold leading-[1.1] text-[#2a2622] md:text-6xl lg:text-7xl">
                Transform Your Brand.
                <span className="block bg-gradient-to-r from-[#7a9b6d] to-[#c97b7b] bg-clip-text text-transparent">
                  Deliver Results That Matter.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6b6560] md:text-xl">
                Premium SEO, conversion optimization, and content strategy for
                agencies, virtual assistants, and scaling brands. We teach, we
                deliver, and we prove it with results.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="group rounded-full bg-[#7a9b6d] px-8 py-4 font-semibold text-white transition hover:bg-[#6b8b5d] hover:shadow-lg">
                  Schedule Strategy Call
                  <span className="ml-2 inline-block transition group-hover:translate-x-1">
                    →
                  </span>
                </button>
                <button className="rounded-full border-2 border-[#7a9b6d] px-8 py-4 font-semibold text-[#7a9b6d] transition hover:bg-[#7a9b6d]/5">
                  Explore Our Work
                </button>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                <div className="rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-4 backdrop-blur-sm md:p-6">
                  <div className="text-3xl font-bold text-[#7a9b6d]">2.3x</div>
                  <div className="mt-2 text-sm text-[#6b6560]">
                    Avg. Traffic Growth
                  </div>
                </div>
                <div className="rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-4 backdrop-blur-sm md:p-6">
                  <div className="text-3xl font-bold text-[#c97b7b]">98%</div>
                  <div className="mt-2 text-sm text-[#6b6560]">
                    Client Retention
                  </div>
                </div>
                <div className="rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-4 backdrop-blur-sm md:p-6">
                  <div className="text-3xl font-bold text-[#c4a574]">50+</div>
                  <div className="mt-2 text-sm text-[#6b6560]">
                    Successful Projects
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="border-t border-[#7a9b6d]/20 py-20">
            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7a9b6d]">
                Core Services
              </span>
              <h2 className="mt-4 max-w-3xl font-['Outfit'] text-4xl font-bold text-[#2a2622] md:text-5xl">
                Premium SEO & Growth Services
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-[#6b6560]">
                We don't just optimize. We transform brands into market leaders
                through strategic, data-driven approaches.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-[#7a9b6d]/20 bg-gradient-to-br from-white/80 to-[#f5f1eb]/40 p-8 transition hover:border-[#7a9b6d]/40 hover:bg-white/90 hover:shadow-lg"
                >
                  <h3 className="font-['Outfit'] text-2xl font-bold text-[#2a2622]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[#6b6560]">{service.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[#7a9b6d] transition group-hover:translate-x-1">
                    <span className="font-semibold">Learn More</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20">
            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7a9b6d]">
                Our Approach
              </span>
              <h2 className="mt-4 max-w-3xl font-['Outfit'] text-4xl font-bold text-[#2a2622] md:text-5xl">
                Why Brands Choose SEO Mothra
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-8 backdrop-blur-sm"
                >
                  <div className="text-4xl">{benefit.icon}</div>
                  <h3 className="mt-4 font-['Outfit'] text-lg font-bold text-[#2a2622]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[#6b6560]">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="border-t border-[#7a9b6d]/20 py-20">
            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7a9b6d]">
                Client Stories
              </span>
              <h2 className="mt-4 max-w-3xl font-['Outfit'] text-4xl font-bold text-[#2a2622] md:text-5xl">
                Trusted by Leading Brands
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="rounded-2xl border border-[#7a9b6d]/20 bg-gradient-to-br from-white/80 to-[#f5f1eb]/40 p-8"
                >
                  <div className="flex gap-1 text-2xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="mt-4 text-lg font-medium text-[#2a2622]">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-6 border-t border-[#7a9b6d]/20 pt-4">
                    <p className="font-semibold text-[#2a2622]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#6b6560]">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7a9b6d] to-[#6b8b5d] py-16 md:py-24">
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative text-center text-white">
              <h2 className="font-['Outfit'] text-4xl font-bold md:text-5xl">
                Ready to Transform Your Brand?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-white/90">
                Schedule a free strategy call with our team. No obligation, just
                honest recommendations.
              </p>
              <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-[#7a9b6d] transition hover:bg-white/90 hover:shadow-lg">
                Start Your Free Consultation
              </button>
            </div>
          </section>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
