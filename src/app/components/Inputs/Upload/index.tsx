import React from 'react'
import uploadIcon from '../../../assets/svgs/upload.svg'
import Image from 'next/image'

export const UploadInput = (): React.JSX.Element => {
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
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
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  )
}
