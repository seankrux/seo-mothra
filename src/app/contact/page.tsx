import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a premium SEO Mothra project."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-8 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SiteHeader />
        <section className="py-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8e2c7]/70">Contact</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">Let’s turn SEO Mothra into a real brand system.</h2>
          <p className="mt-6 max-w-2xl text-white/72 leading-8">This page is now styled to match the premium earthy direction from the banner: quiet, confident, and built for trust.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-[#d8e2c7]/70">Email</p>
              <p className="mt-3 text-lg text-white">hello@seo-mothra.com</p>
            </div>
            <div className="rounded-3xl border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-[#d8e2c7]/70">Next step</p>
              <p className="mt-3 text-lg text-white">Wire Sanity Studio, content, and deployment target.</p>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
