'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Locale, i18n } from '@/i18n.config'
import Image from 'next/image'
import VI from '../../../public/assets/vi.png'
import EN from '../../../public/assets/en.png'

export default function LocaleSwitcher({ params }: { params: { lang: Locale } }) {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='flex flex-row md:gap-2 items-center '>
      <ul className='flex gap-x-3'>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)} className='rounded-md   px-3 py-2 text-white'>
                {locale === 'vi' ? (
                  <div className={`${params.lang === 'vi' && `border border-b-2 pb-0.5 border-red-600`}`}>
                    <Image src={VI} alt='IIT - Viện Công nghệ & Sáng tạo' width={20} height={20} />
                  </div>
                ) : (
                  <div className={`${params.lang === 'en' && `border border-b-2 pb-0.5 border-red-600`}`}>
                    <Image src={EN} alt='IIT - Viện Công nghệ & Sáng tạo' width={20} height={20} />
                  </div>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
