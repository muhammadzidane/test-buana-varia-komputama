import React from "react";

import classNames from "classnames";
import Image from "next/image";

/**
 * Input Component
 * @param placeholder Placeholder text for the input
 * @param icon Name of the icon to be displayed in the input
 * @param className Additional classes for custom styling
 * @param rest Additional properties
 */
const Input: React.FC<InputProps> = ({
  placeholder = "...",
  icon,
  ...rest
}) => {
  const inputClassName = classNames(
    "block w-full h-[40px] px-3 border border-gray-2 rounded-[6px]"
  );
  return (
    <div className="relative text-sm w-full">
      <input className={inputClassName} placeholder={placeholder} {...rest} />
      {icon && (
        <div className="flex items-center absolute bottom-1/2 top-1/2 right-3">
          <Image
            src={`/svg/${icon}.svg`}
            alt="Search Icon"
            height={24}
            width={24}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
