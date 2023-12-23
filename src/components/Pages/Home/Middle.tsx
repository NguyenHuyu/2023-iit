import React from 'react'
import type { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import CHE from '../../../../public/assets/che.png'
import CELSS from '../../../../public/assets/celss.png'
import CEBC from '../../../../public/assets/cebc.png'
import Typewriters from '@/components/Typewriter'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface MiddleProps {
  params: {
    lang: Locale
  }
}

interface DataCenterProps {
  urlImage: StaticImageData
  altImage: string
  title: string
  ref: string
}

export default async function Middle({ params }: MiddleProps) {
  const { page } = await getDictionary(params.lang)

  const dataCenter: DataCenterProps[] = [
    {
      urlImage: CHE,
      altImage: 'trung-tam-suc-khoe-moi-truong',
      title: page.home_page.title_center_health,
      ref: 'https://che.siu.edu.vn'
    },
    {
      urlImage: CEBC,
      altImage: 'trung-tam-khoi-nghiep',
      title: page.home_page.title_center_entrepreneurship,
      ref: 'https://siu.edu.vn'
    },
    {
      urlImage: CELSS,
      altImage: 'trung-tam-ki-nang-mem',
      title: page.home_page.title_center_leaning,
      ref: 'https://siu.edu.vn'
    }
  ]

  return (
    <div className='flex items-center justify-center flex-col bg-[#E5E5E5] '>
      <div className='bg-[#F4F5FA] p-10 rounded-xl w-full'>
        <div className='text-center text-4xl font-medium'>
          <Typewriters text={page.home_page.title_center} />
        </div>
        <div className='flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10'>
          {dataCenter.map((item) => (
            <div key={item.ref} className='bg-[#f4e4aa] rounded-xl md:max-w-[300px]'>
              <div className='flex flex-col p-10 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto'>
                <Image
                  src={item.urlImage}
                  alt={item.altImage}
                  className='w-[30rem] object-cover'
                  width={400}
                  layout='responsive'
                  objectFit='cover'
                  priority={true}
                  height={400}
                />
                <div className='mt-10 font-semibold text-lg'>{item.title}</div>
                <button className='bg-[#F4F5FA] px-2 py-1.5 rounded-lg  border border-[#F0F0F6] shadow-md mt-4 hover:shadow-2xl duration-300'>
                  <Link href={item.ref}>{page.home_page.read_more}</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
