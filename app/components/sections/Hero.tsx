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

      {/* Main Content */}
      <div className={styles.contentWrapper} ref={contentRef}>
        <div className={styles.centeredContent}>
          <h1 className={styles.headline}>
            <i>Growth Reimagined</i><br />
            <i>Powered by Intelligence</i>
          </h1>
          <p className={styles.subheadline}>
            AICCELER8 is the modern consulting partner built for the age of AI where intelligence meets execution.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>
              Talk to a Consultant
            </button>
            <button className={styles.secondaryButton}>
              Explore Our Services
            </button>
          </div>
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
