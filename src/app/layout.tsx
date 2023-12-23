import type { Metadata } from 'next'
import '@/app/[lang]/globals.scss'
import { Inter } from 'next/font/google'
import type { Locale } from '@/i18n.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IIT - Viện công nghệ & sáng tạo - SIU',
  description: 'IIT - Viện công nghệ & sáng tạo - SIU',
  metadataBase: new URL('https://iit.siu.edu.vn/'),
  icons: {
    icon: '/favicon.ico'
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'IIT - Viện công nghệ & sáng tạo - SIU',
    description: 'IIT - Viện công nghệ & sáng tạo - Trường Đại học Quốc tế Sài Gòn',
    url: `https://iit.siu.edu.vn`,
    images: [
      {
        url: `https://iit.siu.edu.vn/favicon.ico`,
        width: 800,
        height: 600
      }
    ]
  }
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
