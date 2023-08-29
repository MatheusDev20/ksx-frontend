

import { CardList } from './components/CardList'
import { Header } from './components/Header'
import { redirect } from 'next/navigation'

export default async function Page() {

  return (
    <div className="flex flex-col md:flex-col sm:h-full bg-gray-50 max-w-full">
      <Header employeesSelected={3} />
      <CardList />
    </div>
  )
}
