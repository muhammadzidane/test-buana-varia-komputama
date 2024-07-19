import React from "react";

import classNames from "classnames";
import Image from "next/image";

/**
 * Select Component
 * @param options Array of options for the select dropdown
 * @param placeholder Placeholder text for the select dropdown
 * @param rest Additional properties
 */
const Select: React.FC<SelectProps> = ({
  options = [],
  placeholder,
  ...rest
}) => {
  const selectClassNames = classNames(
    "block appearance-none w-full h-[40px] text-gray-3",
    "text-sm pl-3 pr-6 border border-gray-2 rounded-[6px]"
  );

  return (
    <div className="relative text-sm w-full">
      <select className={selectClassNames} {...rest}>
        {placeholder && (
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="flex items-center absolute bottom-1/2 top-1/2 right-2">
        <Image
          src="/svg/icon-arrow-dropdown.svg"
          alt="Search Icon"
          height={24}
          width={24}
        />
      </div>
    </div>
  );
};

export default Select;
