import React from 'react'
import { BaseLayout } from '../components/Layout'
import { CreateEmployeeFormProvider } from '../contexts/create-employee-form'

export default function EmployeesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CreateEmployeeFormProvider>
      <BaseLayout>{children}</BaseLayout>
    </CreateEmployeeFormProvider>
  )
}
