"use client"

import { useAuthStore } from "@/store/auth-store"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { ReactNode } from "react"
import DashboardLayout from "@/components/layout/DashboardLayout"

export default function DashboardPageLayout({ children }: { children: ReactNode }) {
    const { isAuthenticated } = useAuthStore()
    const router = useRouter()
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        setHydrated(true)
    }, [])

    useEffect(() => {
        if (hydrated && !isAuthenticated) {
            router.push("/login")
        }
    }, [hydrated, isAuthenticated, router])

    if (!hydrated) return null  // Предотвращаем мигание

    return <DashboardLayout>{children}</DashboardLayout>
}
