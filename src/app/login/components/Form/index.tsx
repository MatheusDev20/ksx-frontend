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
import Link from 'next/link'

export const Form = (): React.JSX.Element => {
  const [loginForm, setLogin] = useState<LoginFormData>({
    password: '',
    username: '',
  })
  const [errors, setErrors] = useState<{ [key: string]: string[] } | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { veredict, errors } = await validateForm(loginForm, loginFormSchema)
    if (!veredict) {
      setErrors(errors)
    }
  }
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...loginForm, [e.target.name]: e.target.value })
  }
  return (
    <>
      <form
        // onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-5 items-center p-8 justify-items-center"
      >
        <div className="flex flex-col w-full items-center p-4">
          <CustomInput
            name="username"
            onChange={(e) => handleInput(e)}
            error={errors ? errors.username : null}
            wSize="medium"
            icon={<PersonIcon />}
            label="Username"
            placeholder="Username or STX email..."
          />

          <CustomInput
            name="password"
            type="password"
            onChange={(e) => handleInput(e)}
            error={errors ? errors.username : null}
            wSize="medium"
            icon={<LockIcon />}
            label="Password"
            placeholder="Password..."
          />
          <a className="text-sm mb-10 mt-5 cursor-pointer no-underline font-medium text-blue-800 hover:text-blue-400 dark:text-primary-500">
            Forgot password?
          </a>
          <Link href="/employees">
            <SignInButton>Login</SignInButton>
          </Link>
          {/* <SignInButton>Login</SignInButton> */}
        </div>
      </form>
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
