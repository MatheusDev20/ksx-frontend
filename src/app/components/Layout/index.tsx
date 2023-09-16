import React from 'react'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getHomePageData, getMe } from '@/app/api/functions'
import { Provider } from '@/app/providers'

export default async function BaseLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const token = cookies().get('accessToken')?.value
  if (!token) redirect('/auth/login')

  const { loggedUser, employeeList } = await getHomePageData(token)

  return (
    <div className="flex">
      <Sidebar />
      <div className={`w-full flex flex-col ml-[80px] md:ml-[230px] h-screen`}>
        <Provider>
          <Header user={loggedUser} />
          <main className="flex-1 bg-gray-50 p-3">{children}</main>
        </Provider>
      </div>
    </div>
  )
}
