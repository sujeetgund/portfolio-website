import { certificationsData } from '@/lib/data';
import { Section } from './section';
import { SectionHeader } from './section-header';

export function CertificationsSection() {
  return (
    <Section id="certifications">
      <SectionHeader title="Certifications" />
      <div className="space-y-2">
        {certificationsData.map((cert, index) => (
          <div key={index}>
             <p className="text-sm font-medium">{cert.name} <span className="text-muted-foreground">by {cert.issuer} - {cert.year}</span></p>
          </div>
        ))}
      </div>
    </Section>
  );
}
