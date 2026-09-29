"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Sparkles, Cpu, Layers, Workflow } from "lucide-react";

export default function SectionEvolution() {
  const [activeStage, setActiveStage] = useState<number>(2);

  const stages = [
    {
      id: "using-ai",
      step: "01",
      title: "Using AI",
      tagline: "The Ad-hoc Tool Stage",
      status: "Disconnected & Fragile",
      icon: Cpu,
      description:
        "Teams independently adopt ChatGPT, Copilot, and isolated SaaS tools. Prompts are ad-hoc, institutional knowledge remains siloed, and there is zero compounding moat.",
      metrics: [
        { label: "Enterprise Moat", value: "None (Zero differentiation)" },
        { label: "Data Security", value: "Fragmented / High Risk" },
        { label: "Business Impact", value: "Minor individual productivity" },
      ],
      drawback: "Result: Spend fragmentation, tool fatigue, zero enterprise leverage.",
    },
    {
      id: "integrating-ai",
      step: "02",
      title: "Integrating AI",
      tagline: "The Tactical Integration Stage",
      status: "Departmental & Siloed",
      icon: Layers,
      description:
        "Connecting APIs to existing CRM or ERP platforms. Departmental pilots are deployed, but workflows remain chained to legacy 2010s software architectures.",
      metrics: [
        { label: "Enterprise Moat", value: "Vulnerable to fast followers" },
        { label: "Adoption Friction", value: "High cross-team hesitation" },
        { label: "Business Impact", value: "Marginal operational speedup" },
      ],
      drawback: "Result: Point solutions that don’t fundamentally transform how you compete.",
    },
    {
      id: "ai-enterprise",
      step: "03",
      title: "Building an AI Enterprise",
      tagline: "The AICceler8 Destination",
      status: "AI as the Operating System",
      icon: Workflow,
      description:
        "The entire business architecture is redesigned around intelligence. Workflows run autonomously, knowledge connects in real time, and the business scales without linear headcount growth.",
      metrics: [
        { label: "Enterprise Moat", value: "Defensible & Compounding" },
        { label: "Execution Velocity", value: "10x faster market delivery" },
        { label: "Business Impact", value: "Accelerated revenue & EBITDA" },
      ],
      drawback: "Result: The business becomes an agile, unstoppable category leader.",
    },
  ];

  return (
    <section id="why-aicceler8" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Section Header with Freshworks Serif Italic */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-semibold tracking-wider text-brand-coral uppercase mb-3 block">
          WHY AICCELER8
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-normal text-neutral-950 tracking-tight leading-[1.12] mb-6">
          AI isn’t the transformation. <br />
          <span className="italic font-normal text-neutral-950">
            Your business is.
          </span>
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
          <p>
            For the past decade, digital transformation focused on software. Today, every organization is adopting AI tools. <strong className="text-neutral-900 font-medium">Yet very few are becoming AI-powered businesses.</strong>
          </p>
          <p>
            The companies that lead over the next decade won’t simply use AI. They will redesign the way they think, work, sell, create and serve customers.
          </p>
          <p className="text-neutral-900 font-medium">
            That shift requires more than technology. It requires strategy. It requires leadership. It requires organizational change. <span className="text-black font-semibold underline decoration-neutral-300 underline-offset-4">That is where AICceler8 comes in.</span>
          </p>
        </div>
      </div>

      {/* 3-Block Interactive Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = activeStage === idx;

          return (
            <div
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`cursor-pointer rounded-2xl p-8 transition-all duration-200 flex flex-col justify-between border ${
                isActive
                  ? "bg-white border-black shadow-[0_12px_30px_-10px_rgba(0,0,0,0.12)] ring-1 ring-black"
                  : "bg-neutral-50/70 border-neutral-200 hover:border-neutral-300 hover:bg-white"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md ${
                    idx === 2 ? "bg-black text-white" : "bg-neutral-200/80 text-neutral-700"
                  }`}>
                    STAGE {stage.step}
                  </span>
                  <Icon className={`w-5 h-5 ${isActive ? "text-black" : "text-neutral-400"}`} />
                </div>

                <h3 className="text-2xl font-sans font-bold text-neutral-950 mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-4">
                  {stage.tagline}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              <div>
                <div className="border-t border-neutral-200/80 pt-4 space-y-2 mb-4 text-xs">
                  {stage.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center justify-between">
                      <span className="text-neutral-500">{m.label}</span>
                      <span className="font-semibold text-neutral-900">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className={`text-[11px] font-mono px-3 py-2 rounded-lg ${
                  idx === 2 ? "bg-amber-50 text-amber-900 border border-amber-200" : "bg-neutral-100 text-neutral-600"
                }`}>
                  {stage.drawback}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Freshworks-Style Insight Callout */}
      <div className="rounded-2xl bg-neutral-900 text-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block mb-2">
            STRATEGIC POSITIONING
          </span>
          <p className="text-xl sm:text-2xl font-serif italic text-white font-normal leading-snug">
            “An Enterprise Growth & Transformation Company powered by Artificial Intelligence.”
          </p>
          <p className="text-xs text-neutral-400 mt-2">
            Helping ambitious enterprises grow, adapt, and compete in the AI era.
          </p>
        </div>
        <a
          href="#how-we-transform"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 hover:bg-neutral-100 text-xs font-semibold uppercase tracking-wider transition-all"
        >
          <span>See How We Transform</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
