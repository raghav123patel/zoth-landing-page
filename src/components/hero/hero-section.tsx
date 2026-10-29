"use client";

import { useSaleData } from "@/hooks/use-sale-data";
import { PerspectiveGrid } from "./perspective-grid";
import { HeroMetricsCard } from "./hero-metrics-card";
import { HeroActionPanel } from "./hero-action-panel";

export function HeroSection() {
  const { data, isLoading } = useSaleData();

  const badgeText = data?.badgeText ?? "Lorem ipsum";
  const title = data?.title ?? "Lorem ipsum dolor";
  const description =
    data?.description ??
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et";

  return (
    <section 
      id="section-1"
      aria-label="Sale Overview and Action Hub"
      className="relative min-h-[640px] pt-8 sm:pt-12 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* 3D Wireframe Grid & Ambient Glow Background */}
      <PerspectiveGrid />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Heading, Subtitle, Sale Metrics & Countdown */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* HUD Eyebrow Badge */}
            <div 
              className={`inline-flex items-center gap-2 self-start px-3 py-1 rounded-sm text-[11px] font-mono font-semibold tracking-wider uppercase text-[#FF4600] bg-[#FF4600]/10 border border-[#FF4600]/30 mb-4 transition-opacity ${isLoading ? "animate-pulse opacity-70" : "opacity-100"}`}
            >
              {badgeText}
            </div>

            {/* Main Hero Title */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 leading-[1.1] transition-opacity ${isLoading ? "animate-pulse opacity-70" : "opacity-100"}`}
            >
              {title}
            </h1>

            {/* Subtitle / Description */}
            <p 
              className={`text-sm sm:text-base text-zinc-400 max-w-xl mb-8 leading-relaxed transition-opacity ${isLoading ? "animate-pulse opacity-70" : "opacity-100"}`}
            >
              {description}
            </p>

            {/* Sale Metrics & Real-Time Countdown Card */}
            <HeroMetricsCard />
          </div>

          {/* Right Column: Default HUD Action Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <HeroActionPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
