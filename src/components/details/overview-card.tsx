"use client";

import { useSaleData } from "@/hooks/use-sale-data";

const defaultOverviewRows = [
  { label: "Lorem ipsum", value: "Demo" },
  { label: "Lorem ipsum", value: "Demo" },
  { label: "Lorem ipsum", value: "Demo" },
];

export function OverviewCard() {
  const { data, isLoading } = useSaleData();

  const title = "Lorem ipsum dolor";
  const rows = data?.overviewRows ?? defaultOverviewRows;

  return (
    <div className="hud-card p-6 rounded-sm shadow-[0_0_25px_rgba(255,70,0,0.05)] bg-[#0A0A0A]/90 border border-zinc-800/80">
      {/* Card Title */}
      <h3 className="text-sm font-bold text-white tracking-wide mb-4">
        {title}
      </h3>

      {/* 3 Detail Rows */}
      <div className={`divide-y divide-zinc-900/90 transition-opacity ${isLoading ? "animate-pulse opacity-70" : "opacity-100"}`}>
        {rows.map((row, idx) => (
          <div key={`${row.label}-${idx}`} className="py-3.5 flex items-center justify-between text-xs">
            <span className="text-zinc-400">{row.label}</span>
            <span className="font-mono text-zinc-300 font-medium hover:text-[#FF4600] transition-colors cursor-pointer">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
