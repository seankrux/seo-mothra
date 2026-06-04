import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Locations",
  description: "Location landing pages designed for local SEO and conversion.",
};

const locations = ["Austin", "Dallas", "Houston", "San Antonio"];

export default function LocationsPage() {
  return (
    <main className="min-h-screen px-6 py-8 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SiteHeader />
        <section className="py-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8e2c7]/70">Locations</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">Local SEO landing pages built for intent and trust.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {locations.map((location) => (
              <article key={location} className="rounded-3xl border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-6 text-center">
                <h3 className="text-2xl font-semibold">{location}</h3>
                <p className="mt-2 text-sm text-white/68">Optimized for location relevance and conversion.</p>
              </article>
            ))}
          </div>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
