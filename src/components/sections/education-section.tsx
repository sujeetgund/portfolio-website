import { educationData } from '@/lib/data';
import { formatDateRange } from '@/lib/date-utils';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';

export function EducationSection() {
  return (
    <Section id="education">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        <SectionHeader title="Education" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-[#ffffff] border border-[#cccccc] p-[24px] rounded-[2px]">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-2 gap-1">
                <h3 className="text-[18px] sm:text-[20px] font-bold leading-[1.25] text-[#1a1a1a] m-0">
                  {edu.institution}
                </h3>
                <p className="text-[13px] sm:text-[14px] font-bold text-[#757575] uppercase tracking-wide">
                  {formatDateRange(edu.startDate, edu.endDate)}
                </p>
              </div>
              <p className="text-[15px] sm:text-[16px] font-bold text-[#1a1a1a] leading-[1.5] m-0">
                {edu.degree}
              </p>
              {edu.details && (
                <p className="text-[14px] sm:text-[15px] leading-[1.67] text-[#475569] mt-2 m-0">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
