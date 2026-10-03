"use client";

import { motion } from "framer-motion";
import { ArrowRight, Battery, Gauge, Zap } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "e-bike",
    title: "Electric Two-Wheeler",
    category: "Two-Wheeler",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop",
    stats: { speed: "110 km/h", motor: "12kW BLDC", battery: "72V 40Ah Li-ion" },
    desc: "A custom-engineered electric sprint bike optimized for high acceleration and tight maneuverability.",
  },
  {
    id: "dirt-kart",
    title: "All-Terrain Dirt Kart",
    category: "Off-Road",
    image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=2070&auto=format&fit=crop",
    stats: { speed: "80 km/h", motor: "15kW PMAC", battery: "96V 50Ah LFP" },
    desc: "Built to dominate harsh off-road tracks with robust suspension and instant electric torque.",
  },
  {
    id: "go-kart",
    title: "E-Go-Kart",
    category: "Track Racing",
    image: "https://images.unsplash.com/photo-1629897048514-3dd74142eff7?q=80&w=1956&auto=format&fit=crop",
    stats: { speed: "135 km/h", motor: "20kW Axial", battery: "96V 60Ah High-C" },
    desc: "A pure aerodynamic race machine. Designed for asphalt tracks with a focus on aerodynamics and grip.",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-base relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">OUR <span className="text-brand-red">MACHINES</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Engineering reality from imagination. Each vehicle is conceptually designed, engineered, and built by students.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group rounded-xl overflow-hidden bg-bg-surface border border-white/5 hover:border-brand-red/50 transition-all duration-300 shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1 rounded font-orbitron text-xs text-brand-red border border-brand-red/30">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold font-orbitron mb-2 group-hover:text-brand-red transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 h-16">{project.desc}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-6 pt-4 border-t border-white/10">
                  <div className="flex flex-col items-center text-center">
                    <Gauge className="text-brand-red mb-1" size={18} />
                    <span className="text-xs text-gray-400">Top Speed</span>
                    <strong className="text-sm">{project.stats.speed}</strong>
                  </div>
                  <div className="flex flex-col items-center text-center border-x border-white/10">
                    <Zap className="text-brand-red mb-1" size={18} />
                    <span className="text-xs text-gray-400">Motor</span>
                    <strong className="text-sm">{project.stats.motor}</strong>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Battery className="text-brand-red mb-1" size={18} />
                    <span className="text-xs text-gray-400">Battery</span>
                    <strong className="text-sm">{project.stats.battery}</strong>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-white/5 hover:bg-brand-red hover:text-black font-orbitron font-semibold text-sm rounded flex items-center justify-center gap-2 transition-all group-hover:shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                  VIEW SPECS <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
