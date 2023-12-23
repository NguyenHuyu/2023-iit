import React from 'react'
import type { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import CHE from '../../../../public/assets/che.png'
import CELSS from '../../../../public/assets/celss.png'
import CEBC from '../../../../public/assets/cebc.png'
import Typewriters from '@/components/Typewriter'
import Image, { StaticImageData } from 'next/image'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

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
      <div className='bg-[#F4F5FA] p-2 md:pb-10 rounded-xl w-full'>
        <div className='text-center text-2xl  md:text-4xl font-medium py-1 md:py-6'>
          <Typewriters text={page.home_page.title_center} />
        </div>
        <div className='hidden md:flex md:flex-row md:space-x-8 justify-center items-center'>
          {dataCenter.map((item) => (
            <div key={item.ref} className='bg-[#f4e4aa] rounded-xl md:max-w-[300px]'>
              <div className='flex flex-col p-2 rounded-xl bg-white shadow-xl translate-x-3 translate-y-3 w-96 md:w-auto'>
                <Image
                  src={item.urlImage}
                  alt={item.altImage}
                  className='w-[30rem] object-contain'
                  width={400}
                  priority={true}
                  height={400}
                />
                <div className='mt-4 font-semibold text-lg px-6'>{item.title}</div>
                <div className='flex justify-center'>
                  <button className='bg-[rgb(253,254,255)] px-2 py-1.5 rounded-lg font-semibold border border-[#F0F0F6] shadow-md mt-4 hover:shadow-2xl duration-300'>
                    <Link href={item.ref}>{page.home_page.read_more}</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ScrollArea className='md:hidden rounded-md border'>
          <div className='flex space-x-4 p-4'>
            {dataCenter.map((artwork) => (
              <figure key={artwork.ref} className='w-72'>
                <div className='overflow-hidden rounded-md'>
                  <Image
                    src={artwork.urlImage}
                    alt={artwork.altImage}
                    className='h-full w-fit object-cover'
                    width={400}
                    height={400}
                  />
                </div>
                <figcaption className='pt-2 text-xs  text-black'>
                  <div className=' font-semibold text-lg'>{artwork.title}</div>
                  <button className='bg-slate-800 px-2 py-1.5 text-white rounded-lg  font-medium bg- border border-[#F0F0F6] shadow-md mt-4 hover:shadow-2xl duration-300'>
                    <Link href={artwork.ref} className='line-clamp-1 text-xs font-normal'>
                      {page.home_page.read_more}
                    </Link>
                  </button>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      </div>
    </div>
  )
}
