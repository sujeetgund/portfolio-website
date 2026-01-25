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
import { Mail, Linkedin, X, Sparkles } from "lucide-react";
import { profileData } from "@/lib/data";
import { motion } from "framer-motion";

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
      <AlertDialogContent className="max-w-sm overflow-hidden border border-border/40 bg-gradient-to-br from-background via-card to-background shadow-2xl sm:rounded-3xl p-0">
        {/* Animated gradient background */}
        <div
          className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl opacity-60"
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gradient-to-tl from-amber-400/15 via-amber-500/10 to-transparent blur-3xl opacity-50"
          aria-hidden="true"
        />

        {/* Close button */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-5 top-5 z-20"
        >
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full bg-background/60 border border-border/30 hover:bg-background/80 hover:border-border/60 shadow-md transition-all"
            onClick={handleDismiss}
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </Button>
        </motion.div>

        {/* Accessible title hidden from view */}
        <AlertDialogTitle className="sr-only">
          Let&apos;s Work Together - I&apos;m Hiring Ready
        </AlertDialogTitle>

        {/* Main Content - Minimal and focused */}
        <div className="relative space-y-6 p-8 sm:p-10">
          {/* Icon and Badge */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
            className="inline-block"
          >
            <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/15 to-amber-400/10 flex items-center justify-center border border-primary/20 shadow-lg">
              <span className="text-3xl">👋</span>
              <motion.div
                className="absolute inset-0 rounded-2xl border border-primary/20"
                animate={{ scale: 1.15, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="font-headline text-3xl font-bold tracking-tight text-foreground"
          >
            I&apos;m Hiring Ready
          </motion.h2>

          {/* Brief description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-sm text-foreground/70 leading-relaxed"
          >
            AI/ML Engineer ready to take on exciting challenges. Let&apos;s connect and build something great.
          </motion.p>

          {/* CTAs - Prominent and Clear */}
          <div className="space-y-2.5 pt-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <Button
                onClick={() => handleConnect("linkedin")}
                className="w-full h-11 bg-gradient-to-r from-[#0A66C2] to-[#004182] hover:from-[#004182] hover:to-[#003366] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Button
                onClick={() => handleConnect("email")}
                className="w-full h-11 bg-foreground text-background hover:bg-foreground/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send an Email
              </Button>
            </motion.div>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
