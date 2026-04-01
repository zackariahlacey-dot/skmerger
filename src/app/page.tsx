import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import InquirySection from "@/components/InquirySection";

const listings = [
  {
    id: 1,
    title: "Pinch-A-Penny – Houston, TX",
    location: "Houston – Harris County",
    state: "Texas",
    annualSales: "$1,300,000",
    askingPrice: "$545,000",
    cashflow: null,
    status: "Active",
    highlights: [
      "Consistent sales growth since 2017",
      "Established retail leader in the market",
      "Pool cleaning, repairs & resurfacing services",
      "Turnkey operation with trained staff",
    ],
    description:
      "A well-established Pinch-A-Penny franchise in Houston's Harris County with consistent year-over-year revenue growth since 2017. This location offers both retail pool supply sales and a full suite of service offerings including pool cleaning, repairs, and resurfacing — making it a diversified, recession-resistant business.",
  },
  {
    id: 2,
    title: "Pinch-A-Penny – Margate, FL",
    location: "Margate, Florida",
    state: "Florida",
    image: "/margate.png",
    annualSales: null,
    askingPrice: "$315,000",
    cashflow: "Contact for Details",
    status: "Active",
    highlights: [
      "Consistent retail sales",
      "Undeveloped service territory of 6,500+ pools",
      "Low overhead with high growth potential",
    ],
    description:
      "A compelling Pinch-A-Penny opportunity in Margate, FL with consistent retail performance and a massively underdeveloped pool service territory of over 6,500 pools. The low overhead structure makes this an ideal acquisition for an owner-operator looking to scale service revenue quickly.",
  },
];

const statusStyles: Record<string, React.CSSProperties> = {
  Active:  { backgroundColor: "#dcfce7", color: "#15803d" },
  Pending: { backgroundColor: "#fef9c3", color: "#a16207" },
  Sold:    { backgroundColor: "#f1f5f9", color: "#64748b" },
};

export default function HomePage() {
  return (
    <>
      {/* ── Page header ───────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0c2340", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col gap-5">
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: "rgba(30,144,255,0.18)", color: "#7eb8f7" }}
              >
                Pinch A Penny Pool Store Resale Specialist
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Pool Stores <span style={{ color: "#1e90ff" }}>For Sale</span>
              </h1>
              <p className="mt-2 text-sm" style={{ color: "#94a3b8" }}>
                Sheldon Kirk · FL · TX · AZ · GA · LA · AL · NC · NV
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:w-auto">
              <a
                href="#notify"
                className="btn-glow text-white font-semibold px-5 py-3 rounded-lg text-sm text-center"
                style={{ backgroundColor: "#1e90ff" }}
              >
                Buyer / Seller / New Location
              </a>
              <a
                href="tel:7272348296"
                className="flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-lg text-sm border transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "#e2e8f0" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" style={{ color: "#1e90ff" }}>
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                </svg>
                727-234-8296
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Listings ─────────────────────────────────────────── */}
      <section id="listings" className="py-10 sm:py-16" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#1e90ff" }}>
              Active Listings
            </span>
            <h2 className="text-3xl font-bold mt-1" style={{ color: "#0c2340" }}>
              Pool Stores Available Now
            </h2>
          </div>

          {listings.length === 0 ? (
            <div className="text-center py-20 text-slate-500 bg-white rounded-2xl border" style={{ borderColor: "#e2e8f0" }}>
              <p className="text-lg font-medium mb-2">No listings available at this time.</p>
              <p className="text-sm">
                <a href="#notify" style={{ color: "#1e90ff" }}>Sign up below</a> to be notified the moment a new listing hits the market in your area.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-2">
              {listings.map((listing) => (
                <div
                  key={listing.id}
                  className="card-lift bg-white rounded-2xl overflow-hidden"
                  style={{ border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}
                >
                  {/* Card header */}
                  <div
                    className="px-6 py-5"
                    style={{ background: "linear-gradient(to right, #0c2340, #1a3a5c)" }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-xl font-bold text-white mb-1">{listing.title}</h2>
                        <div className="flex items-center gap-1.5 text-slate-300 text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#1e90ff" className="w-4 h-4">
                            <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                          </svg>
                          {listing.location}
                        </div>
                      </div>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                        style={statusStyles[listing.status]}
                      >
                        {listing.status}
                      </span>
                    </div>
                  </div>

                  {/* Financials */}
                  <div className="grid grid-cols-2 border-b" style={{ borderColor: "#f1f5f9" }}>
                    <div className="px-6 py-4 border-r" style={{ borderColor: "#f1f5f9" }}>
                      <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                        {listing.annualSales ? "Annual Sales" : "Cashflow"}
                      </div>
                      <div className="text-2xl font-bold" style={{ color: "#0c2340" }}>
                        {listing.annualSales ?? listing.cashflow}
                      </div>
                    </div>
                    <div className="px-6 py-4">
                      <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Asking Price</div>
                      <div className="text-2xl font-bold" style={{ color: "#1e90ff" }}>{listing.askingPrice}</div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">{listing.description}</p>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Key Highlights</h4>
                    <div className="flex gap-4 mb-4">
                      <ul className="space-y-1.5 flex-1">
                        {listing.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#1e90ff" className="w-4 h-4 mt-0.5 shrink-0">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                            <span className="text-slate-700">{h}</span>
                          </li>
                        ))}
                      </ul>
                      {listing.image && (
                        <div
                          className="relative shrink-0 rounded-lg overflow-hidden self-start w-24 h-24 sm:w-36 sm:h-36"
                          style={{ backgroundColor: "#f1f5f9" }}
                        >
                          <Image
                            src={listing.image}
                            alt={listing.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="#contact"
                        className="btn-glow flex-1 text-center text-white font-semibold py-2.5 px-4 rounded-lg text-sm"
                        style={{ backgroundColor: "#1e90ff" }}
                      >
                        Inquire About This Listing
                      </a>
                      <a
                        href="tel:7272348296"
                        className="flex items-center justify-center gap-2 border font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors"
                        style={{ borderColor: "#0c2340", color: "#0c2340" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                        </svg>
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <InquirySection />

      {/* ── Contact ──────────────────────────────────────────── */}
      <section id="contact" className="py-12 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#1e90ff" }}>
              Interested in a Listing?
            </span>
            <h2 className="text-3xl font-bold mt-2 mb-3" style={{ color: "#0c2340" }}>
              Contact Sheldon Directly
            </h2>
            <p className="text-slate-600">
              Fill out the form and Sheldon will respond within 24 hours. Or reach him directly at{" "}
              <a href="tel:7272348296" className="font-semibold hover:underline" style={{ color: "#1e90ff" }}>727-234-8296</a>
              {" "}or{" "}
              <a href="mailto:skmergers@gmail.com" className="font-semibold hover:underline" style={{ color: "#1e90ff" }}>skmergers@gmail.com</a>.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 sm:p-8 border" style={{ borderColor: "#e2e8f0", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
