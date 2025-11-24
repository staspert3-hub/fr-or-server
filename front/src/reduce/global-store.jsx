import { create } from "zustand";
import { persist } from "zustand/middleware";

export default create(
  persist(
    (set, get) => ({
      login: '',
      logFT: false,

      setLogin: (login) => {
        set({
          login: login,
          logFT: true,
        });
      },

      logout: () => {
        set({
          login: '',
          logFT: false,
        });
      }
    }),
    { name: 'login' }
  )
);
