"use client";

import { useMemo, useState } from "react";

type Lead = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  company: string;
  source: string;
  service: string;
  budget: string;
  status: string;
  score: number;
  notes: string[];
};

type ApiResponse = {
  ok: boolean;
  count?: number;
  leads?: Lead[];
  lead?: Lead;
  summary?: { status: string; score: number };
};

const sample = {
  name: "Jordan Pike",
  email: "jordan@northstarcabinets.com",
  company: "Northstar Cabinets",
  source: "hero CTA",
  service: "SEO + CRO + AEO",
  budget: "$6k-$10k/mo",
  message: "Need a strategy call this week and want more qualified leads.",
};

export default function CrmPage() {
  const [form, setForm] = useState(sample);
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const webhookUrl = useMemo(() => "/api/crm/leads", []);

  async function submitLead() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = (await res.json()) as ApiResponse;
      if (!res.ok) throw new Error("Lead ingest failed");
      setResult(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen px-6 py-8 text-[#211d19] md:px-10 lg:px-16" data-page-root>
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-[2.5rem] border border-[rgba(35,31,27,0.12)] bg-white/70 p-8 md:p-12 shadow-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-[#47624f]">CRM backend demo</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Lead intake, score, and route.</h1>
          <p className="mt-4 max-w-3xl text-[#665d54] leading-8">
            This is a live local CRM backend for SEO Mothra. It accepts webhook-style lead payloads, scores intent, tags the record, and returns a clear handoff summary.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-4">Endpoint: <span className="text-[#47624f]">POST {webhookUrl}</span></div>
            <div className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-4">Paths: intake → qualify → route → follow-up</div>
            <div className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-4">Status: <span className="text-[#47624f]">ready for demo</span></div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[rgba(35,31,27,0.12)] bg-white/70 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Test webhook payload</h2>
            <div className="mt-6 grid gap-4">
              {Object.entries(form).map(([key, value]) => (
                <label key={key} className="grid gap-2 text-sm text-[#665d54]">
                  <span className="uppercase tracking-[0.22em] text-[#47624f]">{key}</span>
                  <input
                    className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/70 px-4 py-3 text-[#211d19] outline-none focus:border-[#47624f]/50"
                    value={value}
                    onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                  />
                </label>
              ))}
            </div>
            <button
              onClick={submitLead}
              disabled={loading}
              className="mt-6 rounded-full bg-[#47624f] px-5 py-3 font-medium text-white transition hover:bg-[#3d5644] disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send test lead"}
            </button>
            {error ? <p className="mt-4 text-sm text-[#9c6658]">{error}</p> : null}
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[rgba(35,31,27,0.12)] bg-white/70 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold">Latest result</h2>
              <pre className="mt-4 overflow-auto rounded-2xl border border-[rgba(35,31,27,0.12)] bg-[#f7f4ee] p-4 text-xs leading-6 text-[#211d19]">
{JSON.stringify(result, null, 2)}
              </pre>
            </div>

            <div className="rounded-[2rem] border border-[rgba(35,31,27,0.12)] bg-white/70 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold">Workflow contract</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#665d54]">
                <li>1. Intake webhook payload from site form or ad click.</li>
                <li>2. Score lead by intent, service, and budget fit.</li>
                <li>3. Route booked/qualified/nurture paths explicitly.</li>
                <li>4. Persist raw event in memory for demo visibility.</li>
                <li>5. Return a clear handoff summary for CRM or sales use.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[rgba(35,31,27,0.12)] bg-white/70 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Stored leads</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {(result?.leads ?? []).slice(0, 6).map((lead) => (
              <article key={lead.id} className="rounded-2xl border border-[rgba(35,31,27,0.12)] bg-white/60 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium text-[#211d19]">{lead.name}</h3>
                  <span className="rounded-full border border-[rgba(35,31,27,0.12)] px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-[#47624f]">{lead.status}</span>
                </div>
                <p className="mt-2 text-sm text-[#665d54]">{lead.company}</p>
                <p className="mt-1 text-sm text-[#665d54]">{lead.email}</p>
                <p className="mt-3 text-sm text-[#665d54]">Score {lead.score} · {lead.service}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
