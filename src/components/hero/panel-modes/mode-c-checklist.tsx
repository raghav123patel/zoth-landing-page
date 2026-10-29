"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { ChecklistItem } from "@/types/sale";

interface ModeCChecklistProps {
  checklist?: ChecklistItem[];
  isLoading?: boolean;
}

const defaultChecklist: ChecklistItem[] = [
  { id: "check-1", label: "Lorem ipsum", isChecked: true },
  { id: "check-2", label: "Lorem ipsum dolor sit amet", isChecked: true },
  { id: "check-3", label: "Lorem ipsum", isChecked: false },
  { id: "check-4", label: "Lorem ipsum", isChecked: false },
];

export function ModeCChecklist({ checklist: initialItems, isLoading }: ModeCChecklistProps) {
  const [items, setItems] = useState<ChecklistItem[]>(() => initialItems ?? defaultChecklist);

  function toggleItem(id: string) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isChecked: !item.isChecked } : item))
    );
  }

  return (
    <div>
      {/* Panel Header */}
      <div className={`mb-5 ${isLoading ? "animate-pulse opacity-70" : ""}`}>
        <h2 className="text-xs font-mono font-bold tracking-wider text-zinc-200 uppercase">
          LOREM IPSUM
        </h2>
      </div>

      {/* Media Canvas + Verification Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
        {/* Left Media Canvas Frame */}
        <div className="aspect-square w-full bg-[#121212] border border-zinc-800 rounded-sm flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4600]/10 to-transparent pointer-events-none" />
          <div className="w-12 h-12 rounded-full border border-zinc-700/80 flex items-center justify-center text-zinc-600 font-mono text-xs">
            [XX]
          </div>
        </div>

        {/* Right 4-Item Verification Checklist */}
        <div className="space-y-3 font-sans">
          {items.map((item) => (
            <label
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className="flex items-center gap-3 p-2 rounded-sm hover:bg-zinc-900/60 transition-colors cursor-pointer select-none"
            >
              <div
                className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors shrink-0 ${
                  item.isChecked
                    ? "bg-[#FF4600] border-[#FF4600] text-white"
                    : "border-zinc-700 bg-[#121212]"
                }`}
              >
                {item.isChecked && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
              <span
                className={`text-xs ${
                  item.isChecked ? "text-zinc-200 font-medium" : "text-zinc-400"
                }`}
              >
                {item.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
