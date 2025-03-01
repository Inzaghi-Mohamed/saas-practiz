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
    // Add custom pages configuration
    pages: {
        signIn: '/auth/signin',
        error: '/auth/signin', // Add custom error page
    },
    // Set default callback URL after successful authentication
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Ensure we don't get stuck in a redirect loop
            if (url.includes('/auth/signin')) {
                return baseUrl + "/dashboard";
            }
            
            // Allows relative callback URLs
            if (url.startsWith("/")) {
                return `${baseUrl}${url}`;
            }
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) {
                return url;
            }
            
            return baseUrl + "/dashboard";
        },
        
        // Adding session callback to ensure authentication is properly handled
        async session({ session, user }) {
            if (session?.user) {
                session.user.id = user.id;
            }
            return session;
        },
        
        // Handle sign-in attempts
        async signIn({ user, account, profile }) {
            return true;
        }
    },
    // Enable debug in development
    debug: process.env.NODE_ENV === "development",
    // Account linking has been removed
}
// 3. export the handlers, signIn, signOut, and auth
export const { handlers, signIn, signOut, auth } = NextAuth(config)

