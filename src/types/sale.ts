/**
 * TypeScript Data Contract for Zoth Sale & Landing Page
 * Derived from approved Phase 0 Requirements Audit (v2.1.0)
 */

export type StepStatus = "completed" | "active" | "upcoming";
export type SaleStatus = "upcoming" | "live" | "ended";

export interface SaleTierSubMetric {
  id: string;
  label: string;
  value: string;
  percentage: number;
  minLabel: string;
  maxLabel: string;
  currentValue?: number;
  maxValue?: number;
  unit?: string;
}

export type { CountdownValues } from "@/hooks/use-countdown";

export interface CountdownData {
  title: string;
  description: string;
  targetTimestamp: string; // ISO 8601 demonstration string
  digitLabels?: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

export interface ChecklistItem {
  id: string;
  label: string;
  isChecked: boolean;
}

export interface PoolMatrixColumn {
  id: string;
  headerLeft: string;
  headerRight: string;
  metrics: Array<{ label: string; value: string }>;
  ctaText: string;
}

export interface StackedTierItem {
  id: string;
  headerLeft: string;
  headerRight: string;
  subLabelLeft: string;
  valueLeft: string;
  subValueLeft: string;
  subLabelRight: string;
  valueRight: string;
  subValueRight: string;
  ctaText: string;
}

export interface SwapDetails {
  fromToken: {
    symbol: string;
    name: string;
    balance: string;
    defaultAmount: string;
  };
  toToken: {
    symbol: string;
    name: string;
    defaultAmount: string;
  };
  exchangeRate: string;
  network: {
    name: string;
    badge: string;
  };
  breakdown: Array<{ label: string; value: string }>;
}

export interface AssetDetailsData {
  title: string;
  metrics: Array<{ label: string; value: string }>;
}

export interface TimelineMilestone {
  id: string;
  stepNumber: number;
  label: string;
  title: string;
  dateOrValue: string;
  status: StepStatus;
}

export interface SpecificationItem {
  id: string;
  iconName: "chart" | "token" | "link" | "shield" | "lock";
  label: string;
  value: string;
  subLabel?: string;
  subValue?: string;
  isUnderlined?: boolean;
}

export interface PartnerItem {
  id: string;
  name: string;
}

export interface OverviewRow {
  label: string;
  value: string;
}

export interface ActionPanelData {
  badge: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  disclaimer: string;
}

export interface DetailsHeaderData {
  title: string;
  description: string;
}

export interface SaleDataResponse {
  id: string;
  badgeText: string;
  title: string;
  description: string;
  status: SaleStatus;

  // Left Hero Metrics (preserving visible reference placeholders)
  primaryMetric: {
    label: string;
    value: string;
    rawAmount?: number;
  };
  secondaryMetric: {
    label: string;
    value: string;
    rawAmount?: number;
  };
  progressPercentage: number;
  progressMinLabel: string;
  progressMaxLabel: string;
  subTiers: [SaleTierSubMetric, SaleTierSubMetric];
  tertiaryMetric: {
    label: string;
    value: string;
  };

  // Real-Time Countdown Target (Configurable demonstration timestamp)
  countdown: CountdownData;

  // Hero Right Action Panel (Mode A Default)
  actionPanel: ActionPanelData;

  // Lower Content Section
  detailsHeader: DetailsHeaderData;
  overviewRows: OverviewRow[];
  timeline: TimelineMilestone[];
  specifications: SpecificationItem[];

  // Partner / Marquee Strip
  partners: PartnerItem[];

  // Modular Right Panel Payloads
  checklist?: ChecklistItem[];
  poolMatrix?: [PoolMatrixColumn, PoolMatrixColumn];
  stackedTiers?: [StackedTierItem, StackedTierItem];
  swap?: SwapDetails;
  assetDetails?: AssetDetailsData;
}

export type LandingPageData = SaleDataResponse;
