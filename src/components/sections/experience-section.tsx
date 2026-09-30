import { experienceData } from "@/lib/data";
import { formatDateRange } from "@/lib/date-utils";
import { ExternalLink, Calendar, MapPin, Check } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full bg-[#ffffff] py-[80px] px-6 md:px-12 border-b border-[#1f1f23] relative overflow-hidden"
    >
      {/* Background Subtle Radial Glow */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#76b900]/5 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-[32px] md:text-[44px] font-bold leading-[1.2] tracking-tight m-0">
            Work Experience
          </h2>
        </div>

        {/* Organizations Timeline */}
        <div className="flex flex-col gap-10">
          {experienceData.map((companyItem, cIdx) => (
            <div
              key={cIdx}
              className="bg-[#0f0f12] border border-[#27272a] rounded-[12px] p-6 md:p-8 relative overflow-hidden shadow-xl"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#76b900] via-[#5a8d00] to-[#76b900]" />

              {/* Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#27272a] pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    {companyItem.companyUrl && (
                      <Link
                        href={companyItem.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${companyItem.company} website`}
                      >
                        <h3 className="text-[26px] font-bold text-[#ffffff] m-0 tracking-tight">
                          {companyItem.company}
                        </h3>
                      </Link>
                    )}
                  </div>

                  {companyItem.location && (
                    <div className="flex items-center gap-1.5 text-[14px] text-[#a1a1aa] mt-1">
                      <MapPin className="h-3.5 w-3.5 text-[#76b900]" />
                      {companyItem.location}
                    </div>
                  )}
                </div>
              </div>

              {/* Roles Progression Timeline within Company */}
              <div className="flex flex-col gap-8 relative">
                {companyItem.roles.length > 1 && (
                  <div
                    className="hidden md:block absolute left-[15px] top-4 bottom-4 w-[2px] bg-[#27272a]"
                    aria-hidden="true"
                  />
                )}

                {companyItem.roles.map((roleItem, rIdx) => (
                  <div
                    key={rIdx}
                    className="relative flex flex-col md:flex-row gap-6 items-start"
                  >
                    {/* Role Node Indicator if multiple roles */}
                    {companyItem.roles.length > 1 && (
                      <div className="hidden md:flex shrink-0 w-[32px] h-[32px] rounded-full bg-[#18181b] border-2 border-[#76b900] items-center justify-center z-10">
                        <span className="w-2 h-2 rounded-full bg-[#76b900]" />
                      </div>
                    )}

                    <div className="flex-1 w-full">
                      {/* Role Title & Date Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <h4 className="text-[20px] font-bold text-[#ffffff] m-0">
                          {roleItem.title}
                        </h4>

                        <div className="flex items-center gap-2 text-[13px] font-semibold text-[#86efac] bg-[#76b900]/10 px-3 py-1 rounded-[6px] border border-[#76b900]/30 self-start sm:self-center">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDateRange(
                            roleItem.startDate,
                            roleItem.endDate,
                          )}
                        </div>
                      </div>

                      {/* Role Summary Description */}
                      {roleItem.description && (
                        <p className="text-[15px] leading-[1.65] text-[#a1a1aa] mb-5 m-0 font-normal">
                          {roleItem.description}
                        </p>
                      )}

                      {/* Structured Bullets with optional links/badges */}
                      {roleItem.bullets && roleItem.bullets.length > 0 && (
                        <div className="flex flex-col gap-3 my-4">
                          {roleItem.bullets.map((bItem, bIdx) => (
                            <div
                              key={bIdx}
                              className="flex flex-col sm:flex-row sm:items-start gap-2.5 sm:gap-4 text-[14px] leading-[1.6] bg-[#141417] border border-[#27272a] hover:border-[#76b900]/40 rounded-[8px] p-4 transition-all"
                            >
                              <div className="flex items-center gap-2 shrink-0 self-start">
                                {bItem.link && (
                                  <a
                                    href={bItem.link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-[13px] font-bold text-[#86efac] bg-[#76b900]/10 hover:bg-[#76b900] hover:text-[#ffffff] border border-[#76b900]/30 px-2.5 py-1 rounded-[4px] transition-all"
                                  >
                                    {bItem.link.label}
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                )}
                                {bItem.badge && (
                                  <span className="bg-[#27272a] text-[#a1a1aa] font-medium text-[12px] px-2 py-0.5 rounded-[4px]">
                                    {bItem.badge}
                                  </span>
                                )}
                              </div>
                              <p className="flex-1 text-[#e4e4e7] m-0 font-normal">
                                {bItem.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Generic Role Bullet Points */}
                      {roleItem.bulletPoints &&
                        roleItem.bulletPoints.length > 0 && (
                          <ul className="space-y-3.5 my-4 p-0 list-none">
                            {roleItem.bulletPoints.map((bp, bIdx) => (
                              <li
                                key={bIdx}
                                className="flex items-start gap-3.5 text-[15px] text-[#e4e4e7] leading-[1.65] bg-[#141417] border border-[#27272a] hover:border-[#76b900]/30 rounded-[8px] p-4 transition-colors"
                              >
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#76b900]/15 text-[#76b900] mt-0.5 border border-[#76b900]/30">
                                  <Check className="h-3 w-3 stroke-[3]" />
                                </span>
                                <div className="flex-1 text-[#d4d4d8]">
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
                                          className="font-bold text-[#86efac]"
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
