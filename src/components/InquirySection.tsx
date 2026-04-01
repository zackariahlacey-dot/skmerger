"use client";

import { useState } from "react";

const STATES = [
  "Florida", "Texas", "Arizona", "Georgia",
  "Louisiana", "Alabama", "North Carolina", "Nevada",
];

type Tab = "buyer" | "seller" | "newmarket";

/* ─────────────── shared field styles ─────────────────────── */
const inputStyle: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "white",
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium mb-1.5 text-white">
      {children}
    </label>
  );
}

function TextInput({ id, type = "text", placeholder, value, onChange, required }: {
  id: string; type?: string; placeholder: string;
  value: string; onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <input
      id={id} type={type} required={required}
      placeholder={placeholder} value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none transition placeholder:text-slate-500"
      style={{ ...inputStyle, outline: "none" }}
      onFocus={(e) => (e.currentTarget.style.border = "1px solid #1e90ff")}
      onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.2)")}
    />
  );
}

function TextArea({ id, placeholder, value, onChange, rows = 3, required }: {
  id: string; placeholder: string; value: string;
  onChange: (v: string) => void; rows?: number; required?: boolean;
}) {
  return (
    <textarea
      id={id} required={required} rows={rows}
      placeholder={placeholder} value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none transition resize-none placeholder:text-slate-500"
      style={inputStyle}
      onFocus={(e) => (e.currentTarget.style.border = "1px solid #1e90ff")}
      onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.2)")}
    />
  );
}

function SuccessState({ message }: { message: string }) {
  return (
    <div className="text-center py-10">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
        style={{ backgroundColor: "rgba(30,144,255,0.25)" }}>
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#1e90ff">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Submitted!</h3>
      <p className="text-sm" style={{ color: "#94a3b8" }}>{message}</p>
    </div>
  );
}

/* ─────────────── Buyer Form ───────────────────────────────── */
function BuyerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [areaNote, setAreaNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function toggle(state: string) {
    if (state === "Any State") {
      setSelected((p) => p.includes("Any State") ? [] : ["Any State", ...STATES]);
    } else {
      setSelected((p) => {
        const without = p.filter((s) => s !== "Any State");
        if (without.includes(state)) {
          return without.filter((s) => s !== state);
        }
        const next = [...without, state];
        return next.length === STATES.length ? ["Any State", ...STATES] : next;
      });
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!selected.length) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "buyer", name, email, states: selected, areaNote }),
      });
      if (!res.ok) throw new Error("server error");
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again or contact Sheldon directly.");
    } finally {
      setLoading(false);
    }
  }

  if (done) return <SuccessState message="Sheldon will reach out the moment a matching listing hits the market." />;

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel>Your Name <span style={{ color: "#f87171" }}>*</span></FieldLabel>
          <TextInput id="b-name" placeholder="John Smith" value={name} onChange={setName} required />
        </div>
        <div>
          <FieldLabel>Email Address <span style={{ color: "#f87171" }}>*</span></FieldLabel>
          <TextInput id="b-email" type="email" placeholder="john@example.com" value={email} onChange={setEmail} required />
        </div>
      </div>

      {/* State checkboxes */}
      <div>
        <p className="text-sm font-medium mb-3 text-white">
          Notify me for listings in: <span style={{ color: "#f87171" }}>*</span>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
          <button type="button" onClick={() => toggle("Any State")}
            className="col-span-2 sm:col-span-4 flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all"
            style={{
              border: `1px solid ${selected.includes("Any State") ? "#1e90ff" : "rgba(255,255,255,0.2)"}`,
              backgroundColor: selected.includes("Any State") ? "rgba(30,144,255,0.2)" : "rgba(255,255,255,0.06)",
              color: selected.includes("Any State") ? "#60b4ff" : "#e2e8f0",
            }}>
            <Checkbox checked={selected.includes("Any State")} />
            Any State — Notify me for all states
          </button>
          {STATES.map((s) => (
            <button key={s} type="button" onClick={() => toggle(s)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all"
              style={{
                border: `1px solid ${selected.includes(s) ? "#1e90ff" : "rgba(255,255,255,0.2)"}`,
                backgroundColor: selected.includes(s) ? "rgba(30,144,255,0.2)" : "rgba(255,255,255,0.06)",
                color: selected.includes(s) ? "#60b4ff" : "#e2e8f0",
              }}>
              <Checkbox checked={selected.includes(s)} size={16} />
              {s}
            </button>
          ))}
        </div>
        {!selected.length && <p className="text-xs" style={{ color: "#f87171" }}>Select at least one state.</p>}
      </div>

      {/* Specific area note */}
      <div>
        <FieldLabel>Specific Area or Notes <span style={{ color: "#94a3b8", fontWeight: 400 }}>(optional)</span></FieldLabel>
        <TextArea
          id="b-area"
          placeholder={`e.g. "Gulf Coast FL", "Near Daytona but north of Titusville", "SE Phoenix metro"…`}
          value={areaNote}
          onChange={setAreaNote}
          rows={2}
        />
        <p className="text-xs mt-1.5" style={{ color: "#64748b" }}>
          Be as specific as you like — Sheldon reads every submission personally.
        </p>
      </div>

      {error && <p className="text-sm rounded-lg px-4 py-2.5" style={{ color: "#fca5a5", backgroundColor: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>{error}</p>}
      <SubmitBtn loading={loading} disabled={!selected.length} label="Notify Me of New Listings" />
    </form>
  );
}

/* ─────────────── Seller Form ──────────────────────────────── */
function SellerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("I'd like to discuss listing my store.");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "seller", name, email, phone, location, message }),
      });
      if (!res.ok) throw new Error("server error");
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again or contact Sheldon directly.");
    } finally {
      setLoading(false);
    }
  }

  if (done) return <SuccessState message="Sheldon will be in touch within 24 hours to discuss your store and walk you through the process." />;

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel>Your Name <span style={{ color: "#f87171" }}>*</span></FieldLabel>
          <TextInput id="s-name" placeholder="John Smith" value={name} onChange={setName} required />
        </div>
        <div>
          <FieldLabel>Email Address <span style={{ color: "#f87171" }}>*</span></FieldLabel>
          <TextInput id="s-email" type="email" placeholder="john@example.com" value={email} onChange={setEmail} required />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel>Phone Number</FieldLabel>
          <TextInput id="s-phone" type="tel" placeholder="(555) 555-5555" value={phone} onChange={setPhone} />
        </div>
        <div>
          <FieldLabel>Store Location / State</FieldLabel>
          <TextInput id="s-loc" placeholder="e.g. Tampa, FL" value={location} onChange={setLocation} />
        </div>
      </div>
      <div>
        <FieldLabel>Message</FieldLabel>
        <TextArea
          id="s-msg"
          placeholder="Tell Sheldon a bit about your store…"
          value={message}
          onChange={setMessage}
          rows={3}
        />
      </div>
      {error && <p className="text-sm rounded-lg px-4 py-2.5" style={{ color: "#fca5a5", backgroundColor: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>{error}</p>}
      <SubmitBtn loading={loading} label="Request a Free Consultation" />
    </form>
  );
}

/* ─────────────── New Market Form ──────────────────────────── */
function NewMarketForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [market, setMarket] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newmarket", name, email, market, details }),
      });
      if (!res.ok) throw new Error("server error");
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again or contact Sheldon directly.");
    } finally {
      setLoading(false);
    }
  }

  if (done) return <SuccessState message="You've been added to the new market candidate list. Sheldon will be in touch as franchise opportunities develop in your area." />;

  return (
    <form onSubmit={submit} className="space-y-5">
      {/* Info banner */}
      <div className="rounded-lg px-4 py-3 text-sm leading-relaxed" style={{ backgroundColor: "rgba(30,144,255,0.12)", border: "1px solid rgba(30,144,255,0.3)", color: "#93c5fd" }}>
        Sheldon is working to contract with Pinch-A-Penny corporate to sell new franchise locations.
        Submitting your interest builds the candidate list that helps make that happen — and puts you first in line when new markets open.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel>Your Name <span style={{ color: "#f87171" }}>*</span></FieldLabel>
          <TextInput id="nm-name" placeholder="John Smith" value={name} onChange={setName} required />
        </div>
        <div>
          <FieldLabel>Email Address <span style={{ color: "#f87171" }}>*</span></FieldLabel>
          <TextInput id="nm-email" type="email" placeholder="john@example.com" value={email} onChange={setEmail} required />
        </div>
      </div>

      <div>
        <FieldLabel>Desired Market / Location <span style={{ color: "#f87171" }}>*</span></FieldLabel>
        <TextInput id="nm-market" placeholder="e.g. Raleigh, NC · Las Vegas, NV · Boise, ID" value={market} onChange={setMarket} required />
      </div>

      <div>
        <FieldLabel>Why This Market? <span style={{ color: "#94a3b8", fontWeight: 400 }}>(optional)</span></FieldLabel>
        <TextArea
          id="nm-details"
          placeholder="Tell Sheldon why you're interested in this location, your background, or anything else relevant…"
          value={details}
          onChange={setDetails}
          rows={3}
        />
      </div>

      {error && <p className="text-sm rounded-lg px-4 py-2.5" style={{ color: "#fca5a5", backgroundColor: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>{error}</p>}
      <SubmitBtn loading={loading} label="Submit My New Market Interest" />
    </form>
  );
}

/* ─────────────── Small reusable pieces ────────────────────── */
function Checkbox({ checked, size = 20 }: { checked: boolean; size?: number }) {
  return (
    <span
      className="rounded flex items-center justify-center shrink-0 transition-colors"
      style={{
        width: size, height: size,
        border: `2px solid ${checked ? "#1e90ff" : "rgba(255,255,255,0.35)"}`,
        backgroundColor: checked ? "#1e90ff" : "transparent",
      }}
    >
      {checked && (
        <svg viewBox="0 0 12 12" style={{ width: size * 0.6, height: size * 0.6 }}>
          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )}
    </span>
  );
}

function SubmitBtn({ loading, disabled, label }: { loading: boolean; disabled?: boolean; label: string }) {
  return (
    <button
      type="submit"
      disabled={loading || disabled}
      className="w-full font-semibold py-3 rounded-lg text-sm text-white transition-all btn-glow"
      style={{ backgroundColor: disabled ? "rgba(148,163,184,0.3)" : "#1e90ff" }}
    >
      {loading ? "Submitting…" : label}
    </button>
  );
}

/* ─────────────── Main exported component ──────────────────── */
const TABS: { id: Tab; label: string; icon: React.ReactNode; sub: string }[] = [
  {
    id: "buyer",
    label: "I'm a Buyer",
    sub: "Alert me to new listings",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
        <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: "seller",
    label: "I'm a Seller",
    sub: "Discuss listing my store",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: "newmarket",
    label: "New Location",
    sub: "Open a store in my area",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function InquirySection() {
  const [active, setActive] = useState<Tab>("buyer");

  return (
    <section id="notify" className="py-12 sm:py-16" style={{ backgroundColor: "#0c2340" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: "rgba(30,144,255,0.2)", color: "#7eb8f7" }}
          >
            Connect with Sheldon
          </span>
          <h2 className="text-3xl font-bold text-white mb-3">How Can We Help You?</h2>
          <p style={{ color: "#94a3b8" }}>
            Select what applies to you and Sheldon will follow up personally.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className="flex flex-col items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-3 sm:py-4 rounded-xl text-center transition-all"
              style={{
                border: `1px solid ${active === tab.id ? "#1e90ff" : "rgba(255,255,255,0.12)"}`,
                backgroundColor: active === tab.id ? "rgba(30,144,255,0.18)" : "rgba(255,255,255,0.04)",
                color: active === tab.id ? "#60b4ff" : "#94a3b8",
              }}
            >
              <span style={{ color: active === tab.id ? "#1e90ff" : "#64748b" }}>{tab.icon}</span>
              <span className="font-semibold text-xs sm:text-sm leading-tight">{tab.label}</span>
              <span className="hidden sm:block text-xs leading-tight" style={{ color: active === tab.id ? "#93c5fd" : "#475569" }}>
                {tab.sub}
              </span>
            </button>
          ))}
        </div>

        {/* Form panel */}
        <div
          className="rounded-2xl p-5 sm:p-8"
          style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          {active === "buyer"     && <BuyerForm />}
          {active === "seller"    && <SellerForm />}
          {active === "newmarket" && <NewMarketForm />}
        </div>
      </div>
    </section>
  );
}
