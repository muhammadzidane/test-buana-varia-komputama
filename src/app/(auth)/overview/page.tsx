import React from "react";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "...",
};

const Overview: React.FC<ParamPageProps> = ({ searchParams }) => {
  return (
    <div>
      <div className="mb-4 font-semibold text-lg">Overview</div>
    </div>
  );
};

export default Overview;
