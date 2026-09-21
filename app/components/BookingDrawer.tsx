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
        <div className="w-screen max-w-lg bg-espresso-deep border-l border-burnt-peach/30 shadow-2xl flex flex-col justify-between overflow-y-auto text-foreground">
          {/* Header */}
          <div className="p-6 border-b border-burnt-peach/20 flex items-center justify-between bg-espresso-dark">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-burnt-peach animate-pulse" />
                <span className="type-mono text-[10px] text-burnt-peach font-bold">
                  EXECUTIVE SCHEDULER
                </span>
              </div>
              <h3 className="text-xl font-sans font-bold text-foreground mt-1">
                Book an Enterprise Strategy Session
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-espresso-light/60 hover:bg-espresso-light text-foreground transition-colors"
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
                  <label className="flex items-center gap-2 type-mono text-[10px] text-burnt-peach mb-3">
                    <Calendar className="w-4 h-4 text-burnt-peach" />
                    <span>SELECT PREFERRED DATE</span>
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {dates.map((d, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedDateIndex(idx)}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          selectedDateIndex === idx
                            ? "bg-burnt-peach border-burnt-peach text-espresso-deep font-bold shadow-md"
                            : "bg-espresso-dark border-burnt-peach/20 text-foreground/70 hover:border-burnt-peach/50"
                        }`}
                      >
                        <div className="type-mono text-[9px] uppercase">{d.shortDay}</div>
                        <div className="text-base font-bold">{d.dateNum}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 type-mono text-[10px] text-burnt-peach mb-3">
                    <Clock className="w-4 h-4 text-burnt-peach" />
                    <span>SELECT EXECUTIVE TIME SLOT</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                          selectedTimeSlot === slot
                            ? "bg-burnt-peach/20 border-burnt-peach text-soft-apricot font-bold"
                            : "bg-espresso-dark border-burnt-peach/20 text-foreground/70 hover:border-burnt-peach/50"
                        }`}
                      >
                        <span>{slot}</span>
                        {selectedTimeSlot === slot && (
                          <span className="w-1.5 h-1.5 rounded-full bg-burnt-peach" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-espresso-dark/60 border border-burnt-peach/20 space-y-2 text-xs text-foreground/70">
                  <div className="flex items-center gap-2 text-soft-apricot font-semibold">
                    <ShieldCheck className="w-4 h-4 text-burnt-peach" />
                    <span>Confidential Strategy Session (45 Mins)</span>
                  </div>
                  <p>
                    Held directly with an AICceler8 Managing Director to assess enterprise readiness, data moats, and growth opportunities.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setStep("details")}
                  className="w-full type-mono text-[11px] py-3.5 rounded-xl bg-burnt-peach hover:bg-burnt-peach-light text-espresso-deep font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>CONTINUE TO ORGANIZATION DETAILS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === "details" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-xs text-foreground/60 mb-2 flex items-center justify-between">
                  <span>Selected: {dates[selectedDateIndex]?.label} @ {selectedTimeSlot}</span>
                  <button
                    type="button"
                    onClick={() => setStep("calendar")}
                    className="text-burnt-peach font-semibold hover:underline"
                  >
                    Change
                  </button>
                </div>

                <div>
                  <label className="block type-mono text-[10px] text-burnt-peach mb-1">
                    YOUR FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-espresso-dark border border-burnt-peach/30 text-foreground text-xs focus:outline-none focus:border-burnt-peach"
                  />
                </div>

                <div>
                  <label className="block type-mono text-[10px] text-burnt-peach mb-1">
                    CORPORATE WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="s.jenkins@enterprise.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-espresso-dark border border-burnt-peach/30 text-foreground text-xs focus:outline-none focus:border-burnt-peach"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block type-mono text-[10px] text-burnt-peach mb-1">
                      COMPANY NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Apex Global"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-espresso-dark border border-burnt-peach/30 text-foreground text-xs focus:outline-none focus:border-burnt-peach"
                    />
                  </div>

                  <div>
                    <label className="block type-mono text-[10px] text-burnt-peach mb-1">
                      ORGANIZATION SIZE
                    </label>
                    <select
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-espresso-dark border border-burnt-peach/30 text-foreground text-xs focus:outline-none focus:border-burnt-peach"
                    >
                      <option>50–200 employees</option>
                      <option>201–1,000 employees</option>
                      <option>1,001–5,000 employees</option>
                      <option>5,000+ employees</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block type-mono text-[10px] text-burnt-peach mb-1">
                    PRIMARY STRATEGIC PRIORITY
                  </label>
                  <select
                    value={formData.focus}
                    onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-espresso-dark border border-burnt-peach/30 text-foreground text-xs focus:outline-none focus:border-burnt-peach"
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
                  className="w-full type-mono text-[11px] py-3.5 rounded-xl bg-burnt-peach hover:bg-burnt-peach-light text-espresso-deep font-bold flex items-center justify-center gap-2 transition-all shadow-md mt-2"
                >
                  <span>CONFIRM ENTERPRISE STRATEGY SESSION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {step === "confirmed" && (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-burnt-peach/20 text-burnt-peach mx-auto flex items-center justify-center border border-burnt-peach/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="type-mono text-[10px] text-burnt-peach font-bold block mb-1">
                    CONFIRMED & RESERVED
                  </span>
                  <h4 className="text-2xl font-sans font-bold text-foreground">
                    We look forward to meeting, {formData.name}.
                  </h4>
                  <p className="text-xs text-foreground/70 mt-2 max-w-sm mx-auto">
                    A calendar invitation and briefing preparation checklist have been dispatched to <strong className="text-soft-apricot">{formData.email}</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-espresso-dark border border-burnt-peach/30 text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground/50">Date & Time:</span>
                    <span className="text-soft-apricot font-semibold">
                      {dates[selectedDateIndex]?.label} @ {selectedTimeSlot}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/50">Organization:</span>
                    <span className="text-foreground font-semibold">{formData.company}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleDownloadICS}
                    className="w-full py-3 rounded-xl border border-burnt-peach/40 hover:border-burnt-peach text-soft-apricot text-xs type-mono flex items-center justify-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4 text-burnt-peach" />
                    <span>DOWNLOAD CALENDAR EVENT (.ICS)</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="w-full py-3 rounded-xl bg-burnt-peach text-espresso-deep type-mono text-xs font-bold"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-burnt-peach/20 bg-espresso-dark flex items-center justify-between type-mono text-[10px] text-foreground/50">
            <span>AICCELER8 ENTERPRISE ASSURANCE</span>
            <span>NDA PROTECTED</span>
          </div>
        </div>
      </div>
    </div>
  );
}
