"use client";

import React, { useState } from "react";
import { Phone, MapPin, ChevronDown, CheckCircle2 } from "lucide-react";
import { useGsapScrollTrigger } from "../ui/useGsapScrollTrigger";

export default function SectionContact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    position: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useGsapScrollTrigger<HTMLElement>({ stagger: 0.1 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#0B0B0C] py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10 overflow-hidden"
    >
      {/* Ambient background glow on bottom left */}
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#FF5E3F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1480px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        {/* Left Column: Contact & Info */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
          <div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tight leading-[1.08] mb-10">
              Book a Strategy Call
            </h2>

            <div className="space-y-8 mt-12">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#FF5E3F] font-bold uppercase block mb-4">
                  DUBAI HQ
                </span>
                
                {/* Phone */}
                <div className="flex items-center gap-4 mb-5 group">
                  <div className="w-12 h-12 rounded-full bg-[#18181A] border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:border-[#FF5E3F] transition-colors">
                    <Phone className="w-5 h-5 text-[#FF5E3F]" />
                  </div>
                  <a
                    href="tel:+971585521169"
                    className="text-white/90 hover:text-white font-sans text-base transition-colors"
                  >
                    +971 58 552 1169
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#18181A] border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:border-[#FF5E3F] transition-colors mt-0.5">
                    <MapPin className="w-5 h-5 text-[#FF5E3F]" />
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                    Quarter Deck, QE2, Mina Rashid, P.O. Box 554789, Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="bg-[#18181A] border border-white/10 rounded-3xl p-12 text-center flex flex-col items-center justify-center min-h-[440px]">
              <CheckCircle2 className="w-16 h-16 text-[#FF5E3F] mb-6 animate-pulse" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Strategy Session Requested
              </h3>
              <p className="text-neutral-400 max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-6">
                Thank you, {formData.fullName || "Partner"}. Our enterprise strategy team will review your requirements and reach out within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono tracking-wider text-[#FF5E3F] uppercase hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] font-mono tracking-wider text-neutral-300 font-semibold uppercase mb-2 block">
                    FULL NAME <span className="text-[#FF5E3F]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g., Priya Sharma"
                    className="w-full bg-[#18181A] border border-white/10 focus:border-[#FF5E3F] text-white placeholder-neutral-500 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono tracking-wider text-neutral-300 font-semibold uppercase mb-2 block">
                    COMPANY NAME <span className="text-[#FF5E3F]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g., FutureTech Solutions Pvt. Ltd."
                    className="w-full bg-[#18181A] border border-white/10 focus:border-[#FF5E3F] text-white placeholder-neutral-500 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] font-mono tracking-wider text-neutral-300 font-semibold uppercase mb-2 block">
                    EMAIL <span className="text-[#FF5E3F]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g., priya@futuretech.com"
                    className="w-full bg-[#18181A] border border-white/10 focus:border-[#FF5E3F] text-white placeholder-neutral-500 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono tracking-wider text-neutral-300 font-semibold uppercase mb-2 block">
                    PHONE NUMBER <span className="text-[#FF5E3F]">*</span>
                  </label>
                  <div className="flex bg-[#18181A] border border-white/10 focus-within:border-[#FF5E3F] rounded-xl overflow-hidden transition-colors">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="bg-transparent text-neutral-300 text-xs sm:text-sm px-3 py-3.5 outline-none border-r border-white/10 cursor-pointer"
                    >
                      <option value="+91" className="bg-[#18181A] text-white">+91 (In)</option>
                      <option value="+971" className="bg-[#18181A] text-white">+971 (AE)</option>
                      <option value="+1" className="bg-[#18181A] text-white">+1 (US)</option>
                      <option value="+44" className="bg-[#18181A] text-white">+44 (UK)</option>
                      <option value="+65" className="bg-[#18181A] text-white">+65 (SG)</option>
                    </select>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g., 9876543210"
                      className="w-full bg-transparent text-white placeholder-neutral-500 px-4 py-3.5 text-sm outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Position & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] font-mono tracking-wider text-neutral-300 font-semibold uppercase mb-2 block">
                    POSITION <span className="text-[#FF5E3F]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="e.g., Chief Operating Officer"
                    className="w-full bg-[#18181A] border border-white/10 focus:border-[#FF5E3F] text-white placeholder-neutral-500 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono tracking-wider text-neutral-300 font-semibold uppercase mb-2 block">
                    WHAT ARE YOU LOOKING TO SOLVE? <span className="text-[#FF5E3F]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#18181A] border border-white/10 focus:border-[#FF5E3F] text-neutral-300 rounded-xl px-4 py-3.5 text-sm outline-none appearance-none transition-colors cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#18181A] text-neutral-500">
                        Select the service
                      </option>
                      <option value="Enterprise Growth Strategy" className="bg-[#18181A] text-white">
                        Enterprise Growth Strategy
                      </option>
                      <option value="Intelligent Business Systems" className="bg-[#18181A] text-white">
                        Intelligent Business Systems
                      </option>
                      <option value="Organization Enablement" className="bg-[#18181A] text-white">
                        Organization Enablement
                      </option>
                      <option value="Continuous Evolution" className="bg-[#18181A] text-white">
                        Continuous Evolution
                      </option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="text-[11px] font-mono tracking-wider text-neutral-300 font-semibold uppercase mb-2 block">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your unique challenge"
                  className="w-full bg-[#18181A] border border-white/10 focus:border-[#FF5E3F] text-white placeholder-neutral-500 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#FF5E3F] hover:bg-[#FF4824] text-white py-4 rounded-xl font-bold tracking-widest text-sm uppercase transition-all duration-200 active:scale-[0.99] shadow-lg shadow-[#FF5E3F]/25 cursor-pointer"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
