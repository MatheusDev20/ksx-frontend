/* eslint-disable no-unused-vars */
'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { SignInButton } from '../Buttons/sign-in-button'
import { LoginFormData } from '@/@types'
import { CustomInput } from '@/app/components/Inputs'
import { LockIcon, PersonIcon } from '@/app/assets/icons'
import { loginFormSchema } from '@/app/validations/schemas/login/login-form-schema'
import { ValidationResult } from '@/@types/yup'
import { ObjectSchema } from 'yup'
import { redirect } from 'next/navigation'
import { timeout } from '@/utils'
import { Alert } from "flowbite-react";
import { Spinner } from '@material-tailwind/react'


export const Form = (): React.JSX.Element => {
  const [errors, setErrors] = useState<{ [key: string]: string[] } | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [loginForm, setLogin] = useState<LoginFormData>({
    password: '',
    email: '',
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await timeout(3000)


    const { veredict, errors } = await validateForm(loginForm, loginFormSchema)
    if (!veredict) {
      setErrors(errors)
      return
    }
    try {
      const res = await fetch('http://localhost:3000/api/login', { method: 'POST', body: JSON.stringify(loginForm) })
      const data = await res.json()

      const { response: { statusCode, message } } = data

      if (statusCode !== 200) {
        setErrors({
          email: [message], password: [message]
        })
        setLoading(false)
        return
      }

      setLoading(false)
      redirect('employees')

    }
    catch (err) {
      console.error(err)
    }
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...loginForm, [e.target.name]: e.target.value })
  }
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-5 items-center p-8 justify-items-center"
      >
        <div className="flex flex-col w-full items-center p-4">
          <CustomInput
            name="email"
            onChange={(e) => handleInput(e)}
            error={errors ? errors.email : null}
            wSize="medium"
            icon={<PersonIcon />}
            label="Username"
            placeholder="Username or STX email..."
          />

          <CustomInput
            name="password"
            type="password"
            onChange={(e) => handleInput(e)}
            error={errors ? errors.password : null}
            wSize="medium"
            icon={<LockIcon />}
            label="Password"
            placeholder="Password..."
          />
          <a className="text-sm mb-10 mt-5 cursor-pointer no-underline font-medium text-blue-800 hover:text-blue-400 dark:text-primary-500">
            Forgot password?
          </a>
          <SignInButton>{loading ? <Spinner className='self-center' color='blue' /> : 'Login'}</SignInButton>
        </div >
      </form >
    </>
  )
}

const validateForm = async (
  formData: LoginFormData,
  schema: ObjectSchema<any>,
): Promise<ValidationResult> => {
  try {
    await schema.validate(formData, { abortEarly: false })
    return { veredict: true, errors: null }
  } catch (err: any) {
    const { inner } = err
    const errorMap: { [key: string]: string[] } = {}
    inner.forEach((error: any) => {
      const { path, errors } = error
      errorMap[path] = errors
    })
    return {
      veredict: false,
      errors: errorMap,
    }
  }
}
