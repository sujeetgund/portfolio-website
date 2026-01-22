"use client";

import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { Mail, Linkedin, X } from "lucide-react";
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
      <AlertDialogContent className="max-w-md bg-white dark:bg-gray-950 border border-border shadow-xl sm:rounded-2xl">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 h-6 w-6 rounded-full opacity-70 hover:opacity-100"
          onClick={handleDismiss}
        >
          <X className="h-4 w-4" />
        </Button>

        <AlertDialogHeader className="space-y-4 pt-6">
          <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-2xl">👋</span>
          </div>

          <AlertDialogTitle className="text-center text-2xl font-bold tracking-tight text-foreground">
            I&apos;m Available for New Opportunities
          </AlertDialogTitle>

          <p className="text-center text-sm text-muted-foreground px-2">
            Looking for AI/ML expertise? Let&apos;s discuss how I can contribute
            to your team.
          </p>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex-col gap-3 sm:flex-col mt-6 pb-2">
          <Button
            onClick={() => handleConnect("linkedin")}
            className="w-full h-11 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            Connect on LinkedIn
          </Button>

          <Button
            onClick={() => handleConnect("email")}
            className="w-full h-11 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send an Email
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
