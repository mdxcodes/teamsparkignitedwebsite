"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Vehicles", href: "#vehicles" },
  { name: "Engineering", href: "#engineering" },
  { name: "Competition", href: "#competition" },
  { name: "Team", href: "#team" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-base/85 backdrop-blur-md py-3 border-b border-white/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Team Spark Ignited Home"
        >
          {/* Text-only brand mark – replace with an <img> when logo is available */}
          <span className="font-orbitron font-bold text-lg tracking-wider text-white">
            SPARK{" "}
            <span className="text-brand-red">IGNITED</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium tracking-wide text-gray-300 hover:text-brand-red transition-colors relative group uppercase"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-red transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="#cta"
            className="px-5 py-2 font-orbitron font-semibold text-xs border border-brand-red text-brand-red rounded-sm hover:bg-brand-red hover:text-bg-base transition-all duration-300 tracking-widest uppercase"
          >
            Join Us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-brand-red p-1"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-bg-surface/95 backdrop-blur-md border-b border-white/5"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col items-center py-8 gap-5">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium tracking-wide text-gray-300 hover:text-brand-red transition-colors uppercase"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#cta"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2.5 font-orbitron font-semibold text-xs border border-brand-red text-brand-red rounded-sm hover:bg-brand-red hover:text-bg-base transition-all tracking-widest uppercase"
              >
                Join Us
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
