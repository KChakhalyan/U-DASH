// src/app/api/users/[id]/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(user);
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const data = await request.json();
    const updated = await prisma.user.update({
        where: { id: params.id },
        data,
    });
    return NextResponse.json(updated);
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    await prisma.user.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
}
