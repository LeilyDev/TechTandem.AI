
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { database } from '@/utils/database';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  university?: string;
  career?: string;
  interests: string[];
}

interface AuthStore {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (userData: Omit<User, 'id'> & { password: string }) => boolean;
}

export const useAuth = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      login: (email, password) => {
        const user = database.loginUser(email, password);
        if (user) {
          set({ user: { ...user, password: undefined } as User });
          return true;
        }
        return false;
      },
      logout: () => set({ user: null }),
      register: (userData) => {
        const user = database.registerUser(userData);
        if (user) {
          set({ user: { ...user, password: undefined } as User });
          return true;
        }
        return false;
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
