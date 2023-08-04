'use client'

import { useState } from 'react'
import { CardList } from './components/CardList'
import { Header } from './components/Header'

export default function Page() {
  const [employesSelected, setSelecteds] = useState(0)

  return (
    <div className="flex flex-col md:flex-col sm:h-full bg-gray-50 max-w-full">
      <Header employeesSelected={employesSelected} />
      <CardList setSelecteds={setSelecteds} />
    </div>
  )
}
