import { getNewsById } from '@/actions/news.action'
import { getUrlParams, optimizeSlugify } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import type { Locale } from '@/i18n.config'

interface Props {
  params: {
    newsID: string
    lang: Locale
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ID = getUrlParams(params.newsID)
  const newsData = await getNewsById(ID)

  return {
    title: newsData?.title,
    description: newsData?.description,
    keywords: newsData?.title,
    openGraph: {
      title: newsData?.title,
      description: newsData?.description,
      type: 'website',
      locale: 'vi_VN',
      url: `https://iit.siu.edu.vn/${params.lang}/${optimizeSlugify(
        newsData?.title || ''
      )}-tagiit-${newsData?.id}.html`,
      images: [
        {
          url: newsData?.imageUrl || '',
          width: 800,
          height: 600,
          alt: newsData?.title
        }
      ]
    }
  }
}

export default async function page({ params }: Props) {
  const ID = getUrlParams(params.newsID)
  const newsData = await getNewsById(ID)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: newsData?.title,
    image: newsData?.imageUrl,
    description: newsData?.description
  }
  return (
    <>
      <main className=' mx-auto max-w-4xl px-4  shadow-lg text-justify py-4 '>
        <section className='py-4 space-y-2'>
          <h1 className='text-2xl shadow-sm p-2 text-[#f92a2a] text-center'>{newsData?.title}</h1>
          <p>{newsData?.description}</p>
          <Image
            src={newsData?.imageUrl || ''}
            alt={newsData?.title || ''}
            width={1000}
            height={1000}
            layout='responsive'
            objectFit='cover'
            priority={true}
            blurDataURL='blur'
          />
        </section>

        <div dangerouslySetInnerHTML={{ __html: newsData?.content || '' }}></div>
      </main>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
