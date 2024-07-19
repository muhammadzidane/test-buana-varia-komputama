import { type StateCreator } from "zustand";

const initialState = {
  bears: 0,
};

export const createBearSlice: StateCreator<BearSlice, [], [], BearSlice> = (
  set
) => ({
  ...initialState,
  increasePopulation: () => {
    set((state) => ({ bears: state.bears + 1 }));
  },
  removeAllBears: () => {
    set(initialState);
  },
});
