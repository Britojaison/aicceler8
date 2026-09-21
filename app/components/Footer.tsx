"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-burnt-peach/20 bg-espresso-night pt-20 pb-12 px-6 sm:px-12 lg:px-20 w-full relative isolate overflow-hidden">
      <div className="corner-plus top-6 left-6" />
      <div className="corner-plus top-6 right-6" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="relative h-9 w-28 flex items-center">
            <Image
              src="/logo.png"
              alt="AICceler8"
              fill
              className="object-contain filter brightness-0"
            />
          </div>
          <p className="text-xs sm:text-sm text-foreground/80 font-normal max-w-sm leading-relaxed">
            An Enterprise Growth & Transformation Company powered by Artificial Intelligence. We partner with ambitious leadership teams to redesign how their organizations grow, operate, and compete.
          </p>
          <div className="flex items-center gap-2 type-mono text-[10px] text-burnt-peach font-bold">
            <span className="w-2 h-2 rounded-full bg-burnt-peach animate-pulse" />
            <span>SYSTEMS OPERATIONAL · CONTINUOUS ENTERPRISE EVOLUTION</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <span className="type-mono text-burnt-peach font-bold block">
            NAVIGATION
          </span>
          <ul className="space-y-2 type-mono text-[11px] text-foreground/70">
            <li>
              <a href="#why-aicceler8" className="hover:text-burnt-peach transition-colors">
                WHY AICCELER8
              </a>
            </li>
            <li>
              <a href="#how-we-transform" className="hover:text-burnt-peach transition-colors">
                HOW WE TRANSFORM
              </a>
            </li>
            <li>
              <a href="#enterprise-impact" className="hover:text-burnt-peach transition-colors">
                HOW WE CREATE IMPACT
              </a>
            </li>
            <li>
              <a href="#who-we-work-with" className="hover:text-burnt-peach transition-colors">
                WHO WE PARTNER WITH
              </a>
            </li>
            <li>
              <a href="#transformations" className="hover:text-burnt-peach transition-colors">
                ENTERPRISE TRANSFORMATIONS
              </a>
            </li>
            <li>
              <a href="#insights" className="hover:text-burnt-peach transition-colors">
                INSIGHTS FOR THE AI ERA
              </a>
            </li>
          </ul>
        </div>

        {/* Global Hubs */}
        <div className="space-y-3">
          <span className="type-mono text-soft-apricot font-bold block">
            GLOBAL HUBS
          </span>
          <ul className="space-y-2 type-mono text-[11px] text-foreground/60">
            <li className="flex items-center justify-between">
              <span>SAN FRANCISCO</span>
              <span className="text-burnt-peach/70">PST</span>
            </li>
            <li className="flex items-center justify-between">
              <span>NEW YORK</span>
              <span className="text-burnt-peach/70">EST</span>
            </li>
            <li className="flex items-center justify-between">
              <span>LONDON</span>
              <span className="text-burnt-peach/70">GMT</span>
            </li>
            <li className="flex items-center justify-between">
              <span>SINGAPORE</span>
              <span className="text-burnt-peach/70">SGT</span>
            </li>
            <li className="flex items-center justify-between">
              <span>DUBAI</span>
              <span className="text-burnt-peach/70">GST</span>
            </li>
          </ul>
        </div>

        {/* Governance & Assurance */}
        <div className="space-y-3">
          <span className="type-mono text-soft-apricot font-bold block">
            ASSURANCE
          </span>
          <p className="text-xs text-foreground/70 leading-relaxed">
            Enterprise-grade data isolation, custom non-disclosure terms, and SOC2 / HIPAA compliant implementation architectures.
          </p>
          <div className="pt-2">
            <button
              onClick={scrollToTop}
              className="type-mono text-[11px] inline-flex items-center gap-2 text-burnt-peach hover:text-soft-apricot transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto border-t border-burnt-peach/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 type-mono text-[10px] text-foreground/50">
        <div>
          © {new Date().getFullYear()} AICCELER8 ENTERPRISE HOLDINGS INC. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-6 text-foreground/60">
          <span className="hover:text-burnt-peach cursor-pointer">PRIVACY POLICY</span>
          <span className="hover:text-burnt-peach cursor-pointer">ENTERPRISE TERMS</span>
          <span className="hover:text-burnt-peach cursor-pointer">SECURITY WHITEPAPER</span>
        </div>
      </div>
    </footer>
  );
}
