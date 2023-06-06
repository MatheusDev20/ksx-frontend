import { ReactNode } from "react"
import { IconType } from "react-icons";

type Props = {
    icon: ReactNode
    text: string;
}

export const NavItem = ({icon, text}: Props): JSX.Element => {
    return (
        <div className='group flex items-center place-self-center gap-4 px-6 cursor-pointer w-5/6 hover:bg-gray-200 h-8 rounded-xl'>
            <span className='place-self-center text-sm text-gray-500 group-hover:text-blue-800 group-hover:font-semibold'>{icon}</span>
            <span className='text-sm text-gray-500 group-hover:text-blue-800 group-hover:font-semibold'>{text}</span>
        </div>
    )
}