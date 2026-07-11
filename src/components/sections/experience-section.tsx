import { experienceData } from '@/lib/data';
import { formatDateRange } from '@/lib/date-utils';

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full bg-[#ffffff] py-[80px] px-6 md:px-12 border-b border-[#cccccc]">
      <div className="max-w-[1280px] mx-auto w-full">
        <h2 className="text-[36px] font-bold leading-[1.25] tracking-tight mb-12 text-[#1a1a1a] m-0">
          Work Experience
        </h2>
        
        <div className="flex flex-col gap-8">
          {experienceData.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start border-l-2 border-[#76b900] pl-6 py-2">
              <div className="md:w-[280px] shrink-0">
                <h3 className="text-[20px] font-bold leading-[1.25] text-[#1a1a1a] m-0">
                  {item.company}
                </h3>
                <p className="text-[14px] font-bold text-[#757575] mt-2 uppercase tracking-wide">
                  {formatDateRange(item.startDate, item.endDate)}
                </p>
                {item.location && (
                  <p className="text-[14px] font-normal text-[#757575] mt-1">
                    {item.location}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <p className="text-[18px] font-bold text-[#1a1a1a] leading-[1.5] m-0 mb-3">
                  {item.role}
                </p>
                <p className="text-[16px] leading-[1.67] text-[#1a1a1a] m-0 max-w-[800px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
