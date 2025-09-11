'use client';

import { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from './ui/button';
import { Rocket, X } from 'lucide-react';

const MODAL_TIMEOUT = 10000; // 10 seconds
const DISMISS_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const LOCAL_STORAGE_KEY = 'openToWorkDismissedTimestamp';

export function OpenToWorkModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissedTimestamp = localStorage.getItem(LOCAL_STORAGE_KEY);
    const now = new Date().getTime();

    if (dismissedTimestamp && now - Number(dismissedTimestamp) < DISMISS_DURATION) {
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
  
  const handleOpenToWorkClick = () => {
    handleDismiss();
    window.location.href = 'mailto:sujeetgund@email.com';
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="flex justify-center mb-4">
             <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Rocket className="h-8 w-8 text-primary" />
             </div>
          </div>
          <AlertDialogTitle className="text-center font-headline text-2xl">
            Open to New Opportunities
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-foreground/80 pt-2">
            I&apos;m currently seeking new roles and collaborations in AI and Machine Learning. If you have an exciting project or a role that aligns with my skills, I&apos;d love to connect!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-2 mt-2">
          <Button onClick={handleOpenToWorkClick}>
              Let&apos;s Connect
          </Button>
          <Button variant="ghost" onClick={handleDismiss} className="text-muted-foreground">
             Maybe later
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
