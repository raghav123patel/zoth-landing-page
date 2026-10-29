export function PartnerStrip() {
  return (
    <section 
      id="section-2"
      aria-label="Partners and Backers"
      className="w-full border-t border-b border-zinc-900 bg-[#050505] py-4 relative overflow-hidden"
    >
      {/* Corner crosshairs on top and bottom borders */}
      <span className="absolute -top-1.5 left-4 text-zinc-700 text-xs font-mono select-none">+</span>
      <span className="absolute -top-1.5 right-4 text-zinc-700 text-xs font-mono select-none">+</span>
      <span className="absolute -bottom-1.5 left-4 text-zinc-700 text-xs font-mono select-none">+</span>
      <span className="absolute -bottom-1.5 right-4 text-zinc-700 text-xs font-mono select-none">+</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto no-scrollbar gap-8">
        {/* Left Stacked Indicator */}
        <div className="flex flex-col justify-center border-r border-zinc-900 pr-6 shrink-0 select-none font-mono">
          <span className="text-[10px] tracking-widest text-zinc-500 uppercase leading-tight font-semibold">DEMO</span>
          <span className="text-[10px] tracking-widest text-zinc-500 uppercase leading-tight font-semibold">DEMO</span>
        </div>

        {/* Partner Logos */}
        <div className="flex items-center gap-10 sm:gap-14 shrink-0 text-zinc-500 hover:text-zinc-300 transition-colors">
          {/* 1. Borderless */}
          <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2L22 12L12 22L2 12Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <polygon points="10,8 16,12 10,16" fill="currentColor" />
            </svg>
            <span className="text-sm font-semibold tracking-wide text-zinc-400">Borderless</span>
          </div>

          {/* 2. TAISU */}
          <div className="opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-base font-black tracking-widest text-zinc-400 font-mono">TAISU</span>
          </div>

          {/* 3. BLOCKCHAIN */}
          <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 fill-current text-zinc-400" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" fill="currentColor" />
              <rect x="14" y="3" width="7" height="7" fill="currentColor" opacity="0.6" />
              <rect x="3" y="14" width="7" height="7" fill="currentColor" opacity="0.6" />
              <rect x="14" y="14" width="7" height="7" fill="currentColor" />
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-xs font-bold tracking-wider text-zinc-400 uppercase font-mono">BLOCKCHAIN</span>
              <span className="text-[8px] text-zinc-600 uppercase tracking-widest font-mono">FOUNDERS FUND</span>
            </div>
          </div>

          {/* 4. Chainlink */}
          <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 text-zinc-400 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
              <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" />
            </svg>
            <span className="text-sm font-semibold tracking-wide text-zinc-400">Chainlink</span>
          </div>

          {/* 5. Coinbase */}
          <div className="opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-sm font-bold tracking-tight text-zinc-400 lowercase">coinbase</span>
          </div>

          {/* 6. Mindfulness Capital */}
          <div className="flex flex-col leading-tight opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase font-serif">MINDFULNESS</span>
            <span className="text-[8px] tracking-widest text-zinc-600 uppercase font-serif">CAPITAL</span>
          </div>

          {/* 7. Circular Accent */}
          <div className="w-4 h-4 rounded-full border border-zinc-700 opacity-60 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
