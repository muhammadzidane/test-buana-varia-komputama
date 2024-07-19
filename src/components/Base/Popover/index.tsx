"use client";

import React, { useEffect, useState, useRef } from "react";

import classNames from "classnames";

/**
 * Popover Component
 * @param position Position where popover should appear relative to the button: "bottom" | "right" | "left" | "top"
 * @param children Content to be displayed inside the popover
 * @param button Button or trigger element for the popover
 */
const Popover: React.FC<PopoverProps> = ({ position, children, button }) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  /**
   * Toggle Popover visibility state
   */
  const togglePopover = () => {
    setIsVisible(!isVisible);
  };

  /**
   * Handle clicks outside the popover to close it.
   * @param event The mouse event triggered outside the popover.
   */
  const handleClickOutside = (event: MouseEvent) => {
    // Check if popoverRef is defined and if the click occurred outside the popover
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false); // * Hide the popover if clicked outside
    }
  };

  useEffect(() => {
    // Add event listener for mousedown when popover is visible
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  }, [isVisible]);

  const contentClassName = classNames(
    "absolute z-10 bg-white border border-gray-300 rounded shadow-lg",
    `animate-slide-in-${position}`,
    {
      "right-full top-0 mr-2": position === "left", // Position left
      "left-full top-0 ml-2": position === "right", // Position right
      "bottom-full mb-2": position === "top", // Position top
      "top-full mt-2": position === "bottom", // Position bottom
    }
  );

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <div onClick={togglePopover} className="cursor-pointer">
        {button}
      </div>
      {isVisible && <div className={contentClassName}>{children}</div>}
    </div>
  );
};

export default Popover;
