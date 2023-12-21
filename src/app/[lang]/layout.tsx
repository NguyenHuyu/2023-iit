import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/[lang]/globals.scss'
import { Locale, i18n } from '@/i18n.config'
import AuthProviders from '@/providers/AuthProvider'
import Header from '@/components/Layouts/Header'
import Footer from '@/components/Layouts/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IIT - Viện công nghệ & sáng tạo - SIU',
  description: 'IIT - Viện công nghệ & sáng tạo - SIU'
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <AuthProviders>
      <html lang={params.lang}>
        <body className={inter.className}>
          <Header lang={params.lang} />
          <section className='relative top-0 md:top-[5.5rem] lg:top-[6.7rem]'>{children}</section>
          <Footer lang={params.lang} />
        </body>
      </html>
    </AuthProviders>
  )
}
