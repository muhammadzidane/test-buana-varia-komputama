import React from "react";

/**
 * InputGroup Component
 * @param errorMessage Error message to display when there's an error
 * @param children Children components (usually an Input Component)
 * @param label Label text for the input group
 */
const InputGroup: React.FC<InputGroupProps> = ({
  errorMessage,
  children,
  label,
}) => {
  return (
    <div className="text-sm [&:not(:last-child)]:mb-4">
      <label className="block font-medium text-gray-700">
        <div className="mb-2">{label}</div>
        {children}
        {errorMessage && (
          <div className="mt-1 text-red-400 text-xs">{errorMessage}</div>
        )}
      </label>
    </div>
  );
};

export default InputGroup;
