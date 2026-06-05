export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 -mx-6 border-b border-[#7a9b6d]/20 bg-white/80 px-6 py-4 backdrop-blur-xl md:-mx-10 md:px-10 lg:-mx-16 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="/" className="group flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#7a9b6d]/30 bg-[#7a9b6d]/10">
            <span className="text-lg">🌿</span>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.42em] text-[#7a9b6d]">
              SEO Mothra
            </p>
            <p className="text-xs text-[#6b6560]">Premium SEO & Growth</p>
          </div>
        </a>
        <nav
          aria-label="Primary"
          className="flex flex-wrap gap-2 text-sm text-[#2a2622]"
        >
          <a
            className="rounded-full border border-[#7a9b6d]/20 bg-[#7a9b6d]/5 px-4 py-2 transition hover:border-[#7a9b6d]/40 hover:bg-[#7a9b6d]/10 focus:outline-none focus:ring-2 focus:ring-[#7a9b6d]/40"
            href="/"
          >
            Home
          </a>
          <a
            className="rounded-full border border-[#7a9b6d]/20 bg-[#7a9b6d]/5 px-4 py-2 transition hover:border-[#7a9b6d]/40 hover:bg-[#7a9b6d]/10 focus:outline-none focus:ring-2 focus:ring-[#7a9b6d]/40"
            href="/services"
          >
            Services
          </a>
          <a
            className="rounded-full border border-[#7a9b6d]/20 bg-[#7a9b6d]/5 px-4 py-2 transition hover:border-[#7a9b6d]/40 hover:bg-[#7a9b6d]/10 focus:outline-none focus:ring-2 focus:ring-[#7a9b6d]/40"
            href="/locations"
          >
            Locations
          </a>
          <a
            className="rounded-full border border-[#7a9b6d]/20 bg-[#7a9b6d]/5 px-4 py-2 transition hover:border-[#7a9b6d]/40 hover:bg-[#7a9b6d]/10 focus:outline-none focus:ring-2 focus:ring-[#7a9b6d]/40"
            href="/blog"
          >
            Blog
          </a>
          <a
            className="rounded-full border border-[#7a9b6d]/20 bg-[#7a9b6d]/5 px-4 py-2 transition hover:border-[#7a9b6d]/40 hover:bg-[#7a9b6d]/10 focus:outline-none focus:ring-2 focus:ring-[#7a9b6d]/40"
            href="/goal"
          >
            About
          </a>
          <a
            className="rounded-full border-2 border-[#7a9b6d] bg-[#7a9b6d] px-4 py-2 font-semibold text-white transition hover:bg-[#6b8b5d] focus:outline-none focus:ring-2 focus:ring-[#7a9b6d]/40"
            href="/contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
