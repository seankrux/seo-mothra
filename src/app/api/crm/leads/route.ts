import { NextResponse } from "next/server";
import { addLead, crmStore, type LeadStatus } from "@/lib/crm-store";

function qualifyLead(payload: Record<string, unknown>) {
  const service = String(payload.service ?? "SEO");
  const budget = String(payload.budget ?? "$3k-$5k/mo");
  const source = String(payload.source ?? "webhook");

  let score = 50;
  if (/book|call|demo|urgent/i.test(String(payload.message ?? ""))) score += 22;
  if (/seo|cro|content|aeo|authority/i.test(service)) score += 12;
  if (/paid|referral|website|organic/i.test(source)) score += 8;
  if (/\$[5-9]k|\$1\d+k/i.test(budget)) score += 8;

  let status: LeadStatus = "new";
  if (score >= 85) status = "booked";
  else if (score >= 70) status = "qualified";
  else if (score >= 55) status = "nurture";
  const notes = [
    `Source: ${source}`,
    `Service: ${service}`,
    `Budget: ${budget}`,
    status === "booked" ? "High intent path triggered" : status === "qualified" ? "Route to sales follow-up" : "Place into nurture sequence",
  ];

  return { score, status, notes };
}

export async function GET() {
  return NextResponse.json({ ok: true, leads: crmStore, count: crmStore.length });
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  const name = String(payload.name ?? "Anonymous Lead");
  const email = String(payload.email ?? "unknown@example.com");
  const company = String(payload.company ?? "Unknown Company");

  const qualified = qualifyLead(payload);
  const lead = addLead({
    name,
    email,
    company,
    source: String(payload.source ?? "webhook"),
    service: String(payload.service ?? "SEO"),
    budget: String(payload.budget ?? ""),
    status: qualified.status,
    score: qualified.score,
    notes: qualified.notes,
  });

  return NextResponse.json({ ok: true, lead, summary: { status: qualified.status, score: qualified.score } }, { status: 201 });
}
