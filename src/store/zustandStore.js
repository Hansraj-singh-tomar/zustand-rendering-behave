import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  name: "Guest",
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  setName: (name) => set({ name }),
}));

export default useStore;
