export type LeadStatus = "new" | "qualified" | "booked" | "nurture";

export type LeadRecord = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  company: string;
  source: string;
  service: string;
  budget: string;
  status: LeadStatus;
  score: number;
  notes: string[];
};

type GlobalStore = {
  leads?: LeadRecord[];
};

const globalForCrm = globalThis as typeof globalThis & GlobalStore;

const seed: LeadRecord[] = [
  {
    id: "lead_seed_01",
    createdAt: new Date().toISOString(),
    name: "Maya Torres",
    email: "maya@harborhillstudio.com",
    company: "Harbor Hill Studio",
    source: "Website form",
    service: "SEO + content",
    budget: "$4k-$8k/mo",
    status: "qualified",
    score: 86,
    notes: ["Local intent", "Strong fit", "Requested a strategy call"],
  },
  {
    id: "lead_seed_02",
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    name: "Andre Cruz",
    email: "andre@coastlinecommerce.com",
    company: "Coastline Commerce",
    source: "Paid campaign",
    service: "CRO + AEO",
    budget: "$8k-$12k/mo",
    status: "booked",
    score: 92,
    notes: ["Booked demo", "High urgency", "Requested sitemap cleanup"],
  },
];

export const crmStore = globalForCrm.leads ??= seed;

export function addLead(lead: Omit<LeadRecord, "id" | "createdAt">) {
  const record: LeadRecord = {
    ...lead,
    id: `lead_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
  };
  crmStore.unshift(record);
  return record;
}
