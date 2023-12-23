export interface Announcement_Content_Response {
  id: string
  title: string
  imageUrl: string
  content: string
  description: string
  createdAt: string | Date
  updatedAt: string | Date
}

export interface Announcement_Response {
  content: Announcement_Content_Response[]
  totalPages: number
  totalElements: number
  size: number
  page: number
  sort: any[]
  numberOfElements: number
}
