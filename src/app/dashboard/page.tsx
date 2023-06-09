import Image from "next/image";
import logo from './assets/logo1.png'
import { Navigation } from "./components/Navigation";
import { ThemeSwitch } from "./components/ThemeSwitch";

export default function Page() {
    return (
       <aside className='flex w-[300px] h-screen border border-solid flex-col bg-gray-50 gap-2 justify-between'>
        <div>
            <header className='flex items-center justify-center py-3'>
                <Image src={logo} alt='KSX' className='place-self-center'/>
            </header>
            <Navigation />
        </div>
            <ThemeSwitch />
       </aside>
    )
}