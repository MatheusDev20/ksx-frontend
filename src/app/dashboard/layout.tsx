export default function DashboardLayout({children}: { children: React.ReactNode }) {
    return (
    <main className='w-full md:h-screen sm:h-100 flex'>
        {children}
    </main>
    )
} 