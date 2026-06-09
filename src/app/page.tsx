import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import { getTestimonials } from "@/lib/sanity";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "SEO Mothra | Transforming Brands. Delivering Results.",
  description: siteConfig.description,
};

const services = [
  {
    icon: "search",
    title: "SEO Audit & Strategy",
    desc: "A deep dive into your digital presence. We find the gaps and create a roadmap that actually converts.",
  },
  {
    icon: "edit_note",
    title: "Content Mastery",
    desc: "Stories that sell. We create content that humans love and search engines prioritize.",
  },
  {
    icon: "link",
    title: "Authority Building",
    desc: "Premium backlinks and PR placements that establish your brand as the leader in your space.",
  },
];

const testimonials = [
  {
    quote:
      "SEO Mothra didn't just give us rankings, they gave us a personality that resonates with our audience.",
    author: "James Arrington",
    role: "CEO, TechFlow",
  },
  {
    quote: "They transformed our entire content strategy. Results in 90 days.",
    author: "Sarah Chen",
    role: "Founder, TechScale",
  },
  {
    quote:
      "Premium service at a premium level. 2.3x organic traffic in six months.",
    author: "Marcus Rodriguez",
    role: "CMO, Growth Academy",
  },
];

const stats = [
  { value: "2.3x", label: "Avg. Traffic Growth" },
  { value: "98%", label: "Client Retention" },
  { value: "50+", label: "Successful Projects" },
];

export default async function HomePage() {
  let liveTestimonials: { quote: string; author: string; role: string }[] = [];
  try {
    liveTestimonials = await getTestimonials();
  } catch {}
  const displayTestimonials = liveTestimonials.length
    ? liveTestimonials
    : testimonials;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "WebSite"],
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    "@id": siteConfig.url,
    priceRange: "$$",
    areaServed: "US",
    knowsAbout: ["SEO", "CRO", "AEO", "Content Strategy", "Technical SEO"],
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main id="main-content" className="min-h-screen">
        {/* ── Hero ── */}
        <section
          aria-label="Hero"
          className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="relative z-10 text-center lg:text-left stagger-reveal active">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#46583c]/10 text-[#46583c] rounded-full mb-6 border border-[#46583c]/20">
                <span className="text-xs font-bold tracking-widest uppercase">
                  New approach to SEO
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1c1c] leading-tight mb-8">
                Transforming Brands.
                <br />
                <em
                  className="text-[#46583c] font-normal"
                  style={{ fontFamily: "'Libre Caslon Text', serif" }}
                >
                  Delivering Results.
                </em>
              </h1>

              <p className="text-lg text-[#1a1c1c]/70 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Teaching SEO. Your path to digital mastery. We blend high-end
                strategy with playful creativity to get your brand seen by the
                right people.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-[#46583c] hover:bg-[#3a4c31] hover:scale-105 text-white rounded-full font-bold text-lg shadow-xl shadow-[#46583c]/20 transition-all text-center"
                >
                  Get a Free Audit
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-[rgba(26,28,28,0.12)] hover:border-[#46583c]/40 hover:scale-105 bg-white/20 backdrop-blur-sm rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group"
                >
                  See Our Work
                  <span
                    className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
                <span className="font-bold text-[10px] tracking-widest uppercase opacity-40">
                  Trusted By
                </span>
                <div className="flex gap-6 opacity-40 grayscale hover:grayscale-0 transition-all">
                  <span
                    className="text-lg"
                    style={{
                      fontFamily: "'Libre Caslon Text', serif",
                      fontStyle: "italic",
                    }}
                  >
                    Lumina
                  </span>
                  <span
                    className="text-lg"
                    style={{
                      fontFamily: "'Libre Caslon Text', serif",
                      fontStyle: "italic",
                    }}
                  >
                    Arcane
                  </span>
                  <span
                    className="text-lg"
                    style={{
                      fontFamily: "'Libre Caslon Text', serif",
                      fontStyle: "italic",
                    }}
                  >
                    Zenith
                  </span>
                </div>
              </div>
            </div>

            {/* Right — floating visual */}
            <div className="relative flex justify-center items-center stagger-reveal active">
              <div className="absolute w-[500px] h-[500px] bg-[#46583c]/5 rounded-full blur-3xl -z-10" />

              <div className="animate-float-slow relative z-10">
                {/* Moth mascot placeholder */}
                <div className="w-80 h-80 md:w-96 md:h-96 bg-white/30 backdrop-blur-sm rounded-full border border-[#46583c]/10 flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🦋</div>
                    <p
                      className="text-[#46583c] text-xl font-bold"
                      style={{
                        fontFamily: "'Libre Caslon Text', serif",
                        fontStyle: "italic",
                      }}
                    >
                      SEO Mothra
                    </p>
                  </div>
                </div>

                {/* Badge 1 */}
                <div className="animate-badge absolute -top-4 -right-4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center gap-3 border border-[#46583c]/10">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-[#46583c]"
                      aria-hidden="true"
                    >
                      trending_up
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400">
                      Monthly Traffic
                    </p>
                    <p className="text-lg font-bold text-[#1a1c1c]">+142%</p>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="animate-badge-delay absolute bottom-1/4 -left-10 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center gap-3 border border-[#46583c]/10">
                  <div className="w-10 h-10 bg-[#46583c]/10 rounded-full flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-[#46583c]"
                      aria-hidden="true"
                    >
                      verified
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400">
                      Position 1
                    </p>
                    <p className="text-lg font-bold text-[#1a1c1c]">
                      Top Keywords
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="py-12 border-y border-[rgba(26,28,28,0.08)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-3 gap-8 text-center stagger-reveal">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-4xl md:text-5xl font-bold text-[#46583c]">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-[#444840]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section
          aria-label="Our SEO Expertise and Services"
          className="py-32 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <div className="max-w-3xl mx-auto mb-20 reveal">
              <h2
                className="text-[#46583c] text-xl mb-4"
                style={{
                  fontFamily: "'Libre Caslon Text', serif",
                  fontStyle: "italic",
                }}
              >
                Our Expertise
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#1a1c1c] mb-6 tracking-tight">
                Everything you need to{" "}
                <span className="text-[#46583c]/70">rule the search page.</span>
              </h3>
              <p className="text-[#444840] text-lg">
                We don&apos;t just optimize, we transform. Our holistic approach
                ensures your brand resonates long after the click.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((svc, i) => (
                <div
                  key={svc.title}
                  className="reveal card-hover group bg-white/40 backdrop-blur-sm p-10 rounded-2xl border border-[rgba(26,28,28,0.08)] flex flex-col items-center h-full text-center"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500">
                    <span
                      className="material-symbols-outlined text-[#46583c] text-3xl"
                      aria-hidden="true"
                    >
                      {svc.icon}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{svc.title}</h4>
                  <p className="text-[#444840] leading-relaxed mb-8 flex-grow">
                    {svc.desc}
                  </p>
                  <a
                    href="/services"
                    className="inline-flex items-center text-[#46583c] font-bold gap-2 group-hover:gap-4 transition-all"
                  >
                    Learn More{" "}
                    <span
                      className="material-symbols-outlined text-sm"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section
          id="process"
          className="py-24 border-t border-[rgba(26,28,28,0.08)]"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-16 reveal">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#46583c]">
                How We Work
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#1a1c1c]">
                A process that removes guesswork.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-4 stagger-reveal">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "Deep audit of your current state and competitive landscape.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  desc: "Comprehensive roadmap tailored to your goals and market.",
                },
                {
                  step: "03",
                  title: "Implementation",
                  desc: "Premium execution across all agreed-upon services.",
                },
                {
                  step: "04",
                  title: "Optimization",
                  desc: "Continuous monitoring, testing, and refinement.",
                },
              ].map((p) => (
                <div
                  key={p.step}
                  className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-[rgba(26,28,28,0.08)]"
                >
                  <div className="text-3xl font-bold text-[#46583c]">
                    {p.step}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[#1a1c1c]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#444840]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA + Testimonial ── */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="reveal bg-[#46583c]/5 backdrop-blur-md rounded-[3rem] p-12 relative overflow-hidden border border-[#46583c]/10">
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-xl">
                  <h2 className="text-4xl font-bold text-[#1a1c1c] mb-6">
                    Ready to flutter to the top of the SERPs?
                  </h2>
                  <p className="text-[#444840] text-lg mb-8">
                    Join the elite brands that have transformed their organic
                    reach with SEO Mothra&apos;s expert touch.
                  </p>
                  <div className="flex flex-wrap gap-4 p-2 bg-white/60 backdrop-blur-md rounded-3xl lg:rounded-full shadow-sm border border-[rgba(26,28,28,0.08)]">
                    <input
                      aria-label="Enter your website URL"
                      className="bg-transparent border-none text-[#1a1c1c] placeholder-[#444840]/40 rounded-full px-6 py-3 flex-grow focus:ring-0 outline-none"
                      placeholder="Enter your website URL"
                      type="url"
                    />
                    <a
                      href="/contact"
                      className="bg-[#46583c] text-white px-8 py-3 rounded-full font-bold hover:bg-[#3a4c31] hover:scale-105 transition-all"
                    >
                      Analyze
                    </a>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] shadow-xl shadow-[#46583c]/5 border border-[#46583c]/10 max-w-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#46583c]/10 flex items-center justify-center text-xl">
                        👤
                      </div>
                      <div>
                        <p className="font-bold text-[#1a1c1c]">
                          James Arrington
                        </p>
                        <p className="text-xs text-[#6b6e68] uppercase tracking-widest font-bold">
                          CEO, TechFlow
                        </p>
                      </div>
                    </div>
                    <p
                      className="text-lg text-[#1a1c1c]/80 leading-relaxed"
                      style={{
                        fontFamily: "'Libre Caslon Text', serif",
                        fontStyle: "italic",
                      }}
                    >
                      &ldquo;SEO Mothra didn&apos;t just give us rankings, they
                      gave us a personality that resonates with our
                      audience.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials Grid ── */}
        <section className="py-24 border-t border-[rgba(26,28,28,0.08)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-16 reveal">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#46583c]">
                Client Stories
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#1a1c1c]">
                Trusted by leading brands.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3 stagger-reveal">
              {displayTestimonials.map((t) => (
                <div
                  key={t.author}
                  className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-[rgba(26,28,28,0.08)] card-hover"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#46583c]">
                        ★
                      </span>
                    ))}
                  </div>
                  <p
                    className="text-lg text-[#1a1c1c] leading-relaxed mb-6"
                    style={{
                      fontFamily: "'Libre Caslon Text', serif",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-[rgba(26,28,28,0.08)] pt-4">
                    <p className="font-semibold text-[#1a1c1c]">{t.author}</p>
                    <p className="text-sm text-[#5e6159]">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-3xl bg-[#46583c] py-20 md:py-28 text-center text-white">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#bcf540] rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to fix the page that is leaking leads?
                </h2>
                <p className="mt-4 mx-auto max-w-2xl text-lg text-white/80">
                  We&apos;ll identify the bottlenecks, show the fastest wins,
                  and map the conversion work before you spend on bigger
                  changes.
                </p>
                <a
                  href="/contact"
                  className="mt-10 inline-flex rounded-full bg-white px-10 py-4 font-bold text-[#46583c] transition hover:bg-white/90 hover:scale-105 hover:shadow-lg"
                >
                  Start the review
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
