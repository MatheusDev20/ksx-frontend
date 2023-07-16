import { CardList } from './components/CardList'
import { Header } from './components/Header'

export default function Page() {
  return (
    <div className="flex flex-col md:flex-col sm:h-full p-3 bg-gray-50 max-w-full">
      <Header />
      <CardList />
    </div>
  )
}
