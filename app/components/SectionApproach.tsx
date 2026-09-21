"use client";

import React, { useState } from "react";
import { Search, Compass, Hammer, GraduationCap, TrendingUp, Check } from "lucide-react";

export default function SectionApproach() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      title: "Discover",
      tagline: "Uncovering Friction & Opportunity",
      icon: Search,
      duration: "Weeks 1–2",
      description:
        "Understand your business, operational bottlenecks, revenue leaks, and highest-leverage AI opportunities. We evaluate data readiness, existing workflows, and competitive pressure.",
      deliverables: [
        "Enterprise AI Readiness & Vulnerability Audit",
        "Executive Opportunity Sizing Matrix",
        "Data Architecture & Security Assessment",
      ],
    },
    {
      num: "02",
      title: "Design",
      tagline: "Architecting the Growth Blueprint",
      icon: Compass,
      duration: "Weeks 3–4",
      description:
        "Create an AI transformation blueprint aligned with top-line growth and EBITDA expansion. We specify system architectures, governance guardrails, and KPI benchmarks.",
      deliverables: [
        "Comprehensive Enterprise Transformation Blueprint",
        "System Architecture & Model Selection Specs",
        "Cross-functional Change Management Plan",
      ],
    },
    {
      num: "03",
      title: "Build",
      tagline: "Engineering Intelligent Systems",
      icon: Hammer,
      duration: "Weeks 5–10",
      description:
        "Develop intelligent systems, enterprise search, autonomous agent workflows, and internal copilots. Everything is custom-tailored to your proprietary operations.",
      deliverables: [
        "Custom AI Copilots & Workflow Agents",
        "Sub-second Enterprise Knowledge Search",
        "Security, Privacy & Compliance Gateways",
      ],
    },
    {
      num: "04",
      title: "Enable",
      tagline: "Embedding AI Into Everyday Work",
      icon: GraduationCap,
      duration: "Weeks 11–14",
      description:
        "Train leadership and departmental teams to integrate AI seamlessly into daily execution. We establish governance models and internal Centers of Excellence.",
      deliverables: [
        "Executive Leadership AI Fluency Program",
        "Departmental Hands-on Workflow Mastery",
        "Enterprise Governance & Prompt Guardrails",
      ],
    },
    {
      num: "05",
      title: "Scale",
      tagline: "Continuous Evolution & Expansion",
      icon: TrendingUp,
      duration: "Ongoing Partnership",
      description:
        "Continuously improve, expand, and evolve as your organization grows. We benchmark monthly model releases and accelerate cross-border international expansion.",
      deliverables: [
        "Continuous Model Tuning & Monthly Upgrades",
        "Cross-Border International GTM Frameworks",
        "Quarterly Executive Value Creation Reviews",
      ],
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-3 block">
          TRANSFORMATION METHODOLOGY
        </span>
        <h2 className="text-4xl sm:text-5xl font-sans font-normal text-neutral-950 tracking-tight leading-[1.12] mb-6">
          Our approach. <br />
          <span className="font-serif italic font-normal text-neutral-950">
            From blueprint to compounding scale.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
          A disciplined, battle-tested 5-phase delivery model designed to produce early business wins while establishing scalable enterprise infrastructure.
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
