import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getTestimonials } from "@/lib/sanity";
import { getHome } from "@/lib/sanity-home";
import { siteConfig } from "@/lib/site";

export const revalidate = 60;

const fallbackServices = [
  {
    icon: "search",
    title: "SEO Audit & Strategy",
    description: "A deep dive into your digital presence. We find gaps and create a roadmap that converts.",
    url: "/services",
  },
  {
    icon: "edit_note",
    title: "Content Mastery",
    description: "Content systems built for humans, search engines, and AI answer engines.",
    url: "/services",
  },
  {
    icon: "link",
    title: "Authority Building",
    description: "Authority, citations, PR, and link systems that strengthen organic visibility.",
    url: "/services",
  },
];

const fallbackStats = [
  { value: "2.3x", label: "Avg. Traffic Growth" },
  { value: "98%", label: "Client Retention" },
  { value: "50+", label: "Successful Projects" },
];

const fallbackTestimonials = [
  { quote: "SEO Mothra did not just give us rankings, they gave us a personality that resonates with our audience.", author: "James Arrington", role: "CEO, TechFlow" },
  { quote: "They transformed our entire content strategy. Results in 90 days.", author: "Sarah Chen", role: "Founder, TechScale" },
  { quote: "Premium service at a premium level. 2.3x organic traffic in six months.", author: "Marcus Rodriguez", role: "CMO, Growth Academy" },
];

export async function generateMetadata(): Promise<Metadata> {
  try {
    const home = await getHome();
    return {
      title: home?.seoTitle || "SEO Mothra | Transforming Brands. Delivering Results.",
      description: home?.seoDescription || siteConfig.description,
      alternates: { canonical: home?.canonicalUrl || "/" },
      robots: home?.noIndex ? { index: false, follow: false } : undefined,
    };
  } catch {
    return {
      title: "SEO Mothra | Transforming Brands. Delivering Results.",
      description: siteConfig.description,
    };
  }
}

export default async function HomePage() {
  const [home, liveTestimonials] = await Promise.all([
    getHome().catch(() => null),
    getTestimonials().catch(() => []),
  ]);

  const services = home?.serviceCards?.length ? home.serviceCards : fallbackServices;
  const stats = home?.stats?.length ? home.stats : fallbackStats;
  const testimonials = liveTestimonials.length ? liveTestimonials : fallbackTestimonials;
  const trustedBy = home?.trustedBy?.length ? home.trustedBy : ["Lumina", "Arcane", "Zenith"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "WebSite"],
    name: siteConfig.name,
    url: siteConfig.url,
    description: home?.seoDescription || siteConfig.description,
    "@id": siteConfig.url,
    priceRange: "$$",
    areaServed: "US",
    knowsAbout: ["SEO", "CRO", "AEO", "Content Strategy", "Technical SEO"],
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main id="main-content" className="min-h-screen">
        <section aria-label="Hero" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
            <div className="relative z-10 text-center lg:text-left stagger-reveal active">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#46583c]/20 bg-[#46583c]/10 px-4 py-2 text-[#46583c]">
                <span className="text-xs font-bold uppercase tracking-widest">{home?.heroEyebrow || "New approach to SEO"}</span>
              </div>
              <h1 className="mb-8 text-5xl font-bold leading-tight text-[#1a1c1c] md:text-6xl lg:text-7xl">
                {home?.heroTitle || "Transforming Brands."}
                <br />
                <em className="font-normal text-[#46583c]" style={{ fontFamily: "'Libre Caslon Text', serif" }}>
                  {home?.heroHighlight || "Delivering Results."}
                </em>
              </h1>
              <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-[#1a1c1c]/70 lg:mx-0">
                {home?.heroDescription || "Teaching SEO. Your path to digital mastery. We blend high-end strategy with playful creativity to get your brand seen by the right people."}
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <a href={home?.primaryCtaUrl || "/contact"} className="rounded-full bg-[#46583c] px-8 py-4 text-center text-lg font-bold text-white shadow-xl shadow-[#46583c]/20 transition-all hover:scale-105 hover:bg-[#3a4c31]">
                  {home?.primaryCtaLabel || "Get a Free Audit"}
                </a>
                <a href={home?.secondaryCtaUrl || "/services"} className="flex items-center justify-center gap-2 rounded-full border border-[rgba(26,28,28,0.12)] bg-white/20 px-8 py-4 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 hover:border-[#46583c]/40">
                  {home?.secondaryCtaLabel || "See Our Work"}
                  <span className="material-symbols-outlined text-xl" aria-hidden="true">arrow_forward</span>
                </a>
              </div>
              <div className="mt-12 flex items-center justify-center gap-8 lg:justify-start">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Trusted By</span>
                <div className="flex gap-6 opacity-40 grayscale transition-all hover:grayscale-0">
                  {trustedBy.map((brand) => (
                    <span key={brand} className="text-lg" style={{ fontFamily: "'Libre Caslon Text', serif", fontStyle: "italic" }}>{brand}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center stagger-reveal active">
              <div className="absolute -z-10 h-[500px] w-[500px] rounded-full bg-[#46583c]/5 blur-3xl" />
              <div className="flex h-80 w-80 items-center justify-center rounded-full border border-[#46583c]/10 bg-white/30 shadow-2xl backdrop-blur-sm md:h-96 md:w-96">
                <div className="text-center">
                  <div className="mb-4 text-8xl">🦋</div>
                  <p className="text-xl font-bold text-[#46583c]" style={{ fontFamily: "'Libre Caslon Text', serif", fontStyle: "italic" }}>SEO Mothra</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[rgba(26,28,28,0.08)] py-12">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3 lg:px-10">
            {stats.map((stat) => (
              <div key={`${stat.value}-${stat.label}`} className="text-center">
                <div className="text-4xl font-bold text-[#46583c]">{stat.value}</div>
                <div className="mt-2 text-sm font-semibold uppercase tracking-widest text-[#6b6e68]">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#46583c]">Services</span>
              <h2 className="mt-4 text-4xl font-bold text-[#1a1c1c]">Built For Organic And AI Search Visibility</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <a key={service.title} href={service.url || "/services"} className="rounded-3xl border border-[rgba(26,28,28,0.08)] bg-white/60 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <span className="material-symbols-outlined mb-6 text-4xl text-[#46583c]" aria-hidden="true">{service.icon || "search"}</span>
                  <h3 className="mb-4 text-2xl font-bold text-[#1a1c1c]">{service.title}</h3>
                  <p className="leading-relaxed text-[#444840]">{service.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1a1c1c] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#aab7a0]">Proof</span>
              <h2 className="mt-4 text-4xl font-bold">Client Results And Feedback</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <blockquote key={`${item.author}-${item.role}`} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <p className="mb-6 leading-relaxed text-white/80">“{item.quote}”</p>
                  <footer>
                    <div className="font-bold">{item.author}</div>
                    <div className="text-sm text-white/50">{item.role}</div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
