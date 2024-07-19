"use client";

import React from "react";

import { Button, Dialog } from "@/components";
import { useToggle } from "@/hooks";
import { useBoundStore } from "@/store";

/**
 * DashboardDialog Component
 */
const DashboardDialog: React.FC = () => {
  const { isToggle, onToggle } = useToggle(false);
  const { openToast } = useBoundStore((state) => state);

  const onOk = () => {};

  const onOpenToast = () => {
    openToast({
      description: "this is description",
      title: "this is title",
    });
  };

  return (
    <div className="mt-4">
      <Button onClick={onOpenToast} className="mb-4" size="small">
        open toast
      </Button>
      <Button onClick={onToggle} size="small">
        open dialog
      </Button>
      <Dialog onClose={onToggle} onOk={onOk} isOpen={isToggle}>
        <div>Dialog content is here</div>
      </Dialog>
    </div>
  );
};

export default DashboardDialog;
