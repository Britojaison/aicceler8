"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import WavingPortfolioLanding from "@/components/ui/waving-portfolio-landing";
import ParticleWave from "../ui/ParticleWave";
import styles from "./Hero.module.css";
import { Sparkles, LayoutTemplate } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  // Mode toggle between Waving Portfolio Landing poster and the classic editorial hero
  const [heroMode, setHeroMode] = useState<"waving" | "classic">("waving");

  // GSAP animation refs for classic mode
  const heroRef = useRef<HTMLElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const trustRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heroMode !== "classic") return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        y: -15,
        autoAlpha: 0,
        duration: 0.6,
      })
        .from(
          headingRef.current,
          {
            y: 35,
            autoAlpha: 0,
            duration: 0.9,
          },
          "-=0.3"
        )
        .from(
          subheadingRef.current,
          {
            y: 20,
            autoAlpha: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          bodyRef.current,
          {
            y: 20,
            autoAlpha: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
          {
            y: 15,
            autoAlpha: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.3"
        )
        .from(
          trustRef.current,
          {
            y: 15,
            autoAlpha: 0,
            duration: 0.7,
          },
          "-=0.2"
        )
        .from(
          rightColRef.current,
          {
            scale: 0.96,
            autoAlpha: 0,
            duration: 1.1,
          },
          0.2
        );
    }, heroRef);

    return () => ctx.revert();
  }, [heroMode]);

  return (
    <div className="relative w-full">
      {/* Mode Switcher Pill */}
      <div className="absolute top-24 right-4 sm:right-8 z-30 flex items-center bg-white/90 backdrop-blur-md border border-neutral-200/80 shadow-sm rounded-full p-1 text-xs">
        <button
          onClick={() => setHeroMode("waving")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-all ${
            heroMode === "waving"
              ? "bg-[#4E2C23] text-[#FFDA89] shadow-sm"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
          title="Show interactive Waving Poster Hero"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Poster Hero</span>
        </button>
        <button
          onClick={() => setHeroMode("classic")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-all ${
            heroMode === "classic"
              ? "bg-[#4E2C23] text-[#FFDA89] shadow-sm"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
          title="Show Classic Editorial Hero"
        >
          <LayoutTemplate className="w-3.5 h-3.5" />
          <span>Classic Hero</span>
        </button>
      </div>

      {heroMode === "waving" ? (
        <section className="relative w-full overflow-hidden bg-[#F8FAFC] pt-16 sm:pt-20">
          <WavingPortfolioLanding
            name="AICCELER8"
            year="2026"
            roles={["Enterprise AI", "Growth Partner"]}
            lettersLeft={["P", "F"]}
            giantLetter="O"
            lettersRight={["RT", "LIO"]}
            title="AICCELER8 - Building AI-Powered Enterprises"
            signature="AIC/CELER8"
            greeting="Hi there!"
            accent="#e2725B"
            paper="#F8FAFC"
            ink="#4E2C23"
            intro={true}
            height="calc(100vh - 4rem)"
          />

          {/* Floating Strategy Session Action */}
          <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-[#4E2C23] text-[#FFDA89] text-xs sm:text-sm font-semibold shadow-xl hover:bg-[#3B211A] transition-all hover:scale-105 active:scale-95 border border-[#e2725B]/40"
            >
              Book Strategy Session
            </button>
          </div>
        </section>
      ) : (
        <section ref={heroRef} className={styles.heroSection}>
          <div className={styles.gridContainer}>
            {/* Left Column: Freshworks-style Editorial Content */}
            <div className={styles.leftColumn}>
              {/* Badge */}
              <div ref={badgeRef} className={styles.badge}>
                <span className={styles.badgeDot} />
                <span>The Enterprise Growth Partner for the AI Era</span>
              </div>

              {/* Heading */}
              <h1 ref={headingRef} className={styles.heading}>
                Building <br />
                <span className={styles.headingItalic}>AI-Powered</span> <br />
                Enterprises.
              </h1>

              {/* Subheading and Body */}
              <p ref={subheadingRef} className={styles.subheading}>
                We help ambitious businesses redesign how they grow, operate and compete in an AI-first world.
              </p>
              <div ref={bodyRef} className={styles.bodyText}>
                <p>
                  We don’t implement AI for the sake of technology. We transform how organizations generate revenue, empower teams, accelerate decisions and scale globally by embedding AI into every critical business function.
                </p>
                <p className={styles.bodyTextSmall}>
                  Whether you’re modernizing operations, empowering your workforce or preparing for international expansion, AICceler8 becomes your strategic partner in building an enterprise that’s ready for tomorrow.
                </p>
              </div>

              {/* CTA Buttons */}
              <div ref={ctaRef} className={styles.ctaContainer}>
                <button
                  onClick={onOpenBooking}
                  className={styles.primaryButton}
                >
                  <span>Book an Enterprise Strategy Session</span>
                </button>
                <a
                  href="#how-we-transform"
                  className={styles.secondaryButton}
                >
                  <span>Explore How We Transform</span>
                </a>
              </div>

              {/* Trust Banner */}
              <div ref={trustRef} className={styles.trustBanner}>
                <p className={styles.trustTitle}>
                  Trusted by ambitious enterprises across industries
                </p>
                <div className={styles.trustLogos}>
                  <span className={styles.trustLogoSerif}>
                    Enterprise Leaders
                  </span>
                  <span className={styles.trustLogoSans}>
                    High-Growth Scaleups
                  </span>
                  <span className={styles.trustLogoNormal}>
                    Family Conglomerates
                  </span>
                  <span className={styles.trustLogoMono}>
                    PE Portfolios ($2.4B+)
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Freshworks Particle Wave Canvas */}
            <div ref={rightColRef} className={styles.rightColumn}>
              <ParticleWave />

              {/* Floating High-Impact Value Pill */}
              <div className={styles.floatingPillTop}>
                <div className={styles.pillHeader}>
                  <div className={styles.pillIcon}>10x</div>
                  <span className={styles.pillTitle}>Execution Leverage</span>
                </div>
                <p className={styles.pillDesc}>
                  AI as your operating system, not fragmented subscriptions.
                </p>
              </div>

              {/* Floating Metric Badge */}
              <div className={styles.floatingPillBottom}>
                <div className={styles.pillHeader}>
                  <span className={styles.emeraldDot} />
                  <span className={styles.pillTitle}>Continuous AI Sync</span>
                </div>
                <p className={styles.pillDesc}>
                  Enterprise growth roadmaps designed around measurable outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
