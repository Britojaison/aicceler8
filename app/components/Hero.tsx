"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-screen h-screen flex items-center pt-28 pb-16 px-6 sm:px-12 lg:px-20 w-full overflow-hidden bg-hero-gradient">
      {/* Background Image with Light Apricot Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/hero_bg.jpg"
          alt="AI Architecture Background"
          className="w-full h-full object-cover object-center opacity-15 mix-blend-multiply scale-105"
        />
        {/* Soft Apricot Vignette & Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep via-espresso-deep/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-deep/90 via-transparent to-espresso-deep/90" />
      </div>

      {/* Background Mesh Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-burnt-peach/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-burnt-peach/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid crosshair corner accents */}
      <div className="corner-plus top-28 left-6 sm:left-12 lg:left-20" />
      <div className="corner-plus bottom-12 right-6 sm:right-12 lg:right-20" />

      <div className="flex flex-col justify-center w-full relative z-10 max-w-4xl mx-auto">
        {/* Large Display Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-medium text-foreground tracking-tight leading-[0.92] mb-8 uppercase">
          BUILDING <br />
          <span className="italic font-light text-burnt-peach">
            AI-POWERED
          </span> <br />
          ENTERPRISES.
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-2xl text-foreground/85 font-normal leading-relaxed mb-10 max-w-2xl">
          We help ambitious businesses redesign how they grow, operate and compete in an AI-first world.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-stretch gap-1 overflow-hidden transition-transform active:scale-[0.98]"
          >
            <div className="type-mono inline-flex items-center justify-center h-14 px-7 bg-burnt-peach hover:bg-burnt-peach-dark text-espresso-light font-bold text-xs transition-colors">
              <span>BOOK AN ENTERPRISE STRATEGY SESSION</span>
            </div>
            <div className="h-14 w-14 bg-burnt-peach hover:bg-burnt-peach-dark text-espresso-light grid place-items-center transition-colors">
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </button>

          <a
            href="#how-we-transform"
            className="type-mono inline-flex items-center justify-center h-14 px-7 border border-burnt-peach/50 hover:border-burnt-peach text-foreground text-xs font-semibold transition-all hover:bg-burnt-peach/10"
          >
            <span>EXPLORE HOW WE TRANSFORM</span>
          </a>
        </div>
      </div>
    </section>
  );
}
