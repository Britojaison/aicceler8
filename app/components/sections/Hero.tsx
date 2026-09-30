"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";

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
    <section id="home" ref={heroRef} className={styles.heroSection}>
      <div className={styles.contentWrapper} ref={contentRef}>
        <div className={styles.leftTextBlock}>
          <div className={styles.verticalLine} aria-hidden="true" />
          <p className={styles.paragraphText}>
            <strong>Growth reimagined, powered by intelligence.</strong>
            <span>
              AICCELER8 is the modern consulting partner built for the age of
              AI, where intelligence meets execution.
            </span>
          </p>
        </div>

        <div className={styles.hugeTextContainer}>
          <h1 className={styles.hugeText}>aicceler8</h1>
          <span className={styles.registeredMark} aria-hidden="true">®</span>
        </div>

        <div className={styles.bottomRightAction}>
          <button className={styles.actionButton} onClick={onOpenBooking}>
            Book a call
          </button>
        </div>

      </div>
    </section>
  );
}
