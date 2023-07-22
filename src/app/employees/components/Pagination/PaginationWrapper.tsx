import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const PaginationWrapper = ({ children }: Props) => {
  return (
    <div className="flex p-3 items-center justify-between gap-4 w-full">
      {children}
    </div>
  )
}
