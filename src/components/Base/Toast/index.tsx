"use client";

import React, { useEffect } from "react";

import Image from "next/image";

import { useBoundStore } from "@/store";

import Button from "../Button";

/**
 * Toast Component
 */
const Toast: React.FC = () => {
  const { descriptionToast, isOpenToast, titleToast, closeToast } =
    useBoundStore((state) => state);

  useEffect(() => {
    // Set timer and close the toast after 5 seconds
    const timer = setTimeout(() => {
      closeToast();
    }, 8000);

    // Clear timer
    return () => {
      clearTimeout(timer);
    };
  }, [closeToast, isOpenToast]);

  if (!isOpenToast) return null;

  return (
    <div className="toast">
      <div className="toast__content">
        <div className="font-bold">{titleToast}</div>
        <div>{descriptionToast}</div>
      </div>
      <Button onClick={closeToast} variant="plain" size="none">
        <Image
          src="/svg/icon-close-square-light.svg"
          className="toast__close"
          alt="Toast"
          height={18}
          width={18}
        />
      </Button>
    </div>
  );
};

export default Toast;
