import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { RxExternalLink } from "react-icons/rx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import { MermaidDiagram } from "@/components/ui/mermaid-diagram";
import matter from "gray-matter";
import "highlight.js/styles/github-dark.css";
import "katex/dist/katex.min.css";

import { buildProjectMetadata } from "@/lib/site-metadata";
import type { Metadata } from "next";
import { projectsData } from "@/lib/data";
import { ProjectMetrics } from "@/components/project-metrics";
import { ZoomableImage } from "@/components/ui/zoomable-image";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const project = projectsData.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return buildProjectMetadata({
    title: project.title,
    description: project.description,
    slug: slug,
    tech: project.tech,
  });
}

const extractText = (node: any): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return extractText(node.props.children);
  }
  return "";
};

const components = {
  h2: (props: any) => (
    <h2
      className="text-[20px] sm:text-[24px] md:text-[28px] font-bold mt-10 mb-5 text-[#1a1a1a] tracking-tight border-b border-[#e5e5e5] pb-3"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3 className="text-[17px] sm:text-[19px] md:text-[20px] font-bold mt-8 mb-4 text-[#1a1a1a]" {...props} />
  ),
  p: (props: any) => (
    <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#333333] mb-6" {...props} />
  ),
  ul: (props: any) => (
    <ul
      className="list-disc pl-6 mb-6 text-[16px] leading-[1.7] text-[#333333] space-y-2"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal pl-6 mb-6 text-[16px] leading-[1.7] text-[#333333] space-y-2"
      {...props}
    />
  ),
  li: (props: any) => <li className="mb-1" {...props} />,
  a: (props: any) => (
    <a
      className="text-[#0046a4] hover:text-[#002f6c] font-semibold underline decoration-[#0046a4]/30 hover:decoration-[#0046a4] transition-all"
      {...props}
    />
  ),
  strong: (props: any) => (
    <strong className="font-bold text-[#1a1a1a]" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="my-6 border-l-4 border-[#76b900] bg-[#f8faf6] px-5 py-3.5 rounded-r-[4px] text-[#222222] italic leading-[1.6] [&_p]:m-0 [&_p]:mb-0 [&_p]:p-0"
      {...props}
    />
  ),
  img: (props: any) => <ZoomableImage src={props.src} alt={props.alt} />,
  table: (props: any) => (
    <div className="my-8 overflow-x-auto rounded-[8px] border border-[#e0e0e0] shadow-sm">
      <table
        className="w-full text-left text-[14px] border-collapse bg-[#ffffff]"
        {...props}
      />
    </div>
  ),
  thead: (props: any) => (
    <thead
      className="bg-[#1a1a1a] text-[#ffffff] font-bold uppercase tracking-wider text-[12px]"
      {...props}
    />
  ),
  tbody: (props: any) => (
    <tbody className="divide-y divide-[#eeeeee]" {...props} />
  ),
  tr: (props: any) => (
    <tr className="hover:bg-[#f9f9f9] transition-colors" {...props} />
  ),
  th: (props: any) => (
    <th
      className="px-5 py-3.5 text-[#ffffff] font-bold border-b border-[#333333]"
      {...props}
    />
  ),
  td: (props: any) => (
    <td className="px-5 py-4 text-[#333333] leading-relaxed" {...props} />
  ),
  pre: (props: any) => (
    <pre
      className="bg-[#1a1a1a] text-[#ffffff] p-5 rounded-[6px] overflow-x-auto mb-6 text-[14px] border border-[#333333] shadow-md"
      {...props}
    />
  ),
  code: ({ node, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    const isBlock =
      match ||
      node?.parent?.tagName === "pre" ||
      String(children).includes("\n");

    if (match && match[1] === "mermaid") {
      const chartCode = extractText(children).replace(/\n$/, "");
      return <MermaidDiagram chart={chartCode} />;
    }

    if (isBlock) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    return (
      <code
        className="bg-[#f0f4eb] text-[#2b4c03] font-sans font-semibold text-[13.5px] px-2 py-0.5 rounded-[3px] border border-[#d2e8b8] inline-block my-0.5"
        {...props}
      >
        {children}
      </code>
    );
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Fix for Next.js 15: params is now a Promise
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const project = projectsData.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  const filePath = path.join(
    process.cwd(),
    "src/content/projects",
    `${slug}.mdx`,
  );
  let fileContent = "";
  try {
    fileContent = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    // MDX file is optional now, just catch error
  }

  const { content: mdxSource, data: frontmatterData } = matter(fileContent);

  return (
    <div className="w-full bg-[#ffffff] min-h-screen text-[#1a1a1a]">
      {/* Hero Header */}
      <header className="w-full bg-[#000000] text-[#ffffff] py-[80px] px-6 md:px-12 border-b border-[#5e5e5e]">
        <div className="max-w-[800px] mx-auto w-full flex flex-col items-start">
          <Link
            href="/#projects"
            className="text-[#ffffff] hover:text-[#76b900] text-[15px] font-bold inline-flex items-center transition-colors mb-12"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <h1 className="text-[28px] sm:text-[38px] md:text-[48px] font-bold leading-[1.2] tracking-tight mb-6">
            {project.title}
          </h1>

          <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[1.6] text-[rgba(255,255,255,0.75)] mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a] text-[#ffffff] hover:bg-[#333333] border border-[#5e5e5e] text-[15px] font-bold px-[24px] py-[8px] rounded-[2px] transition-colors inline-flex items-center"
              >
                <VscGithub className="mr-2 h-5 w-5" />
                See Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#76b900] text-[#ffffff] hover:bg-[#5a8d00] text-[15px] font-bold px-[24px] py-[8px] rounded-[2px] transition-colors inline-flex items-center"
              >
                <RxExternalLink className="mr-2 h-5 w-5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Content Body */}
      <div className="max-w-[800px] mx-auto w-full px-6 py-[80px]">
        {/* Tech Stack Banner */}
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10 p-6 bg-[#f8f9fa] border border-[#e2e8f0] rounded-[4px] shadow-sm">
            <span className="font-bold text-[#1a1a1a] mr-2">Tech Stack:</span>
            {project.tech.map((tech: string, index: number) => (
              <span
                key={index}
                className="text-[#1a1a1a] text-[13px] font-bold bg-[#ffffff] border border-[#cbd5e1] px-2.5 py-1 rounded-[2px]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Stats Component */}
        {frontmatterData && frontmatterData.stats && (
          <ProjectMetrics metrics={frontmatterData.stats} />
        )}

        <article className="prose prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeHighlight, rehypeKatex]}
            components={components}
          >
            {mdxSource}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
