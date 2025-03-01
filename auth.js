
//This file is used to configure the authentication for the application and the database connection for the authentication  
// 1. import the NextAuth, MongoDBAdapter, and clientPromise from the respective packages   
import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongo.js";
import Resend from "next-auth/providers/resend";
import Google from "next-auth/providers/google";
// 2. configure the authentication for the application
const config ={
    providers: [
        Resend({
            apiKey: process.env.RESEND_KEY,
            from: "no-reply@resend.cinecraft.pro",
            name: "Email"
        }),
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    adapter: MongoDBAdapter(clientPromise),
}
// 3. export the handlers, signIn, signOut, and auth
export const { handlers, signIn, signOut, auth } = NextAuth(config)

