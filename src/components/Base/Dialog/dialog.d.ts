interface DialogProps extends ChildrenProps {
  onClose: () => void;
  onOk: () => void;
  isOpen: boolean;
  title?: string;
}
