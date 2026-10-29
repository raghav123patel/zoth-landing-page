"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useSaleData } from "@/hooks/use-sale-data";
import { ModeAActionHub } from "./panel-modes/mode-a-action-hub";
import { ModeBSingleAction } from "./panel-modes/mode-b-single-action";
import { ModeCChecklist } from "./panel-modes/mode-c-checklist";
import { ModeD1PoolMatrix } from "./panel-modes/mode-d1-pool-matrix";
import { ModeD2StackedTiers } from "./panel-modes/mode-d2-stacked-tiers";
import { ModeESwapForm } from "./panel-modes/mode-e-swap-form";
import { ModeFAssetDetails } from "./panel-modes/mode-f-asset-details";

function ActionPanelContent() {
  const { data, isLoading } = useSaleData();
  const searchParams = useSearchParams();
  const panel = searchParams?.get("panel")?.toLowerCase();

  switch (panel) {
    case "single":
      return <ModeBSingleAction data={data?.actionPanel} isLoading={isLoading} />;
    case "checklist":
      return <ModeCChecklist checklist={data?.checklist} isLoading={isLoading} />;
    case "matrix":
      return <ModeD1PoolMatrix columns={data?.poolMatrix} isLoading={isLoading} />;
    case "stacked":
      return <ModeD2StackedTiers tiers={data?.stackedTiers} isLoading={isLoading} />;
    case "swap":
      return <ModeESwapForm swapData={data?.swap} isLoading={isLoading} />;
    case "details":
      return <ModeFAssetDetails assetDetails={data?.assetDetails} isLoading={isLoading} />;
    case "default":
    default:
      return <ModeAActionHub data={data?.actionPanel} isLoading={isLoading} />;
  }
}

export function HeroActionPanel() {
  const { data, isLoading } = useSaleData();

  return (
    <div className="relative">
      <div className="hud-card p-6 sm:p-7 rounded-sm shadow-[0_0_35px_rgba(255,70,0,0.08)] bg-[#0A0A0A]/95 backdrop-blur-sm border border-zinc-800/90">
        <Suspense fallback={<ModeAActionHub data={data?.actionPanel} isLoading={isLoading} />}>
          <ActionPanelContent />
        </Suspense>
      </div>
    </div>
  );
}
