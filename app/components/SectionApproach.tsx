"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export default function SectionApproach() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const accordionItems = [
    {
      id: "discover",
      phase: "Phase 01",
      title: "Discover",
      logoName: "DISCOVERY & AUDIT",
      quote:
        "\"We evaluate existing workflows, operational bottlenecks, data readiness, and high-impact revenue levers to map immediate ROI.\"",
      author: "Executive Sizing",
      role: "Phase 01 Audit Matrix",
      stat: "100%",
      statLabel: "Workflow Visibility",
      bgColor: "bg-[#2A2421]", // Warm dark espresso
      cardBorder: "border-[#E2725B]/40",
      accentText: "text-[#E2725B]",
      image: "/accordion_1.jpg",
    },
    {
      id: "design",
      phase: "Phase 02",
      title: "Design",
      logoName: "BLUEPRINT ARCHITECTURE",
      quote:
        "\"Create an AI transformation blueprint aligned with business goals. We map intelligent architectures, governance frameworks, and measurable growth benchmarks.\"",
      author: "System Architecture",
      role: "Phase 02 Custom Blueprint",
      stat: "3.8x",
      statLabel: "Deployment Speed",
      bgColor: "bg-[#E2725B]", // Burnt Peach / Coral Hero color
      cardBorder: "border-white/30",
      accentText: "text-white",
      image: "/accordion_3.jpg",
    },
    {
      id: "build",
      phase: "Phase 03",
      title: "Build",
      logoName: "INTELLIGENT SYSTEMS",
      quote:
        "\"Develop intelligent systems, workflows and enterprise capabilities. Everything is custom-engineered to integrate seamlessly into daily operations.\"",
      author: "Custom Engineering",
      role: "Phase 03 Integration Pipeline",
      stat: "10+",
      statLabel: "Systems Consolidated",
      bgColor: "bg-[#1E1916]", // Dark charcoal espresso
      cardBorder: "border-[#E2725B]/40",
      accentText: "text-[#E2725B]",
      image: "/accordion_2.jpg",
    },
    {
      id: "enable",
      phase: "Phase 04",
      title: "Enable",
      logoName: "WORKFORCE ENABLEMENT",
      quote:
        "\"Empower workforce and leadership to use AI effectively. We conduct embedded workshops, deploy departmental copilots, and establish enterprise governance.\"",
      author: "Executive Coaching",
      role: "Phase 04 Organization Sync",
      stat: ">5k",
      statLabel: "Copilot executions / mo",
      bgColor: "bg-[#D8644D]", // Deep Terracotta
      cardBorder: "border-white/30",
      accentText: "text-white",
      image: "/accordion_4.jpg",
    },
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % accordionItems.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + accordionItems.length) % accordionItems.length);
  };

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 w-full bg-[#FAF3EA] text-[#0c0c0c] relative isolate overflow-hidden border-t border-black/10">
      {/* Corner cross accents */}
      <div className="corner-plus top-6 left-6 sm:left-10 lg:left-16 text-neutral-400" />
      <div className="corner-plus top-6 right-6 sm:right-10 lg:right-16 text-neutral-400" />

      {/* Light subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Header section matching brand guidelines */}
      <div className="w-full mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div>
          <span className="type-mono text-[#E2725B] block mb-3 font-semibold tracking-wider text-xs uppercase">
            OUR APPROACH
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-neutral-900 leading-[1.08] uppercase">
            CHOSEN BY AGILE TEAMS. <br className="hidden sm:inline" />
            <span className="font-light italic text-[#E2725B]">OPERATING AT SCALE.</span>
          </h2>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handlePrev}
            aria-label="Previous step"
            className="w-10 h-10 rounded-full border border-black/15 bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center transition-all shadow-xs active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next step"
            className="w-10 h-10 rounded-full border border-black/15 bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center transition-all shadow-xs active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Accordion Gallery Horizontal Track */}
      <div className="w-full relative z-10">
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 h-auto md:h-[500px] lg:h-[540px] items-stretch transition-all duration-500 ease-in-out">
          {accordionItems.map((item, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out flex flex-col justify-between p-6 sm:p-8 lg:p-10 border ${item.cardBorder} ${item.bgColor} ${
                  isActive
                    ? "md:flex-[4] lg:flex-[5] shadow-2xl"
                    : "md:flex-[0.8] lg:flex-[0.9] hover:opacity-95 shadow-md"
                }`}
              >
                {/* Collapsed Vertical/Compact Card Content */}
                {!isActive && (
                  <div className="h-full flex flex-col justify-between items-start text-white">
                    <div>
                      <span className="type-mono text-[11px] font-bold tracking-widest uppercase opacity-75 block mb-2">
                        {item.phase}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <div className="mt-auto">
                      <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Expanded Active Card Layout */}
                {isActive && (
                  <div className="h-full flex flex-col justify-between text-white relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch h-full">
                      {/* Left Details Column */}
                      <div className="lg:col-span-6 flex flex-col justify-between h-full">
                        <div>
                          {/* Logo / Badge */}
                          <div className="flex items-center gap-2 mb-6">
                            <span className="type-mono text-xs font-bold tracking-wider uppercase px-3 py-1 bg-black/25 rounded-full border border-white/20 text-white">
                              {item.logoName}
                            </span>
                          </div>

                          {/* Quote */}
                          <p className="text-base sm:text-lg lg:text-xl font-serif font-medium leading-relaxed mb-6 text-white/95">
                            {item.quote}
                          </p>

                          {/* Author & Role */}
                          <div className="mb-6">
                            <div className="text-sm sm:text-base font-bold text-white">
                              {item.author}
                            </div>
                            <div className="text-xs sm:text-sm text-white/75">
                              {item.role}
                            </div>
                          </div>

                          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white underline underline-offset-4 group">
                            <span>Read the story</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        </div>

                        {/* Stat Footer */}
                        <div className="mt-8 pt-6 border-t border-white/20">
                          <div className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                            {item.stat}
                          </div>
                          <div className="text-xs sm:text-sm text-white/80 mt-1 font-medium">
                            {item.statLabel}
                          </div>
                        </div>
                      </div>

                      {/* Right Placeholder Image Frame */}
                      <div className="lg:col-span-6 h-48 sm:h-64 lg:h-full relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
