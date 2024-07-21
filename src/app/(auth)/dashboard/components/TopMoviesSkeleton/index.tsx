import React from "react";

import { Skeleton } from "@/components";

const TopMoviesSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-[240px] h-[38px] mb-6" />

      <div className="grid gap-3 md:gap-4 gap-y-6 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {[...Array(14)].map((_, numberIndex) => (
          <Skeleton className="w-auto h-[240px]" key={numberIndex} />
        ))}
      </div>
    </div>
  );
};

export default TopMoviesSkeleton;
