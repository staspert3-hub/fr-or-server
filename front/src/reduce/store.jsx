import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(persist((set) =>({
    count: 0,
    setCount: () => set((prev) => ({count: prev.count + 1})),
    resetCount: () => set({count: 0}),
}),{name: "store"}))