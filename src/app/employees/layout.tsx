import { Sidebar } from "../components/Sidebar";

export default function EmployeesLayout ({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <main className='w-full md:h-screen sm:h-100 flex'>
            <Sidebar />
            {children}
        </main>
        )
}