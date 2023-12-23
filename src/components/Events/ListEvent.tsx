import React from 'react'
import Image from 'next/image'
import type { Locale } from '@/i18n.config'

import { getDictionary } from '@/lib/dictionary'
import { Event_Response } from '@/types/event.types'
import Link from 'next/link'

import { optimizeSlugify, renderDate } from '@/utils/helper'

type Props = {
  data: Event_Response
  params: {
    lang: Locale
  }
}

export default async function Event({ data, params }: Props) {
  const { page } = await getDictionary(params.lang)
  const URL = `/${params.lang}/su-kien-sap-toi`

  return (
    <div className='flex justify-center mx-auto items-center md:max-w-[90rem] md:mt-[120px] lg:mt-0'>
      <div className='sm:-mt-20 xl:mt-0 md:w-[calc(80%+0.5rem)] lg:w-[calc(70%+0.5rem)]'>
        <div className='p-4 md:p-0 md:pb-4  bg-gray-100'>
          <h1 className='text-2xl font-medium text-center md:text-left text-black'>{page?.home_page.upcoming}</h1>
          <hr className='h-[0.2rem] bg-[#8dbffd]  mb-4' />
          <div className='h-[415px] sm:h-[35vh] overflow-scroll scrollbar_custom1'>
            {data.content?.map((item) => (
              <div key={item.id} className='flex justify-center gap-4 items-center bg-slate-50'>
                <div className='md:flex md:flex-row justify-between gap-1 mb-[15px] snap-center md:mb-0 w-full lg:flex-row  lg:h-[180px] 2xl:w-[100%] '>
                  <Image
                    src={item?.imageUrl}
                    alt={item?.title}
                    width={1000}
                    priority={true}
                    height={1000}
                    className='md:min-w-[200px] h-[150px] w-full object-cover lg:h-full lg:w-[200px] lg:p-[10px] lg:pr-0  hover:scale-105 duration-300'
                  />
                  <div className='flex flex-col p-[10px] w-[inherit] lg:w-full'>
                    <p className='text-justify  text-[13px] '>{renderDate(item?.createdAt)}</p>
                    <p className='text-justify font-medium text-[20px] truncate-1'>{item?.title}</p>
                    <span className=' text-[16px] truncate-4 text-justify'>{item?.description}</span>
                    <Link href={`${URL}/${optimizeSlugify(item.title)}-tagiit-${item.id}.html`}>
                      <button className='w-[90px] h-[35px] text-[13px] hover:bg-slate-200 mt-[5px] bg-white font-[600] border-b-[2px] border-[1px] rounded-[5px] hover:translate-x-1 duration-300'>
                        {page?.home_page.read_more}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
