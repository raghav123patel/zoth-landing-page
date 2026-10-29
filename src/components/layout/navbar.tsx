"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  ExternalLink,
  LogOut,
} from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Header State
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(3); // Default Item 4 matching Screen 04
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletPopoverOpen, setWalletPopoverOpen] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const categoryRef = useRef<HTMLDivElement>(null);
  const walletRef = useRef<HTMLDivElement>(null);

  // Close overlays when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setCategoryOpen(false);
      }
      if (walletRef.current && !walletRef.current.contains(event.target as Node)) {
        setWalletPopoverOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setCategoryOpen(false);
        setWalletPopoverOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleCopyAddress() {
    setCopiedAddress(true);
    navigator.clipboard?.writeText("[XX]");
    setTimeout(() => {
      setCopiedAddress(false);
    }, 2000);
  }

  function handleWalletButtonClick() {
    if (!walletConnected) {
      // Simulate connection
      setWalletConnected(true);
    } else {
      // Toggle connected popover
      setWalletPopoverOpen((prev) => !prev);
    }
  }

  function handleDisconnect() {
    setWalletConnected(false);
    setWalletPopoverOpen(false);
  }

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

        {/* Right Action Buttons with Interactive Dropdown & Wallet Popover */}
        <div className="hidden md:flex items-center gap-3">
          {/* Button 1: Category Dropdown */}
          <div className="relative" ref={categoryRef}>
            <button
              type="button"
              onClick={() => {
                setCategoryOpen((prev) => !prev);
                setWalletPopoverOpen(false);
              }}
              aria-expanded={categoryOpen}
              aria-haspopup="true"
              className="px-4 py-2 text-xs font-medium text-zinc-300 bg-[#111111] border border-zinc-800 hover:border-zinc-700 hover:text-white rounded-sm transition-all flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-zinc-600 cursor-pointer"
            >
              <span>Lorem ipsum</span>
              {categoryOpen ? (
                <ChevronUp className="w-3.5 h-3.5 text-zinc-400" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
              )}
            </button>

            {/* Floating Category Menu Overlay */}
            {categoryOpen && (
              <div
                className="absolute top-full mt-2 right-0 w-64 bg-[#0A0A0A] border border-zinc-800 rounded-sm shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-100"
                role="menu"
                aria-label="Category Menu"
              >
                <div className="mb-2 pb-2 border-b border-zinc-900">
                  <h3 className="text-[11px] font-mono font-bold tracking-wider text-zinc-200 uppercase">
                    LOREM IPSUM
                  </h3>
                  <p className="text-[10px] text-zinc-500 font-sans">
                    Demo / Lorem ipsum
                  </p>
                </div>
                <div className="space-y-1 text-xs font-sans">
                  {[
                    "Lorem ipsum",
                    "Demo Lorem ipsum",
                    "Lorem ipsum",
                    "Lorem ipsum",
                  ].map((cat, idx) => {
                    const isSelected = selectedCategoryIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setSelectedCategoryIndex(idx);
                          setCategoryOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded-sm transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-[#FF4600]/15 text-[#FF4600] border-l-2 border-[#FF4600] font-medium rounded-r-sm"
                            : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Button 2: Wallet Connect / Connected Popover */}
          <div className="relative" ref={walletRef}>
            <button
              type="button"
              onClick={handleWalletButtonClick}
              aria-expanded={walletPopoverOpen}
              aria-haspopup="true"
              className="px-4 py-2 text-xs font-bold text-white bg-[#FF4600] hover:bg-[#E03E00] rounded-sm transition-all shadow-[0_0_14px_rgba(255,70,0,0.25)] flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#FF4600] cursor-pointer"
            >
              {walletConnected ? (
                <>
                  <span className="font-mono tracking-wider">[XX]</span>
                  {walletPopoverOpen ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </>
              ) : (
                <span>Lorem ipsum</span>
              )}
            </button>

            {/* Floating Connected Wallet Popover */}
            {walletConnected && walletPopoverOpen && (
              <div
                className="absolute top-full mt-2 right-0 w-60 bg-[#0A0A0A] border border-zinc-800 rounded-sm shadow-2xl p-3.5 z-50 animate-in fade-in zoom-in-95 duration-100"
                role="dialog"
                aria-label="Wallet Details"
              >
                {/* Status Dot & Address Row */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-900">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-zinc-200">[XX]</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer relative"
                    title="Copy Address"
                    aria-label="Copy Address"
                  >
                    {copiedAddress ? (
                      <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                        <Check className="w-3 h-3" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* External Link Row */}
                <div className="py-2.5 border-b border-zinc-900">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors w-full cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Lorem ipsum</span>
                  </button>
                </div>

                {/* Disconnect Action Row */}
                <div className="pt-2.5">
                  <button
                    type="button"
                    onClick={handleDisconnect}
                    className="flex items-center gap-2 text-xs font-semibold text-[#FF4600] hover:text-[#E03E00] transition-colors w-full cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5 text-[#FF4600]" />
                    <span>Lorem ipsum</span>
                  </button>
                </div>
              </div>
            )}
          </div>
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
              onClick={() => {
                setCategoryOpen((prev) => !prev);
              }}
              className="w-full py-2.5 text-xs font-medium text-zinc-200 bg-[#121212] border border-zinc-800 text-center rounded-sm flex items-center justify-center gap-1.5"
            >
              <span>Lorem ipsum</span>
              {categoryOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
            {categoryOpen && (
              <div className="bg-[#111111] p-3 rounded-sm border border-zinc-800 space-y-2 text-xs">
                <div className="text-[10px] uppercase font-mono text-zinc-400">LOREM IPSUM</div>
                {[
                  "Lorem ipsum",
                  "Demo Lorem ipsum",
                  "Lorem ipsum",
                  "Lorem ipsum",
                ].map((cat, idx) => {
                  const isSelected = selectedCategoryIndex === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSelectedCategoryIndex(idx);
                        setMobileMenuOpen(false);
                      }}
                      className={`block w-full text-left py-1 transition-colors ${
                        isSelected
                          ? "text-[#FF4600] font-semibold"
                          : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            )}

            <button
              type="button"
              onClick={() => setWalletConnected((prev) => !prev)}
              className="w-full py-2.5 text-xs font-bold text-white bg-[#FF4600] text-center rounded-sm shadow-[0_0_12px_rgba(255,70,0,0.25)] flex items-center justify-center gap-1.5"
            >
              {walletConnected ? (
                <span>[XX] (Connected • Disconnect)</span>
              ) : (
                <span>Lorem ipsum (Connect)</span>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
