import { type StateCreator } from "zustand";

const initialState = {
  descriptionToast: "Description",
  titleToast: "Title",
  isOpenToast: false,
};

export const createToastSlice: StateCreator<ToastSlice, [], [], ToastSlice> = (
  set
) => ({
  ...initialState,
  openToast: ({ description, title }) => {
    set(() => ({
      descriptionToast: description,
      isOpenToast: true,
      titleToast: title,
    }));
  },
  closeToast: () => {
    set(initialState);
  },
});
