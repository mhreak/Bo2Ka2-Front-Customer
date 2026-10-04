import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function ProductSectionSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex-between items-center">
        <div className="flex flex-col gap-2 w-1/2">
          <Skeleton className="w-1/4 h-8" />
          <Skeleton className="w-1/3 h-5" />
        </div>
        <Skeleton className="w-1/5 h-7" />
      </div>
      <div className="w-full h-72 flex gap-5 overflow-x-auto hide-scrollbar show-scrollbar lg:pb-4 lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i + 7} className="rounded-2xl min-w-60 lg:min-w-0" />
        ))}
      </div>
    </div>
  );
}
