'use client'
import React, { useState } from 'react'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'

export const BaseLayout = ({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element => {
  const [expand, setExpand] = useState(true)

  return (
    <main className="w-full sm:h-100 flex">
      <Sidebar expand={expand} setExpand={setExpand} />
      <div
        className={`h-screen w-full flex flex-col ${
          expand ? 'ml-64' : 'ml-28'
        } overflow-auto`}
      >
        <Header />
        {children}
      </div>
    </main>
  )
}
