import React from "react";

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

interface ProjectMetricsProps {
  metrics: MetricItem[];
}

export function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="my-10 w-full">
      <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-6 flex items-center gap-2">
        <span className="w-2 h-6 bg-[#76b900] rounded-[1px] inline-block"></span>
        Empirical Performance Metrics & Derivation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="flex flex-col p-6 bg-[#000000] text-[#ffffff] rounded-[4px] border border-[#333333] shadow-md hover:border-[#76b900] transition-colors group"
          >
            <div className="text-[32px] md:text-[40px] font-extrabold text-[#76b900] leading-none mb-2 tracking-tight group-hover:scale-105 transition-transform origin-left">
              {metric.value}
            </div>
            <div className="text-[16px] font-bold text-[#ffffff] mb-2">
              {metric.label}
            </div>
            <p className="text-[13.5px] leading-relaxed text-[rgba(255,255,255,0.7)] m-0">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
