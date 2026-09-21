"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck, Download } from "lucide-react";

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingDrawer({ isOpen, onClose }: BookingDrawerProps) {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("10:00 AM EST");
  const [step, setStep] = useState<"calendar" | "details" | "confirmed">("calendar");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    size: "201–1,000 employees",
    focus: "Enterprise Growth & Revenue",
    notes: "",
  });

  const dates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
    const monthName = d.toLocaleDateString("en-US", { month: "short" });
    const dateNum = d.getDate();
    return {
      label: `${dayName}, ${monthName} ${dateNum}`,
      shortDay: dayName,
      dateNum,
      fullDate: d.toISOString().split("T")[0],
    };
  });

  const timeSlots = [
    "09:30 AM EST",
    "11:00 AM EST",
    "01:30 PM EST",
    "03:00 PM EST",
    "04:30 PM EST",
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;
    setStep("confirmed");
  };

  const handleDownloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AICceler8//Enterprise Strategy Session//EN
BEGIN:VEVENT
SUMMARY:AICceler8 Enterprise Growth Strategy Session
DESCRIPTION:Strategic executive discussion with AICceler8 regarding enterprise AI transformation for ${formData.company || "Enterprise"}.
DTSTART:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z
DURATION:PT45M
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "AICceler8-Strategy-Session.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-200"
      />

      {/* Slide-over Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-lg bg-white border-l border-neutral-200 shadow-2xl flex flex-col justify-between overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b border-neutral-100 flex items-center justify-between bg-surface-50">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 font-bold">
                  EXECUTIVE SCHEDULER
                </span>
              </div>
              <h3 className="text-xl font-sans font-bold text-neutral-950 mt-1">
                Book an Enterprise Strategy Session
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-200/80 hover:bg-neutral-300 text-neutral-700 transition-colors"
              aria-label="Close scheduler"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 flex-1">
            {step === "calendar" && (
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-3">
                    <Calendar className="w-4 h-4 text-neutral-900" />
                    <span>Select Preferred Date</span>
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {dates.map((d, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedDateIndex(idx)}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          selectedDateIndex === idx
                            ? "bg-black border-black text-white shadow-sm"
                            : "bg-surface-50 border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:bg-white"
                        }`}
                      >
                        <div className="text-[10px] font-mono uppercase">{d.shortDay}</div>
                        <div className="text-base font-bold">{d.dateNum}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-3">
                    <Clock className="w-4 h-4 text-neutral-900" />
                    <span>Select Executive Time Slot</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                          selectedTimeSlot === slot
                            ? "bg-neutral-100 border-black text-neutral-950 font-bold"
                            : "bg-surface-50 border-neutral-200 text-neutral-600 hover:border-neutral-300"
                        }`}
                      >
                        <span>{slot}</span>
                        {selectedTimeSlot === slot && (
                          <span className="w-1.5 h-1.5 rounded-full bg-black" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-50 border border-neutral-200/80 space-y-2 text-xs text-neutral-600">
                  <div className="flex items-center gap-2 text-neutral-900 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Confidential Strategy Session (45 Mins)</span>
                  </div>
                  <p>
                    Held directly with an AICceler8 Managing Director to assess enterprise readiness, data moats, and growth opportunities.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setStep("details")}
                  className="w-full py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>Continue to Organization Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === "details" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-xs text-neutral-500 mb-2 flex items-center justify-between">
                  <span>Selected: {dates[selectedDateIndex]?.label} @ {selectedTimeSlot}</span>
                  <button
                    type="button"
                    onClick={() => setStep("calendar")}
                    className="text-black font-semibold hover:underline"
                  >
                    Change
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase text-neutral-600 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase text-neutral-600 mb-1">
                    Corporate Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="s.jenkins@enterprise.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-black"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium uppercase text-neutral-600 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Apex Global"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase text-neutral-600 mb-1">
                      Organization Size
                    </label>
                    <select
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-black"
                    >
                      <option>50–200 employees</option>
                      <option>201–1,000 employees</option>
                      <option>1,001–5,000 employees</option>
                      <option>5,000+ employees</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase text-neutral-600 mb-1">
                    Primary Strategic Priority
                  </label>
                  <select
                    value={formData.focus}
                    onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-black"
                  >
                    <option>Enterprise Growth & Revenue Engines</option>
                    <option>Intelligent Operations & Workflow Automation</option>
                    <option>Workforce Enablement & Leadership Copilots</option>
                    <option>Global Expansion & Cross-Border GTM</option>
                    <option>Comprehensive AI Transformation Blueprint</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm mt-2"
                >
                  <span>Confirm Enterprise Strategy Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {step === "confirmed" && (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest font-bold block mb-1">
                    CONFIRMED & RESERVED
                  </span>
                  <h4 className="text-2xl font-sans font-bold text-neutral-950">
                    We look forward to meeting, {formData.name}.
                  </h4>
                  <p className="text-xs text-neutral-600 mt-2 max-w-sm mx-auto">
                    A calendar invitation and briefing preparation checklist have been dispatched to <strong className="text-black">{formData.email}</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-50 border border-neutral-200 text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Date & Time:</span>
                    <span className="text-neutral-900 font-semibold">
                      {dates[selectedDateIndex]?.label} @ {selectedTimeSlot}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Organization:</span>
                    <span className="text-neutral-900 font-semibold">{formData.company}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleDownloadICS}
                    className="w-full py-3 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-neutral-900 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4 text-neutral-900" />
                    <span>Download Calendar Event (.ics)</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="w-full py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs uppercase tracking-wider font-semibold"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-neutral-100 bg-surface-50 flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>AICCELER8 ENTERPRISE ASSURANCE</span>
            <span>NDA PROTECTED</span>
          </div>
        </div>
      </div>
    </div>
  );
}
