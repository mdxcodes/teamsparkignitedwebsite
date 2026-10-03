"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { siteContent } from "@/data";

// Inline SVG icon for LinkedIn (not in lucide-react 1.x)
function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const teamCategories = ["All", "Mechanical", "Electrical", "Design", "Management"];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function Team() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? siteContent.team
      : siteContent.team.filter((m) => m.category === activeFilter);

  return (
    <section id="team" className="py-24 bg-bg-base relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(200,76,56,0.05),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-brand-red font-orbitron text-xs tracking-[0.3em] uppercase mb-3">
              The People
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              THE{" "}
              <span className="text-brand-red">TEAM</span>
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">
              Student engineers, designers, and strategists driving our vision
              forward.
            </p>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2.5">
              {teamCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-sm font-orbitron text-xs tracking-wider transition-all duration-200 ${
                    activeFilter === cat
                      ? "bg-brand-red text-bg-base shadow-[0_0_12px_rgba(200,76,56,0.35)]"
                      : "bg-bg-surface border border-white/10 text-gray-400 hover:border-brand-red hover:text-brand-red"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((member) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{
                  duration: 0.35,
                  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                }}
                key={member.id}
                className="group bg-bg-surface rounded-sm overflow-hidden border border-white/5 hover:border-brand-red/30 transition-all duration-300"
              >
                {/* Image area */}
                <div className="relative aspect-[3/4] overflow-hidden bg-bg-surface-light">
                  {/* Placeholder avatar */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-brand-red/20 flex items-center justify-center">
                      <span className="font-orbitron font-bold text-2xl text-brand-red/70">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-bg-surface/20 to-transparent" />
                  {/* Social overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 flex justify-end gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                    <a
                      href="#"
                      className="p-2.5 bg-black/80 rounded-sm text-white hover:text-brand-red backdrop-blur-sm transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      href="#"
                      className="p-2.5 bg-black/80 rounded-sm text-white hover:text-brand-red backdrop-blur-sm transition-colors"
                      aria-label={`${member.name} Email`}
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 relative z-10 bg-bg-surface">
                  <h4 className="font-orbitron font-bold text-base text-white mb-0.5">
                    {member.name}
                  </h4>
                  <p className="text-brand-cyan text-xs tracking-wider font-orbitron">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
