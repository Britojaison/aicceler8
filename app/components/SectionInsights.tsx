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
      themeColor: "#E2725B",
    },
    {
      id: "global-expansion",
      tag: "GLOBAL GROWTH",
      readTime: "8 MIN READ",
      title: "Cross-Border Scaling in the AI Age: Entering New Territories in 90 Days",
      summary:
        "How modern enterprises leverage automated regulatory synthesis, real-time localized pricing, and generative GTM to compress international expansion timelines by 60%.",
      author: "Global GTM Practice",
      themeColor: "#E2725B",
    },
    {
      id: "executive-copilots",
      tag: "LEADERSHIP INTELLIGENCE",
      readTime: "5 MIN READ",
      title: "The Leadership Copilot: Reimagining Board Reporting & Real-time Telemetry",
      summary:
        "Replacing retrospective monthly PowerPoint decks with dynamic, predictive executive intelligence systems that forecast operational risk 45 days in advance.",
      author: "Enterprise Architecture Lab",
      themeColor: "#E2725B",
    },
    {
      id: "ai-enterprise-transformation",
      tag: "ORGANIZATIONAL TRANSFORMATION",
      readTime: "7 MIN READ",
      title: "From AI Adoption to Enterprise Transformation: The CEO's Guide",
      summary:
        "How leading enterprise CEOs are moving past departmental pilots to redesign their operating models, governance structures, and revenue engines around intelligence.",
      author: "Transformation Practice",
      themeColor: "#E2725B",
    },
    {
      id: "intelligent-systems",
      tag: "ENTERPRISE SYSTEMS",
      readTime: "6 MIN READ",
      title: "Building Defensible Enterprise Knowledge Systems That Actually Compound",
      summary:
        "A technical blueprint for unifying fragmented ERP, CRM, and internal databases into sub-second enterprise search and autonomous agent workflows.",
      author: "Systems Engineering",
      themeColor: "#E2725B",
    },
    {
      id: "workforce-enablement",
      tag: "WORKFORCE ENABLEMENT",
      readTime: "5 MIN READ",
      title: "The 10x Employee: Workforce Enablement Without Friction or Chaos",
      summary:
        "Practical frameworks for enabling cross-functional teams to integrate AI into daily execution while maintaining strict compliance and brand safety.",
      author: "People & Enablement",
      themeColor: "#E2725B",
    },
  ];

  return (
    <section id="insights" className="py-24 px-6 sm:px-12 lg:px-20 w-full border-t border-burnt-peach/20 bg-espresso-deep relative isolate overflow-hidden">
      <div className="corner-plus top-6 left-6" />
      <div className="corner-plus top-6 right-6" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div className="max-w-3xl">
          <span className="type-mono text-burnt-peach block mb-3">
            SECTION NINE // PERSPECTIVES
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-foreground tracking-tight leading-[1.05] uppercase mb-4">
            INSIGHTS FOR THE <br />
            <span className="italic font-light text-burnt-peach">
              AI ERA
            </span>
          </h2>
          <p className="text-xl sm:text-2xl font-serif italic text-burnt-peach leading-snug mb-4">
            “The future belongs to organizations that learn faster than the market.”
          </p>
          <p className="text-base text-foreground/80 font-normal leading-relaxed max-w-2xl border-l border-burnt-peach/30 pl-5">
            Explore our latest research, executive playbooks, industry perspectives and practical insights on enterprise AI, organizational transformation and global growth.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="type-mono text-[11px] inline-flex items-center gap-2.5 px-7 py-3.5 bg-burnt-peach hover:bg-burnt-peach-light text-espresso-deep font-bold transition-all shadow-md active:scale-95"
          >
            <Linkedin className="w-4 h-4" />
            <span>LINKEDIN NEWSLETTER</span>
          </a>
        </div>
      </div>

      {/* Interactive Article Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
                <div className="absolute inset-0 rounded-2xl p-8 bg-espresso-dark/80 border border-burnt-peach/30 shadow-xl flex flex-col justify-between [backface-visibility:hidden] overflow-hidden backdrop-blur-md">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-burnt-peach" />

                  <div>
                    <div className="flex items-center justify-between type-mono text-[10px] text-burnt-peach mb-4">
                      <span className="font-bold uppercase text-soft-apricot">{art.tag}</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h4 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-soft-apricot leading-snug">
                      {art.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed font-normal line-clamp-3">
                      {art.summary}
                    </p>
                  </div>

                  <div className="border-t border-burnt-peach/20 pt-4 flex items-center justify-between">
                    <span className="type-mono text-[10px] text-foreground/50">{art.author}</span>
                    <span className="type-mono text-[10px] text-burnt-peach flex items-center gap-1.5 font-bold">
                      <span>HOVER / FLIP FOR SUMMARY</span>
                      <RotateCw className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </span>
                  </div>
                </div>

                {/* BACK OF CARD */}
                <div
                  className="absolute inset-0 rounded-2xl p-8 bg-espresso-night text-foreground border border-burnt-peach/40 shadow-2xl flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-burnt-peach" />

                  <div>
                    <div className="flex items-center justify-between type-mono text-[10px] text-burnt-peach mb-4">
                      <span>EXECUTIVE INSIGHT SUMMARY</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h4 className="text-lg font-serif italic text-soft-apricot mb-3 leading-snug">
                      “{art.title}”
                    </h4>

                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">
                      {art.summary}
                    </p>
                  </div>

                  <div className="border-t border-burnt-peach/20 pt-4 flex items-center justify-between">
                    <span className="type-mono text-[10px] text-foreground/50">{art.author}</span>
                    <span className="type-mono text-[10px] font-bold text-burnt-peach inline-flex items-center gap-1.5 underline underline-offset-4">
                      <span>READ ARTICLE</span>
                      <ArrowUpRight className="w-4 h-4 text-burnt-peach" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* LinkedIn Newsletter Integration Box */}
      <div className="max-w-7xl mx-auto rounded-2xl border border-burnt-peach/30 bg-espresso-dark/80 p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-burnt-peach" />
            <span className="type-mono text-[10px] text-burnt-peach font-bold">
              LINKEDIN NEWSLETTER INTEGRATION
            </span>
          </div>
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-foreground mb-3 uppercase">
            INSIGHTS FOR THE <span className="italic font-light text-soft-apricot">AI ERA</span>
          </h4>
          <p className="text-sm sm:text-base text-foreground/80 font-normal leading-relaxed">
            Subscribe to receive our latest research, executive playbooks, and practical insights on enterprise AI, organizational transformation, and global growth directly in your inbox.
          </p>
        </div>

        <div className="w-full md:w-auto min-w-[340px]">
          {subscribed ? (
            <div className="flex items-center gap-2.5 px-6 py-4 rounded-xl bg-espresso-deep border border-burnt-peach/40 text-soft-apricot text-xs font-bold shadow-md">
              <CheckCircle2 className="w-4 h-4 text-burnt-peach shrink-0" />
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
                className="px-5 py-3.5 rounded-xl bg-espresso-deep border border-burnt-peach/30 text-foreground text-xs focus:outline-none focus:border-burnt-peach transition-colors w-full"
              />
              <button
                type="submit"
                className="type-mono text-[10px] px-7 py-3.5 bg-burnt-peach hover:bg-burnt-peach-light text-espresso-deep font-bold transition-all shadow-md shrink-0 active:scale-95"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
