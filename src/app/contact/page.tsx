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
    <main className="min-h-screen px-6 py-8 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SiteHeader />

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[2.5rem] border border-[rgba(255,248,238,0.12)] bg-[linear-gradient(145deg,rgba(255,248,238,0.09),rgba(255,248,238,0.03))] px-6 py-8 shadow-[0_35px_120px_rgba(0,0,0,0.38)] md:px-10 md:py-10 lg:px-12 lg:py-12 mb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(177,195,154,0.2),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(183,141,143,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(211,176,123,0.14),transparent_18%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.5em] text-[#d8e2c7]/72">
              Get Started
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tight text-[#fff8ef] md:text-7xl lg:text-[5.5rem]">
              Let's build your
              <span className="block text-[#d8e2c7]">
                premium SEO strategy.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Schedule a free 30-minute strategy call. We'll audit your site,
              discuss your goals, and show you how SEO Mothra can help you
              dominate search.
            </p>
          </div>
        </section>

        {/* Two Column Layout */}
        <section className="grid gap-12 lg:grid-cols-2 mb-20">
          {/* Contact Information */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">
              Contact Info
            </p>
            <h2 className="mt-4 text-3xl font-semibold">Reach out directly.</h2>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[#d8e2c7]/70">
                  Email
                </p>
                <a
                  href="mailto:hello@seo-mothra.com"
                  className="mt-3 block text-xl text-white hover:text-[#d8e2c7] transition"
                >
                  hello@seo-mothra.com
                </a>
              </div>

              <div className="rounded-2xl border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[#d8e2c7]/70">
                  Response Time
                </p>
                <p className="mt-3 text-lg text-white">
                  We reply within <strong>24 hours</strong> during business
                  days.
                </p>
              </div>

              <div className="rounded-2xl border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[#d8e2c7]/70">
                  Service Areas
                </p>
                <p className="mt-3 text-lg text-white">
                  Austin • Dallas • Houston • San Antonio
                </p>
                <p className="mt-2 text-sm text-white/60">
                  We work with clients nationwide. Virtual consultations
                  available.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d8e2c7]/20 bg-[linear-gradient(145deg,rgba(177,195,154,0.16),rgba(255,248,238,0.04))] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[#d8e2c7]/70">
                  Guarantee
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  No obligation strategy call.
                </p>
                <p className="mt-2 text-sm text-white/70">
                  We'll discuss your goals, audit your current site, and provide
                  actionable recommendations. No pressure. No sales pitch.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">
              Quick Form
            </p>
            <h2 className="mt-4 text-3xl font-semibold">Schedule a call.</h2>

            <form className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/80"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-[rgba(255,248,238,0.12)] bg-white/[0.05] px-4 py-3 text-white placeholder-white/40 transition focus:border-[#d8e2c7] focus:bg-white/[0.08] focus:outline-none focus:ring-0"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-xl border border-[rgba(255,248,238,0.12)] bg-white/[0.05] px-4 py-3 text-white placeholder-white/40 transition focus:border-[#d8e2c7] focus:bg-white/[0.08] focus:outline-none focus:ring-0"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-white/80"
                >
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  className="mt-2 w-full rounded-xl border border-[rgba(255,248,238,0.12)] bg-white/[0.05] px-4 py-3 text-white placeholder-white/40 transition focus:border-[#d8e2c7] focus:bg-white/[0.08] focus:outline-none focus:ring-0"
                  placeholder="Your Agency"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-white/80"
                >
                  Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-2 w-full rounded-xl border border-[rgba(255,248,238,0.12)] bg-white/[0.05] px-4 py-3 text-white transition focus:border-[#d8e2c7] focus:bg-white/[0.08] focus:outline-none focus:ring-0"
                >
                  <option value="">Select a service...</option>
                  <option value="seo-strategy">SEO Strategy</option>
                  <option value="crm-optimization">CRO Optimization</option>
                  <option value="aeo-optimization">AEO Optimization</option>
                  <option value="sanity-cms">Sanity CMS Setup</option>
                  <option value="full-audit">Full Site Audit</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-[rgba(255,248,238,0.12)] bg-white/[0.05] px-4 py-3 text-white placeholder-white/40 transition focus:border-[#d8e2c7] focus:bg-white/[0.08] focus:outline-none focus:ring-0"
                  placeholder="What are your main goals? What challenges are you facing?"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full border border-[#d8e2c7] bg-[#d8e2c7] px-6 py-3 font-medium text-[#11110f] transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#d8e2c7]/50"
              >
                Schedule Strategy Call
              </button>

              <p className="text-xs text-white/50 text-center">
                We respect your privacy. We'll never share your info.
              </p>
            </form>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="rounded-[2rem] border border-[rgba(255,248,238,0.1)] bg-[rgba(255,248,238,0.04)] p-8 mb-20 md:p-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">
            Why Choose Us
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Proven track record. Real results.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d8e2c7]">2.3x</div>
              <p className="mt-3 text-white/70">Average traffic growth</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d8e2c7]">98%</div>
              <p className="mt-3 text-white/70">Client retention rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d8e2c7]">50+</div>
              <p className="mt-3 text-white/70">Successful implementations</p>
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
