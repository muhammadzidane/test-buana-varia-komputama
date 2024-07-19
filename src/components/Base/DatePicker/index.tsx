"use client";

import React from "react";

import classNames from "classnames";
import DatePicker from "react-datepicker";

import Input from "../Input";

/**
 * DatePicker Component
 * @param selectedDate Selected date value
 * @param onChange Callback function when date changes
 * @returns DatePicker component
 */
const CustomDatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onChange,
}) => {
  const datePickerClassName = classNames(
    "block w-full px-4 py-2 border border-gray-300 text-sm",
    "rounded shadow-sm focus:outline-none focus:ring focus:ring-primary focus:border-primary"
  );

  return (
    <div className="relative">
      <DatePicker
        onChange={onChange}
        customInput={<Input icon="icon-calendar" />}
        className={datePickerClassName}
        placeholderText="Select a date"
        popperPlacement="right-start"
        dateFormat="dd/MM/YYYY"
        selected={selectedDate}
      />
    </div>
  );
};

export default CustomDatePicker;
