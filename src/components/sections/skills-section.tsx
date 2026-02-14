import { skillsData } from '@/lib/data';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Badge } from '@/components/ui/badge';

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeader title="Skills" />
      <div className="space-y-4">
        {skillsData.map((category, index) => (
          <div key={index}>
            <h3 className="font-bold text-sm mb-2">{category.category}</h3>
            <div className="flex flex-wrap gap-1">
              {category.skills.map((skill, i) => (
                <Badge key={i} variant="secondary" className="font-normal text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
