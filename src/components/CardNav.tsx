import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, profileData } from "@/lib/data";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll state for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  return (
    <>
      {/* Primary Nav */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 h-[64px] bg-[#000000] text-[#ffffff] border-b ${
          isScrolled ? "border-[#5e5e5e]" : "border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          
          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 -ml-2 text-[#ffffff] hover:text-[#76b900] transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo / Wordmark */}
          <Link href="/" className="text-[18px] font-bold tracking-tight text-[#ffffff] select-none uppercase z-10 flex-shrink-0 mx-auto md:mx-0">
            Sujeet Gund
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 h-full gap-8">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-[15px] font-bold text-[#ffffff] hover:text-[#76b900] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Cluster (CTA) */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="https://linkedin.com/in/sujeetgund"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#76b900] text-[#ffffff] hover:bg-[#5a8d00] text-[15px] font-bold px-[24px] py-[8px] rounded-[2px] transition-colors inline-flex items-center"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          {/* Spacer for mobile layout balancing */}
          <div className="md:hidden w-[40px]" />
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-[#000000] border-l border-[#5e5e5e] z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="h-[64px] border-b border-[#5e5e5e] flex items-center justify-between px-6">
          <span className="text-[18px] font-bold uppercase tracking-tight text-[#ffffff]">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 -mr-2 text-[#ffffff] hover:text-[#76b900] transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-[22px] font-bold text-[#ffffff] hover:text-[#76b900] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto border-t border-[#5e5e5e] pt-8 flex flex-col gap-6">
            <h3 className="text-[12px] font-bold text-[#757575] uppercase tracking-widest">Connect</h3>
            <div className="flex flex-col gap-4">
              {profileData.contacts.map((contact, idx) => (
                <Link
                  key={idx}
                  href={contact.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] text-[#ffffff] hover:text-[#76b900] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {contact.label}
                </Link>
              ))}
            </div>
            <Link
              href="https://linkedin.com/in/sujeetgund"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-[#76b900] text-[#ffffff] hover:bg-[#5a8d00] text-[16px] font-bold px-[24px] py-[12px] rounded-[2px] transition-colors inline-flex items-center justify-center w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Connect
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
