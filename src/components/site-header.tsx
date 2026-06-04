export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 -mx-6 border-b border-[rgba(255,248,238,0.1)] bg-[rgba(18,17,14,0.72)] px-6 py-4 backdrop-blur-xl md:-mx-10 md:px-10 lg:-mx-16 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="/" className="group flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[rgba(255,248,238,0.14)] bg-[rgba(255,248,238,0.06)] shadow-[0_0_0_1px_rgba(0,0,0,0.12),0_20px_40px_rgba(0,0,0,0.25)]">
            <span className="text-lg text-[#d8e2c7]">✦</span>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.42em] text-[#d8e2c7]/75">SEO Mothra</p>
            <p className="text-sm text-white/66">Premium SEO, CRO, AEO, and Sanity CMS</p>
          </div>
        </a>
        <nav aria-label="Primary" className="flex flex-wrap gap-2 text-sm text-white/82">
          <a className="rounded-full border border-[rgba(255,248,238,0.1)] bg-white/[0.04] px-4 py-2 transition hover:border-[rgba(255,248,238,0.16)] hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-[#d8e2c7]/60" href="/">Home</a>
          <a className="rounded-full border border-[rgba(255,248,238,0.1)] bg-white/[0.04] px-4 py-2 transition hover:border-[rgba(255,248,238,0.16)] hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-[#d8e2c7]/60" href="/services">Services</a>
          <a className="rounded-full border border-[rgba(255,248,238,0.1)] bg-white/[0.04] px-4 py-2 transition hover:border-[rgba(255,248,238,0.16)] hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-[#d8e2c7]/60" href="/locations">Locations</a>
          <a className="rounded-full border border-[rgba(255,248,238,0.1)] bg-white/[0.04] px-4 py-2 transition hover:border-[rgba(255,248,238,0.16)] hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-[#d8e2c7]/60" href="/blog">Blog</a>
          <a className="rounded-full border border-[rgba(255,248,238,0.1)] bg-white/[0.04] px-4 py-2 transition hover:border-[rgba(255,248,238,0.16)] hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-[#d8e2c7]/60" href="/goal">Goal</a>
          <a className="rounded-full border border-[#d8e2c7]/25 bg-[#d8e2c7] px-4 py-2 font-medium text-[#171512] transition hover:bg-[#e6ebd9] focus:outline-none focus:ring-2 focus:ring-[#d8e2c7]/60" href="/contact">Start project</a>
        </nav>
      </div>
    </header>
  );
}
