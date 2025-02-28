import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { client } from "@/lib/mongodb";

const config ={
    providers: [],
    adapter: MongoDBAdapter(client),
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)

