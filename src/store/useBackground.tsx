import { create } from "zustand";

type Store = {
  background: string;
  setBackground: (background: string) => void;
};

export const useBackground = create<Store>()((set) => ({
  background: "#fff9c4",
  setBackground: (background) => set(() => ({ background })),
}));
