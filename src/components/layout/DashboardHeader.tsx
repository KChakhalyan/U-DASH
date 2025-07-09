"use client"

import { useAuthStore } from "@/store/auth-store"
import ThemeToggle from "@/components/theme-toggle"
import { useRouter } from "next/navigation"

export default function DashboardHeader() {
    const { user, logout } = useAuthStore()
    const router = useRouter()

    const handleLogout = () => {
        logout()
        router.push("/login")
    }

    return (
        <header className="flex justify-between items-center p-4 border-b bg-background">
            <div>
                Welcome, <span className="font-semibold">{user?.name}</span> ({user?.role})
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle />
                <button onClick={handleLogout} className="text-sm hover:text-red-500">Logout</button>
            </div>
        </header>
    )
}
