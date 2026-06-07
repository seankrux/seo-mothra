import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { articles } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "In-depth SEO, AEO & CRO guides for agencies, virtual assistants, and scaling brands.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog",
    description:
      "In-depth SEO, AEO & CRO guides for agencies and scaling brands.",
    url: `${siteConfig.url}/blog`,
    mainEntity: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      description: a.excerpt,
      datePublished: a.date,
      author: { "@type": "Organization", name: "SEO Mothra" },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main className="min-h-screen pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="stagger-reveal active">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#46583c]/10 text-[#46583c] rounded-full mb-6 border border-[#46583c]/20">
                <span className="text-xs font-bold tracking-widest uppercase">
                  Insights
                </span>
              </div>
              <h1 className="max-w-5xl text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#1a1c1c] mb-6">
                SEO and conversion notes worth reading.
                <span
                  className="block"
                  style={{
                    color: "#46583c",
                    fontFamily: "'Libre Caslon Text', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  Less theory. More page-level clarity.
                </span>
              </h1>
              <p className="max-w-2xl text-lg text-[#444840]/70 leading-relaxed">
                Short, useful breakdowns on what actually improves search
                visibility, lead quality, and page performance.
              </p>
              <div className="mt-10">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 group bg-[#46583c] text-white px-8 py-4 rounded-full font-bold hover:bg-[#3a4c31] hover:scale-105 transition-all shadow-lg shadow-[#46583c]/20"
                >
                  Subscribe to updates
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, idx) => (
                <article
                  key={article.slug}
                  className="reveal card-hover group bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-[rgba(26,28,28,0.08)] flex flex-col"
                  style={{ transitionDelay: `${idx * 0.08}s` }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#46583c]/10 text-[#46583c] text-xs font-bold border border-[#46583c]/20">
                      {article.category}
                    </span>
                    <span className="text-xs text-[#444840]/50">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1a1c1c] group-hover:text-[#46583c] transition-colors flex-grow mb-4">
                    {article.title}
                  </h3>
                  <p className="text-[#444840]/70 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[rgba(26,28,28,0.08)] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#444840]/50">
                      {article.readTime}
                    </span>
                    <a
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-[#46583c] font-bold text-sm group-hover:gap-4 transition-all"
                    >
                      Read{" "}
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="reveal bg-[#46583c]/5 backdrop-blur-md rounded-[3rem] p-12 border border-[#46583c]/10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1c1c] mb-4">
                Get Premium Insights Weekly
              </h2>
              <p className="text-[#444840]/70 text-lg mb-10 max-w-2xl mx-auto">
                Subscribe for in-depth guides, case studies, and exclusive
                strategies delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-grow rounded-full border border-[rgba(26,28,28,0.12)] bg-white/75 px-6 py-4 placeholder-[#444840]/40 focus:outline-none focus:border-[#46583c]/40 focus:ring-2 focus:ring-[#46583c]/15"
                />
                <button className="rounded-full bg-[#46583c] px-8 py-4 font-bold text-white hover:bg-[#3a4c31] hover:scale-105 transition-all whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-xs text-[#444840]/50">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
