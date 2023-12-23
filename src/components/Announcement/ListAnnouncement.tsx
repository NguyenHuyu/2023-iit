import React from 'react'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import { Announcement_Response } from '@/types/announcement.types'
import slugify from 'slugify'
import { renderDate } from '@/utils/helper'

type Props = {
  data: Announcement_Response
  params: {
    lang: string
  }
}

export default async function Announcement({ data, params }: Props) {
  const { page } = await getDictionary(params.lang as 'vi' | 'en')
  return (
    <div className='md:w-[40%] lg:w-[30%] xl:w-[20%]'>
      <h1 className=' text-center font-medium mt-[35px] text-[#001355] md:mt-0 md:text-left text-lg md:text-2xl '>
        {page.home_page.notify}
      </h1>
      <div className='flex gap-[5px] px-[15px] mt-[15px] overflow-x-scroll snap-x md:flex-col md:overflow-y-scroll md:h-[calc(100%-45px)] md:px-0 md:overflow-x-hidden scrollbar_custom'>
        {data?.content.map((item) => (
          <div
            key={item.id}
            className='flex flex-col  relative min-w-[250px] max-w-[250px] shadow-2xl p-[10px] mb-[15px] snap-center bg-white md:mb-0 md:min-w-full md:max-w-[auto] md:shadow-none'
          >
            <Link
              href={`${params.lang}/${slugify(item.title, {
                locale: 'vi',
                lower: true
              })}-${item.id}.html`}
            >
              <h2 className='truncate-1 font-medium text-[20px] lg:whitespace-normal lg:truncate-2 cursor-pointer'>
                {item.title}
              </h2>
            </Link>
            <p className='truncate-3 text-[16px] text-justify mt-[10px]'>{item.description}</p>
            <Link
              href={`${params.lang}/${slugify(item.title, {
                locale: 'vi',
                lower: true
              })}-${item.id}.html`}
            >
              <Image
                src={item.imageUrl}
                className='mt-[10px] h-[130px] w-full object-cover'
                alt={item.title}
                width={10000}
                height={10000}
              />
            </Link>
            <div className='flex justify-center gap-[50px] mt-[4px] items-center'>
              <div className='text-[13px]'>{renderDate(item.createdAt)}</div>
            </div>
          </div>
        ))}

        <section className='bg-blue-100'>
          {/* <Pagination pages='page_announcements' pageSize={totalPage} /> */}
        </section>
      </div>
    </div>
  )
}
