import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { RxExternalLink } from "react-icons/rx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { MermaidDiagram } from "@/components/ui/mermaid-diagram";
import matter from "gray-matter";
import "highlight.js/styles/github-dark.css";

import { buildProjectMetadata } from "@/lib/site-metadata";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const projectsDir = path.join(process.cwd(), "src/content/projects");
  try {
    const files = fs.readdirSync(projectsDir);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => ({
        slug: file.replace(".mdx", ""),
      }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const filePath = path.join(
    process.cwd(),
    "src/content/projects",
    `${slug}.mdx`
  );
  let fileContent = "";
  try {
    fileContent = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    return {
      title: "Project Not Found",
    };
  }

  const { data: frontmatter } = matter(fileContent);

  return buildProjectMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    slug: slug,
    tech: frontmatter.tech,
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
      className="text-[24px] font-bold mt-12 mb-6 text-[#1a1a1a] tracking-tight border-b border-[#cccccc] pb-2"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3 className="text-[20px] font-bold mt-8 mb-4 text-[#1a1a1a]" {...props} />
  ),
  p: (props: any) => (
    <p className="text-[16px] leading-[1.67] text-[#1a1a1a] mb-6" {...props} />
  ),
  ul: (props: any) => (
    <ul
      className="list-disc pl-6 mb-6 text-[16px] leading-[1.67] text-[#1a1a1a]"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal pl-6 mb-6 text-[16px] leading-[1.67] text-[#1a1a1a]"
      {...props}
    />
  ),
  li: (props: any) => <li className="mb-2" {...props} />,
  a: (props: any) => (
    <a
      className="text-[#0046a4] hover:text-[#002f6c] underline transition-colors"
      {...props}
    />
  ),
  strong: (props: any) => (
    <strong className="font-bold text-[#1a1a1a]" {...props} />
  ),
  pre: (props: any) => (
    <pre
      className="bg-[#1a1a1a] text-[#ffffff] p-4 rounded-[2px] overflow-x-auto mb-6 text-[14px]"
      {...props}
    />
  ),
  code: ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    if (!inline && match && match[1] === "mermaid") {
      const chartCode = extractText(children).replace(/\n$/, "");
      return <MermaidDiagram chart={chartCode} />;
    }
    return !inline ? (
      <code className={className} {...props}>
        {children}
      </code>
    ) : (
      <code
        className="bg-[#f0f0f0] text-[#1a1a1a] px-1 py-0.5 rounded-[2px] text-[14px]"
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
  params: { slug: string };
}) {
  // Fix for Next.js 15: params is now a Promise
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const filePath = path.join(
    process.cwd(),
    "src/content/projects",
    `${slug}.mdx`,
  );
  let fileContent = "";
  try {
    fileContent = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    notFound();
  }

  const { data: frontmatter, content: mdxSource } = matter(fileContent);

  const project = {
    title: frontmatter.title,
    description: frontmatter.description,
    github: frontmatter.github,
    live: frontmatter.live,
    tech: frontmatter.tech || [],
  };

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

          <h1 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-tight mb-6">
            {project.title}
          </h1>

          <p className="text-[18px] leading-[1.5] text-[rgba(255,255,255,0.7)] mb-8">
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
          <div className="flex flex-wrap gap-2 mb-12 p-6 bg-[#f5f5f5] border border-[#cccccc] rounded-[2px]">
            <span className="font-bold text-[#1a1a1a] mr-2">Tech Stack:</span>
            {project.tech.map((tech: string, index: number) => (
              <span
                key={index}
                className="text-[#1a1a1a] text-[13px] font-bold bg-[#ffffff] border border-[#cccccc] px-2 py-1 rounded-[2px]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <article className="prose prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={components}
          >
            {mdxSource}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
