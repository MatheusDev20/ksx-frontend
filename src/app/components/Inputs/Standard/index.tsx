import clsx from 'clsx'
import React, { InputHTMLAttributes, ReactNode } from 'react'
import { CiCircleAlert } from 'react-icons/ci'
import InputMask from 'react-input-mask'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  wSize: 'small' | 'medium' | 'large'
  icon: ReactNode
  label: String
  mask?: string | Array<string | RegExp>
  error: string[] | null
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
  error,
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
          <div className="flex flex-col gap-2 w-full">
            <InputMask
              mask={mask}
              {...rest}
              className={clsx(
                { 'border-red-600': error },
                'text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12',
              )}
            />
          </div>
        ) : (
          <input
            {...rest}
            className={clsx(
              { 'border-red-600': error },
              'text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12',
            )}
          />
        )}
      </div>
      {error && (
        <div className="flex gap-4 items-center">
          <CiCircleAlert className="text-red-500" />
          <span className="text-sm text-red-500 font-semibold">{error[0]}</span>
        </div>
      )}
    </div>
  )
}
