'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, ExternalLink, Wand2 } from 'lucide-react';
import { projectsData } from '@/lib/data';
import { updateProjectsAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Section } from './section';
import { SectionHeader } from './section-header';
import { useToast } from "@/hooks/use-toast";

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
      <SectionHeader title="Projects" description="A selection of my work. Feel free to explore." />
       <div className="mb-8 text-center">
          <Button onClick={handleUpdate} disabled={isLoading} variant="secondary">
            <Wand2 className="mr-2 h-4 w-4" />
            {isLoading ? 'Updating Summaries...' : 'Update Summaries with AI'}
          </Button>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{project.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              {project.live && (
                <Button asChild variant="default" size="sm">
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
