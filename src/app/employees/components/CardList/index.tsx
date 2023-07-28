import React from 'react'
import { EmployeeCard } from '../Card'
import { Pagination } from '../Pagination'

type Props = {
  setSelecteds: (value: number) => void
}

export const CardList = ({ setSelecteds }: Props): React.JSX.Element => {
  return (
    <main className="flex flex-col gap-0">
      <div className="p-8 grid grid-cols-4 gap-4 w-full">
        <EmployeeCard.Wrapper>
          <EmployeeCard.Header
            employeeStatus="Active"
            setSelecteds={setSelecteds}
          />
          <EmployeeCard.Info />
          <EmployeeCard.Footer />
        </EmployeeCard.Wrapper>
        <EmployeeCard.Wrapper>
          <EmployeeCard.Header
            employeeStatus="Not Active"
            setSelecteds={setSelecteds}
          />
          <EmployeeCard.Info />
          <EmployeeCard.Footer />
        </EmployeeCard.Wrapper>
        <EmployeeCard.Wrapper>
          <EmployeeCard.Header
            employeeStatus="Active"
            setSelecteds={setSelecteds}
          />
          <EmployeeCard.Info />
          <EmployeeCard.Footer />
        </EmployeeCard.Wrapper>
        <EmployeeCard.Wrapper>
          <EmployeeCard.Header
            employeeStatus="Not Active"
            setSelecteds={setSelecteds}
          />
          <EmployeeCard.Info />
          <EmployeeCard.Footer />
        </EmployeeCard.Wrapper>
        <EmployeeCard.Wrapper>
          <EmployeeCard.Header
            employeeStatus="Active"
            setSelecteds={setSelecteds}
          />
          <EmployeeCard.Info />
          <EmployeeCard.Footer />
        </EmployeeCard.Wrapper>
        <EmployeeCard.Wrapper>
          <EmployeeCard.Header
            employeeStatus="Active"
            setSelecteds={setSelecteds}
          />
          <EmployeeCard.Info />
          <EmployeeCard.Footer />
        </EmployeeCard.Wrapper>
        <EmployeeCard.Wrapper>
          <EmployeeCard.Header
            employeeStatus="Not Active"
            setSelecteds={setSelecteds}
          />
          <EmployeeCard.Info />
          <EmployeeCard.Footer />
        </EmployeeCard.Wrapper>
        <EmployeeCard.Wrapper>
          <EmployeeCard.Header
            employeeStatus="Active"
            setSelecteds={setSelecteds}
          />
          <EmployeeCard.Info />
          <EmployeeCard.Footer />
        </EmployeeCard.Wrapper>
      </div>
      <footer className="px-8 place-self-center w-full">
        <Pagination.Wrapper>
          <Pagination.Limit />
          <Pagination.List />
        </Pagination.Wrapper>
      </footer>
    </main>
  )
}
