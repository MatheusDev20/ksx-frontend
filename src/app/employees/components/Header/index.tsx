import React from 'react'
import { AddEmployeeButton, FilterButton } from '../Buttons/buttons'

export const Header = (): React.JSX.Element => {
  return (
    <header className="flex justify-between w-full p-8">
      {/* Filter and Total of employees */}
      <div className="flex gap-20 p-2">
        <span className="text-2xl text-blue-800">42 Employees</span>
        <FilterButton />
      </div>

      {/* Rest of infos and actions that i dont know Yet */}
      <div className="flex gap-20 mr-12 p-2 items-center">
        <div className="flex gap-4">
          <span className="font-semibold text-blue-800 text-lg">5</span>
          <p className="font-semibold text-lg">Selected</p>
        </div>
        <AddEmployeeButton />
      </div>
    </header>
  )
}
