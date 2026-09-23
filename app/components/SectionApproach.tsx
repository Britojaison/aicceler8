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
        "We evaluate existing workflows, operational bottlenecks, data readiness, and high-impact revenue levers to map immediate ROI.",
      author: "Executive Sizing",
      role: "Phase 01 Audit Matrix",
      stat: "100%",
      statLabel: "Workflow Visibility",
      bgColor: "bg-gradient-to-br from-[#2E1A15] via-[#4E2C23] to-[#E2725B]/40", // Deep Charcoal Espresso to Warm Burnt Peach Accent
      cardBorder: "border-[#E2725B]/30",
      accentText: "text-[#E2725B]",
      image: "/accordion_1.jpg",
    },
    {
      id: "design",
      phase: "Phase 02",
      title: "Design",
      logoName: "BLUEPRINT ARCHITECTURE",
      quote:
        "Create an AI transformation blueprint aligned with business goals. We map intelligent architectures, governance frameworks, and measurable growth benchmarks.",
      author: "System Architecture",
      role: "Phase 02 Custom Blueprint",
      stat: "3.8x",
      statLabel: "Deployment Speed",
      bgColor: "bg-gradient-to-br from-[#E2725B] via-[#d65f46] to-[#4E2C23]", // Vivid Burnt Peach to Deep Espresso
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
        "Develop intelligent systems, workflows and enterprise capabilities. Everything is custom-engineered to integrate seamlessly into daily operations.",
      author: "Custom Engineering",
      role: "Phase 03 Integration Pipeline",
      stat: "10+",
      statLabel: "Systems Consolidated",
      bgColor: "bg-gradient-to-tr from-[#1C1210] via-[#381c16] to-[#E2725B]/30", // Dark Espresso to Burnt Peach Highlight
      cardBorder: "border-[#E2725B]/30",
      accentText: "text-[#E2725B]",
      image: "/accordion_2.jpg",
    },
    {
      id: "enable",
      phase: "Phase 04",
      title: "Enable",
      logoName: "WORKFORCE ENABLEMENT",
      quote:
        "Empower workforce and leadership to use AI effectively. We conduct embedded workshops, deploy departmental copilots, and establish enterprise governance.",
      author: "Executive Coaching",
      role: "Phase 04 Organization Sync",
      stat: ">5k",
      statLabel: "Copilot executions / mo",
      bgColor: "bg-gradient-to-tl from-[#381c16] via-[#D8644D] to-[#E2725B]", // Terracotta to Burnt Peach to Dark Espresso Gradient
      cardBorder: "border-white/40",
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
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 h-auto md:h-[560px] lg:h-[600px] items-stretch transition-all duration-500 ease-in-out">
          {accordionItems.map((item, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out flex flex-col justify-between p-6 sm:p-8 lg:p-10 border ${item.cardBorder} ${item.bgColor} ${
                  isActive
                    ? "md:flex-[6] lg:flex-[7] shadow-2xl scale-[1.01]"
                    : "md:flex-[0.4] lg:flex-[0.5] hover:opacity-95 shadow-md"
                }`}
              >
                {/* Ambient Mesh Glow Effects */}
                <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#E2725B]/25 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#4E2C23]/40 blur-3xl pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none" />
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
                      <div className="lg:col-span-5 flex flex-col justify-start h-full pt-2 sm:pt-4">
                        <div>
                          {/* Main Phase Title */}
                          <div className="type-mono text-xs font-bold tracking-widest uppercase opacity-75 block mb-3 text-white">
                            {item.phase} // {item.title}
                          </div>
                          {/* Main Phase Description */}
                          <p className="text-base sm:text-lg lg:text-xl font-serif font-medium leading-relaxed text-white/95">
                            {item.quote}
                          </p>
                        </div>
                      </div>

                      {/* Right Placeholder Image Frame - Extended Length */}
                      <div className="lg:col-span-7 h-64 sm:h-80 lg:h-full min-h-[320px] lg:min-h-[440px] relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
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
