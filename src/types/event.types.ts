export interface Event_Content_Response {
  id: string
  title: string
  imageUrl: string
  description: string
  content: string
  createdAt: string
  updatedAt: string
  deletedAt: string
}

export interface Event_Response {
  content: Event_Content_Response[]
  totalPages: number
  totalElements: number
  size: number
  page: number
  sort: any[]
  numberOfElements: number
}
