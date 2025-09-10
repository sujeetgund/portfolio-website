import { BrainCircuit } from 'lucide-react';
import { skillsData } from '@/lib/data';
import { Section } from './section';
import { SectionHeader } from './section-header';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-muted">
      <SectionHeader title="Technical Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-lg text-primary">
                <BrainCircuit className="h-6 w-6" />
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <Badge key={i} variant="outline" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
