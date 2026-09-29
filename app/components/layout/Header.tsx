"use client";

import React, { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "WHO WE HELP", href: "#who-we-help" },
    { name: "SOLUTIONS", href: "#solutions", hasDropdown: true },
    { name: "INDUSTRIES", href: "#industries" },
    { name: "WHY AICCELER8", href: "#why-aicceler8", highlight: true },
    { name: "CONTACT US", href: "#contact-us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 text-[10.5px] tracking-[0.15em] uppercase text-white/70 font-mono pointer-events-none">
      
      {/* 
        Use pointer-events-auto on interactive elements so the empty space 
        of the header doesn't block clicks to the background.
      */}

      {/* Grid Plus Icons */}
      <Plus className="w-5 h-5 text-white/30 stroke-[1] absolute left-6 top-6" />
      <Plus className="w-5 h-5 text-white/30 stroke-[1] absolute left-[35%] top-6 hidden md:block" />
      <Plus className="w-5 h-5 text-white/30 stroke-[1] absolute right-6 top-6 hidden md:block" />

      <div className="flex items-center justify-between w-full relative">
        
        {/* Left Block */}
        <div className="flex items-center pointer-events-auto pl-8">
          <span className="font-semibold text-white tracking-[0.2em]">AICCELER8</span>
        </div>

        {/* Right Block (Desktop) */}
        <nav className="hidden lg:flex items-center gap-10 pointer-events-auto pr-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`flex items-center gap-1 transition-colors ${
                link.highlight ? "text-[#ff5e3a] hover:text-[#ff8a70]" : "hover:text-white"
              }`}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </a>
          ))}
          <button 
            onClick={onOpenBooking} 
            className="flex items-center justify-center px-6 py-2.5 rounded-full text-black bg-white hover:bg-neutral-200 transition-colors tracking-[0.15em] font-semibold ml-4"
          >
            CONTACT US
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden pointer-events-auto text-white/60 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          MENU
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black/95 border-y border-white/10 p-6 flex flex-col gap-6 lg:hidden pointer-events-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`flex items-center gap-2 transition-colors ${
                link.highlight ? "text-[#ff5e3a]" : "text-white hover:text-[#ff5e3a]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }} 
            className="w-full py-3 rounded-full text-black bg-white hover:bg-neutral-200 transition-colors font-semibold tracking-[0.15em] mt-2"
          >
            CONTACT US
          </button>
        </div>
      )}
    </header>
  );
}
