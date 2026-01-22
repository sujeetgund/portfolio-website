"use client";

import { ArrowLeft, Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/lib/data";

export function ProjectsPage() {
  return (
    <div className="bg-muted min-h-dvh">
      <div className="container mx-auto max-w-4xl px-4 py-4 sm:py-8 md:py-12">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="mb-4 text-muted-foreground hover:text-foreground"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
        <header className="mb-8 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-2">
            My Projects
          </h1>
          <p className="max-w-3xl mx-auto text-foreground/80 text-base">
            A collection of my work in AI, Machine Learning, and software
            development.
          </p>
        </header>

        <div className="space-y-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-card p-4 sm:p-6 rounded-xl shadow-lg flex flex-col"
            >
              <div className="flex-grow">
                <h3 className="font-bold text-base mb-1">{project.title}</h3>
                <p className="mt-1 text-sm text-foreground/70 flex-grow">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 flex items-center flex-wrap gap-x-4 gap-y-2">
                {project.github && (
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="p-0 h-auto text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      GitHub
                    </Link>
                  </Button>
                )}
                {project.live && (
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="p-0 h-auto text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Live Preview
                    </Link>
                  </Button>
                )}
                {project.slug && (
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="p-0 h-auto text-sm text-accent-foreground hover:text-primary font-medium"
                  >
                    <Link href={`/projects/${project.slug}`}>
                      View Project
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
