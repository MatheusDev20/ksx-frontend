import React from 'react'
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="w-full h-screen">{children}</main>
}
