"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

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
    <header className="fixed inset-x-0 top-0 z-50 px-5 py-5 text-[#101010] md:px-8 md:py-8">
      <div className="relative flex items-center justify-between">
        <a
          href="#home"
          aria-label="AICCELER8 home"
          className="flex h-11 items-center justify-center bg-[#101010] px-3.5 transition-transform hover:scale-95"
        >
          <div className="relative h-6 w-24">
            <Image
              src="/images/logos/logo.png"
              alt="AICCELER8"
              fill
              priority
              className="object-contain"
            />
          </div>
        </a>

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-5 lg:gap-8 text-sm font-bold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`flex items-center gap-1 transition-opacity hover:opacity-60 whitespace-nowrap ${
                link.highlight ? "underline underline-offset-4" : ""
              }`}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
            </a>
          ))}
        </nav>

        <button
          className="grid h-11 w-11 place-items-center bg-[#101010] text-[#E2725B] transition-transform hover:scale-95"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="absolute right-5 top-20 flex w-[min(23rem,calc(100vw-2.5rem))] flex-col gap-1 border border-[#101010] bg-[#E2725B] p-3 shadow-[8px_8px_0_#101010] md:right-8 md:top-24">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`flex items-center justify-between px-3 py-3 text-base font-semibold transition-colors hover:bg-[#101010] hover:text-[#E2725B] ${
                link.highlight ? "underline underline-offset-4" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }} 
            className="mt-2 border border-[#101010] bg-[#101010] px-3 py-3 text-left font-semibold text-[#E2725B] transition-colors hover:bg-transparent hover:text-[#101010]"
          >
            Book a call
          </button>
        </nav>
      )}
    </header>
  );
}
