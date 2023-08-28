

import { signIn } from 'next-auth/react'
import { CardList } from './components/CardList'
import { Header } from './components/Header'

const fetchEmployee = async () => {
  const data = await fetch('http://localhost:3001/api/v1/employee?name=Managers&page=1&limit=10')
  return data.json()
}
export default async function Page() {
  // const employees = await fetchEmployee()
  return (
    <div className="flex flex-col md:flex-col sm:h-full bg-gray-50 max-w-full">
      <Header employeesSelected={3} />
      <CardList />
    </div>
  )
}
