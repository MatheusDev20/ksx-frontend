import React from 'react'
import { BiFilterAlt } from 'react-icons/bi'

export const Header = (): React.JSX.Element => {
  return (
    <header className="flex justify-between w-full p-8">
      {/* Filter and Total of employees */}
      <div className="flex gap-20">
        <span className="text-2xl text-blue-800">42 Employees</span>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:border-transparent hover:bg-blue-500">
          <div className="flex gap-2 items-center">
            <BiFilterAlt size={20} />
            <span className="text-sm tracking-wide">Filter</span>
          </div>
        </button>
      </div>

      {/* Rest of infos and actions that i dont know Yet */}
      <div>Actions</div>
    </header>
  )
}
