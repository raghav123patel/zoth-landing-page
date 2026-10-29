import { NextRequest, NextResponse } from "next/server";
import { getMockSaleData } from "@/data/mock-sale-data";

/**
 * GET /api/landing
 * Endpoint alias for landing page data consumption.
 * Supports ?simulateError=true for manual testing of client error boundaries.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  if (searchParams.get("simulateError") === "true") {
    return NextResponse.json(
      { error: "Simulated internal server error for testing error UI" },
      { status: 500 }
    );
  }

  const data = getMockSaleData();

  return NextResponse.json(data, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
    },
  });
}
