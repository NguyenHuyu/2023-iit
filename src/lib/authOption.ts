// eslint-disable-next-line @typescript-eslint/ban-ts-comment

import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { db } from '@/lib//database'

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Viện IIT',

      credentials: {
        username: { label: 'email', type: 'text', placeholder: '' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const { username, password }: any = credentials

        const user = await db.user.findUnique({
          where: {
            username
          } as any
        })
        if (user?.username === username && user?.password === password) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      }
    })
  ],
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: any) {
      const isSignIn = user ? true : false
      if (isSignIn) {
        token.username = user.username as any
        token.entry = user.entry as any
      }
      return token
    },
    async session({ session, token }: any) {
      return {
        ...session,
        user: {
          session,
          token
        }
      }
    }
  }
}
