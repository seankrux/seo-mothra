import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { articles } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "SEO Mothra",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "SEO Mothra",
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main className="min-h-screen pt-28">
        <article className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
          {/* Back link */}
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-[#46583c] font-semibold mb-10 hover:gap-4 transition-all stagger-reveal active"
          >
            <span
              className="material-symbols-outlined text-sm"
              style={{ transform: "rotate(180deg)" }}
            >
              arrow_forward
            </span>
            All articles
          </a>

          {/* Header */}
          <header className="mb-12 stagger-reveal active">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#46583c]/10 text-[#46583c] text-xs font-bold border border-[#46583c]/20">
                {article.category}
              </span>
              <span className="text-sm text-[#444840]/50">{article.date}</span>
              <span className="text-sm text-[#444840]/50">·</span>
              <span className="text-sm text-[#444840]/50">
                {article.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1c1c] leading-tight mb-6">
              {article.title}
            </h1>

            <p className="text-xl text-[#444840]/70 leading-relaxed border-l-4 border-[#46583c]/30 pl-6">
              {article.excerpt}
            </p>
          </header>

          {/* Placeholder content */}
          <div className="reveal prose max-w-none">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-[rgba(26,28,28,0.08)] p-10 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#46583c]">
                  edit_note
                </span>
                <span className="text-sm font-semibold text-[#444840]/60 uppercase tracking-widest">
                  Full Article
                </span>
              </div>
              <p className="text-[#444840]/70 leading-relaxed mb-4">
                This article is managed via Sanity CMS. Connect your Sanity
                project to populate full content here.
              </p>
              <p className="text-[#444840]/70 leading-relaxed">
                {article.excerpt} In this guide, we&apos;ll walk through
                everything you need to know about{" "}
                {article.category.toLowerCase()}, with practical examples and
                actionable takeaways you can implement immediately.
              </p>
            </div>

            {/* Key takeaways */}
            <div className="bg-[#46583c]/5 rounded-2xl border border-[#46583c]/10 p-8 mb-8">
              <h2 className="text-xl font-bold text-[#1a1c1c] mb-4">
                Key Takeaways
              </h2>
              {[
                "Understand your current baseline before making changes",
                "Prioritize high-impact, low-effort improvements first",
                "Measure results consistently over 90-day windows",
                "Combine technical fixes with content improvements",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 py-2">
                  <span className="material-symbols-outlined text-[#46583c] text-sm mt-0.5">
                    check_circle
                  </span>
                  <span className="text-[#444840]/80 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="reveal mt-16 bg-[#46583c] rounded-2xl p-10 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Want this done for your site?
            </h2>
            <p className="text-white/80 mb-8">
              We&apos;ll audit your site and build a roadmap — no obligation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#46583c] px-8 py-4 rounded-full font-bold hover:bg-white/90 hover:scale-105 transition-all"
            >
              Get your free audit
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
