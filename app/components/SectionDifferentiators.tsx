"use client";

import React from "react";
import { Check, X } from "lucide-react";

export default function SectionDifferentiators() {
  const comparison = [
    {
      dimension: "Primary Objective",
      consulting: "Billable advisory hours & static slide decks",
      vendors: "Software licenses & raw API usage tokens",
      agencies: "One-off marketing campaigns & ad spend",
      aicceler8: "Compounding enterprise revenue, EBITDA & operational leverage",
    },
    {
      dimension: "Implementation Depth",
      consulting: "Stops at strategy recommendations (hand-off to client)",
      vendors: "Stops at software installation / generic APIs",
      agencies: "Stops at creative production & copy",
      aicceler8: "End-to-end custom systems engineered into daily operations",
    },
    {
      dimension: "Workforce & Leadership Enablement",
      consulting: "Generic workshop seminars",
      vendors: "Self-serve documentation & knowledge bases",
      agencies: "None (isolated agency delivery)",
      aicceler8: "Embedded executive coaching & departmental AI copilots",
    },
    {
      dimension: "Continuous Evolution & Upgrades",
      consulting: "Requires a new RFP / engagement contract",
      vendors: "Standard generic platform version bumps",
      agencies: "Ad-hoc contract renewals",
      aicceler8: "Continuous monthly model sync, optimization & governance",
    },
    {
      dimension: "Accountability for Outcomes",
      consulting: "Low (recommendations are advisory)",
      vendors: "Zero (software SLA only)",
      agencies: "Shallow vanity metrics (impressions, clicks)",
      aicceler8: "Absolute: measured by margin expansion & business growth",
    },
  ];

  return (
    <section className="py-24 px-6 relative bg-espresso-deep border-b border-burnt-peach/20 overflow-hidden">
      <div className="corner-plus top-4 left-4" />
      <div className="corner-plus top-4 right-4" />

      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burnt-peach/10 border border-burnt-peach/30 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-burnt-peach animate-pulse" />
          <span className="type-mono text-xs text-burnt-peach tracking-widest uppercase font-semibold">
            THE AICCELER8 DIFFERENCE
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight uppercase">
          Why Traditional Models Fall Short
        </h2>
        <p className="mt-4 text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
          We don&apos;t just consult or license software — we partner directly to build and evolve your organization&apos;s AI operating engine.
        </p>
      </div>

      <div className="max-w-7xl mx-auto overflow-x-auto rounded-2xl border border-burnt-peach/20 bg-espresso-dark/60 backdrop-blur-md shadow-2xl">
        <table className="w-full text-left text-sm border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-burnt-peach/20 bg-espresso-dark/80 type-mono text-xs uppercase tracking-wider text-burnt-peach font-bold">
              <th className="py-5 px-6 font-bold">Dimension</th>
              <th className="py-5 px-5 text-foreground/70 font-semibold">Traditional Consulting</th>
              <th className="py-5 px-5 text-foreground/70 font-semibold">SaaS / AI Vendors</th>
              <th className="py-5 px-5 text-foreground/70 font-semibold">Digital Agencies</th>
              <th className="py-5 px-6 font-extrabold text-burnt-peach bg-espresso-dark border-l border-r border-burnt-peach/40">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-burnt-peach" />
                  AICceler8 Partnership
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-burnt-peach/10">
            {comparison.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-espresso-dark/30 transition-colors duration-150"
              >
                <td className="py-5 px-6 font-bold text-foreground">
                  {row.dimension}
                </td>
                <td className="py-5 px-5 text-foreground/70">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-burnt-peach/70 shrink-0 mt-0.5" />
                    <span>{row.consulting}</span>
                  </div>
                </td>
                <td className="py-5 px-5 text-foreground/70">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-burnt-peach/70 shrink-0 mt-0.5" />
                    <span>{row.vendors}</span>
                  </div>
                </td>
                <td className="py-5 px-5 text-foreground/70">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-burnt-peach/70 shrink-0 mt-0.5" />
                    <span>{row.agencies}</span>
                  </div>
                </td>
                <td className="py-5 px-6 font-semibold text-burnt-peach bg-espresso-dark/60 border-l border-r border-burnt-peach/40">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-burnt-peach shrink-0 mt-0.5" />
                    <span className="text-foreground font-bold">{row.aicceler8}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
