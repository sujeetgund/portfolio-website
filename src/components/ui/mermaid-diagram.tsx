"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type MermaidDiagramProps = {
  chart: string;
  className?: string;
};

let isMermaidInitialized = false;

export function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [renderError, setRenderError] = useState<string | null>(null);
  const renderId = useMemo(
    () => `mermaid-${Math.random().toString(36).slice(2, 10)}`,
    [],
  );

  useEffect(() => {
    let isActive = true;

    const loadAndRender = async () => {
      try {
        const mermaidModule = await import("mermaid");
        const mermaid = mermaidModule.default;

        if (!isMermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            securityLevel: "loose",
            theme: "base",
            themeVariables: {
              darkMode: true,
              background: "#090d16",
              primaryColor: "#131b2e",
              primaryTextColor: "#ffffff",
              primaryBorderColor: "#76b900",
              lineColor: "#76b900",
              secondaryColor: "#1a233a",
              secondaryTextColor: "#ffffff",
              secondaryBorderColor: "#38d39f",
              tertiaryColor: "#0f172a",
              tertiaryTextColor: "#ffffff",
              tertiaryBorderColor: "#475569",
              nodeBorder: "#76b900",
              clusterBkg: "#0c1322",
              clusterBorder: "#334155",
              defaultLinkColor: "#76b900",
              titleColor: "#ffffff",
              edgeLabelBackground: "#111827",
              actorBorder: "#76b900",
              actorBkg: "#131b2e",
              actorTextColor: "#ffffff",
              actorLineColor: "#76b900",
              fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif",
              fontSize: "13.5px",
            },
          });
          isMermaidInitialized = true;
        }

        const { svg, bindFunctions } = await mermaid.render(renderId, chart);

        if (!isActive || !containerRef.current) {
          return;
        }

        containerRef.current.innerHTML = svg;
        bindFunctions?.(containerRef.current);
        setRenderError(null);
      } catch (error: unknown) {
        const message =
          error instanceof Error ? error.message : "Unable to render diagram.";
        if (isActive) {
          setRenderError(message);
        }
      }
    };

    loadAndRender();

    return () => {
      isActive = false;
    };
  }, [chart, renderId]);

  if (renderError) {
    return (
      <div className="my-8 p-4 rounded-[6px] bg-[#1a1a1a] border border-[#d03238]">
        <p className="text-xs text-[#ff6b6b] mb-2 font-mono">{renderError}</p>
        <pre className="text-xs overflow-x-auto text-[rgba(255,255,255,0.7)] p-2 bg-[#000000] rounded">
          {chart}
        </pre>
      </div>
    );
  }

  return (
    <div className={`my-8 overflow-hidden rounded-[8px] border border-[#1e293b] bg-[#090d16] p-6 md:p-8 ${className || ""}`}>
      {/* SVG Container */}
      <div
        ref={containerRef}
        className="overflow-x-auto flex justify-center items-center [&_svg]:max-w-full [&_svg]:h-auto [&_svg]:mx-auto"
        aria-label="System Architecture Diagram"
      />
    </div>
  );
}
