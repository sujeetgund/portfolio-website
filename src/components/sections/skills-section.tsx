import { skillsData } from '@/lib/data';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';

export function SkillsSection() {
  return (
    <Section id="skills">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        <SectionHeader title="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-[#ffffff] border border-[#cccccc] p-[24px] rounded-[2px] relative">
              <div className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#76b900] rounded-tr-[2px]" />
              <h3 className="text-[18px] sm:text-[20px] font-bold leading-[1.25] text-[#1a1a1a] mb-6 m-0">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-transparent border border-[#cccccc] text-[#1a1a1a] text-[13px] sm:text-[14.4px] font-bold px-[14px] sm:px-[18px] py-[8px] sm:py-[10px] rounded-[2px] hover:bg-[#1a1a1a] hover:text-[#ffffff] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
