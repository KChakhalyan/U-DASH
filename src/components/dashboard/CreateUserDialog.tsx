
"use client"

import { useState } from "react"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Props {
    onSuccess: () => void
}

export default function CreateUserDialog({ onSuccess }: Props) {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("user")
    const [loading, setLoading] = useState(false)

    const handleCreate = async () => {
        setLoading(true)
        console.log("››› POST /api/users:", { name, email, role });
        await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, role, password: "secret" }),
        })

        setLoading(false)
        setOpen(false)
        onSuccess()
        setName(""); setEmail(""); setRole("user")
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="default">Add User</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>New User</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label>Name</Label>
                        <Input value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                        <Label>Email</Label>
                        <Input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                    </div>
                    <div className="grid gap-2">
                        <Label>Role</Label>
                        <select
                            className="border rounded px-2 py-1"
                            value={role}
                            onChange={e => setRole(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="manager">Manager</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </div>
                <DialogFooter>
                    <Button disabled={loading} onClick={handleCreate}>
                        {loading ? "Creating..." : "Create"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
