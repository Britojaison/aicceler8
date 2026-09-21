"use client";

import React, { useState } from "react";
import { Building2, Rocket, Briefcase, Factory, ShoppingBag, Landmark, Stethoscope, GraduationCap, Laptop, Scale, Coins, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SectionPartners() {
  const [selectedCohort, setSelectedCohort] = useState<number>(0);

  const cohorts = [
    {
      name: "Enterprise Businesses",
      icon: Building2,
      context: "Tier-1 enterprises navigating legacy tech debt and seeking compounding AI architecture.",
      solution: "Unify fragmented ERP/CRM data into autonomous knowledge systems and executive intelligence copilots.",
      themeColor: "#F5AB26", // Warm Gold / Amber
    },
    {
      name: "High-Growth Scaleups",
      icon: Rocket,
      context: "Fast-moving Series B to Pre-IPO companies scaling headcount and product velocity rapidly.",
      solution: "Embed AI growth engines that multiply revenue per employee without proportional burn rate.",
      themeColor: "#FF5349", // Coral Red
    },
    {
      name: "Family Businesses & Conglomerates",
      icon: Briefcase,
      context: "Multi-generational organizations seeking modernization while safeguarding legacy equity.",
      solution: "Operationalize multi-business unit governance, automate compliance, and institute AI-first leadership.",
      themeColor: "#D628D8", // Fuchsia / Purple
    },
    {
      name: "Manufacturing & Industry",
      icon: Factory,
      context: "Capital-intensive production, supply chain networks, and complex logistics operations.",
      solution: "Predictive supply intelligence, automated maintenance scheduling, and real-time operational telemetry.",
      themeColor: "#6CB33F", // Fresh Green
    },
    {
      name: "Retail & Omnichannel Brands",
      icon: ShoppingBag,
      context: "Customer-centric brands fighting high customer acquisition cost and inventory volatility.",
      solution: "Hyper-personalized marketing generation, intelligent merchandising, and automated inventory forecasting.",
      themeColor: "#F5AB26",
    },
    {
      name: "Real Estate Developers",
      icon: Landmark,
      context: "High-value asset development, complex financing, and municipal approval cycles.",
      solution: "Automated underwriting synthesis, dynamic market intelligence, and AI-accelerated tenant journeys.",
      themeColor: "#2563EB",
    },
    {
      name: "Healthcare Institutions",
      icon: Stethoscope,
      context: "Strictly regulated clinical environments requiring HIPAA-compliant operational efficiency.",
      solution: "Administrative clinical copilot automation, non-diagnostic workflow optimization, and patient engagement.",
      themeColor: "#00C49F",
    },
    {
      name: "Educational Organizations",
      icon: GraduationCap,
      context: "Academic networks and institutions adapting curricula and admissions to the AI century.",
      solution: "Adaptive learning systems, streamlined admissions operations, and institutional research copilots.",
      themeColor: "#D628D8",
    },
    {
      name: "Technology Companies",
      icon: Laptop,
      context: "Tech companies needing to evolve from SaaS point solutions to defensible AI-native platforms.",
      solution: "Strategic AI architecture reviews, agentic capability integration, and autonomous GTM workflows.",
      themeColor: "#FF5349",
    },
    {
      name: "Professional Services Firms",
      icon: Scale,
      context: "Legal, accounting, and advisory firms whose business model relies on knowledge leverage.",
      solution: "Proprietary research synthesis platforms, automated doc analysis, and high-margin advisory productization.",
      themeColor: "#2563EB",
    },
    {
      name: "Private Equity-Backed Portfolios",
      icon: Coins,
      context: "Sponsors looking to accelerate EBITDA and operational efficiency across portfolio companies.",
      solution: "Cross-portfolio AI value creation playbooks, rapid automation sprints, and exit valuation acceleration.",
      themeColor: "#F5AB26",
    },
    {
      name: "International Expansion Candidates",
      icon: Globe,
      context: "Ambitious enterprises expanding across the US, EMEA, GCC, and APAC regions.",
      solution: "AI-powered regulatory mapping, automated multi-lingual localization, and hyper-targeted cross-border GTM.",
      themeColor: "#6CB33F",
    },
  ];

  const currentCohort = cohorts[selectedCohort];
  const CurrentIcon = currentCohort.icon;

  return (
    <section id="who-we-work-with" className="py-24 px-4 sm:px-6 lg:px-20 w-full border-t border-neutral-200/80 bg-neutral-50/40">
      {/* Editorial Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
        <div className="lg:col-span-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF5349] uppercase mb-4 block">
            SECTION FIVE // PARTNERS
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-neutral-950 tracking-tight leading-[1.08]">
            Who We Partner With
          </h2>
        </div>

        <div className="lg:col-span-6 space-y-3 border-l-2 border-neutral-200 pl-6 lg:pl-8">
          <p className="text-xl sm:text-2xl text-neutral-900 font-medium leading-snug">
            We work with organizations that see AI as a strategic advantage—not just another technology initiative.
          </p>
          <p className="text-base text-neutral-600 font-normal leading-relaxed">
            Our clients range from market-leading enterprise conglomerates to high-growth businesses preparing for international scale.
          </p>
        </div>
      </div>

      {/* Strategic Mindset Banner (Editorial Quote Card) */}
      <div className="mb-16 rounded-3xl bg-white border border-neutral-200/90 p-8 sm:p-12 lg:p-14 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF5349] via-[#F5AB26] to-[#6CB33F]" />
        <div className="max-w-4xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF5349] font-bold block mb-4">
            THE STRATEGIC MINDSET
          </span>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-sans font-normal text-neutral-950 tracking-tight leading-snug">
            Rather than asking <span className="text-neutral-400 line-through">“Can AI help us?”</span>, these organizations ask:
            <br />
            <span className="font-serif italic font-normal text-neutral-950 block mt-4 text-3xl sm:text-4xl lg:text-5xl">
              “How can AI redefine the way we grow?”
            </span>
          </p>
        </div>
      </div>

      {/* Corporate Cohort Industry Explorer (Split Screen Directory) */}
      <div className="mb-8">
        <h3 className="text-2xl font-serif font-bold text-neutral-950 mb-6">
          Our Clients Typically Include:
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: List Selector Buttons */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cohorts.map((cohort, idx) => {
              const Icon = cohort.icon;
              const isSelected = selectedCohort === idx;

              return (
                <button
                  key={cohort.name}
                  onClick={() => setSelectedCohort(idx)}
                  onMouseEnter={() => setSelectedCohort(idx)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "bg-white border-neutral-300 shadow-md translate-x-1"
                      : "bg-white/60 border-neutral-200/80 hover:bg-white hover:border-neutral-300 text-neutral-700"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                      style={{
                        backgroundColor: isSelected ? cohort.themeColor : "#F3F4F6",
                        color: isSelected ? "#FFFFFF" : "#4B5563",
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-neutral-400 block">
                        COHORT 0{idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-black leading-snug">
                        {cohort.name}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-2 h-2 rounded-full transition-opacity ${
                      isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                    }`}
                    style={{ backgroundColor: cohort.themeColor }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Cohort Detail Showcase Box */}
          <div className="lg:col-span-6 sticky top-28 bg-white border border-neutral-200/90 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[440px]">
            <div
              className="absolute top-0 left-0 right-0 h-1.5 transition-all"
              style={{ backgroundColor: currentCohort.themeColor }}
            />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                    style={{ backgroundColor: currentCohort.themeColor }}
                  >
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold block">
                      STRATEGIC COHORT
                    </span>
                    <h4 className="text-2xl font-bold text-neutral-950">
                      {currentCohort.name}
                    </h4>
                  </div>
                </div>

                <span
                  className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${currentCohort.themeColor}18`,
                    color: currentCohort.themeColor,
                  }}
                >
                  COHORT {selectedCohort + 1 < 10 ? `0${selectedCohort + 1}` : selectedCohort + 1}
                </span>
              </div>

              <div className="space-y-6 border-t border-neutral-100 pt-6">
                <div>
                  <div className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    OPERATIONAL CONTEXT
                  </div>
                  <p className="text-base text-neutral-700 leading-relaxed font-normal">
                    {currentCohort.context}
                  </p>
                </div>

                <div
                  className="p-6 rounded-2xl border"
                  style={{
                    backgroundColor: `${currentCohort.themeColor}08`,
                    borderColor: `${currentCohort.themeColor}30`,
                  }}
                >
                  <div
                    className="text-xs font-mono font-bold tracking-widest uppercase mb-2"
                    style={{ color: currentCohort.themeColor }}
                  >
                    AICCELER8 TRANSFORMATION
                  </div>
                  <p className="text-base font-semibold text-neutral-950 leading-relaxed">
                    {currentCohort.solution}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">PARTNERSHIP ENGAGEMENT</span>
              <a
                href="#why-aicceler8"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

