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
import { Section } from "./section";
import { SectionHeader } from "./section-header";

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
        <div className="mt-6 text-center">
          <Button variant="outline" onClick={() => setShowAll(!showAll)}>
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Show More
                <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </Section>
  );
}
