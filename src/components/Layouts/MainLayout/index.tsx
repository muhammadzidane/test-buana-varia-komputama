import React from "react";

/**
 * @param children Children content to be displayed inside the main template
 */
const MainTemplate: React.FC<ChildrenProps> = ({ children }) => (
  <div className="flex h-screen">
    <div className="flex-1">
      <div className="bg-white p-4 shadow-md sha">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-[18px]">Buana Movies</h1>
        </div>
      </div>
      <div className="px-2 py-4 md:p-8">{children}</div>
    </div>
  </div>
);

export default MainTemplate;
