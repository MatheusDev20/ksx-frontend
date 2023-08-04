import React, { ChangeEvent } from 'react'
import uploadIcon from '../../../assets/svgs/upload.svg'
import Image from 'next/image'
import { useCreateEmployeeForm } from '@/app/contexts/create-employee-form'

type Props = {
  errors?: string[]
}
export const UploadInput = ({ errors }: Props): React.JSX.Element => {
  const { setFormData, formData } = useCreateEmployeeForm()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      stepThree: {
        ...formData.stepThree,
        avatar: e.target.files ? e.target.files[0] : null,
      },
    })
  }
  return (
    <div className="flex items-center justify-center w-full">
      <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Image src={uploadIcon} alt="upload-icon" className="w-8 h-8" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span>
            or drag and drop
          </p>
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
            PNG, JPG
          </p>
        </div>
        <input type="file" className="hidden" onChange={handleChange} />
      </label>
      {errors && errors[0]}
    </div>
  )
}
