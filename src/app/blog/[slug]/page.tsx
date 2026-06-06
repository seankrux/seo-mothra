import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { articles } from "@/lib/content";
import { siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

async function getArticle(params: BlogPostPageProps["params"]) {
  const { slug } = await params;
  return articles.find((article) => article.slug === slug);
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const article = await getArticle(params);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${siteConfig.url}/blog/${article.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const article = await getArticle(params);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <div className="mx-auto max-w-4xl px-6 py-8 md:px-10 lg:px-16">
          <SiteHeader />

          <article className="py-16 md:py-24">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-block rounded-full border border-[#c97b7b]/30 bg-[#c97b7b]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#c97b7b]">
                {article.category}
              </span>
              <span className="text-sm font-semibold text-[#6b6560]">
                {article.date} · {article.readTime}
              </span>
            </div>

            <h1 className="font-['Outfit'] text-5xl font-bold leading-[1.1] text-[#2a2622] md:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#6b6560]">
              {article.excerpt}
            </p>

            <div className="mt-12 space-y-8 border-y border-[#7a9b6d]/20 py-12 text-lg leading-8 text-[#6b6560]">
              <p>
                Strong organic growth starts with clear search intent, useful
                content structure, and landing pages built to convert. This
                guide gives marketing teams a practical framework for turning
                strategy into measurable pipeline.
              </p>
              <p>
                SEO Mothra approaches each engagement by auditing the current
                site, mapping buyer questions, improving technical foundations,
                and building answer-first content that supports both search
                engines and AI-assisted discovery.
              </p>
              <p>
                Use this article as a starting point for your next audit,
                roadmap, or growth sprint, then adapt the recommendations to
                your audience, market, and conversion goals.
              </p>
            </div>

            <a
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-[#7a9b6d] px-8 py-4 font-semibold text-white transition hover:bg-[#6b8b5d] hover:shadow-lg"
            >
              Talk Through Your SEO Roadmap
            </a>
          </article>
        </div>

        <SiteFooter />
      </main>
    </>
  );
}
