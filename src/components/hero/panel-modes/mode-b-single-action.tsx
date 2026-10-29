"use client";

import type { ActionPanelData } from "@/types/sale";

interface ModeBSingleActionProps {
  data?: ActionPanelData;
  isLoading?: boolean;
}

export function ModeBSingleAction({ data, isLoading }: ModeBSingleActionProps) {
  const badge = data?.badge ?? "LOREM IPSUM";
  const primaryCta = data?.primaryCta ?? "Lorem ipsum";

  return (
    <div>
      {/* Status Badge */}
      <div className={`mb-3 flex items-center gap-2 ${isLoading ? "animate-pulse opacity-70" : ""}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4600] animate-pulse" />
        <span className="text-[11px] font-mono font-bold tracking-wider text-[#FF4600] uppercase">
          {badge}
        </span>
      </div>

      {/* Title & Description */}
      <div className={`mb-6 ${isLoading ? "animate-pulse opacity-70" : ""}`}>
        <h2 className="text-sm font-mono font-bold tracking-wider text-white uppercase mb-2">
          {badge}
        </h2>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut
        </p>
      </div>

      {/* Primary CTA Card */}
      <button
        type="button"
        className="w-full relative p-5 bg-[#FF4600] hover:bg-[#E03E00] text-center rounded-sm transition-all shadow-[0_0_20px_rgba(255,70,0,0.28)] cursor-pointer group mb-2 focus:outline-none focus:ring-1 focus:ring-white"
      >
        {/* Corner Ticks */}
        <span className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white/60 pointer-events-none" />
        <span className="absolute top-1 right-1 w-2 h-2 border-t border-r border-white/60 pointer-events-none" />
        <span className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-white/60 pointer-events-none" />
        <span className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white/60 pointer-events-none" />

        <span className="text-sm font-bold tracking-wider text-white uppercase font-mono">
          {primaryCta}
        </span>
      </button>
    </div>
  );
}
