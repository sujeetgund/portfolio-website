"use client";

import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Section } from "./section";
import { ArrowDownToLine, MapPin, Sparkles } from "lucide-react";

export function ProfileSection() {
  return (
    <Section id="profile" className="pt-0">
      <div className="relative overflow-hidden rounded-2xl border bg-card/80 shadow-xl">
        <div
          className="absolute -left-16 -top-24 h-56 w-56 rounded-full bg-primary/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 p-6 sm:p-8">
          <div className="relative h-32 w-32 md:h-36 md:w-36 shrink-0">
            <Image
              src={profileData.image.src}
              alt={profileData.name}
              fill
              priority
              data-ai-hint={profileData.image.hint}
              className="rounded-[2rem] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-3 right-2 inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold shadow-lg ring-1 ring-border/80">
              <Sparkles
                className="h-3.5 w-3.5 text-primary"
                aria-hidden="true"
              />
              Builder
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              LLMs · ML Systems
            </div>

            <h1 className="font-headline text-4xl md:text-5xl font-bold">
              {profileData.name}
            </h1>

            <p className="text-base text-foreground/80 leading-relaxed max-w-2xl md:max-w-xl mx-auto md:mx-0">
              {profileData.title}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                {profileData.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1">
                <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                Building intelligent products
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-1">
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-[1px] hover:shadow-xl focus:outline-none focus-visible:ring focus-visible:ring-offset-2 bg-black text-white hover:bg-black/90"
              >
                <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
                View Resume
              </a>

              <div className="flex items-center gap-2">
                {profileData.contacts.map((contact) => (
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    key={contact.label}
                    className="h-10 w-10 rounded-full border-border/70 bg-background/70"
                  >
                    <Link
                      href={contact.value}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <contact.icon className="h-4 w-4 text-foreground" />
                      <span className="sr-only">{contact.label}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
