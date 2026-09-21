"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ParticleWave from "./ParticleWave";

interface SectionFinalCTAProps {
  onOpenBooking: () => void;
}

export default function SectionFinalCTA({ onOpenBooking }: SectionFinalCTAProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Freshworks Image 4: Embedded Dark Showcase Card */}
      <div className="relative rounded-3xl overflow-hidden bg-[#0A0A0B] text-white p-10 sm:p-16 lg:p-20 shadow-2xl">
        {/* Dynamic particle ribbon inside dark container */}
        <div className="absolute inset-0 opacity-80 pointer-events-none">
          <ParticleWave />
        </div>

        <div className="relative z-10 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-neutral-200 text-xs font-medium mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>EXECUTIVE ENGAGEMENT</span>
          </div>

          {/* Headline from Aicceler8 Website.docx */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-[1.18] mb-6">
            The Future Won’t Be Built by Companies That Simply Use AI. <br />
            <span className="italic font-normal text-amber-300">
              It Will Be Built by Companies That Reinvent Themselves Around It.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-10">
            Whether you’re exploring AI for the first time or scaling transformation across your organization, AICceler8 partners with you to build a business that is ready for the next decade.
          </p>

          {/* Dual Pill Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 font-semibold text-sm tracking-normal transition-all shadow-md active:scale-[0.98]"
            >
              <span>Book an Enterprise Growth Strategy Session</span>
            </button>
            <a
              href="#transformations"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white font-semibold text-sm border border-neutral-700 transition-all"
            >
              <span>Explore transformations</span>
            </a>
          </div>

          {/* Assurances */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 45-Minute Strategic Audit
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Direct Partner Access
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Non-Disclosure Protected
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
