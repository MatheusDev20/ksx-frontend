import { UploadInput } from '@/app/components/Inputs'
import React from 'react'
import genericAvatar from '../../../../../assets/imgs/generic-avatar.jpg'
import Image from 'next/image'
import { useCreateEmployeeForm } from '@/app/contexts/create-employee-form'

type Props = {
  errors: { [key: string]: string[] } | null
}
export const StepThree = ({ errors }: Props): React.JSX.Element => {
  const {
    formData: { stepThree },
  } = useCreateEmployeeForm()
  return (
    <div className="flex w-full p-12 gap-5 items-center">
      {!stepThree.avatar ? (
        <Image
          src={genericAvatar}
          alt="preview"
          width={120}
          height={120}
          className="rounded-full"
        />
      ) : (
        <Image
          src={URL.createObjectURL(stepThree.avatar)}
          alt="preview"
          width={120}
          height={120}
          className="rounded-full"
        />
      )}
      <UploadInput />
    </div>
  )
}
