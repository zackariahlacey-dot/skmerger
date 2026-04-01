import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const stats = [
  { label: "Years of Experience", value: "15" },
  { label: "States Served", value: "6" },
  { label: "Stores Sold", value: "50+" },
  { label: "Confidential", value: "100%" },
];

const services = [
  {
    title: "Business Brokerage for Sellers",
    description:
      "Sheldon guides business owners through every step of selling their pool store — from accurate valuation and confidential marketing to negotiating the best possible price.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Buyer Representation",
    description:
      "Looking to acquire a pool store? Sheldon represents buyers with the same tenacity — identifying the right opportunity, running due diligence, and securing favorable terms.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Franchise Broker Services",
    description:
      "With deep roots in the Pinch-A-Penny franchise system, Sheldon navigates the franchise transfer process seamlessly — managing franchisor relationships and compliance so you don't have to.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    title: "Exit Strategy Planning",
    description:
      "Sheldon helps owners develop or update their exit strategy long before they're ready to sell — so when the time comes, everything is in place for a smooth, maximum-value transaction.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── About Hero ───────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1e35 0%, #0c2340 50%, #0f3060 100%)" }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(30,144,255,0.12) 0%, transparent 65%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Text side */}
            <div className="animate-fade-in-up delay-100">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
                style={{ backgroundColor: "rgba(30,144,255,0.18)", color: "#7eb8f7" }}
              >
                Your Pinch A Penny Pool Store Resale Specialist
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                Meet<br />
                <span style={{ color: "#1e90ff" }}>Sheldon Kirk</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
                15 years of Pool Industry small-business accounting &amp; franchise
                resale experience — working relentlessly for buyers and sellers alike.
              </p>

              {/* Credential pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "eXp Commercial",
                  "15 Yrs Experience",
                  "8 States Served",
                  "Available 24/7",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "#cbd5e1", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="btn-glow text-white font-semibold px-6 py-3 rounded-lg text-sm"
                  style={{ backgroundColor: "#1e90ff" }}
                >
                  Schedule a Free Consultation
                </a>
                <a
                  href="tel:7272348296"
                  className="flex items-center gap-2 font-semibold px-6 py-3 rounded-lg text-sm border transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "#e2e8f0" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#1e90ff" className="w-4 h-4">
                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                  </svg>
                  727-234-8296
                </a>
              </div>
            </div>

            {/* Photo side */}
            <div className="animate-fade-in delay-200 flex justify-center md:justify-end">
              <div className="relative">
                {/* Glow ring behind photo */}
                <div
                  className="absolute -inset-3 rounded-2xl"
                  style={{ background: "linear-gradient(135deg, rgba(30,144,255,0.3), rgba(14,165,233,0.1))", filter: "blur(16px)" }}
                />
                {/* Photo */}
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  style={{ width: 320, height: 400, border: "1px solid rgba(30,144,255,0.3)" }}
                >
                  <Image
                    src="/profilepic.png"
                    alt="Sheldon Kirk"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Name overlay at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-5 py-4"
                    style={{ background: "linear-gradient(to top, rgba(10,30,53,0.97) 0%, transparent 100%)" }}
                  >
                    <p className="text-white font-bold text-base">Sheldon Kirk</p>
                    <p className="text-xs" style={{ color: "#7eb8f7" }}>Pool Store Resale Specialist · eXp Commercial</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1a3a5c" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center relative">
                {i !== 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
                )}
                <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-sm" style={{ color: "#94a3b8" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Sheldon ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Logo side */}
            <div className="flex justify-center">
              <div
                className="rounded-2xl p-12 flex items-center justify-center shadow-sm"
                style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", width: "100%", maxWidth: 380 }}
              >
                <Image
                  src="/explogo.png"
                  alt="eXp Commercial"
                  width={280}
                  height={280}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Text side */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#1e90ff" }}>
                About Sheldon
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 leading-tight" style={{ color: "#0c2340" }}>
                Your Relentless Agent for Pool Store Resales
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We specialize in helping small business owners plan their exit and sell their
                businesses for maximum profit. We also represent buyers looking to purchase a
                business with expert guidance.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Sheldon&apos;s 15 years of experience in the Pool Retail &amp; Service franchise
                industry will help you achieve your ideal outcome and avoid pitfalls along the way.
                Serving Florida, Texas, Arizona, Georgia, Louisiana, Alabama, North Carolina &amp;
                Nevada — with more states coming soon.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="btn-glow inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm"
                  style={{ backgroundColor: "#1e90ff" }}
                >
                  Schedule a Free Consultation
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-lg text-sm border transition-colors"
                  style={{ borderColor: "#0c2340", color: "#0c2340" }}
                >
                  View Listings
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#1e90ff" }}>
              What Sheldon Offers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: "#0c2340" }}>
              Full-Service Pool Store Brokerage
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item) => (
              <div
                key={item.title}
                className="card-lift bg-white rounded-xl p-6 border"
                style={{ borderColor: "#e2e8f0", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(30,144,255,0.10)", color: "#1e90ff" }}>
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "#0c2340" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meticulous approach banner ────────────────────────── */}
      <section className="relative overflow-hidden">
        <Image src="/pool.jpg" alt="Pool" fill className="object-cover object-center" quality={80} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(12,35,64,0.87)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our meticulous approach<br />
            <span style={{ color: "#1e90ff" }}>eases your burden.</span>
          </h2>
          <div className="flex items-center justify-center gap-8 my-6 text-sm font-semibold" style={{ color: "#7eb8f7" }}>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#1e90ff" className="w-4 h-4"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
              Smooth Transactions
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#1e90ff" className="w-4 h-4"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
              Confidentiality &amp; Privacy
            </span>
          </div>
          <a
            href="#contact"
            className="btn-glow inline-block text-white font-semibold px-8 py-3.5 rounded-lg text-sm"
            style={{ backgroundColor: "#1e90ff" }}
          >
            Develop Your Exit Strategy Today
          </a>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section id="contact" className="py-20" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#1e90ff" }}>Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5" style={{ color: "#0c2340" }}>Let&apos;s Talk Business</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you&apos;re ready to sell your pool store, looking to acquire one, or just
                want to develop an exit strategy — Sheldon is here 24/7.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(30,144,255,0.10)", color: "#1e90ff" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" /></svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">Phone (24/7)</div>
                    <a href="tel:7272348296" className="font-semibold" style={{ color: "#0c2340" }}>727-234-8296</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(30,144,255,0.10)", color: "#1e90ff" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" /><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">Email</div>
                    <a href="mailto:skmergers@gmail.com" className="font-semibold" style={{ color: "#0c2340" }}>skmergers@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: "#e2e8f0", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <h3 className="text-lg font-bold mb-6" style={{ color: "#0c2340" }}>Send Sheldon a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
