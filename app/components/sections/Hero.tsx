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
      {/* Main Content */}
      <div className={styles.contentWrapper} ref={contentRef}>
        
        {/* Mid-Left Text */}
        <div className={styles.leftTextBlock}>
          <div className={styles.verticalLine}></div>
          <p className={styles.paragraphText}>
            <strong>Growth Reimagined Powered by Intelligence.</strong><br />
            AICCELER8 is the modern consulting partner built for the age of AI where intelligence meets execution.
          </p>
        </div>

        {/* Huge Bottom Text */}
        <div className={styles.hugeTextContainer}>
          <h1 className={styles.hugeText}>.aicceler8</h1>
          <span className={styles.registeredMark}>®</span>
        </div>

        {/* Bottom Right Button */}
        <div className={styles.bottomRightAction}>
          <button className={styles.actionButton} onClick={onOpenBooking}>
            BOOK A CALL
          </button>
        </div>

      </div>
    </section>
  );
}
