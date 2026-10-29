"use client";

import { useQuery } from "@tanstack/react-query";
import type { SaleDataResponse } from "@/types/sale";

/**
 * Client data fetcher for sale and landing page data.
 */
export async function fetchSaleData(): Promise<SaleDataResponse> {
  const res = await fetch("/api/sale", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch sale data: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

/**
 * Reusable TanStack Query hook for consuming landing and sale metrics.
 * Provides caching, automatic deduplication, refetching, and state management.
 */
export function useSaleData() {
  return useQuery<SaleDataResponse>({
    queryKey: ["sale-data"],
    queryFn: fetchSaleData,
    staleTime: 1000 * 30, // 30 seconds fresh
    refetchInterval: 1000 * 60, // Poll every 60 seconds
    refetchOnWindowFocus: false,
    retry: 1,
  });
}

/**
 * Semantic alias for useSaleData
 */
export const useLandingData = useSaleData;
