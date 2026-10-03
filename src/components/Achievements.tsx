"use client";

import { motion } from "framer-motion";
import { Flag, Award, Medal } from "lucide-react";

const achievements = [
  { year: "2025", title: "National E-Karting Championship", result: "1st Place (Overall)", icon: Trophy },
  { year: "2024", title: "Formula Student Electric", result: "Best Engineering Design", icon: Award },
  { year: "2024", title: "EV Dirt Challenge", result: "Runner Up", icon: Medal },
  { year: "2023", title: "Collegiate Motorsport Series", result: "3rd Place (Endurance)", icon: Flag },
];

function Trophy(props: any) {
  return <Award {...props} />;
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-bg-surface-light relative border-y border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">OUR <span className="text-brand-red">LEGACY</span></h2>
            <p className="text-gray-400">Milestones achieved on the track and in engineering design.</p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-red via-brand-cyan to-transparent md:-translate-x-1/2 opacity-30"></div>

          <div className="space-y-12">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Node */}
                <div className="absolute left-[20px] md:left-1/2 w-[40px] h-[40px] -translate-x-1/2 rounded-full bg-bg-surface border-4 border-brand-red flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,210,255,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan"></div>
                </div>

                <div className={`ml-16 md:ml-0 md:w-1/2 p-6 md:p-8 bg-bg-surface border border-white/5 rounded-xl shadow-lg relative ${i % 2 === 0 ? "md:ml-auto md:mr-12" : "md:mr-auto md:ml-12"}`}>
                  <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-bg-surface border-t border-r border-white/5 rotate-45 hidden md:block ${i % 2 === 0 ? "right-[-9px] border-l-0 border-b-0" : "left-[-9px] border-t-0 border-r-0 border-b border-l border-white/5"}`}></div>
                  
                  <div className="flex items-center gap-4 mb-2">
                    <item.icon className="text-brand-red" size={24} />
                    <span className="font-orbitron font-bold text-xl text-brand-red">{item.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-orbitron mb-2">{item.title}</h3>
                  <p className="inline-block px-3 py-1 bg-white/5 rounded text-sm text-brand-cyan border border-brand-cyan/20">{item.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
