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
      className="relative min-h-screen h-screen flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 3xl:pt-36 pb-16 sm:pb-8 lg:pb-12 3xl:pb-16 px-6 sm:px-12 lg:px-16 3xl:px-24 4xl:px-32 w-full overflow-hidden"
    >
      {/* Background Image - Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div ref={bgImgRef} className="w-full h-full relative">
          <img
            src="/images/home_mobile.png"
            alt="AICceler8 Mobile Background"
            className="block sm:hidden w-full h-full object-cover object-center scale-100 origin-center"
          />
          <img
            src="/images/home.png"
            alt="AICceler8 Desktop Background"
            className="hidden sm:block w-full h-full object-cover object-center scale-100 origin-center"
          />
        </div>
        {/* Vignette gradient overlay — strong bottom fade covers image drip artifacts */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/40" />
      </div>

      {/* Top spacing element */}
      <div className="w-full" />



      {/* Bottom Layout: Heading on Bottom-Left, Paragraph on Bottom-Right matching 02-building-ai-powered-enterprise.png */}
      <div
        ref={contentRef}
        className="relative z-10 w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8 xl:gap-12 pb-6 sm:pb-4 lg:pb-8"
      >
        {/* Bottom Left: Headline */}
        <div className="max-w-4xl lg:max-w-[680px] xl:max-w-4xl 2xl:max-w-5xl">
          <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5.75rem] 2xl:text-[6.5rem] font-stara font-bold text-white tracking-tight leading-[0.98] uppercase">
            BUILDING <br />
            AI-POWERED <br />
            ENTERPRISES.
          </h1>
        </div>

        {/* Bottom Right: Subheading Paragraph */}
        <div className="flex flex-col items-start max-w-sm sm:max-w-md lg:max-w-[340px] xl:max-w-md mb-2 sm:mb-3 lg:mb-4 shrink-0">
          <p className="text-sm sm:text-base lg:text-[0.95rem] xl:text-base text-neutral-300 font-normal leading-relaxed drop-shadow-sm">
            We help ambitious businesses redesign how they grow, operate and compete in an AI-first world.
          </p>
        </div>
      </div>
    </section>
  );
}
