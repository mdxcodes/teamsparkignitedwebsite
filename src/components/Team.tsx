"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// Inline simple SVG icons for brand logos
const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const teamCategories = ["All", "Mechanical", "Electrical", "Design", "Management"];

const members = [
  { name: "Alex Mercer", role: "Team Captain", category: "Management", img: "https://i.pravatar.cc/300?img=11" },
  { name: "Jordan Lee", role: "Powertrain Lead", category: "Electrical", img: "https://i.pravatar.cc/300?img=12" },
  { name: "Samira Khan", role: "Chassis Lead", category: "Mechanical", img: "https://i.pravatar.cc/300?img=5" },
  { name: "Marcus Chen", role: "Aerodynamics", category: "Design", img: "https://i.pravatar.cc/300?img=14" },
  { name: "Elena Rossi", role: "Battery Systems", category: "Electrical", img: "https://i.pravatar.cc/300?img=9" },
  { name: "David Kim", role: "Suspension", category: "Mechanical", img: "https://i.pravatar.cc/300?img=15" },
];

import { useState } from "react";

export default function Team() {
  const [filter, setFilter] = useState("All");

  const filteredMembers = filter === "All" ? members : members.filter(m => m.category === filter);

  return (
    <section id="team" className="py-24 bg-bg-base relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">THE <span className="text-brand-red">TEAM</span></h2>
            <p className="text-gray-400 mb-8">The minds powering our machines.</p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {teamCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-orbitron transition-all ${
                    filter === cat 
                      ? "bg-brand-red text-bg-base shadow-[0_0_10px_rgba(0,210,255,0.5)]" 
                      : "bg-bg-surface border border-white/10 hover:border-brand-red hover:text-brand-red"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredMembers.map((member, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={member.name}
              className="bg-bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-brand-red/30 group relative"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-red mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity z-10 duration-500"></div>
                <img src={member.img} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                
                {/* Social overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 flex justify-end gap-2 translate-y-full group-hover:translate-y-0 transition-transform z-20">
                  <a href="#" className="p-2 bg-black/80 rounded-full text-white hover:text-brand-red backdrop-blur-sm"><LinkedinIcon size={18} /></a>
                  <a href="#" className="p-2 bg-black/80 rounded-full text-white hover:text-brand-red backdrop-blur-sm"><Mail size={18} /></a>
                </div>
              </div>
              <div className="p-5 relative z-20 bg-bg-surface">
                <h4 className="font-orbitron font-bold text-lg mb-1">{member.name}</h4>
                <p className="text-brand-cyan text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
