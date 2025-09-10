import { Briefcase } from 'lucide-react';
import { experienceData } from '@/lib/data';
import { Section } from './section';
import { SectionHeader } from './section-header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

export function ExperienceSection() {
  return (
    <Section id="experience" className="bg-muted">
      <SectionHeader title="Work Experience" />
      <div className="relative pl-6 after:absolute after:inset-y-0 after:left-6 after:w-px after:bg-border">
        {experienceData.map((item, index) => (
          <div key={index} className="relative mb-8 grid md:grid-cols-5 md:gap-8">
            <div className="relative md:col-span-1">
              <div className="absolute -left-12 -top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                <Briefcase className="h-5 w-5" />
              </div>
            </div>
            <div className="md:col-span-4">
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle className="font-headline text-xl text-primary">{item.role}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground sm:mt-0">{item.period}</p>
                  </div>
                  <CardDescription className="text-base font-semibold">{item.company} &bull; {item.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
