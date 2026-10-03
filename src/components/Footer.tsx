"use client";

export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-white/10 py-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="font-orbitron font-bold text-sm tracking-wider text-white">
              SPARK{" "}
              <span className="text-brand-red">IGNITED</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600 text-center">
            &copy; {new Date().getFullYear()} Team Spark Ignited. All Rights
            Reserved.
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="text-xs text-gray-500 hover:text-brand-red transition-colors font-orbitron tracking-wider"
          >
            ↑ Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
