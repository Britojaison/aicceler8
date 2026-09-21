"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-neutral-200/80 bg-surface-50 pt-20 pb-12 px-4 sm:px-6 lg:px-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="relative h-8 w-26 flex items-center">
            <Image
              src="/logo.png"
              alt="AICceler8"
              fill
              className="object-contain filter invert"
            />
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 font-normal max-w-sm leading-relaxed">
            An Enterprise Growth & Transformation Company powered by Artificial Intelligence. We partner with ambitious leadership teams to redesign how their organizations grow, operate, and compete.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Systems Operational · Continuous Enterprise Evolution</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-900 font-bold block">
            Navigation
          </span>
          <ul className="space-y-2 text-xs text-neutral-600">
            <li>
              <a href="#why-aicceler8" className="hover:text-black transition-colors">
                Why AICceler8
              </a>
            </li>
            <li>
              <a href="#how-we-transform" className="hover:text-black transition-colors">
                How We Transform
              </a>
            </li>
            <li>
              <a href="#enterprise-impact" className="hover:text-black transition-colors">
                How We Create Impact
              </a>
            </li>
            <li>
              <a href="#who-we-work-with" className="hover:text-black transition-colors">
                Who We Partner With
              </a>
            </li>
            <li>
              <a href="#transformations" className="hover:text-black transition-colors">
                Enterprise Transformations
              </a>
            </li>
            <li>
              <a href="#insights" className="hover:text-black transition-colors">
                Insights for the AI Era
              </a>
            </li>
          </ul>
        </div>

        {/* Global Hubs */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-900 font-bold block">
            Global Hubs
          </span>
          <ul className="space-y-2 text-xs text-neutral-500 font-mono">
            <li className="flex items-center justify-between">
              <span>San Francisco</span>
              <span className="text-neutral-400">PST</span>
            </li>
            <li className="flex items-center justify-between">
              <span>New York</span>
              <span className="text-neutral-400">EST</span>
            </li>
            <li className="flex items-center justify-between">
              <span>London</span>
              <span className="text-neutral-400">GMT</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Singapore</span>
              <span className="text-neutral-400">SGT</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Dubai</span>
              <span className="text-neutral-400">GST</span>
            </li>
          </ul>
        </div>

        {/* Governance & Assurance */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-900 font-bold block">
            Assurance
          </span>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Enterprise-grade data isolation, custom non-disclosure terms, and SOC2 / HIPAA compliant implementation architectures.
          </p>
          <div className="pt-2">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-black transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-neutral-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
        <div>
          © {new Date().getFullYear()} AICceler8 Enterprise Holdings Inc. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-neutral-500">
          <span className="hover:text-black cursor-pointer">Privacy Policy</span>
          <span className="hover:text-black cursor-pointer">Enterprise Terms</span>
          <span className="hover:text-black cursor-pointer">Security Whitepaper</span>
        </div>
      </div>
    </footer>
  );
}
