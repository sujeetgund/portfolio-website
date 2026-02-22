"use client";

import mermaid from "mermaid";
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
    if (!isMermaidInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "neutral",
      });
      isMermaidInitialized = true;
    }

    mermaid
      .render(renderId, chart)
      .then(({ svg, bindFunctions }) => {
        if (!containerRef.current) {
          return;
        }
        containerRef.current.innerHTML = svg;
        bindFunctions?.(containerRef.current);
        setRenderError(null);
      })
      .catch((error: unknown) => {
        const message =
          error instanceof Error ? error.message : "Unable to render diagram.";
        setRenderError(message);
      });
  }, [chart, renderId]);

  if (renderError) {
    return (
      <div className={className}>
        <p className="text-sm text-destructive mb-2">{renderError}</p>
        <pre className="text-xs overflow-x-auto">{chart}</pre>
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
