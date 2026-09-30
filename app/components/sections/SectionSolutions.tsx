"use client";

import React, { useState } from "react";
import { useGsapScrollTrigger } from "../ui/useGsapScrollTrigger";

export interface ServiceItem {
  id: string;
  titleLine1: string;
  titleLine2: string;
  statement: string;
  hasRedDot?: boolean;
  deliverables: string[];
}

interface SectionSolutionsProps {
  onOpenBooking: () => void;
}

export default function SectionSolutions({ onOpenBooking }: SectionSolutionsProps) {
  // Default active card is "digital-transformation" (or first item)
  const [activeId, setActiveId] = useState<string>("digital-transformation");
  const sectionRef = useGsapScrollTrigger<HTMLElement>({ stagger: 0.08 });

  const services: ServiceItem[] = [
    {
      id: "ai-workshops",
      titleLine1: "AI Workshops &",
      titleLine2: "Capability Building",
      statement:
        "We help teams, leaders, and institutions build AI fluency through hands-on programs covering real-world tools, Generative AI, agentic systems, and responsible adoption.",
      deliverables: [
        "Executive & Leadership AI Briefings",
        "Hands-on Generative AI Bootcamps",
        "Prompt Engineering & Custom GPTs",
        "Agentic Systems & Autonomous Workflows",
        "Responsible AI & Governance Protocols",
        "Continuous Departmental Upskilling",
      ],
    },
    {
      id: "digital-transformation",
      titleLine1: "AI-Enabled Digital",
      titleLine2: "Transformation",
      statement:
        "This is our flagship service line. We help enterprises and institutions integrate AI into their core operations, processes, and decision-making frameworks.",
      hasRedDot: true,
      deliverables: [
        "Enterprise AI Architecture & Roadmaps",
        "Core Operations & Process Redesign",
        "Legacy Systems & Unified Data Pipelines",
        "Autonomous Multi-Agent Deployments",
        "Predictive Decision Intelligence Engines",
        "Change Management & Measurable ROI",
      ],
    },
    {
      id: "content-automation",
      titleLine1: "Gen AI-Powered",
      titleLine2: "Content & Automation",
      statement:
        "We help marketing, HR, and operations teams scale content production with quality and speed using Generative AI.",
      deliverables: [
        "Multi-Channel Enterprise Content Engines",
        "Automated Marketing & Creative Pipelines",
        "Internal Knowledge Retrieval (RAG)",
        "Automated HR & Operations Workflows",
        "Multimodal Asset Generation & QA",
        "Real-Time Performance Analytics",
      ],
    },
    {
      id: "strategy-consulting",
      titleLine1: "Strategy &",
      titleLine2: "Business Consulting",
      statement:
        "We help organizations grow with clear strategy, strong systems, and smarter execution.",
      deliverables: [
        "AI-Native Growth Strategy & Positioning",
        "Operating Model & System Modernization",
        "Intelligent Resource & Capital Allocation",
        "Commercial Model & Pricing Optimization",
        "Strategic Execution Roadmaps",
        "Competitive Intelligence & Moat Building",
      ],
    },
    {
      id: "people-culture",
      titleLine1: "People, Org &",
      titleLine2: "Culture Transformation",
      statement:
        "We transform organizations from within aligning teams, redesigning culture, and enabling leadership to succeed in the digital era.",
      deliverables: [
        "Organization-Wide Culture & Mindset Shift",
        "Cross-Functional Team Alignment",
        "Digital Era Leadership Enablement",
        "AI-Augmented Role Redefinition",
        "Talent Retention & Capability Metrics",
        "Collaborative Workflow Ecosystems",
      ],
    },
    {
      id: "public-sector",
      titleLine1: "Public Sector &",
      titleLine2: "Government Consulting",
      statement:
        "We help government bodies, civic departments, and public institutions modernize, digitize, and scale impact using AI and intelligent systems.",
      deliverables: [
        "Civic Department Digital Modernization",
        "Intelligent Citizen Service Portals",
        "Secure & Sovereign Data Systems",
        "Policy & Regulatory Impact Modeling",
        "Public Healthcare & Utility Optimization",
        "Ethical AI Governance & Transparency",
      ],
    },
    {
      id: "accelerate-cxo",
      titleLine1: "Accelerate for CXOs,",
      titleLine2: "Founders & Brands",
      statement:
        "A unique offering where we work directly with leaders to help them scale their organization, brand, and systems of growth.",
      hasRedDot: true,
      deliverables: [
        "1-on-1 Strategic Advisory for Founders",
        "Executive Intelligence Copilots & Telemetry",
        "Brand Equity & Market Authority Scaling",
        "High-Growth Systems Architecture",
        "Investor Narrative & Board Telemetry",
        "Accelerated Product-Market Expansion",
      ],
    },
    {
      id: "marketing-consumer",
      titleLine1: "Marketing &",
      titleLine2: "Consumer Intelligence",
      statement:
        "We bring AI into the heart of marketing to unlock smarter performance, better personalization, and scalable storytelling.",
      deliverables: [
        "Predictive Consumer Intent Modeling",
        "Hyper-Personalized Omnichannel Campaigns",
        "Real-Time Customer Sentiment Tracking",
        "AI-Assisted Brand Storytelling",
        "Performance Media & Conversion Optimization",
        "Dynamic Content Adaptation at Scale",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-12 relative bg-white"
    >
      <div id="services" className="absolute -top-20" />

      {/* Clean Minimal Section Heading matching Wix Studio Content */}
      <div data-gsap="title" className="max-w-[1600px] mx-auto mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-medium text-neutral-950 tracking-tight leading-[1.08]">
          Solutions for Intelligent Growth
        </h2>
      </div>

      {/* Stacked Service Cards (Designerpart.com 1:1 Layout & Hover Interaction) */}
      <div className="max-w-[1600px] mx-auto flex flex-col gap-4 sm:gap-6">
        {services.map((service) => {
          const isActive = activeId === service.id;

          return (
            <div
              key={service.id}
              data-gsap="item"
              onMouseEnter={() => setActiveId(service.id)}
              onClick={onOpenBooking}
              className={`group relative w-full rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 transition-colors duration-500 cursor-pointer overflow-hidden ${
                isActive
                  ? "bg-black text-white"
                  : "bg-[#F4F4F4] text-black hover:bg-[#EAEAEA]"
              }`}
            >
              {/* Massive Architectural Top-Right Diagonal Arrow (Visible only on Active Black Card) */}
              <div
                className={`absolute top-8 right-8 sm:top-12 sm:right-12 lg:top-14 lg:right-14 transition-all duration-500 pointer-events-none ${
                  isActive
                    ? "opacity-100 translate-x-0 translate-y-0"
                    : "opacity-0 translate-x-2 -translate-y-2"
                }`}
                aria-hidden="true"
              >
                <svg
                  className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 stroke-white stroke-[1.25]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* 3-Column Layout: Left (Title), Middle (Pitch Statement), Right (Offerings list) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pr-12 lg:pr-20">
                {/* Column 1: Massive Bold Title, Line, & "Mehr erfahren →" style link */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-extrabold tracking-tight leading-[1.04]">
                      <span className="block">{service.titleLine1}</span>
                      <span className="block">{service.titleLine2}</span>
                    </h3>
                  </div>

                  {/* Horizontal Divider Bar */}
                  <div
                    className={`w-28 sm:w-32 h-[1.5px] mt-8 mb-6 sm:mt-10 sm:mb-8 transition-colors duration-500 ${
                      isActive ? "bg-white" : "bg-black"
                    }`}
                  />

                  {/* Clean CTA Link */}
                  <div className="inline-flex items-center gap-2 text-sm sm:text-base font-medium tracking-tight">
                    <span className="hover:underline underline-offset-4">
                      Learn more
                    </span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </div>
                </div>

                {/* Column 2: Punchy Statement with Signature Red Accent Dot */}
                <div className="lg:col-span-4 lg:pt-3">
                  <p
                    className={`text-xl sm:text-2xl lg:text-[1.65rem] font-medium leading-[1.3] tracking-tight transition-colors duration-500 ${
                      isActive ? "text-white" : "text-black"
                    }`}
                  >
                    {service.statement}
                    {isActive && (
                      <span
                        className="inline-block w-2.5 h-2.5 rounded-full ml-2 align-middle bg-[#FF2D20]"
                        aria-hidden="true"
                      />
                    )}
                  </p>
                </div>

                {/* Column 3: Capabilities List with Em Dashes */}
                <div className="lg:col-span-3 lg:pt-3">
                  <ul className="space-y-2 sm:space-y-2.5">
                    {service.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className={`text-xs sm:text-sm lg:text-[0.95rem] font-normal leading-relaxed transition-colors duration-500 ${
                          isActive ? "text-white/85" : "text-black/85"
                        }`}
                      >
                        <span className="select-none mr-2">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
