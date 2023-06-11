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
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="./app/assets/imgs/logo1.png" sizes="any" />
      </head>
      <body>
        {children}
        </body>
    </html>
  )
}
