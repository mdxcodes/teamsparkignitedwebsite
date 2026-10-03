"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1542617719-7561debc413e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1572005953039-38b43f9efcba?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1536643242030-9b7e923e5971?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560932408-f910fca6c0e5?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498887960847-2a5e46312788?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1510618037146-271588636e1c?q=80&w=2071&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-bg-surface-light relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">MOMENTS IN <span className="text-brand-cyan">MOTION</span></h2>
            <p className="text-gray-400">From the workshop to the finish line.</p>
          </motion.div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden rounded-xl break-inside-avoid group"
            >
              <div className="absolute inset-0 bg-brand-red/30 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
              <img src={src} alt="Gallery image" className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
