import { create } from "zustand";

export const useMainState = create((set) => ({
  isShowModal: false,
  changeShowModal: () => set((state) => ({ isShowModal: !state.isShowModal })),
}));
