"use client";

import { useState } from "react";

const AREAS = [
  "Florida",
  "Texas",
  "Arizona",
  "Georgia",
  "Louisiana",
  "Alabama",
];

export default function BuyerSignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function toggleArea(area: string) {
    if (area === "Any Area") {
      setSelected((prev) =>
        prev.includes("Any Area") ? [] : ["Any Area", ...AREAS]
      );
    } else {
      setSelected((prev) => {
        const without = prev.filter((a) => a !== "Any Area");
        if (without.includes(area)) {
          return without.filter((a) => a !== area);
        } else {
          const next = [...without, area];
          return next.length === AREAS.length ? ["Any Area", ...AREAS] : next;
        }
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (selected.length === 0) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: "rgba(30,144,255,0.25)" }}
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#1e90ff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold mb-2 text-white">You&apos;re on the list!</h3>
        <p className="text-sm" style={{ color: "#94a3b8" }}>
          Sheldon will email you as soon as a listing opens in your selected area.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="buyer-name" className="block text-sm font-medium mb-1.5 text-white">
            Your Name <span style={{ color: "#f87171" }}>*</span>
          </label>
          <input
            id="buyer-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
            className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e90ff] transition"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
            }}
          />
        </div>
        <div>
          <label htmlFor="buyer-email" className="block text-sm font-medium mb-1.5 text-white">
            Email Address <span style={{ color: "#f87171" }}>*</span>
          </label>
          <input
            id="buyer-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e90ff] transition"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
            }}
          />
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-3 text-white">
          Notify me when a listing opens in: <span style={{ color: "#f87171" }}>*</span>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-2">
          {/* Any Area option */}
          <button
            type="button"
            onClick={() => toggleArea("Any Area")}
            className="col-span-2 sm:col-span-3 flex items-center gap-2.5 px-4 py-2.5 rounded-lg border text-sm font-semibold transition-all"
            style={{
              borderColor: selected.includes("Any Area") ? "#1e90ff" : "rgba(255,255,255,0.2)",
              backgroundColor: selected.includes("Any Area") ? "rgba(30,144,255,0.2)" : "rgba(255,255,255,0.06)",
              color: selected.includes("Any Area") ? "#60b4ff" : "#e2e8f0",
            }}
          >
            <span
              className="w-5 h-5 rounded flex items-center justify-center shrink-0 transition-colors"
              style={{
                border: `2px solid ${selected.includes("Any Area") ? "#1e90ff" : "rgba(255,255,255,0.35)"}`,
                backgroundColor: selected.includes("Any Area") ? "#1e90ff" : "transparent",
              }}
            >
              {selected.includes("Any Area") && (
                <svg viewBox="0 0 12 12" className="w-3 h-3">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              )}
            </span>
            Any Area — Notify me for all states
          </button>

          {/* Individual states */}
          {AREAS.map((area) => (
            <button
              key={area}
              type="button"
              onClick={() => toggleArea(area)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm transition-all"
              style={{
                borderColor: selected.includes(area) ? "#1e90ff" : "rgba(255,255,255,0.2)",
                backgroundColor: selected.includes(area) ? "rgba(30,144,255,0.2)" : "rgba(255,255,255,0.06)",
                color: selected.includes(area) ? "#60b4ff" : "#e2e8f0",
              }}
            >
              <span
                className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors"
                style={{
                  border: `2px solid ${selected.includes(area) ? "#1e90ff" : "rgba(255,255,255,0.35)"}`,
                  backgroundColor: selected.includes(area) ? "#1e90ff" : "transparent",
                }}
              >
                {selected.includes(area) && (
                  <svg viewBox="0 0 12 12" className="w-3 h-3">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                )}
              </span>
              {area}
            </button>
          ))}
        </div>
        {selected.length === 0 && (
          <p className="text-xs mt-1" style={{ color: "#f87171" }}>Please select at least one area.</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading || selected.length === 0}
        className="w-full font-semibold py-3 rounded-lg text-sm text-white transition-colors btn-glow"
        style={{ backgroundColor: selected.length === 0 ? "rgba(148,163,184,0.3)" : "#1e90ff" }}
      >
        {loading ? "Signing Up..." : "Notify Me of New Listings"}
      </button>
    </form>
  );
}
