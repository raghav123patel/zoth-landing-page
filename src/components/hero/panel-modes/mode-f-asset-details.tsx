"use client";

import type { AssetDetailsData } from "@/types/sale";

interface ModeFAssetDetailsProps {
  assetDetails?: AssetDetailsData;
  isLoading?: boolean;
}

const defaultAssetDetails: AssetDetailsData = {
  title: "LOREM IPSUM",
  metrics: [
    { label: "Lorem ipsum", value: "[XX]" },
    { label: "Lorem ipsum", value: "[XX]" },
    { label: "Lorem ipsum", value: "[XX]" },
    { label: "Lorem ipsum", value: "[XX]" },
    { label: "Lorem ipsum", value: "[XX]" },
    { label: "Lorem ipsum", value: "[XX]" },
  ],
};

export function ModeFAssetDetails({
  assetDetails,
  isLoading,
}: ModeFAssetDetailsProps) {
  const data = assetDetails ?? defaultAssetDetails;

  return (
    <div>
      {/* Media Canvas Placeholder Frame */}
      <div
        className={`aspect-[4/3] sm:aspect-square max-h-56 w-full bg-[#121212] border border-zinc-800/80 rounded-sm mb-5 flex flex-col items-center justify-center relative overflow-hidden group ${
          isLoading ? "animate-pulse opacity-70" : ""
        }`}
        aria-label="Asset Media Canvas Preview"
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20 pointer-events-none" />

        {/* Crosshair indicator in center */}
        <div className="relative z-10 flex flex-col items-center text-zinc-600">
          <div className="w-8 h-8 rounded-full border border-zinc-700/60 flex items-center justify-center mb-1">
            <span className="text-[10px] font-mono">[XX]</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
            Media Canvas
          </span>
        </div>

        {/* Corner Ticks */}
        <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-zinc-700 pointer-events-none" />
        <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-zinc-700 pointer-events-none" />
        <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-zinc-700 pointer-events-none" />
        <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-zinc-700 pointer-events-none" />
      </div>

      {/* Centered Heading */}
      <div className="text-center mb-5">
        <h2 className="text-xs font-mono font-bold tracking-wider text-zinc-200 uppercase">
          {data.title}
        </h2>
      </div>

      {/* 6 Key-Value Detail Rows */}
      <div className="space-y-2 mb-6">
        {data.metrics.map((row, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-1.5 text-xs font-mono border-b border-zinc-900 last:border-b-0"
          >
            <span className="text-zinc-400">{row.label}</span>
            <span className="text-zinc-200 font-semibold">{row.value}</span>
          </div>
        ))}
      </div>

      {/* Dual Bottom CTAs */}
      <div className="grid grid-cols-2 gap-3">
        {/* Primary Solid Orange Button */}
        <button
          type="button"
          className="w-full relative py-3.5 px-4 bg-[#FF4600] hover:bg-[#E03E00] text-center rounded-sm transition-all shadow-[0_0_15px_rgba(255,70,0,0.2)] focus:outline-none focus:ring-1 focus:ring-white group cursor-pointer"
        >
          {/* Corner Ticks */}
          <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-white/60 pointer-events-none" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-white/60 pointer-events-none" />
          <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-white/60 pointer-events-none" />
          <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-white/60 pointer-events-none" />

          <span className="text-xs font-bold tracking-wider text-white uppercase font-mono">
            Lorem ipsum
          </span>
        </button>

        {/* Secondary Hollow Dark Button */}
        <button
          type="button"
          className="w-full relative py-3.5 px-4 bg-[#0C0C0C] hover:bg-[#141414] border border-[#FF4600]/40 hover:border-[#FF4600] text-center rounded-sm transition-all focus:outline-none focus:ring-1 focus:ring-[#FF4600] group cursor-pointer"
        >
          {/* Corner Ticks */}
          <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#FF4600] pointer-events-none" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#FF4600] pointer-events-none" />
          <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-[#FF4600] pointer-events-none" />
          <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#FF4600] pointer-events-none" />

          <span className="text-xs font-bold tracking-wider text-zinc-200 group-hover:text-white uppercase font-mono">
            Lorem ipsum
          </span>
        </button>
      </div>
    </div>
  );
}
