import { ArrowLeft, ArrowRight } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { RxExternalLink } from "react-icons/rx";
import Link from "next/link";
import { projectsData } from "@/lib/data";

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff] font-sans">
      <div className="max-w-[1280px] mx-auto w-full px-6 py-[80px]">
        {/* Header */}
        <Link
          href="/"
          className="text-[#ffffff] hover:text-[#76b900] text-[15px] font-bold inline-flex items-center transition-colors mb-12"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>

        <div className="mb-16">
          <h1 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-tight mb-4 text-[#ffffff] m-0">
            All Projects
          </h1>
          <p className="text-[18px] leading-[1.5] text-[rgba(255,255,255,0.7)] m-0 max-w-[800px]">
            A complete collection of my work spanning AI/ML products, backend systems, and full-stack web applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projectsData.map((project, index) => {
            const projectNum = String(index + 1).padStart(2, '0');
            return (
              <div 
                key={index}
                className="flex flex-col border border-[#5e5e5e] rounded-[2px] bg-[#1a1a1a] hover:border-[#76b900] transition-colors group p-6 md:p-8 relative"
              >
                {/* Numeric Callout */}
                <div className="absolute top-6 right-6 text-[24px] font-bold text-[#5e5e5e] group-hover:text-[#76b900] transition-colors leading-[1]">
                  {projectNum}
                </div>

                <div className="mb-6 pr-12">
                  <h3 className="text-[24px] font-bold leading-[1.25] m-0 text-[#ffffff] mb-3 group-hover:text-[#76b900] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[16px] font-normal leading-[1.67] text-[rgba(255,255,255,0.7)] m-0">
                    {project.description}
                  </p>
                </div>

                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#000000] border border-[#5e5e5e] text-[#ffffff] text-[11px] font-bold uppercase tracking-wider px-[10px] py-[4px] rounded-[2px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-6 border-t border-[#5e5e5e] pt-6">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ffffff] hover:text-[#76b900] text-[15px] font-bold inline-flex items-center transition-colors"
                    >
                      <VscGithub className="mr-2 h-5 w-5" />
                      Source
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ffffff] hover:text-[#76b900] text-[15px] font-bold inline-flex items-center transition-colors"
                    >
                      <RxExternalLink className="mr-2 h-5 w-5" />
                      Live
                    </Link>
                  )}
                  {project.slug && (
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="ml-auto text-[#76b900] hover:text-[#5a8d00] font-bold text-[15px] inline-flex items-center transition-colors"
                    >
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
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
