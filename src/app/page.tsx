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
      <main className="min-h-screen" data-page-root>
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16">
          <SiteHeader />

          <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
            <div className="relative max-w-4xl">
              <div className="mb-6 inline-block" data-hero-eyebrow>
                <span className="inline-flex items-center rounded-full border border-[rgba(35,31,27,0.12)] bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#47624f]">
                  Premium SEO, CRO, and AEO
                </span>
              </div>

              <h1
                className="max-w-5xl font-['Outfit'] text-5xl font-bold leading-[1.05] text-[#211d19] md:text-6xl lg:text-7xl"
                data-hero-title
              >
                Make the page earn the click.
                <span className="block text-[#47624f]">
                  Then make the traffic convert.
                </span>
              </h1>

              <p
                className="mt-6 max-w-2xl text-lg leading-relaxed text-[#665d54] md:text-xl"
                data-hero-copy
              >
                We build SEO-led pages for agencies, service businesses, and
                premium brands that need sharper positioning, stronger proof,
                and cleaner paths to inquiry.
              </p>

              <div className="mt-10 flex flex-wrap gap-4" data-hero-cta>
                <a className="group rounded-full bg-[#47624f] px-8 py-4 font-semibold text-white transition hover:bg-[#3d5644] hover:shadow-lg" href="/contact">
                  Book a strategy call
                  <span className="ml-2 inline-block transition group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a className="rounded-full border-2 border-[rgba(35,31,27,0.14)] px-8 py-4 font-semibold text-[#47624f] transition hover:bg-white/70" href="/services">
                  Review services
                </a>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
                <div className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/55 p-4 md:p-6" data-card>
                  <div className="text-3xl font-bold text-[#47624f]">2.3x</div>
                  <div className="mt-2 text-sm text-[#665d54]">
                    Avg. Traffic Growth
                  </div>
                </div>
                <div className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/55 p-4 md:p-6" data-card>
                  <div className="text-3xl font-bold text-[#9c6658]">98%</div>
                  <div className="mt-2 text-sm text-[#665d54]">
                    Client Retention
                  </div>
                </div>
                <div className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/55 p-4 md:p-6" data-card>
                  <div className="text-3xl font-bold text-[#9a7b4f]">50+</div>
                  <div className="mt-2 text-sm text-[#665d54]">
                    Successful Projects
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="border-t border-[rgba(35,31,27,0.12)] py-20">
            <div className="mb-12">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#47624f]">
                  Core Services
                </span>
              <h2 className="mt-4 max-w-3xl font-['Outfit'] text-4xl font-bold text-[#211d19] md:text-5xl">
                Premium SEO & Growth Services
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-[#665d54]">
                Every service is built to clear a specific bottleneck:
                positioning, traffic quality, conversion friction, or search
                visibility.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-8 transition hover:border-[rgba(35,31,27,0.2)] hover:bg-white/85 hover:shadow-lg"
                  data-scroll-reveal
                >
                  <h3 className="font-['Outfit'] text-2xl font-bold text-[#211d19]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[#665d54]">{service.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[#47624f] transition group-hover:translate-x-1">
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
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#47624f]">
                  Our Approach
                </span>
              <h2 className="mt-4 max-w-3xl font-['Outfit'] text-4xl font-bold text-[#211d19] md:text-5xl">
                Why Brands Choose SEO Mothra
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-8"
                  data-scroll-reveal
                >
                  <div className="text-4xl">{benefit.icon}</div>
                  <h3 className="mt-4 font-['Outfit'] text-lg font-bold text-[#211d19]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[#665d54]">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="border-t border-[rgba(35,31,27,0.12)] py-20">
            <div className="mb-12">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#47624f]">
                  Client Stories
                </span>
              <h2 className="mt-4 max-w-3xl font-['Outfit'] text-4xl font-bold text-[#211d19] md:text-5xl">
                Trusted by Leading Brands
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-8"
                  data-scroll-reveal
                >
                  <div className="flex gap-1 text-2xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="mt-4 text-lg font-medium text-[#211d19]">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-6 border-t border-[rgba(35,31,27,0.12)] pt-4">
                    <p className="font-semibold text-[#211d19]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#665d54]">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative overflow-hidden rounded-3xl bg-[#47624f] py-16 md:py-24">
            <div className="relative text-center text-white">
              <h2 className="font-['Outfit'] text-4xl font-bold md:text-5xl">
                Ready to fix the page that is leaking leads?
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-white/85">
                We’ll identify the bottlenecks, show the fastest wins, and map
                the conversion work before you spend on bigger changes.
              </p>
              <a className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#47624f] transition hover:bg-white/90 hover:shadow-lg" href="/contact">
                Start the review
              </a>
            </div>
          </section>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
