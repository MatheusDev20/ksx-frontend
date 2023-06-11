import { Header } from "../Header"
import { Sidebar } from "../Sidebar"

export const BaseLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
   return ( 
    <main className='w-full md:h-screen sm:h-100 flex'>
        <Sidebar />
            <div className='w-full'>
                <Header />
                {children}
            </div>
        </main>
   )
}