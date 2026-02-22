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
  const [isRequested, setIsRequested] = useState(false);
  const renderId = useMemo(
    () => `mermaid-${Math.random().toString(36).slice(2, 10)}`,
    [],
  );

  useEffect(() => {
    if (!isRequested) {
      return;
    }

    let isActive = true;

    const loadAndRender = async () => {
      try {
        const mermaidModule = await import("mermaid");
        const mermaid = mermaidModule.default;

        if (!isMermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            securityLevel: "strict",
            theme: "neutral",
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
  }, [chart, renderId, isRequested]);

  if (renderError) {
    return (
      <div className={className}>
        <p className="text-sm text-destructive mb-2">{renderError}</p>
        <pre className="text-xs overflow-x-auto">{chart}</pre>
      </div>
    );
  }

  if (!isRequested) {
    return (
      <div className={className}>
        <button
          type="button"
          onClick={() => setIsRequested(true)}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
        >
          Load Architecture Diagram
        </button>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      aria-label="Mermaid diagram"
    />
  );
}
