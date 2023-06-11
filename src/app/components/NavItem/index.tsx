import { ReactNode } from "react"

type Props = {
    icon: ReactNode
    text: string;
    expand: boolean;
}

export const NavItem = ({icon, text, expand}: Props): JSX.Element => {
    return (
        <div className='group flex items-center place-self-center gap-4 px-6 cursor-pointer w-5/6 hover:bg-gray-200 h-8 rounded-xl'>
            <span className='place-self-center text-sm text-gray-500 group-hover:text-blue-800 group-hover:font-semibold'>{icon}</span>
            <span className={`text-sm text-gray-500 group-hover:text-blue-800 group-hover:font-semibold ${!expand ? 'hidden' : ''}`}>{text}</span>
        </div>
    )
}