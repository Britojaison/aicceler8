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
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-semibold tracking-wider text-brand-coral uppercase mb-3 block">
          THE EXECUTION ADVANTAGE
        </span>
        <h2 className="text-4xl sm:text-5xl font-sans font-normal text-neutral-950 tracking-tight leading-[1.12] mb-6">
          Why organizations <br />
          <span className="font-serif italic font-normal text-neutral-950">
            choose AICceler8.
          </span>
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
          <p className="text-xl sm:text-2xl font-serif italic text-neutral-900 leading-snug">
            “Because AI alone doesn’t transform businesses. Execution does.”
          </p>
          <p className="text-neutral-500 text-base">
            Unlike traditional consulting firms, we don’t stop at strategy. Unlike software vendors, we don’t stop at implementation. Unlike agencies, we don’t stop at marketing. We work across leadership, operations, technology and execution to ensure AI creates measurable business outcomes.
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-neutral-200 bg-surface-50 text-xs font-mono tracking-wider uppercase text-neutral-500">
              <th className="py-4 px-6 font-semibold">Dimension</th>
              <th className="py-4 px-4 font-normal">Traditional Consulting</th>
              <th className="py-4 px-4 font-normal">Software Vendors</th>
              <th className="py-4 px-4 font-normal">Digital Agencies</th>
              <th className="py-4 px-6 font-bold text-neutral-950 bg-amber-50/60 border-l border-r border-amber-200">
                AICceler8
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 text-xs sm:text-sm">
            {comparison.map((row, idx) => (
              <tr key={idx} className="hover:bg-neutral-50/60 transition-colors">
                <td className="py-4 px-6 font-semibold text-neutral-900">
                  {row.dimension}
                </td>
                <td className="py-4 px-4 text-neutral-500">
                  <div className="flex items-start gap-2">
                    <X className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                    <span>{row.consulting}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-neutral-500">
                  <div className="flex items-start gap-2">
                    <X className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                    <span>{row.vendors}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-neutral-500">
                  <div className="flex items-start gap-2">
                    <X className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                    <span>{row.agencies}</span>
                  </div>
                </td>
                <td className="py-4 px-6 font-medium text-neutral-950 bg-amber-50/30 border-l border-r border-amber-200/80">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{row.aicceler8}</span>
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
