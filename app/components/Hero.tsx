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
        {/* Subtle Vignette gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />
      </div>

      {/* Top spacing element */}
      <div className="w-full" />

      {/* Grid crosshair corner accents */}
      <div className="corner-plus top-28 left-6 sm:left-12 lg:left-16 z-10" />
      <div className="corner-plus bottom-16 sm:bottom-12 right-6 sm:right-12 lg:right-16 z-10" />

      {/* Bottom Layout: Heading on Bottom-Left, Paragraph & Buttons on Bottom-Right */}
      <div
        ref={contentRef}
        className="relative z-10 w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 sm:gap-6 xl:gap-10 pb-6 sm:pb-4 lg:pb-6"
      >
        {/* Bottom Left: Headline */}
        <div className="max-w-3xl lg:max-w-[540px] xl:max-w-5xl 3xl:max-w-7xl">
          <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] xl:text-[6.2rem] 2xl:text-[7rem] 3xl:text-[8.5rem] 4xl:text-[11rem] font-kobe font-normal text-white tracking-normal leading-[0.92] uppercase drop-shadow-md">
            BUILDING <br />
            <span
              className={`font-sans not-italic font-normal tracking-tight transition-colors duration-700 ease-in-out ${
                isScrolled ? "text-[#FF5E3F]" : "text-white"
              }`}
            >
              AI-POWERED
            </span> <br />
            ENTERPRISES.
          </h1>
        </div>

        {/* Bottom Right: Subheading Paragraph */}
        <div className="flex flex-col items-start max-w-xs sm:max-w-sm lg:max-w-[300px] xl:max-w-md 2xl:max-w-lg 3xl:max-w-xl gap-4 mb-2 sm:mb-3 lg:mb-4 shrink-0">
          <p className="text-sm sm:text-base lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl text-white/90 font-normal leading-relaxed drop-shadow-sm">
            We help ambitious businesses redesign how they grow, operate and compete in an AI-first world.
          </p>
        </div>
      </div>
    </section>
  );
}
