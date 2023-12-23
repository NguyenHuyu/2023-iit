import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import type { Locale } from '@/i18n.config'
import { getUrlParams, optimizeSlugify } from '@/utils/helper'
import { getEventById } from '@/actions/event.action'

interface Props {
  params: {
    eventID: string
    lang: Locale
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ID = getUrlParams(params.eventID)
  const eventData = await getEventById(ID)

  return {
    title: eventData?.title,
    description: eventData?.description,
    keywords: eventData?.title,
    openGraph: {
      title: eventData?.title,
      description: eventData?.description,
      type: 'website',
      locale: 'vi_VN',
      url: `https://iit.siu.edu.vn/${params.lang}/${optimizeSlugify(
        eventData?.title || ''
      )}-tagiit-${eventData?.id}.html`,
      images: [
        {
          url: eventData?.imageUrl || '',
          width: 800,
          height: 600,
          alt: eventData?.title
        }
      ]
    }
  }
}

export default async function page({ params }: Props) {
  const ID = getUrlParams(params.eventID)
  const eventData = await getEventById(ID)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: eventData?.title,
    image: eventData?.imageUrl,
    description: eventData?.description
  }
  return (
    <>
      <main className=' mx-auto max-w-4xl px-4  shadow-lg text-justify py-4 '>
        <section className='py-4 space-y-2'>
          <h1 className='text-2xl shadow-sm p-2 text-[#f92a2a] text-center'>{eventData?.title}</h1>
          <p>{eventData?.description}</p>
          <Image
            src={eventData?.imageUrl || ''}
            alt={eventData?.title || ''}
            width={1000}
            height={1000}
            layout='responsive'
            objectFit='cover'
            priority={true}
            blurDataURL='blur'
          />
        </section>

        <div dangerouslySetInnerHTML={{ __html: eventData?.content || '' }}></div>
      </main>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
