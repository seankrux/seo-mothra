export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 -mx-6 border-b border-[rgba(35,31,27,0.12)] bg-[rgba(247,244,238,0.82)] px-6 py-4 backdrop-blur-xl md:-mx-10 md:px-10 lg:-mx-16 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="/" className="group flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl border border-[rgba(35,31,27,0.12)] bg-[rgba(71,98,79,0.08)]">
            <span className="text-lg">◌</span>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.36em] text-[#47624f]">
              SEO Mothra
            </p>
            <p className="text-xs text-[#665d54]">Premium SEO & growth</p>
          </div>
        </a>
        <nav aria-label="Primary" className="flex flex-wrap gap-2 text-sm text-[#211d19]">
          <a
            className="rounded-full border border-[rgba(35,31,27,0.12)] bg-white/45 px-4 py-2 transition hover:border-[rgba(35,31,27,0.2)] hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#47624f]/30"
            href="/"
          >
            Home
          </a>
          <a
            className="rounded-full border border-[rgba(35,31,27,0.12)] bg-white/45 px-4 py-2 transition hover:border-[rgba(35,31,27,0.2)] hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#47624f]/30"
            href="/services"
          >
            Services
          </a>
          <a
            className="rounded-full border border-[rgba(35,31,27,0.12)] bg-white/45 px-4 py-2 transition hover:border-[rgba(35,31,27,0.2)] hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#47624f]/30"
            href="/locations"
          >
            Locations
          </a>
          <a
            className="rounded-full border border-[rgba(35,31,27,0.12)] bg-white/45 px-4 py-2 transition hover:border-[rgba(35,31,27,0.2)] hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#47624f]/30"
            href="/blog"
          >
            Blog
          </a>
          <a
            className="rounded-full border border-[rgba(35,31,27,0.12)] bg-white/45 px-4 py-2 transition hover:border-[rgba(35,31,27,0.2)] hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#47624f]/30"
            href="/goal"
          >
            About
          </a>
          <a
            className="rounded-full border-2 border-[#47624f] bg-[#47624f] px-4 py-2 font-semibold text-white transition hover:bg-[#3d5644] focus:outline-none focus:ring-2 focus:ring-[#47624f]/30"
            href="/contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
