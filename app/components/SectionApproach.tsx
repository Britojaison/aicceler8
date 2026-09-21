"use client";

import React, { useState } from "react";
import { Search, Compass, Hammer, GraduationCap, TrendingUp, Check, ArrowRight } from "lucide-react";

export default function SectionApproach() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      title: "Discover",
      tagline: "Understand Your Business",
      icon: Search,
      duration: "Phase 01",
      color: "#FF5349", // Freshworks Coral Red
      bgLight: "bg-[#FF5349]/5",
      borderAccent: "border-[#FF5349]",
      textAccent: "text-[#FF5349]",
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
      color: "#F5AB26", // Freshworks Amber Gold
      bgLight: "bg-[#F5AB26]/5",
      borderAccent: "border-[#F5AB26]",
      textAccent: "text-[#F5AB26]",
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
      color: "#D628D8", // Freshworks Fuchsia Purple
      bgLight: "bg-[#D628D8]/5",
      borderAccent: "border-[#D628D8]",
      textAccent: "text-[#D628D8]",
      description:
        "Develop intelligent systems, workflows and enterprise capabilities. Everything is custom-engineered to integrate seamlessly into daily operations.",
      deliverables: [
        "Intelligent business systems & autonomous workflows",
        "Enterprise search & knowledge platforms",
        "AI agents & collaborative decision systems",
      ],
    },
    {
      num: "04",
      title: "Enable",
      tagline: "Train Leadership and Teams",
      icon: GraduationCap,
      duration: "Phase 04",
      color: "#6CB33F", // Freshworks Emerald Green
      bgLight: "bg-[#6CB33F]/5",
      borderAccent: "border-[#6CB33F]",
      textAccent: "text-[#6CB33F]",
      description:
        "Train leadership and teams to integrate AI into everyday work. We drive organizational adoption, establish governance models, and eliminate operational friction.",
      deliverables: [
        "Leadership and executive AI integration training",
        "Departmental workflow enablement & adoption",
        "Enterprise governance models & guardrails",
      ],
    },
    {
      num: "05",
      title: "Scale",
      tagline: "Continuously Improve and Evolve",
      icon: TrendingUp,
      duration: "Phase 05",
      color: "#2563EB", // Freshworks Enterprise Blue
      bgLight: "bg-[#2563EB]/5",
      borderAccent: "border-[#2563EB]",
      textAccent: "text-[#2563EB]",
      description:
        "Continuously improve, expand and evolve as your organization grows. We ensure your business captures new market opportunities and expands internationally.",
      deliverables: [
        "Continuous optimization as new technologies emerge",
        "Expansion into new business opportunities",
        "International growth & scaling frameworks",
      ],
    },
  ];

  const current = steps[activeStep];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-20 w-full border-t border-neutral-200/70 bg-gradient-to-b from-white via-surface-50/40 to-white">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-3 block">
          SECTION EIGHT // OUR APPROACH
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-normal text-neutral-950 tracking-tight leading-[1.12] mb-6">
          Our Approach <br />
          <span className="italic font-normal text-neutral-950">
            From Blueprint to Compounding Scale.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
          A disciplined timeline from initial discovery to continuous enterprise evolution.
        </p>
      </div>

      {/* Connected Timeline Track Container */}
      <div className="relative mb-12">
        {/* Horizontal Connector Line for Desktop */}
        <div className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-[2px] bg-neutral-200 z-0" />
        
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
                className={`cursor-pointer group relative p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? `bg-white shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] border-l-4 ${step.borderAccent} border-neutral-300 transform -translate-y-1`
                    : "bg-surface-50/80 border-neutral-200 hover:bg-white hover:border-neutral-300 hover:shadow-md"
                }`}
              >
                {/* Top Phase Circle Indicator */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 ${
                      isActive
                        ? "text-white shadow-xs"
                        : "bg-white text-neutral-500 border border-neutral-200 group-hover:border-neutral-300"
                    }`}
                    style={{ backgroundColor: isActive ? step.color : undefined }}
                  >
                    {step.num}
                  </div>

                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? `${step.bgLight} ${step.textAccent}` : "text-neutral-400 group-hover:text-neutral-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Phase Info */}
                <div>
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                    {step.duration}
                  </div>
                  <div
                    className={`text-lg font-bold transition-colors ${
                      isActive ? "text-neutral-950" : "text-neutral-700 group-hover:text-neutral-950"
                    }`}
                  >
                    {step.title}
                  </div>
                </div>

                {/* Active Indicator Pulse Bar */}
                {isActive && (
                  <div
                    className="absolute top-0 left-4 right-4 h-[3px] rounded-full"
                    style={{ backgroundColor: step.color }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Phase Enterprise Blueprint Display */}
      <div className="rounded-3xl border border-neutral-200/90 bg-white p-8 sm:p-12 shadow-xl shadow-neutral-900/5 relative overflow-hidden">
        {/* Subtle Background Color Accent */}
        <div
          className="absolute -right-24 -top-24 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none transition-all duration-500"
          style={{ backgroundColor: current.color }}
        />

        <div className="relative z-10 max-w-4xl">
          {/* Phase Badge Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full text-white shadow-xs"
              style={{ backgroundColor: current.color }}
            >
              PHASE {current.num} // {current.duration}
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              {current.tagline}
            </span>
          </div>

          {/* Heading */}
          <h3 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight mb-4">
            {current.title}: {current.tagline}
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed mb-10">
            {current.description}
          </p>

          {/* Key Deliverables Block */}
          <div className="pt-8 border-t border-neutral-200/80">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: current.color }} />
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-900 font-bold">
                Key Deliverables & Executive Milestones:
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {current.deliverables.map((del, dIdx) => (
                <div
                  key={dIdx}
                  className="p-5 rounded-2xl bg-surface-50/70 border border-neutral-200/80 flex items-start gap-3 text-xs font-semibold text-neutral-850 shadow-xs hover:border-neutral-300 transition-all duration-200"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `${current.color}15`, color: current.color }}
                  >
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

