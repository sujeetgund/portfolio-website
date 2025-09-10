'use client';

import { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { aboutData } from '@/lib/data';
import { refineAboutAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Section } from './section';
import { SectionHeader } from './section-header';
import { useToast } from "@/hooks/use-toast";

export function AboutSection() {
  const [aboutText, setAboutText] = useState(aboutData.summary);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleRefine = async () => {
    setIsLoading(true);
    try {
      const result = await refineAboutAction(aboutText);
      setAboutText(result.refinedAbout);
    } catch (error) {
       toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An unknown error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="about">
      <SectionHeader title="About" />
      <div className="relative">
        <p className="text-base leading-relaxed text-foreground/80 whitespace-pre-wrap">{aboutText}</p>
        <div className="mt-4 text-left">
          <Button onClick={handleRefine} disabled={isLoading} variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Wand2 className="mr-2 h-4 w-4" />
            {isLoading ? 'Refining...' : 'Refine with AI'}
          </Button>
        </div>
      </div>
    </Section>
  );
}
