import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PortableTextRenderer } from "@/components/portable-text";
import { getPage, getPages } from "@/lib/sanity";
import { siteConfig } from "@/lib/site";

export const revalidate = 60;

const reservedSlugs = new Set([
  "api",
  "blog",
  "contact",
  "goal",
  "locations",
  "services",
  "studio",
]);

export async function generateStaticParams() {
  try {
    const pages = await getPages();
    return pages
      .filter((page) => page.slug && !reservedSlugs.has(page.slug))
      .map((page) => ({ slug: page.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (reservedSlugs.has(slug)) return {};

  try {
    const page = await getPage(slug);
    if (!page) return {};

    return {
      title: page.seoTitle ?? page.title,
      description: page.seoDescription ?? page.excerpt,
      alternates: { canonical: page.canonicalUrl ?? `/${slug}` },
      robots: page.noIndex ? { index: false, follow: false } : undefined,
      openGraph: page.mainImage?.url
        ? {
            title: page.seoTitle ?? page.title,
            description: page.seoDescription ?? page.excerpt,
            url: `${siteConfig.url}/${slug}`,
            images: [{ url: page.mainImage.url, alt: page.mainImage.alt ?? page.title }],
          }
        : undefined,
    };
  } catch {
    return {};
  }
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (reservedSlugs.has(slug)) notFound();

  let page = null;
  try {
    page = await getPage(slug);
  } catch {}

  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.excerpt || page.seoDescription,
    url: `${siteConfig.url}/${page.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main id="main-content" className="min-h-screen pt-28">
        <article className="mx-auto max-w-4xl px-6 py-16 md:py-24 lg:px-10">
          <header className="mb-12 stagger-reveal active">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#46583c]/20 bg-[#46583c]/10 px-4 py-2 text-[#46583c]">
              <span className="text-xs font-bold uppercase tracking-widest">Page</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-[#1a1c1c] md:text-5xl">
              {page.title}
            </h1>
            {page.excerpt && (
              <p className="mt-6 border-l-4 border-[#46583c]/30 pl-6 text-xl leading-relaxed text-[#444840]">
                {page.excerpt}
              </p>
            )}
          </header>

          {page.mainImage?.url && (
            <figure className="mb-12 reveal">
              <img
                src={`${page.mainImage.url}?auto=format&w=1200&fit=max`}
                alt={page.mainImage.alt || page.title}
                width={page.mainImage.metadata?.dimensions?.width}
                height={page.mainImage.metadata?.dimensions?.height}
                className="w-full rounded-2xl border border-[rgba(26,28,28,0.08)]"
              />
            </figure>
          )}

          <div className="reveal">
            {page.content?.length ? (
              <PortableTextRenderer content={page.content as any} />
            ) : (
              <div className="rounded-2xl border border-[rgba(26,28,28,0.08)] bg-white/50 p-10 text-[#444840]">
                Add content for this page in Sanity Studio.
              </div>
            )}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
