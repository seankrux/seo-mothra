const services = [
  "SEO content strategy",
  "Sanity CMS architecture",
  "Premium web design",
  "Technical SEO optimization"
];

const metrics = [
  { value: "4x", label: "content velocity" },
  { value: "90+", label: "performance target" },
  { value: "SEO", label: "first architecture" }
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-8 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between border-b border-white/10 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">SEO Mothra</p>
            <h1 className="text-lg font-semibold">Premium SEO Website System</h1>
          </div>
          <nav aria-label="Primary" className="flex gap-2 text-sm">
            <a className="rounded-full border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10" href="/services">Services</a>
            <a className="rounded-full border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10" href="/locations">Locations</a>
            <a className="rounded-full border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10" href="/blog">Blog</a>
            <a className="rounded-full border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10" href="/contact">Start project</a>
          </nav>
        </header>

        <section className="grid gap-12 py-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm text-sky-100">
              Modern aesthetic. Technical SEO. Sanity-powered content.
            </p>
            <h2 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              A premium website built to rank, convert, and scale.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              SEO Mothra combines editorial design, content systems, and performance-first engineering for a standout web presence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="rounded-full bg-sky-300 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-200" href="#services">
                Explore services
              </a>
              <a className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium hover:bg-white/10" href="#about">
                View strategy
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-sky-950/30 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-sky-200/80">Launch stack</p>
              <ul className="mt-4 space-y-3 text-white/85">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-sky-300" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-4 border-y border-white/10 py-10 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl font-semibold text-sky-200">{metric.value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.2em] text-white/60">{metric.label}</div>
            </div>
          ))}
        </section>

        <section id="services" className="grid gap-6 py-20 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["SEO Strategy", "High-intent content architecture and keyword mapping."],
            ["Sanity CMS", "Structured editorial workflows and reusable content blocks."],
            ["Premium UI", "Modern visual system with strong typography and spacing."],
            ["Technical SEO", "Metadata, schema, sitemap, robots, and performance tuning."]
          ].map(([title, desc]) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{desc}</p>
            </article>
          ))}
        </section>

        <section id="about" className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-200/70">About the system</p>
          <h3 className="mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">Built for premium brand presence and scalable content growth.</h3>
          <p className="mt-4 max-w-3xl text-white/72 leading-8">
            The site architecture is designed around Sanity content types, internal linking, page templates, and SEO-ready metadata so the brand can grow without rework.
          </p>
        </section>

        <section id="contact" className="py-20">
          <div className="rounded-[2rem] border border-sky-300/20 bg-gradient-to-br from-sky-300/15 to-white/5 p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-100/70">Contact</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-5xl">Ready to build the full SEO Mothra platform.</h3>
            <p className="mt-4 max-w-2xl text-white/72">Next steps: add Sanity schemas, content queries, and production deployment wiring.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
