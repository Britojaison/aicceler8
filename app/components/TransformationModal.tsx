"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

export interface TransformationItem {
  id: string;
  cardNum: string;
  title: string;
  tagline: string;
  sector: string;
  summary: string;
  beforeState: string;
  aicceler8System: string;
  businessResults: string[];
  metrics: { label: string; value: string }[];
  icon?: React.ComponentType<{ className?: string }>;
}

interface TransformationModalProps {
  item: TransformationItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function TransformationModal({
  item,
  onClose,
  onOpenBooking,
}: TransformationModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-3xl p-8 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8 pr-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-bold text-neutral-900 px-2.5 py-0.5 rounded bg-neutral-100">
              {item.cardNum}
            </span>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              {item.sector}
            </span>
          </div>
          <h3 className="text-3xl font-sans font-bold text-neutral-950 mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-neutral-600 font-medium">
            {item.tagline}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {item.metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
              <div className="text-[11px] text-neutral-500 uppercase font-mono mb-1">{m.label}</div>
              <div className="text-xl font-sans font-bold text-neutral-950">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Narrative Breakdown */}
        <div className="space-y-6 text-sm text-neutral-700 border-t border-neutral-200 pt-6 mb-8">
          <div>
            <span className="text-xs font-mono uppercase text-neutral-400 block mb-1 font-semibold">
              The Challenge / Pre-AI State:
            </span>
            <p className="text-neutral-600 leading-relaxed">{item.beforeState}</p>
          </div>

          <div>
            <span className="text-xs font-mono uppercase text-neutral-900 block mb-1 font-semibold">
              The AICceler8 Solution:
            </span>
            <p className="text-neutral-800 leading-relaxed">{item.aicceler8System}</p>
          </div>

          <div>
            <span className="text-xs font-mono uppercase text-neutral-900 block mb-2 font-semibold">
              Measurable Business Outcomes:
            </span>
            <ul className="space-y-2">
              {item.businessResults.map((res, rIdx) => (
                <li key={rIdx} className="flex items-start gap-2.5 text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-200">
          <span className="text-xs text-neutral-500 font-mono">
            Custom enterprise blueprints available on request.
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <span>Discuss This Transformation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
