import { Header } from './components/Header'

export default function Page() {
  return (
    <div className="flex flex-col md:flex-col sm:h-full gap-10 p-3 bg-gray-50 max-w-full">
      <Header />

      {/* Card List */}
      <div>List</div>
    </div>
  )
}
