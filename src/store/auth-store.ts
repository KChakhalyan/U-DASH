import { create } from 'zustand'

type Role = 'admin' | 'manager' | 'user' | null

interface AuthState {
    isAuthenticated: boolean
    user: {
        name: string
        email: string
        role: Role
    } | null
    login: (userData: { name: string; email: string; role: Role }) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: true,
    user: null,
    login: (userData) => set({ isAuthenticated: true, user: userData }),
    logout: () => set({ isAuthenticated: false, user: null }),
}))
