"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronRight, MapPin } from "lucide-react";
import { navLinks, profileData } from "@/lib/data";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll state for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const linkedInLink =
    profileData.contacts.find((c) => c.label === "LinkedIn")?.value ||
    "https://linkedin.com/in/sujeetgund";

  return (
    <>
      {/* Primary Navigation Bar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[64px] md:h-[72px] ${
          isScrolled
            ? "bg-[#000000]/90 backdrop-blur-md border-b border-[#262626] shadow-xl"
            : "bg-[#000000]/70 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-full flex items-center justify-between gap-4">
          {/* Brand Wordmark (User Favorite) */}
          <Link
            href="/"
            className="text-[17px] md:text-[19px] font-extrabold tracking-tight text-[#ffffff] hover:text-[#76b900] transition-colors select-none uppercase shrink-0"
          >
            Sujeet Gund
          </Link>

          {/* Desktop Navigation Links (Flex Container for Responsive Fitting) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-[14px] xl:text-[15px] font-semibold text-[rgba(255,255,255,0.8)] hover:text-[#76b900] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#76b900] transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Right Cluster (CTA Button) */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href={linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#76b900] hover:bg-[#5a8d00] text-[14px] font-bold px-[20px] py-[9px] rounded-[4px] transition-all inline-flex items-center gap-1.5 shadow-sm hover:shadow-[#76b900]/20"
            >
              Let&apos;s Connect
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile / Tablet Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href={linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:inline-flex hidden bg-[#76b900] hover:bg-[#5a8d00] text-[13px] font-bold px-[14px] py-[6px] rounded-[4px] transition-colors items-center"
            >
              Let&apos;s Connect
            </Link>
            <button
              className="flex items-center justify-center p-2 rounded-[4px] text-[#ffffff] hover:text-[#76b900] hover:bg-[#1a1a1a] transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-[#000000]/80 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-[#0c0c0e] border-l border-[#262626] z-[70] transform transition-transform duration-300 ease-out lg:hidden flex flex-col shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="h-[64px] border-b border-[#262626] flex items-center justify-between px-6 bg-[#121215] shrink-0">
          <span className="text-[16px] font-extrabold uppercase tracking-tight text-[#ffffff]">
            Sujeet Gund
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 rounded-[4px] text-[#a3a3a3] hover:text-[#ffffff] hover:bg-[#262626] transition-colors"
            aria-label="Close mobile menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Content Body */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-between gap-6">
          {/* Navigation Links (Scaled up typography and touch targets) */}
          <nav className="flex flex-col gap-1.5">
            <span className="text-[12px] font-bold text-[#71717a] uppercase tracking-widest mb-2">
              Navigation
            </span>
            {navLinks.map((link, idx) => {
              const num = String(idx + 1).padStart(2, "0");
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className="flex items-center justify-between text-[19px] font-extrabold tracking-tight text-[#ffffff] hover:text-[#76b900] transition-colors py-3.5 px-4 rounded-[8px] hover:bg-[#18181b] border-b border-[#1f1f23] last:border-b-0 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-[14px] font-mono font-bold text-[#76b900]">
                      {num}.
                    </span>
                    {link.label}
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#71717a] group-hover:text-[#76b900] group-hover:translate-x-1.5 transition-all" />
                </Link>
              );
            })}
          </nav>

          {/* Direct Social Contact Cluster (Scaled up buttons & CTA) */}
          <div className="flex flex-col gap-4 pt-5 border-t border-[#1f1f23]">
            <span className="text-[12px] font-bold text-[#71717a] uppercase tracking-widest">
              Direct Contact
            </span>
            <div className="flex flex-col gap-2.5">
              {profileData.contacts.map((contact, idx) => (
                <Link
                  key={idx}
                  href={contact.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-semibold text-[#a1a1aa] hover:text-[#ffffff] hover:bg-[#18181b] border border-[#27272a] rounded-[8px] px-4 py-3 transition-all flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <contact.icon className="h-4.5 w-4.5 text-[#76b900]" />
                    <span>{contact.label}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[#71717a] group-hover:text-[#76b900] transition-colors" />
                </Link>
              ))}
            </div>

            <Link
              href={linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 bg-[#76b900] text-[#000000] hover:bg-[#5a8d00] hover:text-[#ffffff] text-[15px] font-extrabold px-5 py-3.5 rounded-[8px] transition-all inline-flex items-center justify-center gap-2 w-full text-center shadow-lg hover:shadow-[#76b900]/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let&apos;s Connect
              <ArrowUpRight className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;

