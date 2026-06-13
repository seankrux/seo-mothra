import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableTextRenderer } from "@/components/portable-text";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPosts } from "@/lib/sanity";
import { getLivePost } from "@/lib/sanity-live";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts().catch(() => []);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getLivePost(slug).catch(() => null);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: post.canonicalUrl || `/blog/${slug}` },
    robots: post.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getLivePost(slug).catch(() => null);
  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-28">
        <article className="mx-auto max-w-4xl px-6 py-16">
          <a href="/blog" className="mb-10 inline-block font-semibold text-[#46583c]">All articles</a>
          <h1 className="mb-6 text-5xl font-bold">{post.title}</h1>
          {post.excerpt ? <p className="mb-10 text-xl">{post.excerpt}</p> : null}
          <PortableTextRenderer content={post.content as any} />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
