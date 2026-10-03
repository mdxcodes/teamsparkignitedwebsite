"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-bg-base relative border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-12 font-orbitron"
        >
          Powered By
        </motion.h3>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {siteContent.sponsors.map((sponsor, i) => (
            <motion.a
              key={sponsor.id}
              href={sponsor.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.07,
              }}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-400"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={160}
                height={72}
                className="h-11 md:h-14 w-auto object-contain"
                unoptimized
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
