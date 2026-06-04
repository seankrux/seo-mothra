export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 -mx-6 border-b border-white/10 bg-[#07111f]/80 px-6 py-4 backdrop-blur md:-mx-10 md:px-10 lg:-mx-16 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.42em] text-sky-200/70">SEO Mothra</p>
          <p className="text-sm text-white/68">Premium SEO, CRO, AEO, and Sanity CMS</p>
        </div>
        <nav aria-label="Primary" className="flex flex-wrap gap-2 text-sm text-white/80">
          <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-300/60" href="/">Home</a>
          <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-300/60" href="/services">Services</a>
          <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-300/60" href="/locations">Locations</a>
          <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-300/60" href="/blog">Blog</a>
          <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-300/60" href="/goal">Goal</a>
          <a className="rounded-full border border-white/10 bg-sky-300 px-4 py-2 font-medium text-slate-950 transition hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-300/60" href="/contact">Start project</a>
        </nav>
      </div>
    </header>
  );
}
