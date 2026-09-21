"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
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
    accentHex: string;
  })[] = [
    {
      id: "marketing",
      cardNum: "TRANSFORMATION 01",
      title: "Marketing Transformation",
      sector: "Enterprise Creative & Demand Gen",
      tagline: "Scaling enterprise content production & multi-channel campaign execution 10x.",
      brandName: "GLOBAL RETAIL LEADER",
      bgColor: "bg-[#F5AB26]", // Warm Gold / Amber
      textColor: "text-neutral-950",
      accentHex: "#F5AB26",
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
      bgColor: "bg-[#FF5349]", // Coral / Red
      textColor: "text-white",
      accentHex: "#FF5349",
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
      bgColor: "bg-[#D628D8]", // Fuchsia / Purple
      textColor: "text-white",
      accentHex: "#D628D8",
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
      bgColor: "bg-[#6CB33F]", // Fresh Green
      textColor: "text-white",
      accentHex: "#6CB33F",
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
    <section id="transformations" className="py-24 px-4 sm:px-6 lg:px-20 w-full border-t border-neutral-200/80 bg-neutral-50/30">
      {/* Header with Title & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-3 block">
            TRANSFORMATION STORIES
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-neutral-950 tracking-tight leading-[1.12]">
            Chosen by enterprise leaders. <br />
            <span className="italic font-normal text-neutral-800">
              Operating at scale.
            </span>
          </h2>
        </div>

        {/* Next/Prev Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white flex items-center justify-center text-neutral-800 hover:text-black transition-all shadow-xs active:scale-95"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white flex items-center justify-center text-neutral-800 hover:text-black transition-all shadow-xs active:scale-95"
            aria-label="Next case study"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Freshworks Inspired Category Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {transformations.map((t, idx) => {
          const isActive = activeIdx === idx;
          return (
            <button
              key={t.id}
              onClick={() => setActiveIdx(idx)}
              onMouseEnter={() => setActiveIdx(idx)}
              className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between relative ${
                isActive
                  ? "bg-white border-neutral-300 shadow-md translate-y-[-2px]"
                  : "bg-white/70 border-neutral-200 hover:bg-white hover:border-neutral-300"
              }`}
            >
              {/* Top Color Strip */}
              <div
                className={`absolute top-0 left-4 right-4 h-1 rounded-b-md transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundColor: t.accentHex }}
              />

              <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase mb-2">
                {t.cardNum}
              </span>
              <span className="text-sm font-bold text-neutral-900 leading-snug">
                {t.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Executive Hero Story Card Showcase */}
      <div className="w-full">
        <div
          className={`w-full rounded-3xl p-8 sm:p-14 ${current.bgColor} ${current.textColor} transition-all duration-500 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[440px]`}
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-widest opacity-80">
                {current.brandName}
              </span>
              <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-black/15 font-semibold">
                {current.cardNum}
              </span>
            </div>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-snug max-w-3xl mb-8">
              {current.quote}
            </p>

            <div>
              <div className="font-bold text-base sm:text-lg">{current.quoteAuthor}</div>
              <div className="text-xs sm:text-sm opacity-80 font-medium">{current.quoteRole}</div>
            </div>

            <button
              onClick={() => setModalItem(current)}
              className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              <span>Read the full transformation story</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="border-t border-black/15 pt-8 mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="text-5xl sm:text-6xl font-sans font-bold tracking-tight">
                {current.statNumber}
              </div>
              <div className="text-xs sm:text-sm opacity-85 max-w-md mt-1.5 font-medium">
                {current.statLabel}
              </div>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors shrink-0 shadow-md active:scale-95"
            >
              Request custom blueprint
            </button>
          </div>
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


