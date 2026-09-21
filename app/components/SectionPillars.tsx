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
      themeColor: "#E2725B",
      bgColor: "bg-espresso-dark/60",
      textColor: "text-soft-apricot",
      accentBorder: "border-burnt-peach",
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
      themeColor: "#E2725B",
      bgColor: "bg-espresso-dark/60",
      textColor: "text-soft-apricot",
      accentBorder: "border-burnt-peach",
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
      themeColor: "#E2725B",
      bgColor: "bg-espresso-dark/60",
      textColor: "text-soft-apricot",
      accentBorder: "border-burnt-peach",
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
      themeColor: "#E2725B",
      bgColor: "bg-espresso-dark/60",
      textColor: "text-soft-apricot",
      accentBorder: "border-burnt-peach",
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

  const current = pillars[activePillar];
  const CurrentIcon = current.icon;

  return (
    <section id="how-we-transform" className="py-24 px-6 sm:px-12 lg:px-20 w-full border-t border-burnt-peach/20 bg-espresso-deep relative isolate overflow-hidden">
      <div className="corner-plus top-6 left-6" />
      <div className="corner-plus top-6 right-6" />

      {/* Top Split Editorial Header */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
        <div className="lg:col-span-5">
          <span className="type-mono text-burnt-peach block mb-3">
            HOW WE TRANSFORM
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-foreground tracking-tight leading-[1.05] uppercase">
            FROM AI ADOPTION TO <br />
            <span className="italic font-light text-burnt-peach">
              ENTERPRISE TRANSFORMATION.
            </span>
          </h2>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-end h-full">
          <p className="text-lg sm:text-xl text-foreground/80 font-normal leading-relaxed border-l border-burnt-peach/30 pl-6 lg:pl-8">
            Rather than selling services, we partner with leadership teams to rethink how every part of the business creates value.
          </p>
        </div>
      </div>

      {/* Performance Lab Executive Matrix */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Interactive Pillar Navigation Stack */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = activePillar === idx;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                onMouseEnter={() => setActivePillar(idx)}
                className={`p-6 rounded-xl text-left transition-all duration-300 relative border flex items-center justify-between group ${
                  isSelected
                    ? "bg-espresso-dark border-burnt-peach text-burnt-peach shadow-md translate-x-1 font-bold"
                    : "bg-espresso-dark/40 border-burnt-peach/20 hover:border-burnt-peach/50 text-foreground/80"
                }`}
              >
                <div
                  className={`absolute left-0 top-3 bottom-3 w-1 rounded-r transition-all ${
                    isSelected ? "bg-burnt-peach opacity-100" : "opacity-0 group-hover:opacity-40 bg-burnt-peach"
                  }`}
                />

                <div className="flex items-center gap-4 pl-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? "bg-burnt-peach text-espresso-deep" : "bg-espresso-deep text-burnt-peach"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="type-mono text-[9px] text-burnt-peach block mb-0.5">
                      {pillar.tag}
                    </span>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-burnt-peach">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isSelected ? "bg-burnt-peach text-espresso-deep" : "text-foreground/40 opacity-0 group-hover:opacity-100"
                }`}>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Active Pillar Showcase Panel */}
        <div className="lg:col-span-7 bg-espresso-dark border border-burnt-peach/30 rounded-2xl p-8 sm:p-12 shadow-xl flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 left-0 right-0 h-1 bg-burnt-peach" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="type-mono text-[10px] px-3 py-1 rounded bg-burnt-peach/20 text-burnt-peach border border-burnt-peach/30 font-bold">
                {current.tag}
              </span>

              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-burnt-peach text-espresso-deep font-bold">
                <CurrentIcon className="w-6 h-6" />
              </div>
            </div>

            <h3 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-3 tracking-tight">
              {current.title}
            </h3>

            <p className="text-base sm:text-lg font-bold text-burnt-peach mb-4 leading-snug">
              {current.subtitle}
            </p>

            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed mb-8">
              {current.description}
            </p>
          </div>

          <div className="space-y-6">
            {/* Capabilities Check List */}
            <div className="border-t border-burnt-peach/20 pt-6">
              <div className="type-mono text-[10px] text-burnt-peach block mb-4 font-bold">
                CORE CAPABILITIES & EXECUTION
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.capabilities.map((cap, cIdx) => (
                  <div
                    key={cIdx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-espresso-deep/70 border border-burnt-peach/20 text-xs sm:text-sm text-foreground/90 font-medium"
                  >
                    <Check className="w-4 h-4 text-burnt-peach shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Box */}
            <div className="p-5 rounded-xl border-l-4 border-burnt-peach bg-espresso-deep/60">
              <div className="type-mono text-[9px] text-burnt-peach block mb-1 font-bold">
                PHILOSOPHICAL ANCHOR
              </div>
              <p className="text-sm font-serif italic text-foreground font-semibold">
                “{current.quote}”
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
