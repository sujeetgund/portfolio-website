'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { projectsData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Section } from './section';
import { SectionHeader } from './section-header';

type Project = (typeof projectsData)[0];

export function ProjectsSection() {
  const [currentProjects] = useState(projectsData);

  return (
    <Section id="projects">
      <SectionHeader title="Projects" />
      <div className="space-y-6">
        {currentProjects.map((project: Project, index: number) => (
          <div key={index}>
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-base">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.period}</p>
            </div>
            <p className="mt-1 text-sm text-foreground/70 whitespace-pre-wrap">{project.description}</p>
            <div className="mt-2 flex gap-2">
              <Button asChild variant="link" size="sm" className="p-0 h-auto text-sm text-muted-foreground hover:text-foreground">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1 h-3 w-3" />
                  GitHub
                </Link>
              </Button>
              {project.live && (
                <Button asChild variant="link" size="sm" className="p-0 h-auto text-sm text-muted-foreground hover:text-foreground">
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Live Preview
                  </Link>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
