"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useGsapScrollTrigger } from "../ui/useGsapScrollTrigger";

interface ApproachPhase {
  num: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const PHASES: ApproachPhase[] = [
  {
    num: "01",
    tag: "PHASE 01 // DISCOVER",
    title: "Discover",
    description:
      "We evaluate existing workflows, operational bottlenecks, data readiness, and high-impact revenue levers to map immediate ROI.",
    image: "/accordion_1.jpg",
    alt: "Notebook and glasses depicting discovery phase",
  },
  {
    num: "02",
    tag: "PHASE 02 // DESIGN",
    title: "Design",
    description:
      "Create an AI transformation blueprint aligned with business goals. We map intelligent architectures, governance frameworks, and measurable growth benchmarks.",
    image: "/accordion_2.jpg",
    alt: "Wireframing and system architecture design",
  },
  {
    num: "03",
    tag: "PHASE 03 // BUILD",
    title: "Build",
    description:
      "Develop intelligent systems, workflows and enterprise capabilities. Everything is custom-engineered to integrate seamlessly into daily operations.",
    image: "/accordion_3.jpg",
    alt: "Software development and AI systems engineering",
  },
  {
    num: "04",
    tag: "PHASE 04 // ENABLE",
    title: "Enable",
    description:
      "Train leadership and teams to integrate AI into everyday work. We drive organizational adoption, establish governance models, and eliminate operational friction.",
    image: "/accordion_4.jpg",
    alt: "Team enablement, mobile workflows and adoption",
  },
];

export default function SectionApproach() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useGsapScrollTrigger<HTMLElement>({ stagger: 0.1 });

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? PHASES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === PHASES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      ref={sectionRef}
      id="our-approach"
      className="relative w-full bg-[#F4EFE6] py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 border-t border-neutral-300/40 overflow-hidden"
    >
      <div className="max-w-[1480px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 lg:mb-20">
          <div>
            <span className="text-xs sm:text-sm font-mono tracking-widest text-[#FF5E3F] font-bold uppercase block mb-4">
              OUR APPROACH
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans tracking-tight leading-[1.05] uppercase">
              <span className="font-bold text-neutral-900 block">CHOSEN BY AGILE TEAMS.</span>
              <span className="font-normal italic text-[#FF5E3F] block">OPERATING AT SCALE.</span>
            </h2>
          </div>

          {/* Prev / Next Navigation Buttons */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Previous Phase"
              className="w-12 h-12 rounded-full bg-white border border-neutral-300/70 shadow-sm flex items-center justify-center text-neutral-800 hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Phase"
              className="w-12 h-12 rounded-full bg-white border border-neutral-300/70 shadow-sm flex items-center justify-center text-neutral-800 hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4-Panel Interactive Accordion */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 min-h-[580px] lg:h-[620px] w-full">
          {PHASES.map((phase, idx) => {
            const isExpanded = activeIdx === idx;

            if (isExpanded) {
              return (
                <div
                  key={phase.num}
                  className="flex-[4] lg:flex-[3.5] bg-[#141416] rounded-3xl p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden shadow-2xl relative"
                >
                  {/* Left Column: Text */}
                  <div className="flex-1 flex flex-col justify-between z-10">
                    <div>
                      <span className="text-xs sm:text-sm font-mono tracking-widest text-[#FF5E3F] uppercase font-bold block mb-8">
                        {phase.tag}
                      </span>
                      <p className="text-xl sm:text-2xl lg:text-3xl font-sans font-light text-white leading-relaxed max-w-md">
                        {phase.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 hidden sm:flex items-center gap-3 text-neutral-400 text-xs font-mono">
                      <span>PHASE {phase.num} OF 04</span>
                      <span>·</span>
                      <span className="text-[#FF5E3F]">{phase.title}</span>
                    </div>
                  </div>

                  {/* Right Column: Image */}
                  <div className="flex-1 relative w-full min-h-[280px] lg:min-h-full rounded-2xl overflow-hidden shadow-inner border border-white/10">
                    <Image
                      src={phase.image}
                      alt={phase.alt}
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              );
            }

            // Collapsed Panel
            return (
              <button
                key={phase.num}
                onClick={() => setActiveIdx(idx)}
                className="flex-1 relative bg-[#141416] rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden group text-left cursor-pointer hover:bg-[#1a1a1e] min-h-[140px] lg:min-h-full shadow-lg"
              >
                {/* Background image preview with dark gradient overlay */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <Image
                    src={phase.image}
                    alt={phase.alt}
                    fill
                    className="object-cover object-center filter grayscale"
                  />
                  <div className="absolute inset-0 bg-[#141416]/80" />
                </div>

                {/* Top content */}
                <div className="relative z-10">
                  <span className="text-xs font-mono tracking-widest text-[#FF5E3F] uppercase font-bold block mb-3">
                    PHASE {phase.num}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">
                    {phase.title}
                  </h3>
                </div>

                {/* Bottom Round Arrow Button */}
                <div className="relative z-10 self-end">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#FF5E3F] group-hover:border-[#FF5E3F] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
