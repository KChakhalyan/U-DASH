"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { User } from "@prisma/client"
import { Button } from "@/components/ui/button"

export default function UsersClientTable() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const fetchUsers = async () => {
        const res = await fetch("/api/users")
        setUsers(await res.json())
    }

    useEffect(() => { fetchUsers() }, [])

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this user?")) return
        setLoading(true)
        await fetch(`/api/users/${id}`, { method: "DELETE" })
        await fetchUsers()
        setLoading(false)
    }

    return (
        <div className="border rounded-lg overflow-auto">
            <table className="min-w-full text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        {["Name", "Email", "Role", "Actions"].map(h => (
                            <th key={h} className="px-4 py-2 text-left">{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u.id} className="border-b">
                            <td className="px-4 py-2">{u.name}</td>
                            <td className="px-4 py-2">{u.email}</td>
                            <td className="px-4 py-2 capitalize">{u.role}</td>
                            <td className="px-4 py-2 space-x-2">
                                <Button size="sm" variant="outline" onClick={() => router.push(`/dashboard/users/${u.id}`)}>
                                    Edit
                                </Button>
                                <Button size="sm" variant="destructive" disabled={loading} onClick={() => handleDelete(u.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
