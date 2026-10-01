"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#0B0B0C] text-white pt-24 sm:pt-32 pb-12 px-6 sm:px-12 lg:px-20 border-t border-white/10 overflow-hidden">
      {/* Corner crosshairs matching 11-aicceler8.png */}
      <div className="corner-plus top-8 left-8 text-[#FF5E3F] pointer-events-none select-none z-10" />
      <div className="corner-plus top-8 right-8 text-[#FF5E3F] pointer-events-none select-none z-10" />

      {/* Subtle warm glow background */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-[#FF5E3F]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1480px] mx-auto relative z-10">
        {/* Top 3-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-24">
          {/* Column 1: Brand & Mission */}
          <div className="md:col-span-5 flex flex-col justify-start">
            <div className="relative h-8 w-32 flex items-center mb-6">
              <Image
                src="/images/logos/logo.png"
                alt="AICCELER8"
                fill
                className="object-contain filter brightness-0 invert"
              />
            </div>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-sm">
              An Enterprise Growth & Transformation Company powered by Artificial Intelligence. We partner with ambitious leadership teams to redesign how their organizations grow, operate, and compete.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 flex flex-col">
            <span className="text-xs font-mono tracking-widest text-[#FF5E3F] font-bold uppercase mb-6 block">
              NAVIGATION
            </span>
            <ul className="space-y-3.5 text-xs sm:text-sm font-sans tracking-wide">
              <li>
                <a
                  href="#why-aicceler8"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  WHY AICCELER8
                </a>
              </li>
              <li>
                <a
                  href="#how-we-transform"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  HOW WE TRANSFORM
                </a>
              </li>
              <li>
                <a
                  href="#who-we-partner-with"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  WHO WE PARTNER WITH
                </a>
              </li>
              <li>
                <a
                  href="#hows-aicceler8-better"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  HOW&apos;S AICCELER8 BETTER
                </a>
              </li>
              <li>
                <a
                  href="#our-approach"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  OUR APPROACH
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Assurance & Back To Top */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#FF5E3F] font-bold uppercase mb-6 block">
                ASSURANCE
              </span>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-sm mb-8">
                Enterprise-grade data isolation, custom non-disclosure terms, and SOC2 / HIPAA compliant implementation architectures.
              </p>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="text-[#FF5E3F] text-xs font-mono font-bold tracking-widest uppercase hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <span>BACK TO TOP</span>
                <span>↑</span>
              </button>
            </div>
          </div>
        </div>

        {/* Massive AICCELER8 Headline Typography */}
        <div className="w-full select-none overflow-hidden pt-4 pb-2">
          <h2 className="text-[#FF5E3F] text-[13.5vw] font-black tracking-tight leading-none w-full text-center sm:text-left block drop-shadow-sm">
            AICCELER8
          </h2>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 mb-6" />

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 tracking-wider">
          <p>© 2026 AICCELER8 ENTERPRISE HOLDINGS INC. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
