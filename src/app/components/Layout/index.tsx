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
    <main className="w-full sm:h-100 flex">
      <Sidebar />
      <div
        className={`w-full flex flex-col ml-[50px] md:ml-[280px] overflow-auto`}
      >
        <Header />
        {children}
      </div>
    </main>
  )
}
