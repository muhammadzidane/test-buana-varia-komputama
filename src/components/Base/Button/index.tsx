"use client";

import React from "react";

import classNames from "classnames";
import Image from "next/image";
import { useFormStatus } from "react-dom";

/**
 * Button Component
 * @param variant Button variant (default, plain, primary, secondary)
 * @param size Button size (default, small, large)
 * @param type Button type (button, submit, reset)
 * @param className Additional classes for custom styling
 * @param children Children content to be displayed inside the button
 * @param outline Whether the button is outlined
 * @param icon Name of the icon to be displayed in the button
 * @param rest Additional properties
 */
const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  type = "button",
  className,
  children,
  outline,
  icon,
  ...rest
}) => {
  const isIconOnly = !children && icon && size === "default";
  const { pending } = useFormStatus();
  const buttonClassName = classNames(
    "rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 hover:opacity-90",
    "flex gap-1 items-center justify-between cursor-pointer",
    // Size
    {
      "py-2 px-4 text-sm": size === "default" && !isIconOnly,
      "p-0 h-fit w-fit": size === "none" || isIconOnly,
      "py-1 px-2 text-xs": size === "small",
      "py-3 px-5 text-lg": size === "large",
    },
    // Variant
    {
      "bg-primary text-white-1": ["default", "primary"].includes(variant), // Default | Primary
      "bg-secondary text-black-1": variant === "secondary", // Secondary
    },
    // Outline
    {
      "bg-transparent border-2 border-primary !text-black-1": outline,
    },
    // Plain
    {
      "bg-transparent !text-black-1": variant === "plain",
    },
    className
  );

  return (
    <button
      className={buttonClassName}
      aria-disabled={pending}
      disabled={pending}
      type={type}
      {...rest}
    >
      {icon && (
        <Image
          src={`/svg/${icon}.svg`}
          alt="Button Icon"
          height={24}
          width={24}
        />
      )}
      {children && (
        <div className="m-auto">{pending ? "Loading..." : children}</div>
      )}
    </button>
  );
};

export default Button;
