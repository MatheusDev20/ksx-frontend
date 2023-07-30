import { CustomInput } from '@/app/components/Input'
import React from 'react'
// Name, Email, Password, BirthDate, Address
export const StepOne = (): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-5 w-full items-start ml-10">
      {/* Name and Last Name */}
      <div className="flex gap-3 w-full p-1.5">
        <CustomInput
          wSize="medium"
          label="First Name"
          placeholder="Katarine Devito..."
          type="text"
        />
        <CustomInput
          wSize="medium"
          placeholder="Last Name..."
          label="Last Name"
        />
      </div>
      {/* Date of Birth and Email Address */}
      <div className="flex gap-3 w-full p-1.5">
        <CustomInput
          wSize="medium"
          label="Birth Date"
          mask="99/99/9999"
          placeholder="09/09/1999..."
        />
        <CustomInput
          wSize="medium"
          label="Email"
          placeholder="katarine@stx.com..."
        />
      </div>
      {/* Address  and Phone */}
      <div className="flex p-1.5 w-full gap-3">
        <CustomInput
          wSize="medium"
          label="Address"
          placeholder="134 Trainer Avenue Bloomington IL Illinois 61701"
        />
        <CustomInput
          wSize="medium"
          label="Phone"
          mask="(99)-99999-9999"
          placeholder="(32) 999850138 ..."
        />
      </div>
    </div>
  )
}
