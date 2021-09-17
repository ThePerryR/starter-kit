import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '../lib/mongodb'

export default async function auth (req, res) {
  return await NextAuth(req, res, {
    adapter: MongoDBAdapter({
      db: (await clientPromise).db('myFirstDatabase')
    }),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    ]
  })
}