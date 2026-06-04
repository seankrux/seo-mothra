import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Goal",
  description: "Bulletproof agentic AI infrastructure checklist, modernized for production-grade design and execution."
};

const principles = [
  ["Self-validation", "Each step checks its own output before moving on."],
  ["Self-healing", "Recover common failures automatically, then continue."],
  ["Context-aware", "Detect stack, adapt behavior, reduce manual setup."],
  ["State machine", "Explicit phases, checkpoints, and transitions."],
  ["Declarative", "Declare desired outcome, keep implementation flexible."],
  ["Observable", "Structured logs, traces, and reports for agents."],
  ["Reversible", "Every destructive action needs rollback."],
  ["Extensible", "Plugins and adapters for future tools. "]
];

const missingItems = [
  "Env validation with clear fail-fast messages",
  "Dependency lock + reproducible install path",
  "CI gate for build, lint, typecheck, audit",
  "Secret scan before deploy",
  "Deployment verification after push",
  "Rollback plan and checkpoint storage",
  "Human-readable summary plus machine-readable log",
  "Minimal defaults for unknown framework detection"
];

const deliverables = [
  "Detect repo type",
  "Generate config",
  "Install deps",
  "Run build",
  "Write logs",
  "Rollback on fail",
  "Summarize state"
];

export default function GoalPage() {
  return (
    <main className="min-h-screen px-6 py-6 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SiteHeader />

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-12 md:px-12 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Goal brief</p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Bulletproof agentic infra.
                <span className="block text-sky-200">Modern, flexible, self-healing.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                This page turns your checklist into a production-grade spec: modern UI, clear system rules,
                missing pieces called out, and a clean path from setup to deploy.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sky-100">Agent-ready</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80">State machine</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80">Rollback-safe</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80">Observable</span>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-black/25 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-white/55">Launch stack</p>
              <ul className="mt-4 space-y-3 text-sm text-white/78">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <span>{item}</span>
                    <span className="text-sky-200">✓</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Core principles</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Make every step verify itself.</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-7 text-white/60 lg:block">
              These are the non-negotiables. If any one breaks, the system should fail loud, recover if possible, then report exactly what happened.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {principles.map(([title, desc]) => (
              <article key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-6 lg:grid-cols-[1fr_1.1fr]">
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Missing pieces</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">What a truly complete setup still needs.</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-white/72">
              {missingItems.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-black/15 p-4">
                  <span className="text-sky-200">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-sky-300/20 bg-gradient-to-br from-sky-300/15 via-white/[0.05] to-black/20 p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-100/70">Design upgrade</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Modern look, less noise, more signal.</h2>
            <p className="mt-4 max-w-2xl text-white/72 leading-8">
              Use one hero idea, strong spacing, glass-free surfaces, sharp typography, and a visible execution flow.
              No fake dashboards. No fluff. Just the system, the proof, and the next action.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "High contrast",
                "Large type",
                "Dense but readable",
                "Clear checkpoints"
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80">{item}</div>
              ))}
            </div>
          </article>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
