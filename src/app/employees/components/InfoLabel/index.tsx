import React from 'react'

interface Props {
  title: string
  info: string
}

export const InfoLabel = ({ title, info }: Props): React.JSX.Element => {
  return (
    <section className=" bg-slate-100 rounded-lg p-5 flex flex-col items-start justify-center w-full h-14">
      <span className="text-sm text-gray-400 font-bold">{title}</span>
      <p className="text-md font-semibold text-gray-500">{info}</p>
    </section>
  )
}
