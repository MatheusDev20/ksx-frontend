import React from 'react'
import EditIcon from '../../../assets/svgs/edit.svg'
import Image from 'next/image'
type TabTitleProps = {
  title: string
}

export const TabTitle = ({ title }: TabTitleProps): React.JSX.Element => {
  return (
    <header className="flex justify-between p-8">
      <span className="text-2xl text-slate-800">{title}</span>
      <div>
        <Image className="w-6 cursor-pointer" src={EditIcon} alt="edit" />
      </div>
    </header>
  )
}
