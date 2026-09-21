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
      description:
        "Continuously improve, expand and evolve as your organization grows. We ensure your business captures new market opportunities and expands internationally.",
      deliverables: [
        "Continuous optimization as new technologies emerge",
        "Expansion into new business opportunities",
        "International growth & scaling frameworks",
      ],
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/70">
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

      {/* 5-Step Timeline Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;

          return (
            <button
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between min-h-[120px] ${
                isActive
                  ? "bg-white border-black shadow-[0_10px_25px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black"
                  : "bg-surface-50 border-neutral-200/80 text-neutral-700 hover:border-neutral-300 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className={`text-xs font-mono font-bold ${isActive ? "text-neutral-950" : "text-neutral-400"}`}>
                  PHASE {step.num}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? "text-neutral-950" : "text-neutral-400"}`} />
              </div>
              <div>
                <div className="text-base font-bold text-neutral-950">
                  {step.title}
                </div>
                <div className="text-[11px] font-medium text-neutral-500">
                  {step.duration}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Card */}
      <div className="rounded-3xl border border-neutral-200 bg-surface-50 p-8 sm:p-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold text-neutral-900 px-3 py-1 rounded-full bg-white border border-neutral-200">
              PHASE {steps[activeStep].num} // {steps[activeStep].duration}
            </span>
            <span className="text-xs font-medium text-neutral-500">
              {steps[activeStep].tagline}
            </span>
          </div>

          <h3 className="text-3xl font-sans font-bold text-neutral-950 mb-3">
            {steps[activeStep].title}: {steps[activeStep].tagline}
          </h3>

          <p className="text-base text-neutral-600 font-normal leading-relaxed mb-8">
            {steps[activeStep].description}
          </p>

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-900 font-semibold block mb-3">
              Key Deliverables & Executive Milestones:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {steps[activeStep].deliverables.map((del, dIdx) => (
                <div
                  key={dIdx}
                  className="p-4 rounded-xl bg-white border border-neutral-200/80 flex items-start gap-2.5 text-xs font-medium text-neutral-800 shadow-xs"
                >
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
