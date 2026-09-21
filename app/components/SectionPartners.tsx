"use client";

import React, { useState } from "react";
import { Building2, Rocket, Briefcase, Factory, ShoppingBag, Landmark, Stethoscope, GraduationCap, Laptop, Scale, Coins, Globe, ArrowRight } from "lucide-react";

export default function SectionPartners() {
  const [selectedCohort, setSelectedCohort] = useState<number>(0);

  const ecosystems = [
    { name: "Salesforce", category: "CRM" },
    { name: "Slack", category: "Collaboration" },
    { name: "AWS", category: "Cloud & Compute" },
    { name: "Microsoft Azure", category: "Enterprise Cloud" },
    { name: "Google Cloud", category: "AI & Data" },
    { name: "Workday", category: "HCM / ERP" },
    { name: "Snowflake", category: "Data Warehouse" },
    { name: "Databricks", category: "Data Intelligence" },
    { name: "Oracle", category: "Enterprise DB" },
    { name: "SAP", category: "Global ERP" },
  ];

  const cohorts = [
    {
      name: "Enterprise Businesses",
      icon: Building2,
      context: "Tier-1 enterprises navigating legacy tech debt and seeking compounding AI architecture.",
      solution: "Unify fragmented ERP/CRM data into autonomous knowledge systems and executive intelligence copilots.",
    },
    {
      name: "High-Growth Scaleups",
      icon: Rocket,
      context: "Fast-moving Series B to Pre-IPO companies scaling headcount and product velocity rapidly.",
      solution: "Embed AI growth engines that multiply revenue per employee without proportional burn rate.",
    },
    {
      name: "Family Businesses & Conglomerates",
      icon: Briefcase,
      context: "Multi-generational organizations seeking modernization while safeguarding legacy equity.",
      solution: "Operationalize multi-business unit governance, automate compliance, and institute AI-first leadership.",
    },
    {
      name: "Manufacturing & Industry",
      icon: Factory,
      context: "Capital-intensive production, supply chain networks, and complex logistics operations.",
      solution: "Predictive supply intelligence, automated maintenance scheduling, and real-time operational telemetry.",
    },
    {
      name: "Retail & Omnichannel Brands",
      icon: ShoppingBag,
      context: "Customer-centric brands fighting high customer acquisition cost and inventory volatility.",
      solution: "Hyper-personalized marketing generation, intelligent merchandising, and automated inventory forecasting.",
    },
    {
      name: "Real Estate Developers",
      icon: Landmark,
      context: "High-value asset development, complex financing, and municipal approval cycles.",
      solution: "Automated underwriting synthesis, dynamic market intelligence, and AI-accelerated tenant journeys.",
    },
    {
      name: "Healthcare Institutions",
      icon: Stethoscope,
      context: "Strictly regulated clinical environments requiring HIPAA-compliant operational efficiency.",
      solution: "Administrative clinical copilot automation, non-diagnostic workflow optimization, and patient engagement.",
    },
    {
      name: "Educational Organizations",
      icon: GraduationCap,
      context: "Academic networks and institutions adapting curricula and admissions to the AI century.",
      solution: "Adaptive learning systems, streamlined admissions operations, and institutional research copilots.",
    },
    {
      name: "Technology Companies",
      icon: Laptop,
      context: "Tech companies needing to evolve from SaaS point solutions to defensible AI-native platforms.",
      solution: "Strategic AI architecture reviews, agentic capability integration, and autonomous GTM workflows.",
    },
    {
      name: "Professional Services Firms",
      icon: Scale,
      context: "Legal, accounting, and advisory firms whose business model relies on knowledge leverage.",
      solution: "Proprietary research synthesis platforms, automated doc analysis, and high-margin advisory productization.",
    },
    {
      name: "Private Equity-Backed Portfolios",
      icon: Coins,
      context: "Sponsors looking to accelerate EBITDA and operational efficiency across portfolio companies.",
      solution: "Cross-portfolio AI value creation playbooks, rapid automation sprints, and exit valuation acceleration.",
    },
    {
      name: "International Expansion Candidates",
      icon: Globe,
      context: "Ambitious enterprises expanding across the US, EMEA, GCC, and APAC regions.",
      solution: "AI-powered regulatory mapping, automated multi-lingual localization, and hyper-targeted cross-border GTM.",
    },
  ];

  return (
    <section id="who-we-work-with" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Section Five Header from Aicceler8 Website.docx */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-semibold tracking-wider text-brand-orange uppercase mb-3 block">
          SECTION FIVE // PARTNERS
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-normal text-neutral-950 tracking-tight leading-[1.12] mb-6">
          Who We Partner With
        </h2>
        <p className="text-xl sm:text-2xl text-neutral-900 font-medium leading-snug mb-3">
          We work with organizations that see AI as a strategic advantage—not just another technology initiative.
        </p>
        <p className="text-base text-neutral-600 font-normal leading-relaxed">
          Our clients range from market-leading enterprise conglomerates to high-growth businesses preparing for international scale.
        </p>
      </div>

      {/* Strategic Mindset Banner (from Aicceler8 Website.docx) */}
      <div className="mb-14 rounded-3xl border border-neutral-200 bg-surface-50 p-8 sm:p-12 relative overflow-hidden">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-coral font-semibold block mb-3">
            THE STRATEGIC MINDSET
          </span>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-sans font-normal text-neutral-950 tracking-tight leading-snug">
            Rather than asking <span className="text-neutral-400 line-through">“Can AI help us?”</span>, these organizations ask:
            <br />
            <span className="font-serif italic font-normal text-neutral-950 block mt-3">
              “How can AI redefine the way we grow?”
            </span>
          </p>
        </div>
      </div>

      {/* 12 Cohort Grid */}
      <div className="mb-6">
        <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4">
          Our Clients Typically Include:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {cohorts.map((cohort, idx) => {
            const Icon = cohort.icon;
            const isSelected = selectedCohort === idx;

            return (
              <button
                key={cohort.name}
                onClick={() => setSelectedCohort(idx)}
                className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between min-h-[110px] ${
                  isSelected
                    ? "bg-black text-white border-black shadow-md"
                    : "bg-surface-50 border-neutral-200/80 text-neutral-800 hover:bg-white hover:border-neutral-300"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                    isSelected ? "bg-white/10 text-white" : "bg-neutral-200/80 text-neutral-700"
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-[10px] font-mono ${isSelected ? "text-neutral-400" : "text-neutral-400"}`}>
                    0{idx + 1}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-tight">
                  {cohort.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Cohort Detail Card */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-coral font-bold block">
              Strategic Cohort: {cohorts[selectedCohort].name}
            </span>
            <p className="text-sm text-neutral-600">
              <strong className="text-neutral-900 font-semibold">Operational Context:</strong> {cohorts[selectedCohort].context}
            </p>
            <p className="text-sm text-neutral-900 font-medium">
              <strong className="text-neutral-900 font-semibold">AICceler8 Transformation:</strong> {cohorts[selectedCohort].solution}
            </p>
          </div>

          <a
            href="#why-aicceler8"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 hover:bg-black hover:text-white text-neutral-900 text-xs font-semibold tracking-wider transition-all"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
