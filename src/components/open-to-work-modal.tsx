"use client";

import { useState, useEffect } from "react";
import { Mail, X } from "lucide-react";
import { ImLinkedin } from "react-icons/im";
import { profileData } from "@/lib/data";

const WIDGET_TIMEOUT = 25000; // 25 seconds
const DISMISS_DURATION = 3 * 24 * 60 * 60 * 1000; // 3 days memory
const LOCAL_STORAGE_KEY = "contactWidgetDismissedTimestamp";

export function OpenToWorkModal() {
  const [isVisible, setIsVisible] = useState(false);

  const emailLink =
    profileData.contacts.find((c) => c.label === "Email")?.value ||
    "mailto:sujeetgund@gmail.com";
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
      setIsVisible(true);
    }, WIDGET_TIMEOUT);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    const now = new Date().getTime();
    localStorage.setItem(LOCAL_STORAGE_KEY, String(now));
    setIsVisible(false);
  };

  const handleConnect = (type: "email" | "linkedin") => {
    handleDismiss();
    if (type === "email") {
      window.location.href = emailLink;
    } else {
      window.open(connectLink, "_blank");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[999] max-w-[340px] w-full bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#2a2a2a] p-5 rounded-[12px] shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
      {/* Top row */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#76b900]" />
          <h3 className="text-[16px] font-bold text-[#ffffff] m-0 tracking-tight">
            Let&apos;s Connect
          </h3>
        </div>
        <button
          onClick={handleDismiss}
          className="text-[#666666] hover:text-[#ffffff] transition-colors p-1 rounded-[4px] focus:outline-none"
          aria-label="Dismiss contact widget"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Short natural copy */}
      <p className="text-[13.5px] leading-[1.5] text-[#a1a1aa] mb-4 m-0">
        Building an AI product or looking to hire a GenAI Engineer? Drop a
        message.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleConnect("email")}
          className="flex-1 bg-[#76b900] text-[#ffffff] hover:bg-[#5a8d00] font-bold text-[13px] h-[38px] rounded-[6px] flex items-center justify-center transition-colors focus:outline-none"
        >
          <Mail className="w-3.5 h-3.5 mr-1.5" />
          Email
        </button>

        <button
          onClick={() => handleConnect("linkedin")}
          className="flex-1 bg-[#1a1a1a] text-[#ffffff] hover:bg-[#262626] border border-[#333333] font-bold text-[13px] h-[38px] rounded-[6px] flex items-center justify-center transition-colors focus:outline-none"
        >
          <ImLinkedin className="w-3.5 h-3.5 mr-1.5 text-[#0077b5]" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
