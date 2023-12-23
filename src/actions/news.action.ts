'use server'

import { db } from '@/lib/database'
import { News_Content_Response, News_Response } from '@/types/news.types'

export async function getAllNews({ currentPage, currentfilter }: { currentPage: string; currentfilter?: string }) {
  const result = await db.news.findMany()

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

  const dataContent: News_Content_Response[] = paginatedNews.map((item) => ({
    ...item,
    id: item.id.toString()
  }))

  const response: News_Response = {
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

export async function getNewsById(ID: string) {
  const result = await db.news.findUnique({
    where: {
      id: ID
    }
  })

  if (!result) {
    return null
  }

  return result
}
