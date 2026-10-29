"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Announcement"
      className="w-full bg-[#FF4600] text-white py-1.5 px-4 text-xs font-medium relative z-50 flex items-center justify-between transition-all"
    >
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="text-white/80 hover:text-white transition-colors p-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-white"
        aria-label="Dismiss announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      <div className="flex-1 flex items-center justify-center gap-1.5 text-center pr-6">
        <span className="font-semibold tracking-wide">Demo Demo</span>
        <ArrowRight className="w-3.5 h-3.5 inline-block transition-transform group-hover:translate-x-0.5" />
      </div>
    </aside>
  );
}
