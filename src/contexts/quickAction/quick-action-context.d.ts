interface QuickActionContextProps {
  onClickToInboxDetail: MouseEventHandler<T> | undefined;
  actionType?: "inboxDetail" | "inbox" | "task" | null;
  setInboxDetailId: Dispatch<SetStateAction<string>>;
  onClickChangeInboxType: () => void;
  onClickChangeTaskType: () => void;
  onToggleQuickAction: () => void;
  onCloseQuickAction: () => void;
  isToggleQuickAction: boolean;
  inboxDetailId: string;
}
