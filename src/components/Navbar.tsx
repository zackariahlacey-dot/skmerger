"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PhoneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Listings", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ];

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
          <Link href="/" className="flex items-center gap-3 shrink-0">
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
              <span className="text-xs tracking-widest uppercase" style={{ color: "#7eb8f7" }}>
                Pool Store Specialist
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href.replace("/#contact", ""));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium transition-colors"
                  style={{ color: isActive ? "#ffffff" : "#94a3b8" }}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:7272348296"
              className="btn-glow flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-md"
              style={{ backgroundColor: "#1e90ff" }}
            >
              <PhoneIcon className="w-4 h-4" />
              727-234-8296
            </a>
          </nav>

          {/* Mobile: quick call + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:7272348296"
              className="flex items-center justify-center w-10 h-10 rounded-lg"
              style={{ backgroundColor: "rgba(30,144,255,0.18)" }}
              aria-label="Call Sheldon"
            >
              <PhoneIcon className="w-5 h-5" style={{ color: "#1e90ff" }} />
            </a>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-lg text-white transition-colors"
              style={{ backgroundColor: menuOpen ? "rgba(255,255,255,0.1)" : "transparent" }}
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
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden animate-slide-down"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <nav className="py-2">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href.replace("/#contact", ""));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between px-2 py-3.5 rounded-xl text-base font-medium transition-colors"
                    style={{
                      color: isActive ? "#ffffff" : "#94a3b8",
                      backgroundColor: isActive ? "rgba(30,144,255,0.12)" : "transparent",
                    }}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#1e90ff" }} />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA block */}
            <div className="pb-4 pt-2 space-y-2.5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <a
                href="tel:7272348296"
                className="flex items-center justify-center gap-2.5 w-full text-white font-bold py-3.5 rounded-xl text-sm"
                style={{ backgroundColor: "#1e90ff", boxShadow: "0 4px 18px rgba(30,144,255,0.4)" }}
                onClick={() => setMenuOpen(false)}
              >
                <PhoneIcon className="w-5 h-5" />
                Call Sheldon · 727-234-8296
              </a>
              <a
                href="mailto:skmergers@gmail.com"
                className="flex items-center justify-center gap-2.5 w-full font-semibold py-3 rounded-xl text-sm transition-colors"
                style={{
                  color: "#94a3b8",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                }}
                onClick={() => setMenuOpen(false)}
              >
                skmergers@gmail.com
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
