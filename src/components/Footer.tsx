import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0c2340] text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-1">
              Sheldon Kirk
            </h3>
            <p className="text-xs mb-3" style={{ color: "#7eb8f7" }}>SK Mergers &amp; Acquisitions · eXp Commercial</p>
            <p className="text-sm leading-relaxed">
              Your Pinch A Penny Pool Store Resale Specialist. Currently serving
              Florida, Texas, Arizona, Georgia, Louisiana, Alabama, North Carolina
              &amp; Nevada — with more states coming soon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Listings
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Sheldon
                </Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:7272348296"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-[#1e90ff]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  727-234-8296
                </a>
              </li>
              <li>
                <a
                  href="mailto:skmergers@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-[#1e90ff]"
                  >
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                  skmergers@gmail.com
                </a>
              </li>
              <li className="text-xs mt-2">Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a3a5c] mt-10 pt-6 text-xs text-center text-slate-500" suppressHydrationWarning>
          &copy; {new Date().getFullYear()} &nbsp;SK Mergers &amp; Acquisitions. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
