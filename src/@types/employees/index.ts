export type StepOneData = {
  name: string
  lastName: string
  birthDate: string
  email: string
  address: string
  phone: string
}

export type StepTwoData = {
  position: string
  department: string
  hireDate: string
}

export type StepThreeData = {
  avatar: File | null
}

export type CreateEmployeeForm = {
  stepOne: StepOneData
  stepTwo: StepTwoData
}
