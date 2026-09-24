"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-transparent text-[#FAF3EA] relative isolate overflow-hidden pt-16 sm:pt-20 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16">
      {/* Corner cross accents */}
      <div className="corner-plus top-6 left-6 sm:left-10 lg:left-16 text-[#FF5E3F]/40" />
      <div className="corner-plus top-6 right-6 sm:right-10 lg:right-16 text-[#FF5E3F]/40" />

      {/* Top Main Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start relative z-10">
        {/* Brand & Description Column */}
        <div className="md:col-span-5 space-y-4">
          <div className="relative h-9 w-32 flex items-center">
            <Image
              src="/logo.png"
              alt="AICceler8"
              fill
              className="object-contain filter brightness-0 invert"
            />
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 font-sans font-normal max-w-md leading-relaxed">
            An Enterprise Growth & Transformation Company powered by Artificial Intelligence. We partner with ambitious leadership teams to redesign how their organizations grow, operate, and compete.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="md:col-span-3 space-y-3">
          <span className="type-mono text-[11px] text-[#FF5E3F] font-bold tracking-wider uppercase block mb-3">
            NAVIGATION
          </span>
          <ul className="space-y-2 type-mono text-[11px] text-neutral-300">
            <li>
              <a href="#why-aicceler8" className="hover:text-[#FF5E3F] transition-colors">
                WHY AICCELER8
              </a>
            </li>
            <li>
              <a href="#how-we-transform" className="hover:text-[#FF5E3F] transition-colors">
                HOW WE TRANSFORM
              </a>
            </li>
            <li>
              <a href="#who-we-work-with" className="hover:text-[#FF5E3F] transition-colors">
                WHO WE PARTNER WITH
              </a>
            </li>
            <li>
              <a href="#why-traditional-models" className="hover:text-[#FF5E3F] transition-colors">
                HOW'S AICCELER8 BETTER
              </a>
            </li>
            <li>
              <a href="#our-approach" className="hover:text-[#FF5E3F] transition-colors">
                OUR APPROACH
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#FF5E3F] transition-colors">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>

        {/* Assurance Column */}
        <div className="md:col-span-3 space-y-3">
          <span className="type-mono text-[11px] text-[#FF5E3F] font-bold tracking-wider uppercase block mb-3">
            ASSURANCE
          </span>
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            Enterprise-grade data isolation, custom non-disclosure terms, and SOC2 / HIPAA compliant implementation architectures.
          </p>
          <div className="pt-2">
            <button
              onClick={scrollToTop}
              className="type-mono text-[11px] inline-flex items-center gap-2 text-[#FF5E3F] hover:text-white transition-colors font-bold"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Massive Brand Watermark Typography (SS2 Style) with Brand Gradient & Glow */}
      <div className="w-full relative overflow-hidden select-none pointer-events-none pt-4 pb-2 my-2 flex justify-center items-center">
        <h1 className="text-[12vw] sm:text-[13vw] lg:text-[14.5vw] font-bold uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-[#FF5E3F]/80 bg-gradient-to-r from-[#FF5E3F]/20 via-[#FF5E3F]/85 to-[#FF5E3F]/20 text-center whitespace-nowrap drop-shadow-[0_10px_35px_rgba(255,94,63,0.25)]">
          AICCELER8
        </h1>
      </div>

      {/* Bottom Legal Bar */}
      <div className="w-full border-t border-[#FF5E3F]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 type-mono text-[10px] text-neutral-400 relative z-10">
        <div>
          © {new Date().getFullYear()} AICCELER8 ENTERPRISE HOLDINGS INC. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-6 text-neutral-400">
          <span className="hover:text-[#FF5E3F] cursor-pointer transition-colors">PRIVACY POLICY</span>
          <span className="hover:text-[#FF5E3F] cursor-pointer transition-colors">ENTERPRISE TERMS</span>
          <span className="hover:text-[#FF5E3F] cursor-pointer transition-colors">SECURITY WHITEPAPER</span>
        </div>
      </div>
    </footer>
  );
}
