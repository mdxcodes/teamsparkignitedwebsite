"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data";
import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-bg-surface-light relative">
      {/* Background accent */}
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
              Visual Journal
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              MOMENTS IN{" "}
              <span className="text-brand-cyan">MOTION</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From the workshop bench to the finish line — engineering in action.
            </p>
          </motion.div>
        </div>

        {/* Masonry layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {siteContent.galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
              }}
              className="relative overflow-hidden rounded-sm break-inside-avoid group cursor-pointer"
            >
              {/* Placeholder / image container */}
              <div className="relative aspect-auto bg-bg-surface">
                {/* Placeholder gradient since image may not exist yet */}
                <div
                  className="w-full bg-gradient-to-br from-bg-base to-bg-surface-light"
                  style={{ minHeight: i % 3 === 0 ? 280 : i % 3 === 1 ? 200 : 340 }}
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    width={600}
                    height={i % 3 === 0 ? 400 : i % 3 === 1 ? 300 : 500}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Red tint overlay on hover */}
                <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 mix-blend-overlay z-10" />
                {/* Top-to-bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
