import { GraduationCap } from 'lucide-react';
import { educationData } from '@/lib/data';
import { Section } from './section';
import { SectionHeader } from './section-header';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

export function EducationSection() {
  return (
    <Section id="education" className="bg-muted">
      <SectionHeader title="Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <Card key={index} className="flex items-center p-6">
            <GraduationCap className="h-12 w-12 mr-6 text-primary" />
            <div>
              <CardTitle className="font-headline text-lg">{edu.degree}</CardTitle>
              <CardDescription className="mt-1">{edu.institution}</CardDescription>
              <CardDescription>{edu.period}</CardDescription>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
