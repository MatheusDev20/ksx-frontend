
import { authenticate } from "@/app/api/services/auth"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (credentials?.email && credentials.password) {
          const { email, password } = credentials
          const res = await authenticate({ email, password })
          console.log(res)
          if (res) {
            return res.user
          }
          else return null
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
  },
  session: { strategy: 'jwt' }
})
