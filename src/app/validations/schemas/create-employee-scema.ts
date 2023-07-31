import { object, string } from 'yup'

export const stepOneSchema = object({
  name: string().required(),
  lastName: string().required(),
  email: string().email(),
  birthDate: string().required(),
  address: string().required(),
  phone: string().required(),
})
