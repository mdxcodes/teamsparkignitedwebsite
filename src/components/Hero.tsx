"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Graphic */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full relative group px-6 mb-12"
        >
          {/* Decorative frame for the banner */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-red via-brand-yellow to-brand-cyan rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-xl overflow-hidden bg-black border border-white/10">
            <img 
              src="/team_spark_ignited_cover.jpeg" 
              alt="Team Spark Ignited Banner" 
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" 
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 mt-4"
        >
          <Link
            href="#projects"
            className="px-10 py-4 bg-brand-red text-bg-base font-orbitron font-bold rounded hover:bg-brand-yellow hover:text-black transition-all shadow-[0_0_20px_rgba(200,76,56,0.3)] hover:shadow-[0_0_30px_rgba(239,193,32,0.5)] transform hover:-translate-y-1 uppercase tracking-wider"
          >
            Explore Vehicles
          </Link>
          <Link
            href="#contact"
            className="px-10 py-4 bg-transparent border-2 border-brand-red text-brand-red font-orbitron font-bold rounded transition-all hover:bg-brand-red/10 transform hover:-translate-y-1 uppercase tracking-wider"
          >
            Become a Partner
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-orbitron">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-brand-red" />
        </motion.div>
      </motion.div>
    </section>
  );
}
