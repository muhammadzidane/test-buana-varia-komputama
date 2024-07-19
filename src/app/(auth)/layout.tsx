import React from "react";

import { MainLayout } from "@/components";

const Layout: React.FC<ChildrenProps> = ({ children }) => (
  <MainLayout>{children}</MainLayout>
);

export default Layout;
