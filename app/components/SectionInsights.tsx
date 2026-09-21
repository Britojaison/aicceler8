"use client";

import React, { useState } from "react";
import { ArrowUpRight, BookOpen, CheckCircle2, Linkedin, ExternalLink } from "lucide-react";

export default function SectionInsights() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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
    {
      id: "ai-enterprise-transformation",
      tag: "ORGANIZATIONAL TRANSFORMATION",
      readTime: "7 MIN READ",
      title: "From AI Adoption to Enterprise Transformation: The CEO's Guide",
      summary:
        "How leading enterprise CEOs are moving past departmental pilots to redesign their operating models, governance structures, and revenue engines around intelligence.",
      author: "Transformation Practice",
    },
    {
      id: "intelligent-systems",
      tag: "ENTERPRISE SYSTEMS",
      readTime: "6 MIN READ",
      title: "Building Defensible Enterprise Knowledge Systems That Actually Compound",
      summary:
        "A technical blueprint for unifying fragmented ERP, CRM, and internal databases into sub-second enterprise search and autonomous agent workflows.",
      author: "Systems Engineering",
    },
    {
      id: "workforce-enablement",
      tag: "WORKFORCE ENABLEMENT",
      readTime: "5 MIN READ",
      title: "The 10x Employee: Workforce Enablement Without Friction or Chaos",
      summary:
        "Practical frameworks for enabling cross-functional teams to integrate AI into daily execution while maintaining strict compliance and brand safety.",
      author: "People & Enablement",
    },
  ];

  return (
    <section id="insights" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Section Header from Aicceler8 Website.docx */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider text-brand-purple uppercase mb-3 block">
            SECTION NINE // PERSPECTIVES
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-neutral-950 tracking-tight leading-[1.12] mb-4">
            Insights for the <br />
            <span className="italic font-normal text-neutral-950">
              AI Era
            </span>
          </h2>
          <p className="text-xl sm:text-2xl font-serif italic text-neutral-900 leading-snug mb-4">
            “The future belongs to organizations that learn faster than the market.”
          </p>
          <p className="text-base text-neutral-600 font-normal leading-relaxed max-w-2xl">
            Explore our latest research, executive playbooks, industry perspectives and practical insights on enterprise AI, organizational transformation and global growth.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 text-xs font-semibold transition-all shadow-sm"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn Newsletter</span>
          </a>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
              <h4 className="text-lg font-serif font-bold text-neutral-950 mb-3 group-hover:text-black transition-colors leading-snug">
                {art.title}
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-6 font-normal">
                {art.summary}
              </p>
            </div>

            <div className="border-t border-neutral-200/80 pt-4 flex items-center justify-between">
              <span className="text-xs text-neutral-500">{art.author}</span>
              <span className="text-xs font-semibold text-neutral-900 flex items-center gap-1 group-hover:underline cursor-pointer">
                <span>Read Article</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* LinkedIn Newsletter Integration Box (from Aicceler8 Website.docx) */}
      <div className="rounded-3xl border border-neutral-200 bg-surface-50 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-black" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 font-bold">
              LinkedIn Newsletter Integration
            </span>
          </div>
          <h4 className="text-2xl sm:text-3xl font-serif font-normal text-neutral-950 mb-2">
            Insights for the <span className="italic font-normal">AI Era</span>
          </h4>
          <p className="text-sm text-neutral-600 font-normal">
            Subscribe to receive our latest research, executive playbooks, and practical insights on enterprise AI, organizational transformation, and global growth directly in your inbox.
          </p>
        </div>

        <div className="w-full md:w-auto min-w-[320px]">
          {subscribed ? (
            <div className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium">
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
