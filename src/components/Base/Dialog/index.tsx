"use client";

import { useCallback, useEffect, useRef } from "react";

import { DialogFooter, DialogHeader } from "./components";

/**
 * Dialog Component
 * @param children - Children content to be displayed inside the dialog
 * @param onClose - Function to call when the dialog should be closed
 * @param isOpen - Boolean to control whether the dialog is open or closed
 * @param title - Title of the dialog
 * @param onOk - Function to call when the OK button is pressed
 */
const Dialog: React.FC<DialogProps> = ({
  children,
  onClose,
  isOpen,
  title,
  onOk,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  /**
   * Handle clicks outside the dialog to close it.
   * @param event The mouse event triggered outside the dialog.
   */
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    // Add event listener for mousedown when dialog is visible
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  }, [handleClickOutside, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-2 bg-opacity-75">
      <div
        className="flex flex-col gap-2 bg-white-1 p-4 rounded-lg shadow-lg w-[660px] show-dialog"
        ref={dialogRef}
      >
        <DialogHeader onClose={onClose} title={title} />
        {children}
        <DialogFooter onClose={onClose} onOk={onOk} />
      </div>
    </div>
  );
};

export default Dialog;
