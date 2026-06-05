import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <main className="min-h-screen px-6 py-8 text-white md:px-10 lg:px-16 flex flex-col">
      <div className="mx-auto max-w-7xl flex-1 flex flex-col">
        <SiteHeader />

        <section className="flex-1 flex items-center justify-center py-20">
          <div className="text-center max-w-2xl">
            <div className="text-9xl font-bold text-[#d8e2c7] mb-4">404</div>
            <h1 className="text-4xl font-semibold text-[#fff8ef] mb-4">
              Page not found
            </h1>
            <p className="text-lg text-white/72 mb-8">
              The page you're looking for doesn't exist. Let's get you back on
              track.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/"
                className="rounded-full border border-[#d8e2c7] bg-[#d8e2c7] px-6 py-3 font-medium text-[#11110f] transition hover:opacity-90"
              >
                Back to Home
              </a>
              <a
                href="/contact"
                className="rounded-full border border-[rgba(255,248,238,0.2)] bg-white/[0.05] px-6 py-3 transition hover:bg-white/[0.08]"
              >
                Contact Us
              </a>
            </div>

            {/* Helpful Links */}
            <div className="mt-16 pt-8 border-t border-[rgba(255,248,238,0.1)]">
              <p className="text-sm text-white/60 mb-6">
                Perhaps you're looking for:
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { href: "/services", label: "Services" },
                  { href: "/blog", label: "Blog" },
                  { href: "/locations", label: "Locations" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-lg border border-[rgba(255,248,238,0.08)] bg-white/[0.02] px-4 py-3 text-sm transition hover:border-[rgba(255,248,238,0.16)] hover:bg-white/[0.04]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
