"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 800 },
    { name: 'Mar', value: 1200 },
    { name: 'Apr', value: 600 },
    { name: 'May', value: 900 },
    { name: 'Jun', value: 1500 },
]

export default function LineCharts() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Monthly Sales</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
