"use client";

import type { PoolMatrixColumn } from "@/types/sale";

interface ModeD1PoolMatrixProps {
  columns?: [PoolMatrixColumn, PoolMatrixColumn];
  isLoading?: boolean;
}

const defaultColumn: PoolMatrixColumn = {
  id: "default-col",
  headerLeft: "[XX]",
  headerRight: "[XX]",
  metrics: [
    { label: "Lorem ipsum", value: "Lorem ipsum" },
    { label: "Lorem ipsum", value: "[XX]" },
    { label: "Lorem ipsum", value: "[XX]" },
    { label: "Lorem ipsum", value: "[XX]" },
    { label: "Lorem ipsum dolor", value: "[XX]" },
    { label: "Lorem ipsum", value: "[XX]" },
    { label: "Demo", value: "[XX]" },
    { label: "Lorem ipsum", value: "[XX]" },
  ],
  ctaText: "[XX]",
};

export function ModeD1PoolMatrix({ columns, isLoading }: ModeD1PoolMatrixProps) {
  const col1 = columns?.[0] ?? defaultColumn;
  const col2 = columns?.[1] ?? defaultColumn;

  return (
    <div>
      {/* Header */}
      <div className={`mb-4 ${isLoading ? "animate-pulse opacity-70" : ""}`}>
        <h2 className="text-xs font-mono font-bold tracking-wider text-zinc-200 uppercase mb-1">
          LOREM IPSUM
        </h2>
        <p className="text-[11px] text-zinc-400">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
        </p>
      </div>

      {/* Side-by-Side Matrix Columns */}
      <div className="grid grid-cols-2 gap-3 font-mono">
        {/* Column 1 */}
        <div className="bg-[#0C0C0C] border border-zinc-900 p-3 rounded-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-xs font-bold text-white pb-2.5 mb-2 border-b border-zinc-900">
              <span>{col1.headerLeft}</span>
              <span className="text-[#FF4600]">{col1.headerRight}</span>
            </div>
            <div className="space-y-1.5 text-[10px]">
              {col1.metrics.map((m, idx) => (
                <div key={idx} className="flex justify-between py-0.5 border-b border-zinc-900/60 last:border-b-0">
                  <span className="text-zinc-500 font-sans">{m.label}</span>
                  <span className="text-zinc-300 font-medium">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="w-full mt-3 py-2 bg-[#FF4600] hover:bg-[#E03E00] text-white text-xs font-bold rounded-sm uppercase tracking-wider transition-all"
          >
            {col1.ctaText}
          </button>
        </div>

        {/* Column 2 */}
        <div className="bg-[#0C0C0C] border border-zinc-900 p-3 rounded-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-xs font-bold text-white pb-2.5 mb-2 border-b border-zinc-900">
              <span>{col2.headerLeft}</span>
              <span className="text-[#FF4600]">{col2.headerRight}</span>
            </div>
            <div className="space-y-1.5 text-[10px]">
              {col2.metrics.map((m, idx) => (
                <div key={idx} className="flex justify-between py-0.5 border-b border-zinc-900/60 last:border-b-0">
                  <span className="text-zinc-500 font-sans">{m.label}</span>
                  <span className="text-zinc-300 font-medium">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="w-full mt-3 py-2 bg-[#FF4600] hover:bg-[#E03E00] text-white text-xs font-bold rounded-sm uppercase tracking-wider transition-all"
          >
            {col2.ctaText}
          </button>
        </div>
      </div>
    </div>
  );
}
