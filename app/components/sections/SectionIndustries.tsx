"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useGsapScrollTrigger } from "../ui/useGsapScrollTrigger";

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

  // Editorial alternating card layout (portrait medium vs landscape hero) matching Designerpart
  const industries: IndustryItem[] = [
    {
      id: "real-estate",
      title: "Real Estate & Infra",
      subtitle:
        "Predictive asset valuation, automated underwriting synthesis, and AI-accelerated tenant journeys.",
      tag: "Commercial & Residential Infra",
      image: "/images/real_estate.jpg",
      widthClass: "w-[300px] sm:w-[380px] lg:w-[420px]",
      heightClass: "h-[380px] sm:h-[460px] lg:h-[500px]",
    },
    {
      id: "education",
      title: "Education & EdTech",
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
      id: "fmcg",
      title: "Retail, FMCG & Consumer",
      subtitle:
        "Demand sensing, automated multi-channel campaign generation, and dynamic inventory optimization.",
      tag: "Omnichannel Brands",
      image: "/images/fmcg.jpg",
      widthClass: "w-[480px] sm:w-[640px] lg:w-[780px]",
      heightClass: "h-[420px] sm:h-[520px] lg:h-[580px]",
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
    {
      id: "healthcare",
      title: "Healthcare & Life Sciences",
      subtitle:
        "Administrative clinical copilot automation, non-diagnostic workflow systems, and patient telemetry.",
      tag: "Health Systems & Clinical Care",
      image: "/images/hospital.jpg",
      widthClass: "w-[480px] sm:w-[640px] lg:w-[780px]",
      heightClass: "h-[420px] sm:h-[520px] lg:h-[580px]",
    },
    {
      id: "logistics",
      title: "Logistics & Warehousing",
      subtitle:
        "Autonomous freight routing, predictive warehouse robotics telemetry, and end-to-end supply visibility.",
      tag: "Global Supply Networks",
      image: "/images/warehouse.jpg",
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
      id="industries"
      className="w-full py-20 sm:py-28 bg-white relative overflow-hidden select-none"
    >
      {/* Header Container matching SectionSolutions width & margins */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 mb-10 sm:mb-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8">
          {/* Left: Typography matching Designerpart */}
          <div data-gsap="title" className="max-w-4xl">
            <h2 className="text-3xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-heading font-medium text-neutral-950 tracking-tight leading-[1.06]">
              We partner with businesses<br className="hidden sm:inline" /> and institutions across industries.
            </h2>
          </div>

          {/* Right: Clean Architectural Arrows matching Designerpart (No floating dot) */}
          <div className="flex items-center gap-6 sm:gap-8 shrink-0 pb-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`p-1 transition-all duration-200 focus:outline-none ${
                canScrollLeft
                  ? "text-neutral-950 hover:opacity-60 cursor-pointer"
                  : "text-neutral-300 cursor-not-allowed opacity-35"
              }`}
            >
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-200"
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
              className={`p-1 transition-all duration-200 focus:outline-none ${
                canScrollRight
                  ? "text-neutral-950 hover:opacity-60 cursor-pointer"
                  : "text-neutral-300 cursor-not-allowed opacity-35"
              }`}
            >
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-200"
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
