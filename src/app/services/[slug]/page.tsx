import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PortableTextRenderer } from "@/components/portable-text";
import { getService, getServices } from "@/lib/sanity";
import { siteConfig } from "@/lib/site";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const services = await getServices();
    return services.map((service) => ({ slug: service.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const service = await getService(slug);
    if (!service) return {};
    return {
      title: service.seoTitle ?? service.title,
      description: service.seoDescription ?? service.description,
      alternates: { canonical: `/services/${slug}` },
    };
  } catch {
    return {};
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let service = null;
  try {
    service = await getService(slug);
  } catch {}

  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    url: `${siteConfig.url}/services/${service.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main id="main-content" className="min-h-screen pt-28">
        <article className="mx-auto max-w-4xl px-6 py-16 md:py-24 lg:px-10">
          <a href="/services" className="mb-10 inline-flex items-center gap-2 font-semibold text-[#46583c] transition-all hover:gap-4">
            <span className="material-symbols-outlined text-sm" style={{ transform: "rotate(180deg)" }} aria-hidden="true">arrow_forward</span>
            All services
          </a>

          <header className="mb-12 stagger-reveal active">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
              <span className="material-symbols-outlined text-3xl text-[#46583c]" aria-hidden="true">{service.icon || "settings"}</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-[#1a1c1c] md:text-5xl">{service.title}</h1>
            {service.description && (
              <p className="mt-6 border-l-4 border-[#46583c]/30 pl-6 text-xl leading-relaxed text-[#444840]">{service.description}</p>
            )}
          </header>

          {service.features?.length ? (
            <section className="mb-12 grid gap-3 rounded-2xl border border-[rgba(26,28,28,0.08)] bg-white/50 p-8 md:grid-cols-2">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 text-sm text-[#444840]">
                  <span className="material-symbols-outlined mt-0.5 text-sm text-[#46583c]" aria-hidden="true">check_circle</span>
                  {feature}
                </div>
              ))}
            </section>
          ) : null}

          <div className="reveal">
            {service.content?.length ? (
              <PortableTextRenderer content={service.content as any} />
            ) : (
              <div className="rounded-2xl border border-[rgba(26,28,28,0.08)] bg-white/50 p-10 text-[#444840]">Add full service content in Sanity Studio.</div>
            )}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
