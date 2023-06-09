'use client'

import { useForm } from "react-hook-form";
import { SignInButton } from "../Buttons/sign-in-button"
import { LoginFormData } from "@/@types";

export const Form = (): JSX.Element => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginFormData>();
    const onSubmit = (data: LoginFormData) => console.log('Send to server', data);

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 items-center p-8 justify-items-center'>
            <div className='flex flex-col w-full items-center p-4'>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm text-zinc-500 tracking-tighter'>Username or email</label>
                    <input
                        {...register('username' ,{ required: true })}
                        className="w-72 p-2 text-primary border border-solid rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"  />
                </div>
                <div
                    className='flex flex-col gap-2'>
                    <label className='text-sm text-zinc-500 tracking-tighter'>Your password</label>
                    <input {...register('password',{ required: true })} name='password' type='password' className="w-72 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"  />
                    <a className="text-sm mb-10 cursor-pointer no-underline font-medium text-blue-800 hover:text-blue-400 dark:text-primary-500">Forgot password?</a>
                </div>
                
                <SignInButton>Log in</SignInButton>
            </div>
        </form>
    </>
    )
}