"use client";

import React, { useState } from "react";
import { ArrowUpRight, BookOpen, CheckCircle2, Linkedin, RotateCw, ArrowRight } from "lucide-react";

export default function SectionInsights() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  const articles = [
    {
      id: "ai-operating-system",
      tag: "EXECUTIVE PLAYBOOK",
      readTime: "6 MIN READ",
      title: "The Enterprise AI Operating System: Beyond Fragmented SaaS Subscriptions",
      summary:
        "Why subscribing to generic AI point solutions creates technical debt rather than enterprise value, and how to build a unified intelligence layer.",
      author: "AICceler8 Strategy Group",
      themeColor: "#F5AB26", // Amber
    },
    {
      id: "global-expansion",
      tag: "GLOBAL GROWTH",
      readTime: "8 MIN READ",
      title: "Cross-Border Scaling in the AI Age: Entering New Territories in 90 Days",
      summary:
        "How modern enterprises leverage automated regulatory synthesis, real-time localized pricing, and generative GTM to compress international expansion timelines by 60%.",
      author: "Global GTM Practice",
      themeColor: "#FF5349", // Red
    },
    {
      id: "executive-copilots",
      tag: "LEADERSHIP INTELLIGENCE",
      readTime: "5 MIN READ",
      title: "The Leadership Copilot: Reimagining Board Reporting & Real-time Telemetry",
      summary:
        "Replacing retrospective monthly PowerPoint decks with dynamic, predictive executive intelligence systems that forecast operational risk 45 days in advance.",
      author: "Enterprise Architecture Lab",
      themeColor: "#D628D8", // Fuchsia
    },
    {
      id: "ai-enterprise-transformation",
      tag: "ORGANIZATIONAL TRANSFORMATION",
      readTime: "7 MIN READ",
      title: "From AI Adoption to Enterprise Transformation: The CEO's Guide",
      summary:
        "How leading enterprise CEOs are moving past departmental pilots to redesign their operating models, governance structures, and revenue engines around intelligence.",
      author: "Transformation Practice",
      themeColor: "#6CB33F", // Green
    },
    {
      id: "intelligent-systems",
      tag: "ENTERPRISE SYSTEMS",
      readTime: "6 MIN READ",
      title: "Building Defensible Enterprise Knowledge Systems That Actually Compound",
      summary:
        "A technical blueprint for unifying fragmented ERP, CRM, and internal databases into sub-second enterprise search and autonomous agent workflows.",
      author: "Systems Engineering",
      themeColor: "#2563EB", // Blue
    },
    {
      id: "workforce-enablement",
      tag: "WORKFORCE ENABLEMENT",
      readTime: "5 MIN READ",
      title: "The 10x Employee: Workforce Enablement Without Friction or Chaos",
      summary:
        "Practical frameworks for enabling cross-functional teams to integrate AI into daily execution while maintaining strict compliance and brand safety.",
      author: "People & Enablement",
      themeColor: "#F5AB26",
    },
  ];

  return (
    <section id="insights" className="py-24 px-4 sm:px-6 lg:px-20 w-full border-t border-neutral-200/80 bg-neutral-50/40">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold tracking-widest text-[#D628D8] uppercase mb-4 block">
            SECTION NINE // PERSPECTIVES
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-neutral-950 tracking-tight leading-[1.08] mb-4">
            Insights for the <br />
            <span className="italic font-normal text-neutral-800">
              AI Era
            </span>
          </h2>
          <p className="text-xl sm:text-2xl font-serif italic text-neutral-900 leading-snug mb-4">
            “The future belongs to organizations that learn faster than the market.”
          </p>
          <p className="text-base text-neutral-600 font-normal leading-relaxed max-w-2xl border-l-2 border-neutral-300 pl-5">
            Explore our latest research, executive playbooks, industry perspectives and practical insights on enterprise AI, organizational transformation and global growth.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn Newsletter</span>
          </a>
        </div>
      </div>

      {/* Interactive 3D Flippable Article Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {articles.map((art) => {
          const isFlipped = !!flippedCards[art.id];

          return (
            <div
              key={art.id}
              className="h-[340px] w-full [perspective:1000px] cursor-pointer group"
              onClick={() => toggleFlip(art.id)}
              onMouseEnter={() => !isFlipped && setFlippedCards((prev) => ({ ...prev, [art.id]: true }))}
              onMouseLeave={() => isFlipped && setFlippedCards((prev) => ({ ...prev, [art.id]: false }))}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* FRONT OF CARD */}
                <div className="absolute inset-0 rounded-3xl p-8 bg-white border border-neutral-200/90 shadow-xs flex flex-col justify-between [backface-visibility:hidden] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: art.themeColor }} />

                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-4">
                      <span className="font-bold tracking-wider uppercase text-neutral-900">{art.tag}</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h4 className="text-xl font-serif font-bold text-neutral-950 mb-3 group-hover:text-black leading-snug">
                      {art.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal line-clamp-3">
                      {art.summary}
                    </p>
                  </div>

                  <div className="border-t border-neutral-100 pt-4 flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400">{art.author}</span>
                    <span className="text-xs font-bold text-neutral-900 flex items-center gap-1.5 group-hover:text-[#FF5349]">
                      <span>Hover / Flip for Executive Summary</span>
                      <RotateCw className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </span>
                  </div>
                </div>

                {/* BACK OF CARD */}
                <div
                  className="absolute inset-0 rounded-3xl p-8 bg-neutral-950 text-white border border-neutral-800 shadow-xl flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: art.themeColor }} />

                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase mb-4" style={{ color: art.themeColor }}>
                      <span>EXECUTIVE INSIGHT SUMMARY</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h4 className="text-lg font-serif italic text-white mb-3 leading-snug">
                      “{art.title}”
                    </h4>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      {art.summary}
                    </p>
                  </div>

                  <div className="border-t border-neutral-800 pt-4 flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400">{art.author}</span>
                    <span className="text-xs font-bold text-white inline-flex items-center gap-1.5 underline underline-offset-4">
                      <span>Read Article</span>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* LinkedIn Newsletter Integration Box */}
      <div className="rounded-3xl border border-neutral-200/90 bg-white p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm relative overflow-hidden">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-[#D628D8]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D628D8] font-bold">
              LINKEDIN NEWSLETTER INTEGRATION
            </span>
          </div>
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-neutral-950 mb-3">
            Insights for the <span className="italic font-normal text-neutral-800">AI Era</span>
          </h4>
          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Subscribe to receive our latest research, executive playbooks, and practical insights on enterprise AI, organizational transformation, and global growth directly in your inbox.
          </p>
        </div>

        <div className="w-full md:w-auto min-w-[340px]">
          {subscribed ? (
            <div className="flex items-center gap-2.5 px-6 py-4 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs font-bold shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Subscribed! You’ll receive our next executive dispatch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your enterprise email..."
                required
                className="px-5 py-3.5 rounded-full bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-black transition-colors w-full shadow-xs"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 active:scale-95 shadow-sm"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

