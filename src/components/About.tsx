"use client";

import { motion } from "framer-motion";
import { Zap, Wrench, Trophy } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                DRIVEN BY <span className="text-brand-red border-b-4 border-brand-red/30 pb-2">PASSION</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Team Spark Ignited is a collegiate engineering powerhouse dedicated to designing, fabricating, and racing high-performance electric vehicles. 
                We push the boundaries of electric mobility through hands-on engineering challenges.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                From electric two-wheelers to aggressively aerodynamic Go-Karts, our mission is to fuse sustainability with sheer speed. 
                We provide students with a real-world playground for electrical, mechanical, and software engineering.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: Zap, title: "Electric Focus", desc: "100% EV Powertrains" },
                  { icon: Wrench, title: "Custom Built", desc: "In-house Fabrication" },
                  { icon: Trophy, title: "Competitive", desc: "National Level Racing" }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-bg-base/50 rounded border border-white/5 hover:border-brand-red/30 transition-colors group">
                    <item.icon className="text-brand-red mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-orbitron font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video rounded-lg overflow-hidden bg-bg-surface-light border border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-black/50 overflow-hidden">
                {/* Visual Placeholder for a team/workspace photo */}
                <div className="w-full h-full relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-transparent z-10 mix-blend-overlay"></div>
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1580661214040-42ecf2d4e135?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
