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
    <section className="py-24 px-4 sm:px-6 lg:px-20 w-full border-t border-neutral-200/70">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-semibold tracking-wider text-brand-coral uppercase mb-3 block">
          SECTION SEVEN // WHY AICCELER8
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-normal text-neutral-950 tracking-tight leading-[1.12] mb-6">
          Why Organizations <br />
          <span className="italic font-normal text-neutral-950">
            Choose AICceler8
          </span>
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
          <p className="text-2xl sm:text-3xl font-serif italic text-neutral-950 leading-snug">
            “Because AI alone doesn’t transform businesses. Execution does.”
          </p>
          <div className="text-base text-neutral-600 space-y-2 pt-2">
            <p className="text-neutral-900 font-medium">
              Unlike traditional consulting firms, we don’t stop at strategy. <br />
              Unlike software vendors, we don’t stop at implementation. <br />
              Unlike agencies, we don’t stop at marketing.
            </p>
            <p>
              We work across leadership, operations, technology and execution to ensure AI creates measurable business outcomes.
            </p>
            <p className="text-neutral-500 text-sm">
              We combine strategic thinking, business understanding and AI expertise to build organizations that are faster, smarter and future-ready.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-3xl border border-neutral-200/90 bg-white shadow-md">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50/80 text-xs font-mono tracking-wider uppercase text-neutral-500">
              <th className="py-5 px-6 font-bold text-neutral-900">Dimension</th>
              <th className="py-5 px-5 font-semibold text-neutral-600">Traditional Consulting</th>
              <th className="py-5 px-5 font-semibold text-neutral-600">Software Vendors</th>
              <th className="py-5 px-5 font-semibold text-neutral-600">Digital Agencies</th>
              <th className="py-5 px-6 font-bold text-white bg-neutral-950 border-l border-r border-neutral-900">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5AB26]" />
                  <span>AICceler8</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 text-xs sm:text-sm">
            {comparison.map((row, idx) => (
              <tr key={idx} className="hover:bg-neutral-50/80 transition-colors group">
                <td className="py-5 px-6 font-bold text-neutral-950 group-hover:text-black">
                  {row.dimension}
                </td>
                <td className="py-5 px-5 text-neutral-500">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{row.consulting}</span>
                  </div>
                </td>
                <td className="py-5 px-5 text-neutral-500">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{row.vendors}</span>
                  </div>
                </td>
                <td className="py-5 px-5 text-neutral-500">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{row.agencies}</span>
                  </div>
                </td>
                <td className="py-5 px-6 font-semibold text-neutral-950 bg-[#FFF9EE] border-l border-r border-[#F5AB26]/40">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#6CB33F] shrink-0 mt-0.5" />
                    <span className="text-[#8F5D00] font-bold">{row.aicceler8}</span>
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
