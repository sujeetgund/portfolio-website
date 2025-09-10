import { Award } from 'lucide-react';
import { certificationsData } from '@/lib/data';
import { Section } from './section';
import { SectionHeader } from './section-header';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

export function CertificationsSection() {
  return (
    <Section id="certifications">
      <SectionHeader title="Certifications" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificationsData.map((cert, index) => (
          <Card key={index} className="flex items-center p-6">
            <Award className="h-12 w-12 mr-6 text-accent" />
            <div>
              <CardTitle className="font-headline text-lg">{cert.name}</CardTitle>
              <CardDescription className="mt-1">{cert.issuer} &bull; {cert.year}</CardDescription>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
