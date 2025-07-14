import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
                <CardHeader>
                    <CardTitle>Total Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">1,234</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">$12,345</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>New Orders</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">87</p>
                </CardContent>
            </Card>
        </div>
    )
}
