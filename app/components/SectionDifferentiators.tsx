"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles, Building2, Server, Megaphone } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionDifferentiators() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridOverlayRef = useRef<HTMLDivElement>(null);

  const verticalGridRef = useRef<HTMLDivElement>(null);
  const horizontalGridRef = useRef<HTMLDivElement>(null);

  const dimensions = [
    "Primary Objective",
    "Implementation Depth",
    "Workforce Enablement",
    "Continuous Evolution",
    "Accountability for Outcomes",
  ];

  const options = [
    {
      id: "aicceler8",
      name: "AICceler8 Partnership",
      icon: Sparkles,
      isHero: true,
      cells: [
        "Compounding enterprise revenue, EBITDA & operational leverage",
        "End-to-end custom systems engineered into daily operations",
        "Embedded executive coaching & departmental AI copilots",
        "Continuous monthly model sync, optimization & governance",
        "Absolute: measured by margin expansion & business growth",
      ],
    },
    {
      id: "consulting",
      name: "Traditional Consulting",
      icon: Building2,
      isHero: false,
      cells: [
        "Billable advisory hours & static slide decks",
        "Stops at strategy recommendations (hand-off to client)",
        "Generic workshop seminars",
        "Requires a new RFP / engagement contract",
        "Low (recommendations are advisory)",
      ],
    },
    {
      id: "vendors",
      name: "SaaS / AI Vendors",
      icon: Server,
      isHero: false,
      cells: [
        "Software licenses & raw API usage tokens",
        "Stops at software installation / generic APIs",
        "Self-serve documentation & knowledge bases",
        "Standard generic platform version bumps",
        "Zero (software SLA only)",
      ],
    },
    {
      id: "agencies",
      name: "Digital Agencies",
      icon: Megaphone,
      isHero: false,
      cells: [
        "One-off marketing campaigns & ad spend",
        "Stops at creative production & copy",
        "None (isolated agency delivery)",
        "Ad-hoc contract renewals",
        "Shallow vanity metrics (impressions, clicks)",
      ],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const vGrid = verticalGridRef.current;
    const hGrid = horizontalGridRef.current;
    if (!section || !vGrid || !hGrid) return;

    const ctx = gsap.context(() => {
      // Bind grid drafting animation to scroll scrub between top 80% and top 10% (finishing at 90% view)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 10%",
          scrub: 1.2,
        },
      });

      // 1. Vertical columns draw down top-to-bottom
      tl.fromTo(
        vGrid,
        {
          clipPath: "inset(0% 0% 100% 0%)",
          opacity: 0,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "none",
        }
      )
      // 2. Horizontal rows draw across left-to-right immediately following
      .fromTo(
        hGrid,
        {
          clipPath: "inset(0% 100% 0% 0%)",
          opacity: 0,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "none",
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-traditional-models"
      className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 2xl:px-16 w-full bg-[#FAF3EA] text-[#0c0c0c] relative isolate overflow-hidden border-t border-black/10"
    >
      {/* Corner cross accents */}
      <div className="corner-plus top-6 left-4 sm:left-6 lg:left-8 text-neutral-400" />
      <div className="corner-plus top-6 right-4 sm:right-6 lg:right-8 text-neutral-400" />

      {/* Darker Grid Pattern Background - Vertical lines draw top-to-bottom */}
      <div
        ref={verticalGridRef}
        className="absolute inset-0 bg-[linear-gradient(to_right,#0000001f_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-0"
      />

      {/* Darker Grid Pattern Background - Horizontal lines draw left-to-right */}
      <div
        ref={horizontalGridRef}
        className="absolute inset-0 bg-[linear-gradient(to_bottom,#0000001f_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-0"
      />

      {/* Header section */}
      <div className="w-full mb-8 sm:mb-10 lg:mb-12 text-center relative z-10">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium tracking-tight uppercase text-neutral-900 leading-[1.08]">
          WHY TRADITIONAL MODELS FALL SHORT
        </h2>
      </div>

      {/* Comparison Table Container in Light Mode */}
      <div className="w-full overflow-x-auto pb-3 [::-webkit-scrollbar]:h-1.5 [::-webkit-scrollbar-thumb]:bg-[#FF5E3F]/40 [::-webkit-scrollbar-thumb]:rounded-full relative z-10">
        <div className="w-full min-w-[760px] md:min-w-[820px] lg:min-w-0 flex flex-col gap-1 sm:gap-1.5">
          {/* Top Header Tabs - Light Mode Pills */}
          <div className="grid grid-cols-12 gap-1 sm:gap-1.5 items-stretch">
            {/* Column 0 spacer (Sticky on mobile/tablet) */}
            <div className="col-span-2 sticky left-0 z-30 bg-[#FAF3EA] border border-black/15 rounded-xl py-2 px-1 sm:px-1.5 text-center shadow-md lg:shadow-sm flex items-center justify-center lg:static">
              <span className="type-mono text-[9px] sm:text-[10px] lg:text-[11px] xl:text-xs font-extrabold text-neutral-900 tracking-wider uppercase">
                MODEL OPTIONS
              </span>
            </div>

            {/* Columns 1-5 Header Pills */}
            {dimensions.map((dim, idx) => (
              <div
                key={idx}
                className="col-span-2 bg-[#FAF3EA] border border-black/15 rounded-xl py-2 px-1 sm:px-1.5 text-center shadow-sm h-full flex items-center justify-center"
              >
                <span className="type-mono text-[8.5px] sm:text-[9.5px] lg:text-[10.5px] xl:text-xs font-extrabold text-neutral-900 tracking-wider uppercase text-center leading-tight">
                  {dim}
                </span>
              </div>
            ))}
          </div>

          {/* Option Rows */}
          {options.map((option) => {
            const Icon = option.icon;

            if (option.isHero) {
              {/* Row 1: Highlighted Red Hero Row (Light Mode Coral background with dark text) */}
              return (
                <div
                  key={option.id}
                  className="grid grid-cols-12 gap-1 sm:gap-1.5 items-stretch bg-[#FF5E3F] rounded-2xl p-1 sm:p-1.5 lg:p-2 shadow-lg border border-[#E0482B] relative group"
                >
                  {/* Left Cell: Brand Header (Sticky on mobile/tablet) */}
                  <div className="col-span-2 sticky left-0 z-20 bg-[#FF5E3F] lg:bg-white/30 backdrop-blur-sm rounded-xl p-1.5 sm:p-2 lg:p-2.5 flex items-center gap-1.5 sm:gap-2 border border-white/40 shadow-md lg:shadow-none lg:static">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-lg bg-white text-[#FF5E3F] flex items-center justify-center shrink-0 shadow-md font-bold">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-[11px] sm:text-xs lg:text-[12px] xl:text-sm font-sans font-extrabold text-white leading-tight">
                      {option.name}
                    </span>
                  </div>

                  {/* 5 Content Cells */}
                  {option.cells.map((cellText, cellIdx) => (
                    <div
                      key={cellIdx}
                      className="col-span-2 bg-white/20 backdrop-blur-sm rounded-xl p-1.5 sm:p-2 lg:p-2.5 flex items-center justify-center text-center border border-white/30"
                    >
                      <span className="text-[9.5px] sm:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm font-sans font-bold text-white leading-snug">
                        {cellText}
                      </span>
                    </div>
                  ))}
                </div>
              );
            }

            {/* Light Option Rows (Light Cream / White background cards with subtle dark borders) */}
            return (
              <div
                key={option.id}
                className="grid grid-cols-12 gap-1 sm:gap-1.5 items-stretch bg-[#F4ECE1] rounded-2xl p-1 sm:p-1.5 lg:p-2 border border-black/10 shadow-sm group hover:bg-[#eee4d7] transition-colors"
              >
                {/* Left Cell: Brand / Model Option (Sticky on mobile/tablet) */}
                <div className="col-span-2 sticky left-0 z-20 bg-[#EBE0D2] rounded-xl p-1.5 sm:p-2 lg:p-2.5 flex items-center gap-1.5 sm:gap-2 border border-black/5 shadow-md lg:shadow-none lg:static">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-lg bg-[#FAF3EA] text-neutral-900 flex items-center justify-center shrink-0 border border-black/10 shadow-xs">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs lg:text-[12px] xl:text-sm font-sans font-extrabold text-neutral-900 leading-tight">
                    {option.name}
                  </span>
                </div>

                {/* 5 Content Cells */}
                {option.cells.map((cellText, cellIdx) => (
                  <div
                    key={cellIdx}
                    className="col-span-2 bg-[#FAF3EA]/90 rounded-xl p-1.5 sm:p-2 lg:p-2.5 flex items-center justify-center text-center border border-black/5"
                  >
                    <span className="text-[9.5px] sm:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm font-sans font-semibold text-neutral-800 leading-snug">
                      {cellText}
                    </span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
