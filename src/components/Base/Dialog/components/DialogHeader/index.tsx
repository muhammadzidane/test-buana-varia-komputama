"use client";

import React from "react";

import Image from "next/image";

import { Button } from "@/components";

/**
 * DialogHeader Component
 * @param onClose - Function to call when the dialog should be closed
 * @param title - Title of the dialog
 */
const DialogHeader: React.FC<DialogHeaderProps> = ({ onClose, title }) => {
  return (
    <div className="flex items-center text-base">
      {title && <div className="font-semibold">{title}</div>}
      <Button
        onClick={onClose}
        className="ml-auto"
        variant="plain"
        size="small"
      >
        <Image
          src="/svg/icon-close-square-light.svg"
          alt="Close Icon"
          height={24}
          width={24}
        />
      </Button>
    </div>
  );
};

export default DialogHeader;
