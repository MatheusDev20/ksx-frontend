import React from 'react'
import { EmployeeCard } from '../Card'
export const CardList = (): React.JSX.Element => {
  return (
    <div className="p-8 grid grid-cols-4 gap-4 w-full">
      <EmployeeCard.Wrapper>
        <EmployeeCard.Header employeeStatus="Not Active" />
        <EmployeeCard.Info />
        <EmployeeCard.Content />
      </EmployeeCard.Wrapper>
      <EmployeeCard.Wrapper>
        <EmployeeCard.Header employeeStatus="Not Active" />
        <EmployeeCard.Info />
        <EmployeeCard.Content />
      </EmployeeCard.Wrapper>
      <EmployeeCard.Wrapper>
        <EmployeeCard.Header employeeStatus="Not Active" />
        <EmployeeCard.Info />
        <EmployeeCard.Content />
      </EmployeeCard.Wrapper>
      <EmployeeCard.Wrapper>
        <EmployeeCard.Header employeeStatus="Not Active" />
        <EmployeeCard.Info />
        <EmployeeCard.Content />
      </EmployeeCard.Wrapper>
      <EmployeeCard.Wrapper>
        <EmployeeCard.Header employeeStatus="Not Active" />
        <EmployeeCard.Info />
        <EmployeeCard.Content />
      </EmployeeCard.Wrapper>
      <EmployeeCard.Wrapper>
        <EmployeeCard.Header employeeStatus="Not Active" />
        <EmployeeCard.Info />
        <EmployeeCard.Content />
      </EmployeeCard.Wrapper>
      <EmployeeCard.Wrapper>
        <EmployeeCard.Header employeeStatus="Not Active" />
        <EmployeeCard.Info />
        <EmployeeCard.Content />
      </EmployeeCard.Wrapper>
      <EmployeeCard.Wrapper>
        <EmployeeCard.Header employeeStatus="Not Active" />
        <EmployeeCard.Info />
        <EmployeeCard.Content />
      </EmployeeCard.Wrapper>
    </div>
  )
}
