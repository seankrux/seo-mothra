import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

const pillars = [
  {
    title: "Brand spine",
    description: "A bold, editorial first impression that feels premium, not template-driven.",
  },
  {
    title: "Search engine story",
    description: "SEO, AEO, and schema cues woven into the structure instead of bolted on later.",
  },
  {
    title: "Conversion rhythm",
    description: "Service blocks, trust signals, and CTA pacing designed to keep visitors moving.",
  },
  {
    title: "Content engine",
    description: "A homepage that can expand into service, blog, location, and lead-gen pages cleanly.",
  },
];

const stats = [
  { value: "01", label: "Hero with cinematic hierarchy" },
  { value: "02", label: "Premium visual system with depth" },
  { value: "03", label: "SEO-ready narrative structure" },
];

const features = [
  ["Scroll-ready sections", "Layered panels, angled dividers, and paced spacing create a more immersive flow."],
  ["High-end service cards", "The service grid now reads like a premium product launch rather than a generic agency list."],
  ["Story-led proof", "The page balances brand, process, and conversion so the visual style still sells."],
  ["Future motion friendly", "The layout is ready for GSAP-style reveals without depending on them for clarity."],
];

const faqItems = [
  ["What changed?", "The homepage was redesigned with a more cinematic, premium, gaming-inspired visual rhythm for Mothra."],
  ["Is it still SEO-first?", "Yes. The structure still prioritizes search clarity, schema, and conversion pathing."],
  ["Is this a full GSAP build?", "Not yet. It is visually prepared for motion, but keeps the implementation lightweight and reliable."],
  ["What is next?", "Add richer motion, stronger media storytelling, and live Sanity content for the supporting pages."],
];

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return (
    <main className="min-h-screen px-6 py-6 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SiteHeader />

        <section className="relative overflow-hidden rounded-[2.5rem] border border-[rgba(255,248,238,0.12)] bg-[linear-gradient(145deg,rgba(255,248,238,0.09),rgba(255,248,238,0.03))] px-6 py-8 shadow-[0_35px_120px_rgba(0,0,0,0.38)] md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(177,195,154,0.2),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(183,141,143,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(211,176,123,0.14),transparent_18%)]" />
          <div className="absolute right-[-6rem] top-[-6rem] h-48 w-48 rounded-full border border-[#d8e2c7]/15 bg-[#d8e2c7]/8 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-[#d8e2c7]/72">Premium gaming-inspired agency site</p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tight text-[#fff8ef] md:text-7xl lg:text-[5.5rem]">
                SEO Mothra,
                <span className="block text-[#d8e2c7]">reframed like a cinematic launch page.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
                A sharper, more immersive homepage for the Mothra brand: premium editorial structure, dramatic visual hierarchy, and a layout that feels ready for motion, storytelling, and growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-[#d8e2c7]/20 bg-[#d8e2c7]/10 px-4 py-2 text-[#eef4e1]">cinematic layout</span>
                <span className="rounded-full border border-[rgba(255,248,238,0.1)] bg-white/[0.05] px-4 py-2 text-white/84">SEO + AEO</span>
                <span className="rounded-full border border-[rgba(255,248,238,0.1)] bg-white/[0.05] px-4 py-2 text-white/84">motion-ready</span>
                <span className="rounded-full border border-[rgba(255,248,238,0.1)] bg-white/[0.05] px-4 py-2 text-white/84">lead-gen</span>
              </div>
            </div>

            <aside className="grid gap-4">
              <div className="overflow-hidden rounded-[2rem] border border-[rgba(255,248,238,0.12)] bg-[#13110f] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.34)]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem] border border-[rgba(255,248,238,0.08)] bg-[linear-gradient(135deg,#090909,#1c1a16_55%,#090909)]">
                  <img
                    src="https://i.imgur.com/OUjxbAG.jpeg"
                    alt="SEO Mothra brand banner reference"
                    className="h-full w-full object-cover opacity-92"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.24)),radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.4))]" />
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">Brand anchor</p>
                    <p className="mt-2 text-sm text-white/68">The banner now reads like a hero asset for a premium launch.</p>
                  </div>
                  <div className="rounded-full border border-[#d8e2c7]/20 bg-[#d8e2c7]/10 px-3 py-1 text-xs text-[#f5f0e5]">refined</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-[1.75rem] border border-[rgba(255,248,238,0.12)] bg-[#13110f] p-3">
                  <img
                    src="https://i.imgur.com/1JKaKLn.png"
                    alt="SEO Mothra mascot reference"
                    className="aspect-square w-full rounded-[1.15rem] object-cover"
                  />
                </div>
                <div className="rounded-[1.75rem] border border-[rgba(255,248,238,0.12)] bg-[linear-gradient(180deg,rgba(177,195,154,0.16),rgba(255,248,238,0.05))] p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/72">Mood</p>
                  <p className="mt-3 text-2xl leading-tight text-white">Cinematic, elevated, and still conversion-focused.</p>
                  <p className="mt-4 text-sm leading-6 text-white/68">This keeps the Mothra identity strong while making the homepage feel more like a flagship experience.</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-4 border-y border-[rgba(255,248,238,0.1)] py-10 md:grid-cols-3">
          {stats.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-6">
              <div className="text-3xl font-semibold text-[#d8e2c7]">{metric.value}</div>
              <div className="mt-2 text-sm leading-6 text-white/66">{metric.label}</div>
            </div>
          ))}
        </section>

        <section className="py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">What the redesign emphasizes</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">A premium visual system that feels deliberate.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/60">
              The new direction leans harder into cinematic pacing, layered depth, and geometric framing while keeping the site easy to scan and ready for growth.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="rounded-[1.75rem] border border-[rgba(255,248,238,0.1)] bg-[rgba(255,248,238,0.04)] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[rgba(255,248,238,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
              >
                <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.32em] text-[#d8e2c7]/72">
                  <span>0{index + 1}</span>
                  <span>pillar</span>
                </div>
                <h3 className="text-xl font-semibold text-[#fff8ef]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-8 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-[2rem] border border-[rgba(255,248,238,0.1)] bg-[rgba(255,248,238,0.04)] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">Story pacing</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">The page now reads like a launch sequence.</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-white/72">
              {features.map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-[rgba(255,248,238,0.08)] bg-black/15 p-5">
                  <h3 className="text-base font-medium text-white">{title}</h3>
                  <p className="mt-2">{body}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#d8e2c7]/20 bg-[linear-gradient(145deg,rgba(177,195,154,0.16),rgba(255,248,238,0.04))] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#e8efdd]/72">Why it still works for Mothra</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">The aesthetic got bolder without losing the agency story.</h2>
            <p className="mt-4 text-white/72 leading-8">
              It still supports SEO, services, and local/authority content. The upgrade is mostly in rhythm, depth, and visual confidence — the things that make a brand feel expensive.
            </p>
            <div className="mt-8 rounded-2xl border border-[rgba(255,248,238,0.1)] bg-black/20 p-5 text-sm text-white/72">
              Ready for future GSAP scroll reveals, geometric transitions, and richer storytelling media when you want to push it even further.
            </div>
          </article>
        </section>

        <section className="py-8">
          <div className="rounded-[2rem] border border-[rgba(255,248,238,0.1)] bg-[rgba(255,248,238,0.05)] p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">Homepage CTA</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Turn this into the flagship Mothra experience, then extend it across the rest of the site.</h2>
            <p className="mt-4 max-w-3xl text-white/72 leading-8">
              The redesign gives you a stronger visual identity now, while preserving the structure needed for Sanity content, service expansion, and future motion work.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="rounded-[2rem] border border-[rgba(255,248,238,0.1)] bg-white/[0.04] p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d8e2c7]/70">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Common questions answered upfront.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqItems.map(([q, a]) => (
                <details key={q} className="group rounded-2xl border border-[rgba(255,248,238,0.1)] bg-black/15 p-5">
                  <summary className="cursor-pointer list-none text-lg font-medium outline-none group-open:text-[#d8e2c7]">{q}</summary>
                  <p className="mt-3 text-sm leading-7 text-white/70">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
