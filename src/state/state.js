import { create } from "zustand";

export const useMainState = create((set) => ({
  isShowModal: false,
  isSuccessSendContactForm: false,

  changeShowModal: (value) => set(() => ({ isShowModal: value })),
  changeSuccessSendContactForm: (value) =>
    set(() => ({ isSuccessSendContactForm: value })),
}));
