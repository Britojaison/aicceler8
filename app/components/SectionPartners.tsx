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
    <section id="who-we-work-with" className="py-24 px-6 sm:px-12 lg:px-20 w-full border-t border-burnt-peach/20 bg-espresso-deep relative isolate overflow-hidden">
      <div className="corner-plus top-6 left-6" />
      <div className="corner-plus top-6 right-6" />

      {/* Editorial Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start max-w-7xl mx-auto">
        <div className="lg:col-span-6">
          <span className="type-mono text-burnt-peach block mb-3">
            SECTION FIVE // PARTNERS
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-foreground tracking-tight leading-[1.05] uppercase">
            WHO WE PARTNER WITH
          </h2>
        </div>

        <div className="lg:col-span-6 space-y-3 border-l border-burnt-peach/30 pl-6 lg:pl-8">
          <p className="text-xl sm:text-2xl text-soft-apricot font-medium leading-snug">
            We work with organizations that see AI as a strategic advantage—not just another technology initiative.
          </p>
          <p className="text-base text-foreground/70 font-normal leading-relaxed">
            Our clients range from market-leading enterprise conglomerates to high-growth businesses preparing for international scale.
          </p>
        </div>
      </div>

      {/* Strategic Mindset Banner (Performance Lab Quote Card) */}
      <div className="max-w-7xl mx-auto mb-16 rounded-2xl bg-espresso-dark/70 border border-burnt-peach/30 p-8 sm:p-12 lg:p-14 relative overflow-hidden backdrop-blur-md">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-burnt-peach via-soft-apricot to-burnt-peach" />
        <div className="max-w-4xl">
          <span className="type-mono text-burnt-peach font-bold block mb-4">
            THE STRATEGIC MINDSET
          </span>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-sans font-normal text-foreground tracking-tight leading-snug">
            Rather than asking <span className="text-foreground/40 line-through">“Can AI help us?”</span>, these organizations ask:
            <br />
            <span className="font-serif italic font-light text-soft-apricot block mt-4 text-3xl sm:text-4xl lg:text-5xl">
              “How can AI redefine the way we grow?”
            </span>
          </p>
        </div>
      </div>

      {/* Corporate Cohort Industry Explorer (Split Screen Directory) */}
      <div className="max-w-7xl mx-auto mb-8">
        <h3 className="text-2xl font-serif font-bold text-foreground mb-6 uppercase">
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
                  className={`text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "bg-espresso-dark border-burnt-peach text-burnt-peach font-bold shadow-md translate-x-1"
                      : "bg-espresso-dark/40 border-burnt-peach/20 hover:border-burnt-peach/50 text-foreground/80"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "bg-burnt-peach text-espresso-deep" : "bg-espresso-deep text-burnt-peach"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="type-mono text-[9px] text-burnt-peach/80 block">
                        COHORT 0{idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-foreground group-hover:text-burnt-peach leading-snug">
                        {cohort.name}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-2 h-2 rounded-full transition-opacity bg-burnt-peach ${
                      isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Cohort Detail Showcase Box */}
          <div className="lg:col-span-6 sticky top-28 bg-espresso-dark/80 border border-burnt-peach/30 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[440px] backdrop-blur-md">
            <div className="absolute top-0 left-0 right-0 h-1 bg-burnt-peach" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-burnt-peach text-espresso-deep font-bold">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="type-mono text-[10px] text-burnt-peach block">
                      STRATEGIC COHORT
                    </span>
                    <h4 className="text-2xl font-bold text-foreground">
                      {currentCohort.name}
                    </h4>
                  </div>
                </div>

                <span className="type-mono text-[10px] px-3 py-1 rounded bg-burnt-peach/20 text-burnt-peach border border-burnt-peach/30 font-bold">
                  COHORT {selectedCohort + 1 < 10 ? `0${selectedCohort + 1}` : selectedCohort + 1}
                </span>
              </div>

              <div className="space-y-6 border-t border-burnt-peach/20 pt-6">
                <div>
                  <div className="type-mono text-[10px] text-burnt-peach block mb-2">
                    OPERATIONAL CONTEXT
                  </div>
                  <p className="text-base text-foreground/80 leading-relaxed font-normal">
                    {currentCohort.context}
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-burnt-peach/30 bg-espresso-deep/60">
                  <div className="type-mono text-[10px] text-burnt-peach block mb-2">
                    AICCELER8 TRANSFORMATION
                  </div>
                  <p className="text-base font-semibold text-soft-apricot leading-relaxed">
                    {currentCohort.solution}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-burnt-peach/20 flex items-center justify-between">
              <span className="type-mono text-[10px] text-foreground/50">PARTNERSHIP ENGAGEMENT</span>
              <a
                href="#why-aicceler8"
                className="type-mono text-[11px] inline-flex items-center gap-2 px-6 py-3 bg-burnt-peach hover:bg-burnt-peach-light text-espresso-deep font-bold transition-all shadow-md active:scale-95"
              >
                <span>PARTNER WITH US</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

