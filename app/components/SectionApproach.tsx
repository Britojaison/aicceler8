"use client";

import React, { useState } from "react";
import { Search, Compass, Hammer, GraduationCap, TrendingUp, Check } from "lucide-react";

export default function SectionApproach() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      title: "Discover",
      tagline: "Understand Your Business",
      icon: Search,
      duration: "Phase 01",
      color: "#E2725B",
      bgLight: "bg-burnt-peach/20",
      borderAccent: "border-burnt-peach",
      textAccent: "text-burnt-peach",
      description:
        "Understand your business, challenges and opportunities. We evaluate existing workflows, operational bottlenecks, data readiness, and high-impact revenue levers.",
      deliverables: [
        "Business challenges and opportunity assessment",
        "Executive opportunity sizing matrix",
        "Data readiness & workflow vulnerability audit",
      ],
    },
    {
      num: "02",
      title: "Design",
      tagline: "Create Transformation Blueprint",
      icon: Compass,
      duration: "Phase 02",
      color: "#E2725B",
      bgLight: "bg-burnt-peach/20",
      borderAccent: "border-burnt-peach",
      textAccent: "text-burnt-peach",
      description:
        "Create an AI transformation blueprint aligned with business goals. We map intelligent architectures, governance frameworks, and measurable growth benchmarks.",
      deliverables: [
        "AI transformation blueprint aligned with business goals",
        "System architecture & model selection specs",
        "Executive ROI and change management roadmap",
      ],
    },
    {
      num: "03",
      title: "Build",
      tagline: "Develop Intelligent Systems",
      icon: Hammer,
      duration: "Phase 03",
      color: "#E2725B",
      bgLight: "bg-burnt-peach/20",
      borderAccent: "border-burnt-peach",
      textAccent: "text-burnt-peach",
      description:
        "Develop intelligent systems, workflows and enterprise capabilities. Everything is custom-engineered to integrate seamlessly into daily operations.",
      deliverables: [
        "Intelligent business systems & autonomous workflows",
        "Enterprise search & knowledge platforms",
        "Custom model fine-tuning & integration pipelines",
      ],
    },
    {
      num: "04",
      title: "Enable",
      tagline: "Empower Workforce & Leadership",
      icon: GraduationCap,
      duration: "Phase 04",
      color: "#E2725B",
      bgLight: "bg-burnt-peach/20",
      borderAccent: "border-burnt-peach",
      textAccent: "text-burnt-peach",
      description:
        "Empower workforce and leadership to use AI effectively. We conduct embedded workshops, deploy departmental copilots, and establish enterprise governance.",
      deliverables: [
        "Executive & departmental enablement coaching",
        "Custom Copilot adoption & prompt engineering playbooks",
        "Enterprise AI governance & security frameworks",
      ],
    },
    {
      num: "05",
      title: "Evolve",
      tagline: "Continuous Optimization & Scaling",
      icon: TrendingUp,
      duration: "Phase 05",
      color: "#E2725B",
      bgLight: "bg-burnt-peach/20",
      borderAccent: "border-burnt-peach",
      textAccent: "text-burnt-peach",
      description:
        "Continuously optimize, expand capabilities and adapt as AI advances. Monthly model benchmarking, ecosystem upgrades, and expanding automation across business units.",
      deliverables: [
        "Monthly model performance & accuracy benchmarking",
        "Continuous ecosystem capability upgrades",
        "Quarterly strategic AI expansion reviews",
      ],
    },
  ];

  const current = steps[activeStep];

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-20 w-full border-t border-burnt-peach/20 bg-espresso-deep relative isolate overflow-hidden">
      <div className="corner-plus top-6 left-6" />
      <div className="corner-plus top-6 right-6" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
        <div className="lg:col-span-5">
          <span className="type-mono text-burnt-peach block mb-3 font-semibold">
            SECTION EIGHT // OUR APPROACH
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-foreground tracking-tight leading-[1.05] uppercase">
            OUR APPROACH <br />
            <span className="italic font-light text-burnt-peach">
              FROM BLUEPRINT TO COMPOUNDING SCALE.
            </span>
          </h2>
        </div>
        <div className="lg:col-span-7 flex flex-col justify-end h-full">
          <p className="text-base sm:text-lg text-foreground/85 font-normal leading-relaxed border-l border-burnt-peach/30 pl-6 lg:pl-8">
            A disciplined timeline from initial discovery to continuous enterprise evolution.
          </p>
        </div>
      </div>

      {/* Connected Timeline Track Container */}
      <div className="max-w-7xl mx-auto relative mb-12">
        <div className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-[2px] bg-burnt-peach/30 z-0" />
        
        {/* Timeline Steps Header Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;

            return (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer group relative p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? "bg-espresso-dark border-burnt-peach shadow-md transform -translate-y-1"
                    : "bg-espresso-dark/40 border-burnt-peach/20 hover:border-burnt-peach/50 hover:bg-espresso-dark/70"
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center type-mono font-bold text-xs transition-all ${
                    isActive ? "bg-burnt-peach text-espresso-deep" : "bg-espresso-deep text-burnt-peach border border-burnt-peach/30"
                  }`}>
                    {step.num}
                  </div>

                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isActive ? "bg-burnt-peach/20 text-burnt-peach" : "text-foreground/40"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="type-mono text-[9px] text-burnt-peach block mb-1">
                    {step.duration}
                  </div>
                  <div className="text-lg font-bold text-foreground group-hover:text-burnt-peach">
                    {step.title}
                  </div>
                </div>

                {isActive && (
                  <div className="absolute top-0 left-4 right-4 h-1 rounded bg-burnt-peach" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Phase Enterprise Blueprint Display */}
      <div className="max-w-7xl mx-auto rounded-2xl border border-burnt-peach/30 bg-espresso-dark p-8 sm:p-12 shadow-xl relative overflow-hidden backdrop-blur-md">
        <div className="relative z-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="type-mono text-[10px] px-3.5 py-1.5 rounded bg-burnt-peach text-espresso-deep font-bold">
              PHASE {current.num} // {current.duration}
            </span>
            <span className="type-mono text-[10px] text-burnt-peach uppercase font-bold">
              {current.tagline}
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-sans font-bold text-foreground tracking-tight mb-4">
            {current.title}: {current.tagline}
          </h3>

          <p className="text-base sm:text-lg text-foreground/85 font-normal leading-relaxed mb-10">
            {current.description}
          </p>

          <div className="pt-8 border-t border-burnt-peach/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-burnt-peach" />
              <span className="type-mono text-xs text-burnt-peach font-bold tracking-wider uppercase">
                CORE DELIVERABLES & OUTCOMES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {current.deliverables.map((deliv, dIdx) => (
                <div
                  key={dIdx}
                  className="p-4 rounded-xl bg-espresso-deep/80 border border-burnt-peach/20 flex items-start gap-3 shadow-sm"
                >
                  <Check className="w-4 h-4 text-burnt-peach shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-foreground/90 font-medium leading-snug">
                    {deliv}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
