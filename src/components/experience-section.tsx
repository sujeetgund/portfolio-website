import { experienceData } from '@/lib/data';
import { Section } from './section';
import { SectionHeader } from './section-header';

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader title="Work Experience" />
      <div className="space-y-6">
        {experienceData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-base">{item.role}</h3>
              <p className="text-sm text-muted-foreground">{item.period}</p>
            </div>
            <p className="text-sm font-medium text-foreground/80">{item.company}</p>
            <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
