/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";

import { type Metadata } from "next";

import { Button } from "@/components";

import { logoutAction } from "./actions";
import { DashboardDialog, BearCounter } from "./components";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "...",
};

const Dashboard = () => {
  return (
    <div>
      <form action={logoutAction}>
        <Button type="submit">Logout</Button>
      </form>

      <BearCounter />
      <DashboardDialog />
    </div>
  );
};

export default Dashboard;
