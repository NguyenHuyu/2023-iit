import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IIT - Viện Công nghệ & Sáng tạo',
    short_name: 'IIT - Viện Công nghệ & Sáng tạo',
    description: 'IIT - Viện Công nghệ & Sáng tạo - SIU',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: 'https://iit.siu.edu.vn/favicon.ico',
        sizes: '192x192',
        type: 'image/ico'
      },
      {
        src: 'https://iit.siu.edu.vn/favicon.ico',
        sizes: '512x512',
        type: 'image/ico'
      }
    ]
  }
}
