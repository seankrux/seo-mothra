import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PortableTextRenderer } from "@/components/portable-text";
import { articles } from "@/lib/content";
import { getPost, getPosts, type SanityPost } from "@/lib/sanity";
import { siteConfig } from "@/lib/site";

export const revalidate = 60;

type ArticleView = {
  title: string;
  slug: string;
  category: string;
  readTime: string;
  excerpt: string;
  publishedAt: string;
  content?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
};

function normalizePost(post: SanityPost): ArticleView {
  return {
    title: post.title,
    slug: post.slug,
    category: post.category || "SEO Strategy",
    readTime: post.readTime || "5 min read",
    excerpt: post.excerpt || post.seoDescription || "Read the latest SEO Mothra insight.",
    publishedAt: post.publishedAt || new Date().toISOString(),
    content: post.content,
    seoTitle: post.seoTitle,
    seoDescription: post.seoDescription,
    canonicalUrl: post.canonicalUrl,
    noIndex: post.noIndex,
  };
}

function normalizeStaticArticle(article: (typeof articles)[number]): ArticleView {
  return {
    title: article.title,
    slug: article.slug,
    category: article.category,
    readTime: article.readTime,
    excerpt: article.excerpt,
    publishedAt: article.date,
  };
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    return posts.map((p) => ({ slug: p.slug }));
  } catch {
    return articles.map((a) => ({ slug: a.slug }));
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    if (post) {
      return {
        title: post.seoTitle ?? post.title,
        description: post.seoDescription ?? post.excerpt,
        alternates: { canonical: post.canonicalUrl ?? `/blog/${slug}` },
        robots: post.noIndex ? { index: false, follow: false } : undefined,
      };
    }
  } catch {}
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let sanityPost: ArticleView | null = null;
  try {
    const post = await getPost(slug);
    sanityPost = post ? normalizePost(post) : null;
  } catch {}

  const article = sanityPost ?? articles.find((a) => a.slug === slug && normalizeStaticArticle(a));
  const displayArticle = sanityPost ?? (article ? normalizeStaticArticle(article as (typeof articles)[number]) : null);
  if (!displayArticle) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: displayArticle.title,
    description: displayArticle.excerpt,
    datePublished: displayArticle.publishedAt,
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
      "@id": `${siteConfig.url}/blog/${displayArticle.slug}`,
    },
  };

  const hasFullContent = Boolean(displayArticle.content?.length);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main id="main-content" className="min-h-screen pt-28">
        <article className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-[#46583c] font-semibold mb-10 hover:gap-4 transition-all stagger-reveal active"
          >
            <span
              className="material-symbols-outlined text-sm"
              style={{ transform: "rotate(180deg)" }}
              aria-hidden="true"
            >
              arrow_forward
            </span>
            All articles
          </a>

          <header className="mb-12 stagger-reveal active">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#46583c]/10 text-[#46583c] text-xs font-bold border border-[#46583c]/20">
                {displayArticle.category}
              </span>
              <span className="text-sm text-[#6b6e68]">
                {displayArticle.publishedAt ? formatDate(displayArticle.publishedAt) : ""}
              </span>
              <span className="text-sm text-[#6b6e68]">·</span>
              <span className="text-sm text-[#6b6e68]">{displayArticle.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1c1c] leading-tight mb-6">
              {displayArticle.title}
            </h1>

            <p className="text-xl text-[#444840] leading-relaxed border-l-4 border-[#46583c]/30 pl-6">
              {displayArticle.excerpt}
            </p>
          </header>

          <div className="reveal">
            {hasFullContent ? (
              <PortableTextRenderer content={displayArticle.content as any} />
            ) : (
              <div className="prose max-w-none">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-[rgba(26,28,28,0.08)] p-10 mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-[#46583c]" aria-hidden="true">
                      edit_note
                    </span>
                    <span className="text-sm font-semibold text-[#5e6159] uppercase tracking-widest">
                      Full Article
                    </span>
                  </div>
                  <p className="text-[#444840] leading-relaxed mb-4">
                    This article is managed via Sanity CMS. Add Portable Text content in Studio to replace this fallback.
                  </p>
                  <p className="text-[#444840] leading-relaxed">
                    {displayArticle.excerpt} In this guide, we&apos;ll walk through everything you need to know about {displayArticle.category.toLowerCase()}, with practical examples and actionable takeaways you can implement immediately.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="reveal mt-16 bg-[#46583c] rounded-2xl p-10 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Want this done for your site?</h2>
            <p className="text-white/80 mb-8">
              We&apos;ll audit your site and build a roadmap, no obligation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#46583c] px-8 py-4 rounded-full font-bold hover:bg-white/90 hover:scale-105 transition-all"
            >
              Get your free audit
              <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
            </a>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
