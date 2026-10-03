"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

// Inline simple SVG icons for brand logos
const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-surface relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">JOIN THE <span className="text-brand-red">GRID</span></h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Whether you want to join the team, sponsor our builds, or just say hello — we're always ready to connect.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bg-base border border-white/10 rounded flex items-center justify-center text-brand-red">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 font-orbitron">Email Us</h4>
                  <p className="font-medium">contact@teamsparkignited.edu</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bg-base border border-white/10 rounded flex items-center justify-center text-brand-red">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 font-orbitron">Our Garage</h4>
                  <p className="font-medium">Engineering Block A, University Campus</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[InstagramIcon, LinkedinIcon, TwitterIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded flex items-center justify-center hover:bg-brand-red hover:text-black transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-bg-base p-8 rounded-xl border border-white/5 shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-brand-cyan"></div>
            <h3 className="text-2xl font-orbitron font-bold mb-6">Send a Message</h3>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-400 font-orbitron">Name</label>
                  <input type="text" className="w-full bg-bg-surface border border-white/10 rounded p-3 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-400 font-orbitron">Email</label>
                  <input type="email" className="w-full bg-bg-surface border border-white/10 rounded p-3 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-400 font-orbitron">Subject</label>
                <select className="w-full bg-bg-surface border border-white/10 rounded p-3 text-white focus:outline-none focus:border-brand-red transition-colors appearance-none">
                  <option>Join Team</option>
                  <option>Sponsorship</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-400 font-orbitron">Message</label>
                <textarea rows={4} className="w-full bg-bg-surface border border-white/10 rounded p-3 text-white focus:outline-none focus:border-brand-red transition-colors resize-none" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-brand-red hover:bg-brand-cyan text-bg-base font-orbitron font-bold rounded transition-all shadow-[0_0_15px_rgba(0,210,255,0.3)] mt-4">
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
