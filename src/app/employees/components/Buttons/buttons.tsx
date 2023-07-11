import { BiFilterAlt } from 'react-icons/bi'
import React from 'react'
import { BsPersonPlusFill } from 'react-icons/bs'

export const FilterButton = (): React.JSX.Element => {
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:border-transparent hover:bg-blue-500">
      <div className="flex gap-2 items-center">
        <BiFilterAlt size={20} />
        <span className="text-sm tracking-wide">Filter</span>
      </div>
    </button>
  )
}

export const AddEmployeeButton = (): React.JSX.Element => {
  return (
    <button
      className="bg-transparent
        text-blue-800 border border-solid
          border-blue-800 px-4 py-2 rounded 
          hover:border-transparent hover:text-white hover:bg-blue-600 
          transition duration-300 ease-in-out"
    >
      <div className="flex gap-2 items-center">
        <BsPersonPlusFill size={20} />
        <span className="text-sm tracking-wide">Add new Employee</span>
      </div>
    </button>
  )
}
