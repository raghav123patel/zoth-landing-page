"use client";

import type { StackedTierItem } from "@/types/sale";

interface ModeD2StackedTiersProps {
  tiers?: [StackedTierItem, StackedTierItem];
  isLoading?: boolean;
}

const defaultTiers: [StackedTierItem, StackedTierItem] = [
  {
    id: "tier-1",
    headerLeft: "[XX]",
    headerRight: "[XX]",
    subLabelLeft: "DEMO",
    valueLeft: "[XX]",
    subValueLeft: "DEMO",
    subLabelRight: "DEMO",
    valueRight: "[XX]",
    subValueRight: "Demo",
    ctaText: "Lorem ipsum",
  },
  {
    id: "tier-2",
    headerLeft: "[XX]",
    headerRight: "[XX]",
    subLabelLeft: "DEMO",
    valueLeft: "[XX]",
    subValueLeft: "DEMO",
    subLabelRight: "DEMO",
    valueRight: "[XX]",
    subValueRight: "Demo",
    ctaText: "Lorem ipsum",
  },
];

export function ModeD2StackedTiers({ tiers, isLoading }: ModeD2StackedTiersProps) {
  const tierList = tiers ?? defaultTiers;

  return (
    <div>
      {/* Header */}
      <div className={`mb-4 ${isLoading ? "animate-pulse opacity-70" : ""}`}>
        <h2 className="text-xs font-mono font-bold tracking-wider text-zinc-200 uppercase">
          LOREM IPSUM
        </h2>
      </div>

      {/* Stacked Tier Cards */}
      <div className="space-y-4 font-mono">
        {tierList.map((tier) => (
          <div
            key={tier.id}
            className="bg-[#0C0C0C] border border-zinc-900 p-4 rounded-sm"
          >
            {/* Top Stat Row */}
            <div className="flex justify-between items-center text-xs text-zinc-500 mb-2">
              <span>{tier.headerLeft}</span>
              <span>{tier.headerRight}</span>
            </div>

            {/* Values Row */}
            <div className="grid grid-cols-2 gap-4 py-2 border-t border-b border-zinc-900/80 mb-3">
              <div>
                <span className="text-[10px] text-zinc-500 block uppercase">{tier.subLabelLeft}</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-bold text-white tracking-tight">{tier.valueLeft}</span>
                  <span className="text-[10px] text-zinc-500 uppercase">{tier.subValueLeft}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-zinc-500 block uppercase">{tier.subLabelRight}</span>
                <div className="flex items-baseline justify-end gap-1.5">
                  <span className="text-xl font-bold text-[#FF4600] tracking-tight">{tier.valueRight}</span>
                  <span className="text-[10px] text-zinc-500 uppercase">{tier.subValueRight}</span>
                </div>
              </div>
            </div>

            {/* Action CTA with Corner Ticks */}
            <button
              type="button"
              className="w-full relative py-3 bg-[#FF4600] hover:bg-[#E03E00] text-center rounded-sm transition-all shadow-[0_0_15px_rgba(255,70,0,0.25)] cursor-pointer group focus:outline-none focus:ring-1 focus:ring-white"
            >
              <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-white/60 pointer-events-none" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-white/60 pointer-events-none" />
              <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-white/60 pointer-events-none" />
              <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-white/60 pointer-events-none" />

              <span className="text-xs font-bold tracking-wider text-white uppercase">
                {tier.ctaText}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
