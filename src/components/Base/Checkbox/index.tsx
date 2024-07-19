import React from "react";

/**
 * Checkbox Component
 * @param onChange Callback function when the checkbox state changes
 * @param checked Boolean indicating if the checkbox is checked
 * @param label Label text for the checkbox
 */
const Checkbox: React.FC<CheckboxProps> = ({ onChange, checked, label }) => {
  /**
   * handle onchange checkbox
   */
  const onChangeCheckbox = () => {
    onChange(!checked);
  };

  return (
    <label className="checkbox">
      {label && <span>{label}</span>}
      <input onChange={onChangeCheckbox} checked={checked} type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
