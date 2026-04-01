"use client";

import { useState, useEffect } from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pt-3 animate-slide-up"
      style={{
        background: "linear-gradient(to top, #0c2340 60%, rgba(12,35,64,0) 100%)",
        paddingBottom: "max(16px, env(safe-area-inset-bottom))",
      }}
    >
      <div className="flex gap-2.5">
        <a
          href="tel:7272348296"
          className="flex-1 flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl text-sm"
          style={{
            backgroundColor: "#1e90ff",
            boxShadow: "0 4px 24px rgba(30,144,255,0.55)",
          }}
        >
          <PhoneIcon className="w-5 h-5 shrink-0" />
          Call Sheldon · 727-234-8296
        </a>
        <a
          href="mailto:skmergers@gmail.com"
          aria-label="Email Sheldon"
          className="flex items-center justify-center w-14 rounded-xl shrink-0"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#7eb8f7" className="w-5 h-5">
            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
