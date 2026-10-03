import { aboutData } from '@/lib/data';
import { SectionHeader } from '@/components/section-header';

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#ffffff] py-[80px] px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto w-full">
        <SectionHeader title="About" />
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mt-8">
          {/* Left Column: Title & Stats */}
          <div className="lg:w-5/12 flex flex-col gap-10">
            <h3 className="text-[24px] sm:text-[30px] md:text-[36px] font-bold leading-[1.25] text-[#1a1a1a] tracking-tight m-0">
              {aboutData.title}
            </h3>
            
            <div className="grid grid-cols-2 gap-8 border-t border-[#cccccc] pt-8">
              {aboutData.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-[32px] sm:text-[40px] font-bold text-[#76b900] leading-[1]">
                    {stat.value}
                  </span>
                  <span className="text-[13px] sm:text-[14px] font-bold text-[#757575] uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Paragraphs */}
          <div className="lg:w-7/12 flex flex-col gap-6">
            {aboutData.paragraphs.map((para, idx) => (
              <p 
                key={idx} 
                className={`m-0 ${
                  idx === 0 
                    ? "text-[17px] sm:text-[19px] md:text-[20px] leading-[1.5] text-[#1a1a1a] font-bold" 
                    : "text-[15px] sm:text-[16px] leading-[1.67] text-[#1a1a1a]"
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
