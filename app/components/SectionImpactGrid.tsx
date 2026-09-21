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
      themeColor: "#F5AB26", // Warm Gold / Amber
      bgColor: "bg-[#FFF9EE]",
      borderColor: "border-[#F5AB26]",
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
      themeColor: "#FF5349", // Coral Red
      bgColor: "bg-[#FFF1F0]",
      borderColor: "border-[#FF5349]",
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
      themeColor: "#D628D8", // Fuchsia / Magenta
      bgColor: "bg-[#FDF2FE]",
      borderColor: "border-[#D628D8]",
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
      themeColor: "#2563EB", // Enterprise Blue
      bgColor: "bg-[#EFF6FF]",
      borderColor: "border-[#2563EB]",
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
      themeColor: "#00C49F", // Teal Green
      bgColor: "bg-[#F0FDF4]",
      borderColor: "border-[#00C49F]",
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
      themeColor: "#6CB33F", // Fresh Green
      bgColor: "bg-[#F4FAEE]",
      borderColor: "border-[#6CB33F]",
    },
  ];

  return (
    <section id="enterprise-impact" className="py-24 px-4 sm:px-6 lg:px-20 w-full border-t border-neutral-200/80 bg-white">
      {/* Top Editorial Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold tracking-widest text-[#6CB33F] uppercase mb-4 block">
            SECTION FOUR // OUTCOMES
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-neutral-950 tracking-tight leading-[1.08]">
            How We Create <br />
            <span className="italic font-normal text-neutral-800">
              Enterprise Impact.
            </span>
          </h2>
        </div>
        <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-md border-l-2 border-neutral-200 pl-5">
          Instead of listing services, we show measurable business outcomes.
        </p>
      </div>

      {/* Unique Horizontal Accordion Ledger Layout */}
      <div className="hidden lg:flex gap-4 h-[520px] w-full items-stretch">
        {impacts.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeIndex === idx;

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`rounded-3xl p-8 transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col justify-between border ${
                isActive
                  ? `flex-[3.5] bg-white border-neutral-300 shadow-xl`
                  : `flex-1 bg-neutral-50/80 border-neutral-200/80 hover:bg-white hover:border-neutral-300`
              }`}
            >
              {/* Active Top Color Line Accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-2 transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundColor: item.themeColor }}
              />

              {/* Collapsed Vertical Bar View */}
              {!isActive && (
                <div className="h-full flex flex-col justify-between items-center text-center py-2 select-none">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xs"
                    style={{ backgroundColor: item.themeColor }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex flex-col items-center gap-6">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 rotate-90 whitespace-nowrap">
                      {item.badge}
                    </span>
                    <h3 className="text-base font-bold text-neutral-900 [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-neutral-200/60 flex items-center justify-center text-neutral-600">
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
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                          style={{ backgroundColor: item.themeColor }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span
                            className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                            style={{
                              backgroundColor: `${item.themeColor}18`,
                              color: item.themeColor,
                            }}
                          >
                            {item.badge}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 mt-1">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div
                        className="px-3.5 py-1.5 rounded-full text-xs font-bold border"
                        style={{
                          backgroundColor: `${item.themeColor}12`,
                          color: item.themeColor,
                          borderColor: `${item.themeColor}30`,
                        }}
                      >
                        {item.kpi}
                      </div>
                    </div>

                    <p className="text-base text-neutral-600 leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>

                    {/* Points Checklist */}
                    <div className="space-y-2.5 border-t border-neutral-100 pt-5">
                      <div className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-3">
                        DELIVERABLES & STRATEGIC OUTCOMES
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {item.points.map((point, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 font-medium"
                          >
                            <Check
                              className="w-4 h-4 shrink-0 mt-0.5"
                              style={{ color: item.themeColor }}
                            />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-mono">
                    <span>BENCHMARK MEASUREMENT</span>
                    <span className="font-bold text-neutral-900">{item.kpi}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Fallback Grid for Tablet and Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
        {impacts.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: item.themeColor }}
              />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: item.themeColor }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${item.themeColor}18`,
                      color: item.themeColor,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-2 border-t border-neutral-100 pt-4 mb-6">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-neutral-800">
                      <Check
                        className="w-3.5 h-3.5 shrink-0 mt-0.5"
                        style={{ color: item.themeColor }}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-neutral-100 pt-4 flex items-center justify-between text-xs">
                <span className="font-mono text-neutral-400 uppercase">Benchmark</span>
                <span
                  className="font-bold px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: `${item.themeColor}15`,
                    color: item.themeColor,
                  }}
                >
                  {item.kpi}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

