import { Sidebar } from "../components/Sidebar";

export default function DashboardLayout({children}: { children: React.ReactNode }) {
    return (
    <main className='w-full md:h-screen sm:h-100 flex'>
        <Sidebar />
        {children}
    </main>
    )
}