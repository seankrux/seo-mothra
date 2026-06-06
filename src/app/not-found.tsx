import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <main className="min-h-screen px-6 py-8 text-[#211d19] md:px-10 lg:px-16 flex flex-col" data-page-root>
      <div className="mx-auto max-w-7xl flex-1 flex flex-col">
        <SiteHeader />

        <section className="flex-1 flex items-center justify-center py-20">
          <div className="text-center max-w-2xl rounded-3xl border border-[rgba(35,31,27,0.12)] bg-white/70 p-10 shadow-sm">
            <div className="text-9xl font-bold text-[#47624f] mb-4">404</div>
            <h1 className="text-4xl font-semibold text-[#211d19] mb-4">
              Page not found
            </h1>
            <p className="text-lg text-[#665d54] mb-8">
              The page you're looking for doesn't exist. Let's get you back on
              track.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/"
                className="rounded-full border border-[#47624f] bg-[#47624f] px-6 py-3 font-medium text-white transition hover:bg-[#3d5644]"
              >
                Back to Home
              </a>
              <a
                href="/contact"
                className="rounded-full border border-[rgba(35,31,27,0.12)] bg-white/70 px-6 py-3 transition hover:bg-white"
              >
                Contact Us
              </a>
            </div>

            {/* Helpful Links */}
            <div className="mt-16 pt-8 border-t border-[rgba(35,31,27,0.12)]">
              <p className="text-sm text-[#665d54] mb-6">
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
                    className="rounded-lg border border-[rgba(35,31,27,0.12)] bg-white/60 px-4 py-3 text-sm transition hover:border-[rgba(35,31,27,0.2)] hover:bg-white"
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
