"use client";

import { useSaleData } from "@/hooks/use-sale-data";
import { CountdownCard } from "./countdown-card";
import { RefreshCw } from "lucide-react";

export function HeroMetricsCard() {
  const { data, isLoading, isError, refetch, isFetching } = useSaleData();

  const primaryLabel = data?.primaryMetric.label ?? "Demo";
  const primaryValue = data?.primaryMetric.value ?? "[XX]";
  const secondaryLabel = data?.secondaryMetric.label ?? "Lorem ipsum";
  const secondaryValue = data?.secondaryMetric.value ?? "[XX]";

  const progressPercentage = data?.progressPercentage ?? 65;
  const progressMin = data?.progressMinLabel ?? "[XX]";
  const progressMax = data?.progressMaxLabel ?? "[XX]";

  const subTier1 = data?.subTiers[0] ?? {
    label: "[XX]",
    value: "[XX]",
    percentage: 60,
    minLabel: "[XX]",
    maxLabel: "[XX]",
  };

  const subTier2 = data?.subTiers[1] ?? {
    label: "[XX]",
    value: "[XX]",
    percentage: 75,
    minLabel: "[XX]",
    maxLabel: "[XX]",
  };

  const tertiaryLabel = data?.tertiaryMetric.label ?? "Demo";
  const tertiaryValue = data?.tertiaryMetric.value ?? "[XX]";

  return (
    <div className="hud-card p-6 sm:p-7 rounded-sm shadow-[0_0_25px_rgba(255,70,0,0.05)]">
      {/* Error State Banner */}
      {isError && (
        <div 
          role="alert"
          className="mb-4 p-3 bg-red-950/40 border border-red-900/80 rounded-sm flex items-center justify-between text-xs font-mono text-red-300"
        >
          <span>Error loading live metrics</span>
          <button
            type="button"
            onClick={() => refetch()}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-900/60 hover:bg-red-800 text-white rounded-sm text-[10px] uppercase font-bold transition-colors"
          >
            <RefreshCw className={`w-3 h-3 ${isFetching ? "animate-spin" : ""}`} />
            Retry
          </button>
        </div>
      )}

      {/* Top Main Metric Header */}
      <div className={`flex items-end justify-between mb-3 font-mono transition-opacity ${isLoading ? "opacity-60 animate-pulse" : "opacity-100"}`}>
        <div>
          <span className="text-xs text-zinc-400 block mb-1">{primaryLabel}</span>
          <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {primaryValue}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs text-zinc-400 block mb-1">{secondaryLabel}</span>
          <span className="text-3xl sm:text-4xl font-bold text-[#FF4600] tracking-tight">
            {secondaryValue}
          </span>
        </div>
      </div>

      {/* Primary Progress Bar */}
      <div className="space-y-1.5 mb-5">
        <div className="h-2 w-full bg-zinc-800/90 rounded-none overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#FF4600] via-[#FF5500] to-[#FF6A00] transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
            role="progressbar"
            aria-valuenow={progressPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Sale progress"
          />
        </div>
        <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>{progressMin}</span>
          <span>{progressMax}</span>
        </div>
      </div>

      {/* Dual Sub-progress Bars (Side-by-Side) */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-t border-b border-zinc-900 mb-5 font-mono transition-opacity ${isLoading ? "opacity-60 animate-pulse" : "opacity-100"}`}>
        {/* Sub-Tier 1 */}
        <div className="bg-[#0C0C0C] p-3 rounded-sm border border-zinc-900">
          <div className="flex justify-between items-center text-[11px] mb-1.5">
            <span className="text-zinc-400">{subTier1.label}</span>
            <span className="text-[#FF4600] font-semibold">{subTier1.value}</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-800 rounded-none overflow-hidden mb-1.5">
            <div 
              className="h-full bg-[#FF4600] transition-all duration-500" 
              style={{ width: `${subTier1.percentage}%` }} 
            />
          </div>
          <div className="flex justify-between text-[10px] text-zinc-500">
            <span>{subTier1.minLabel}</span>
            <span>{subTier1.maxLabel}</span>
          </div>
        </div>

        {/* Sub-Tier 2 */}
        <div className="bg-[#0C0C0C] p-3 rounded-sm border border-zinc-900">
          <div className="flex justify-between items-center text-[11px] mb-1.5">
            <span className="text-zinc-400">{subTier2.label}</span>
            <span className="text-[#FF4600] font-semibold">{subTier2.value}</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-800 rounded-none overflow-hidden mb-1.5">
            <div 
              className="h-full bg-[#FF4600] transition-all duration-500" 
              style={{ width: `${subTier2.percentage}%` }} 
            />
          </div>
          <div className="flex justify-between text-[10px] text-zinc-500">
            <span>{subTier2.minLabel}</span>
            <span>{subTier2.maxLabel}</span>
          </div>
        </div>
      </div>

      {/* Tertiary Metric Stat */}
      <div className={`mb-6 font-mono transition-opacity ${isLoading ? "opacity-60 animate-pulse" : "opacity-100"}`}>
        <span className="text-xs text-zinc-400 block mb-1">{tertiaryLabel}</span>
        <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {tertiaryValue}
        </span>
      </div>

      {/* Real-Time Countdown Placeholder */}
      <CountdownCard />
    </div>
  );
}
