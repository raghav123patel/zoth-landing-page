import type { SaleDataResponse } from "@/types/sale";

/**
 * Generates realistic mock sale and landing page data.
 * Adheres strictly to the Phase 0 Approved Design Audit (v2.1.0):
 * - Preserves visible wireframe placeholders ([XX], Demo, DEMO, Lorem ipsum).
 * - Avoids inventing arbitrary token prices, financial yields, or unbacked deadlines.
 * - Sets targetTimestamp to a configurable demonstration value (14 days from invocation).
 */
export function getMockSaleData(): SaleDataResponse {
  // Configurable demonstration target timestamp: 14 days ahead
  const demonstrationTarget = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString();

  return {
    id: "zoth-sale-demo",
    badgeText: "Lorem ipsum",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et",
    status: "live",

    // Primary & Secondary Hero Metrics (Screen 01 Left Card)
    primaryMetric: {
      label: "Demo",
      value: "[XX]",
    },
    secondaryMetric: {
      label: "Lorem ipsum",
      value: "[XX]",
    },
    progressPercentage: 65,
    progressMinLabel: "[XX]",
    progressMaxLabel: "[XX]",

    // Dual Sub-Tier Metrics (Screen 01 Side-by-Side Boxes)
    subTiers: [
      {
        id: "sub-tier-1",
        label: "[XX]",
        value: "[XX]",
        percentage: 60,
        minLabel: "[XX]",
        maxLabel: "[XX]",
      },
      {
        id: "sub-tier-2",
        label: "[XX]",
        value: "[XX]",
        percentage: 75,
        minLabel: "[XX]",
        maxLabel: "[XX]",
      },
    ],

    // Tertiary Stat (Screen 01 Left Card Lower Stat)
    tertiaryMetric: {
      label: "Demo",
      value: "[XX]",
    },

    // Real-Time Countdown Target (Configurable Demonstration Target)
    countdown: {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet consectetur",
      targetTimestamp: demonstrationTarget,
      digitLabels: {
        days: "DEMO",
        hours: "DEMO",
        minutes: "DEMO",
        seconds: "DEMO",
      },
    },

    // Hero Right Action Panel (Screen 01 Mode A Default)
    actionPanel: {
      badge: "LOREM IPSUM",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing",
      primaryCta: "Lorem ipsum",
      secondaryCta: "Lorem ipsum",
      disclaimer: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do",
    },

    // Lower Content Section Header
    detailsHeader: {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
    },

    // Lower Left Overview Card (3 Rows)
    overviewRows: [
      { label: "Lorem ipsum", value: "Demo" },
      { label: "Lorem ipsum", value: "Demo" },
      { label: "Lorem ipsum", value: "Demo" },
    ],

    // Lower Right Timeline Stepper (4 Milestone Stages)
    timeline: [
      {
        id: "milestone-1",
        stepNumber: 1,
        label: "Demo",
        title: "Lorem ipsum",
        dateOrValue: "[XX]",
        status: "active",
      },
      {
        id: "milestone-2",
        stepNumber: 2,
        label: "DEMO",
        title: "Lorem ipsum",
        dateOrValue: "",
        status: "upcoming",
      },
      {
        id: "milestone-3",
        stepNumber: 3,
        label: "Demo",
        title: "Lorem ipsum",
        dateOrValue: "",
        status: "upcoming",
      },
      {
        id: "milestone-4",
        stepNumber: 4,
        label: "DEMO",
        title: "Lorem ipsum",
        dateOrValue: "",
        status: "upcoming",
      },
    ],

    // Lower Right Specifications (5 Key-Value Rows)
    specifications: [
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
    ],

    // Partner Strip Data
    partners: [
      { id: "borderless", name: "Borderless" },
      { id: "taisu", name: "TAISU" },
      { id: "bff", name: "BLOCKCHAIN FOUNDERS FUND" },
      { id: "chainlink", name: "Chainlink" },
      { id: "coinbase", name: "coinbase" },
      { id: "mindfulness", name: "MINDFULNESS CAPITAL" },
    ],

    // Payloads for alternative modes (Modes B–F)
    checklist: [
      { id: "check-1", label: "Lorem ipsum", isChecked: true },
      { id: "check-2", label: "Lorem ipsum", isChecked: true },
      { id: "check-3", label: "Lorem ipsum", isChecked: false },
      { id: "check-4", label: "Lorem ipsum", isChecked: false },
    ],
    poolMatrix: [
      {
        id: "col-1",
        headerLeft: "[XX]",
        headerRight: "[XX]",
        metrics: [
          { label: "Lorem ipsum", value: "[XX]" },
          { label: "Lorem ipsum", value: "[XX]" },
          { label: "Lorem ipsum", value: "[XX]" },
          { label: "Lorem ipsum", value: "[XX]" },
          { label: "Lorem ipsum", value: "[XX]" },
          { label: "Lorem ipsum", value: "[XX]" },
          { label: "Lorem ipsum", value: "[XX]" },
          { label: "Lorem ipsum", value: "[XX]" },
        ],
        ctaText: "[XX]",
      },
      {
        id: "col-2",
        headerLeft: "[XX]",
        headerRight: "[XX]",
        metrics: [
          { label: "Lorem ipsum", value: "[XX]" },
          { label: "Lorem ipsum", value: "[XX]" },
          { label: "Lorem ipsum", value: "[XX]" },
          { label: "Lorem ipsum", value: "[XX]" },
          { label: "Lorem ipsum", value: "[XX]" },
          { label: "Lorem ipsum", value: "[XX]" },
          { label: "Lorem ipsum", value: "[XX]" },
          { label: "Lorem ipsum", value: "[XX]" },
        ],
        ctaText: "[XX]",
      },
    ],
    swap: {
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
        { label: "Lorem ipsum", value: "[XX]" },
        { label: "Lorem ipsum", value: "[XX]" },
        { label: "Lorem ipsum", value: "[XX]" },
        { label: "Lorem ipsum", value: "[XX]" },
        { label: "Lorem ipsum", value: "[XX]" },
        { label: "Lorem ipsum", value: "[XX]" },
      ],
    },
    assetDetails: {
      title: "LOREM IPSUM",
      metrics: [
        { label: "Lorem ipsum", value: "[XX]" },
        { label: "Lorem ipsum", value: "[XX]" },
        { label: "Lorem ipsum", value: "[XX]" },
        { label: "Lorem ipsum", value: "[XX]" },
        { label: "Lorem ipsum", value: "[XX]" },
        { label: "Lorem ipsum", value: "[XX]" },
      ],
    },
  };
}
