"use client";

import React from "react";

import Button from "@/components/Base/Button";

/**
 * DialogFooter Component
 * @param onClose - Function to call when the dialog should be closed
 * @param onOk - Function to call when the OK button is pressed
 */
const DialogFooter: React.FC<DialogFooterProps> = ({ onClose, onOk }) => {
  return (
    <div className="flex justify-end gap-2">
      <Button onClick={onClose}>Close</Button>
      <Button onClick={onOk} outline>
        Ok
      </Button>
    </div>
  );
};

export default DialogFooter;
