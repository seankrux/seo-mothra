import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "SEO Mothra editorial blog for SEO, CMS, and premium website strategy."
};

const posts = [
  "How to structure a premium SEO homepage",
  "Sanity CMS content models for local SEO",
  "Technical SEO checklist for launch day",
  "Designing blog templates that rank and convert"
];

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 py-8 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SiteHeader />
        <section className="py-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8e2c7]/70">Blog</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">Editorial content built to support rankings and thought leadership.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post} className="rounded-3xl border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-6">
                <h3 className="text-xl font-semibold">{post}</h3>
                <p className="mt-3 text-white/68 leading-7">Planned articles and internal linking hubs for SEO Mothra.</p>
              </article>
            ))}
          </div>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
