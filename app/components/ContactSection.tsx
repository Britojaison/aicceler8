"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone, MapPin, ChevronDown } from "lucide-react";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [serviceError, setServiceError] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countryCodes = [
    { code: "+93", country: "Afghanistan" },
    { code: "+355", country: "Albania" },
    { code: "+213", country: "Algeria" },
    { code: "+376", country: "Andorra" },
    { code: "+244", country: "Angola" },
    { code: "+54", country: "Argentina" },
    { code: "+374", country: "Armenia" },
    { code: "+61", country: "Australia" },
    { code: "+43", country: "Austria" },
    { code: "+994", country: "Azerbaijan" },
    { code: "+973", country: "Bahrain" },
    { code: "+880", country: "Bangladesh" },
    { code: "+375", country: "Belarus" },
    { code: "+32", country: "Belgium" },
    { code: "+501", country: "Belize" },
    { code: "+229", country: "Benin" },
    { code: "+975", country: "Bhutan" },
    { code: "+591", country: "Bolivia" },
    { code: "+387", country: "Bosnia and Herzegovina" },
    { code: "+55", country: "Brazil" },
    { code: "+673", country: "Brunei" },
    { code: "+359", country: "Bulgaria" },
    { code: "+855", country: "Cambodia" },
    { code: "+237", country: "Cameroon" },
    { code: "+1", country: "Canada" },
    { code: "+56", country: "Chile" },
    { code: "+86", country: "China" },
    { code: "+57", country: "Colombia" },
    { code: "+506", country: "Costa Rica" },
    { code: "+385", country: "Croatia" },
    { code: "+53", country: "Cuba" },
    { code: "+357", country: "Cyprus" },
    { code: "+420", country: "Czech Republic" },
    { code: "+45", country: "Denmark" },
    { code: "+593", country: "Ecuador" },
    { code: "+20", country: "Egypt" },
    { code: "+503", country: "El Salvador" },
    { code: "+372", country: "Estonia" },
    { code: "+251", country: "Ethiopia" },
    { code: "+358", country: "Finland" },
    { code: "+33", country: "France" },
    { code: "+995", country: "Georgia" },
    { code: "+49", country: "Germany" },
    { code: "+30", country: "Greece" },
    { code: "+852", country: "Hong Kong" },
    { code: "+36", country: "Hungary" },
    { code: "+354", country: "Iceland" },
    { code: "+91", country: "India" },
    { code: "+62", country: "Indonesia" },
    { code: "+98", country: "Iran" },
    { code: "+964", country: "Iraq" },
    { code: "+353", country: "Ireland" },
    { code: "+972", country: "Israel" },
    { code: "+39", country: "Italy" },
    { code: "+81", country: "Japan" },
    { code: "+962", country: "Jordan" },
    { code: "+7", country: "Kazakhstan" },
    { code: "+254", country: "Kenya" },
    { code: "+965", country: "Kuwait" },
    { code: "+996", country: "Kyrgyzstan" },
    { code: "+856", country: "Laos" },
    { code: "+371", country: "Latvia" },
    { code: "+961", country: "Lebanon" },
    { code: "+218", country: "Libya" },
    { code: "+370", country: "Lithuania" },
    { code: "+352", country: "Luxembourg" },
    { code: "+853", country: "Macau" },
    { code: "+60", country: "Malaysia" },
    { code: "+960", country: "Maldives" },
    { code: "+356", country: "Malta" },
    { code: "+52", country: "Mexico" },
    { code: "+373", country: "Moldova" },
    { code: "+377", country: "Monaco" },
    { code: "+976", country: "Mongolia" },
    { code: "+212", country: "Morocco" },
    { code: "+95", country: "Myanmar" },
    { code: "+977", country: "Nepal" },
    { code: "+31", country: "Netherlands" },
    { code: "+64", country: "New Zealand" },
    { code: "+234", country: "Nigeria" },
    { code: "+47", country: "Norway" },
    { code: "+968", country: "Oman" },
    { code: "+92", country: "Pakistan" },
    { code: "+970", country: "Palestine" },
    { code: "+507", country: "Panama" },
    { code: "+51", country: "Peru" },
    { code: "+63", country: "Philippines" },
    { code: "+48", country: "Poland" },
    { code: "+351", country: "Portugal" },
    { code: "+974", country: "Qatar" },
    { code: "+40", country: "Romania" },
    { code: "+7", country: "Russia" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+381", country: "Serbia" },
    { code: "+65", country: "Singapore" },
    { code: "+421", country: "Slovakia" },
    { code: "+386", country: "Slovenia" },
    { code: "+27", country: "South Africa" },
    { code: "+82", country: "South Korea" },
    { code: "+34", country: "Spain" },
    { code: "+94", country: "Sri Lanka" },
    { code: "+46", country: "Sweden" },
    { code: "+41", country: "Switzerland" },
    { code: "+886", country: "Taiwan" },
    { code: "+66", country: "Thailand" },
    { code: "+90", country: "Turkey" },
    { code: "+971", country: "UAE" },
    { code: "+44", country: "UK" },
    { code: "+380", country: "Ukraine" },
    { code: "+1", country: "USA" },
    { code: "+598", country: "Uruguay" },
    { code: "+998", country: "Uzbekistan" },
    { code: "+58", country: "Venezuela" },
    { code: "+84", country: "Vietnam" },
  ];

  const services = [
    "Enterprise Growth Strategy",
    "Intelligent Business Systems",
    "Organization Enablement",
    "Continuous AI Evolution",
  ];

  // Auto reset form and hide thank you message after 3 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          position: "",
          service: "",
          message: "",
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  // Close custom dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.service) {
      setServiceError(true);
      setIsDropdownOpen(true);
      return;
    }
    setServiceError(false);
    setIsSubmitting(true);

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    // Format phone with leading single quote to force Google Sheets to parse as text instead of formula
    const formattedPhone = `'${countryCode} ${formData.phone.replace(/^\+/, "").trim()}`;
    const payload = {
      ...formData,
      phone: formattedPhone,
    };

    if (scriptUrl) {
      try {
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.error("Error submitting form data to Google Sheets:", err);
      }
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectService = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    setServiceError(false);
    setIsDropdownOpen(false);
  };

  return (
    <section id="contact" className="min-h-screen h-auto py-12 sm:py-16 lg:py-24 px-4 sm:px-10 lg:px-16 w-full flex items-center justify-center bg-transparent text-[#ffffff] relative isolate overflow-hidden border-t border-white/10">
      {/* Corner crosshair accents aligned with margin grid */}
      <div className="corner-plus top-6 left-4 sm:left-10 lg:left-16 text-[#FF5E3F] z-10" />
      <div className="corner-plus top-6 right-4 sm:right-10 lg:right-16 text-[#FF5E3F] z-10" />

      {/* Full width container matching Navbar left & right padding */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center relative z-10">
        {/* Left Column: Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-between relative py-0 sm:py-2 px-0 lg:pl-10">
          <div className="space-y-4 sm:space-y-6 relative z-10">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-white leading-tight">
              Book a Strategy Call
            </h2>

            <div className="pt-1 sm:pt-2 space-y-4 sm:space-y-6">
              <div className="text-[11px] sm:text-xs font-bold tracking-widest text-[#FF5E3F] uppercase">
                DUBAI HQ
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center shrink-0 text-[#FF5E3F] shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="pt-1.5 sm:pt-2">
                  <a
                    href="tel:+971585521169"
                    className="text-sm sm:text-base text-neutral-200 hover:text-[#FF5E3F] transition-colors font-medium"
                  >
                    +971 58 552 1169
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center shrink-0 text-[#FF5E3F] shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1 max-w-xs">
                  Quarter Deck, QE2, Mina Rashid, P.O. Box 554789, Dubai, UAE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form or Thank You view */}
        <div className="lg:col-span-7 relative">
          {isSubmitted ? (
            <div className="min-h-[300px] sm:min-h-[400px] flex flex-col justify-center items-start sm:items-center text-left sm:text-center py-8 sm:py-12 px-2 sm:px-4 animate-fade-in font-['Helvetica_Neue',Helvetica,Arial,sans-serif]">
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3 sm:mb-4 font-['Helvetica_Neue',Helvetica,Arial,sans-serif]">
                Thank you!
              </h3>
              <p className="text-[#FF5E3F] text-sm sm:text-lg lg:text-xl font-bold tracking-wide font-['Helvetica_Neue',Helvetica,Arial,sans-serif]">
                You will be contacted shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[11px] sm:text-xs text-neutral-200 font-semibold block uppercase tracking-wider">
                    Full Name <span className="text-[#FF5E3F]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g., Priya Sharma"
                    className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#FF5E3F] focus:bg-white/[0.09] transition-all"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[11px] sm:text-xs text-neutral-200 font-semibold block uppercase tracking-wider">
                    Company Name <span className="text-[#FF5E3F]">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g., FutureTech Solutions Pvt. Ltd."
                    className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#FF5E3F] focus:bg-white/[0.09] transition-all"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[11px] sm:text-xs text-neutral-200 font-semibold block uppercase tracking-wider">
                    Email <span className="text-[#FF5E3F]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g., priya@futuretech.com"
                    className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#FF5E3F] focus:bg-white/[0.09] transition-all"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[11px] sm:text-xs text-neutral-200 font-semibold block uppercase tracking-wider">
                    Phone Number <span className="text-[#FF5E3F]">*</span>
                  </label>
                  <div className="flex rounded-xl overflow-hidden border border-white/15 focus-within:border-[#FF5E3F] bg-white/[0.06] transition-all">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="bg-transparent border-r border-white/15 px-2 sm:px-3 py-3 sm:py-3.5 text-xs text-white focus:outline-none cursor-pointer font-semibold shrink-0 w-20 sm:w-24 truncate"
                    >
                      {countryCodes.map((c) => (
                        <option key={`${c.country}-${c.code}`} value={c.code} className="bg-[#181514] text-white py-1">
                          {c.code} ({c.country})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g., 9876543210"
                      className="w-full bg-transparent px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder-neutral-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[11px] sm:text-xs text-neutral-200 font-semibold block uppercase tracking-wider">
                    Position <span className="text-[#FF5E3F]">*</span>
                  </label>
                  <input
                    type="text"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="e.g., Chief Operating Officer"
                    className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#FF5E3F] focus:bg-white/[0.09] transition-all"
                  />
                </div>

                {/* Custom Color-Themed Dropdown */}
                <div className="space-y-1.5 sm:space-y-2 relative" ref={dropdownRef}>
                  <label className="text-[11px] sm:text-xs text-neutral-200 font-semibold block uppercase tracking-wider">
                    What are you looking to solve? <span className="text-[#FF5E3F]">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className={`w-full flex items-center justify-between bg-white/[0.06] border ${
                      serviceError
                        ? "border-red-500"
                        : isDropdownOpen
                        ? "border-[#FF5E3F] bg-white/[0.09]"
                        : "border-white/15"
                    } rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-left transition-all cursor-pointer focus:outline-none`}
                  >
                    <span className={formData.service ? "text-white" : "text-neutral-400"}>
                      {formData.service || "Select the service"}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180 text-[#FF5E3F]" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Options Container */}
                  {isDropdownOpen && (
                    <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 bg-[#161211] border border-white/20 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl py-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                      {services.map((option) => (
                        <div
                          key={option}
                          onClick={() => handleSelectService(option)}
                          className={`px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm cursor-pointer transition-colors flex items-center justify-between ${
                            formData.service === option
                              ? "bg-[#FF5E3F]/20 text-[#FF5E3F] font-semibold"
                              : "text-neutral-200 hover:bg-[#FF5E3F]/15 hover:text-white"
                          }`}
                        >
                          <span>{option}</span>
                          {formData.service === option && (
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF5E3F]" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Message Area */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[11px] sm:text-xs text-neutral-200 font-semibold block uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your unique challenge"
                  className="w-full bg-white/[0.06] border border-white/15 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#FF5E3F] focus:bg-white/[0.09] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 sm:py-4 bg-[#FF5E3F] hover:bg-[#e0482b] disabled:opacity-50 text-white font-bold text-xs sm:text-sm tracking-widest uppercase rounded-xl transition-all shadow-lg hover:shadow-[#FF5E3F]/25 active:scale-[0.99] cursor-pointer"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

