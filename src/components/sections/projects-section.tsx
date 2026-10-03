"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { projectsData } from "@/lib/data";
import { RxExternalLink } from "react-icons/rx";
import { LuArrowUpRight } from "react-icons/lu";

type Project = (typeof projectsData)[0];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <section
      id="projects"
      className="w-full bg-[#000000] text-[#ffffff] py-[80px] px-6 md:px-12"
    >
      <div className="max-w-[1280px] mx-auto w-full">
        <Link
          href="/projects"
          className="hover:text-[#76b900] text-[#ffffff] transition-colors flex items-center gap-2 mb-16 cursor-pointer w-fit"
          aria-label="View all projects"
        >
          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-tight">
            Featured Projects
          </h2>
          <LuArrowUpRight className="h-8 w-8 md:h-10 md:w-10" />
        </Link>

        <div className="flex flex-col border-t border-[#5e5e5e]">
          {projectsToShow.map((project: Project, index: number) => {
            const projectNum = String(index + 1).padStart(2, "0");
            return (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-6 lg:gap-12 py-12 border-b border-[#5e5e5e] group"
              >
                {/* Numeric Callout */}
                <div className="lg:w-[120px] shrink-0">
                  <span className="text-[36px] font-bold text-[#76b900] leading-[1.25]">
                    {projectNum}
                  </span>
                </div>

                {/* Content Block */}
                <div className="flex-1 flex flex-col gap-4">
                  <h3 className="text-[24px] font-bold leading-[1.25] m-0 text-[#ffffff] group-hover:text-[#76b900] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[16px] font-normal leading-[1.5] text-[rgba(255,255,255,0.7)] m-0 max-w-[800px]">
                    {project.description}
                  </p>

                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="border border-[#5e5e5e] text-[#ffffff] text-[11px] font-bold uppercase tracking-wider px-[10px] py-[4px] rounded-[2px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions Block */}
                <div className="lg:w-[200px] shrink-0 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-stretch gap-3 mt-4 lg:mt-0 justify-start">
                  {project.slug && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="bg-[#76b900] hover:bg-[#5a8d00] text-black font-bold text-[14px] leading-[1.25] px-4 py-[10px] h-[40px] rounded-[4px] inline-flex items-center justify-center transition-colors w-full sm:w-auto lg:w-full shrink-0 shadow-sm"
                    >
                      Read More
                      <LuArrowUpRight className="ml-1.5 h-4 w-4 stroke-[2.5]" />
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#18181b] text-[#ffffff] border border-[#3f3f46] hover:border-[#76b900] hover:text-[#76b900] font-semibold text-[14px] leading-[1.25] px-4 py-[10px] h-[40px] rounded-[4px] inline-flex items-center justify-center transition-colors w-full sm:w-auto lg:w-full shrink-0"
                    >
                      <VscGithub className="mr-2 h-4 w-4" />
                      See Code
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#18181b] text-[#ffffff] border border-[#3f3f46] hover:border-[#76b900] hover:text-[#76b900] font-semibold text-[14px] leading-[1.25] px-4 py-[10px] h-[40px] rounded-[4px] inline-flex items-center justify-center transition-colors w-full sm:w-auto lg:w-full shrink-0"
                    >
                      <RxExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {projectsData.length > 4 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-transparent border border-[#ffffff] text-[#ffffff] hover:bg-[#1a1a1a] text-[16px] font-bold leading-[1.25] px-[24px] py-[11px] h-[44px] rounded-[2px] inline-flex items-center transition-colors"
            >
              {showAll ? (
                <>
                  Collapse View
                  <ChevronUp className="h-5 w-5 ml-2" aria-hidden="true" />
                </>
              ) : (
                <>
                  View All Projects
                  <ChevronDown className="h-5 w-5 ml-2" aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
