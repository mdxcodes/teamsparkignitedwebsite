"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative py-28 bg-bg-surface overflow-hidden">
      {/* Diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 28px, rgba(255,255,255,0.6) 28px, rgba(255,255,255,0.6) 29px)",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,76,56,0.1),transparent_65%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-brand-red font-orbitron text-xs tracking-[0.3em] uppercase mb-5">
            Get Involved
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-5">
            JOIN THE{" "}
            <span className="text-brand-red">GRID</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you&apos;re a student ready to engineer, or an organisation
            ready to back the next generation of motorsport — there&apos;s a
            place for you here.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-brand-red text-bg-base font-orbitron font-bold text-sm rounded-sm uppercase tracking-widest transition-all duration-300 hover:bg-brand-yellow hover:shadow-[0_0_28px_rgba(239,193,32,0.3)]"
            >
              Join the Team
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border border-white/20 text-white font-orbitron font-bold text-sm rounded-sm uppercase tracking-widest transition-all duration-300 hover:border-brand-cyan hover:text-brand-cyan hover:shadow-[0_0_20px_rgba(55,208,210,0.2)]"
            >
              Become a Sponsor
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-40" />
    </section>
  );
}
