// src/app/api/users/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: Request) {
    const { name, email, role, password } = await request.json();
    const newUser = await prisma.user.create({
        data: { name, email, role, password },
    });
    return NextResponse.json(newUser, { status: 201 });
}
