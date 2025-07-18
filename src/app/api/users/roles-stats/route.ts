// src/app/api/users/roles-stats/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    // сгруппируем пользователей по роли и посчитаем
    const data = await prisma.user.groupBy({
        by: ["role"],
        _count: { role: true },
    });

    // вернём { role: string, count: number }[]
    const result = data.map(d => ({
        role: d.role,
        count: d._count.role,
    }));

    return NextResponse.json(result);
}
