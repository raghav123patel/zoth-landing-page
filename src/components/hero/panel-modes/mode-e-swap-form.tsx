"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, ArrowDown, Check } from "lucide-react";
import type { SwapDetails } from "@/types/sale";

interface ModeESwapFormProps {
  swapData?: SwapDetails;
  isLoading?: boolean;
}

const defaultSwap: SwapDetails = {
  fromToken: {
    symbol: "[XX]",
    name: "Demo",
    balance: "[XX]",
    defaultAmount: "[XX]",
  },
  toToken: {
    symbol: "[XX]",
    name: "Demo",
    defaultAmount: "[XX]",
  },
  exchangeRate: "1 [XX] = [XX] [XX]",
  network: {
    name: "Base",
    badge: "base",
  },
  breakdown: [
    { label: "Lorem ipsum", value: "[XX]" },
    { label: "Lorem ipsum dolor", value: "[XX]" },
    { label: "Lorem ipsum dolor", value: "[XX]" },
    { label: "Lorem ipsum", value: "[XX]" },
    { label: "Demo", value: "[XX]" },
    { label: "Lorem ipsum", value: "[XX]" },
    { label: "Demo", value: "base" },
  ],
};

export function ModeESwapForm({ swapData, isLoading }: ModeESwapFormProps) {
  const data = swapData ?? defaultSwap;

  // Form State
  const [fromAmount, setFromAmount] = useState(data.fromToken.defaultAmount);
  const [toAmount, setToAmount] = useState(data.toToken.defaultAmount);
  const [selectedToken, setSelectedToken] = useState("[XX]");
  const [tokenDropdownOpen, setTokenDropdownOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const tokenDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tokenDropdownRef.current && !tokenDropdownRef.current.contains(event.target as Node)) {
        setTokenDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSwapDirection() {
    const temp = fromAmount;
    setFromAmount(toAmount);
    setToAmount(temp);
  }

  function handleSelectToken(token: string) {
    setSelectedToken(token);
    setTokenDropdownOpen(false);
  }

  return (
    <div className="font-mono">
      {/* Token Selector Dropdown Trigger */}
      <div className="flex justify-between items-center mb-3 text-xs">
        <div className="relative" ref={tokenDropdownRef}>
          <button
            type="button"
            onClick={() => setTokenDropdownOpen((prev) => !prev)}
            aria-expanded={tokenDropdownOpen}
            className="flex items-center gap-1.5 text-zinc-300 bg-[#121212] border border-zinc-800 px-2.5 py-1 rounded-sm text-[11px] font-bold hover:border-zinc-700 transition-colors cursor-pointer"
          >
            <span>{selectedToken}</span>
            {tokenDropdownOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          {/* Floating Token Dropdown */}
          {tokenDropdownOpen && (
            <div className="absolute top-full mt-1 left-0 w-44 bg-[#0A0A0A] border border-zinc-800 rounded-sm shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
              <div className="text-[10px] uppercase font-bold text-zinc-500 px-2 py-1 border-b border-zinc-900 mb-1">
                Lorem ipsum
              </div>
              <button
                type="button"
                onClick={() => handleSelectToken("[XX]")}
                className="w-full flex items-center justify-between px-2 py-1.5 text-xs text-white hover:bg-zinc-900 rounded-sm transition-colors text-left"
              >
                <span>[XX] <span className="text-[10px] text-zinc-500">DEMO</span></span>
                {selectedToken === "[XX]" && <Check className="w-3.5 h-3.5 text-[#FF4600]" />}
              </button>
              <button
                type="button"
                onClick={() => handleSelectToken("DEMO")}
                className="w-full flex items-center justify-between px-2 py-1.5 text-xs text-zinc-300 hover:bg-zinc-900 rounded-sm transition-colors text-left"
              >
                <span>[XX] <span className="text-[10px] text-zinc-500">[XX]</span></span>
                {selectedToken === "DEMO" && <Check className="w-3.5 h-3.5 text-[#FF4600]" />}
              </button>
            </div>
          )}
        </div>
        <span className="text-zinc-600 text-[11px]">[XX]</span>
      </div>

      {/* From Input Card */}
      <div className="bg-[#0C0C0C] border border-zinc-900 p-3.5 rounded-sm mb-1.5">
        <div className="flex justify-between text-[11px] text-zinc-500 mb-1 font-sans">
          <span>{data.fromToken.name}</span>
          <span>{data.fromToken.balance}</span>
        </div>
        <div className="flex justify-between items-center">
          <input
            type="text"
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            className="bg-transparent text-xl font-bold text-white tracking-tight w-28 focus:outline-none"
            aria-label="From Amount"
          />
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-sm bg-[#141414] border border-zinc-800 text-xs text-zinc-300 font-bold">
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
            <span>DEMO</span>
          </div>
        </div>
      </div>

      {/* Swap Direction Toggle Button */}
      <div className="flex justify-center -my-2 relative z-10">
        <button
          type="button"
          onClick={handleSwapDirection}
          title="Swap Direction"
          aria-label="Swap direction"
          className="w-6 h-6 rounded-full bg-[#1A1A1A] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF4600] transition-colors cursor-pointer"
        >
          <ArrowDown className="w-3 h-3" />
        </button>
      </div>

      {/* To Input Card */}
      <div className="bg-[#0C0C0C] border border-zinc-900 p-3.5 rounded-sm mb-3">
        <div className="flex justify-between text-[11px] text-zinc-500 mb-1 font-sans">
          <span>{data.toToken.name}</span>
        </div>
        <div className="flex justify-between items-center">
          <input
            type="text"
            value={toAmount}
            onChange={(e) => setToAmount(e.target.value)}
            className="bg-transparent text-xl font-bold text-white tracking-tight w-28 focus:outline-none"
            aria-label="To Amount"
          />
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-sm bg-[#141414] border border-zinc-800 text-xs text-zinc-300 font-bold">
            <span className="w-2 h-2 rounded-full bg-white inline-block" />
            <span>Demo</span>
          </div>
        </div>
      </div>

      {/* Breakdown Detail Rows */}
      <div className="space-y-1.5 py-2 border-t border-b border-zinc-900 text-[10px] mb-3">
        {data.breakdown.map((row, idx) => {
          const isBaseRow = idx === data.breakdown.length - 1;
          return (
            <div key={idx} className="flex justify-between items-center py-0.5">
              <span className="text-zinc-500 font-sans">{row.label}</span>
              {isBaseRow ? (
                <span className="flex items-center gap-1 text-blue-400 font-bold font-sans">
                  <span className="w-2 h-2 rounded-xs bg-[#0052FF] inline-block" />
                  base
                </span>
              ) : (
                <span className="text-zinc-300">{row.value}</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Terms Agreement Checkbox */}
      <label className="flex items-start gap-2.5 mb-4 cursor-pointer select-none group">
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`w-3.5 h-3.5 rounded-xs border mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
            termsAccepted
              ? "bg-[#FF4600] border-[#FF4600] text-white"
              : "border-zinc-700 bg-[#121212] group-hover:border-zinc-600"
          }`}
        >
          {termsAccepted && <Check className="w-2.5 h-2.5 stroke-[3]" />}
        </div>
        <span className="text-[10px] text-zinc-500 group-hover:text-zinc-400 transition-colors leading-tight font-sans">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
        </span>
      </label>

      {/* Conditional CTA Button */}
      {termsAccepted ? (
        /* Enabled Active State */
        <button
          type="button"
          className="w-full relative py-3.5 bg-[#FF4600] hover:bg-[#E03E00] text-center rounded-sm transition-all shadow-[0_0_20px_rgba(255,70,0,0.35)] cursor-pointer group focus:outline-none focus:ring-1 focus:ring-white"
        >
          <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-white/80 pointer-events-none" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-white/80 pointer-events-none" />
          <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-white/80 pointer-events-none" />
          <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-white/80 pointer-events-none" />

          <span className="text-xs font-bold tracking-wider text-white uppercase font-mono">
            [XX]
          </span>
        </button>
      ) : (
        /* Disabled State */
        <button
          type="button"
          disabled
          className="w-full relative py-3.5 bg-[#3A1406] border border-[#521C08] text-center rounded-sm cursor-not-allowed opacity-80"
        >
          <span className="text-xs font-bold tracking-wider text-[#A04520] uppercase font-mono">
            [XX]
          </span>
        </button>
      )}
    </div>
  );
}
