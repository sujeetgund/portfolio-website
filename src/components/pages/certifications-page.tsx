"use client";

import { ArrowLeft, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { certificationsData } from "@/lib/data";

export function CertificationsPage() {
  return (
    <div className="relative min-h-dvh bg-gradient-to-b from-muted via-background to-muted">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.16),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(251,191,36,0.16),transparent_40%)]"
        aria-hidden="true"
      />

      <div className="container relative mx-auto max-w-7xl px-4 py-4 sm:py-8 md:py-12">
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

        <header className="mb-14 text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-xs font-semibold text-primary shadow-sm">
            <span
              className="h-2 w-2 rounded-full bg-primary animate-pulse"
              aria-hidden="true"
            />
            Verified credentials
          </div>
          <div className="space-y-3">
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">
              Certifications & Credentials
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
              Proof of capability across AI, ML, and cloud—validated by
              industry-recognized programs.
            </p>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(80% 120% at 20% 20%, rgba(99,102,241,0.08), transparent 60%), radial-gradient(70% 90% at 80% 0%, rgba(251,191,36,0.08), transparent 55%)",
                }}
              />

              <div className="relative flex h-full flex-col gap-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <Award className="h-4 w-4" />
                    {cert.issuer}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold text-muted-foreground">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-xl font-semibold leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {cert.name}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Credential highlights: coverage across core ML foundations,
                  practical deployment skills, and production-grade cloud
                  practices.
                </p>

                <div className="mt-auto flex items-center justify-between pt-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Verified • Portfolio ready
                  </div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-lg transition-all duration-300 hover:-translate-y-[1px] hover:shadow-xl focus:outline-none focus-visible:ring focus-visible:ring-offset-2 bg-black text-white hover:bg-black/90"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
              Core Competencies
            </h2>
            <p className="text-muted-foreground text-lg">
              Coverage areas strengthened by these credentials
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
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 space-y-3">
                  <div className="text-5xl inline-block transition-transform duration-300 group-hover:scale-110">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-semibold transition-colors duration-200 group-hover:text-primary">
                    {area.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Hands-on experience reinforced by certification coursework
                    and applied projects.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
