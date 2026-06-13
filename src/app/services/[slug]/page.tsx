import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableTextRenderer } from "@/components/portable-text";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getServices } from "@/lib/sanity";
import { getLiveService } from "@/lib/sanity-live";

export const revalidate = 60;

export async function generateStaticParams() {
  const services = await getServices().catch(() => []);
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getLiveService(slug).catch(() => null);
  if (!service) return {};
  return {
    title: service.seoTitle || service.title,
    description: service.seoDescription || service.description,
    alternates: { canonical: service.canonicalUrl || `/services/${slug}` },
    robots: service.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getLiveService(slug).catch(() => null);
  if (!service) notFound();

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-28">
        <article className="mx-auto max-w-4xl px-6 py-16">
          <a href="/services" className="mb-10 inline-block font-semibold text-[#46583c]">All services</a>
          <h1 className="mb-6 text-5xl font-bold">{service.title}</h1>
          {service.description ? <p className="mb-10 text-xl">{service.description}</p> : null}
          {service.features?.length ? <ul className="mb-10 list-disc pl-6">{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul> : null}
          <PortableTextRenderer content={service.content as any} />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
