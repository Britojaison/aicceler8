"use client";

import React from "react";
import {
  Building2,
  Rocket,
  Briefcase,
  Factory,
  ShoppingBag,
  Landmark,
  Stethoscope,
  GraduationCap,
  Laptop,
  Scale,
  Coins,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function SectionPartners() {
  const cohorts = [
    {
      num: "01",
      name: "Enterprise Businesses",
      icon: Building2,
      context: "Tier-1 enterprises navigating legacy tech debt and seeking compounding AI architecture.",
      solution: "Unify fragmented ERP/CRM data into autonomous knowledge systems and executive intelligence copilots.",
      image: "/images/pillar_strategy.jpg",
    },
    {
      num: "02",
      name: "High-Growth Scaleups",
      icon: Rocket,
      context: "Fast-moving Series B to Pre-IPO companies scaling headcount and product velocity rapidly.",
      solution: "Embed AI growth engines that multiply revenue per employee without proportional burn rate.",
      image: "/images/pillar_systems.jpg",
    },
    {
      num: "03",
      name: "Family Businesses & Conglomerates",
      icon: Briefcase,
      context: "Multi-generational organizations seeking modernization while safeguarding legacy equity.",
      solution: "Operationalize multi-business unit governance, automate compliance, and institute AI-first leadership.",
      image: "/images/pillar_enablement.jpg",
    },
    {
      num: "04",
      name: "Manufacturing & Industry",
      icon: Factory,
      context: "Capital-intensive production, supply chain networks, and complex logistics operations.",
      solution: "Predictive supply intelligence, automated maintenance scheduling, and real-time operational telemetry.",
      image: "/images/pillar_evolution.jpg",
    },
    {
      num: "05",
      name: "Retail & Omnichannel Brands",
      icon: ShoppingBag,
      context: "Customer-centric brands fighting high customer acquisition cost and inventory volatility.",
      solution: "Hyper-personalized marketing generation, intelligent merchandising, and automated inventory forecasting.",
      image: "/images/section2.jpg",
    },
    {
      num: "06",
      name: "Real Estate Developers",
      icon: Landmark,
      context: "High-value asset development, complex financing, and municipal approval cycles.",
      solution: "Automated underwriting synthesis, dynamic market intelligence, and AI-accelerated tenant journeys.",
      image: "/images/home.jpg",
    },
    {
      num: "07",
      name: "Healthcare Institutions",
      icon: Stethoscope,
      context: "Strictly regulated clinical environments requiring HIPAA-compliant operational efficiency.",
      solution: "Administrative clinical copilot automation, non-diagnostic workflow optimization, and patient engagement.",
      image: "/images/pillar_strategy.jpg",
    },
    {
      num: "08",
      name: "Educational Organizations",
      icon: GraduationCap,
      context: "Academic networks and institutions adapting curricula and admissions to the AI century.",
      solution: "Adaptive learning systems, streamlined admissions operations, and institutional research copilots.",
      image: "/images/pillar_systems.jpg",
    },
    {
      num: "09",
      name: "Technology Companies",
      icon: Laptop,
      context: "Tech companies needing to evolve from SaaS point solutions to defensible AI-native platforms.",
      solution: "Strategic AI architecture reviews, agentic capability integration, and autonomous GTM workflows.",
      image: "/images/pillar_enablement.jpg",
    },
    {
      num: "10",
      name: "Professional Services Firms",
      icon: Scale,
      context: "Legal, accounting, and advisory firms whose business model relies on knowledge leverage.",
      solution: "Proprietary research synthesis platforms, automated doc analysis, and high-margin advisory productization.",
      image: "/images/pillar_evolution.jpg",
    },
    {
      num: "11",
      name: "Private Equity-Backed Portfolios",
      icon: Coins,
      context: "Sponsors looking to accelerate EBITDA and operational efficiency across portfolio companies.",
      solution: "Cross-portfolio AI value creation playbooks, rapid automation sprints, and exit valuation acceleration.",
      image: "/images/section2.jpg",
    },
    {
      num: "12",
      name: "International Expansion Candidates",
      icon: Globe,
      context: "Ambitious enterprises expanding across the US, EMEA, GCC, and APAC regions.",
      solution: "AI-powered regulatory mapping, automated multi-lingual localization, and hyper-targeted cross-border GTM.",
      image: "/images/home.jpg",
    },
  ];

  // Duplicate for seamless infinite right-to-left marquee scrolling
  const marqueeCards = [...cohorts, ...cohorts];

  return (
    <section
      id="who-we-work-with"
      className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 w-full border-t border-amber-900/15 bg-[#FAF3EA] text-[#4E2C23] relative isolate overflow-hidden"
    >
      <div className="corner-plus top-6 left-6 sm:left-12 lg:left-16 text-neutral-400" />
      <div className="corner-plus top-6 right-6 sm:right-12 lg:right-16 text-neutral-400" />

      {/* Editorial Header - Aligned to Navbar margins */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-start pt-2">
        <div className="lg:col-span-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-[#381c16] tracking-tight leading-[1.05] uppercase">
            WHO WE PARTNER WITH
          </h2>
        </div>

        <div className="lg:col-span-6 border-l border-amber-900/20 pl-6 lg:pl-8">
          <p className="text-xl sm:text-2xl text-[#381c16] font-medium leading-snug">
            We work with organizations that see AI as a strategic advantage—not just another technology initiative.
          </p>
        </div>
      </div>

      {/* Ticker Subhead - Aligned to Navbar margins */}
      <div className="w-full mb-8 flex items-center justify-between">
        <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#381c16] uppercase tracking-wider">
          OUR CLIENTS TYPICALLY INCLUDE:
        </h3>
        <span className="type-mono text-xs text-neutral-500 hidden sm:block">
          (HOVER TO EXPLORE DETAILS)
        </span>
      </div>

      {/* Horizontal Right-to-Left Scrolling Reel - Full Bleed Edge-to-Edge */}
      <div className="-mx-6 sm:-mx-12 lg:-mx-16 overflow-hidden relative py-4">
        {/* Marquee Ticker Track */}
        <div className="flex gap-6 w-max animate-marquee-fast hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing px-6">
          {marqueeCards.map((cohort, idx) => {
            return (
              <div
                key={`${cohort.num}-${idx}`}
                className="w-80 sm:w-[22rem] h-[26rem] sm:h-[29rem] shrink-0 rounded-2xl overflow-hidden relative group border border-amber-900/15 bg-neutral-900 shadow-xl transition-all duration-500"
              >
                {/* Background Image */}
                <img
                  src={cohort.image}
                  alt={cohort.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Constant Gradient Overlay (No black box shift on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none" />

                {/* Card Header & Content Layout */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
                  {/* Heading & Hidden Reveal Text */}
                  <div className="flex flex-col gap-3">
                    {/* Heading: Placed on top of image */}
                    <h4 className="text-2xl sm:text-3xl font-serif font-semibold text-white tracking-tight leading-snug group-hover:text-[#E2725B] transition-colors duration-300">
                      {cohort.name}
                    </h4>

                    {/* Reveal Text Container */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-60 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden flex flex-col gap-3">
                      <div className="border-t border-white/20 pt-3">
                        <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                          {cohort.context}
                        </p>
                      </div>

                      <a
                        href="#why-aicceler8"
                        className="type-mono text-[11px] inline-flex items-center gap-1.5 text-[#E2725B] hover:text-white font-bold transition-colors pt-1"
                      >
                        <span>PARTNER WITH US</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

