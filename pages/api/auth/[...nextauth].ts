import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        })
    ],
    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        async session({ session }) {
            const user = session?.user;
            if (user) {
                session.user = {
                    ...user,
                    username: user.email?.split('@')[0] || '',
                }
            }
            return session
        },
    }
}

export default NextAuth(authOptions)