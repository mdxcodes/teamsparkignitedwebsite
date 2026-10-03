"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gauge, Zap, Battery } from "lucide-react";
import Image from "next/image";
import { siteContent } from "@/data";

const statusStyles: Record<string, string> = {
  concept: "bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/30",
  "in-development":
    "bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30",
  testing: "bg-white/10 text-white border border-white/20",
  "competition-ready":
    "bg-brand-red/15 text-brand-red border border-brand-red/30",
};

const statusLabels: Record<string, string> = {
  concept: "Concept",
  "in-development": "In Development",
  testing: "Testing",
  "competition-ready": "Competition Ready",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-sm font-orbitron text-[10px] tracking-widest uppercase ${
        statusStyles[status] || statusStyles.concept
      }`}
    >
      {statusLabels[status] || status}
    </span>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.14,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function Vehicles() {
  return (
    <section id="vehicles" className="py-24 bg-bg-base relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(55,208,210,0.04),transparent_55%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-brand-red font-orbitron text-xs tracking-[0.3em] uppercase mb-3">
              The Fleet
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              OUR{" "}
              <span className="text-brand-red">MACHINES</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Precision-engineered electric vehicles built from the ground up
              by student engineers.
            </p>
          </motion.div>
        </div>

        {/* Vehicle grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {siteContent.vehicles.map((vehicle, i) => (
            <motion.div
              key={vehicle.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              className="group bg-bg-surface rounded-sm overflow-hidden border border-white/5 hover:border-brand-red/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,76,56,0.12)] flex flex-col"
            >
              {/* Image area */}
              <div className="relative aspect-[16/10] overflow-hidden bg-bg-surface-light">
                <Image
                  src={vehicle.heroImage}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/60 to-transparent" />
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-white/10 rounded-sm">
                  <span className="font-orbitron text-[10px] tracking-widest text-gray-300 uppercase">
                    {vehicle.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-orbitron font-bold text-xl text-white group-hover:text-brand-red transition-colors leading-tight">
                    {vehicle.name}
                  </h3>
                  <StatusBadge status={vehicle.status} />
                </div>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed line-clamp-2">
                  {vehicle.description}
                </p>

                {/* Specs grid */}
                <div className="grid grid-cols-3 gap-3 mb-5 pt-5 border-t border-white/5">
                  <div className="flex flex-col items-center text-center">
                    <Gauge className="text-brand-red mb-1.5" size={16} />
                    <span className="text-[10px] text-gray-500 font-orbitron uppercase tracking-wider">
                      Speed
                    </span>
                    <span className="text-xs font-semibold text-gray-300 mt-0.5">
                      {vehicle.specifications.topSpeed}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center border-x border-white/5">
                    <Zap className="text-brand-red mb-1.5" size={16} />
                    <span className="text-[10px] text-gray-500 font-orbitron uppercase tracking-wider">
                      Motor
                    </span>
                    <span className="text-xs font-semibold text-gray-300 mt-0.5 line-clamp-1">
                      {vehicle.specifications.motor}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Battery className="text-brand-red mb-1.5" size={16} />
                    <span className="text-[10px] text-gray-500 font-orbitron uppercase tracking-wider">
                      Battery
                    </span>
                    <span className="text-xs font-semibold text-gray-300 mt-0.5">
                      {vehicle.specifications.battery}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full py-3 bg-white/5 hover:bg-brand-red hover:text-bg-base font-orbitron font-semibold text-xs tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-auto">
                  VIEW SPECS
                  <ArrowRight
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
