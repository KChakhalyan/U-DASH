import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Role = 'admin' | 'manager' | 'user' | null

interface AuthState {
    isAuthenticated: boolean
    user: {
        name: string
        email: string
        password: string
        role: Role
    } | null
    login: (userData: { name: string; email: string; password: string; role: Role }) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            user: null,
            login: (userData) => set({ isAuthenticated: true, user: userData }),
            logout: () => set({ isAuthenticated: false, user: null }),
        }),
        { name: "auth-storage" }
    )
)
