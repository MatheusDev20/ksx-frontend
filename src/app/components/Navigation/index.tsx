import React from 'react'
import { AiTwotoneCalendar, AiOutlineHome } from 'react-icons/ai'
import { BiTask } from 'react-icons/bi'
import { BsPersonCircle } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { NavItem } from '../NavItem'

export const Navigation = (): React.JSX.Element => {
  return (
    <nav className="flex flex-col gap-4">
      <div>
        <span className="px-4 text-xs font-semibold text-gray-400">
          General
        </span>
        {/* Nav Item */}
        <div className="flex flex-col mt-3 gap-5">
          <NavItem icon={<AiOutlineHome />} text="Home" />
          <NavItem icon={<BsPersonCircle />} text="Employees" />
          <NavItem icon={<BiTask />} text="Tasks" />
          <NavItem icon={<AiTwotoneCalendar />} text="Calendar" />
        </div>
      </div>

      <div>
        <span className="px-4 mb-7 text-xs font-semibold text-gray-400">
          Support
        </span>
        <div className="flex flex-col mt-3 gap-5">
          <NavItem icon={<FiSettings />} text="Settings" />
        </div>
      </div>
    </nav>
  )
}
