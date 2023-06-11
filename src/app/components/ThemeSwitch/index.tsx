'use client'

import Image from "next/image"
import sun from '../../assets/imgs/sun.png'
import moon from '../../assets/imgs/moon.png'
import { useState } from "react"

interface Props {
    isExpanded: boolean;
}

export const ThemeSwitch = ({ isExpanded }: Props): JSX.Element => {
    const [mode, setMode] = useState('light');
    const set = (theme: string) => {
        setMode(theme)
    }
    return (
        <div className={`${!isExpanded ? 'hidden': ''} flex sm:none place-self-center w-3/4 h-12 border border-solid border-red mb-12 rounded-xl bg-gray-200 p-1`}>
            <div onClick={() => set('light')} className={`flex gap-2 cursor-pointer justify-center items-center rounded-xl ${mode == 'light' ? 'bg-white' : ''} w-1/2`}>
                <Image src={sun} alt='sun' className='h-4 w-4 cursor-pointer '/>
                <span className='font-semibold text-sm'>Light</span>
            </div>

            <div onClick={() => set('dark')} className={`flex gap-2 cursor-pointer justify-center items-center ${mode == 'dark' ? 'bg-white' : ''} w-1/2 rounded-xl`}>
                <Image src={moon} alt='moon' className='h-4 w-4 cursor-pointer' />
                <span className='font-semibold text-sm'>Dark</span>
            </div>
        </div>
    )
}