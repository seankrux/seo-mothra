import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ready to grow? Schedule your free SEO strategy call with SEO Mothra. We help agencies & brands dominate search.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: "hello@seo-mothra.com",
    areaServed: ["US"],
    availableLanguage: ["en"],
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
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#c97b7b]/15 to-transparent blur-3xl" />

            <div className="relative">
              <div className="mb-6 inline-block">
                <span className="inline-block rounded-full border border-[#c97b7b]/30 bg-[#c97b7b]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#c97b7b]">
                  💬 Let's Talk
                </span>
              </div>

              <h1 className="max-w-5xl font-['Outfit'] text-5xl font-bold leading-[1.1] text-[#2a2622] md:text-6xl lg:text-7xl">
                Ready to Grow Your Brand?
                <span className="block text-[#c97b7b]">
                  Schedule Your Strategy Call.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6b6560] md:text-xl">
                Get a free 30-minute strategy call. We'll audit your site,
                discuss your goals, and show you exactly how SEO Mothra can help
                you dominate search.
              </p>
            </div>
          </section>

          {/* Contact Grid */}
          <section className="grid gap-8 py-16 md:grid-cols-3">
            <div className="rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-8 backdrop-blur-sm">
              <div className="text-4xl">📧</div>
              <h3 className="mt-4 font-['Outfit'] text-xl font-bold text-[#2a2622]">
                Email Us
              </h3>
              <p className="mt-2 text-[#6b6560]">hello@seo-mothra.com</p>
            </div>

            <div className="rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-8 backdrop-blur-sm">
              <div className="text-4xl">⏱️</div>
              <h3 className="mt-4 font-['Outfit'] text-xl font-bold text-[#2a2622]">
                Response Time
              </h3>
              <p className="mt-2 text-[#6b6560]">
                We reply within 24 hours on business days
              </p>
            </div>

            <div className="rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-8 backdrop-blur-sm">
              <div className="text-4xl">🗺️</div>
              <h3 className="mt-4 font-['Outfit'] text-xl font-bold text-[#2a2622]">
                Service Areas
              </h3>
              <p className="mt-2 text-[#6b6560]">
                We serve teams nationwide and internationally
              </p>
            </div>
          </section>

          {/* Form Section */}
          <section className="grid gap-12 py-16 lg:grid-cols-2">
            <div>
              <h2 className="font-['Outfit'] text-3xl font-bold text-[#2a2622]">
                Get in Touch
              </h2>
              <p className="mt-4 text-[#6b6560]">
                Fill out the form and we'll reach out within 24 hours to
                schedule your free strategy call.
              </p>

              <div className="mt-12 space-y-4">
                <div className="rounded-2xl border border-[#7a9b6d]/20 bg-[#7a9b6d]/5 p-6">
                  <h4 className="font-['Outfit'] font-bold text-[#2a2622]">
                    Why schedule a call?
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-[#6b6560]">
                    <li>✓ Free SEO audit of your site</li>
                    <li>✓ Competitive analysis</li>
                    <li>✓ Custom growth roadmap</li>
                    <li>✓ Zero obligation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6 rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-8 backdrop-blur-sm">
                <div>
                  <label className="block text-sm font-semibold text-[#2a2622] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-[#7a9b6d]/20 bg-white/60 px-4 py-3 text-[#2a2622] placeholder-[#6b6560] focus:outline-none focus:border-[#7a9b6d]/40 focus:ring-2 focus:ring-[#7a9b6d]/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2a2622] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-[#7a9b6d]/20 bg-white/60 px-4 py-3 text-[#2a2622] placeholder-[#6b6560] focus:outline-none focus:border-[#7a9b6d]/40 focus:ring-2 focus:ring-[#7a9b6d]/20"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2a2622] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-[#7a9b6d]/20 bg-white/60 px-4 py-3 text-[#2a2622] placeholder-[#6b6560] focus:outline-none focus:border-[#7a9b6d]/40 focus:ring-2 focus:ring-[#7a9b6d]/20"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2a2622] mb-2">
                    Interest
                  </label>
                  <select className="w-full rounded-lg border border-[#7a9b6d]/20 bg-white/60 px-4 py-3 text-[#2a2622] focus:outline-none focus:border-[#7a9b6d]/40 focus:ring-2 focus:ring-[#7a9b6d]/20">
                    <option>Select a service</option>
                    <option>SEO Strategy</option>
                    <option>CRO & Lead Generation</option>
                    <option>AEO Optimization</option>
                    <option>Technical SEO</option>
                    <option>Premium Design</option>
                    <option>Full-Stack Implementation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2a2622] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-[#7a9b6d]/20 bg-white/60 px-4 py-3 text-[#2a2622] placeholder-[#6b6560] focus:outline-none focus:border-[#7a9b6d]/40 focus:ring-2 focus:ring-[#7a9b6d]/20"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#7a9b6d] px-6 py-4 font-semibold text-white transition hover:bg-[#6b8b5d] hover:shadow-lg"
                >
                  Schedule Your Free Call
                </button>

                <p className="text-xs text-[#6b6560]">
                  We'll reach out within 24 hours to confirm your call time.
                </p>
              </form>
            </div>
          </section>

          {/* Trust Section */}
          <section className="border-t border-[#7a9b6d]/20 py-16">
            <h2 className="font-['Outfit'] text-3xl font-bold text-[#2a2622] text-center mb-12">
              Why Work With Us?
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-8 backdrop-blur-sm text-center">
                <div className="text-5xl">2.3x</div>
                <p className="mt-3 font-semibold text-[#2a2622]">
                  Avg. Traffic Growth
                </p>
                <p className="mt-2 text-sm text-[#6b6560]">
                  Our clients see average traffic increases of 2.3x within 12
                  months
                </p>
              </div>

              <div className="rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-8 backdrop-blur-sm text-center">
                <div className="text-5xl">98%</div>
                <p className="mt-3 font-semibold text-[#2a2622]">
                  Client Retention
                </p>
                <p className="mt-2 text-sm text-[#6b6560]">
                  98% of our clients continue working with us long-term
                </p>
              </div>

              <div className="rounded-2xl border border-[#7a9b6d]/20 bg-white/60 p-8 backdrop-blur-sm text-center">
                <div className="text-5xl">50+</div>
                <p className="mt-3 font-semibold text-[#2a2622]">
                  Success Stories
                </p>
                <p className="mt-2 text-sm text-[#6b6560]">
                  Over 50 full-stack SEO implementations with proven results
                </p>
              </div>
            </div>
          </section>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
