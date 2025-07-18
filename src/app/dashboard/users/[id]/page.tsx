"use client"

import { useRouter, useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function EditUserPage() {
    const params = useParams()
    const id = params?.id as string
    const router = useRouter()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("user")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(`/api/users/${id}`)
            .then(res => res.json())
            .then((u) => {
                setName(u.name)
                setEmail(u.email)
                setRole(u.role)
            })
    }, [id])

    const handleSave = async () => {
        setLoading(true)
        await fetch(`/api/users/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, role }),
        })
        setLoading(false)
        router.push("/dashboard/users")
    }

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">Edit User</h1>
            <div className="grid gap-4">
                <div>
                    <Label>Name</Label>
                    <Input value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <Label>Email</Label>
                    <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <Label>Role</Label>
                    <select value={role} onChange={e => setRole(e.target.value)} className="border rounded px-2 py-1">
                        <option value="user">User</option>
                        <option value="manager">Manager</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <Button onClick={handleSave} disabled={loading}>
                    {loading ? "Saving..." : "Save"}
                </Button>
            </div>
        </div>
    )
}
