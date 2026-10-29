"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#050505]/85 border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 focus:outline-none focus:ring-1 focus:ring-[#FF4600]"
          aria-label="Home"
        >
          {/* Geometric 3-Spoke Emblem Matching Reference */}
          <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center relative">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="absolute top-0.5 w-0.5 h-1.5 bg-white" />
            <span className="absolute bottom-0.5 left-1 w-0.5 h-1.5 bg-white -rotate-60" />
            <span className="absolute bottom-0.5 right-1 w-0.5 h-1.5 bg-white rotate-60" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">Demo</span>
        </Link>

        {/* Desktop Segmented Navigation Pill */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center"
        >
          <div className="hud-card bg-[#0C0C0C]/90 px-6 py-2 rounded-sm border border-zinc-800/80 flex items-center gap-8 text-xs font-mono tracking-wider">
            <Link
              href="#section-1"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Demo
            </Link>
            <Link
              href="#section-2"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Demo
            </Link>
            <Link
              href="#section-3"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Demo
            </Link>
            <Link
              href="#section-4"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Demo
            </Link>
          </div>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            className="px-4 py-2 text-xs font-medium text-zinc-300 bg-[#111111] border border-zinc-800 hover:border-zinc-700 hover:text-white rounded-sm transition-all focus:outline-none focus:ring-1 focus:ring-zinc-600"
          >
            Lorem ipsum
          </button>
          <button
            type="button"
            className="px-4 py-2 text-xs font-bold text-white bg-[#FF4600] hover:bg-[#E03E00] rounded-sm transition-all shadow-[0_0_14px_rgba(255,70,0,0.25)] focus:outline-none focus:ring-1 focus:ring-[#FF4600]"
          >
            Lorem ipsum
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-[#FF4600]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-zinc-800/80 px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-mono text-xs text-zinc-400 pt-2">
            <Link
              href="#section-1"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Demo
            </Link>
            <Link
              href="#section-2"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Demo
            </Link>
            <Link
              href="#section-3"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Demo
            </Link>
            <Link
              href="#section-4"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Demo
            </Link>
          </nav>
          <div className="pt-2 border-t border-zinc-900 flex flex-col gap-2.5">
            <button
              type="button"
              className="w-full py-2.5 text-xs font-medium text-zinc-200 bg-[#121212] border border-zinc-800 text-center rounded-sm"
            >
              Lorem ipsum
            </button>
            <button
              type="button"
              className="w-full py-2.5 text-xs font-bold text-white bg-[#FF4600] text-center rounded-sm shadow-[0_0_12px_rgba(255,70,0,0.25)]"
            >
              Lorem ipsum
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
