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
        console.log("Hydrated:", hydrated)
        console.log("isAuthenticated:", isAuthenticated)
        console.log("user:", useAuthStore.getState().user)

        if (hydrated && !isAuthenticated) {
            router.push("/login")
        }
    }, [hydrated, isAuthenticated, router])

    if (!hydrated) return <div className="p-4">Loading...</div>  // Можно вставить спиннер

    return <DashboardLayout>{children}</DashboardLayout>
}
