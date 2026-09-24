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
      image: "/images/Enterprise Business.jpg",
    },
    {
      num: "02",
      name: "Manufacturing & Industry",
      icon: Factory,
      context: "Capital-intensive production, supply chain networks, and complex logistics operations.",
      solution: "Predictive supply intelligence, automated maintenance scheduling, and real-time operational telemetry.",
      image: "/images/manufacturing.jpg",
    },
    {
      num: "03",
      name: "Retail & Omnichannel Brands",
      icon: ShoppingBag,
      context: "Customer-centric brands fighting high customer acquisition cost and inventory volatility.",
      solution: "Hyper-personalized marketing generation, intelligent merchandising, and automated inventory forecasting.",
      image: "/images/retail.jpg",
    },
    {
      num: "04",
      name: "Real Estate Developers",
      icon: Landmark,
      context: "High-value asset development, complex financing, and municipal approval cycles.",
      solution: "Automated underwriting synthesis, dynamic market intelligence, and AI-accelerated tenant journeys.",
      image: "/images/Real Estate Developers.jpg",
    },
    {
      num: "05",
      name: "Healthcare Institutions",
      icon: Stethoscope,
      context: "Strictly regulated clinical environments requiring HIPAA-compliant operational efficiency.",
      solution: "Administrative clinical copilot automation, non-diagnostic workflow optimization, and patient engagement.",
      image: "/images/Healthcare.jpg",
    },
    {
      num: "06",
      name: "Educational Organizations",
      icon: GraduationCap,
      context: "Academic networks and institutions adapting curricula and admissions to the AI century.",
      solution: "Adaptive learning systems, streamlined admissions operations, and institutional research copilots.",
      image: "/images/educational.jpg",
    },
    {
      num: "07",
      name: "Technology Companies",
      icon: Laptop,
      context: "Tech companies needing to evolve from SaaS point solutions to defensible AI-native platforms.",
      solution: "Strategic AI architecture reviews, agentic capability integration, and autonomous GTM workflows.",
      image: "/images/Technology.jpg",
    },
  ];

  // Duplicate for seamless infinite right-to-left marquee scrolling
  const marqueeCards = [...cohorts, ...cohorts];

  return (
    <section
      id="who-we-work-with"
      className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 w-full bg-transparent text-white relative isolate overflow-hidden"
    >
      <div className="corner-accent corner-plus top-6 left-6 sm:left-12 lg:left-16 text-neutral-600" />
      <div className="corner-accent corner-plus top-6 right-6 sm:right-12 lg:right-16 text-neutral-600" />

      {/* Editorial Header - Aligned to Navbar margins */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-start pt-2">
        <div className="lg:col-span-6">
          <h2 className="partners-title text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-white tracking-tight leading-[1.05] uppercase">
            WHO WE PARTNER WITH
          </h2>
        </div>

        <div className="partners-border lg:col-span-6 border-l border-white/20 pl-6 lg:pl-8">
          <p className="partners-text text-xl sm:text-2xl text-neutral-300 font-medium leading-snug">
            We work with organizations that see AI as a strategic advantage—not just another technology initiative.
          </p>
        </div>
      </div>

      {/* Ticker Subhead - Aligned to Navbar margins */}
      <div className="w-full mb-8 flex items-center justify-between">
        <h3 className="partners-title text-xl sm:text-2xl font-serif font-semibold text-white uppercase tracking-wider">
          OUR CLIENTS TYPICALLY INCLUDE:
        </h3>
        <span className="type-mono text-xs text-neutral-400 hidden sm:block">
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
                className="w-80 sm:w-[22rem] h-[26rem] sm:h-[29rem] shrink-0 rounded-2xl overflow-hidden relative group border border-amber-900/15 bg-neutral-900"
              >
                {/* Background Image */}
                <img
                  src={cohort.image}
                  alt={cohort.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform"
                />

                {/* Constant Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none" />

                {/* Card Header & Content Layout */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10 pointer-events-none">
                  {/* Heading & Hidden Reveal Text */}
                  <div className="flex flex-col gap-3 pointer-events-auto">
                    {/* Heading: Placed on top of image */}
                    <h4 className="text-2xl sm:text-3xl font-serif font-semibold text-white tracking-tight leading-snug group-hover:text-[#FF5E3F] transition-colors duration-200">
                      {cohort.name}
                    </h4>

                    {/* Reveal Text Container */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                      <div className="overflow-hidden">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pt-3 border-t border-white/20 flex flex-col gap-3">
                          <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                            {cohort.context}
                          </p>

                          <a
                            href="#why-aicceler8"
                            className="type-mono text-[11px] inline-flex items-center gap-1.5 text-[#FF5E3F] hover:text-white font-bold transition-colors pt-1"
                          >
                            <span>PARTNER WITH US</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
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

