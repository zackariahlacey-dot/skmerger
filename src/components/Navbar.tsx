"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { PhoneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-shadow duration-300"
      style={{
        backgroundColor: "#0c2340",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.35)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo + name */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/explogo.png"
              alt="eXp Commercial"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
              priority
            />
            <div className="leading-tight">
              <span className="text-white font-bold text-base tracking-tight block">
                Sheldon Kirk
              </span>
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "#7eb8f7" }}
              >
                Pool Store Specialist
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              Listings
            </Link>
            <Link
              href="/about"
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              About
            </Link>
            <a
              href="/#contact"
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              Contact
            </a>
            <a
              href="tel:7272348296"
              className="btn-glow flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-md"
              style={{ backgroundColor: "#1e90ff" }}
            >
              <PhoneIcon className="w-4 h-4" />
              727-234-8296
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden pb-4 mt-2 pt-4 flex flex-col gap-4"
            style={{ borderTop: "1px solid #1a3a5c" }}
          >
            <Link
              href="/"
              className="text-slate-300 hover:text-white text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Listings
            </Link>
            <Link
              href="/about"
              className="text-slate-300 hover:text-white text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="/#contact"
              className="text-slate-300 hover:text-white text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="tel:7272348296"
              className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-md w-fit"
              style={{ backgroundColor: "#1e90ff" }}
            >
              <PhoneIcon className="w-4 h-4" />
              727-234-8296
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
