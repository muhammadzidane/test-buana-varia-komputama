import React from "react";

const DashboardDetailLayout: React.FC<ChildrenProps> = ({ children }) => {
  return <div className="py-4 px-2 md:p-6 lg:p-8">{children}</div>;
};

export default DashboardDetailLayout;
