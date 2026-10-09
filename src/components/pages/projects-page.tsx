import { ArrowLeft, ArrowRight } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { RxExternalLink } from "react-icons/rx";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { projectsData } from "@/lib/data";

export function ProjectsPage() {
  return (
    <div className="w-full bg-[#ffffff] text-[#1a1a1a] font-body">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-12 pt-[80px] sm:pt-[95px] md:pt-[110px] pb-[60px] md:pb-[80px]">
        {/* Back Link */}
        <Link
          href="/"
          className="text-[#52525b] hover:text-[#76b900] text-[13.5px] sm:text-[14px] font-semibold inline-flex items-center transition-colors mb-4 sm:mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>

        {/* Page Header */}
        <div className="mb-6 sm:mb-8 md:mb-12 border-b border-[#e5e5e5] pb-5 sm:pb-8">
          <h1 className="text-[26px] sm:text-[36px] md:text-[48px] font-extrabold leading-[1.2] tracking-tight mb-2 sm:mb-3 text-[#1a1a1a]">
            All Projects
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-[17px] leading-[1.6] text-[#52525b] max-w-[760px] m-0">
            A complete collection of production systems, multi-agent AI workflows, and full-stack applications built by Sujeet Gund.
          </p>
        </div>

        {/* Projects Grid (Executive Dark Cards matching Work Experience) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {projectsData.map((project, index) => {
            return (
              <div
                key={index}
                className="flex flex-col bg-[#0c0c0e] border border-[#27272a] hover:border-[#76b900]/60 rounded-[12px] p-5 sm:p-7 md:p-8 shadow-xl transition-all group relative"
              >
                {/* Header Row: Title & Tagline */}
                <div className="flex flex-col gap-1 mb-3">
                  <h3 className="text-[21px] sm:text-[24px] font-bold leading-[1.3] text-[#ffffff] group-hover:text-[#76b900] transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  {project.tagline && (
                    <p className="text-[13px] sm:text-[14px] font-normal italic text-[#a1a1aa] m-0">
                      {project.tagline}
                    </p>
                  )}
                </div>

                <div className="text-[13.5px] sm:text-[14.5px] md:text-[15px] leading-[1.65] text-[#a1a1aa] mb-5 sm:mb-6">
                  <ReactMarkdown
                    components={{
                      strong: ({ node, ...props }) => (
                        <strong
                          {...props}
                          className="font-bold text-[#86efac] px-0.5"
                        />
                      ),
                      p: ({ node, ...props }) => <span {...props} />,
                    }}
                  >
                    {project.description}
                  </ReactMarkdown>
                </div>

                {/* Tech Chips */}
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#141417] border border-[#27272a] text-[#d4d4d8] hover:text-[#86efac] hover:border-[#76b900]/50 text-[11.5px] sm:text-[12px] font-medium px-2.5 sm:px-3 py-1 rounded-[6px] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer Action Buttons */}
                <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-t border-[#1f1f23] pt-4 sm:pt-5">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#141417] hover:bg-[#1f1f23] text-[#d4d4d8] hover:text-[#ffffff] border border-[#27272a] hover:border-[#76b900]/40 text-[13px] font-semibold px-3.5 py-2.5 rounded-[8px] inline-flex items-center justify-center transition-all shadow-sm active:scale-[0.98] group/btn w-full sm:w-auto"
                      >
                        <VscGithub className="mr-2 h-4 w-4 text-[#76b900] group-hover/btn:scale-110 transition-transform" />
                        Source Code
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#141417] hover:bg-[#1f1f23] text-[#d4d4d8] hover:text-[#ffffff] border border-[#27272a] hover:border-[#76b900]/40 text-[13px] font-semibold px-3.5 py-2.5 rounded-[8px] inline-flex items-center justify-center transition-all shadow-sm active:scale-[0.98] group/btn w-full sm:w-auto"
                      >
                        <RxExternalLink className="mr-2 h-4 w-4 text-[#76b900] group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </Link>
                    )}
                  </div>

                  {project.slug && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="bg-[#76b900] hover:bg-[#5a8d00] text-[#000000] hover:text-[#ffffff] font-extrabold text-[13px] px-4 py-2.5 rounded-[8px] inline-flex items-center justify-center transition-all shadow-md hover:shadow-[#76b900]/20 active:scale-[0.98] group/cta w-full sm:w-auto"
                    >
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/cta:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
