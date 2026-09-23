"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionEvolution() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imgCardRef = useRef<HTMLDivElement>(null);
  const headingOverlayRef = useRef<HTMLDivElement>(null);

  const fullText =
    "Every company adopts AI tools, but few build AI-powered enterprises. Future leaders won't just use AI. They will redesign how they operate, compete, and scale. True transformation demands strategic leadership and organizational change. That is where AICceler8 comes in.";

  const words = fullText.split(" ");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const content = contentRef.current;
    const imgCard = imgCardRef.current;
    const headingOverlay = headingOverlayRef.current;

    if (!section || !content || !imgCard || !headingOverlay) return;

    const ctx = gsap.context(() => {
      const wordSpans = section.querySelectorAll<HTMLElement>(".reveal-word");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=150%",
          scrub: 0.3,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Precise Word-by-Word Reveal Animation (SS2 & SS3 style)
      tl.to(
        wordSpans,
        {
          opacity: 1,
          color: (_i, target: HTMLElement) =>
            target.dataset.brand === "true" ? "#E2725B" : "#0f0d0c",
          stagger: {
            each: 0.04,
            ease: "none",
          },
          duration: 0.1,
          ease: "none",
        }
      )
      // 2. Text gently fades out
      .to(
        content,
        {
          opacity: 0,
          y: -30,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "+=0.1"
      )
      // 3. Fast image expansion to full screen
      .fromTo(
        imgCard,
        {
          opacity: 0,
          scale: 0.35,
          borderRadius: "2rem",
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          borderRadius: "0rem",
          y: 0,
          width: "100vw",
          height: "100vh",
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.2"
      )
      // 4. Reveal heading overlay box and animate letters one by one like a typewriter
      tl.to(
        headingOverlay,
        {
          opacity: 1,
          duration: 0.1,
        },
        "-=0.2"
      )
      .to(
        section.querySelectorAll(".typewriter-char"),
        {
          opacity: 1,
          stagger: 0.015,
          duration: 0.05,
          ease: "none",
        },
        "<"
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-aicceler8"
      className="w-full h-screen bg-[#FAF3EA] relative isolate overflow-hidden flex items-center justify-center border-t border-amber-900/10"
    >
      {/* Corner cross accents matching Hero margins */}
      <div className="corner-plus top-6 left-6 sm:left-12 lg:left-16 text-neutral-400 z-20" />
      <div className="corner-plus top-6 right-6 sm:right-12 lg:right-16 text-neutral-400 z-20" />

      {/* Main Text Content */}
      <div
        ref={contentRef}
        className="w-full px-6 sm:px-12 lg:px-16 flex flex-col gap-3 sm:gap-4 relative z-10"
      >
        {/* Label */}
        <div>
          <span className="type-mono text-[11px] font-bold tracking-[0.25em] text-neutral-400 uppercase select-none">
            WHY{" "}
          </span>
          <span className="type-mono text-[11px] font-bold tracking-[0.25em] text-[#E2725B] uppercase select-none">
            AICCELER8
          </span>
        </div>

        {/* Full-width Word-by-Word Scroll Reveal Text */}
        <div className="w-full">
          <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-[4.2rem] 2xl:text-[4.8rem] font-sans font-semibold tracking-tight leading-[1.44] text-left">
            {/* First line paragraph indent spacer */}
            <span className="inline-block w-[7rem] sm:w-[12rem] lg:w-[16rem] xl:w-[22rem]" />
            {words.map((word, wordIndex) => {
              const isBrandWord = word.toLowerCase().includes("aicceler8");
              const isLastWord = wordIndex === words.length - 1;

              return (
                <React.Fragment key={wordIndex}>
                  <span
                    data-brand={isBrandWord ? "true" : "false"}
                    className="reveal-word inline-block opacity-15 text-[#c5b8ad] mr-[0.26em]"
                  >
                    {word}
                  </span>
                  {isLastWord && (
                    <span className="inline-block align-middle ml-3 sm:ml-5 w-32 sm:w-44 lg:w-56 xl:w-64 h-20 sm:h-24 lg:h-28 xl:h-32 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-amber-900/20 relative transition-transform duration-300 my-1">
                      <img
                        src="/images/section2.jpg"
                        alt="AICceler8 Transformation"
                        className="w-full h-full object-cover object-center"
                      />
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </p>
        </div>
      </div>

      {/* Full-Screen Bleed Image Overlay */}
      <div
        ref={imgCardRef}
        className="absolute inset-0 z-30 pointer-events-none overflow-hidden opacity-0 origin-center flex items-center justify-center"
      >
        <img
          src="/images/section2.jpg"
          alt="Full Screen AI Transformation"
          className="w-full h-full object-cover object-center"
        />
        {/* Ambient Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#0c0c0c]/90 z-10" />

        {/* Smooth Blend at the Bottom into SectionPillars */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-40 bg-gradient-to-b from-transparent via-[#0c0c0c]/80 to-[#0c0c0c] z-20" />

        {/* Heading Overlay on Top Left with Typewriter Letter-by-Letter Reveal */}
        <div
          ref={headingOverlayRef}
          className="absolute top-20 sm:top-28 lg:top-32 left-6 sm:left-12 lg:left-16 right-6 sm:right-12 lg:right-16 z-40 opacity-0 max-w-6xl"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-white tracking-tight leading-[1.1] uppercase drop-shadow-2xl">
            <span className="block whitespace-nowrap">
              {"FROM AI ADOPTION TO".split("").map((char, index) => (
                <span
                  key={index}
                  className="typewriter-char inline-block opacity-0"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            <span className="not-italic font-medium text-[#E2725B] block whitespace-nowrap">
              {"ENTERPRISE TRANSFORMATION.".split("").map((char, index) => (
                <span
                  key={index}
                  className="typewriter-char inline-block opacity-0"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

