"use client";

import { useSaleData } from "@/hooks/use-sale-data";
import { useCountdown } from "@/hooks/use-countdown";
import { Clock } from "lucide-react";

export function CountdownCard() {
  const { data, isLoading } = useSaleData();

  const title = data?.countdown.title ?? "Lorem ipsum dolor";
  const description = data?.countdown.description ?? "Lorem ipsum dolor sit amet consectetur";
  const targetTimestamp = data?.countdown.targetTimestamp;
  const digitLabels = data?.countdown.digitLabels ?? {
    days: "DEMO",
    hours: "DEMO",
    minutes: "DEMO",
    seconds: "DEMO",
  };

  // Consume target timestamp from API as the single source of truth
  const countdown = useCountdown(targetTimestamp);

  return (
    <div className="border border-zinc-800/80 bg-[#080808] p-4 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Left Icon & Titles */}
      <div className="flex items-start gap-3">
        <div className="p-1.5 rounded-sm bg-zinc-900/80 border border-zinc-800 text-[#FF4600] shrink-0 mt-0.5">
          <Clock className="w-4 h-4" />
        </div>
        <div className={isLoading ? "animate-pulse opacity-70" : ""}>
          <h2 className="text-xs sm:text-sm font-bold text-white tracking-wide">
            {title}
          </h2>
          <p className="text-[11px] text-zinc-500 leading-normal">
            {description}
          </p>
        </div>
      </div>

      {/* Right Tabular Countdown Blocks (Real-time live timer ticking every second) */}
      <div 
        role="timer"
        aria-label="Real-time sale countdown"
        className="flex items-center gap-1.5 self-center sm:self-auto shrink-0 font-mono"
      >
        {/* Days */}
        <div className="bg-[#121212] border border-zinc-800/90 px-2 py-1.5 rounded-sm text-center min-w-[42px]">
          <div 
            suppressHydrationWarning 
            className={`text-sm sm:text-base font-bold text-white tracking-wider ${isLoading ? "animate-pulse opacity-70" : ""}`}
          >
            {countdown.days}
          </div>
          <div className="text-[9px] uppercase tracking-wider text-zinc-500 font-semibold">
            {digitLabels.days}
          </div>
        </div>

        <span className="text-zinc-600 font-bold select-none pb-3" aria-hidden="true">:</span>

        {/* Hours */}
        <div className="bg-[#121212] border border-zinc-800/90 px-2 py-1.5 rounded-sm text-center min-w-[42px]">
          <div 
            suppressHydrationWarning 
            className={`text-sm sm:text-base font-bold text-white tracking-wider ${isLoading ? "animate-pulse opacity-70" : ""}`}
          >
            {countdown.hours}
          </div>
          <div className="text-[9px] uppercase tracking-wider text-zinc-500 font-semibold">
            {digitLabels.hours}
          </div>
        </div>

        <span className="text-zinc-600 font-bold select-none pb-3" aria-hidden="true">:</span>

        {/* Minutes */}
        <div className="bg-[#121212] border border-zinc-800/90 px-2 py-1.5 rounded-sm text-center min-w-[42px]">
          <div 
            suppressHydrationWarning 
            className={`text-sm sm:text-base font-bold text-white tracking-wider ${isLoading ? "animate-pulse opacity-70" : ""}`}
          >
            {countdown.minutes}
          </div>
          <div className="text-[9px] uppercase tracking-wider text-zinc-500 font-semibold">
            {digitLabels.minutes}
          </div>
        </div>

        <span className="text-zinc-600 font-bold select-none pb-3" aria-hidden="true">:</span>

        {/* Seconds */}
        <div className="bg-[#121212] border border-zinc-800/90 px-2 py-1.5 rounded-sm text-center min-w-[42px]">
          <div 
            suppressHydrationWarning 
            className={`text-sm sm:text-base font-bold text-white tracking-wider ${isLoading ? "animate-pulse opacity-70" : ""}`}
          >
            {countdown.seconds}
          </div>
          <div className="text-[9px] uppercase tracking-wider text-zinc-500 font-semibold">
            {digitLabels.seconds}
          </div>
        </div>
      </div>
    </div>
  );
}
