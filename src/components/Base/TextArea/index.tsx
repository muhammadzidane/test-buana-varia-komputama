import React from "react";

/**
 * TextArea Component
 * @param placeholder Placeholder text for the textarea
 * @param rest Additional properties
 */
const TextArea: React.FC<TextAreaProps> = ({
  placeholder = "...",
  ...rest
}) => {
  return (
    <div className="relative text-sm w-full">
      <textarea
        className="w-full block h-[40px] px-3 border border-gray-2 rounded-[6px] text-sm"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default TextArea;
