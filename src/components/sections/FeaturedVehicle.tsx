"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Gauge,
  Zap,
  Battery,
  Weight,
  Timer,
} from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/data";

gsap.registerPlugin(ScrollTrigger);

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

const specRows = [
  { label: "Top Speed", key: "topSpeed", icon: Gauge },
  { label: "Power Output", key: "power", icon: Zap },
  { label: "Torque", key: "torque", icon: Battery },
  { label: "Weight", key: "weight", icon: Weight },
  { label: "0-100 km/h", key: "acceleration", icon: Timer },
  { label: "Motor", key: "motor", icon: Zap },
  { label: "Battery", key: "battery", icon: Battery },
];

export default function FeaturedVehicle() {
  const sectionRef = useRef<HTMLElement>(null);
  const vehicle = siteContent.vehicles[0];

  if (!vehicle) return null;

  return (
    <section
      id="featured-vehicle"
      ref={sectionRef}
      className="relative bg-bg-surface overflow-hidden"
    >
      {/* Radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(200,76,56,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-orbitron text-xs tracking-[0.3em] uppercase mb-3"
          >
            Flagship Machine
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-14"
          >
            {vehicle.name.toUpperCase()}
          </motion.h2>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="lg:w-3/5 w-full"
            >
              <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={vehicle.heroImage}
                  alt={vehicle.name}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/40 to-transparent" />
                {/* Badges */}
                <div className="absolute top-5 left-5 flex gap-3">
                  <span className="bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-white/10 rounded-sm">
                    <span className="font-orbitron text-[10px] tracking-widest text-gray-300 uppercase">
                      {vehicle.category}
                    </span>
                  </span>
                  <span className="bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-white/10 rounded-sm">
                    <span className="font-orbitron text-[10px] tracking-widest text-gray-400">
                      {vehicle.year}
                    </span>
                  </span>
                </div>
                <div className="absolute bottom-5 right-5">
                  <span
                    className={`inline-block px-3 py-1.5 rounded-sm font-orbitron text-[10px] tracking-widest uppercase ${
                      statusStyles[vehicle.status] ||
                      statusStyles.concept
                    }`}
                  >
                    {statusLabels[vehicle.status] || vehicle.status}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Specs side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="lg:w-2/5 w-full"
            >
              <p className="text-gray-400 leading-relaxed mb-8">
                {vehicle.description}
              </p>

              {/* Full specs table */}
              <div className="mb-8">
                <h4 className="font-orbitron text-xs tracking-[0.25em] uppercase text-brand-red mb-4">
                  Specifications
                </h4>
                <div className="border border-white/5 rounded-sm overflow-hidden">
                  {specRows.map((row, i) => {
                    const SpecIcon = row.icon;
                    const value =
                      vehicle.specifications[row.key as keyof typeof vehicle.specifications];
                    if (!value) return null;
                    return (
                      <div
                        key={row.key}
                        className={`flex items-center justify-between px-5 py-3.5 ${
                          i !== specRows.length - 1
                            ? "border-b border-white/5"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <SpecIcon
                            className="text-brand-red"
                            size={14}
                          />
                          <span className="text-xs text-gray-500 font-orbitron uppercase tracking-wider">
                            {row.label}
                          </span>
                        </div>
                        <span className="text-sm text-white font-medium">
                          {value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Engineering highlights */}
              <div>
                <h4 className="font-orbitron text-xs tracking-[0.25em] uppercase text-brand-red mb-4">
                  Engineering Highlights
                </h4>
                <ul className="space-y-2.5">
                  {vehicle.engineeringHighlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-gray-400 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competition */}
              {vehicle.competition && (
                <div className="mt-8 p-5 bg-bg-base/60 border border-white/5 rounded-sm">
                  <p className="text-[10px] font-orbitron tracking-[0.25em] uppercase text-gray-600 mb-1">
                    Competing At
                  </p>
                  <p className="font-orbitron font-bold text-brand-cyan">
                    {vehicle.competition}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
