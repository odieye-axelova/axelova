"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/coaching", label: "Coaching" },
  { href: "/formation", label: "Formation" },
  { href: "/conseil", label: "Conseil" },
  { href: "/blog", label: "Ressources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-900/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-heading font-bold text-navy-900 text-lg">
            A
          </div>
          <span className="font-heading font-bold text-xl text-white tracking-wide">
            AXEL<span className="text-gold-400">OVA</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-gold-400 text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/coaching#reserver" className="btn-primary text-sm py-2.5 px-5">
            Réserver une séance
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-current mb-1.5 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current mb-1.5 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-900 border-t border-navy-700 px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-gray-300 hover:text-gold-400 py-2 font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/coaching#reserver"
            className="btn-primary w-full justify-center mt-4"
            onClick={() => setOpen(false)}
          >
            Réserver une séance
          </Link>
        </div>
      )}
    </header>
  );
}
