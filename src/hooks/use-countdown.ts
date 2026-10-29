"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

export interface CountdownValues {
  /** Formatted two-digit remaining days string (e.g., "13", or 3+ digits if >= 100) */
  days: string;
  /** Formatted two-digit remaining hours string (00-23) */
  hours: string;
  /** Formatted two-digit remaining minutes string (00-59) */
  minutes: string;
  /** Formatted two-digit remaining seconds string (00-59) */
  seconds: string;
  /** Raw numeric days remaining */
  rawDays: number;
  /** Raw numeric hours remaining */
  rawHours: number;
  /** Raw numeric minutes remaining */
  rawMinutes: number;
  /** Raw numeric seconds remaining */
  rawSeconds: number;
  /** Total milliseconds remaining until the target timestamp */
  totalRemainingMs: number;
  /** True when the target timestamp has been reached or is in the past */
  isExpired: boolean;
  /** True if the provided timestamp string parsed into a valid Date */
  isValid: boolean;
  /** True after the component has mounted on the client */
  isMounted: boolean;
}

/**
 * Fallback representation when timer is uninitialized, invalid, or expired.
 */
export const ZERO_TIME_REMAINING: Omit<CountdownValues, "isMounted"> = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
  rawDays: 0,
  rawHours: 0,
  rawMinutes: 0,
  rawSeconds: 0,
  totalRemainingMs: 0,
  isExpired: true,
  isValid: true,
};

/**
 * Calculates remaining days, hours, minutes, and seconds against a target ISO timestamp.
 * Pure calculation function: safe to call during SSR and client runtime.
 */
export function calculateTimeRemaining(
  targetTimestamp?: string | null
): Omit<CountdownValues, "isMounted"> {
  if (!targetTimestamp || typeof targetTimestamp !== "string") {
    return {
      ...ZERO_TIME_REMAINING,
      isValid: false,
    };
  }

  const targetDate = new Date(targetTimestamp);
  const targetTime = targetDate.getTime();

  if (Number.isNaN(targetTime)) {
    return {
      ...ZERO_TIME_REMAINING,
      isValid: false,
    };
  }

  const now = Date.now();
  const diff = targetTime - now;

  if (diff <= 0) {
    return {
      ...ZERO_TIME_REMAINING,
      isExpired: true,
      isValid: true,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    rawDays: days,
    rawHours: hours,
    rawMinutes: minutes,
    rawSeconds: seconds,
    totalRemainingMs: diff,
    isExpired: false,
    isValid: true,
  };
}

const emptySubscribe = () => () => {};

/**
 * Hydration-safe client mount detection hook using useSyncExternalStore.
 * Avoids calling setState synchronously inside an effect.
 */
export function useIsMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

/**
 * Reusable real-time countdown hook.
 *
 * Compliant with React 19 and Next.js 16 Hook rules:
 * - Single source of truth: derives values directly during render from `targetTimestamp`.
 * - Hydration safe: uses useSyncExternalStore for client mount tracking without cascading re-renders.
 * - No synchronous setState in effects: updates are triggered exclusively via interval callbacks.
 * - Auto-ticks every 1000ms using system wall-clock time (zero interval drift).
 * - Stops immediately upon reaching zero, never going below 00:00:00:00.
 * - Safely handles missing, empty, or malformed timestamp strings.
 * - Properly cleans up intervals on component unmount or when `targetTimestamp` changes.
 */
export function useCountdown(targetTimestamp?: string | null): CountdownValues {
  const isMounted = useIsMounted();
  const [, setTick] = useState(0);

  useEffect(() => {
    if (!targetTimestamp) {
      return;
    }

    const initial = calculateTimeRemaining(targetTimestamp);
    // If already expired or timestamp is invalid, do not start an interval
    if (initial.isExpired || !initial.isValid) {
      return;
    }

    const intervalId = setInterval(() => {
      const current = calculateTimeRemaining(targetTimestamp);
      setTick((prev) => prev + 1);

      // Stop timer from continuing once zero is reached
      if (current.isExpired) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetTimestamp]);

  const timeLeft = calculateTimeRemaining(targetTimestamp);

  return {
    ...timeLeft,
    isMounted,
  };
}
