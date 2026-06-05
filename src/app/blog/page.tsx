import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "In-depth SEO, AEO & CRO guides. Learn technical SEO, content strategy, and conversion optimization for premium brands.",
  alternates: {
    canonical: "/blog",
  },
};

const blogPosts = [
  {
    slug: "premium-seo-homepage",
    title: "How to Structure a Premium SEO Homepage",
    excerpt:
      "The anatomy of a homepage that ranks, converts, and tells your brand story. Strategic sections, CTAs, and schema markup.",
    category: "SEO Strategy",
    readTime: "8 min read",
    date: "Coming soon",
  },
  {
    slug: "sanity-cms-local-seo",
    title: "Sanity CMS Content Models for Local SEO",
    excerpt:
      "Build reusable content models that power location pages, service pages, and multi-location SEO at scale.",
    category: "CMS & Architecture",
    readTime: "12 min read",
    date: "Coming soon",
  },
  {
    slug: "technical-seo-checklist",
    title: "Technical SEO Checklist for Launch Day",
    excerpt:
      "Don't ship without this. Metadata, robots, sitemap, schema, Core Web Vitals, and everything else that moves rankings.",
    category: "Technical SEO",
    readTime: "15 min read",
    date: "Coming soon",
  },
  {
    slug: "blog-templates-rank-convert",
    title: "Designing Blog Templates That Rank & Convert",
    excerpt:
      "Template design that balances SEO clarity, reader engagement, and conversion-friendly layouts. Structure that compounds.",
    category: "Content Design",
    readTime: "10 min read",
    date: "Coming soon",
  },
  {
    slug: "aeo-optimization-guide",
    title: "AEO Optimization Guide: Ranking in AI Search",
    excerpt:
      "Master AI search engine optimization. Answer-first content, FAQ schemas, and E-E-A-T signals that AI systems favor.",
    category: "AEO",
    readTime: "14 min read",
    date: "Coming soon",
  },
  {
    slug: "local-seo-strategy",
    title: "Local SEO Strategy for Multi-Location Brands",
    excerpt:
      "Dominate local search across multiple cities. Location pages, GMB strategy, local schema, and geo-targeted content.",
    category: "Local SEO",
    readTime: "16 min read",
    date: "Coming soon",
  },
];

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog",
    description:
      "In-depth SEO, AEO & CRO guides and resources for scaling brands and agencies.",
    url: "https://seo-mothra.vercel.app/blog",
    hasPart: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://seo-mothra.vercel.app/blog/${post.slug}`,
    })),
  };

  return (
    <main className="min-h-screen px-6 py-8 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SiteHeader />

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[2.5rem] border border-[rgba(255,248,238,0.12)] bg-[linear-gradient(145deg,rgba(255,248,238,0.09),rgba(255,248,238,0.03))] px-6 py-8 shadow-[0_35px_120px_rgba(0,0,0,0.38)] md:px-10 md:py-10 lg:px-12 lg:py-12 mb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(177,195,154,0.2),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(183,141,143,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(211,176,123,0.14),transparent_18%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.5em] text-[#d8e2c7]/72">
              Insights
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tight text-[#fff8ef] md:text-7xl lg:text-[5.5rem]">
              Premium SEO insights
              <span className="block text-[#d8e2c7]">for scaling brands.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Deep dives into technical SEO, AEO optimization, CRO strategies,
              and premium web design. Built for agencies and teams serious about
              rankings and revenue.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="mb-20">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">
              Latest Articles
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              Planned content roadmap.
            </h2>
            <p className="mt-2 text-white/60">
              These articles are coming soon. Each will be 2000+ words with
              in-depth strategies, case studies, and actionable frameworks.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-[1.75rem] border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-6 transition duration-300 hover:bg-white/[0.06] hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)] hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#d8e2c7]/15 text-[#d8e2c7]">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#fff8ef] mb-2">
                  {post.title}
                </h3>
                <p className="text-sm leading-6 text-white/72 mb-4 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,248,238,0.08)]">
                  <div className="flex gap-4 text-xs text-white/50">
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#d8e2c7] hover:gap-3 transition text-xs font-medium"
                  >
                    Read →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Content Strategy Section */}
        <section className="rounded-[2rem] border border-[rgba(255,248,238,0.1)] bg-[rgba(255,248,238,0.04)] p-8 mb-20 md:p-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">
            Content Strategy
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Knowledge that compounds over time.
          </h2>
          <p className="mt-4 text-white/72 leading-8 max-w-2xl">
            Every article is designed to rank for high-intent keywords, answer
            AI search queries, and establish SEO Mothra as the authority in
            premium SEO, AEO, and CRO for agencies and scaling brands.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "2000+ words",
                description: "Comprehensive, in-depth articles",
              },
              {
                title: "Schema optimized",
                description: "BlogPosting, FAQPage, and article schemas",
              },
              {
                title: "Linked internally",
                description: "Strategic internal linking hubs",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[rgba(255,248,238,0.08)] bg-black/20 p-4"
              >
                <p className="font-semibold text-white">{feature.title}</p>
                <p className="mt-2 text-sm text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="rounded-[2rem] border border-[#d8e2c7]/20 bg-[linear-gradient(145deg,rgba(177,195,154,0.16),rgba(255,248,238,0.04))] p-8 text-center mb-20 md:p-12">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Get premium SEO insights delivered.
          </h2>
          <p className="mt-4 text-white/72 max-w-2xl mx-auto">
            Subscribe to our email list for exclusive strategies, case studies,
            and SEO insights delivered to your inbox.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 rounded-full border border-[rgba(255,248,238,0.12)] bg-white/[0.05] px-6 py-3 text-white placeholder-white/40 transition focus:border-[#d8e2c7] focus:bg-white/[0.08] focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full border border-[#d8e2c7] bg-[#d8e2c7] px-6 py-3 font-medium text-[#11110f] transition hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </section>

        <SiteFooter />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
