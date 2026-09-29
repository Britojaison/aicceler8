"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ParticleWave from "../ui/ParticleWave";
import styles from "./Hero.module.css";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const trustRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
  }, []);

  return (
    <section ref={heroRef} className={styles.heroSection}>
      <div className={styles.gridContainer}>
        {/* Left Column: Freshworks-style Editorial Content */}
        <div className={styles.leftColumn}>
          {/* Badge */}
          <div ref={badgeRef} className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>The Enterprise Growth Partner for the AI Era</span>
          </div>

          {/* Heading from Aicceler8 Website.docx in Kobe Font */}
          <h1 ref={headingRef} className={styles.heading}>
            Building <br />
            <span className={styles.headingItalic}>
              AI-Powered
            </span> <br />
            Enterprises.
          </h1>

          {/* Subheading and Body from Aicceler8 Website.docx */}
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

          {/* CTA Buttons (Freshworks Pill Style) */}
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

          {/* Trust Banner (Aicceler8 Website.docx) */}
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
              <div className={styles.pillIcon}>
                10x
              </div>
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
  );
}
