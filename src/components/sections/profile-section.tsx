"use client";

import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/lib/data";
import { ArrowDownToLine, MapPin } from "lucide-react";

export function ProfileSection() {
  return (
    <section
      id="profile"
      className="w-full bg-[#000000] text-[#ffffff] px-6 py-[80px] md:px-12 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col-reverse md:flex-row items-center relative z-10 gap-8">
        {/* Copy Slot at Left */}
        <div className="flex-1 w-full flex flex-col items-start gap-6">
          <h1 className="text-[32px] md:text-[48px] font-bold leading-[1.25] m-0">
            {profileData.name}
          </h1>
          <div className="flex flex-col gap-2 max-w-[600px]">
            <h2 className="text-[24px] font-bold leading-[1.25] m-0">
              {profileData.title}
            </h2>
            <p className="text-[22px] font-normal leading-[1.5] text-[rgba(255,255,255,0.7)] m-0">
              {profileData.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 text-[14px] text-[#a7a7a7] mt-2 mb-4 font-bold tracking-wide uppercase">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {profileData.location}
          </div>

          <div className="flex flex-row items-center gap-2 flex-wrap">
            {/* Primary CTA button */}
            <Link
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#76b900] text-black hover:bg-[#5a8d00] font-bold text-[16px] leading-[1.25] px-5 sm:px-6 py-[11px] h-[44px] rounded-[2px] inline-flex items-center justify-center transition-colors shrink-0"
            >
              <ArrowDownToLine className="h-4 w-4 mr-2" aria-hidden="true" />
              Resume
            </Link>

            {/* Secondary CTA buttons (Outline on Dark) */}
            <div className="flex items-center gap-2 shrink-0">
              {profileData.contacts.map((contact) => (
                <Link
                  key={contact.label}
                  href={contact.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-[#ffffff] border border-[#ffffff] hover:bg-[#1a1a1a] font-bold text-[16px] leading-[1.25] h-[44px] w-[44px] rounded-[2px] flex items-center justify-center transition-colors shrink-0"
                  aria-label={contact.label}
                >
                  <contact.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Imagery at Right */}
        <div className="w-full md:w-1/2 flex justify-end relative h-[300px] md:h-[400px]">
          <div className="relative w-full md:w-[80%] h-full">
            <Image
              src={profileData.image.src}
              alt={profileData.name}
              fill
              priority
              data-ai-hint={profileData.image.hint}
              className="object-cover"
            />
            {/* Gradient overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#000000] via-transparent to-transparent opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
