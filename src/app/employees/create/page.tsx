import React from 'react'
import { Stepper } from './components/Stepper'
import { CreateEmployeeFormProvider } from '@/app/contexts/create-employee-form'

export default function Page(): React.JSX.Element {
  return (
    <CreateEmployeeFormProvider>
      <main className="flex flex-col p-8">
        <h1 className="text-sm md:text-3xl font-semibold">
          Register new Employee
        </h1>
        <div className="flex mt-8">
          <Stepper />
        </div>
      </main>
    </CreateEmployeeFormProvider>
  )
}
