'use server'

import { db } from '@/lib/database'

export async function getAllAnnounmencent({
  currentPage,
  currentfilter
}: {
  currentPage: string
  currentfilter?: string
}) {
  const result = await db.announcement.findMany()

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

  const response = {
    content: paginatedNews.map((item) => ({
      ...item,
      id: item.id.toString()
    })),
    totalPages: totalPages,
    totalElements: result.length,
    size: pageSize,
    page: page,
    sort: [],
    numberOfElements: paginatedNews.length
  }

  return response
}
