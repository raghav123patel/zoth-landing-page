"use client";

import type { ActionPanelData } from "@/types/sale";

interface ModeAActionHubProps {
  data?: ActionPanelData;
  isLoading?: boolean;
}

export function ModeAActionHub({ data, isLoading }: ModeAActionHubProps) {
  const badge = data?.badge ?? "LOREM IPSUM";
  const description = data?.description ?? "Lorem ipsum dolor sit amet consectetur adipiscing";
  const primaryCta = data?.primaryCta ?? "Lorem ipsum";
  const secondaryCta = data?.secondaryCta ?? "Lorem ipsum";
  const disclaimer = data?.disclaimer ?? "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do";

  return (
    <div>
      {/* Panel Header */}
      <div className={`mb-6 ${isLoading ? "animate-pulse opacity-70" : ""}`}>
        <h2 className="text-xs font-mono font-bold tracking-wider text-zinc-200 uppercase mb-1.5">
          {badge}
        </h2>
        <p className="text-xs text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Primary CTA */}
      <button
        type="button"
        className="w-full relative p-5 bg-[#FF4600] hover:bg-[#E03E00] text-center rounded-sm transition-all shadow-[0_0_20px_rgba(255,70,0,0.28)] cursor-pointer group mb-4 focus:outline-none focus:ring-1 focus:ring-white"
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

      {/* Secondary CTA */}
      <button
        type="button"
        className="w-full relative p-5 bg-[#0C0C0C] hover:bg-[#141414] border border-[#FF4600]/40 hover:border-[#FF4600] text-center rounded-sm transition-all cursor-pointer group mb-5 focus:outline-none focus:ring-1 focus:ring-[#FF4600]"
      >
        {/* Corner Ticks */}
        <span className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#FF4600] pointer-events-none" />
        <span className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#FF4600] pointer-events-none" />
        <span className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#FF4600] pointer-events-none" />
        <span className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#FF4600] pointer-events-none" />

        <span className="text-sm font-bold tracking-wider text-zinc-200 group-hover:text-white uppercase font-mono">
          {secondaryCta}
        </span>
      </button>

      {/* Footnote Disclaimer */}
      <p className="text-[11px] text-zinc-500 text-center leading-normal">
        {disclaimer}
      </p>
    </div>
  );
}
