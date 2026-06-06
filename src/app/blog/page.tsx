import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { articles } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "In-depth SEO, AEO & CRO guides for agencies, virtual assistants, and scaling brands. Premium insights from our team of strategists and designers.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog",
    description:
      "In-depth SEO, AEO & CRO guides for agencies, virtual assistants, and scaling brands.",
    url: `${siteConfig.url}/blog`,
    mainEntity: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.excerpt,
      datePublished: article.date,
      author: {
        "@type": "Organization",
        name: "SEO Mothra",
      },
    })),
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

          {/* Hero Section */}
          <section className="relative overflow-hidden py-16 md:py-24">
            <div className="relative">
              <div className="mb-6 inline-block" data-hero-eyebrow>
                <span className="inline-block rounded-full border border-[rgba(35,31,27,0.12)] bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#9c6658]">
                  Insights
                </span>
              </div>

              <h1 className="max-w-5xl font-['Outfit'] text-5xl font-bold leading-[1.1] text-[#211d19] md:text-6xl lg:text-7xl" data-hero-title>
                SEO and conversion notes that are worth reading.
                <span className="block text-[#9c6658]">
                  Less theory. More page-level clarity.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#665d54] md:text-xl" data-hero-copy>
                Short, useful breakdowns on what actually improves search
                visibility, lead quality, and page performance.
              </p>

              <div className="mt-10" data-hero-cta>
                <a className="group rounded-full bg-[#9c6658] px-8 py-4 font-semibold text-white transition hover:bg-[#875446] hover:shadow-lg" href="/contact">
                  Subscribe to updates
                  <span className="ml-2 inline-block transition group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-16">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, idx) => (
                <article
                  key={article.slug}
                className="group rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-8 transition hover:border-[rgba(35,31,27,0.2)] hover:bg-white/85 hover:shadow-lg"
                data-card
                  style={{
                    animationDelay: `${idx * 50}ms`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block rounded-full border border-[rgba(35,31,27,0.12)] bg-white/55 px-3 py-1 text-xs font-semibold text-[#47624f]">
                        {article.category}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[#665d54]">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="mt-6 font-['Outfit'] text-2xl font-bold text-[#211d19] transition group-hover:text-[#9c6658]">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-[#665d54]">{article.excerpt}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-[rgba(35,31,27,0.12)] pt-6">
                    <span className="text-sm font-semibold text-[#665d54]">
                      {article.readTime}
                    </span>
                    <a
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-[#9c6658] transition group-hover:translate-x-1"
                    >
                      <span className="font-semibold">Read</span>
                      <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="relative overflow-hidden rounded-3xl border border-[rgba(35,31,27,0.12)] bg-white/60 py-16 md:py-24">
            <div className="relative px-6 text-center md:px-12">
              <h2 className="font-['Outfit'] text-4xl font-bold text-[#211d19] md:text-5xl">
                Get Premium Insights Weekly
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-[#665d54]">
                Subscribe to our newsletter for in-depth guides, case studies,
                and exclusive strategies delivered directly to your inbox.
              </p>

              <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-full border border-[rgba(35,31,27,0.12)] bg-white/75 px-6 py-4 placeholder-[#665d54] focus:outline-none focus:border-[#47624f]/40 focus:ring-2 focus:ring-[#47624f]/15"
                  required
                />
                <button className="rounded-full bg-[#47624f] px-8 py-4 font-semibold text-white transition hover:bg-[#3d5644] hover:shadow-lg whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-xs text-[#665d54]">
                No spam, just premium insights. Unsubscribe anytime.
              </p>
            </div>
          </section>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
