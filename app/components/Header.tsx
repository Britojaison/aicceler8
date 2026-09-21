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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "WHY AICCELER8", href: "#why-aicceler8" },
    { name: "HOW WE TRANSFORM", href: "#how-we-transform" },
    { name: "WHO WE WORK WITH", href: "#who-we-work-with" },
    { name: "INSIGHTS", href: "#insights" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-espresso-deep/95 backdrop-blur-md border-b border-burnt-peach/20 py-3.5 shadow-md shadow-espresso/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="AICceler8 Home"
        >
          <div className="relative h-8 w-24 sm:h-9 sm:w-28 flex items-center">
            <Image
              src="/logo.png"
              alt="AICceler8"
              fill
              priority
              className="object-contain filter brightness-0"
            />
          </div>
          <span className="hidden sm:inline-block type-mono text-[10px] text-espresso/70 border-l border-burnt-peach/30 pl-3">
            ENTERPRISE AI
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="type-mono text-[11px] text-espresso/90 hover:text-burnt-peach font-semibold transition-colors duration-200 py-1 relative group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-burnt-peach transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-stretch gap-1 overflow-hidden transition-transform active:scale-[0.98]"
          >
            <div className="type-mono inline-flex items-center justify-center h-11 px-5 bg-burnt-peach hover:bg-burnt-peach-light text-espresso-deep font-bold transition-colors">
              <span>BOOK AN ENTERPRISE STRATEGY SESSION</span>
            </div>
            <div className="h-11 w-11 bg-burnt-peach hover:bg-burnt-peach-light text-espresso-deep grid place-items-center transition-colors">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="type-mono text-[10px] px-3 py-2 bg-burnt-peach text-espresso-deep font-bold"
          >
            STRATEGY SESSION
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-espresso hover:text-burnt-peach rounded border border-burnt-peach/30"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-espresso-deep border-b border-burnt-peach/30 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block type-mono text-xs text-espresso hover:text-burnt-peach font-bold py-2 border-b border-burnt-peach/10"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
