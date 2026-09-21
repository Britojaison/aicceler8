"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Why AICceler8", href: "#why-aicceler8" },
    { name: "How We Transform", href: "#how-we-transform" },
    { name: "Who We Work With", href: "#who-we-work-with" },
    { name: "Insights", href: "#insights" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo (Inverted to pure black for clean white background) */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="AICceler8 Home"
        >
          <div className="relative h-8 w-24 sm:h-8 sm:w-26 flex items-center">
            <Image
              src="/logo.png"
              alt="AICceler8"
              fill
              priority
              className="object-contain filter invert"
            />
          </div>
          <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-neutral-400 uppercase border-l border-neutral-200 pl-3">
            ENTERPRISE AI
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors duration-150 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons (Freshworks Style) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors py-1"
          >
            Contact
          </button>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-black hover:bg-neutral-800 active:scale-[0.98] transition-all shadow-sm"
          >
            <span>Book an Enterprise Strategy Session</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-black"
          >
            Strategy Session
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-neutral-900 rounded-lg border border-neutral-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-700 hover:text-black py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-neutral-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Book an Enterprise Strategy Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
