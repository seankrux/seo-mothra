import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableTextRenderer } from "@/components/portable-text";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPages } from "@/lib/sanity";
import { getLivePage } from "@/lib/sanity-live";

export const revalidate = 60;

const reserved = new Set(["api", "blog", "contact", "goal", "locations", "services", "studio"]);

export async function generateStaticParams() {
  const pages = await getPages().catch(() => []);
  return pages.filter((p) => p.slug && !reserved.has(p.slug)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (reserved.has(slug)) return {};
  const page = await getLivePage(slug).catch(() => null);
  if (!page) return {};
  return {
    title: page.seoTitle || page.title,
    description: page.seoDescription || page.excerpt,
    alternates: { canonical: page.canonicalUrl || `/${slug}` },
    robots: page.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function CmsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (reserved.has(slug)) notFound();
  const page = await getLivePage(slug).catch(() => null);
  if (!page) notFound();

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-28">
        <article className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="mb-6 text-5xl font-bold">{page.title}</h1>
          {page.excerpt ? <p className="mb-10 text-xl">{page.excerpt}</p> : null}
          <PortableTextRenderer content={page.content as any} />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
