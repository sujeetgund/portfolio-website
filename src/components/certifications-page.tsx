"use client";

import {
  ArrowLeft,
  Award,
  ExternalLink,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { certificationsData } from "@/lib/data";

export function CertificationsPage() {
  return (
    <div className="bg-gradient-to-b from-muted via-background to-muted min-h-dvh">
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:py-8 md:py-12">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>

        <header className="mb-16 text-center">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Certifications & Credentials
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-8">
            Professional certifications demonstrating my expertise in AI,
            Machine Learning, and Cloud Technologies
          </p>
        </header>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="flex h-full flex-col">
                {/* Left side - Vertical date */}
                <div className="w-20 bg-primary/5 border-r border-border flex items-center justify-center p-4">
                  <div className="writing-mode-vertical text-center">
                    <p
                      className="font-bold text-lg text-primary whitespace-nowrap"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                      }}
                    >
                      {cert.year}
                    </p>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <div>
                    {/* Icon */}
                    <div className="inline-flex h-12 w-12 rounded-xl bg-primary/10 items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>

                    {/* Issuer */}
                    <p className="text-sm text-muted-foreground font-medium mb-4">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* CTA Button - AWS Console Style - Stick to bottom */}
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium border border-slate-600 shadow-sm rounded-md mt-auto"
                  >
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-3 text-foreground">
              Core Competencies
            </h2>
            <p className="text-muted-foreground text-lg">
              Areas of expertise covered by these certifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Machine Learning", icon: "🤖" },
              { name: "Deep Learning", icon: "🧠" },
              { name: "Cloud Computing", icon: "☁️" },
              { name: "Data Science", icon: "📊" },
              { name: "Natural Language Processing", icon: "💬" },
              { name: "Python Programming", icon: "🐍" },
            ].map((area, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {area.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
