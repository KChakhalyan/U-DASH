import DashboardSidebar from "@/components/layout/DashboardSidebar"
import DashboardHeader from "@/components/layout/DashboardHeader"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <DashboardSidebar />
            <div className="flex-1 flex flex-col">
                <DashboardHeader />
                <main className="p-6 bg-muted min-h-[calc(100vh-64px)]">
                    {children}
                </main>
            </div>
        </div>
    )
}
