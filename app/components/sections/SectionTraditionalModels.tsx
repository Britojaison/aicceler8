"use client";

import React from "react";
import { Sparkles, FileText, Layers, Megaphone } from "lucide-react";
import { useGsapScrollTrigger } from "../ui/useGsapScrollTrigger";

interface ModelRow {
  model: string;
  icon: React.ElementType;
  isHighlight?: boolean;
  objective: string;
  depth: string;
  enablement: string;
  evolution: string;
  accountability: string;
}

const COMPARISON_DATA: ModelRow[] = [
  {
    model: "AICceler8 Partnership",
    icon: Sparkles,
    isHighlight: true,
    objective: "Compounding enterprise revenue, EBITDA & operational leverage",
    depth: "End-to-end custom systems engineered into daily operations",
    enablement: "Embedded executive coaching & departmental AI copilots",
    evolution: "Continuous monthly model sync, optimization & governance",
    accountability: "Absolute: measured by margin expansion & business growth",
  },
  {
    model: "Traditional Consulting",
    icon: FileText,
    objective: "Billable advisory hours & static slide decks",
    depth: "Stops at strategy recommendations (hand-off to client)",
    enablement: "Generic workshop seminars",
    evolution: "Requires a new RFP / engagement contract",
    accountability: "Low (recommendations are advisory)",
  },
  {
    model: "SaaS / AI Vendors",
    icon: Layers,
    objective: "Software licenses & raw API usage tokens",
    depth: "Stops at software installation / generic APIs",
    enablement: "Self-serve documentation & knowledge bases",
    evolution: "Standard generic platform version bumps",
    accountability: "Zero (software SLA only)",
  },
  {
    model: "Digital Agencies",
    icon: Megaphone,
    objective: "One-off marketing campaigns & ad spend",
    depth: "Stops at creative production & copy",
    enablement: "None (isolated agency delivery)",
    evolution: "Ad-hoc contract renewals",
    accountability: "Shallow vanity metrics (impressions, clicks)",
  },
];

const COLUMNS = [
  "MODEL OPTIONS",
  "PRIMARY OBJECTIVE",
  "IMPLEMENTATION DEPTH",
  "WORKFORCE ENABLEMENT",
  "CONTINUOUS EVOLUTION",
  "ACCOUNTABILITY FOR OUTCOMES",
];

export default function SectionTraditionalModels() {
  const sectionRef = useGsapScrollTrigger<HTMLElement>({ stagger: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="hows-aicceler8-better"
      className="relative w-full bg-[#F7F5F0] py-24 sm:py-32 lg:py-36 px-4 sm:px-8 lg:px-12 border-t border-neutral-300/40 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: "44px 44px",
      }}
    >
      {/* Corner crosshairs */}
      <div className="corner-plus top-8 left-8 text-[#FF5E3F] pointer-events-none select-none z-10" />
      <div className="corner-plus top-8 right-8 text-[#FF5E3F] pointer-events-none select-none z-10" />
      <div className="corner-plus bottom-8 left-8 text-[#FF5E3F] pointer-events-none select-none z-10" />
      <div className="corner-plus bottom-8 right-8 text-[#FF5E3F] pointer-events-none select-none z-10" />

      <div className="max-w-[1480px] mx-auto">
        {/* Title */}
        <div data-gsap="title" className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light tracking-tight text-neutral-900 uppercase">
            WHY TRADITIONAL MODELS FALL SHORT
          </h2>
        </div>

        {/* Scrollable Container for Matrix */}
        <div className="overflow-x-auto pb-6 scrollbar-thin">
          <div className="min-w-[1180px] space-y-3.5">
            {/* Header Columns */}
            <div className="grid grid-cols-6 gap-3.5 px-1">
              {COLUMNS.map((col) => (
                <div
                  key={col}
                  className="bg-[#EFECE6]/90 border border-neutral-300/50 rounded-2xl py-4 px-3 flex items-center justify-center text-center shadow-sm"
                >
                  <span className="text-[11px] font-mono font-bold tracking-wider text-neutral-800 uppercase">
                    {col}
                  </span>
                </div>
              ))}
            </div>

            {/* Matrix Data Rows */}
            {COMPARISON_DATA.map((row) => {
              const Icon = row.icon;
              const isHighlight = row.isHighlight;

              return (
                <div
                  key={row.model}
                  data-gsap="item"
                  className={`grid grid-cols-6 gap-3.5 p-2 rounded-2xl transition-all duration-300 ${
                    isHighlight
                      ? "bg-[#FF5E3F] text-white shadow-lg shadow-[#FF5E3F]/20"
                      : "bg-[#EFECE6]/90 border border-neutral-300/50 text-neutral-800 hover:bg-[#EAE6DE]"
                  }`}
                >
                  {/* Model Name */}
                  <div className="flex items-center gap-3 px-3 py-4">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isHighlight
                          ? "bg-white/20 text-white"
                          : "bg-white border border-neutral-200 text-neutral-800"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-sm font-bold tracking-tight ${
                        isHighlight ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      {row.model}
                    </span>
                  </div>

                  {/* Primary Objective */}
                  <div className="flex items-center px-3 py-4">
                    <p
                      className={`text-xs sm:text-[13px] leading-relaxed ${
                        isHighlight ? "text-white font-medium" : "text-neutral-700"
                      }`}
                    >
                      {row.objective}
                    </p>
                  </div>

                  {/* Implementation Depth */}
                  <div className="flex items-center px-3 py-4">
                    <p
                      className={`text-xs sm:text-[13px] leading-relaxed ${
                        isHighlight ? "text-white font-medium" : "text-neutral-700"
                      }`}
                    >
                      {row.depth}
                    </p>
                  </div>

                  {/* Workforce Enablement */}
                  <div className="flex items-center px-3 py-4">
                    <p
                      className={`text-xs sm:text-[13px] leading-relaxed ${
                        isHighlight ? "text-white font-medium" : "text-neutral-700"
                      }`}
                    >
                      {row.enablement}
                    </p>
                  </div>

                  {/* Continuous Evolution */}
                  <div className="flex items-center px-3 py-4">
                    <p
                      className={`text-xs sm:text-[13px] leading-relaxed ${
                        isHighlight ? "text-white font-medium" : "text-neutral-700"
                      }`}
                    >
                      {row.evolution}
                    </p>
                  </div>

                  {/* Accountability for Outcomes */}
                  <div className="flex items-center px-3 py-4">
                    <p
                      className={`text-xs sm:text-[13px] leading-relaxed ${
                        isHighlight ? "text-white font-medium" : "text-neutral-700"
                      }`}
                    >
                      {row.accountability}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
