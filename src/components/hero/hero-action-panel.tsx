"use client";

import { Suspense, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useSaleData } from "@/hooks/use-sale-data";
import { ModeAActionHub } from "./panel-modes/mode-a-action-hub";
import { ModeBSingleAction } from "./panel-modes/mode-b-single-action";
import { ModeCChecklist } from "./panel-modes/mode-c-checklist";
import { ModeD1PoolMatrix } from "./panel-modes/mode-d1-pool-matrix";
import { ModeD2StackedTiers } from "./panel-modes/mode-d2-stacked-tiers";
import { ModeESwapForm } from "./panel-modes/mode-e-swap-form";
import { ModeFAssetDetails } from "./panel-modes/mode-f-asset-details";

const PANEL_MODES = [
  { id: "default", label: "Default" },
  { id: "single", label: "Single" },
  { id: "checklist", label: "Checklist" },
  { id: "matrix", label: "Matrix" },
  { id: "stacked", label: "Stacked" },
  { id: "swap", label: "Swap" },
  { id: "details", label: "Details" },
] as const;

type PanelModeId = (typeof PANEL_MODES)[number]["id"];

function ActionPanelSelector({ currentMode }: { currentMode: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSelectMode = useCallback(
    (modeId: PanelModeId) => {
      const params = new URLSearchParams(searchParams?.toString() ?? "");
      if (modeId === "default") {
        params.delete("panel");
      } else {
        params.set("panel", modeId);
      }
      const query = params.toString() ? `?${params.toString()}` : "";
      router.replace(`${pathname}${query}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  return (
    <div className="flex items-center justify-between gap-2 mb-2 px-1 text-[11px] font-mono">
      <span className="text-zinc-500 uppercase tracking-wider text-[10px] hidden sm:inline-flex items-center gap-1.5 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4600] animate-pulse" />
        Panel:
      </span>
      <div
        role="tablist"
        aria-label="Action Panel Modes"
        className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none w-full sm:w-auto justify-start sm:justify-end"
      >
        {PANEL_MODES.map((m) => {
          const isSelected =
            m.id === "default"
              ? currentMode === "default" || !currentMode
              : currentMode === m.id;

          return (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              tabIndex={0}
              onClick={() => handleSelectMode(m.id)}
              className={`px-2 py-0.5 rounded-xs text-[10px] uppercase font-mono tracking-wider transition-all cursor-pointer whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-[#FF4600] ${
                isSelected
                  ? "bg-[#FF4600] text-white font-bold shadow-[0_0_8px_rgba(255,70,0,0.35)]"
                  : "bg-[#101010] text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {m.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ActionPanelContent() {
  const { data, isLoading } = useSaleData();
  const searchParams = useSearchParams();
  const panel = searchParams?.get("panel")?.toLowerCase() || "default";

  return (
    <div>
      <ActionPanelSelector currentMode={panel} />
      <div className="hud-card p-6 sm:p-7 rounded-sm shadow-[0_0_35px_rgba(255,70,0,0.08)] bg-[#0A0A0A]/95 backdrop-blur-sm border border-zinc-800/90">
        {panel === "single" && (
          <ModeBSingleAction data={data?.actionPanel} isLoading={isLoading} />
        )}
        {panel === "checklist" && (
          <ModeCChecklist checklist={data?.checklist} isLoading={isLoading} />
        )}
        {panel === "matrix" && (
          <ModeD1PoolMatrix columns={data?.poolMatrix} isLoading={isLoading} />
        )}
        {panel === "stacked" && (
          <ModeD2StackedTiers tiers={data?.stackedTiers} isLoading={isLoading} />
        )}
        {panel === "swap" && (
          <ModeESwapForm swapData={data?.swap} isLoading={isLoading} />
        )}
        {panel === "details" && (
          <ModeFAssetDetails assetDetails={data?.assetDetails} isLoading={isLoading} />
        )}
        {(panel === "default" ||
          !["single", "checklist", "matrix", "stacked", "swap", "details"].includes(
            panel
          )) && <ModeAActionHub data={data?.actionPanel} isLoading={isLoading} />}
      </div>
    </div>
  );
}

export function HeroActionPanel() {
  const { data, isLoading } = useSaleData();

  return (
    <div className="relative">
      <Suspense
        fallback={
          <div>
            <div className="hud-card p-6 sm:p-7 rounded-sm shadow-[0_0_35px_rgba(255,70,0,0.08)] bg-[#0A0A0A]/95 backdrop-blur-sm border border-zinc-800/90">
              <ModeAActionHub data={data?.actionPanel} isLoading={isLoading} />
            </div>
          </div>
        }
      >
        <ActionPanelContent />
      </Suspense>
    </div>
  );
}
