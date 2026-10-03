"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { siteContent } from "@/data";

export default function Competition() {
  return (
    <section id="competition" className="py-24 bg-bg-surface-light relative border-y border-white/5">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(55,208,210,0.04),transparent_55%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-brand-red font-orbitron text-xs tracking-[0.3em] uppercase mb-3">
              Track Record
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              OUR{" "}
              <span className="text-brand-red">LEGACY</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every season writes a new chapter. Here are the ones that define
              us.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Gradient vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-red via-brand-cyan to-transparent md:-translate-x-1/2"
            style={{ opacity: 0.4 }}
          />

          <div className="space-y-14">
            {siteContent.achievements.map((achievement, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                  }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 md:left-1/2 w-5 h-5 -translate-x-1/2 rounded-full bg-bg-surface-light border-2 border-brand-red z-10 shadow-[0_0_12px_rgba(55,208,210,0.4)] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] p-7 bg-bg-surface border border-white/5 rounded-sm shadow-lg relative ${
                      isEven
                        ? "md:mr-auto md:ml-auto md:pr-10"
                        : "md:ml-auto md:mr-auto md:pl-10"
                    }`}
                  >
                    {/* Arrow */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-bg-surface border-t border-r border-white/5 rotate-45 hidden md:block ${
                        isEven
                          ? "right-[-7px] border-l-0 border-b-0"
                          : "left-[-7px] -rotate-90 border-t-0 border-r-0 border-b border-l border-white/5"
                      }`}
                    />

                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="text-brand-red" size={18} />
                      <span className="font-orbitron font-bold text-lg text-brand-red">
                        {achievement.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-orbitron mb-1.5 text-white">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {achievement.competition}
                    </p>
                    <span className="inline-block px-3 py-1.5 bg-brand-cyan/10 text-brand-cyan text-xs font-orbitron tracking-wider border border-brand-cyan/20 rounded-sm">
                      {achievement.result}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
