"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const contactInfo = [
  { icon: "alternate_email", title: "Email Us", value: "hello@seomothra.com" },
  {
    icon: "schedule",
    title: "Response Time",
    value: "Within 24 hours on business days",
  },
  {
    icon: "public",
    title: "Service Areas",
    value: "Nationwide & international teams",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      source: "contact-form",
    };
    try {
      await fetch("/api/crm/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="stagger-reveal active">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#46583c]/10 text-[#46583c] rounded-full mb-6 border border-[#46583c]/20">
                <span className="text-xs font-bold tracking-widest uppercase">
                  Contact
                </span>
              </div>
              <h1 className="max-w-4xl text-5xl md:text-6xl font-bold leading-tight text-[#1a1c1c] mb-6">
                Book a strategy call without the fluff.
                <span
                  className="block"
                  style={{
                    color: "#46583c",
                    fontFamily: "'Libre Caslon Text', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  Clear review. Clear next step.
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-[#444840]/70 leading-relaxed">
                Send a project summary and we&apos;ll reply with the likely
                bottlenecks, the most useful starting point, and a realistic
                scope.
              </p>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid gap-6 md:grid-cols-3 stagger-reveal">
              {contactInfo.map((c) => (
                <div
                  key={c.title}
                  className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-[rgba(26,28,28,0.08)] flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[#46583c]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#46583c]">
                      {c.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1c1c]">{c.title}</h3>
                    <p className="mt-1 text-sm text-[#444840]/70">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div className="reveal">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1c1c] mb-4">
                  Get in Touch
                </h2>
                <p className="text-[#444840]/70 mb-10">
                  Fill out the form and we&apos;ll reach out within 24 hours to
                  schedule your free strategy call.
                </p>
                <div className="bg-[#46583c]/5 border border-[#46583c]/10 rounded-2xl p-8">
                  <h4 className="font-bold text-[#1a1c1c] mb-4">
                    Why schedule a call?
                  </h4>
                  {[
                    "Free SEO audit of your site",
                    "Competitive analysis included",
                    "Custom growth roadmap",
                    "Zero obligation",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 py-2">
                      <span className="material-symbols-outlined text-[#46583c] text-sm">
                        check_circle
                      </span>
                      <span className="text-sm text-[#444840]/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal">
                {submitted ? (
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#46583c]/20 p-12 text-center">
                    <div className="w-16 h-16 bg-[#46583c]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="material-symbols-outlined text-[#46583c] text-3xl">
                        check_circle
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a1c1c] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[#444840]/70">
                      We&apos;ll be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[rgba(26,28,28,0.08)] p-8 space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1c1c] mb-2">
                        Your Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-[rgba(26,28,28,0.12)] bg-white/70 px-4 py-3 text-[#1a1c1c] placeholder-[#444840]/40 focus:outline-none focus:border-[#46583c]/40 focus:ring-2 focus:ring-[#46583c]/15"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1c1c] mb-2">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-[rgba(26,28,28,0.12)] bg-white/70 px-4 py-3 text-[#1a1c1c] placeholder-[#444840]/40 focus:outline-none focus:border-[#46583c]/40 focus:ring-2 focus:ring-[#46583c]/15"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1c1c] mb-2">
                        Company
                      </label>
                      <input
                        name="company"
                        type="text"
                        placeholder="Your Company"
                        className="w-full rounded-xl border border-[rgba(26,28,28,0.12)] bg-white/70 px-4 py-3 text-[#1a1c1c] placeholder-[#444840]/40 focus:outline-none focus:border-[#46583c]/40 focus:ring-2 focus:ring-[#46583c]/15"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1c1c] mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        className="w-full rounded-xl border border-[rgba(26,28,28,0.12)] bg-white/70 px-4 py-3 text-[#1a1c1c] focus:outline-none focus:border-[#46583c]/40 focus:ring-2 focus:ring-[#46583c]/15"
                      >
                        <option>Select a service</option>
                        <option>SEO Audit & Strategy</option>
                        <option>CRO & Lead Generation</option>
                        <option>AEO Optimization</option>
                        <option>Technical SEO</option>
                        <option>Premium UI Design</option>
                        <option>Content Mastery</option>
                        <option>Full-Stack Implementation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1c1c] mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project..."
                        className="w-full rounded-xl border border-[rgba(26,28,28,0.12)] bg-white/70 px-4 py-3 text-[#1a1c1c] placeholder-[#444840]/40 focus:outline-none focus:border-[#46583c]/40 focus:ring-2 focus:ring-[#46583c]/15"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-[#46583c] px-6 py-4 font-bold text-white hover:bg-[#3a4c31] hover:scale-[1.02] transition-all disabled:opacity-60"
                    >
                      {loading ? "Sending…" : "Schedule Your Free Call"}
                    </button>
                    <p className="text-xs text-[#444840]/50 text-center">
                      We&apos;ll reply within 24 hours to confirm your call
                      time.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
