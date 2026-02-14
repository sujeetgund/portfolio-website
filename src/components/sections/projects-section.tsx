"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Github,
  ExternalLink,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { projectsData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";

type Project = (typeof projectsData)[0];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <Section id="projects">
      <SectionHeader title="Projects" />
      <div className="space-y-6">
        {projectsToShow.map((project: Project, index: number) => (
          <div key={index}>
            <h3 className="font-bold text-base">{project.title}</h3>
            <p className="mt-1 text-sm text-foreground/70 whitespace-pre-wrap">
              {project.description}
            </p>
            {project.tech && project.tech.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
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
            <div className="mt-3 flex items-center flex-wrap gap-x-4 gap-y-2">
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
      {projectsData.length > 3 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-[1px] hover:shadow-xl focus:outline-none focus-visible:ring focus-visible:ring-offset-2 bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="h-5 w-5" aria-hidden="true" />
              </>
            ) : (
              <>
                Show More Projects
                <ChevronDown className="h-5 w-5" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      )}
    </Section>
  );
}
