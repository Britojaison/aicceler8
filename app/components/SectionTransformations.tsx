"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import TransformationModal, { TransformationItem } from "./TransformationModal";

interface SectionTransformationsProps {
  onOpenBooking: () => void;
}

export default function SectionTransformations({ onOpenBooking }: SectionTransformationsProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalItem, setModalItem] = useState<TransformationItem | null>(null);

  const transformations: (TransformationItem & {
    bgColor: string;
    textColor: string;
    brandName: string;
    statNumber: string;
    statLabel: string;
    quote: string;
    quoteAuthor: string;
    quoteRole: string;
  })[] = [
    {
      id: "marketing",
      cardNum: "TRANSFORMATION 01",
      title: "Marketing Transformation",
      sector: "Enterprise Creative & Demand Gen",
      tagline: "Scaling enterprise content production & multi-channel campaign execution 10x.",
      brandName: "GLOBAL RETAIL LEADER",
      bgColor: "bg-amber-500",
      textColor: "text-neutral-950",
      quote:
        "“AICceler8 embedded generative creative workflows directly into our regional marketing teams. What previously took six weeks across agencies now ships in forty-eight hours with perfect brand compliance.”",
      quoteAuthor: "Marcus Sterling",
      quoteRole: "Chief Marketing & Digital Officer",
      statNumber: "10x",
      statLabel: "Velocity in multi-channel creative output & campaign launch speed",
      summary:
        "Helping enterprise marketing teams scale content production, campaign execution and customer engagement using AI-powered creative systems.",
      beforeState:
        "Weeks spent producing quarterly campaign collateral, fragmented agency dependencies, inconsistent brand messaging across regional sub-brands.",
      aicceler8System:
        "Engineered an enterprise generative creative ecosystem conditioned on brand design tokens, automated multi-format adaptation, and predictive audience response testing.",
      businessResults: [
        "10x velocity in multi-channel creative and copy generation",
        "68% reduction in external agency production expenditures",
        "+42% lift in organic social and inbound demand generation",
      ],
      metrics: [
        { label: "Production Velocity", value: "10x Faster" },
        { label: "Agency Cost", value: "-68%" },
        { label: "Campaign CTR", value: "+42%" },
      ],
    },
    {
      id: "sales",
      cardNum: "TRANSFORMATION 02",
      title: "Sales Transformation",
      sector: "B2B Commercial & Revenue",
      tagline: "Intelligent ecosystems accelerating proposal generation, CRM workflows, and deal closing.",
      brandName: "ENTERPRISE B2B SOFTWARE",
      bgColor: "bg-red-500",
      textColor: "text-white",
      quote:
        "“Our Account Executives were drowning in RFP paperwork and CRM updates. AICceler8 deployed an autonomous deal copilot that cut turnaround from two weeks to forty-eight hours and lifted our win rate by thirty percent.”",
      quoteAuthor: "Elena Rostova",
      quoteRole: "SVP Global Commercial Operations",
      statNumber: "+31%",
      statLabel: "Lift in competitive pitch win rate with sub-48h proposal generation",
      summary:
        "Building intelligent sales ecosystems that improve lead qualification, proposal generation, CRM workflows and customer intelligence.",
      beforeState:
        "Enterprise Account Executives spending 40% of their working hours manually compiling RFP responses and updating stale CRM notes.",
      aicceler8System:
        "Deployed an autonomous RFP & proposal copilot with automated technical qualification, dynamic pricing models, and real-time deal intelligence.",
      businessResults: [
        "RFP proposal turnaround cut from 14 days down to 48 hours",
        "+31% win rate on competitive multi-vendor pitches",
        "CRM data accuracy raised to 99.4% through autonomous background sync",
      ],
      metrics: [
        { label: "Proposal Cycle", value: "-85%" },
        { label: "Win Rate", value: "+31%" },
        { label: "AE Selling Time", value: "+60%" },
      ],
    },
    {
      id: "operations",
      cardNum: "TRANSFORMATION 03",
      title: "Operations Transformation",
      sector: "Enterprise Workflow Automation",
      tagline: "Eradicating manual work across departments through enterprise knowledge networks.",
      brandName: "INDUSTRIAL CONGLOMERATE",
      bgColor: "bg-purple-600",
      textColor: "text-white",
      quote:
        "“AICceler8 didn’t just suggest ideas—they built automated multi-agent reconciliation workflows that eradicated over 12,000 hours of manual back-office spreadsheet grind every month.”",
      quoteAuthor: "David Chen",
      quoteRole: "Executive Vice President of Operations",
      statNumber: "12,000+",
      statLabel: "Manual hours saved per month across back-office departments",
      summary:
        "Reducing manual work across departments by deploying AI-powered workflows, knowledge systems and enterprise automation.",
      beforeState:
        "Cross-departmental handoffs stuck in email threads, manual PDF audits, and disconnected legacy ERP systems.",
      aicceler8System:
        "Integrated multi-agent automated orchestration across finance, legal, and vendor management with continuous verification loops.",
      businessResults: [
        "Over 12,000 monthly manual hours eradicated from back-office tasks",
        "Invoice reconciliation latency reduced from 6 days to instant automated clearance",
        "Zero audit failure across high-volume vendor compliance verifications",
      ],
      metrics: [
        { label: "Hours Saved / Mo", value: "12,000+" },
        { label: "Reconciliation", value: "Instant" },
        { label: "Error Rate", value: "< 0.01%" },
      ],
    },
    {
      id: "global",
      cardNum: "TRANSFORMATION 04",
      title: "International Growth",
      sector: "Global Expansion & Market Entry",
      tagline: "Accelerating market research, localization, and global expansion frameworks.",
      brandName: "CROSS-BORDER FINTECH",
      bgColor: "bg-emerald-600",
      textColor: "text-white",
      quote:
        "“Scaling into EMEA and GCC used to take 14 months of expensive consulting and local agency hiring. With AICceler8’s AI GTM engine, we validated regulations and launched live in 90 days.”",
      quoteAuthor: "Sophia Al-Mansoor",
      quoteRole: "Head of International Strategy",
      statNumber: "90 Days",
      statLabel: "Average timeline to full regional GTM deployment and compliance",
      summary:
        "Using AI to accelerate market research, localization, competitive intelligence and global expansion strategies.",
      beforeState:
        "Entering new international markets took 12–18 months of manual research, fragmented legal translations, and slow regional hiring.",
      aicceler8System:
        "Architected an AI-native Global Expansion Engine analyzing real-time regional competitive pricing, regulatory guidelines, and localized GTM messaging.",
      businessResults: [
        "Market validation and regional GTM launched in 3 months vs historical 14 months",
        "Automated localization of product, documentation, and sales materials across 7 languages",
        "Faster path to initial recurring revenue in new international territories",
      ],
      metrics: [
        { label: "Time-to-Market", value: "-72%" },
        { label: "Languages", value: "7 Native" },
        { label: "Regional CAC", value: "-35%" },
      ],
    },
  ];

  const current = transformations[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? transformations.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setActiveIdx((prev) => (prev === transformations.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="transformations" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Header with Freshworks Title & Slider Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl sm:text-5xl font-sans font-normal text-neutral-950 tracking-tight leading-[1.15]">
            Chosen by enterprise leaders. <br />
            <span className="font-serif italic font-normal text-neutral-950">
              Operating at scale.
            </span>
          </h2>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-neutral-200 hover:border-neutral-400 bg-white flex items-center justify-center text-neutral-700 hover:text-black transition-all shadow-xs"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-neutral-200 hover:border-neutral-400 bg-white flex items-center justify-center text-neutral-700 hover:text-black transition-all shadow-xs"
            aria-label="Next case study"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Freshworks Signature Multi-Color Accordion Slider */}
      <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[480px]">
        {/* Main Expanded Active Card */}
        <div
          className={`flex-1 rounded-3xl p-8 sm:p-12 ${current.bgColor} ${current.textColor} transition-all duration-300 flex flex-col justify-between shadow-sm relative overflow-hidden`}
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-widest opacity-80">
                {current.brandName}
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/15 font-semibold">
                {current.cardNum}
              </span>
            </div>

            <p className="text-xl sm:text-2xl font-serif leading-snug max-w-2xl mb-6">
              {current.quote}
            </p>

            <div>
              <div className="font-semibold text-sm">{current.quoteAuthor}</div>
              <div className="text-xs opacity-75">{current.quoteRole}</div>
            </div>

            <button
              onClick={() => setModalItem(current)}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              <span>Read the full transformation story</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="border-t border-black/15 pt-6 mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-4xl sm:text-5xl font-sans font-bold tracking-tight">
                {current.statNumber}
              </div>
              <div className="text-xs opacity-80 max-w-sm mt-1">
                {current.statLabel}
              </div>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors w-fit"
            >
              Request custom blueprint
            </button>
          </div>
        </div>

        {/* Adjacent Narrow Vertical Cards (Freshworks Image 2 Style) */}
        <div className="hidden lg:flex gap-3">
          {transformations.map((t, idx) => {
            if (idx === activeIdx) return null;
            return (
              <button
                key={t.id}
                onClick={() => setActiveIdx(idx)}
                className={`w-24 rounded-3xl ${t.bgColor} p-6 flex flex-col justify-between items-center text-center transition-all duration-300 hover:w-28 group relative`}
                aria-label={`View ${t.title}`}
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-black/60 rotate-90 whitespace-nowrap mt-8">
                  {t.cardNum}
                </span>

                <div className="text-xs font-bold [writing-mode:vertical-rl] rotate-180 uppercase tracking-wider text-white">
                  {t.title}
                </div>

                <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-white group-hover:bg-black/40 transition-colors mb-2">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <TransformationModal
        item={modalItem}
        onClose={() => setModalItem(null)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
}
