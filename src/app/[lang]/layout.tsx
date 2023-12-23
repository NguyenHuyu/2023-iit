import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/[lang]/globals.scss'
import { Locale, i18n } from '@/i18n.config'
import AuthProviders from '@/providers/AuthProvider'
import Header from '@/components/Layouts/Header'
import Footer from '@/components/Layouts/Footer'
import Script from 'next/script'
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

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'IIT - Viện công nghệ & sáng tạo - SIU',
  image: {
    '@type': 'ImageObject',
    width: 1080,
    height: 1080
  },
  telephone: '19006035',
  url: 'https://iit.siu.edu.vn/',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8C 11 16 18 Tống Hữu Định, Thảo Điền, Quận 2, Thành phố Hồ Chí Minh,Thủ Đức',
    addressLocality: 'Ho Chi Minh',
    postalCode: '700000',
    addressRegion: 'Ho Chi Minh',
    addressCountry: 'VN'
  },
  priceRange: '1000 - 1000000000',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '21:00'
    }
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '10.79664498748942',
    longitude: '106.65856519879867'
  }
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
          <Header params={params} />
          <section className='relative top-0 md:top-[5.5rem] lg:top-[6.7rem]'>{children}</section>
          <Footer lang={params.lang} />
          <Script
            id='json-ld'
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
            strategy='lazyOnload'
          />
        </body>
      </html>
    </AuthProviders>
  )
}
