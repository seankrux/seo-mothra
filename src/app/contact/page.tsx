import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "./ContactForm";

const contactInfo = [
  { icon: "alternate_email", title: "Email Us", value: "hello@seomothra.com" },
  { icon: "schedule", title: "Response Time", value: "Within 24 hours on business days" },
  { icon: "public", title: "Service Areas", value: "Nationwide & international teams" },
];

export const metadata: Metadata = {
  title: "Contact | Free SEO Strategy Call",
  description:
    "Book a free SEO strategy call with SEO Mothra. We audit your site and deliver a clear growth roadmap — no obligation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" className="min-h-screen pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="stagger-reveal active">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#46583c]/10 text-[#46583c] rounded-full mb-6 border border-[#46583c]/20">
                <span className="text-xs font-bold tracking-widest uppercase">Contact</span>
              </div>
              <h1 className="max-w-4xl text-5xl md:text-6xl font-bold leading-tight text-[#1a1c1c] mb-6">
                Book a strategy call without the fluff.
                <span
                  className="block"
                  style={{ color: "#46583c", fontFamily: "'Libre Caslon Text', serif", fontStyle: "italic", fontWeight: 400 }}
                >
                  Clear review. Clear next step.
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-[#444840] leading-relaxed">
                Send a project summary and we&apos;ll reply with the likely bottlenecks, the most
                useful starting point, and a realistic scope.
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
                    <span className="material-symbols-outlined text-[#46583c]" aria-hidden="true">{c.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1c1c]">{c.title}</h3>
                    <p className="mt-1 text-sm text-[#444840]">{c.value}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1c1c] mb-4">Get in Touch</h2>
                <p className="text-[#444840] mb-10">
                  Fill out the form and we&apos;ll reach out within 24 hours to schedule your free strategy call.
                </p>
                <div className="bg-[#46583c]/5 border border-[#46583c]/10 rounded-2xl p-8">
                  <h3 className="font-bold text-[#1a1c1c] mb-4">Why schedule a call?</h3>
                  {[
                    "Free SEO audit of your site",
                    "Competitive analysis included",
                    "Custom growth roadmap",
                    "Zero obligation",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 py-2">
                      <span className="material-symbols-outlined text-[#46583c] text-sm" aria-hidden="true">check_circle</span>
                      <span className="text-sm text-[#444840]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
