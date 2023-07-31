import clsx from 'clsx'
import React, { InputHTMLAttributes, ReactNode } from 'react'
import InputMask from 'react-input-mask'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  wSize: 'small' | 'medium' | 'large'
  icon: ReactNode
  label: String
  mask?: string | Array<string | RegExp>
}

const classes = {
  mediumInput: 'w-1/2',
  largeInput: 'w-full',
  smallInput: 'w-1/4',
}

export const CustomInput = ({
  wSize,
  icon,
  mask,
  label,
  ...rest
}: CustomInputProps): React.JSX.Element => {
  return (
    <div
      className={clsx(
        {
          [classes.mediumInput]: wSize === 'medium',
          [classes.largeInput]: wSize === 'large',
          [classes.smallInput]: wSize === 'small',
        },
        'flex flex-col gap-2',
      )}
    >
      <label className="font-semibold text-sm p-2.5 text-gray-600">
        {label}
      </label>
      <div className="flex w-ful relative">
        {/* Icon */}
        <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
          <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
            {icon}
          </div>
        </div>
        {mask ? (
          <InputMask
            mask={mask}
            {...rest}
            className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
          />
        ) : (
          <input
            {...rest}
            // className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full"
            className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
          />
        )}
      </div>
    </div>
  )
}
