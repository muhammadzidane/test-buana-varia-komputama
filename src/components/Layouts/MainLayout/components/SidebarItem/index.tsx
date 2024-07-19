"use client";

import React from "react";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * SidebarItem Component
 * @param children The content inside the sidebar item
 * @param icon The icon identifier for the sidebar item
 */
const SidebarItem: React.FC<SidebarItemProps> = ({ children, icon }) => {
  const pathname = usePathname();
  const activeClass = classNames({
    "flex gap-2 items-center hover:bg-gray-1-700 px-4 py-2": true,
    "rounded-lg bg-blue-1": pathname.replace("/", "") === icon,
  });

  return (
    <Link href={`/${icon}`}>
      <div className="cursor-pointer">
        <div className={activeClass}>
          <Image
            src={`/svg/icon-${icon}.svg`}
            alt="Dashboard"
            height={24}
            width={24}
          />
          <div>{children}</div>
        </div>
      </div>
    </Link>
  );
};

export default SidebarItem;
