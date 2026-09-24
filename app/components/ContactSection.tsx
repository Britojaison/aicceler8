"use client";

import React, { useState } from "react";
import { Phone, MapPin, CheckCircle2, X } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    position: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="min-h-screen h-screen py-10 sm:py-16 px-6 sm:px-10 lg:px-16 w-full flex items-center justify-center bg-transparent text-white relative isolate overflow-hidden border-t border-white/10">
      {/* Corner crosshair accents aligned with margin grid */}
      <div className="corner-plus top-6 left-6 sm:left-10 lg:left-16 text-[#FF5E3F] z-10" />
      <div className="corner-plus top-6 right-6 sm:right-10 lg:right-16 text-[#FF5E3F] z-10" />

      {/* Full width container matching Navbar left & right padding */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-between relative py-2 pl-4 sm:pl-8 lg:pl-10 -mt-3">
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-white leading-tight">
              Book a Strategy Call
            </h2>

            <div className="pt-2 space-y-6">
              <div className="text-xs font-bold tracking-widest text-[#FF5E3F] uppercase">
                DUBAI HQ
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center shrink-0 text-[#FF5E3F] shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="pt-2">
                  <a
                    href="tel:+971585521169"
                    className="text-sm sm:text-base text-neutral-200 hover:text-[#FF5E3F] transition-colors font-medium"
                  >
                    +971 58 552 1169
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center shrink-0 text-[#FF5E3F] shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1 max-w-xs">
                  Quarter Deck, QE2, Mina Rashid, P.O. Box 554789, Dubai, UAE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-neutral-200 font-semibold block uppercase tracking-wider">
                  Full Name <span className="text-[#FF5E3F]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g., Priya Sharma"
                  className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#FF5E3F] focus:bg-white/[0.09] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-neutral-200 font-semibold block uppercase tracking-wider">
                  Company Name <span className="text-[#FF5E3F]">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g., FutureTech Solutions Pvt. Ltd."
                  className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#FF5E3F] focus:bg-white/[0.09] transition-all"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-neutral-200 font-semibold block uppercase tracking-wider">
                  Email <span className="text-[#FF5E3F]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g., priya@futuretech.com"
                  className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#FF5E3F] focus:bg-white/[0.09] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-neutral-200 font-semibold block uppercase tracking-wider">
                  Phone Number <span className="text-[#FF5E3F]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="🌐 Enter your phone number"
                  className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#FF5E3F] focus:bg-white/[0.09] transition-all"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-neutral-200 font-semibold block uppercase tracking-wider">
                  Position <span className="text-[#FF5E3F]">*</span>
                </label>
                <input
                  type="text"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="e.g., Chief Operating Officer"
                  className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#FF5E3F] focus:bg-white/[0.09] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-neutral-200 font-semibold block uppercase tracking-wider">
                  What are you looking to solve? <span className="text-[#FF5E3F]">*</span>
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#FF5E3F] focus:bg-white/[0.09] transition-all cursor-pointer"
                >
                  <option value="" disabled className="bg-[#1c1c1c] text-neutral-400">
                    Select the service
                  </option>
                  <option value="Enterprise Growth Strategy" className="bg-[#1c1c1c]">
                    Enterprise Growth Strategy
                  </option>
                  <option value="Intelligent Business Systems" className="bg-[#1c1c1c]">
                    Intelligent Business Systems
                  </option>
                  <option value="Organization Enablement" className="bg-[#1c1c1c]">
                    Organization Enablement
                  </option>
                  <option value="Continuous AI Evolution" className="bg-[#1c1c1c]">
                    Continuous AI Evolution
                  </option>
                </select>
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-2">
              <label className="text-xs text-neutral-200 font-semibold block uppercase tracking-wider">Message</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your unique challenge"
                className="w-full bg-white/[0.06] border border-white/15 rounded-xl p-4 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#FF5E3F] focus:bg-white/[0.09] transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#FF5E3F] hover:bg-[#e0482b] text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-all shadow-lg hover:shadow-[#FF5E3F]/25 active:scale-[0.99] cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Thank You Popup Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#1c1615] border border-[#FF5E3F]/30 rounded-3xl p-8 max-w-md w-full text-center space-y-6 relative shadow-2xl">
            <button
              onClick={() => setIsSubmitted(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-[#FF5E3F]/20 border border-[#FF5E3F] text-[#FF5E3F] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Thank You!</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Your strategy session request has been received. An AICceler8 Managing Director will reach out to you shortly.
              </p>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full py-3 bg-[#FF5E3F] hover:bg-[#e0482b] text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
