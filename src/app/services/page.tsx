import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Services",
  description: "SEO strategy, Sanity CMS, premium UI, and technical optimization services."
};

const services = [
  ["SEO Strategy", "Keyword mapping, internal linking, and content architecture for high-intent pages."],
  ["Sanity CMS", "Reusable schema design and editorial workflows for scalable publishing."],
  ["Premium UI", "Modern, editorial design system tuned for clarity, conversion, and brand presence."],
  ["Technical SEO", "Metadata, schema, sitemap, robots, canonical strategy, and speed optimization."]
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-6 py-8 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SiteHeader />
        <section className="py-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8e2c7]/70">Services</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">A full-stack SEO and content system for premium brands.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map(([title, desc]) => (
              <article key={title} className="rounded-3xl border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-white/72 leading-7">{desc}</p>
              </article>
            ))}
          </div>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
