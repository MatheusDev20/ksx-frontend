import React from 'react'
import { EmployeeCard } from '../Card'

export const CardList = (): React.JSX.Element => {
  return (
    <div className="border border-solid border-red-800 p-8 grid grid-cols-4 gap-4 w-full">
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
    </div>
  )
}
