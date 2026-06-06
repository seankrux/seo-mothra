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
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16">
          <SiteHeader />

          {/* Hero Section */}
          <section className="relative overflow-hidden py-16 md:py-24">
            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#c97b7b]/15 to-transparent blur-3xl" />

            <div className="relative">
              <div className="mb-6 inline-block">
                <span className="inline-block rounded-full border border-[#c97b7b]/30 bg-[#c97b7b]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#c97b7b]">
                  📖 Knowledge Hub
                </span>
              </div>

              <h1 className="max-w-5xl font-['Outfit'] text-5xl font-bold leading-[1.1] text-[#2a2622] md:text-6xl lg:text-7xl">
                In-Depth SEO & Growth
                <span className="block text-[#c97b7b]">
                  Strategy From The Experts
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6b6560] md:text-xl">
                Premium guides, case studies, and insights from our team. Learn
                the exact strategies we use to drive transformative results for
                our clients.
              </p>

              <div className="mt-10">
                <button className="group rounded-full bg-[#c97b7b] px-8 py-4 font-semibold text-white transition hover:bg-[#b86a6a] hover:shadow-lg">
                  Subscribe to Updates
                  <span className="ml-2 inline-block transition group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-16">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, idx) => (
                <article
                  key={article.slug}
                  className="group rounded-2xl border border-[#7a9b6d]/20 bg-gradient-to-br from-white/80 to-[#f5f1eb]/40 p-8 transition hover:border-[#c97b7b]/40 hover:bg-white/90 hover:shadow-lg"
                  style={{
                    animationDelay: `${idx * 50}ms`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block rounded-full border border-[#7a9b6d]/30 bg-[#7a9b6d]/10 px-3 py-1 text-xs font-semibold text-[#7a9b6d]">
                        {article.category}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[#6b6560]">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="mt-6 font-['Outfit'] text-2xl font-bold text-[#2a2622] transition group-hover:text-[#c97b7b]">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-[#6b6560]">{article.excerpt}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#7a9b6d]/20 pt-6">
                    <span className="text-sm font-semibold text-[#6b6560]">
                      {article.readTime}
                    </span>
                    <a
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-[#c97b7b] transition group-hover:translate-x-1"
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
          <section className="relative overflow-hidden rounded-3xl border border-[#7a9b6d]/20 bg-gradient-to-br from-[#f5f1eb] to-white py-16 md:py-24">
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gradient-to-br from-[#7a9b6d]/10 to-transparent blur-3xl" />
            <div className="relative px-6 text-center md:px-12">
              <h2 className="font-['Outfit'] text-4xl font-bold text-[#2a2622] md:text-5xl">
                Get Premium Insights Weekly
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-[#6b6560]">
                Subscribe to our newsletter for in-depth guides, case studies,
                and exclusive strategies delivered directly to your inbox.
              </p>

              <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-full border border-[#7a9b6d]/20 bg-white/60 px-6 py-4 backdrop-blur-sm placeholder-[#6b6560] focus:outline-none focus:border-[#7a9b6d]/40 focus:ring-2 focus:ring-[#7a9b6d]/20"
                  required
                />
                <button className="rounded-full bg-[#7a9b6d] px-8 py-4 font-semibold text-white transition hover:bg-[#6b8b5d] hover:shadow-lg whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-xs text-[#6b6560]">
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
