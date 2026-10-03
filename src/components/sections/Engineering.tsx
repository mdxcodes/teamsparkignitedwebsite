"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data";
import EngineeringScene from "@/components/three/EngineeringScene";

const iconMap: Record<string, React.ElementType> = {
  zap: () => (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  wrench: () => (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  cpu: () => (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  wind: () => (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  ),
};

export default function Engineering() {
  return (
    <section id="engineering" className="py-24 bg-bg-base relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(239,193,32,0.04),transparent_55%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-brand-red font-orbitron text-xs tracking-[0.3em] uppercase mb-3">
              Our Approach
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              HOW WE{" "}
              <span className="text-brand-red">BUILD</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Four core engineering systems, each precision-engineered and
              tightly integrated.
            </p>
          </motion.div>
        </div>

        {/* System cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.engineeringSystems.map((system, i) => {
            const IconComponent = iconMap[system.icon] || iconMap.zap;
            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                }}
                className="group relative bg-bg-surface border border-white/5 rounded-sm p-7 hover:border-brand-red/40 transition-all duration-300"
              >
                {/* Number indicator */}
                <span className="absolute top-5 right-5 font-orbitron text-[10px] text-white/10 group-hover:text-brand-red/30 transition-colors">
                  0{i + 1}
                </span>
                <div className="mb-5">
                  <IconComponent />
                </div>
                <h3 className="font-orbitron font-bold text-sm mb-2 text-white tracking-wide">
                  {system.title.toUpperCase()}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {system.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 h-[2px] bg-gradient-to-r from-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Three.js scene container – rendered on desktop only */}
        <div className="mt-16">
          <DesktopScene />
        </div>
      </div>
    </section>
  );
}

function DesktopScene() {
  return (
    <div className="w-full aspect-[21/9] rounded-sm overflow-hidden border border-white/5 bg-bg-surface">
      <EngineeringScene />
    </div>
  );
}
