import './global.css'
export const metadata = {
  title: 'Stx System',
  description: 'Intern system to manage employee and tasks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
