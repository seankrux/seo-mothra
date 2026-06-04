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
          <p className="text-sm uppercase tracking-[0.3em] text-sky-200/70">Contact</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">Let’s build the premium SEO Mothra experience.</h2>
          <p className="mt-6 max-w-2xl text-white/72 leading-8">The next step is wiring Sanity Studio and live content data, but this is now a complete multi-page scaffold ready for Vercel.</p>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/70">Contact placeholder</p>
            <p className="mt-2 text-lg">hello@seo-mothra.com</p>
          </div>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
