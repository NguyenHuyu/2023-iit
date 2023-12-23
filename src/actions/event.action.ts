'use server'

import { db } from '@/lib/database'
import { Event_Content_Response, Event_Response } from '@/types/event.types'

export async function getAllEvent({ currentPage, currentfilter }: { currentPage: string; currentfilter?: string }) {
  const result = await db.event.findMany()

  const pageSize = 10
  const page = parseInt(currentPage) || 1
  const startIndex = (page - 1) * pageSize
  const endIndex = page * pageSize

  const paginatedNews = result.slice(startIndex, endIndex)
  const totalPages = Math.ceil(result.length / pageSize)

  if (result.length === 0) {
    return {
      content: [],
      totalPages: 0,
      totalElements: 0,
      size: pageSize,
      page: page,
      sort: [],
      numberOfElements: 0
    }
  }

  const dataContent: Event_Content_Response[] = paginatedNews.map((item) => ({
    ...item,
    id: item.id.toString()
  }))

  const response: Event_Response = {
    content: dataContent,
    totalPages: totalPages,
    totalElements: result.length,
    size: pageSize,
    page: page,
    sort: [],
    numberOfElements: paginatedNews.length
  }

  return response
}

export async function getEventById(ID: string) {
  const result = await db.event.findUnique({
    where: {
      id: ID
    }
  })

  if (!result) {
    return null
  }

  return result
}
