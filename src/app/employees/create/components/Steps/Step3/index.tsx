import { UploadInput } from '@/app/components/Inputs'
import React from 'react'
import rAvatar from '../../../../../assets/imgs/fake-avatar.jpg'
import Image from 'next/image'

export const StepThree = (): React.JSX.Element => {
  return (
    <div className="flex w-full p-12 gap-5 items-center">
      <Image src={rAvatar} alt="preview" className="w-48 h-48 rounded-full" />
      <UploadInput />
    </div>
  )
}
