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
      bgColor: "bg-espresso-dark/90 border border-burnt-peach/40",
      textColor: "text-foreground",
      accentHex: "#E2725B",
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
      bgColor: "bg-espresso-dark/90 border border-burnt-peach/40",
      textColor: "text-foreground",
      accentHex: "#E2725B",
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
      bgColor: "bg-espresso-dark/90 border border-burnt-peach/40",
      textColor: "text-foreground",
      accentHex: "#E2725B",
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
      bgColor: "bg-espresso-dark/90 border border-burnt-peach/40",
      textColor: "text-foreground",
      accentHex: "#E2725B",
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
    <section id="transformations" className="py-24 px-6 sm:px-12 lg:px-20 w-full border-t border-burnt-peach/20 bg-espresso-deep relative isolate overflow-hidden">
      <div className="corner-plus top-6 left-6" />
      <div className="corner-plus top-6 right-6" />

      {/* Header with Title & Controls */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <span className="type-mono text-burnt-peach block mb-3">
            TRANSFORMATION STORIES
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-medium text-foreground tracking-tight leading-[1.05] uppercase">
            CHOSEN BY ENTERPRISE LEADERS. <br />
            <span className="italic font-light text-burnt-peach">
              OPERATING AT SCALE.
            </span>
          </h2>
        </div>

        {/* Next/Prev Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-burnt-peach/40 hover:border-burnt-peach bg-espresso-dark flex items-center justify-center text-foreground hover:text-burnt-peach transition-all shadow-md active:scale-95"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-burnt-peach/40 hover:border-burnt-peach bg-espresso-dark flex items-center justify-center text-foreground hover:text-burnt-peach transition-all shadow-md active:scale-95"
            aria-label="Next case study"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Category Navigation Tabs */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {transformations.map((t, idx) => {
          const isActive = activeIdx === idx;
          return (
            <button
              key={t.id}
              onClick={() => setActiveIdx(idx)}
              onMouseEnter={() => setActiveIdx(idx)}
              className={`p-4 sm:p-5 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between relative ${
                isActive
                  ? "bg-espresso-dark border-burnt-peach text-burnt-peach font-bold shadow-md translate-y-[-2px]"
                  : "bg-espresso-dark/40 border-burnt-peach/20 hover:border-burnt-peach/50 text-foreground/80"
              }`}
            >
              <div
                className={`absolute top-0 left-4 right-4 h-1 rounded-b transition-opacity ${
                  isActive ? "bg-burnt-peach opacity-100" : "opacity-0"
                }`}
              />

              <span className="type-mono text-[9px] text-burnt-peach block mb-2">
                {t.cardNum}
              </span>
              <span className="text-sm font-bold text-foreground leading-snug">
                {t.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Executive Hero Story Card Showcase */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full rounded-2xl p-8 sm:p-14 bg-espresso-dark/90 border border-burnt-peach/30 text-foreground transition-all duration-500 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[440px] backdrop-blur-md">
          <div className="absolute top-0 left-0 right-0 h-1 bg-burnt-peach" />

          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="type-mono text-[10px] text-burnt-peach">
                {current.brandName}
              </span>
              <span className="type-mono text-[9px] px-3.5 py-1 rounded bg-burnt-peach/20 text-burnt-peach border border-burnt-peach/30 font-bold">
                {current.cardNum}
              </span>
            </div>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-soft-apricot leading-snug max-w-3xl mb-8">
              {current.quote}
            </p>

            <div>
              <div className="font-bold text-base sm:text-lg text-foreground">{current.quoteAuthor}</div>
              <div className="text-xs sm:text-sm text-foreground/70 font-medium">{current.quoteRole}</div>
            </div>

            <button
              onClick={() => setModalItem(current)}
              className="mt-8 type-mono text-[11px] inline-flex items-center gap-2 text-burnt-peach hover:text-soft-apricot transition-colors underline underline-offset-4"
            >
              <span>READ THE FULL TRANSFORMATION STORY</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="border-t border-burnt-peach/20 pt-8 mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="text-5xl sm:text-6xl font-sans font-bold text-burnt-peach tracking-tight">
                {current.statNumber}
              </div>
              <div className="text-xs sm:text-sm text-foreground/70 max-w-md mt-1.5 font-medium">
                {current.statLabel}
              </div>
            </div>
            <button
              onClick={onOpenBooking}
              className="type-mono text-[11px] px-7 py-3.5 bg-burnt-peach hover:bg-burnt-peach-light text-espresso-deep font-bold transition-all shadow-md active:scale-95 shrink-0"
            >
              REQUEST CUSTOM BLUEPRINT
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


