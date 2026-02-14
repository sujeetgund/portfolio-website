'use client';

import { useState } from 'react';
import { aboutData } from '@/lib/data';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';

export function AboutSection() {
  const [aboutText] = useState(aboutData.summary);
  
  return (
    <Section id="about">
      <SectionHeader title="About" />
      <div className="relative">
        <p className="text-sm leading-relaxed text-foreground/80 whitespace-pre-wrap">{aboutText}</p>
      </div>
    </Section>
  );
}
