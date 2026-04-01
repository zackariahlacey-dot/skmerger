"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("server error");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#0c2340] mb-2">
          Message Sent!
        </h3>
        <p className="text-slate-600">
          Thank you for reaching out. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e90ff] focus:border-transparent transition"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e90ff] focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(555) 555-5555"
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e90ff] focus:border-transparent transition"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us which listing you&#39;re interested in, or ask us a question..."
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e90ff] focus:border-transparent transition resize-none"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#1e90ff] hover:bg-[#1a7de0] disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
