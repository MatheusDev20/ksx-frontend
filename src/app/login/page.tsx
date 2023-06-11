
import Image from 'next/image'
import sideImage from '../assets/imgs/login_side.jpg'
import logo from '../assets/imgs/logo1.png'
import { Form } from './components/Form';

export default function Page() {
    return (
        <main className='flex flex-col md:flex-row sm:h-full'>
            <aside className='md:w-1/2 sm:w-full sm:h-full flex items-center py-12'>
                <main className='flex flex-col p-12 mb-4 w-full'>
                    <div className='flex w-full items-center justify-center'>
                        <Image src={logo} alt='KSX' className='place-self-center ml-28'/>
                    </div>
                    {/* Welcome Messages */}
                    <div className='flex flex-col'>
                        <div className='place-self-center flex flex-col gap-8'>
                            <h1 className='place-self-center text-3xl font-semibold text-blue-800'>Welcome to <span className='tracking-wider text-blue-400'>KSX</span></h1>
                            <p className='text-gray-500 tracking-tighter text-lg'>Welcome back, please enter your details</p>
                        </div>
                    <Form />
                    </div>
                </main>
            </aside>

            <aside className='md:w-1/2 h-full bg-cover bg-center hidden md:flex' style={{backgroundImage: `url(${sideImage.src})`}} />
        </main>
    )
}