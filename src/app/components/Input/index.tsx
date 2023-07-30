import clsx from 'clsx'
import React, { InputHTMLAttributes } from 'react'
import InputMask from 'react-input-mask'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  wSize: 'small' | 'medium' | 'large'
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
      {mask ? (
        <InputMask
          mask={mask}
          {...rest}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        />
      ) : (
        <input
          {...rest}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        />
      )}
    </div>
  )
}
