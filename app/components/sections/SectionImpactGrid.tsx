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
} from "lucide-react";

export default function SectionImpactGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
      color: "border-neutral-200",
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
      color: "border-neutral-200",
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
      color: "border-neutral-200",
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
      color: "border-neutral-200",
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
      color: "border-neutral-200",
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
      color: "border-black",
    },
  ];

  return (
    <section id="enterprise-impact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-semibold tracking-wider text-brand-emerald uppercase mb-3 block">
          SECTION FOUR // OUTCOMES
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-normal text-neutral-950 tracking-tight leading-[1.12] mb-6">
          How We Create <br />
          <span className="italic font-normal text-neutral-950">
            Enterprise Impact.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
          Instead of listing services, we show measurable business outcomes.
        </p>
      </div>

      {/* 6-Card Business Outcome Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {impacts.map((item, idx) => {
          const Icon = item.icon;
          const isHighlighted = item.highlight;
          const isHovered = hoveredCard === idx;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`rounded-2xl p-8 transition-all duration-200 flex flex-col justify-between border ${
                isHighlighted
                  ? "bg-neutral-950 text-white shadow-xl"
                  : isHovered
                  ? "bg-white border-black shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1)]"
                  : "bg-surface-50 border-neutral-200/80 hover:bg-white"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isHighlighted ? "bg-white/10 text-white" : "bg-neutral-100 text-neutral-800"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-mono tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full ${
                      isHighlighted
                        ? "bg-white text-neutral-950"
                        : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3
                  className={`text-2xl font-sans font-bold mb-2 ${
                    isHighlighted ? "text-white" : "text-neutral-950"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    isHighlighted ? "text-neutral-300" : "text-neutral-500"
                  }`}
                >
                  {item.description}
                </p>

                <ul className="space-y-2.5 border-t border-neutral-200/40 pt-5 mb-6">
                  {item.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className={`flex items-start gap-2.5 text-xs ${
                        isHighlighted ? "text-neutral-200" : "text-neutral-700"
                      }`}
                    >
                      <Check
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isHighlighted ? "text-amber-400" : "text-emerald-600"
                        }`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`border-t pt-4 flex items-center justify-between ${
                  isHighlighted ? "border-white/15" : "border-neutral-200/80"
                }`}
              >
                <span
                  className={`text-[11px] font-mono uppercase tracking-wider ${
                    isHighlighted ? "text-neutral-400" : "text-neutral-400"
                  }`}
                >
                  Benchmark
                </span>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    isHighlighted
                      ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                      : "bg-neutral-100 text-neutral-900 border border-neutral-200"
                  }`}
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
