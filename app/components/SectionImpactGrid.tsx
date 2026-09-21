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
      badge: "TOP-LINE EXPANSION",
      description: "Build compounding, self-optimizing commercial engines that drive client acquisition and LTV.",
      points: [
        "Accelerate customer acquisition velocity",
        "Increase multi-channel marketing efficiency",
        "Strengthen enterprise sales pipeline conversion",
        "Orchestrate intelligent, automated customer journeys",
        "Build AI-powered predictive revenue engines",
      ],
      kpi: "+38% Pipeline Velocity",
      color: "border-neutral-200",
    },
    {
      id: "operations",
      title: "Smarter Operations",
      icon: Workflow,
      badge: "EFFICIENCY & MARGINS",
      description: "Eradicate operational drag and manual back-office friction with autonomous workflow orchestration.",
      points: [
        "Eradicate repetitive manual data entry and handoffs",
        "Automate complex cross-departmental workflows",
        "Improve cross-functional executive collaboration",
        "Enable lightning-fast operational execution",
        "Create end-to-end enterprise process visibility",
      ],
      kpi: "-45% Operational Cycle Time",
      color: "border-neutral-200",
    },
    {
      id: "workforce",
      title: "Workforce Enablement",
      icon: Sparkles,
      badge: "HUMAN LEVERAGE",
      description: "Transform every team member into an AI-augmented super-performer without organizational chaos.",
      points: [
        "Empower every employee with purpose-built AI copilots",
        "Multiply departmental productivity and creative output",
        "Eradicate institutional knowledge silos permanently",
        "Build an agile, fearless AI-first company culture",
        "Upskill C-suite and leadership for strategic execution",
      ],
      kpi: "3.2x Employee Output Leverage",
      color: "border-neutral-200",
    },
    {
      id: "executive",
      title: "Executive Intelligence",
      icon: BarChart3,
      badge: "DECISION ADVANTAGE",
      description: "Give founders, CEOs, and boards real-time enterprise foresight instead of stale retrospective decks.",
      points: [
        "Provide leadership with real-time enterprise visibility",
        "Automate high-context board and executive reporting",
        "Deploy strategic predictive scenario dashboards",
        "Generate automated competitive market intelligence",
        "Deploy automated decision support systems",
      ],
      kpi: "Real-time P&L Foresight",
      color: "border-neutral-200",
    },
    {
      id: "customer",
      title: "Customer Experience",
      icon: MessageSquareHeart,
      badge: "RETENTION & LOYALTY",
      description: "Deliver human-grade, instantaneous personalization and 24/7 intelligent engagement across every touchpoint.",
      points: [
        "Deploy intelligent, contextual AI conversations",
        "Zero-latency resolution for enterprise support tiers",
        "Unified omnichannel engagement across web, app, and messaging",
        "Sub-second response times with brand guardrails",
        "Hyper-personalized dynamic customer experiences",
      ],
      kpi: "94% First-Contact Resolution",
      color: "border-neutral-200",
    },
    {
      id: "global",
      title: "Global Expansion",
      icon: Globe2,
      badge: "STRATEGIC DIFFERENTIATOR",
      highlight: true,
      description: "Scale into new international territories in weeks rather than years with AI-assisted GTM intelligence.",
      points: [
        "Instant global market intelligence & competitor mapping",
        "Automated cultural, linguistic & regulatory localization",
        "International GTM strategy accelerated by generative insights",
        "AI-assisted cross-border compliance research",
        "Battle-tested growth frameworks for multi-region scale",
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
          MEASURABLE OUTCOMES
        </span>
        <h2 className="text-4xl sm:text-5xl font-sans font-normal text-neutral-950 tracking-tight leading-[1.12] mb-6">
          How we create <br />
          <span className="font-serif italic font-normal text-neutral-950">
            enterprise impact.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
          Instead of listing generic technology services, we measure success exclusively through tangible business outcomes and market leadership.
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
