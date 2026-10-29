# Zoth Take-Home Assessment — Web3/DeFi Landing Page

A responsive, high-performance Web3/DeFi token sale landing page built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **TanStack Query v5**, based on the approved Phase 0 Design Audit and Figma references.

---

## 1. Project Overview & Technology Stack

This project implements a futuristic HUD-style landing page inspired by the reference screens. It incorporates dynamic API data fetching, real-time countdown calculations, layout-stable loading states, HUD error handling with active retry, and full responsive adaptation.

- **Framework:** [Next.js 16.4.3](https://nextjs.org/) (App Router, Server and Client Components)
- **UI Library:** [React 19.3.1](https://react.dev/)
- **Language:** [TypeScript 5.6.3](https://www.typescriptlang.org/) with strict typechecking (`strict: true`)
- **Styling:** [Tailwind CSS 3.4.14](https://tailwindcss.com/) with custom HUD corner brackets and radial glow utilities
- **Asynchronous Data Access:** [TanStack Query v5](https://tanstack.com/query/latest) (`@tanstack/react-query@5.59.16`)
- **Icons:** [Lucide React 0.453.0](https://lucide.dev/)
- **Linting & Code Quality:** [ESLint 9](https://eslint.org/) using native Flat Config (`eslint.config.mjs`) with Core Web Vitals rules

---

## 2. Prerequisites & Installation

### Node.js Requirement
Next.js 16 requires **Node.js >= 20.9.0 (LTS)**.

```bash
# Verify your local Node version
node --version
```

### Installation
Clone the repository and install dependencies:

```bash
npm install
```

---

## 3. Local Development

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the landing page.

---

## 4. Available Scripts

The following scripts are defined in `package.json`:

| Command | Description |
|:---|:---|
| `npm run dev` | Starts the local development server at `http://localhost:3000`. |
| `npm run typecheck` | Runs the TypeScript compiler (`tsc --noEmit`) to verify strict type safety with 0 errors. |
| `npm run lint` | Runs ESLint 9 Flat Config (`eslint .`) to verify Core Web Vitals and React Hook rules. |
| `npm run build` | Compiles the production build, optimizes assets, and generates static/dynamic App Router routes. |
| `npm run start` | Runs the compiled production server locally after running `build`. |

---

## 5. Project Architecture & Directory Structure

```
zoth-assessment-task/
├── .env.example                  # Environment variable template
├── eslint.config.mjs             # ESLint 9 Flat Configuration
├── next.config.mjs               # Next.js configuration (reactStrictMode: true)
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Design tokens (void black, brand orange, HUD radii)
├── tsconfig.json                 # Strict TypeScript configuration
│
└── src/
    ├── app/
    │   ├── api/
    │   │   ├── sale/
    │   │   │   └── route.ts      # Primary Route Handler (GET /api/sale)
    │   │   └── landing/
    │   │       └── route.ts      # Alias Route Handler (GET /api/landing)
    │   ├── globals.css           # Tailwind base, HUD corner brackets, 3D grid
    │   ├── layout.tsx            # Root Server Component with QueryProvider & Inter font
    │   └── page.tsx              # Single-page landing composition
    │
    ├── components/
    │   ├── layout/
    │   │   ├── announcement-bar.tsx  # Dismissible top orange banner
    │   │   ├── navbar.tsx            # Sticky header with 3-spoke emblem & anchor links
    │   │   └── footer.tsx            # Multi-column footer with socials & newsletter
    │   ├── hero/
    │   │   ├── hero-section.tsx      # Two-column hero container (#section-1)
    │   │   ├── perspective-grid.tsx  # 3D perspective wireframe grid & ambient glow
    │   │   ├── hero-metrics-card.tsx # Metrics HUD card with error banner & Retry CTA
    │   │   ├── countdown-card.tsx    # Live countdown card with tabular digit frames
    │   │   └── hero-action-panel.tsx # Mode A right HUD card (dual CTA buttons)
    │   ├── partners/
    │   │   └── partner-strip.tsx     # 6 verified partner SVG logos (#section-2)
    │   └── details/
    │       ├── details-section.tsx   # Lower two-column section (#section-3)
    │       ├── overview-card.tsx     # 3-row detail overview card
    │       ├── timeline-stepper.tsx  # 4-stage milestone stepper (Step 1 active)
    │       └── specification-list.tsx# 5 structured specification rows with icons
    │
    ├── data/
    │   └── mock-sale-data.ts     # Typed mock data generator adhering to Phase 0
    ├── hooks/
    │   ├── use-sale-data.ts      # TanStack Query hook with caching & deduplication
    │   └── use-countdown.ts      # Real-time countdown hook (useSyncExternalStore)
    ├── providers/
    │   └── query-provider.tsx    # Client-side QueryClientProvider wrapper
    ├── types/
    │   ├── sale.ts               # Complete TypeScript data contracts
    │   └── index.ts              # Type barrel export
    └── lib/
        └── utils.ts              # cn() Tailwind class merging utility
```

---

## 6. Mock API & Error Simulation

The application includes two Next.js Route Handlers:

- **Primary Route:** `GET /api/sale`
- **Alias Route:** `GET /api/landing`

Both endpoints return typed JSON matching `SaleDataResponse` with standard cache headers (`public, s-maxage=30, stale-while-revalidate=60`).

### Testing Simulated Errors
Both endpoints support a `?simulateError=true` query parameter for deterministic testing of client-side error boundaries:

- **URL:** `http://localhost:3000/api/sale?simulateError=true`
- **Response:** HTTP 500 `{ "error": "Simulated internal server error for testing error UI" }`

When an error occurs:
1. TanStack Query catches the non-2xx response and sets `isError: true`.
2. The UI in `HeroMetricsCard` renders a contextual HUD alert: `Error loading live metrics [Retry ⟳]`.
3. Clicking **Retry** invokes TanStack Query's `refetch()` function and displays an active spinning indicator.
4. All values fall back to safe wireframe defaults (`[XX]`, `Demo`, `Lorem ipsum`) with zero layout collapse.

---

## 7. TanStack Query Caching & Request Deduplication

All client components consume data through the unified `useSaleData()` hook:

- **Query Key:** `["sale-data"]`
- **Request Deduplication:** Even though `HeroSection`, `HeroMetricsCard`, `CountdownCard`, `HeroActionPanel`, `DetailsSection`, `OverviewCard`, `TimelineStepper`, and `SpecificationList` independently invoke `useSaleData()`, TanStack Query batches them into **exactly one** network request.
- **Cache Freshness (`staleTime`):** `30,000ms` (30 seconds). Subscribing components read immediately from memory cache without redundant network calls.
- **Background Polling (`refetchInterval`):** `60,000ms` (60 seconds) ensures live synchronization with the server.
- **Window Focus Refetch:** Disabled (`refetchOnWindowFocus: false`) to avoid jarring re-renders during evaluator tab switching.
- **Retry Tolerance:** Configured to `1` retry on failure.
- **Scoped SSR Provider:** `QueryClient` is initialized inside React state in `query-provider.tsx` to prevent cross-request cache leakage during SSR.

---

## 8. Real-Time Countdown Timer & Demonstration Timestamp

The countdown timer in `countdown-card.tsx` consumes the `targetTimestamp` returned by the mock API as its single source of truth.

- **Calculation Formula:** Calculates remaining days, hours, minutes, and seconds by computing the delta between the target timestamp and system wall-clock time (`Date.now()`).
- **Zero Timing Drift:** Recalculating delta on every 1000ms tick eliminates accumulated interval drift caused by browser throttling or background tabs.
- **Hydration Safe:** Uses React 19's `useSyncExternalStore` in `use-countdown.ts` for client mount tracking and `suppressHydrationWarning` on tabular digit containers to avoid server/client markup discrepancies.
- **Zero-Clamping on Expiration:** When the target time is reached, or if an invalid timestamp is supplied, values safely freeze at `00:00:00:00`, `isExpired` is set to `true`, and the interval is cleared immediately. The timer never displays negative values.
- **Demonstration Target Value:** The mock API dynamically generates a target timestamp set 14 days in the future (`Date.now() + 14 * 24 * 60 * 60 * 1000`) so that evaluators always observe an active, ticking timer.

---

## 9. Environment Configuration

Environment configuration is templated in `.env.example`:

```env
# Next.js Application Environment Variables
# No secrets or external API keys are required for the mock sale data
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

To configure:
```bash
cp .env.example .env.local
```

No external database credentials, blockchain RPC endpoints, or private secrets are required.

---

## 10. Vercel Deployment Instructions

The application is configured for zero-config deployment on Vercel:

1. Push your repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/new), select **Import Git Repository**.
3. Configure the deployment settings:
   - **Framework Preset:** `Next.js`
   - **Root Directory:** `./`
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)
4. (Optional) Set `NEXT_PUBLIC_APP_URL` to your production Vercel domain under **Environment Variables**.
5. Click **Deploy**.

The Next.js 16 App Router will automatically bundle Route Handlers (`/api/sale` and `/api/landing`) as Serverless Functions and serve the landing page as an optimized React Server Component document.

---

## 11. Reference Screen Architecture & Reviewer URL Parameters

The project faithfully matches all 15 Figma reference screenshots provided in the assessment briefing, organized into modular interactive components:

### Interactive Header States (Screens 02–05 & 15)
- **Category Dropdown (Button 1):** Clicking the category button toggles the dark dropdown overlay (`[Lorem ipsum v]` ↔ `[Lorem ipsum ^]`), displaying 4 selectable category options with the reference active-state highlight on Item 4. Dismisses on outside click or `Escape`.
- **Wallet Connection Toggle (Button 2):** Clicking the wallet button simulates connecting/disconnecting a Web3 wallet (`[Lorem ipsum]` ↔ `[[XX] v]`).
- **Connected Wallet Popover (Screen 05):** When connected, clicking `[[XX] v]` opens the HUD wallet popover with a green live status dot, copyable address (`0x71C...49A1`) with clipboard feedback, external explorer link, and a disconnect action.

### Modular Right Hero Action Panel (Screens 01–15)
The right hero panel supports all 7 distinct layouts from the 15 reference screenshots. By default, **Screen 01 (Mode A: Action Hub)** is rendered with zero URL parameters. Reviewers can inspect any of the other panel states via the following URL parameters:

| Reference Screens | URL Parameter | Layout Description |
|:---|:---|:---|
| **Screens 01–05** | `http://localhost:3000` *(Default)* | **Mode A (Action Hub):** Dual stacked CTAs with corner ticks, badge, and disclaimer. |
| **Screen 06** | `http://localhost:3000/?panel=single` | **Mode B (Single Action CTA):** Glowing `• LOREM IPSUM` badge and single full-width primary CTA. |
| **Screen 07** | `http://localhost:3000/?panel=checklist` | **Mode C (Checklist):** Media canvas placeholder on left + interactive 4-item verification checklist on right. |
| **Screens 08 & 15** | `http://localhost:3000/?panel=matrix` | **Mode D1 (Dual-Tier Matrix):** Side-by-side comparison columns, each with 8 key-value metrics and an orange CTA. |
| **Screen 14** | `http://localhost:3000/?panel=stacked` | **Mode D2 (Stacked Tiers):** Vertically stacked tier cards with dual-metric headers and full-width CTAs. |
| **Screens 09–12** | `http://localhost:3000/?panel=swap` | **Mode E (Token Swap Form):** From/To inputs, swap direction button `↓`, token dropdown, 7 breakdown rows, Base badge, interactive terms checkbox, and conditional submit button state (dark muted when unchecked, bright orange with corner ticks when checked). |
| **Screen 13** | `http://localhost:3000/?panel=details` | **Mode F (Asset Details):** Centered media canvas placeholder, `LOREM IPSUM` title, 6 key-value detail rows, and dual CTAs. |

---

## 12. Explicit Scope Boundaries & Assessment Disclaimers

In strict adherence to the assessment instructions:
- **No Real Web3 / Blockchain Integration:** This project is a front-end UI and mock API demonstration. There are **no wallet connections** (no `wagmi`, `viem`, `ethers`, or `rainbowkit`), no smart contracts, no on-chain transactions, and no live payment processing. All wallet and swap states are simulated locally.
- **No Fabricated Financial Claims:** In accordance with the Phase 0 audit, visible wireframe placeholders (`[XX]`, `Demo`, `DEMO`, `Lorem ipsum`) are intentionally preserved. The project does not invent fake token prices, financial yields, investor returns, or unverified contract addresses.
- **Default Production View:** The landing page faithfully implements **Screen 01 (Mode A: Action Hub)** from the 15 reference screenshots.
