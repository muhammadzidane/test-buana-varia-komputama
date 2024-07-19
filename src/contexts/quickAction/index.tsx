"use client";

import { createContext, useContext, useState } from "react";

import { useToggle } from "@/hooks";

export const QuickActionContext = createContext<QuickActionContextProps>({
  onClickChangeInboxType: () => {},
  onClickChangeTaskType: () => {},
  onClickToInboxDetail: () => {},
  onToggleQuickAction: () => {},
  onCloseQuickAction: () => {},
  isToggleQuickAction: false,
  setInboxDetailId: () => {},
  inboxDetailId: "",
  actionType: null,
});

export const QuickActionProvider: React.FC<ChildrenProps> = ({ children }) => {
  const { isToggle: isToggleQuickAction, onToggle: onToggleQuickAction } =
    useToggle();
  const [inboxDetailId, setInboxDetailId] = useState<string>("");
  const [actionType, setActionType] = useState<
    "inboxDetail" | undefined | "inbox" | "task"
  >(undefined);

  const onClickChangeTaskType = () => {
    if (actionType === "task") {
      onCloseQuickAction();
    } else {
      setActionType("task");
    }
  };
  const onClickChangeInboxType = () => {
    if (actionType === "inbox") {
      onCloseQuickAction();
    } else {
      setActionType("inbox");
    }
  };
  const onClickToInboxDetail = () => {
    setActionType("inboxDetail");
  };
  const onCloseQuickAction = () => {
    setActionType(undefined);
    onToggleQuickAction();
  };

  return (
    <QuickActionContext.Provider
      value={{
        onClickChangeInboxType,
        onClickChangeTaskType,
        onClickToInboxDetail,
        isToggleQuickAction,
        onToggleQuickAction,
        onCloseQuickAction,
        setInboxDetailId,
        inboxDetailId,
        actionType,
      }}
    >
      {children}
    </QuickActionContext.Provider>
  );
};

export const useQuickActionContext = () => useContext(QuickActionContext);
