import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import type { Locale } from '@/i18n.config'
import { getAnnouncementById } from '@/actions/announmencement.action'
import { getUrlParams, optimizeSlugify } from '@/utils/helper'

interface Props {
  params: {
    announcementID: string
    lang: Locale
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ID = getUrlParams(params.announcementID)
  const announcementData = await getAnnouncementById(ID)

  return {
    title: announcementData?.title,
    description: announcementData?.description,
    keywords: announcementData?.title,
    openGraph: {
      title: announcementData?.title,
      description: announcementData?.description,
      type: 'website',
      locale: 'vi_VN',
      url: `https://iit.siu.edu.vn/${params.lang}/${optimizeSlugify(
        announcementData?.title || ''
      )}-tagiit-${announcementData?.id}.html`,
      images: [
        {
          url: announcementData?.imageUrl || '',
          width: 800,
          height: 600,
          alt: announcementData?.title
        }
      ]
    }
  }
}

export default async function page({ params }: Props) {
  const ID = getUrlParams(params.announcementID)
  const announcementData = await getAnnouncementById(ID)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: announcementData?.title,
    image: announcementData?.imageUrl,
    description: announcementData?.description
  }
  return (
    <>
      <main className=' mx-auto max-w-4xl px-4  shadow-lg text-justify py-4 '>
        <section className='py-4 space-y-2'>
          <h1 className='text-2xl shadow-sm p-2 text-[#f92a2a] text-center'>{announcementData?.title}</h1>
          <p>{announcementData?.description}</p>
          <Image
            src={announcementData?.imageUrl || ''}
            alt={announcementData?.title || ''}
            width={1000}
            height={1000}
            layout='responsive'
            objectFit='cover'
            priority={true}
            blurDataURL='blur'
          />
        </section>

        <div dangerouslySetInnerHTML={{ __html: announcementData?.content || '' }}></div>
      </main>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
