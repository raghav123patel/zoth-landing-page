"use client";

import { useSaleData } from "@/hooks/use-sale-data";
import type { SpecificationItem } from "@/types/sale";
import { 
  BarChart3, 
  Coins, 
  Link2, 
  ShieldCheck, 
  Lock 
} from "lucide-react";

const defaultSpecifications: SpecificationItem[] = [
  {
    id: "spec-1",
    iconName: "chart",
    label: "Demo",
    value: "DEMO",
  },
  {
    id: "spec-2",
    iconName: "token",
    label: "Lorem ipsum",
    value: "DEMO",
  },
  {
    id: "spec-3",
    iconName: "link",
    label: "Lorem ipsum",
    value: "[XX]",
  },
  {
    id: "spec-4",
    iconName: "shield",
    label: "Demo",
    value: "[XX]",
    subLabel: "Demo",
    subValue: "Lorem ipsum",
  },
  {
    id: "spec-5",
    iconName: "lock",
    label: "Lorem ipsum",
    value: "Demo",
    isUnderlined: true,
  },
];

function getSpecIcon(iconName: SpecificationItem["iconName"]) {
  switch (iconName) {
    case "chart":
      return <BarChart3 className="w-4 h-4 text-zinc-500 shrink-0" />;
    case "token":
      return <Coins className="w-4 h-4 text-zinc-500 shrink-0" />;
    case "link":
      return <Link2 className="w-4 h-4 text-zinc-500 shrink-0" />;
    case "shield":
      return <ShieldCheck className="w-4 h-4 text-zinc-500 shrink-0" />;
    case "lock":
      return <Lock className="w-4 h-4 text-zinc-500 shrink-0" />;
    default:
      return <BarChart3 className="w-4 h-4 text-zinc-500 shrink-0" />;
  }
}

export function SpecificationList() {
  const { data, isLoading } = useSaleData();

  const specifications = data?.specifications ?? defaultSpecifications;

  return (
    <div className="w-full divide-y divide-zinc-900 border-t border-b border-zinc-900">
      <div className={`transition-opacity ${isLoading ? "animate-pulse opacity-70" : "opacity-100"}`}>
        {specifications.map((item) => (
          <div 
            key={item.id} 
            className="py-3.5 flex items-center justify-between text-xs sm:text-sm border-b border-zinc-900 last:border-b-0"
          >
            {/* Left Column: Icon + Label (+ optional Sub-label) */}
            <div className="flex items-center gap-2.5 text-zinc-300">
              {getSpecIcon(item.iconName)}
              {item.subLabel ? (
                <div className="flex flex-col">
                  <span>{item.label}</span>
                  <span className="text-[10px] text-zinc-600">{item.subLabel}</span>
                </div>
              ) : (
                <span>{item.label}</span>
              )}
            </div>

            {/* Right Column: Value Representation */}
            {item.subValue ? (
              <div className="flex flex-col items-end font-mono">
                <span className="text-zinc-300">{item.value}</span>
                <span className="text-[10px] text-zinc-500">{item.subValue}</span>
              </div>
            ) : item.iconName === "token" ? (
              <div className="flex items-center gap-1.5 font-mono text-zinc-400">
                <span className="w-2.5 h-2.5 rounded-full border border-zinc-600 inline-block" />
                <span className="font-semibold tracking-wider uppercase">{item.value}</span>
              </div>
            ) : (
              <span 
                className={`font-mono text-zinc-400 font-semibold tracking-wider uppercase ${
                  item.isUnderlined ? "underline underline-offset-4 decoration-zinc-700 hover:text-white transition-colors cursor-pointer text-zinc-300" : ""
                }`}
              >
                {item.value}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
