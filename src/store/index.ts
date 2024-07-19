import { create } from "zustand";

import { createBearSlice } from "./bear";
import { createToastSlice } from "./toast";

export const useBoundStore = create<BearSlice & ToastSlice>((...a) => ({
  ...createBearSlice(...a),
  ...createToastSlice(...a),
}));
