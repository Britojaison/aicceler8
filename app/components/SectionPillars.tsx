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
      themeColor: "#F5AB26", // Freshworks Amber / Yellow
      bgColor: "bg-[#FFF9EE]",
      textColor: "text-[#8F5D00]",
      accentBorder: "border-[#F5AB26]",
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
      themeColor: "#FF5349", // Freshworks Coral / Red
      bgColor: "bg-[#FFF1F0]",
      textColor: "text-[#C41C13]",
      accentBorder: "border-[#FF5349]",
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
      themeColor: "#D628D8", // Freshworks Fuchsia / Purple
      bgColor: "bg-[#FDF2FE]",
      textColor: "text-[#9A1B9C]",
      accentBorder: "border-[#D628D8]",
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
      themeColor: "#6CB33F", // Freshworks Fresh Green
      bgColor: "bg-[#F4FAEE]",
      textColor: "text-[#4A8528]",
      accentBorder: "border-[#6CB33F]",
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
    <section id="how-we-transform" className="py-24 px-4 sm:px-6 lg:px-20 w-full border-t border-neutral-200/80 bg-neutral-50/40">
      {/* Top Split Editorial Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
        <div className="lg:col-span-5">
          <span className="text-xs font-mono font-bold tracking-widest text-[#D628D8] uppercase mb-4 block">
            HOW WE TRANSFORM
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-neutral-950 tracking-tight leading-[1.08]">
            From AI adoption to <br />
            <span className="italic font-normal text-neutral-800">
              enterprise transformation.
            </span>
          </h2>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-end h-full">
          <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed border-l-2 border-neutral-300 pl-6 lg:pl-8">
            Rather than selling services, we partner with leadership teams to rethink how every part of the business creates value.
          </p>
        </div>
      </div>

      {/* Corporate Executive Interactive Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
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
                className={`p-6 rounded-2xl text-left transition-all duration-300 relative border flex items-center justify-between group ${
                  isSelected
                    ? "bg-white border-neutral-300 shadow-md translate-x-1"
                    : "bg-white/60 border-neutral-200/80 hover:bg-white hover:border-neutral-300 text-neutral-600"
                }`}
              >
                {/* Left Colored Accent Bar for Selected Item */}
                <div
                  className={`absolute left-0 top-3 bottom-3 w-1.5 rounded-r-md transition-all ${
                    isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-30"
                  }`}
                  style={{ backgroundColor: pillar.themeColor }}
                />

                <div className="flex items-center gap-4 pl-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    style={{
                      backgroundColor: isSelected ? pillar.themeColor : "#F3F4F6",
                      color: isSelected ? "#FFFFFF" : "#4B5563",
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-neutral-400 block mb-0.5">
                      {pillar.tag}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950 group-hover:text-black">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 transition-all ${
                  isSelected ? "bg-neutral-100 text-neutral-900 rotate-90 lg:rotate-0" : "opacity-0 group-hover:opacity-100"
                }`}>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Active Pillar Showcase Panel */}
        <div className="lg:col-span-7 bg-white border border-neutral-200/90 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col justify-between relative overflow-hidden">
          {/* Top Decorative Border Highlight */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5 transition-all"
            style={{ backgroundColor: current.themeColor }}
          />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span
                className="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                style={{
                  backgroundColor: `${current.themeColor}18`,
                  color: current.textColor.includes('#') ? current.textColor : current.themeColor,
                }}
              >
                {current.tag}
              </span>

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                style={{ backgroundColor: current.themeColor }}
              >
                <CurrentIcon className="w-6 h-6" />
              </div>
            </div>

            <h3 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 mb-3 tracking-tight">
              {current.title}
            </h3>

            <p className="text-base sm:text-lg font-semibold text-neutral-800 mb-4 leading-snug">
              {current.subtitle}
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
              {current.description}
            </p>
          </div>

          <div className="space-y-6">
            {/* Capabilities Check List */}
            <div className="border-t border-neutral-200/80 pt-6">
              <div className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-4">
                CORE CAPABILITIES & EXECUTION
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.capabilities.map((cap, cIdx) => (
                  <div
                    key={cIdx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50/80 border border-neutral-200/60 text-xs sm:text-sm text-neutral-800 font-medium"
                  >
                    <Check
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: current.themeColor }}
                    />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Box */}
            <div
              className={`p-5 rounded-2xl border-l-4 ${current.bgColor}`}
              style={{ borderLeftColor: current.themeColor }}
            >
              <div className="text-xs font-mono uppercase tracking-wider font-bold mb-1 opacity-70" style={{ color: current.themeColor }}>
                PHILOSOPHICAL ANCHOR
              </div>
              <p className="text-sm font-serif italic text-neutral-900 font-medium">
                “{current.quote}”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

