"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useGsapScrollTrigger } from "../ui/useGsapScrollTrigger";
import TextBlockAnimation from "../ui/text-block-animation";

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  widthClass: string;
  heightClass: string;
}

interface SectionIndustriesProps {
  onOpenBooking?: () => void;
}

export default function SectionIndustries({ onOpenBooking }: SectionIndustriesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useGsapScrollTrigger<HTMLElement>({ stagger: 0.08 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mouse drag-to-scroll state
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  // Industries list matching 07-who-we-work-with.png
  const industries: IndustryItem[] = [
    {
      id: "retail",
      title: "Retail & Omnichannel Brands",
      subtitle:
        "Demand sensing, automated multi-channel campaign generation, and dynamic inventory optimization.",
      tag: "Omnichannel Brands",
      image: "/images/fmcg.jpg",
      widthClass: "w-[300px] sm:w-[380px] lg:w-[420px]",
      heightClass: "h-[380px] sm:h-[460px] lg:h-[500px]",
    },
    {
      id: "real-estate",
      title: "Real Estate Developers",
      subtitle:
        "Predictive asset valuation, automated underwriting synthesis, and AI-accelerated tenant journeys.",
      tag: "Commercial & Residential Infra",
      image: "/images/real_estate.jpg",
      widthClass: "w-[300px] sm:w-[380px] lg:w-[420px]",
      heightClass: "h-[380px] sm:h-[460px] lg:h-[500px]",
    },
    {
      id: "healthcare",
      title: "Healthcare Institutions",
      subtitle:
        "Administrative clinical copilot automation, non-diagnostic workflow optimization, and patient telemetry.",
      tag: "Health Systems & Clinical Care",
      image: "/images/hospital.jpg",
      widthClass: "w-[300px] sm:w-[380px] lg:w-[420px]",
      heightClass: "h-[380px] sm:h-[460px] lg:h-[500px]",
    },
    {
      id: "education",
      title: "Educational Organizations",
      subtitle:
        "Adaptive institutional learning engines, autonomous admissions, and research copilot infrastructure.",
      tag: "Higher Ed & K-12 Ecosystems",
      image: "/images/school.jpg",
      widthClass: "w-[500px] sm:w-[680px] lg:w-[820px]",
      heightClass: "h-[420px] sm:h-[520px] lg:h-[580px]",
    },
    {
      id: "fintech",
      title: "Financial Services & Fintech",
      subtitle:
        "Real-time regulatory compliance, autonomous risk modeling, and algorithmic wealth intelligence.",
      tag: "Banking & Capital Markets",
      image: "/images/fintech.jpg",
      widthClass: "w-[320px] sm:w-[400px] lg:w-[450px]",
      heightClass: "h-[380px] sm:h-[460px] lg:h-[500px]",
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Industry",
      subtitle:
        "Autonomous freight routing, predictive warehouse robotics telemetry, and end-to-end supply visibility.",
      tag: "Capital-Intensive Operations",
      image: "/images/warehouse.jpg",
      widthClass: "w-[320px] sm:w-[400px] lg:w-[450px]",
      heightClass: "h-[380px] sm:h-[460px] lg:h-[500px]",
    },
    {
      id: "government",
      title: "Government & Public Sector",
      subtitle:
        "Civic modernization, intelligent citizen service portals, and sovereign data governance architectures.",
      tag: "Public Sector Modernization",
      image: "/images/government.jpg",
      widthClass: "w-[320px] sm:w-[400px] lg:w-[450px]",
      heightClass: "h-[380px] sm:h-[460px] lg:h-[500px]",
    },
  ];

  // Update arrow states based on scroll position
  const checkScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScrollState();
    el.addEventListener("scroll", checkScrollState, { passive: true });
    window.addEventListener("resize", checkScrollState);

    return () => {
      el.removeEventListener("scroll", checkScrollState);
      window.removeEventListener("resize", checkScrollState);
    };
  }, [checkScrollState]);

  // Arrow navigation click handlers
  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = Math.min(el.clientWidth * 0.75, 700);
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const el = scrollContainerRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    if (Math.abs(walk) > 5) {
      hasMovedRef.current = true;
    }
    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (hasMovedRef.current) {
      e.preventDefault();
      return;
    }
    onOpenBooking?.();
  };

  return (
    <section
      ref={sectionRef}
      id="who-we-partner-with"
      className="w-full py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden select-none"
    >
      {/* Header Container matching 07-who-we-work-with.png */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 mb-8 sm:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 pb-6 border-b border-neutral-300/60">
          {/* Left: Heading matching 07-who-we-work-with.png */}
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-sans font-bold text-neutral-950 uppercase tracking-tight leading-[0.98]">
              WHO WE PARTNER <br />
              WITH
            </h2>
          </div>

          {/* Right: Subtitle & Arrows */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between lg:justify-end gap-6 sm:gap-10 max-w-xl">
            <div className="pl-0 sm:pl-6 sm:border-l border-neutral-300/80">
              <p className="text-base sm:text-lg lg:text-xl text-neutral-700 font-normal leading-relaxed">
                We work with organizations that see AI as a strategic advantage, not just another technology initiative.
              </p>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`p-2 transition-all duration-200 focus:outline-none ${
                  canScrollLeft
                    ? "text-neutral-950 hover:opacity-60 cursor-pointer"
                    : "text-neutral-300 cursor-not-allowed opacity-35"
                }`}
              >
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-200"
                  viewBox="0 0 40 24"
                  fill="none"
                >
                  <path
                    d="M36 12H4M14 4L4 12L14 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`p-2 transition-all duration-200 focus:outline-none ${
                  canScrollRight
                    ? "text-neutral-950 hover:opacity-60 cursor-pointer"
                    : "text-neutral-300 cursor-not-allowed opacity-35"
                }`}
              >
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-200"
                  viewBox="0 0 40 24"
                  fill="none"
                >
                  <path
                    d="M4 12H36M26 4L36 12L26 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Sub-bar: OUR CLIENTS TYPICALLY INCLUDE & DRAG TO EXPLORE */}
        <div className="flex items-center justify-between pt-6 text-xs font-mono font-bold tracking-wider text-neutral-800 uppercase">
          <span>OUR CLIENTS TYPICALLY INCLUDE:</span>
          <span className="text-neutral-400 font-normal hidden sm:inline">(SWIPE OR DRAG TO EXPLORE)</span>
        </div>
      </div>

      {/* Horizontal Carousel Track - mathematically aligned with max-w-[1600px] header */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="w-full overflow-x-auto scrollbar-none scroll-smooth cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: "calc(max(0px, (100vw - 1600px) / 2) + clamp(1rem, 3vw, 3rem))",
          paddingRight: "calc(max(0px, (100vw - 1600px) / 2) + clamp(1rem, 3vw, 3rem))",
        }}
      >
        <div className="inline-flex items-start gap-6 sm:gap-8 lg:gap-10 pb-6">
          {industries.map((item) => (
            <div
              key={item.id}
              data-gsap="item"
              onClick={handleCardClick}
              className={`group flex-shrink-0 cursor-pointer ${item.widthClass} transition-opacity duration-300`}
            >
              {/* Image Frame with custom editorial height & subtle hover zoom */}
              <div className={`relative w-full ${item.heightClass} overflow-hidden bg-neutral-100`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 820px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                  priority={item.id === "real-estate" || item.id === "education"}
                />
              </div>

              {/* Card Meta below image (1:1 Designerpart typography & layout) */}
              <div className="pt-5 sm:pt-6 pr-2">
                <h3 className="text-lg sm:text-xl lg:text-[1.35rem] font-heading font-bold text-neutral-950 tracking-tight transition-colors duration-200 group-hover:text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-[0.95rem] text-neutral-600 font-normal leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
