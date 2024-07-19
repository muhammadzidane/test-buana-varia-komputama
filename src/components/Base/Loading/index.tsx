import React from "react";

import Image from "next/image";

/**
 * Loading Component
 * @param title Title or description for the loading state
 * @returns Loading component
 */
const Loading: React.FC<LoadingProps> = ({ title }) => {
  return (
    <div className="flex flex-1 flex-col gap-3 items-center justify-center">
      <Image
        src="/svg/icon-loading-spinner.svg"
        alt="Loading Task List"
        height={84}
        width={84}
      />
      <div className="text-sm font-semibold">{title}</div>
    </div>
  );
};

export default Loading;
