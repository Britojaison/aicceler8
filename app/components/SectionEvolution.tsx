"use client";

import React, { useState } from "react";
import { ArrowRight, Cpu, Layers, Workflow } from "lucide-react";

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
      themeColor: "#F5AB26", // Freshworks Amber / Yellow
      activeBg: "bg-[#FFF9EE]",
      activeBorder: "border-[#F5AB26]",
      activeText: "text-[#B37400]",
      badgeBg: "bg-[#F5AB26]/15 text-[#8F5D00]",
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
      themeColor: "#FF5349", // Freshworks Coral / Red
      activeBg: "bg-[#FFF1F0]",
      activeBorder: "border-[#FF5349]",
      activeText: "text-[#D92C23]",
      badgeBg: "bg-[#FF5349]/15 text-[#C41C13]",
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
      themeColor: "#6CB33F", // Freshworks Fresh Green
      activeBg: "bg-[#F4FAEE]",
      activeBorder: "border-[#6CB33F]",
      activeText: "text-[#4A8528]",
      badgeBg: "bg-[#6CB33F] text-white",
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
    <section id="why-aicceler8" className="py-24 px-4 sm:px-6 lg:px-20 w-full border-t border-neutral-200/80 bg-neutral-50/50">
      {/* Top Editorial Split Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
        <div className="lg:col-span-5">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF5349] uppercase mb-4 block">
            WHY AICCELER8
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-neutral-950 tracking-tight leading-[1.08]">
            AI isn’t the transformation. <br />
            <span className="italic font-normal text-neutral-800">
              Your business is.
            </span>
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed border-l border-neutral-200 pl-0 lg:pl-10">
          <p>
            For the past decade, digital transformation focused on software. Today, every organization is adopting AI tools. <strong className="text-neutral-950 font-medium">Yet very few are becoming AI-powered businesses.</strong>
          </p>
          <p>
            The companies that lead over the next decade won’t simply use AI. They will redesign the way they think, work, sell, create and serve customers.
          </p>
          <p className="text-neutral-950 font-medium pt-2 border-t border-neutral-200/60">
            That shift requires more than technology. It requires strategy. It requires leadership. It requires organizational change. <span className="text-black font-semibold underline decoration-neutral-400 underline-offset-4">That is where AICceler8 comes in.</span>
          </p>
        </div>
      </div>

      {/* Freshworks-Inspired Interactive Matrix with Hover Trigger */}
      <div className="bg-white border border-neutral-200/90 rounded-3xl shadow-sm overflow-hidden mb-16">
        {/* Stage Selector Tabs with Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-neutral-200">
          {stages.map((s, idx) => {
            const isCurrent = activeStage === idx;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStage(idx)}
                onMouseEnter={() => setActiveStage(idx)}
                className={`p-6 sm:p-8 text-left transition-all relative flex flex-col justify-between group ${
                  idx !== 2 ? "border-b md:border-b-0 md:border-r border-neutral-200" : ""
                } ${
                  isCurrent
                    ? "bg-white"
                    : "bg-neutral-50/50 hover:bg-white text-neutral-500"
                }`}
              >
                {/* Active Top Accent Strip */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 transition-all ${
                    isCurrent ? "" : "opacity-0 group-hover:opacity-40"
                  }`}
                  style={{ backgroundColor: s.themeColor }}
                />

                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono font-bold tracking-widest transition-colors"
                    style={{ color: isCurrent ? s.themeColor : "#9CA3AF" }}
                  >
                    STAGE {s.step}
                  </span>
                  {idx === 2 && (
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#6CB33F] text-white font-bold shadow-xs">
                      DESTINATION
                    </span>
                  )}
                </div>

                <div className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight group-hover:text-black">
                  {s.title}
                </div>
                <div className="text-xs font-medium text-neutral-500 mt-1">
                  {s.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        {stages.map((stage, idx) => {
          if (idx !== activeStage) return null;
          const Icon = stage.icon;

          return (
            <div key={stage.id} className="p-8 sm:p-12 lg:p-14 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Left Description Block */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="p-3.5 rounded-2xl text-white shadow-sm transition-colors"
                      style={{ backgroundColor: stage.themeColor }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 block">
                        STAGE ARCHITECTURE
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
                        {stage.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                    {stage.description}
                  </p>

                  <div
                    className={`p-5 rounded-2xl border transition-all ${stage.activeBg} ${stage.activeBorder}`}
                  >
                    <div
                      className={`text-xs font-mono uppercase tracking-wider font-bold mb-1 ${stage.activeText}`}
                    >
                      EXECUTIVE ASSESSMENT
                    </div>
                    <div className="text-sm font-semibold text-neutral-900">
                      {stage.drawback}
                    </div>
                  </div>
                </div>

                {/* Right Metrics Grid */}
                <div className="lg:col-span-5 bg-neutral-50/80 p-6 sm:p-8 rounded-2xl border border-neutral-200/90 space-y-5">
                  <div className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase border-b border-neutral-200 pb-3">
                    ENTERPRISE METRICS
                  </div>

                  <div className="space-y-4">
                    {stage.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="border-b border-neutral-200/60 pb-3 last:border-0 last:pb-0">
                        <div className="text-xs font-medium text-neutral-500 mb-1">
                          {m.label}
                        </div>
                        <div
                          className="text-base font-bold"
                          style={{ color: idx === 2 ? "#4A8528" : "#0F172A" }}
                        >
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Freshworks-Style Strategic Positioning Callout */}
      <div className="rounded-3xl bg-neutral-950 text-white p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#F5AB26] font-semibold block mb-3">
            STRATEGIC POSITIONING
          </span>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-white font-normal leading-snug">
            “An Enterprise Growth & Transformation Company powered by Artificial Intelligence.”
          </p>
          <p className="text-sm text-neutral-400 mt-3 font-normal">
            Helping ambitious enterprises grow, adapt, and compete in the AI era.
          </p>
        </div>
        <a
          href="#how-we-transform"
          className="relative z-10 shrink-0 inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#FF5349] hover:bg-[#E8453B] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
        >
          <span>See How We Transform</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}


