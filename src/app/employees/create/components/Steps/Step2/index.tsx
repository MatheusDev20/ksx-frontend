import { PersonIcon } from '@/app/assets/icons'
import { CustomInput } from '@/app/components/Input'
import { CustomSelect } from '@/app/components/Select'
import { useCreateEmployeeForm } from '@/app/contexts/create-employee-form'
import React from 'react'
import { BsBuildingAdd } from 'react-icons/bs'

type Props = {
  errors: { [key: string]: string[] } | null
}
export const StepTwo = ({ errors }: Props): React.JSX.Element => {
  const { formData, setFormData } = useCreateEmployeeForm()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      stepTwo: { ...formData.stepTwo, [e.target.name]: e.target.value },
    })
  }
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      stepTwo: { ...formData.stepTwo, [e.target.name]: e.target.value },
    })
  }
  return (
    <div className="flex flex-col gap-5 w-full items-start ml-10">
      <div className="flex gap-3 w-full p-1.5">
        <CustomSelect
          onChange={(e) => handleSelect(e)}
          wSize="medium"
          name="department"
          error={errors ? errors.department : null}
          icon={<BsBuildingAdd />}
          label="Departamento"
          placeholder="Employee Password ..."
          type="text"
        />
        <CustomInput
          onChange={(e) => handleInput(e)}
          name="password"
          type="password"
          error={errors ? errors.lastName : null}
          wSize="medium"
          icon={<PersonIcon />}
          placeholder="Employee Stx password access..."
          label="Password Acesss"
        />
      </div>
      <div className="flex gap-3 w-full p-1.5">
        {/* TODO: Should be Dynamic and load the available positions for the selected department */}
        <CustomSelect
          onChange={(e) => handleSelect(e)}
          name="position"
          error={errors ? errors.lastName : null}
          wSize="medium"
          icon={<PersonIcon />}
          placeholder="Position..."
          label="Position"
        />
        <CustomInput
          onChange={(e) => handleInput(e)}
          name="position"
          error={errors ? errors.lastName : null}
          wSize="medium"
          icon={<PersonIcon />}
          placeholder="Position..."
          label="Position"
        />
      </div>
    </div>
  )
}
