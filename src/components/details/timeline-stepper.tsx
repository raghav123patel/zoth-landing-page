"use client";

import { useSaleData } from "@/hooks/use-sale-data";
import type { TimelineMilestone } from "@/types/sale";

const defaultMilestones: TimelineMilestone[] = [
  {
    id: "step-1",
    stepNumber: 1,
    label: "Demo",
    title: "Lorem ipsum",
    dateOrValue: "[XX]",
    status: "active",
  },
  {
    id: "step-2",
    stepNumber: 2,
    label: "DEMO",
    title: "Lorem ipsum",
    dateOrValue: "",
    status: "upcoming",
  },
  {
    id: "step-3",
    stepNumber: 3,
    label: "Demo",
    title: "Lorem ipsum",
    dateOrValue: "",
    status: "upcoming",
  },
  {
    id: "step-4",
    stepNumber: 4,
    label: "DEMO",
    title: "Lorem ipsum",
    dateOrValue: "",
    status: "upcoming",
  },
];

export function TimelineStepper() {
  const { data, isLoading } = useSaleData();

  const milestones = data?.timeline ?? defaultMilestones;

  return (
    <div className="w-full mb-10 overflow-x-auto no-scrollbar pb-2">
      <div className="min-w-[540px] relative">
        {/* Horizontal Connecting Line */}
        <div 
          className="absolute top-2 left-6 right-6 h-[1px] bg-zinc-800 -z-0"
          aria-hidden="true"
        />

        {/* 4 Milestone Steps */}
        <div className={`grid grid-cols-4 relative z-10 transition-opacity ${isLoading ? "animate-pulse opacity-70" : "opacity-100"}`}>
          {milestones.map((milestone, idx) => {
            const isActive = milestone.status === "active";
            const isLast = idx === milestones.length - 1;

            return (
              <div 
                key={milestone.id} 
                className={`flex flex-col items-start ${isLast ? "" : "pr-4"}`}
              >
                {/* Milestone Node Dot */}
                <div 
                  className={`w-4 h-4 rounded-full border-2 bg-[#050505] flex items-center justify-center mb-3 transition-colors ${
                    isActive ? "border-[#FF4600]" : "border-zinc-700"
                  }`}
                >
                  <span 
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-[#FF4600]" : "bg-transparent"
                    }`} 
                  />
                </div>

                {/* Milestone Label */}
                <span 
                  className={`text-[11px] font-mono uppercase mb-0.5 ${
                    isActive ? "text-[#FF4600] font-semibold" : "text-zinc-500"
                  }`}
                >
                  {milestone.label}
                </span>

                {/* Milestone Title */}
                <span 
                  className={`text-sm mb-0.5 ${
                    isActive ? "font-bold text-white" : "font-medium text-zinc-400"
                  }`}
                >
                  {milestone.title}
                </span>

                {/* Optional Sub-value / Date */}
                {milestone.dateOrValue ? (
                  <span className="text-xs font-mono text-zinc-500">
                    {milestone.dateOrValue}
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
