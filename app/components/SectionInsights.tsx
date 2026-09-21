"use client";

import React, { useState } from "react";
import { ArrowUpRight, BookOpen, CheckCircle2 } from "lucide-react";

export default function SectionInsights() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  const analysts = [
    {
      organization: "Gartner",
      title: "Featured in Enterprise AI & Autonomous Decision Systems Research",
      link: "#",
    },
    {
      organization: "Forrester",
      title: "Recognized for Unified AI Operating Models and Workforce Enablement",
      link: "#",
    },
    {
      organization: "World Economic Forum",
      title: "Frameworks for Responsible Generative AI in Global Enterprises",
      link: "#",
    },
    {
      organization: "Harvard Business Review",
      title: "Perspective: Moving Beyond SaaS Subscriptions to Enterprise AI Moats",
      link: "#",
    },
  ];

  const articles = [
    {
      id: "ai-operating-system",
      tag: "EXECUTIVE PLAYBOOK",
      readTime: "6 MIN READ",
      title: "The Enterprise AI Operating System: Beyond Fragmented SaaS Subscriptions",
      summary:
        "Why subscribing to generic AI point solutions creates technical debt rather than enterprise value, and how to build a unified intelligence layer.",
      author: "AICceler8 Strategy Group",
    },
    {
      id: "global-expansion",
      tag: "GLOBAL GROWTH",
      readTime: "8 MIN READ",
      title: "Cross-Border Scaling in the AI Age: Entering New Territories in 90 Days",
      summary:
        "How modern enterprises leverage automated regulatory synthesis, real-time localized pricing, and generative GTM to compress international expansion timelines by 60%.",
      author: "Global GTM Practice",
    },
    {
      id: "executive-copilots",
      tag: "LEADERSHIP INTELLIGENCE",
      readTime: "5 MIN READ",
      title: "The Leadership Copilot: Reimagining Board Reporting & Real-time Telemetry",
      summary:
        "Replacing retrospective monthly PowerPoint decks with dynamic, predictive executive intelligence systems that forecast operational risk 45 days in advance.",
      author: "Enterprise Architecture Lab",
    },
  ];

  return (
    <section id="insights" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Analyst Recognition Grid (Freshworks Image 3 Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        <div className="lg:col-span-4">
          <h2 className="text-4xl sm:text-5xl font-sans font-normal text-neutral-950 tracking-tight leading-tight mb-4">
            Trusted by <br />
            <span className="font-serif italic font-normal text-neutral-950">
              experts
            </span>
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            Backed by executive research, analyst recognition, and verified enterprise business transformation methodologies.
          </p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 border-t sm:border-t-0 sm:border-l border-neutral-200/80 sm:pl-10">
          {analysts.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-2xl font-serif font-bold text-neutral-900 tracking-tight">
                {item.organization}
              </div>
              <a
                href={item.link}
                className="group inline-flex items-start gap-1 text-xs sm:text-sm font-medium text-neutral-700 hover:text-black leading-snug"
              >
                <span>{item.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Executive Briefings Cards */}
      <div className="mb-12">
        <h3 className="text-2xl font-sans font-bold text-neutral-950 mb-2">
          Insights for the AI Era
        </h3>
        <p className="text-sm text-neutral-500 mb-8">
          The future belongs to organizations that learn faster than the market.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <article
              key={art.id}
              className="rounded-2xl p-7 bg-surface-50 border border-neutral-200/80 hover:bg-white hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-900/5 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-3">
                  <span className="text-neutral-900 font-semibold">{art.tag}</span>
                  <span>{art.readTime}</span>
                </div>
                <h4 className="text-lg font-sans font-bold text-neutral-950 mb-3 group-hover:text-black transition-colors leading-snug">
                  {art.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                  {art.summary}
                </p>
              </div>

              <div className="border-t border-neutral-200/80 pt-4 flex items-center justify-between">
                <span className="text-xs text-neutral-500">{art.author}</span>
                <span className="text-xs font-semibold text-neutral-900 flex items-center gap-1 group-hover:underline">
                  <span>Read Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Executive Newsletter Dispatch Box */}
      <div className="rounded-3xl border border-neutral-200 bg-surface-50 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-black" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 font-bold">
              The Enterprise AI Dispatch
            </span>
          </div>
          <h4 className="text-2xl font-sans font-bold text-neutral-950 mb-2">
            Stay ahead of foundational AI shifts.
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600">
            Join 4,200+ enterprise leaders, founders, and directors receiving our bi-weekly strategic analysis on enterprise AI and global growth.
          </p>
        </div>

        <div className="w-full md:w-auto min-w-[320px]">
          {subscribed ? (
            <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Subscribed! You’ll receive our next executive dispatch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter executive email..."
                required
                className="px-4 py-3 rounded-full bg-white border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-black transition-colors w-full shadow-xs"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
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
