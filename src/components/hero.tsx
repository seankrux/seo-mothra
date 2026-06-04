type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function Hero({ eyebrow, title, description }: HeroProps) {
  return (
    <section className="grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-sky-200/70">{eyebrow}</p>
        <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
          {title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{description}</p>
      </div>
      <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
        <p className="text-sm uppercase tracking-[0.25em] text-white/55">AEO + CRO</p>
        <ul className="mt-4 space-y-3 text-white/80">
          <li>Answer-first copy blocks</li>
          <li>Schema-driven service pages</li>
          <li>Clear CTA hierarchy</li>
        </ul>
      </aside>
    </section>
  );
}
