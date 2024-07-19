interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "secondary" | "default" | "primary" | "plain";
  size?: "default" | "large" | "small" | "none";
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  outline?: boolean;
  icon?: string;
}
