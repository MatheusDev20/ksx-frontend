'use client'

import Image from "next/image"
import { IoIosArrowBack } from "react-icons/io"
import { GrFormNext } from 'react-icons/gr'
import logo from '../../assets/imgs/logo1.png'
import { Navigation } from "../Navigation"
import { ThemeSwitch } from "../ThemeSwitch"
import { useState } from "react"

export const Sidebar = (): JSX.Element => {
    const [expand, setExpand] = useState(true);

    const toggle = (b:boolean) => setExpand(b)

    return (
        <aside className={`flex ${expand ? 'w-[285px]' : 'w-[95px]' } h-screen border border-solid border-gray-200 flex-col bg-gray-50 gap-2 justify-between`}>
        <div className='relative'>
            <header className='flex items-center justify-center py-3'>
                <Image src={logo} alt='KSX' className='place-self-center'/>
            </header>

            {expand && (
                    <button className='absolute top-10 z-10' style={{left: '270px'}}>
                    <div onClick={() => toggle(false)} className='bg-white border hover:bg-gray-200 border-solid rounded-full flex items-center'>
                        <IoIosArrowBack className='w-6 h-6 text-blue-700'/>
                    </div>
                </button>
            )}
            {!expand && (
                    <button className='absolute top-10 z-10' style={{left: '80px'}}>
                    <div onClick={() => toggle(true)} className='bg-white border hover:bg-gray-200 border-solid rounded-full flex items-center'>
                        <GrFormNext className='w-6 h-6 text-blue-700'/>
                    </div>
                </button>
            )}
            <Navigation isExpanded={expand} />
        </div>
            <ThemeSwitch isExpanded={expand}/>
       </aside>
    )
}