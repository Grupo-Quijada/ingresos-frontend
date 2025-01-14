import { loginUser, refreshToken } from "@/api/login";
import { Group } from "@/interfaces/user.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface User {
  id: number;
  username: string;
  email: string;
  branches: any[];
  groups: Group[];
}

interface AuthState {
  user: User | null;
  tokens: { access: string; refresh: string } | null;
  redirect: string;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  refreshAccessToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      tokens: null,
      redirect: "/",

      login: async (username, password) => {
        try {
          const response = await loginUser({ username, password });
          set({
            user: response.user,
            redirect: response.redirect,
            tokens: { access: response.access, refresh: response.refresh },
          });
          console.log("Redirijo si es necesario:", response.redirect);
        } catch (error) {
          console.error("El login fallo:", error);
          throw error;
        }
      },

      logout: () => {
        set({ user: null, tokens: null });
      },

      refreshAccessToken: async () => {
        try {
          const { tokens } = get();
          if (!tokens?.refresh) throw new Error("No refresh token available");
          const response = await refreshToken(tokens.refresh);
          set({
            tokens: { ...tokens, access: response },
          });
        } catch (error) {
          console.error("Failed to refresh token:", error);
          get().logout();
        }
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);