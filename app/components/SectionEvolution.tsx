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
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Precise Word-by-Word Reveal Animation
      tl.to(
        wordSpans,
        {
          opacity: 1,
          color: (_i, target: HTMLElement) =>
            target.dataset.brand === "true" ? "#FF5E3F" : "#0f0d0c",
          stagger: 0.04,
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
      .to(
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

      // Refresh ScrollTrigger after render layout stabilization
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);

      return () => clearTimeout(timer);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-aicceler8"
      className="w-full h-screen bg-[#FAF3EA] relative isolate overflow-hidden flex items-center justify-center border-t border-amber-900/10"
    >
      {/* Subtle orange ambient gradient effects in top-left and bottom-right corners */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FF5E3F]/40 via-[#FF5E3F]/18 to-transparent blur-[100px] pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#FF5E3F]/40 via-[#FF5E3F]/18 to-transparent blur-[100px] pointer-events-none z-0" />

      {/* Corner cross accents matching Hero margins */}
      <div className="corner-plus top-6 left-6 sm:left-12 lg:left-16 text-neutral-400 z-20" />
      <div className="corner-plus top-6 right-6 sm:right-12 lg:right-16 text-neutral-400 z-20" />

      {/* Main Text Content: 50% top image + 50% bottom text on Mobile & Tablet (< lg) */}
      <div
        ref={contentRef}
        className="w-full h-full lg:h-auto px-5 sm:px-10 lg:px-16 3xl:px-24 4xl:px-32 flex flex-col items-center lg:items-start justify-between lg:justify-start pt-14 sm:pt-16 pb-6 sm:pb-8 lg:pt-0 lg:pb-0 relative z-10"
      >
        {/* Top 50% Height Image Preview Card for Mobile & Tablet View (< lg) */}
        <div className="block lg:hidden w-full max-w-[500px] h-[38vh] sm:h-[42vh] max-h-[360px] rounded-2xl overflow-hidden shadow-xl border border-amber-900/20 shrink-0 mt-1 mb-2">
          <img
            src="/images/section2.jpg"
            alt="AICceler8 Transformation Preview"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Bottom 50% Height Word-by-Word Scroll Reveal Text */}
        <div className="w-full h-[45vh] lg:h-auto flex items-center lg:block">
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-[2.2rem] xl:text-[2.8rem] 2xl:text-[3.5rem] 3xl:text-[5.5rem] 4xl:text-[7.8rem] font-sans font-semibold tracking-tight leading-[1.38] sm:leading-[1.42] xl:leading-[1.52] 3xl:leading-[1.38] 4xl:leading-[1.35] text-left sm:text-justify">
            {/* First line paragraph indent spacer for Desktop ONLY */}
            <span className="hidden lg:inline-block w-[7rem] xl:w-[9rem] 2xl:w-[11rem] 3xl:w-[18rem] 4xl:w-[28rem]" />
            {words.map((word, wordIndex) => {
              const isBrandWord = word.toLowerCase().includes("aicceler8");
              const isLastWord = wordIndex === words.length - 1;

              if (isLastWord) {
                return (
                  <span key={wordIndex} className="inline-block whitespace-nowrap align-baseline">
                    <span
                      data-brand="false"
                      className="reveal-word inline-block opacity-15 text-[#c5b8ad] mr-[0.2em] sm:mr-[0.28em] align-baseline"
                    >
                      {word}
                    </span>
                    {/* Inline Image Capsule for Desktop view ONLY (lg+) */}
                    <span className="hidden lg:inline-block align-middle ml-4 3xl:ml-8 4xl:ml-12 w-44 xl:w-52 2xl:w-60 3xl:w-80 4xl:w-[28rem] h-24 xl:h-28 2xl:h-32 3xl:h-44 4xl:h-[15rem] rounded-xl 3xl:rounded-2xl 4xl:rounded-3xl overflow-hidden shadow-xl border border-amber-900/20 relative transition-transform duration-300">
                      <img
                        src="/images/section2.jpg"
                        alt="AICceler8 Transformation"
                        className="w-full h-full object-cover object-center"
                      />
                    </span>
                  </span>
                );
              }

              return (
                <span
                  key={wordIndex}
                  data-brand={isBrandWord ? "true" : "false"}
                  className="reveal-word inline-block opacity-15 text-[#c5b8ad] mr-[0.2em] sm:mr-[0.28em] align-baseline"
                >
                  {word}
                </span>
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
          className="absolute top-20 sm:top-28 lg:top-32 left-5 sm:left-12 lg:left-16 right-5 sm:right-12 lg:right-16 z-40 opacity-0 max-w-6xl"
        >
          <h2 className="text-2xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-white tracking-tight leading-[1.1] uppercase drop-shadow-2xl">
            <span className="block sm:whitespace-nowrap">
              {"FROM AI ADOPTION TO".split("").map((char, index) => (
                <span
                  key={index}
                  className="typewriter-char inline-block opacity-0"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            <span className="not-italic font-medium text-[#FF5E3F] block sm:whitespace-nowrap">
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

