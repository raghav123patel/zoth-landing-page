import Link from "next/link";

export function Footer() {
  return (
    <footer 
      id="section-4"
      className="w-full border-t border-zinc-900 bg-[#050505] pt-14 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-10">
          {/* Left Column: Description, Socials & Newsletter */}
          <div className="md:col-span-7 flex flex-col items-start">
            <p className="text-xs text-zinc-400 max-w-sm mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 mb-6" aria-label="Social Links">
              {/* X / Twitter */}
              <a
                href="#twitter"
                aria-label="X (formerly Twitter)"
                className="w-7 h-7 rounded-sm bg-[#121212] border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-7 h-7 rounded-sm bg-[#121212] border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Discord */}
              <a
                href="#discord"
                aria-label="Discord"
                className="w-7 h-7 rounded-sm bg-[#121212] border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-sm bg-[#121212] border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Medium */}
              <a
                href="#medium"
                aria-label="Medium"
                className="w-7 h-7 rounded-sm bg-[#121212] border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
            </div>

            {/* Newsletter Input Form */}
            <form className="flex items-center">
              <input
                type="text"
                placeholder="[XX]"
                className="bg-[#121212] border border-zinc-800 px-3 py-2 text-xs font-mono text-zinc-300 placeholder:text-zinc-600 rounded-sm w-44 sm:w-56 focus:outline-none focus:border-[#FF4600] transition-colors"
                aria-label="Newsletter input"
              />
              <button
                type="button"
                className="px-4 py-2 bg-[#FF4600] hover:bg-[#E03E00] text-white text-xs font-bold font-mono tracking-wider rounded-sm ml-2 transition-all shadow-[0_0_10px_rgba(255,70,0,0.2)] focus:outline-none focus:ring-1 focus:ring-white"
              >
                DEMO
              </button>
            </form>
          </div>

          {/* Right Columns: Links */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="text-xs font-mono uppercase font-bold text-white tracking-widest mb-3.5">
                DEMO
              </h4>
              <ul className="space-y-2 text-xs text-zinc-400 font-mono">
                <li>
                  <Link href="#demo-1" className="hover:text-white transition-colors">
                    Demo
                  </Link>
                </li>
                <li>
                  <Link href="#demo-2" className="hover:text-white transition-colors">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-xs font-mono uppercase font-bold text-white tracking-widest mb-3.5">
                DEMO
              </h4>
              <ul className="space-y-2 text-xs text-zinc-400 font-mono">
                <li>
                  <Link href="#link-1" className="hover:text-white transition-colors">
                    Lorem ipsum
                  </Link>
                </li>
                <li>
                  <Link href="#link-2" className="hover:text-white transition-colors">
                    Lorem ipsum
                  </Link>
                </li>
                <li>
                  <Link href="#link-3" className="hover:text-white transition-colors">
                    Lorem ipsum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer Bar */}
        <div className="border-t border-zinc-900 pt-6 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10px] text-zinc-500 leading-relaxed font-sans">
          <p className="max-w-4xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <span className="font-mono text-zinc-500 shrink-0 self-end sm:self-auto">[XX]</span>
        </div>
      </div>
    </footer>
  );
}
