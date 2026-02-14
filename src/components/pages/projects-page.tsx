"use client";

import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/lib/data";

export function ProjectsPage() {
  return (
    <div className="relative min-h-dvh bg-gradient-to-b from-muted via-background to-muted">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(251,191,36,0.18),transparent_35%)]"
        aria-hidden="true"
      />

      <div className="container relative mx-auto max-w-6xl px-4 py-4 sm:py-8 md:py-12">
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

        <header className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-xs font-semibold text-primary shadow-sm">
            <span
              className="h-2 w-2 rounded-full bg-primary animate-pulse"
              aria-hidden="true"
            />
            AI/ML builds · Full-stack systems
          </div>
          <div className="space-y-3">
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">
              Featured Projects
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
              End-to-end products spanning LLMs, ML services, and
              production-ready APIs.
            </p>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(70% 120% at 30% 20%, rgba(99,102,241,0.08), transparent 60%), radial-gradient(60% 80% at 80% 0%, rgba(251,191,36,0.08), transparent 55%)",
                  }}
                />

                <div className="relative flex flex-col h-full">
                  <div className="mb-4 flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1 border border-primary/20">
                      {project.tech?.[0] ?? "Project"}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold leading-tight text-foreground group-hover:text-primary transition-colors pr-4 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {project.tech && project.tech.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.slice(0, 5).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-[11px] leading-tight"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 5 && (
                        <Badge
                          variant="secondary"
                          className="text-[11px] leading-tight bg-muted/60"
                        >
                          +{project.tech.length - 5}
                        </Badge>
                      )}
                    </div>
                  )}

                  <div className="mt-auto pt-5 flex items-center gap-3 text-sm">
                    {project.github && (
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.github, "_blank");
                        }}
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </span>
                    )}
                    {project.live && (
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.live, "_blank");
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </span>
                    )}
                    <span className="ml-auto inline-flex items-center gap-1 text-primary font-semibold transition-transform duration-200 group-hover:translate-x-1">
                      View Details
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
