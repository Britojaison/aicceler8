"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Zap, Sparkles, Check } from "lucide-react";
import ParticleWave from "./ParticleWave";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const trustLogos = [
    { name: "Forbes", width: "w-20" },
    { name: "Ingram Micro", width: "w-24" },
    { name: "RingCentral", width: "w-24" },
    { name: "Mastercard Cohort", width: "w-24" },
    { name: "Databricks Scale", width: "w-24" },
  ];

  return (
    <section className="relative pt-32 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[580px] relative z-10">
        {/* Left Column: Freshworks-style Editorial Content */}
        <div className="lg:col-span-7 flex flex-col justify-center max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-medium w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-coral animate-pulse" />
            <span>The Enterprise Growth Partner for the AI Era</span>
          </div>

          {/* Heading with Signature Freshworks Italic Serif Emphasis */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-normal text-neutral-950 tracking-tight leading-[1.08] mb-6">
            Turn operational <br />
            complexity into <br />
            <span className="font-serif italic font-normal text-neutral-950">
              coordinated growth
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed mb-8 max-w-xl">
            Built for ambitious enterprises, AICceler8 transforms how organizations generate revenue, empower teams, and scale globally by embedding AI into every critical business function.
          </p>

          {/* CTA Buttons (Freshworks Pill Style) */}
          <div className="flex flex-wrap items-center gap-3 mb-14">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white font-semibold text-sm tracking-normal transition-all shadow-sm active:scale-[0.98]"
            >
              <span>Book a strategy session</span>
            </button>
            <a
              href="#why-aicceler8"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 font-semibold text-sm border border-neutral-300 transition-all"
            >
              <span>Explore transformation model</span>
            </a>
          </div>

          {/* Trust Banner (Freshworks Style) */}
          <div className="border-t border-neutral-200/80 pt-6">
            <p className="text-xs font-medium text-neutral-500 mb-4 tracking-wide">
              Trusted by ambitious enterprises worldwide
            </p>
            <div className="flex flex-wrap items-center gap-8 text-neutral-400">
              <span className="font-serif text-lg font-bold text-neutral-800 tracking-tight">
                Forbes
              </span>
              <span className="font-sans text-sm font-extrabold uppercase tracking-widest text-neutral-700">
                INGRAM<span className="text-neutral-400">MICRO</span>
              </span>
              <span className="font-sans text-sm font-semibold tracking-wide text-neutral-700">
                RingCentral
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase">
                PE Portfolios ($2.4B+)
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Freshworks Particle Wave Canvas */}
        <div className="lg:col-span-5 relative h-[420px] sm:h-[500px] lg:h-[580px] w-full flex items-center justify-center">
          <ParticleWave />

          {/* Floating High-Impact Value Pill */}
          <div className="absolute top-12 right-4 sm:right-8 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-2xl p-4 shadow-xl shadow-neutral-900/5 max-w-[220px] animate-float z-10 hidden sm:block">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold">
                10x
              </div>
              <span className="text-xs font-semibold text-neutral-900">Execution Leverage</span>
            </div>
            <p className="text-[11px] text-neutral-500 leading-snug">
              AI as your operating system, not fragmented subscriptions.
            </p>
          </div>

          {/* Floating Metric Badge */}
          <div className="absolute bottom-16 left-0 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-2xl p-4 shadow-xl shadow-neutral-900/5 max-w-[230px] z-10 hidden sm:block">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-neutral-900">Continuous AI Sync</span>
            </div>
            <p className="text-[11px] text-neutral-500">
              Enterprise growth roadmaps designed around measurable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
