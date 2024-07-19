"use server";

import { signOut } from "@/helpers";

export const logoutAction = async () => {
  await signOut();
};
