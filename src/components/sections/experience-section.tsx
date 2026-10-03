import { experienceData } from "@/lib/data";
import { formatDateRange } from "@/lib/date-utils";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full bg-[#ffffff] py-[80px] px-6 md:px-12 border-b border-[#1f1f23] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-[32px] md:text-[44px] font-bold leading-[1.2] tracking-tight m-0">
            Work Experience
          </h2>
        </div>

        {/* Organizations Timeline */}
        <div className="flex flex-col gap-8">
          {experienceData.map((companyItem, cIdx) => (
            <div
              key={cIdx}
              className="bg-[#0c0c0e] border border-[#27272a] rounded-[8px] p-5 md:p-7 relative overflow-hidden"
            >
              {/* Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1f1f23] pb-4 mb-5">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {companyItem.companyUrl ? (
                      <Link
                        href={companyItem.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/company inline-flex items-center gap-2 text-[#ffffff] hover:text-[#76b900] transition-colors"
                        aria-label={`${companyItem.company} website`}
                      >
                        <h3 className="text-[22px] sm:text-[25px] font-bold m-0 tracking-tight text-inherit">
                          {companyItem.company}
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="text-[22px] sm:text-[25px] font-bold text-[#ffffff] m-0 tracking-tight">
                        {companyItem.company}
                      </h3>
                    )}
                  </div>

                  {companyItem.location && (
                    <div className="flex items-center gap-1.5 text-[13px] text-[#a1a1aa] mt-1">
                      <MapPin className="h-3.5 w-3.5 text-[#76b900]" />
                      {companyItem.location}
                    </div>
                  )}
                </div>
              </div>

              {/* Roles Progression Timeline within Company */}
              <div className="flex flex-col gap-6 relative">
                {companyItem.roles.length > 1 && (
                  <div
                    className="hidden md:block absolute left-[15px] top-4 bottom-4 w-[2px] bg-[#27272a]"
                    aria-hidden="true"
                  />
                )}

                {companyItem.roles.map((roleItem, rIdx) => (
                  <div
                    key={rIdx}
                    className="relative flex flex-col md:flex-row gap-5 items-start"
                  >
                    {/* Role Node Indicator if multiple roles */}
                    {companyItem.roles.length > 1 && (
                      <div className="hidden md:flex shrink-0 w-[28px] h-[28px] rounded-full bg-[#18181b] border-2 border-[#76b900] items-center justify-center z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#76b900]" />
                      </div>
                    )}

                    <div className="flex-1 w-full">
                      {/* Role Title & Date Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h4 className="text-[18px] sm:text-[19px] font-bold text-[#ffffff] m-0">
                          {roleItem.title}
                        </h4>

                        <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#76b900] shrink-0 self-start sm:self-center">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDateRange(
                            roleItem.startDate,
                            roleItem.endDate,
                          )}
                        </div>
                      </div>

                      {/* Role Summary Description */}
                      {roleItem.description && (
                        <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#a1a1aa] mb-4 m-0 font-normal">
                          {roleItem.description}
                        </p>
                      )}

                      {/* Role Bullet Points */}
                      {roleItem.bulletPoints &&
                        roleItem.bulletPoints.length > 0 && (
                          <ul className="space-y-3 my-3 p-0 list-none">
                            {roleItem.bulletPoints.map((bp, bIdx) => (
                              <li
                                key={bIdx}
                                className="flex items-start gap-2.5 text-[14px] text-[#d4d4d8] leading-[1.6] group"
                              >
                                <span
                                  className="h-1.5 w-1.5 rounded-full bg-[#76b900] mt-2 shrink-0 group-hover:scale-125 transition-transform"
                                  aria-hidden="true"
                                />
                                <div className="flex-1 text-[#e4e4e7] font-normal">
                                  <ReactMarkdown
                                    components={{
                                      a: ({ node, ...props }) => (
                                        <a
                                          {...props}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="font-bold text-[#86efac] hover:text-[#ffffff] underline underline-offset-4 decoration-[#76b900]/50 transition-colors"
                                        />
                                      ),
                                      strong: ({ node, ...props }) => (
                                        <strong
                                          {...props}
                                          className="font-bold text-[#86efac] px-0.5"
                                        />
                                      ),
                                      p: ({ node, ...props }) => (
                                        <span {...props} />
                                      ),
                                    }}
                                  >
                                    {bp}
                                  </ReactMarkdown>
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
