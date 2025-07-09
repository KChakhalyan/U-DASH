'use client'

import { useAuthStore } from "@/store/auth-store"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import DashboardLayout from "@/components/layout/DashboardLayout"

export default function DashboardPageLayout({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useAuthStore()
    const router = useRouter()
    const [hydrated, setHydrated] = useState(false)

    // Один раз ставим hydrated
    useEffect(() => {
        setHydrated(true)
    }, [])

    // Только после гидрации проверяем auth
    useEffect(() => {
        if (hydrated) {
            if (!isAuthenticated) {
                router.push("/login")
            }
        }
    }, [hydrated, isAuthenticated, router])

    if (!hydrated) return null

    return <DashboardLayout>{children}</DashboardLayout>
}
