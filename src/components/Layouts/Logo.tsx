import Link from 'next/link'
import React from 'react'
import SIU from '../../../public/assets/logosiu.png'
import IIT from '../../../public/assets/logoiit.png'
import type { Locale } from '@/i18n.config'
import Image from 'next/image'

interface LogoProps {
  params: {
    lang: Locale
  }
}

export default function Logo({ params }: LogoProps) {
  return (
    <div className='flex items-center md:gap-2'>
      <Link href={`/${params.lang}`}>
        <div className='flex items-center gap-1 md:gap-2'>
          <Image
            src={SIU}
            width={10000}
            height={10000}
            className='w-10 md:w-[80px] lg:w-[100px]'
            alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
          />
          <Image
            src={IIT}
            width={10000}
            height={10000}
            className='w-14 md:w-[80px] lg:w-[180px]'
            alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
          />
        </div>
      </Link>
    </div>
  )
}
