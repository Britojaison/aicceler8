"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionApproach() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const contactSec = document.querySelector("#contact");
    if (!section || !contactSec) return;

    const ctx = gsap.context(() => {
      const prevNextBtns = section.querySelectorAll(".nav-arrow-btn");
      const cornerPlus = section.querySelectorAll(".corner-plus");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactSec,
          start: "top 95%",
          end: "top 65%",
          scrub: 0.3,
        },
      });

      tl.to(
        section,
        {
          backgroundColor: "#0d0d0d",
          color: "#ffffff",
          borderColor: "rgba(255, 255, 255, 0.1)",
          ease: "none",
        },
        0
      )
        .to(
          titleRef.current,
          {
            color: "#ffffff",
            ease: "none",
          },
          0
        )
        .to(
          prevNextBtns,
          {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            color: "#ffffff",
            ease: "none",
          },
          0
        )
        .to(
          cornerPlus,
          {
            color: "#FF5E3F",
            ease: "none",
          },
          0
        );
    }, section);

    return () => ctx.revert();
  }, []);

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
      bgColor: "bg-gradient-to-br from-[#2E1A15] via-[#4E2C23] to-[#FF5E3F]/40", // Deep Charcoal Espresso to Warm Burnt Peach Accent
      cardBorder: "border-[#FF5E3F]/30",
      accentText: "text-[#FF5E3F]",
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
      bgColor: "bg-gradient-to-br from-[#FF5E3F] via-[#e84d2e] to-[#4E2C23]", // Vivid Burnt Peach to Deep Espresso
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
      bgColor: "bg-gradient-to-tr from-[#1C1210] via-[#381c16] to-[#FF5E3F]/30", // Dark Espresso to Burnt Peach Highlight
      cardBorder: "border-[#FF5E3F]/30",
      accentText: "text-[#FF5E3F]",
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
      bgColor: "bg-gradient-to-tl from-[#381c16] via-[#e84d2e] to-[#FF5E3F]", // Terracotta to Burnt Peach to Dark Espresso Gradient
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
    <section
      ref={sectionRef}
      id="our-approach"
      className="py-12 sm:py-16 lg:py-20 2xl:py-24 4xl:py-36 px-6 sm:px-10 lg:px-16 3xl:px-24 4xl:px-32 w-full bg-[#FAF3EA] text-[#0c0c0c] relative isolate overflow-hidden border-t border-black/10"
    >
      {/* Corner cross accents */}
      <div className="corner-plus top-6 left-6 sm:left-10 lg:left-16 text-neutral-400" />
      <div className="corner-plus top-6 right-6 sm:right-10 lg:right-16 text-neutral-400" />

      {/* Header section matching brand guidelines */}
      <div className="w-full mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 relative z-10">
        <div>
          <span className="type-mono text-[#FF5E3F] block mb-2 sm:mb-3 font-semibold tracking-wider text-xs sm:text-xs md:text-sm uppercase">
            OUR APPROACH
          </span>
          <h2
            ref={titleRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-serif font-medium tracking-tight text-neutral-900 leading-[1.08] uppercase"
          >
            CHOSEN BY AGILE TEAMS. <br className="hidden sm:inline" />
            <span className="font-light italic text-[#FF5E3F]">OPERATING AT SCALE.</span>
          </h2>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handlePrev}
            aria-label="Previous step"
            className="nav-arrow-btn w-9 h-9 sm:w-10 sm:h-10 4xl:w-14 4xl:h-14 rounded-full border border-black/15 bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 4xl:w-7 4xl:h-7" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next step"
            className="nav-arrow-btn w-9 h-9 sm:w-10 sm:h-10 4xl:w-14 4xl:h-14 rounded-full border border-black/15 bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 4xl:w-7 4xl:h-7" />
          </button>
        </div>
      </div>

      {/* Accordion Gallery Track: Stacked vertical on Mobile & Tablet (< lg), Horizontal flex accordion on Desktop (lg+) */}
      <div className="w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 h-auto lg:h-[500px] xl:h-[540px] 2xl:h-[580px] 4xl:h-[720px] items-stretch transition-all duration-500 ease-in-out">
          {accordionItems.map((item, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out flex flex-col justify-between p-4 sm:p-5 lg:p-8 xl:p-10 border border-white/10 bg-[#141211] ${
                  isActive
                    ? "w-full lg:flex-[6] xl:flex-[7] shadow-2xl scale-[1.005] lg:scale-[1.01]"
                    : "w-full lg:flex-[0.6] xl:flex-[0.5] hover:opacity-95 shadow-md"
                }`}
              >
                {/* Background Image Layer: Full clear background for collapsed cards */}
                {!isActive && (
                  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Dark gradient for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
                  </div>
                )}

                {/* Collapsed Card Content: Full-width row bar on Mobile/Tablet (< lg), Vertical column on Desktop (lg+) */}
                {!isActive && (
                  <div className="w-full h-full flex flex-row lg:flex-col items-center lg:items-start justify-between text-white relative z-10 py-1 lg:py-0">
                    <div className="flex items-center gap-3 lg:block">
                      <span className="type-mono text-xs sm:text-xs lg:text-[11px] font-bold tracking-widest uppercase text-[#FF5E3F] block lg:mb-2 whitespace-nowrap">
                        {item.phase}
                      </span>
                      <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold font-sans tracking-tight text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <div className="lg:mt-auto">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Expanded Active Card Layout */}
                {isActive && (
                  <div className="w-full h-full flex flex-col justify-between text-white relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch h-full">
                      {/* Left Details Column */}
                      <div className="lg:col-span-5 flex flex-col justify-start h-full pt-1 sm:pt-2">
                        <div>
                          {/* Main Phase Title */}
                          <div className="type-mono text-xs sm:text-sm lg:text-sm font-bold tracking-widest uppercase text-[#FF5E3F] block mb-2 sm:mb-3 whitespace-nowrap">
                            {item.phase} // {item.title}
                          </div>
                          {/* Main Phase Description */}
                          <p className="text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl 4xl:text-2xl font-serif font-medium leading-relaxed text-white/95">
                            {item.quote}
                          </p>
                        </div>
                      </div>

                      {/* Right Image Frame */}
                      <div className="lg:col-span-7 h-52 sm:h-64 md:h-72 lg:h-full min-h-[220px] lg:min-h-[360px] relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
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
