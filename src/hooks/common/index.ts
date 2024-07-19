"use client";

import { useState } from "react";

export const useToggle = (initialValue: boolean = false): UseToggleReturn => {
  const [isToggle, setToggleValue] = useState<boolean>(initialValue);

  const onToggle = () => {
    setToggleValue((prevValue) => !prevValue);
  };

  return { isToggle, onToggle };
};
