"use client";

import React from "react";
import { Sparkles, Building2, Server, Megaphone } from "lucide-react";

export default function SectionDifferentiators() {
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

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16 w-full bg-[#FAF3EA] text-[#0c0c0c] relative isolate overflow-hidden border-t border-black/10">
      {/* Corner cross accents */}
      <div className="corner-plus top-6 left-6 sm:left-10 lg:left-16 text-neutral-400" />
      <div className="corner-plus top-6 right-6 sm:right-10 lg:right-16 text-neutral-400" />

      {/* Light subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Header section */}
      <div className="w-full mb-10 sm:mb-12 text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight uppercase text-neutral-900 leading-[1.08]">
          WHY TRADITIONAL MODELS FALL SHORT
        </h2>
      </div>

      {/* Comparison Table Container in Light Mode */}
      <div className="w-full overflow-x-auto [::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-10">
        <div className="w-full min-w-[900px] lg:min-w-0 flex flex-col gap-1.5 sm:gap-2">
          {/* Top Header Tabs - Light Mode Pills */}
          <div className="grid grid-cols-12 gap-1.5 sm:gap-2 items-center">
            {/* Column 0 spacer */}
            <div className="col-span-2 bg-[#FAF3EA] border border-black/15 rounded-xl py-2.5 px-3 text-center shadow-sm">
              <span className="type-mono text-[10px] sm:text-xs font-bold text-neutral-800 tracking-wider uppercase">
                MODEL OPTIONS
              </span>
            </div>

            {/* Columns 1-5 Header Pills */}
            {dimensions.map((dim, idx) => (
              <div
                key={idx}
                className="col-span-2 bg-[#FAF3EA] border border-black/15 rounded-xl py-2.5 px-2 text-center shadow-sm h-full flex items-center justify-center"
              >
                <span className="type-mono text-[10px] sm:text-[11px] font-bold text-neutral-900 tracking-wider uppercase text-center leading-tight">
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
                  className="grid grid-cols-12 gap-1.5 sm:gap-2 items-stretch bg-[#E2725B] rounded-2xl p-1.5 sm:p-2 shadow-lg border border-[#d25f48] relative group"
                >
                  {/* Left Cell: Brand Header */}
                  <div className="col-span-2 bg-white/30 backdrop-blur-sm rounded-xl p-2.5 sm:p-3.5 flex items-center gap-2 border border-white/40">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white text-[#E2725B] flex items-center justify-center shrink-0 shadow-md font-bold">
                      <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-sans font-bold text-white leading-tight">
                      {option.name}
                    </span>
                  </div>

                  {/* 5 Content Cells */}
                  {option.cells.map((cellText, cellIdx) => (
                    <div
                      key={cellIdx}
                      className="col-span-2 bg-white/20 backdrop-blur-sm rounded-xl p-2.5 sm:p-3.5 flex items-center justify-center text-center border border-white/30"
                    >
                      <span className="text-[11px] sm:text-xs font-sans font-bold text-white leading-snug">
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
                className="grid grid-cols-12 gap-1.5 sm:gap-2 items-stretch bg-[#F4ECE1] rounded-2xl p-1.5 sm:p-2 border border-black/10 shadow-sm group hover:bg-[#eee4d7] transition-colors"
              >
                {/* Left Cell: Brand / Model Option */}
                <div className="col-span-2 bg-[#EBE0D2] rounded-xl p-2.5 sm:p-3.5 flex items-center gap-2 border border-black/5">
                  <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-lg bg-[#FAF3EA] text-neutral-800 flex items-center justify-center shrink-0 border border-black/10 shadow-xs">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-sans font-bold text-neutral-900 leading-tight">
                    {option.name}
                  </span>
                </div>

                {/* 5 Content Cells */}
                {option.cells.map((cellText, cellIdx) => (
                  <div
                    key={cellIdx}
                    className="col-span-2 bg-[#FAF3EA]/80 rounded-xl p-2.5 sm:p-3.5 flex items-center justify-center text-center border border-black/5"
                  >
                    <span className="text-[11px] sm:text-xs font-sans font-medium text-neutral-700 leading-relaxed">
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
