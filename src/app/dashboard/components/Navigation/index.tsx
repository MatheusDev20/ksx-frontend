import { AiTwotoneCalendar } from "react-icons/ai"
import { NavItem } from "../NavItem"
import { HiOutlineDocumentReport } from "react-icons/hi"
import { BiMoneyWithdraw, BiTask } from "react-icons/bi"
import { BsPersonCircle } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"

interface Props {
    isExpanded: boolean;
}
export const Navigation = ({ isExpanded }: Props): JSX.Element => {
    return (
        <nav className='flex flex-col gap-4'>
        <div>
            <span className='px-4 text-xs font-semibold text-gray-400'>General</span>
            {/* Nav Item */}
            <div className='flex flex-col mt-3 gap-5'>
                <NavItem icon={<BsPersonCircle />} text="Employee" expand={isExpanded}/>
                <NavItem icon={<BiTask />} text="Task" expand={isExpanded}/>
                <NavItem icon={<BiMoneyWithdraw />} text="Payroll" expand={isExpanded}/>
                <NavItem icon={<HiOutlineDocumentReport />} text="Report" expand={isExpanded}/>
                <NavItem icon={<AiTwotoneCalendar />} text='Calendar'expand={isExpanded} />
            </div>
        </div>

        <div>
            <span className='px-4 mb-7 text-xs font-semibold text-gray-400'>Support</span>
            <div className='flex flex-col mt-3 gap-5'>
                <NavItem icon={<FiSettings />} text="Settings" expand={isExpanded} />
            </div>
        </div>
    </nav>
    )
}