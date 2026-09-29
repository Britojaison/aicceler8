"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import AsciiBackground from "../ui/AsciiBackground";
import styles from "./Hero.module.css";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  isReady?: boolean;
}

export default function Hero({ onOpenBooking, isReady = true }: HeroProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const bottomBarRef = useRef<HTMLDivElement | null>(null);

  // GSAP entrance animation
  useEffect(() => {
    if (!isReady) return;

    const ctx = gsap.context(() => {
      if (contentRef.current && bottomBarRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          {
            y: 50,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.1,
            stagger: 0.15,
            ease: "power3.out",
          }
        );

        gsap.fromTo(
          bottomBarRef.current,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, [isReady]);

  return (
    <section ref={heroRef} className={styles.heroSection}>
      {/* Background Effect */}
      <div className={styles.backgroundContainer}>
        <AsciiBackground />
        <div className={styles.bgOverlay}></div>
      </div>

      {/* Main Content (Image & Text) */}
      <div className={styles.contentWrapper} ref={contentRef}>
        
        {/* Left Side: Image Card */}
        <div className={styles.imageCardContainer}>
          <div className={styles.imageCard}>
            <div className={styles.imageOverlayTopLeft}>ATHENA</div>
            <div className={styles.imageOverlayTopRight}>
              20:00 PM<br/>02:00 AM
            </div>
            {/* Fallback to logo or empty div, ideally an actual image */}
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}></div>
            </div>
          </div>
        </div>

        {/* Right Side: Big Typography */}
        <div className={styles.textContent}>
          <div className={styles.headlineContainer}>
            <div className={styles.aboutLabel}>(About us)</div>
            <h1 className={styles.headline}>
              We're AICceler8,<br />
              an AI-Powered Enterprise<br />
              Builder based globally.
            </h1>
          </div>
        </div>

      </div>

      {/* Bottom Controls */}
      <div className={styles.bottomBar} ref={bottomBarRef}>
        <div className={styles.bottomLeft}>
          / 2026 /
        </div>
        <div className={styles.bottomCenter}>
          Scroll down
        </div>
        <div className={styles.bottomRight}>
          <button className={styles.projectButton} onClick={onOpenBooking}>
            START THE PROJECT <ArrowUpRight className={styles.btnIcon} />
          </button>
        </div>
      </div>

      {/* Orange Marquee */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          <span className={styles.marqueeText}>© AICceler8 © AI Enterprise</span>
          <span className={styles.marqueeText}>© AICceler8 © AI Enterprise</span>
          <span className={styles.marqueeText}>© AICceler8 © AI Enterprise</span>
          <span className={styles.marqueeText}>© AICceler8 © AI Enterprise</span>
        </div>
      </div>
    </section>
  );
}
