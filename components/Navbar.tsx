"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900 border-b-2 border-gold-500 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="AXELOVA"
            width={200}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-200 relative pb-1 ${
                isActive(l.href)
                  ? "text-gold-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold-400 after:rounded-full"
                  : "text-gray-300 hover:text-gold-400"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/coaching#reserver" className="btn-primary text-sm py-2.5 px-5">
            Réserver une séance
          </Link>
        </nav>

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

      {open && (
        <div className="md:hidden bg-navy-900 border-t border-navy-700 px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block py-2 font-medium transition-colors ${
                isActive(l.href)
                  ? "text-gold-400 border-l-2 border-gold-400 pl-3"
                  : "text-gray-300 hover:text-gold-400"
              }`}
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