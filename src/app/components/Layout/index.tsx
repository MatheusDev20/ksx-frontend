
import React from 'react'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const getMe = async (token: string) => {
  const res = await fetch(`${process.env.API_URL}/employee/me`, {
    method: 'GET',
    headers: { 'api_token': token },
  })
  return await res.json()
}
export default async function BaseLayout({ children }: { children: React.ReactNode }) {
  const token = cookies().get('accessToken')?.value
  if (!token) redirect('/auth/login')
  const { body } = await getMe(token)

  return (
    <div className="flex">
      <Sidebar />
      <div className={`w-full flex flex-col ml-[80px] md:ml-[230px] h-screen`}>
        <Header user={body} />
        <main className="flex-1 bg-gray-50 p-3">{children}</main>
      </div>
    </div>
  )
}
