"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Workflow,
  Sparkles,
  BarChart3,
  MessageSquareHeart,
  Globe2,
  Check,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export default function SectionImpactGrid() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const impacts = [
    {
      id: "revenue",
      title: "Revenue Growth",
      icon: TrendingUp,
      badge: "OUTCOME 01",
      description: "Build compounding, self-optimizing commercial engines that accelerate top-line revenue.",
      points: [
        "Improve customer acquisition",
        "Increase marketing efficiency",
        "Strengthen sales performance",
        "Create intelligent customer journeys",
        "Build AI-powered growth engines",
      ],
      kpi: "+38% Pipeline Velocity",
      themeColor: "#E2725B",
      bgColor: "bg-espresso-dark/60",
      borderColor: "border-burnt-peach",
    },
    {
      id: "operations",
      title: "Smarter Operations",
      icon: Workflow,
      badge: "OUTCOME 02",
      description: "Eradicate operational drag and repetitive work with automated internal workflows.",
      points: [
        "Reduce repetitive work",
        "Automate internal workflows",
        "Improve cross-functional collaboration",
        "Enable faster execution",
        "Create operational visibility",
      ],
      kpi: "-45% Operational Cycle Time",
      themeColor: "#E2725B",
      bgColor: "bg-espresso-dark/60",
      borderColor: "border-burnt-peach",
    },
    {
      id: "workforce",
      title: "Workforce Enablement",
      icon: Sparkles,
      badge: "OUTCOME 03",
      description: "Empower every employee with AI while breaking down institutional knowledge silos.",
      points: [
        "Empower every employee with AI",
        "Improve productivity",
        "Reduce knowledge silos",
        "Build AI-first teams",
        "Upskill leadership",
      ],
      kpi: "3.2x Employee Output",
      themeColor: "#E2725B",
      bgColor: "bg-espresso-dark/60",
      borderColor: "border-burnt-peach",
    },
    {
      id: "executive",
      title: "Executive Intelligence",
      icon: BarChart3,
      badge: "OUTCOME 04",
      description: "Provide executive leadership with real-time business foresight and decision systems.",
      points: [
        "Provide leadership with real-time business visibility",
        "AI-powered reporting",
        "Strategic dashboards",
        "Predictive insights",
        "Decision support systems",
      ],
      kpi: "Real-Time Foresight",
      themeColor: "#E2725B",
      bgColor: "bg-espresso-dark/60",
      borderColor: "border-burnt-peach",
    },
    {
      id: "customer",
      title: "Customer Experience",
      icon: MessageSquareHeart,
      badge: "OUTCOME 05",
      description: "Deliver personalized, intelligent customer conversations with faster response times.",
      points: [
        "AI-powered conversations",
        "Intelligent support",
        "Omnichannel engagement",
        "Faster response times",
        "Personalized experiences",
      ],
      kpi: "Sub-Second Response",
      themeColor: "#E2725B",
      bgColor: "bg-espresso-dark/60",
      borderColor: "border-burnt-peach",
    },
    {
      id: "global",
      title: "Global Expansion",
      icon: Globe2,
      badge: "HIGHLY DIFFERENTIATED",
      highlight: true,
      description: "Scale into new international territories with AI-assisted GTM and market research.",
      points: [
        "Market intelligence",
        "Localization",
        "International GTM strategy",
        "AI-assisted market research",
        "Growth frameworks for scaling into new regions",
      ],
      kpi: "60% Faster Market Entry",
      themeColor: "#E2725B",
      bgColor: "bg-espresso-dark/60",
      borderColor: "border-burnt-peach",
    },
  ];

  return (
    <section id="enterprise-impact" className="py-24 px-6 sm:px-12 lg:px-20 w-full border-t border-burnt-peach/20 bg-espresso-deep relative isolate overflow-hidden">
      <div className="corner-plus top-6 left-6" />
      <div className="corner-plus top-6 right-6" />

      {/* Top Editorial Header */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div className="max-w-3xl">
          <span className="type-mono text-burnt-peach block mb-3">
            SECTION FOUR // OUTCOMES
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-foreground tracking-tight leading-[1.05] uppercase">
            HOW WE CREATE <br />
            <span className="italic font-light text-soft-apricot">
              ENTERPRISE IMPACT.
            </span>
          </h2>
        </div>
        <p className="text-base sm:text-lg text-foreground/80 font-normal leading-relaxed max-w-md border-l border-burnt-peach/30 pl-5">
          Instead of listing services, we show measurable business outcomes.
        </p>
      </div>

      {/* Unique Horizontal Accordion Ledger Layout */}
      <div className="max-w-7xl mx-auto hidden lg:flex gap-4 h-[520px] w-full items-stretch">
        {impacts.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeIndex === idx;

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`rounded-2xl p-8 transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col justify-between border ${
                isActive
                  ? `flex-[3.5] bg-espresso-dark/80 border-burnt-peach shadow-2xl backdrop-blur-md`
                  : `flex-1 bg-espresso-deep/60 border-burnt-peach/20 hover:border-burnt-peach/50 hover:bg-espresso-dark/40`
              }`}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-burnt-peach transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Collapsed Vertical Bar View */}
              {!isActive && (
                <div className="h-full flex flex-col justify-between items-center text-center py-2 select-none">
                  <div className="w-10 h-10 rounded-lg bg-burnt-peach text-espresso-deep grid place-items-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex flex-col items-center gap-6">
                    <span className="type-mono text-[9px] text-burnt-peach rotate-90 whitespace-nowrap">
                      {item.badge}
                    </span>
                    <h3 className="text-base font-bold text-foreground [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-espresso-dark border border-burnt-peach/30 flex items-center justify-center text-burnt-peach">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              )}

              {/* Expanded Detailed Content View */}
              {isActive && (
                <div className="h-full flex flex-col justify-between animate-fadeIn">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-burnt-peach text-espresso-deep grid place-items-center font-bold shadow-md">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="type-mono text-[10px] px-2.5 py-0.5 rounded bg-burnt-peach/20 text-burnt-peach border border-burnt-peach/30 font-bold">
                            {item.badge}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="px-3.5 py-1.5 rounded-full text-xs font-bold border border-burnt-peach/40 bg-burnt-peach/10 text-burnt-peach">
                        {item.kpi}
                      </div>
                    </div>

                    <p className="text-base text-foreground/85 leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>

                    {/* Points Checklist */}
                    <div className="space-y-2.5 border-t border-burnt-peach/20 pt-5">
                      <div className="type-mono text-[10px] text-burnt-peach block mb-3 font-bold">
                        DELIVERABLES & STRATEGIC OUTCOMES
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {item.points.map((point, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium"
                          >
                            <Check className="w-4 h-4 text-burnt-peach shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-burnt-peach/20 flex items-center justify-between type-mono text-[10px] text-foreground/60">
                    <span>BENCHMARK MEASUREMENT</span>
                    <span className="font-bold text-burnt-peach">{item.kpi}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
        {impacts.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-espresso-dark/80 border border-burnt-peach/30 rounded-2xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden backdrop-blur-md"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-burnt-peach" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-burnt-peach text-espresso-deep grid place-items-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="type-mono text-[9px] px-2.5 py-1 rounded bg-burnt-peach/20 text-burnt-peach border border-burnt-peach/30 font-bold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-2 border-t border-burnt-peach/20 pt-4 mb-6">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-foreground/90">
                      <Check className="w-3.5 h-3.5 text-burnt-peach shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-burnt-peach/20 pt-4 flex items-center justify-between text-xs type-mono">
                <span className="text-foreground/50">BENCHMARK</span>
                <span className="font-bold text-soft-apricot">{item.kpi}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
