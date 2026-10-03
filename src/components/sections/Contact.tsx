"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { siteContent } from "@/data";

// Inline SVG icons for social platforms not in lucide-react
function LinkedInIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-bg-surface relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-cyan/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand-red/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="lg:w-2/5"
          >
            <p className="text-brand-red font-orbitron text-xs tracking-[0.3em] uppercase mb-4">
              Reach Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-5 text-white leading-tight">
              GET IN{" "}
              <span className="text-brand-red">TOUCH</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Have a question, want to sponsor, or just want to say hi? Drop us
              a message — we&apos;d love to hear from you.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-bg-base border border-white/10 rounded-sm flex items-center justify-center text-brand-red shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] text-gray-600 font-orbitron uppercase tracking-widest mb-1">
                    Email
                  </h4>
                  <p className="text-sm text-gray-300">
                    {siteContent.contactEmail}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-bg-base border border-white/10 rounded-sm flex items-center justify-center text-brand-red shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] text-gray-600 font-orbitron uppercase tracking-widest mb-1">
                    Location
                  </h4>
                  <p className="text-sm text-gray-300">
                    {siteContent.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {siteContent.socialLinks.linkedin && (
                <a
                  href={siteContent.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red/40 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              )}
              {siteContent.socialLinks.instagram && (
                <a
                  href={siteContent.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red/40 transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              )}
              <a
                href={`mailto:${siteContent.contactEmail}`}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red/40 transition-all"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="lg:w-3/5 bg-bg-base border border-white/5 rounded-sm shadow-2xl relative"
          >
            {/* Top accent */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-red via-brand-yellow to-brand-cyan" />

            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-8">
                Send a Message
              </h3>

              {submitted ? (
                <div className="py-12 text-center">
                  <p className="text-brand-cyan font-orbitron text-lg mb-2">
                    Message Sent
                  </p>
                  <p className="text-gray-500 text-sm">
                    We&apos;ll get back to you within 48 hours.
                  </p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-gray-500 font-orbitron uppercase tracking-widest">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-bg-surface border border-white/10 rounded-sm p-3.5 text-white text-sm focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-700"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-gray-500 font-orbitron uppercase tracking-widest">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-bg-surface border border-white/10 rounded-sm p-3.5 text-white text-sm focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-700"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-gray-500 font-orbitron uppercase tracking-widest">
                      Subject
                    </label>
                    <select
                      required
                      className="w-full bg-bg-surface border border-white/10 rounded-sm p-3.5 text-white text-sm focus:outline-none focus:border-brand-red transition-colors appearance-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="join">Join the Team</option>
                      <option value="sponsor">Sponsorship Inquiry</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-gray-500 font-orbitron uppercase tracking-widest">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full bg-bg-surface border border-white/10 rounded-sm p-3.5 text-white text-sm focus:outline-none focus:border-brand-red transition-colors resize-none placeholder:text-gray-700"
                      placeholder="Tell us about yourself or your enquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-red hover:bg-brand-red/85 text-bg-base font-orbitron font-bold text-sm rounded-sm tracking-widest transition-all shadow-[0_0_15px_rgba(200,76,56,0.25)] hover:shadow-[0_0_25px_rgba(200,76,56,0.4)] mt-2"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
