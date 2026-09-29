"use client";

import React, { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Who We Help", href: "#who-we-help" },
    { name: "Solutions", href: "#solutions", hasDropdown: true },
    { name: "Industries", href: "#industries" },
    { name: "Why AICCELER8", href: "#why-aicceler8", highlight: true },
    { name: "Contact Us", href: "#contact-us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 font-sans pointer-events-none">
      
      {/* Grid Plus Icons - keeping the tech aesthetic in the background */}
      <Plus className="w-5 h-5 text-white/20 stroke-[1] absolute left-6 top-6 hidden md:block" />
      <Plus className="w-5 h-5 text-white/20 stroke-[1] absolute right-6 top-6 hidden md:block" />

      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between relative">
        
        {/* Left Block - Logo */}
        <div className="flex items-center pointer-events-auto pl-2 md:pl-8">
          <span className="font-semibold text-white tracking-wider text-lg">AICCELER8</span>
        </div>

        {/* Center Block - Pill Menu (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 pointer-events-auto bg-[#0a0a0a] border border-white/10 rounded-full px-8 py-3.5 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                link.highlight ? "text-[#ff5e3a] hover:text-[#ff8a70]" : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4 text-white/50" />}
            </a>
          ))}
        </nav>

        {/* Right Block - Action Button (Desktop) */}
        <div className="hidden lg:flex items-center pointer-events-auto pr-2 md:pr-8">
          <button 
            onClick={onOpenBooking} 
            className="px-6 py-3 rounded-full text-black bg-white hover:bg-neutral-200 transition-colors text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden pointer-events-auto text-white/80 hover:text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-sm font-medium"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 lg:hidden pointer-events-auto shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`flex items-center gap-2 text-base font-medium transition-colors ${
                link.highlight ? "text-[#ff5e3a]" : "text-white/80 hover:text-white"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4 text-white/50" />}
            </a>
          ))}
          <div className="h-px bg-white/10 my-2 w-full"></div>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }} 
            className="w-full py-3.5 rounded-xl text-black bg-white hover:bg-neutral-200 transition-colors font-semibold mt-2"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
