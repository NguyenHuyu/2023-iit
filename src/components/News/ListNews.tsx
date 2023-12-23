import React from 'react'
import type { Locale } from '@/i18n.config'
import Image from 'next/image'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import { News_Response } from '@/types/news.types'
import { optimizeSlugify, renderDate } from '@/utils/helper'

type Props = {
  data: News_Response
  params: {
    lang: Locale
  }
}

export default async function News({ data, params }: Props) {
  const { page } = await getDictionary(params.lang)
  const URL = `/${params.lang}/tin-tuc`
  return (
    <div className='md:w-[40%] lg:w-[40%] xl:w-[50%] '>
      <h1 className='text-center text-2xl  font-medium text-black md:text-left'>{page.home_page.news}</h1>
      <div className='flex gap-[5px] px-[15px] mt-[15px] overflow-x-scroll snap-x md:flex-col md:overflow-y-scroll md:h-[calc(100%-45px)] md:px-0 md:overflow-x-hidden scrollbar_custom'>
        {data?.content.map((item) => (
          <div
            key={item.id}
            className='bg-white border flex flex-col shadow-2xl w-[250px] mb-[15px] snap-center md:mb-0 md:w-full md:shadow-none lg:flex-row lg:h-[180px] '
          >
            <Image
              src={item.imageUrl}
              alt='IIT - Viện Công nghệ & Sáng tạo'
              width={10000}
              height={10000}
              blurDataURL='blur'
              className='h-[150px] w-full object-cover lg:h-full lg:w-[200px] lg:p-[10px] lg:pr-0 hover:scale-105 duration-300 '
            />
            <div className='flex flex-col p-[10px] w-[inherit] lg:w-full '>
              <span className='truncate font-medium text-[12px] lg:whitespace-normal lg:truncate-1'>
                {renderDate(item.createdAt)}
              </span>
              <span className='truncate font-medium text-[20px] lg:whitespace-normal lg:truncate-1'>{item.title}</span>
              <span className='truncate-3 text-[16px] text-justify'>{item.description}</span>
              <Link href={`${URL}/${optimizeSlugify(item.title)}-tagiit-${item.id}.html`}>
                <button className='w-[90px] h-[35px] text-[13px] hover:bg-slate-200 mt-[5px] bg-white font-[600] border-b-[2px] border-[1px] rounded-[5px] hover:translate-x-1 duration-300'>
                  {page.home_page.read_more}
                </button>
              </Link>
            </div>
          </div>
        ))}
        <section className='bg-blue-100'>{/* <Pagination pages='page_news' pageSize={totalPage} /> */}</section>
      </div>
    </div>
  )
}
