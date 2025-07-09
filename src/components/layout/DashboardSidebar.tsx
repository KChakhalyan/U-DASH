// "use client"

// import { Home, User, Shield } from "lucide-react"
// import Link from "next/link"
// import { useAuthStore } from "@/store/auth-store"

// export default function DashboardSidebar() {
//     const { user } = useAuthStore()

//     return (
//         <aside className="hidden md:block w-64 min-h-screen bg-gray-900 text-white p-6">
//             <h2 className="text-xl font-bold mb-8">U-DASH</h2>
//             <nav className="space-y-4">
//                 <Link href="/dashboard" className="flex items-center gap-2 hover:text-indigo-400">
//                     <Home size={18} /> Home
//                 </Link>

//                 <Link href="/dashboard/profile" className="flex items-center gap-2 hover:text-indigo-400">
//                     <User size={18} /> Profile
//                 </Link>

//                 {user?.role === "admin" && (
//                     <Link href="/dashboard/admin" className="flex items-center gap-2 hover:text-indigo-400">
//                         <Shield size={18} /> Admin Panel
//                     </Link>
//                 )}
//             </nav>
//         </aside>
//     )
// }
