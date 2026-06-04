export function SiteHeader() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 py-4">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">SEO Mothra</p>
        <h1 className="text-lg font-semibold">Premium SEO Website System</h1>
      </div>
      <nav aria-label="Primary" className="flex gap-3 text-sm text-white/80">
        <a className="rounded-full border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10" href="/">Home</a>
        <a className="rounded-full border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10" href="/services">Services</a>
        <a className="rounded-full border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10" href="/blog">Blog</a>
        <a className="rounded-full border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10" href="/contact">Contact</a>
      </nav>
    </header>
  );
}
