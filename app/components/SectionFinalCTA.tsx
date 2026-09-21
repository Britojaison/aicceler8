"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface SectionFinalCTAProps {
  onOpenBooking: () => void;
}

export default function SectionFinalCTA({ onOpenBooking }: SectionFinalCTAProps) {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-20 w-full bg-espresso-deep border-t border-burnt-peach/20 relative isolate overflow-hidden">
      <div className="corner-plus top-6 left-6" />
      <div className="corner-plus top-6 right-6" />

      {/* Embedded Dark Showcase Card */}
      <div className="max-w-7xl mx-auto relative rounded-2xl overflow-hidden bg-hero-gradient text-foreground p-10 sm:p-16 lg:p-20 shadow-2xl border border-burnt-peach/30">

        <div className="relative z-10 max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 type-mono text-[10px] px-3.5 py-1.5 rounded bg-burnt-peach/20 border border-burnt-peach/40 text-burnt-peach mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-burnt-peach animate-pulse" />
            <span>EXECUTIVE ENGAGEMENT</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground tracking-tight leading-[1.12] mb-6 uppercase">
            THE FUTURE WON’T BE BUILT BY COMPANIES THAT SIMPLY USE AI. <br />
            <span className="italic font-light text-burnt-peach">
              IT WILL BE BUILT BY COMPANIES THAT REINVENT THEMSELVES AROUND IT.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-foreground/80 font-normal leading-relaxed mb-10">
            Whether you’re exploring AI for the first time or scaling transformation across your organization, AICceler8 partners with you to build a business that is ready for the next decade.
          </p>

          {/* Dual Buttons (Performance Lab Block Style) */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-stretch gap-1 overflow-hidden transition-transform active:scale-[0.98]"
            >
              <div className="type-mono inline-flex items-center justify-center h-14 px-7 bg-burnt-peach hover:bg-burnt-peach-light text-espresso-deep font-bold text-xs transition-colors">
                <span>BOOK AN ENTERPRISE GROWTH STRATEGY SESSION</span>
              </div>
              <div className="h-14 w-14 bg-burnt-peach hover:bg-burnt-peach-light text-espresso-deep grid place-items-center transition-colors">
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>

            <a
              href="#transformations"
              className="type-mono inline-flex items-center justify-center h-14 px-7 border border-burnt-peach/40 hover:border-burnt-peach text-soft-apricot text-xs font-semibold transition-all hover:bg-burnt-peach/10"
            >
              <span>EXPLORE TRANSFORMATIONS</span>
            </a>
          </div>

          {/* Assurances */}
          <div className="flex flex-wrap items-center gap-6 type-mono text-[10px] text-foreground/60">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-burnt-peach" /> 45-MINUTE STRATEGIC AUDIT
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-burnt-peach" /> DIRECT PARTNER ACCESS
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-burnt-peach" /> NON-DISCLOSURE PROTECTED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
