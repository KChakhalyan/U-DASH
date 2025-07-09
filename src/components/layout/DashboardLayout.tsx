'use client'

import { useAuthStore } from "@/store/auth-store"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useAuthStore()
    const router = useRouter()
    const [hydrated, setHydrated] = useState(false)

    // Ставим hydrated только один раз
    useEffect(() => {
        setHydrated(true)
    }, [])

    // Проверяем только после hydration
    useEffect(() => {
        if (!hydrated) return
        if (!isAuthenticated) {
            router.push("/login")
        }
    }, [hydrated, isAuthenticated, router])

    if (!hydrated) return null
    if (!isAuthenticated) return null

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            {children}
        </div>
    )
}
