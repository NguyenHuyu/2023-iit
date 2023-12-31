import { getServerSession } from 'next-auth'
import '@/app/[lang]/globals.scss'
// import { NavigationMenuDemo } from '@/components/Layouts/NavbarAdmin'
import { authOptions } from '@/lib/authOption'
import { redirect } from 'next/navigation'
// import Providers from '@/context/Providers'

export const metadata = {
  title: 'Admin',
  description: 'Generated by Next.js'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)

  if (!session) redirect('/api/auth/signin')

  return (
    <section className='w-full bg-gradient-to-br from-yellow-100 to-blue-100 min-h-screen'>
      <div className='w-full bg-yellow-100 shadow-md p-4'>{/* <NavigationMenuDemo session={session} /> */}</div>
      <div>{children}</div>
    </section>
  )
}
