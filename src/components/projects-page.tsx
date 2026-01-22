"use client";

import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/lib/data";

export function ProjectsPage() {
  return (
    <div className="bg-gradient-to-b from-muted via-background to-muted min-h-dvh">
      <div className="container mx-auto max-w-6xl px-4 py-4 sm:py-8 md:py-12">
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
        
        <header className="mb-12 text-center">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Explore my portfolio of AI/ML solutions, full-stack applications, and intelligent systems
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-xl group-hover:text-primary transition-colors pr-2 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  {project.github && (
                    <span
                      className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.github, '_blank');
                      }}
                    >
                      <Github className="mr-1.5 h-4 w-4" />
                      Code
                    </span>
                  )}
                  {project.live && (
                    <span
                      className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.live, '_blank');
                      }}
                    >
                      <ExternalLink className="mr-1.5 h-4 w-4" />
                      Live
                    </span>
                  )}
                  <span className="ml-auto text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
