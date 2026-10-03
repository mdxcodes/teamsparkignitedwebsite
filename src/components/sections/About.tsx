"use client";

import { motion } from "framer-motion";
import { Zap, Wrench, Trophy } from "lucide-react";
import { siteContent } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  wrench: Wrench,
  trophy: Trophy,
};

const featureItems = [
  {
    icon: "zap" as const,
    title: "Electric Focus",
    desc: "100% EV Powertrain Systems",
  },
  {
    icon: "wrench" as const,
    title: "Custom Built",
    desc: "In-House Fabrication & Design",
  },
  {
    icon: "trophy" as const,
    title: "Competitive",
    desc: "National-Level Motorsport Racing",
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-surface relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,76,56,0.06),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* Text column */}
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <p className="text-brand-red font-orbitron text-xs tracking-[0.3em] uppercase mb-4">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
              ENGINEERED FOR
              <br />
              <span className="text-brand-red">THE EDGE</span>
            </h2>
            <p className="text-gray-300 text-lg mb-5 leading-relaxed">
              {siteContent.description}
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              {siteContent.tagline}
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {featureItems.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div
                    key={item.title}
                    className="p-5 bg-bg-base/60 border border-white/5 rounded-sm hover:border-brand-red/40 transition-all duration-300 group"
                  >
                    <Icon className="text-brand-red mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-orbitron font-bold text-sm mb-1 text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual column */}
          <motion.div variants={itemVariants} className="lg:w-1/2 w-full">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 shadow-2xl">
              {/* Placeholder visual container */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/25 via-bg-surface to-brand-cyan/15" />
              {/* Carbon-fiber style line pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.5) 8px, rgba(255,255,255,0.5) 9px)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="text-brand-red/60 mx-auto mb-4" size={56} />
                  <p className="font-orbitron text-brand-red/80 text-sm tracking-widest uppercase">
                    Team Spark Ignited
                  </p>
                </div>
              </div>
              {/* Gradient overlay edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
