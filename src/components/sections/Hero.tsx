"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { siteContent } from "@/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/team_spark_ignited_cover.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        {/* Engineering grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Red scan-line accent */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent z-10 opacity-60" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center px-6"
      >
        {/* Site name */}
        <motion.p
          variants={childVariants}
          className="text-brand-red font-orbitron text-sm md:text-base tracking-[0.35em] uppercase mb-5"
        >
          {siteContent.tagline}
        </motion.p>

        {/* Main heading */}
        <motion.h1
          variants={childVariants}
          className="font-orbitron font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white text-center leading-[0.9] tracking-tighter mb-3"
        >
          {siteContent.siteName
            .split(" ")
            .map((word, i) => (
              <span key={i} className={i === 2 ? "text-brand-red" : ""}>
                {word}{" "}
              </span>
            ))}
        </motion.h1>

        {/* Tagline line */}
        <motion.div
          variants={childVariants}
          className="w-24 h-[2px] bg-gradient-to-r from-brand-red to-brand-cyan mb-8"
        />

        {/* Description */}
        <motion.p
          variants={childVariants}
          className="text-gray-400 text-center text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
        >
          {siteContent.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row gap-5"
        >
          <Link
            href="#vehicles"
            className="group relative px-10 py-4 bg-brand-red text-bg-base font-orbitron font-bold text-sm rounded-sm uppercase tracking-widest transition-all duration-300 hover:bg-brand-yellow hover:shadow-[0_0_30px_rgba(239,193,32,0.35)]"
          >
            Explore Vehicles
            <span className="absolute inset-0 rounded-sm border border-brand-yellow/40 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            href="#contact"
            className="px-10 py-4 bg-transparent border border-white/25 text-white font-orbitron font-bold text-sm rounded-sm uppercase tracking-widest transition-all duration-300 hover:border-brand-red hover:text-brand-red hover:shadow-[0_0_20px_rgba(200,76,56,0.25)]"
          >
            Become a Partner
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-orbitron">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="text-brand-red" size={22} />
        </motion.div>
      </motion.div>

      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-base to-transparent z-10" />
    </section>
  );
}
