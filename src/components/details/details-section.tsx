"use client";

import { useSaleData } from "@/hooks/use-sale-data";
import { OverviewCard } from "./overview-card";
import { TimelineStepper } from "./timeline-stepper";
import { SpecificationList } from "./specification-list";

export function DetailsSection() {
  const { data, isLoading } = useSaleData();

  const title = data?.detailsHeader.title ?? "Lorem ipsum";
  const description =
    data?.detailsHeader.description ??
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor";

  return (
    <section 
      id="section-3"
      aria-label="Project Details and Timeline"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      {/* Section Header */}
      <div className={`mb-10 sm:mb-12 transition-opacity ${isLoading ? "animate-pulse opacity-70" : "opacity-100"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2.5">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Two-Column Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Sub-Panel: Overview Card */}
        <div className="lg:col-span-4">
          <OverviewCard />
        </div>

        {/* Right Sub-Panel: Stepper and Specifications */}
        <div className="lg:col-span-8 flex flex-col justify-start">
          <TimelineStepper />
          <SpecificationList />
        </div>
      </div>
    </section>
  );
}
