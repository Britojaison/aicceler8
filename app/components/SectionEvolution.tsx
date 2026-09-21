"use client";

import React, { useState } from "react";
import { ArrowRight, Cpu, Layers, Workflow, CheckCircle2 } from "lucide-react";

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
      themeColor: "#E2725B",
      activeBg: "bg-espresso-dark/60",
      activeBorder: "border-burnt-peach",
      activeText: "text-burnt-peach",
      badgeBg: "bg-burnt-peach/20 text-burnt-peach",
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
      themeColor: "#E2725B",
      activeBg: "bg-espresso-dark/60",
      activeBorder: "border-burnt-peach",
      activeText: "text-burnt-peach",
      badgeBg: "bg-burnt-peach/20 text-burnt-peach",
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
      themeColor: "#E2725B",
      activeBg: "bg-espresso-dark/80",
      activeBorder: "border-burnt-peach",
      activeText: "text-burnt-peach",
      badgeBg: "bg-burnt-peach text-espresso-deep font-bold",
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
    <section id="why-aicceler8" className="py-24 px-6 sm:px-12 lg:px-20 w-full border-t border-burnt-peach/20 bg-espresso-deep relative isolate overflow-hidden">
      {/* Corner accents */}
      <div className="corner-plus top-6 left-6" />
      <div className="corner-plus top-6 right-6" />

      {/* Header Layout (EcoFuture Asymmetrical Grid Style) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 items-stretch">
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-peach/10 border border-burnt-peach/30 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-burnt-peach animate-pulse" />
              <span className="type-mono text-xs text-burnt-peach tracking-widest uppercase font-semibold">
                WHY AICCELER8
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-foreground tracking-tight leading-[1.05] uppercase">
              AI ISN’T THE TRANSFORMATION. <br />
              <span className="italic font-light text-burnt-peach">
                YOUR BUSINESS IS.
              </span>
            </h2>
          </div>
          <div className="h-0.5 w-32 bg-gradient-to-r from-burnt-peach via-soft-apricot to-transparent mt-8 hidden lg:block" />
        </div>

        <div className="lg:col-span-6 bg-espresso-dark/50 border border-burnt-peach/20 rounded-2xl p-8 sm:p-10 flex flex-col justify-center space-y-6 text-base sm:text-lg text-foreground/80 font-normal leading-relaxed shadow-xl backdrop-blur-md">
          <p>
            For the past decade, digital transformation focused on software. Today, every organization is adopting AI tools. <strong className="text-burnt-peach font-bold">Yet very few are becoming AI-powered businesses.</strong>
          </p>
          <p>
            The companies that lead over the next decade won’t simply use AI. They will redesign the way they think, work, sell, create and serve customers.
          </p>
          <div className="pt-4 border-t border-burnt-peach/20 text-foreground font-medium">
            That shift requires more than technology. It requires strategy. It requires leadership. It requires organizational change. <span className="text-burnt-peach font-semibold underline decoration-burnt-peach/50 underline-offset-4">That is where AICceler8 comes in.</span>
          </div>
        </div>
      </div>

      {/* Stage Cards Selector Grid (EcoFuture Card Architecture) */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((s, idx) => {
            const isCurrent = activeStage === idx;
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStage(idx)}
                onMouseEnter={() => setActiveStage(idx)}
                className={`group relative text-left p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md ${
                  isCurrent
                    ? "bg-espresso-dark border-burnt-peach ring-1 ring-burnt-peach/50"
                    : "bg-espresso-dark/40 border-burnt-peach/20 hover:border-burnt-peach/50 hover:bg-espresso-dark/70"
                }`}
              >
                {/* Active Top Glow Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                    isCurrent ? "bg-burnt-peach" : "bg-transparent group-hover:bg-burnt-peach/40"
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="type-mono text-4xl font-extrabold text-burnt-peach/40 group-hover:text-burnt-peach transition-colors">
                      {s.step}
                    </span>
                    <div className={`p-3 rounded-xl transition-colors ${isCurrent ? "bg-burnt-peach text-espresso-deep" : "bg-espresso-deep text-burnt-peach"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-burnt-peach transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs type-mono text-foreground/60">
                    {s.tagline}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-burnt-peach/10 flex items-center justify-between text-xs type-mono">
                  <span className={`${isCurrent ? "text-burnt-peach font-bold" : "text-foreground/50"}`}>
                    {s.status}
                  </span>
                  {idx === 2 && (
                    <span className="px-2.5 py-0.5 rounded bg-burnt-peach text-espresso-deep font-bold text-[9px]">
                      DESTINATION
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Detail Panel */}
      <div className="max-w-7xl mx-auto bg-espresso-dark border border-burnt-peach/30 rounded-2xl shadow-xl overflow-hidden p-8 sm:p-12 lg:p-14 backdrop-blur-md mb-16">
        {stages.map((stage, idx) => {
          if (idx !== activeStage) return null;
          const Icon = stage.icon;

          return (
            <div key={stage.id} className="animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Left Description Block */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-burnt-peach text-espresso-deep font-bold shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="type-mono text-xs text-burnt-peach font-semibold block tracking-wider">
                        STAGE {stage.step} ARCHITECTURE
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight uppercase">
                        {stage.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-foreground/85 leading-relaxed font-normal">
                    {stage.description}
                  </p>

                  <div className="p-6 rounded-xl border border-burnt-peach/30 bg-espresso-deep/80 shadow-sm">
                    <div className="type-mono text-xs text-burnt-peach font-bold block mb-2 tracking-wider">
                      EXECUTIVE ASSESSMENT
                    </div>
                    <div className="text-sm sm:text-base font-bold text-foreground">
                      {stage.drawback}
                    </div>
                  </div>
                </div>

                {/* Right Metrics Grid */}
                <div className="lg:col-span-5 bg-espresso-deep p-6 sm:p-8 rounded-xl border border-burnt-peach/20 space-y-6 shadow-sm">
                  <div className="type-mono text-xs text-burnt-peach border-b border-burnt-peach/20 pb-3 font-bold tracking-wider flex items-center justify-between">
                    <span>ENTERPRISE METRICS</span>
                    <span className="text-[10px] text-foreground/50 font-normal">DIAGNOSTIC MATRIX</span>
                  </div>

                  <div className="space-y-5">
                    {stage.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="border-b border-burnt-peach/10 pb-4 last:border-0 last:pb-0">
                        <div className="text-xs type-mono text-foreground/60 mb-1">
                          {m.label}
                        </div>
                        <div className="text-base sm:text-lg font-bold text-burnt-peach">
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

      {/* Strategic Positioning Callout */}
      <div className="max-w-7xl mx-auto rounded-2xl bg-espresso-dark border border-burnt-peach/30 p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xl relative overflow-hidden backdrop-blur-md">
        <div className="relative z-10 max-w-3xl">
          <span className="type-mono text-burnt-peach block mb-3 font-semibold">
            STRATEGIC POSITIONING
          </span>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-foreground font-normal leading-snug">
            “An Enterprise Growth & Transformation Company powered by Artificial Intelligence.”
          </p>
          <p className="text-sm text-foreground/70 mt-3 font-normal">
            Helping ambitious enterprises grow, adapt, and compete in the AI era.
          </p>
        </div>
        <a
          href="#how-we-transform"
          className="type-mono text-[11px] relative z-10 shrink-0 inline-flex items-center gap-2.5 px-7 py-4 bg-burnt-peach hover:bg-burnt-peach-dark text-espresso-deep font-bold transition-all shadow-md active:scale-95"
        >
          <span>SEE HOW WE TRANSFORM</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
