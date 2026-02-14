import { educationData } from '@/lib/data';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';

export function EducationSection() {
  return (
    <Section id="education">
      <SectionHeader title="Education" />
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <div key={index}>
            <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-base">{edu.institution}</h3>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
            </div>
            <p className="text-sm font-medium text-foreground/80">{edu.degree}</p>
            {edu.details && <p className="text-sm text-foreground/70 mt-1">{edu.details}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}
