'use client';

import Image from 'next/image';
import Link from 'next/link';
import { profileData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Section } from './section';
import { ArrowDownToLine } from 'lucide-react';

export function ProfileSection() {
  return (
    <Section id="profile" className="pt-0">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-8">
        <div className="text-center sm:text-left">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            {profileData.name}
          </h1>
          <p className="mt-2 text-base text-foreground/80 max-w-md">
            {profileData.title}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {profileData.location}
          </p>
          <div className="mt-4 flex items-center justify-center sm:justify-start gap-2">
            <Button asChild>
              <Link href={profileData.resumeUrl} target="_blank" rel="noopener noreferrer">
                <ArrowDownToLine className="mr-2" />
                Resume
              </Link>
            </Button>
            <div className="flex items-center gap-1">
              {profileData.contacts.map((contact) => (
                <Button asChild variant="ghost" size="icon" key={contact.label}>
                  <Link href={contact.value} target="_blank" rel="noopener noreferrer">
                    <contact.icon className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    <span className="sr-only">{contact.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="relative h-28 w-28 md:h-32 md:w-32 shrink-0">
          <Image
            src={profileData.image.src}
            alt={profileData.name}
            width={200}
            height={200}
            priority
            data-ai-hint={profileData.image.hint}
            className="rounded-xl object-cover border-4 border-background shadow-lg"
          />
        </div>
      </div>
    </Section>
  );
}
