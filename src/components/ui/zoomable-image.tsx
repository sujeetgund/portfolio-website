"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn } from "lucide-react";

interface ZoomableImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const modalContent = isOpen ? (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000000]/95 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-200 cursor-zoom-out"
      role="dialog"
      aria-modal="true"
    >
      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(false);
        }}
        className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-[#1a1a1a] text-[#ffffff] hover:bg-[#76b900] hover:text-[#ffffff] transition-colors focus:outline-none"
        aria-label="Close zoomed view"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Modal Image Wrapper */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-[95vw] max-h-[92vh] flex flex-col items-center justify-center"
      >
        {/* eslint-disable-next-html-element-suppress */}
        <img
          src={src}
          alt={alt || "Zoomed Project Image"}
          className="max-w-[95vw] max-h-[85vh] object-contain rounded-[6px] shadow-2xl border border-[#333333]"
        />
        {alt && (
          <p className="mt-4 text-[14px] text-[rgba(255,255,255,0.8)] font-medium text-center max-w-[800px] bg-[#1a1a1a]/80 px-4 py-2 rounded-[4px]">
            {alt}
          </p>
        )}
      </div>
    </div>
  ) : null;

  return (
    <span className="my-8 flex flex-col items-center block">
      {/* Clickable Image Container */}
      <span
        onClick={() => setIsOpen(true)}
        className="group relative w-full overflow-hidden rounded-[8px] border border-[#e5e5e5] shadow-lg bg-[#000000] cursor-zoom-in block"
      >
        {/* eslint-disable-next-html-element-suppress */}
        <img
          src={src}
          alt={alt || "Project Image"}
          className={`w-full h-auto object-cover max-h-[600px] block transition-transform duration-300 group-hover:scale-[1.015] ${
            className || ""
          }`}
          loading="lazy"
        />

        {/* Hover overlay hint */}
        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#000000]/80 text-[#ffffff] text-[12px] font-bold opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm pointer-events-none">
          <ZoomIn className="w-3.5 h-3.5 text-[#76b900]" />
          Click to Zoom
        </span>
      </span>

      {/* Caption */}
      {alt && (
        <span className="mt-3 text-[14px] text-[#666666] font-medium text-center italic block">
          {alt}
        </span>
      )}

      {/* Fullscreen Zoom Modal rendered via React Portal directly into body */}
      {mounted && modalContent && createPortal(modalContent, document.body)}
    </span>
  );
}
