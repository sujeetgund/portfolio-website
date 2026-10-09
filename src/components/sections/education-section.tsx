import { educationData } from "@/lib/data";
import { formatDateRange } from "@/lib/date-utils";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";

export function EducationSection() {
  return (
    <Section id="education">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        <SectionHeader title="Education" />
        <div
          className={`grid gap-6 ${
            educationData.length > 1
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 max-w-[840px]"
          }`}
        >
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-[#ffffff] border border-[#cccccc] hover:border-[#76b900] transition-colors p-[24px] rounded-[4px] relative group shadow-sm"
            >
              {/* Signature Corner Hover Accent (Matching Skills & Certifications) */}
              <div className="absolute top-0 right-0 w-[12px] h-[12px] bg-transparent group-hover:bg-[#76b900] transition-colors rounded-tr-[4px]" />

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-1.5 border-b border-[#eeeeee] pb-3.5 mb-3.5">
                <div>
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-[#1a1a1a] m-0 leading-[1.3]">
                    {edu.degree}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-semibold text-[#555555] mt-1 m-0">
                    {edu.institution}
                  </p>
                </div>

                <span className="text-[13px] sm:text-[14px] font-bold text-[#757575] shrink-0">
                  {formatDateRange(edu.startDate, edu.endDate)}
                </span>
              </div>

              {edu.details && (
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 bg-[#f4f4f5] border border-[#e4e4e7] text-[#27272a] font-semibold px-2.5 py-0.5 rounded-[4px] text-[13px]">
                    <span className="w-1.5 h-1.5 bg-[#76b900]" />
                    {edu.details}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
