"use client";

import { useEffect, useState } from "react";
import {
    PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

type Stat = { role: string; count: number };

const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];

export default function RoleDistributionChart() {
    const [data, setData] = useState<Stat[]>([]);

    useEffect(() => {
        fetch("/api/users/roles-stats")
            .then(r => r.json())
            .then(setData)
            .catch(console.error);
    }, []);

    return (
        <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="count"
                        nameKey="role"
                        innerRadius={40}
                        outerRadius={80}
                        label
                    >
                        {data.map((_, i) => (
                            <Cell key={i} fill={COLORS[i % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
