"use client";

import Link from "next/link";
import { profileData } from "@/lib/data";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkedInContact = profileData.contacts.find(
    (c) => c.label === "LinkedIn",
  );

  return (
    <footer className="w-full bg-[#050507] border-t border-[#1f1f23] text-[#ffffff] pt-14 pb-10 px-6 md:px-12 relative">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-10">
        {/* Main Footer Block: Brand & CTA on Left, Social Icons + Connect CTA on Right */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-[#1f1f23]">
          {/* Brand & Headline */}
          <div className="flex flex-col gap-2.5 max-w-[640px]">
            <Link
              href="/"
              className="text-[20px] font-extrabold tracking-tight text-[#ffffff] uppercase select-none w-fit hover:text-[#76b900] transition-colors"
            >
              Sujeet Gund
            </Link>
            <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-extrabold tracking-tight text-[#ffffff] m-0">
              Let&apos;s build something intelligent.
            </h2>
            <p className="text-[14px] text-[#a1a1aa] leading-[1.6] m-0">
              Agentic AI Engineer specializing in production RAG systems,
              real-time voice architectures, and multi-agent graph
              orchestration.
            </p>
          </div>

          {/* Right Action Cluster: Horizontal Social Icon Buttons + Primary CTA */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Horizontal Connect Icon Buttons (Matching Header Style) */}
            <div className="flex items-center gap-2.5">
              {profileData.contacts.map((contact) => (
                <Link
                  key={contact.label}
                  href={contact.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#121215] text-[#ffffff] border border-[#27272a] hover:border-[#76b900] hover:text-[#76b900] h-[46px] w-[46px] rounded-[6px] flex items-center justify-center transition-all shrink-0 shadow-sm"
                  aria-label={contact.label}
                  title={contact.label}
                >
                  <contact.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            {/* Main Connect CTA Button */}
            <Link
              href={
                linkedInContact?.value || "https://linkedin.com/in/sujeetgund"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#76b900] text-[#000000] hover:bg-[#5a8d00] text-[15px] font-extrabold px-6 py-3 h-[46px] rounded-[6px] transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-[#76b900]/20"
            >
              Let&apos;s Connect
              <ArrowUpRight className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#71717a]">
          <p className="m-0">
            &copy; {new Date().getFullYear()} Sujeet Gund. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#a1a1aa] hover:text-[#76b900] transition-colors focus:outline-none cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4 text-[#76b900]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
