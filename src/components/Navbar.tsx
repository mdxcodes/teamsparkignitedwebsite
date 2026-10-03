"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Team", href: "#team" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-bg-base/80 backdrop-blur-md py-4 border-b border-brand-red/20" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/team_spark_ignited_logo.jpeg" alt="Team Spark Ignited Logo" className="w-10 h-10 object-contain rounded-full shadow-lg group-hover:shadow-[0_0_15px_rgba(200,76,56,0.5)] transition-shadow" />
          <span className="font-orbitron font-bold text-xl tracking-wider text-white">
            SPARK <span className="text-brand-red">IGNITED</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-brand-red transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="#join"
            className="px-5 py-2 font-orbitron font-semibold text-sm border-2 border-brand-red text-brand-red rounded hover:bg-brand-red hover:text-bg-base transition-all duration-300 shadow-[0_0_10px_rgba(200,76,56,0.4)] hover:shadow-[0_0_20px_rgba(200,76,56,0.6)]"
          >
            JOIN US
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-brand-red"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={{ height: mobileMenuOpen ? "auto" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-bg-surface border-b border-white/5"
      >
        <nav className="flex flex-col items-center py-6 gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium hover:text-brand-red transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}
