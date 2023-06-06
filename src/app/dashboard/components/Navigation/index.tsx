import { AiTwotoneCalendar } from "react-icons/ai"
import { NavItem } from "../NavItem"
import { HiOutlineDocumentReport } from "react-icons/hi"
import { BiMoneyWithdraw, BiTask } from "react-icons/bi"
import { BsPersonCircle } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"

export const Navigation = (): JSX.Element => {
    return (
        <nav className='flex flex-col gap-4'>
        <div>
            <span className='px-4 text-xs font-semibold text-gray-400'>General</span>
            {/* Nav Item */}
            <div className='flex flex-col mt-3 gap-5'>
                <NavItem icon={<BsPersonCircle />} text="Employee" />
                <NavItem icon={<BiTask />} text="Task"/>
                <NavItem icon={<BiMoneyWithdraw />} text="Payroll"/>
                <NavItem icon={<HiOutlineDocumentReport />} text="Report"/>
                <NavItem icon={<AiTwotoneCalendar />} text='Calendar' />
            </div>
        </div>

        <div>
            <span className='px-4 mb-7 text-xs font-semibold text-gray-400'>Support</span>
            <div className='flex flex-col mt-3 gap-5'>
                <NavItem icon={<FiSettings />} text="Settings" />
            </div>
        </div>
    </nav>
    )
}