import React, { Suspense } from "react";

import { type Metadata } from "next";

import { OverviewTable } from "./components";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "...",
};

const Overview: React.FC<ParamPageProps> = ({ searchParams }) => {
  return (
    <div>
      <div className="mb-4 font-semibold text-lg">Overview</div>

      <Suspense fallback={<div>Loading...</div>}>
        <OverviewTable page={searchParams.page} />
      </Suspense>
    </div>
  );
};

export default Overview;
