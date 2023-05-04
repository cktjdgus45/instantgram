import { addUser } from '@/service/user';
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
        async session({ session, token }) {
            const user = session?.user;

            if (user) {
                session.user = {
                    ...user,
                    username: user.email?.split('@')[0] || '',
                    id: token.id as string,
                }
            }
            return session
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async signIn({ user: { id, name, email, image } }) {
            if (!email) {
                return false;
            }
            addUser({
                id,
                username: email.split('@')[0],
                name: name || '',
                email,
                image: image || '',
            });
            return true;
        },
    }
}

export default NextAuth(authOptions)