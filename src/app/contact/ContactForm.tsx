"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      source: "contact-form",
    };
    try {
      await fetch("/api/crm/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#46583c]/20 p-12 text-center">
        <div className="w-16 h-16 bg-[#46583c]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-[#46583c] text-3xl">check_circle</span>
        </div>
        <h3 className="text-2xl font-bold text-[#1a1c1c] mb-2">Message Sent!</h3>
        <p className="text-[#444840]">We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[rgba(26,28,28,0.08)] p-8 space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-[#1a1c1c] mb-2">Your Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="John Doe"
          className="w-full rounded-xl border border-[rgba(26,28,28,0.12)] bg-white/70 px-4 py-3 text-[#1a1c1c] placeholder-[#444840]/40 focus:outline-none focus:border-[#46583c]/40 focus:ring-2 focus:ring-[#46583c]/15"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[#1a1c1c] mb-2">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@company.com"
          className="w-full rounded-xl border border-[rgba(26,28,28,0.12)] bg-white/70 px-4 py-3 text-[#1a1c1c] placeholder-[#444840]/40 focus:outline-none focus:border-[#46583c]/40 focus:ring-2 focus:ring-[#46583c]/15"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-[#1a1c1c] mb-2">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Your Company"
          className="w-full rounded-xl border border-[rgba(26,28,28,0.12)] bg-white/70 px-4 py-3 text-[#1a1c1c] placeholder-[#444840]/40 focus:outline-none focus:border-[#46583c]/40 focus:ring-2 focus:ring-[#46583c]/15"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-[#1a1c1c] mb-2">Service Interest</label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-[rgba(26,28,28,0.12)] bg-white/70 px-4 py-3 text-[#1a1c1c] focus:outline-none focus:border-[#46583c]/40 focus:ring-2 focus:ring-[#46583c]/15"
        >
          <option>Select a service</option>
          <option>SEO Audit &amp; Strategy</option>
          <option>CRO &amp; Lead Generation</option>
          <option>AEO Optimization</option>
          <option>Technical SEO</option>
          <option>Premium UI Design</option>
          <option>Content Mastery</option>
          <option>Full-Stack Implementation</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#1a1c1c] mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full rounded-xl border border-[rgba(26,28,28,0.12)] bg-white/70 px-4 py-3 text-[#1a1c1c] placeholder-[#444840]/40 focus:outline-none focus:border-[#46583c]/40 focus:ring-2 focus:ring-[#46583c]/15"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#46583c] px-6 py-4 font-bold text-white hover:bg-[#3a4c31] hover:scale-[1.02] transition-all disabled:opacity-60"
      >
        {loading ? "Sending…" : "Schedule Your Free Call"}
      </button>
      <p className="text-xs text-[#6b6e68] text-center">
        We&apos;ll reply within 24 hours to confirm your call time.
      </p>
    </form>
  );
}
