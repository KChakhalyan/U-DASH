"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { useMemo } from "react"

type User = {
    id: string
    name: string
    email: string
    role: "admin" | "manager" | "user"
}

const users: User[] = [
    { id: "1", name: "Alice", email: "alice@mail.com", role: "admin" },
    { id: "2", name: "Bob", email: "bob@mail.com", role: "manager" },
    { id: "3", name: "Charlie", email: "charlie@mail.com", role: "user" },
]

export default function UserTable() {
    const columns = useMemo<ColumnDef<User>[]>(
        () => [
            {
                header: "Name",
                accessorKey: "name",
            },
            {
                header: "Email",
                accessorKey: "email",
            },
            {
                header: "Role",
                accessorKey: "role",
            },
        ],
        []
    )

    const table = useReactTable({
        data: users,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="border rounded-lg overflow-x-auto">
            <table className="min-w-full text-sm">
                <thead className="bg-gray-100">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="px-4 py-2 text-left">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="border-b">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="px-4 py-2">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
