"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Zap, Sparkles, Check } from "lucide-react";
import ParticleWave from "../ui/ParticleWave";
import styles from "./Hero.module.css";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const trustLogos = [
    { name: "Forbes", width: "w-20" },
    { name: "Ingram Micro", width: "w-24" },
    { name: "RingCentral", width: "w-24" },
    { name: "Mastercard Cohort", width: "w-24" },
    { name: "Databricks Scale", width: "w-24" },
  ];

  return (
    <section className={styles.heroSection}>
      <div className={styles.gridContainer}>
        {/* Left Column: Freshworks-style Editorial Content */}
        <div className={styles.leftColumn}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>The Enterprise Growth Partner for the AI Era</span>
          </div>

          {/* Heading from Aicceler8 Website.docx in Kobe Font */}
          <h1 className={styles.heading}>
            Building <br />
            <span className={styles.headingItalic}>
              AI-Powered
            </span> <br />
            Enterprises.
          </h1>

          {/* Subheading and Body from Aicceler8 Website.docx */}
          <p className={styles.subheading}>
            We help ambitious businesses redesign how they grow, operate and compete in an AI-first world.
          </p>
          <div className={styles.bodyText}>
            <p>
              We don’t implement AI for the sake of technology. We transform how organizations generate revenue, empower teams, accelerate decisions and scale globally by embedding AI into every critical business function.
            </p>
            <p className={styles.bodyTextSmall}>
              Whether you’re modernizing operations, empowering your workforce or preparing for international expansion, AICceler8 becomes your strategic partner in building an enterprise that’s ready for tomorrow.
            </p>
          </div>

          {/* CTA Buttons (Freshworks Pill Style) */}
          <div className={styles.ctaContainer}>
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
          <div className={styles.trustBanner}>
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
        <div className={styles.rightColumn}>
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
