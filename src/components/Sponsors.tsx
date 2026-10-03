"use client";

import { motion } from "framer-motion";

const sponsors = [
  { name: "TechCorp", logo: "https://placehold.co/200x100/111/fff?text=TechCorp" },
  { name: "PowerCells", logo: "https://placehold.co/200x100/111/fff?text=PowerCells" },
  { name: "AeroDynamics", logo: "https://placehold.co/200x100/111/fff?text=AeroDynamics" },
  { name: "EV Motors", logo: "https://placehold.co/200x100/111/fff?text=EV+Motors" },
  { name: "AutoParts", logo: "https://placehold.co/200x100/111/fff?text=AutoParts" },
  { name: "VoltSolutions", logo: "https://placehold.co/200x100/111/fff?text=VoltSolutions" },
];

export default function Sponsors() {
  return (
    <section className="py-20 bg-bg-base relative border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest text-gray-500 mb-10 font-orbitron"
        >
          POWERED BY INDUSTRY LEADERS
        </motion.h3>

        {/* Sponsor Grid/Carousel */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
            >
              <img src={sponsor.logo} alt={sponsor.name} className="h-12 md:h-16 object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
