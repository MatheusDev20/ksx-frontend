import React from 'react'
import { BaseLayout } from '../components/Layout'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <BaseLayout>{children}</BaseLayout>
}
