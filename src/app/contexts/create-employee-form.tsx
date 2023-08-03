'use client'
import { StepOneData, StepTwoData } from '@/@types/employees'
import React, { createContext, useContext, useMemo, useState } from 'react'

type ContextData = {
  stepOne: StepOneData
  stepTwo: StepTwoData
}

type ContextProps = {
  formData: ContextData
  setFormData: React.Dispatch<React.SetStateAction<ContextData>>
}

export const CreateEmployeeForm = createContext<ContextProps | null>(null)

type Props = {
  children: React.ReactNode
}
const CreateEmployeeFormProvider: React.FC<Props> = ({ children }: Props) => {
  const [formData, setFormData] = useState<ContextData>({
    stepOne: {
      name: '',
      birthDate: '',
      address: '',
      email: '',
      lastName: '',
      phone: '',
    },
    stepTwo: {},
  } as ContextData)

  // Use to memoized the object to avoid unecessary re-renders
  const contextValue = useMemo(
    () => ({ formData, setFormData }),
    [formData, setFormData],
  )

  return (
    <CreateEmployeeForm.Provider value={contextValue}>
      {children}
    </CreateEmployeeForm.Provider>
  )
}

const useCreateEmployeeForm = (): ContextProps => {
  const context = useContext(CreateEmployeeForm)
  if (context == null) {
    throw new Error('useModalContext must be used within a provider')
  }
  return context
}

export { CreateEmployeeFormProvider, useCreateEmployeeForm }
