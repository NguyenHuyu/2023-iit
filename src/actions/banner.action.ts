'use server'

import { db } from '@/lib/database'

export async function getAllBanner() {
  const result = await db.banner.findMany()
  return result.map((item) => {
    return {
      ...item,
      id: item.id.toString() // Convert id to string if needed
    }
  })
}
