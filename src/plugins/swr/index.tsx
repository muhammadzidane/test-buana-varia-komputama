"use client";

import React from "react";

import { SWRConfig } from "swr";

import { customFetch } from "@/helpers";

const CustomSWRConfig: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: async (url: string) => await customFetch(url),
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default CustomSWRConfig;
