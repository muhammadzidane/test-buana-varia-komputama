import { create } from "zustand";

import { createBearSlice } from "./bear";
import { createToastSlice } from "./toast";

export const useBoundStore = create<ToastSlice & BearSlice>((...a) => ({
  ...createToastSlice(...a),
  ...createBearSlice(...a),
}));
