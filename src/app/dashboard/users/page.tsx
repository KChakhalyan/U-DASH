"use client"

import { useState, useEffect } from "react"
import { User } from "@prisma/client"
import UsersClientTable from "@/components/dashboard/UsersClientTable"
import CreateUserDialog from "@/components/dashboard/CreateUserDialog"

export default function UsersPage() {
    const [refresh, setRefresh] = useState(false)

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">User Management</h1>
                <CreateUserDialog onSuccess={() => setRefresh(!refresh)} />
            </div>
            <UsersClientTable key={String(refresh)} />
        </div>
    )
}
