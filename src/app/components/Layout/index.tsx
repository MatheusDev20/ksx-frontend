'use client'
import React from 'react'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'

export const BaseLayout = ({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element => {
  return (
    <div className="flex">
      <Sidebar />
      <div className={`w-full flex flex-col ml-[50px] md:ml-[230px] h-screen`}>
        <Header />
        <main className="flex-1 bg-gray-50">{children}</main>
      </div>
    </div>
  )
}
