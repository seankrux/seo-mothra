import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getLiveHome } from "@/lib/sanity-live";
import { siteConfig } from "@/lib/site";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const home = await getLiveHome().catch(() => null);
  return {
    title: home?.seoTitle || "SEO Mothra | Transforming Brands. Delivering Results.",
    description: home?.seoDescription || siteConfig.description,
    alternates: { canonical: home?.canonicalUrl || "/" },
    robots: home?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function HomePage() {
  const home = await getLiveHome().catch(() => null);
  const stats = home?.stats?.length ? home.stats : [
    { value: "2.3x", label: "Avg. Traffic Growth" },
    { value: "98%", label: "Client Retention" },
    { value: "50+", label: "Successful Projects" },
  ];
  const services = home?.serviceCards?.length ? home.serviceCards : [
    { icon: "search", title: "SEO Audit & Strategy", description: "Technical, content, and authority audits with a roadmap that converts.", url: "/services" },
    { icon: "edit_note", title: "Content Mastery", description: "Content systems built for humans, search engines, and AI answer engines.", url: "/services" },
    { icon: "link", title: "Authority Building", description: "Authority, citations, PR, and link systems that strengthen visibility.", url: "/services" },
  ];

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen pt-28">
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <span className="mb-6 inline-flex rounded-full border border-[#46583c]/20 bg-[#46583c]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#46583c]">{home?.heroEyebrow || "New approach to SEO"}</span>
          <h1 className="mb-8 text-5xl font-bold leading-tight text-[#1a1c1c] md:text-7xl">{home?.heroTitle || "Transforming Brands."}<br /><em className="font-normal text-[#46583c]">{home?.heroHighlight || "Delivering Results."}</em></h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-[#1a1c1c]/70">{home?.heroDescription || "Teaching SEO. Your path to digital mastery. We blend strategy, content, and authority systems to get your brand seen."}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href={home?.primaryCtaUrl || "/contact"} className="rounded-full bg-[#46583c] px-8 py-4 text-center text-lg font-bold text-white">{home?.primaryCtaLabel || "Get a Free Audit"}</a>
            <a href={home?.secondaryCtaUrl || "/services"} className="rounded-full border border-[#46583c]/30 px-8 py-4 text-center text-lg font-bold">{home?.secondaryCtaLabel || "See Services"}</a>
          </div>
        </section>
        <section className="border-y py-12"><div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3 lg:px-10">{stats.map((stat) => <div key={`${stat.value}-${stat.label}`} className="text-center"><div className="text-4xl font-bold text-[#46583c]">{stat.value}</div><div className="mt-2 text-sm font-semibold uppercase tracking-widest text-[#6b6e68]">{stat.label}</div></div>)}</div></section>
        <section className="py-20"><div className="mx-auto max-w-7xl px-6 lg:px-10"><h2 className="mb-10 text-4xl font-bold text-[#1a1c1c]">Built For Organic And AI Search Visibility</h2><div className="grid gap-6 md:grid-cols-3">{services.map((service) => <a key={service.title} href={service.url || "/services"} className="rounded-3xl border bg-white/60 p-8 shadow-sm"><span className="material-symbols-outlined mb-6 text-4xl text-[#46583c]">{service.icon || "search"}</span><h3 className="mb-4 text-2xl font-bold text-[#1a1c1c]">{service.title}</h3><p>{service.description}</p></a>)}</div></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
