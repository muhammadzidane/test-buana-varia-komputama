import React from "react";

/**
 * Divider Component
 * @param children Children content to be displayed inside the divider
 */
const Divider: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="flex items-center my-4">
      <div className="flex-grow border-t border-black-2"></div>
      <span className="mx-4 text-black-2 font-semibold text-sm">
        {children}
      </span>
      <div className="flex-grow border-t border-black-2"></div>
    </div>
  );
};

export default Divider;
