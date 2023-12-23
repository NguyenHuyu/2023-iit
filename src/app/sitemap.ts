import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://iit.siu.edu.vn',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    },
    {
      url: 'https://iit.siu.edu.vn',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8
    }
  ]
}
