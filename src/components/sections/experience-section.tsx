import { experienceData } from "@/lib/data";
import { formatDateRange } from "@/lib/date-utils";
import { ExternalLink, Check, Calendar, MapPin, Building2, Sparkles } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full bg-[#fcfdfd] py-[80px] px-6 md:px-12 border-b border-[#e5e7eb] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2 text-[#76b900] font-bold text-[13px] uppercase tracking-wider">
            <Building2 className="h-4 w-4" />
            Industry Impact
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.2] tracking-tight text-[#1a1a1a] m-0">
            Work Experience
          </h2>
          <p className="text-[16px] text-[#555555] max-w-[720px] m-0">
            Shipping autonomous AI agents, multi-tenant SaaS architectures, and omni-channel production platforms.
          </p>
        </div>

        {/* Timeline List */}
        <div className="flex flex-col gap-12 relative">
          {/* Vertical continuous accent line for desktop */}
          <div
            className="hidden md:block absolute left-[19px] top-6 bottom-6 w-[2px] bg-[#e2e8f0]"
            aria-hidden="true"
          />

          {experienceData.map((item, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              {/* Timeline Indicator Badge Node */}
              <div className="hidden md:flex shrink-0 w-[40px] h-[40px] rounded-full bg-[#ffffff] border-2 border-[#76b900] items-center justify-center z-10 shadow-[0_0_12px_rgba(118,185,0,0.25)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#76b900]" />
              </div>

              {/* Main Content Container */}
              <div className="flex-1 w-full bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#f0f0f0] pb-6 mb-6">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-[24px] font-bold text-[#1a1a1a] m-0">
                        {item.company}
                      </h3>
                      <span className="bg-[#f0f4eb] text-[#2b4c03] border border-[#d8e8c5] font-semibold text-[13px] px-3 py-1 rounded-[4px]">
                        {item.role}
                      </span>
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-1.5 text-[14px] text-[#666666] mt-1.5">
                        <MapPin className="h-3.5 w-3.5 text-[#76b900]" />
                        {item.location}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-[14px] font-semibold text-[#666666] bg-[#f8fafc] px-3.5 py-1.5 rounded-[6px] border border-[#e2e8f0] self-start sm:self-center">
                    <Calendar className="h-4 w-4 text-[#76b900]" />
                    {formatDateRange(item.startDate, item.endDate)}
                  </div>
                </div>

                {/* Company Role Overview */}
                <p className="text-[16px] leading-[1.65] text-[#333333] mb-8 m-0 font-normal">
                  {item.description}
                </p>

                {/* Internship Projects Section */}
                {item.projects && item.projects.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-[#757575] mb-1">
                      <Sparkles className="h-3.5 w-3.5 text-[#76b900]" />
                      Key Projects Delivered During Internship
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      {item.projects.map((proj, pIdx) => (
                        <div
                          key={pIdx}
                          className="group bg-[#fbfdfa] border border-[#e2e8f0] hover:border-[#76b900] transition-colors rounded-[8px] p-5 md:p-6"
                        >
                          {/* Project Header */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2.5 flex-wrap">
                              {proj.isCurrent && (
                                <span className="flex items-center gap-1.5 bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] font-bold text-[12px] px-2.5 py-0.5 rounded-[4px]">
                                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                  Active Project
                                </span>
                              )}
                              <h4 className="text-[19px] font-bold text-[#1a1a1a] m-0 group-hover:text-[#76b900] transition-colors">
                                {proj.title}
                              </h4>
                              {proj.badge && !proj.isCurrent && (
                                <span className="bg-[#f1f5f9] text-[#475569] font-medium text-[12px] px-2.5 py-0.5 rounded-[4px]">
                                  {proj.badge}
                                </span>
                              )}
                            </div>

                            {proj.url && (
                              <a
                                href={proj.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#2b4c03] bg-[#f0f4eb] hover:bg-[#76b900] hover:text-[#ffffff] px-3 py-1.5 rounded-[4px] transition-colors shrink-0 self-start sm:self-center"
                              >
                                Live Site
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            )}
                          </div>

                          {/* Project Short Description */}
                          <p className="text-[14px] text-[#4b5563] leading-[1.6] mb-4 m-0">
                            {proj.description}
                          </p>

                          {/* Highlights List */}
                          <ul className="space-y-2 mb-4 p-0 list-none">
                            {proj.highlights.map((hl, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-2.5 text-[14px] text-[#1f2937] leading-[1.5]">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f0f4eb] text-[#76b900] mt-0.5">
                                  <Check className="h-3 w-3 stroke-[3]" />
                                </span>
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tech Pills */}
                          {proj.tech && proj.tech.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#f1f5f9]">
                              {proj.tech.map((t, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="bg-[#ffffff] text-[#475569] border border-[#cbd5e1] text-[12px] font-medium px-2.5 py-0.5 rounded-[4px]"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

