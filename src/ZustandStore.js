import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  name: "John",

  increment: () =>
    set((state) => ({
      count: state.count + 1
    })),

  changeName: () =>
    set({
      name: "Alex"
    })
}));