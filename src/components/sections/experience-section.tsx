import { experienceData } from "@/lib/data";
import { formatDateRange } from "@/lib/date-utils";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full bg-[#ffffff] py-[60px] md:py-[80px] px-4 sm:px-6 md:px-12 border-b border-[#e5e5e5] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-[28px] sm:text-[34px] md:text-[36px] font-bold leading-[1.25] tracking-tight text-[#1a1a1a] m-0">
            Work Experience
          </h2>
        </div>

        {/* Organizations & Roles Timeline */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {experienceData.map((companyItem, cIdx) => (
            <div
              key={cIdx}
              className="bg-[#0c0c0e] border border-[#27272a] rounded-[12px] p-5 sm:p-6 md:p-8 shadow-xl transition-all"
            >
              <div className="flex flex-col gap-6">
                {companyItem.roles.map((roleItem, rIdx) => (
                  <div key={rIdx} className="flex flex-col gap-4">
                    {/* Simplified Header: Role & Date Range, Company & Location */}
                    <div className="border-b border-[#1f1f23] pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                      <div>
                        <h3 className="text-[19px] sm:text-[22px] font-bold text-[#ffffff] m-0 tracking-tight">
                          {roleItem.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[14px] font-medium text-[#a1a1aa] mt-1.5">
                          {companyItem.logo && (
                            <Image
                              src={companyItem.logo}
                              alt={companyItem.company}
                              width={20}
                              height={20}
                              className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] rounded-[4px] object-contain shrink-0"
                            />
                          )}
                          {companyItem.companyUrl ? (
                            <Link
                              href={companyItem.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#ffffff] hover:text-[#76b900] font-semibold transition-colors"
                            >
                              {companyItem.company}
                            </Link>
                          ) : (
                            <span className="text-[#ffffff] font-semibold">
                              {companyItem.company}
                            </span>
                          )}
                          {companyItem.location && (
                            <>
                              <span className="text-[#52525b]">•</span>
                              <span className="text-[#a1a1aa]">
                                {companyItem.location}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="text-[13px] sm:text-[14px] font-medium text-[#76b900] shrink-0">
                        {formatDateRange(
                          roleItem.startDate,
                          roleItem.endDate
                        )}
                      </div>
                    </div>

                    {/* Role Summary Description */}
                    {roleItem.description && (
                      <p className="text-[13.5px] sm:text-[14.5px] leading-[1.65] text-[#a1a1aa] m-0 font-normal">
                        {roleItem.description}
                      </p>
                    )}

                    {/* Role Bullet Points List */}
                    {roleItem.bulletPoints &&
                      roleItem.bulletPoints.length > 0 && (
                        <ul className="space-y-3.5 sm:space-y-4 my-1 p-0 list-none">
                          {roleItem.bulletPoints.map((bp, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-3 text-[13.5px] sm:text-[14.5px] text-[#d4d4d8] leading-[1.65] group"
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
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
