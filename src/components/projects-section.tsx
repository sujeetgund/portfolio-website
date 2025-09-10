'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, ExternalLink, Wand2 } from 'lucide-react';
import { projectsData } from '@/lib/data';
import { updateProjectsAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Section } from './section';
import { SectionHeader } from './section-header';
import { useToast } from "@/hooks/use-toast";

type Project = (typeof projectsData)[0];

export function ProjectsSection() {
  const [currentProjects, setCurrentProjects] = useState(projectsData);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const updatedDescriptions = await updateProjectsAction(currentProjects);
      setCurrentProjects(prevProjects =>
        prevProjects.map(project => {
          const updated = updatedDescriptions.find(u => u.title === project.title);
          return updated ? { ...project, description: updated.updatedDescription } : project;
        })
      );
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An unknown error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="projects">
      <div className="flex justify-between items-center mb-6">
        <SectionHeader title="Projects" />
        <Button onClick={handleUpdate} disabled={isLoading} variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          <Wand2 className="mr-2 h-4 w-4" />
          {isLoading ? 'Updating...' : 'Update with AI'}
        </Button>
      </div>
      <div className="space-y-6">
        {currentProjects.map((project: Project, index: number) => (
          <div key={index}>
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-base">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.period}</p>
            </div>
            <p className="mt-2 text-sm text-foreground/70 whitespace-pre-wrap">{project.description}</p>
            <div className="mt-3 flex gap-2">
              <Button asChild variant="link" size="sm" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1 h-3 w-3" />
                  GitHub
                </Link>
              </Button>
              {project.live && (
                <Button asChild variant="link" size="sm" className="p-0 h-auto text-muted-foreground hover:text-foreground">
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
