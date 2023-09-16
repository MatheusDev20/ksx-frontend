'use client'

import { getEmployeeList, getHomePageData } from '../api/functions'
import { CardList } from './components/CardList'
import { Header } from './components/Header'
import { getCookie } from 'cookies-next'

export default function Page() {
  const token = getCookie('accessToken')
  const employeeList = getEmployeeList(token ?? '')

  return (
    <div className="flex flex-col md:flex-col sm:h-full bg-gray-50 max-w-full">
      <Header employeesSelected={3} />
      <CardList />
    </div>
  )
}
