"use client";

import React, { useState } from "react";
import { Compass, Cpu, Users, Repeat, Check, ArrowRight } from "lucide-react";

export default function SectionPillars() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: "strategy",
      num: "01",
      tag: "PILLAR 01 // STRATEGY",
      title: "Enterprise Growth Strategy",
      subtitle: "This isn’t another AI roadmap. It’s a business transformation roadmap designed around growth.",
      icon: Compass,
      description:
        "We identify where AI creates measurable business advantage across revenue, operations, customer experience and decision-making.",
      capabilities: [
        "Measurable revenue and top-line advantage identification",
        "Operational friction and cost optimization mapping",
        "Customer experience and intelligent journey design",
        "Decision-making acceleration and executive intelligence",
      ],
      quote: "This isn’t another AI roadmap. It’s a business transformation roadmap designed around growth.",
    },
    {
      id: "systems",
      num: "02",
      tag: "PILLAR 02 // SYSTEMS",
      title: "Intelligent Business Systems",
      subtitle: "Everything designed around your business—not around software.",
      icon: Cpu,
      description:
        "We build AI-native systems that become part of your organization’s daily operations.",
      capabilities: [
        "Knowledge platforms",
        "Enterprise search",
        "AI agents & Automation",
        "Decision intelligence & Collaborative workflows",
      ],
      quote: "Everything designed around your business—not around software.",
    },
    {
      id: "enablement",
      num: "03",
      tag: "PILLAR 03 // PEOPLE",
      title: "Organization Enablement",
      subtitle: "Technology alone doesn’t transform organizations. People do.",
      icon: Users,
      description:
        "We work alongside leadership teams to drive adoption, enable departments, build governance models and ensure AI becomes part of everyday execution.",
      capabilities: [
        "Drive executive and team adoption",
        "Enable and upskill cross-functional departments",
        "Build enterprise governance models & data guardrails",
        "Ensure AI becomes an instinctive part of everyday execution",
      ],
      quote: "Technology alone doesn’t transform organizations. People do.",
    },
    {
      id: "evolution",
      num: "04",
      tag: "PILLAR 04 // EVOLUTION",
      title: "Continuous Evolution",
      subtitle: "AI changes every month. Your business should never fall behind.",
      icon: Repeat,
      description:
        "We continuously optimize, improve and expand your AI ecosystem as new technologies emerge and new business opportunities appear.",
      capabilities: [
        "Continuous optimization and benchmarking as new models emerge",
        "Expansion into new business opportunities and capabilities",
        "Proactive enterprise AI ecosystem monitoring",
        "Future-proof architecture with zero technical debt",
      ],
      quote: "AI changes every month. Your business should never fall behind.",
    },
  ];

  return (
    <section id="how-we-transform" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase mb-3 block">
          HOW WE TRANSFORM
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-normal text-neutral-950 tracking-tight leading-[1.12] mb-6">
          From AI adoption to <br />
          <span className="italic font-normal text-neutral-950">
            enterprise transformation.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
          Rather than selling services, we partner with leadership teams to rethink how every part of the business creates value.
        </p>
      </div>

      {/* 4 Strategic Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          const isSelected = activePillar === idx;

          return (
            <div
              key={pillar.id}
              onMouseEnter={() => setActivePillar(idx)}
              className={`rounded-2xl p-8 transition-all duration-200 border flex flex-col justify-between ${
                isSelected
                  ? "bg-white border-black shadow-[0_15px_35px_-12px_rgba(0,0,0,0.12)]"
                  : "bg-surface-50 border-neutral-200/80 hover:bg-white hover:border-neutral-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono tracking-wider font-semibold text-neutral-600 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">
                    {pillar.tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-sans font-bold text-neutral-950 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-neutral-700 mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div>
                <div className="border-t border-neutral-200/80 pt-5 space-y-2.5 mb-6">
                  {pillar.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="border-l-2 border-black pl-3 text-xs italic font-serif text-neutral-600">
                  “{pillar.quote}”
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
