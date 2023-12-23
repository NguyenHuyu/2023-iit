import React from 'react'
import type { Locale } from '@/i18n.config'

// server actions
import { getAllBanner } from '@/actions/banner.action'
import { getAllNews } from '@/actions/news.action'
import { getAllAnnounmencent } from '@/actions/announmencement.action'
import { getAllEvent } from '@/actions/event.action'

// components
import Featured from '@/components/Featured'
import News from '@/components/News/ListNews'
import Announcement from '@/components/Announcement/ListAnnouncement'
import Event from '@/components/Events/ListEvent'
import Middle from '@/components/Pages/Home/Middle'

interface Props {
  searchParams: {
    filter: string
    page_news: string
    page_announcements: string
    page_events: string
  }
  params: {
    lang: Locale
  }
}

export default async function page({ params, searchParams }: Props) {
  const banner = getAllBanner()

  const news = getAllNews({
    currentPage: searchParams.page_news,
    currentfilter: searchParams.filter
  })
  const announcement = getAllAnnounmencent({
    currentPage: searchParams.page_announcements,
    currentfilter: searchParams.filter
  })
  const event = getAllEvent({
    currentPage: searchParams.page_events,
    currentfilter: searchParams.filter
  })

  const [bannerData, newsData, announcementData, eventData] = await Promise.all([banner, news, announcement, event])

  return (
    <section className='min-h-screen'>
      {/**
       * Render list banner
       * params: banner data
       */}
      <Featured banner={bannerData} />

      {/**
       * Render list data center
       * params: params
       */}
      <Middle params={params} />

      <section className='flex flex-col mt-[30px] md:flex-row md:justify-center md:gap-2 md:h-[80vh] lg:pb-[100px] xl:pb-[50px] lg:max-w-[90rem]  mx-auto '>
        {/**
         * Render list news data
         * params: params and news data
         */}
        <News params={params} data={newsData} />
        {/**
         * Render list announcement data
         * params: params and announcement data
         */}
        <Announcement params={params} data={announcementData} />
      </section>
      {/**
       * Render list event data
       * params: params and event data
       */}
      <Event params={params} data={eventData} />
    </section>
  )
}
