"use client";

import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Mail, X } from "lucide-react";
import { ImLinkedin } from "react-icons/im";
import { profileData } from "@/lib/data";

const MODAL_TIMEOUT = 10000; // 10 seconds
const DISMISS_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const LOCAL_STORAGE_KEY = "openToWorkDismissedTimestamp";

export function OpenToWorkModal() {
  const [isOpen, setIsOpen] = useState(false);
  const emailLink =
    profileData.contacts.find((c) => c.label === "Email")?.value ||
    "mailto:sujeetgund@email.com";
  const connectLink =
    profileData.contacts.find((c) => c.label === "LinkedIn")?.value ||
    "https://linkedin.com/in/sujeetgund";

  useEffect(() => {
    const dismissedTimestamp = localStorage.getItem(LOCAL_STORAGE_KEY);
    const now = new Date().getTime();

    if (
      dismissedTimestamp &&
      now - Number(dismissedTimestamp) < DISMISS_DURATION
    ) {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, MODAL_TIMEOUT);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    const now = new Date().getTime();
    localStorage.setItem(LOCAL_STORAGE_KEY, String(now));
    setIsOpen(false);
  };

  const handleConnect = (type: "email" | "linkedin") => {
    handleDismiss();
    if (type === "email") {
      window.location.href = emailLink;
    } else {
      window.open(connectLink, "_blank");
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="max-w-[400px] border border-[#5e5e5e] bg-[#000000] p-0 rounded-[2px] overflow-hidden gap-0 shadow-2xl">
        {/* Header Section */}
        <div className="flex justify-between items-center p-6 border-b border-[#5e5e5e] bg-[#1a1a1a]">
          <div className="flex items-center gap-3">
            <div className="h-[8px] w-[8px] rounded-full bg-[#76b900] animate-pulse" />
            <span className="text-[#ffffff] text-[12px] font-bold uppercase tracking-wider">
              Available to Work
            </span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-[#5e5e5e] hover:text-[#ffffff] transition-colors flex items-center justify-center focus:outline-none"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Accessible title hidden from view */}
        <AlertDialogTitle className="sr-only">
          Let&apos;s Work Together - I&apos;m Hiring Ready
        </AlertDialogTitle>

        {/* Main Content */}
        <div className="p-6">
          <h2 className="text-[28px] font-bold leading-[1.25] text-[#ffffff] mb-3">
            I&apos;m Hiring Ready
          </h2>
          <p className="text-[16px] leading-[1.5] text-[rgba(255,255,255,0.7)] mb-8">
            AI/ML Engineer ready to take on exciting challenges. Let&apos;s connect and build something great.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleConnect("linkedin")}
              className="w-full bg-[#0077b5] text-[#ffffff] hover:bg-[#005e93] font-bold text-[16px] leading-[1.25] h-[48px] rounded-[2px] flex items-center justify-center transition-colors border border-[#0077b5] focus:outline-none"
            >
              <ImLinkedin className="h-5 w-5 mr-3" />
              Connect on LinkedIn
            </button>

            <button
              onClick={() => handleConnect("email")}
              className="w-full bg-transparent text-[#ffffff] hover:bg-[#1a1a1a] font-bold text-[16px] leading-[1.25] h-[48px] rounded-[2px] flex items-center justify-center transition-colors border border-[#5e5e5e] focus:outline-none"
            >
              <Mail className="h-5 w-5 mr-3" />
              Send an Email
            </button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
