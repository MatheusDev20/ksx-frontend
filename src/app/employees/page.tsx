

import { cookies } from 'next/headers'
// import { useAuth } from '../contexts/auth-context'
import { CardList } from './components/CardList'
import { Header } from './components/Header'
import { redirect } from 'next/navigation'

export default async function Page() {
  // const { user } = useAuth()
  const cookieStore = cookies()
  const token = cookieStore.get('accessToken')
  console.log('Employees Page', token)
  if (!token) {
    redirect('/auth/login')
  }
  return (
    <div className="flex flex-col md:flex-col sm:h-full bg-gray-50 max-w-full">
      <Header employeesSelected={3} />
      <CardList />
    </div>
  )
}
