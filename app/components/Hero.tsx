"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    if (heroRef.current && bgImgRef.current && contentRef.current) {
      const ctx = gsap.context(() => {
        // Continuous Parallax Scroll on Hero Image & Content
        gsap.to(bgImgRef.current, {
          yPercent: 20,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(contentRef.current, {
          y: -40,
          opacity: 0.85,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }, heroRef);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        ctx.revert();
      };
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen h-screen flex flex-col justify-between pt-28 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-16 w-full overflow-hidden"
    >
      {/* Background Image - Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          ref={bgImgRef}
          src="/images/home.jpg"
          alt="AICceler8 Background"
          className="w-full h-full object-cover object-center scale-100 origin-center"
        />
        {/* Subtle Vignette gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />
      </div>

      {/* Top spacing element */}
      <div className="w-full" />

      {/* Grid crosshair corner accents */}
      <div className="corner-plus top-28 left-6 sm:left-12 lg:left-16 z-10" />
      <div className="corner-plus bottom-12 right-6 sm:right-12 lg:right-16 z-10" />

      {/* Bottom Layout: Heading on Bottom-Left, Paragraph & Buttons on Bottom-Right */}
      <div
        ref={contentRef}
        className="relative z-10 w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-4"
      >
        {/* Bottom Left: Headline */}
        <div className="max-w-2xl lg:max-w-3xl">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[7rem] font-serif font-medium text-white tracking-tight leading-[0.88] uppercase drop-shadow-md">
            BUILDING <br />
            <span
              className={`italic font-light transition-colors duration-700 ease-in-out ${
                isScrolled ? "text-burnt-peach" : "text-white"
              }`}
            >
              AI-POWERED
            </span> <br />
            ENTERPRISES.
          </h1>
        </div>

        {/* Bottom Right: Subheading Paragraph & CTA Buttons */}
        <div className="flex flex-col items-start max-w-md lg:max-w-lg gap-6">
          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed drop-shadow-sm">
            We help ambitious businesses redesign how they grow, operate and compete in an AI-first world.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-stretch gap-1 overflow-hidden transition-transform active:scale-[0.98]"
            >
              <div className="type-mono inline-flex items-center justify-center h-12 px-6 bg-burnt-peach hover:bg-burnt-peach-dark text-espresso-light font-bold text-xs transition-colors">
                <span>BOOK AN ENTERPRISE STRATEGY SESSION</span>
              </div>
              <div className="h-12 w-12 bg-burnt-peach hover:bg-burnt-peach-dark text-espresso-light grid place-items-center transition-colors">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>

            <a
              href="#how-we-transform"
              className="type-mono inline-flex items-center justify-center h-12 px-6 border border-white/60 hover:border-white text-white text-xs font-semibold backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <span>EXPLORE HOW WE TRANSFORM</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
