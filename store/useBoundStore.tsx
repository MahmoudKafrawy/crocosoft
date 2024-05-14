import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBoundStore = create(
  persist(
    (set) => ({
      _hasHydrated: false,
      setHasHydrated: (state: any) => {
        set({
          _hasHydrated: state,
        });
      },
    }),
    {
      name: "bound-store",
      onRehydrateStorage: () => (state: any) => {
        state.setHasHydrated(true);
      },
    }
  )
);
